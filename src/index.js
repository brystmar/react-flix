import React from "react"
import ReactDOM from "react-dom"
import "./normalize.css"
import { GlobalStyles } from "./global-styles"
import { FirebaseContext } from "./context/firebase"
import { firebaseConfig } from "./constants/firebaseConfig"
import firebase from "firebase/app"
import "firebase/analytics"
import "firebase/auth"
import "firebase/firestore"
import App from "./App"

// Initialize Firebase using our config
firebase.initializeApp(firebaseConfig);
firebase.auth();

// Initialize the Firebase analytics
// firebase.analytics();

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase: firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
