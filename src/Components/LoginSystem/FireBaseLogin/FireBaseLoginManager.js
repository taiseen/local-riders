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
            console.log('successfully - account create | From FireBaseManager');
            return newUserInfo;
        })
        .catch(error => {
            console.log(error);
            const newUserInfo = {};
            newUserInfo.userSuccess = false;
            newUserInfo.userError = error.message;
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


// For Google ##############################################
export const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then(result => {
            // The signed-in user info.
            var user = result.user;
            console.log('Google | From FireBaseManager');
            return user;
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}


// For Facebook ##############################################
export const faceBookLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            // The signed-in user info.
            var user = result.user;
            console.log('FaceBook | From FireBaseManager');
            return user;
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}


// For GitHub ##############################################
export const gitHubLogin = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            // The signed-in user info.
            var user = result.user;
            console.log('GitHub | From FireBaseManager');
            return user;
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}


export const logOut = () => {
    return firebase.auth().signOut()
    .then(result => {
        const user = result.user;
        return user ;
        
    }).catch(error => {
        console.log(error);
    });
}