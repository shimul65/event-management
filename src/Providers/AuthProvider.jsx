import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { createContext } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {


    // Sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signed in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }





    const authInfo = {
        createUser,
        signIn
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