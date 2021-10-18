import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    const signInUsingGithub = () => {
        setIsLoading(true);
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
    };

    const handleEmail = e => {
        setEmail(e.target.value);
    };
    const handlePassword = e => {
        setPassword(e.target.value);
    };
    const signUpUsingEmailPassword = () => {
        // console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            verifyEmail();
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    };
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {})
    };

    const signInUsingEmailPassword = () => {
        // console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })  
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
    };

    return {
        user,
        signInUsingGoogle,
        signInUsingGithub,
        handleEmail,
        handlePassword,
        signUpUsingEmailPassword,
        signInUsingEmailPassword,
        error,
        logOut,
        isLoading,
    };
};

export default useFirebase;
