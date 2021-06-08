import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FireBaseConfig';

export const initLoginFrameWork = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
}

/* Yor given data send it form here to Google...
   this is actual data flow pipeline */

// Create New User ##########################################
export const createUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.userSuccess = true;
            newUserInfo.userError = '';
            //console.log('successfully - account create | From FireBaseManager');
            if (res.email !== '') {
                alert('Your account has been successfully created.');
            }
            return newUserInfo;
        })
        .catch(error => {
            console.log(error);
            const newUserInfo = {};
            newUserInfo.userSuccess = false;
            newUserInfo.userError = error.message;
            if (newUserInfo.userError) {
                alert(newUserInfo.userError);
            }
            return newUserInfo;

        });
}


// For Normal Mail Login ##########################################
export const logInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const userInfo = res.user;
            userInfo.userSuccess = true;
            userInfo.userError = '';
            console.log('successfully - Login | From FireBaseManager');
            return userInfo;
        })
        .catch(error => {
            const userInfo = {};
            userInfo.userSuccess = false;
            userInfo.userError = error.message;
            console.log(error);
            return userInfo;
        });
}

// For All loginProviderWebsite ##############################################
export const loginProviderWebsite = (provider) => {
    return firebase.auth()
        .signInWithPopup(provider)
        .then(result => {
            // The signed-in user info.
            var user = result.user;
            console.log('ALL Login | From FireBaseManager');
            return user;
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}