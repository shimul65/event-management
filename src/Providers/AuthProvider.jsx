import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {


    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // Sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    





    const authInfo = {
        createUser,
        signIn,
        googleLogin,
        githubLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
};