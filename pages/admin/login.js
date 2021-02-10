import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useRouter } from "next/router";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { auth } from "../../firebase";
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/admin",
    // We will display Google as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
function LogIn() {
    const router = useRouter();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                router.push("/admin");
            } else {
                console.log("not signed in ");
            }
        });
    }, []);
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-center text-lg font-medium title-font mb-5">
                            Sign In
                        </h2>
                        <StyledFirebaseAuth
                            className="mb-4"
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default LogIn;
