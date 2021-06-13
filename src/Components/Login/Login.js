import React, { useContext, useState } from 'react';
import './Login.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'
import { authContext } from '../../App';
import {useHistory,  useLocation } from "react-router-dom";

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(authContext)
    const  history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

   
    const [hasAccount, setHasAccount] = useState(false)
    const [newUser, setNewUser] = useState({})
    const handleBlur =(e)=> {
        const newInfo = {...newUser};
        newInfo[e.target.name] = e.target.value
        setNewUser(newInfo)
    }


    const handleSignUp =()=> {
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((result) => {      
          var {displayName, email} = result.user;     
          const signedInUser = {name: displayName, email}    
            setLoggedInUser(signedInUser)
              storeAuthToken();
            history.replace(from)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage)
          
        });
    }
    const handleSignIn =() => {
        firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
        .then((result) => {         
            var {displayName, email} = result.user;     
          const signedInUser = {name: displayName, email}    
            setLoggedInUser(signedInUser)      
            storeAuthToken();
          history.replace(from)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage)
        });
    }

 
    const  handleGoogleSignIn =()=> {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {         
         var {displayName, email} = result.user;     
          const signedInUser = {name: displayName, email}    
            setLoggedInUser(signedInUser)
            storeAuthToken();
          
        }).catch((error) => {           
            var errorCode = error.code;
            var errorMessage = error.message;            
            var email = error.email;            
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
            
        });
    }
    const storeAuthToken =() => {
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken)
            history.replace(from)
        }).catch(function(error) {

          });
    }
    console.log(loggedInUser.email);
    return (
        <div className="main">
            <div className="login-box">               
                <div className="container row">
                    <div className="col-md-10 col-sm-8 m-auto"  id="main-form">   
                     <div className="form-group mb-3">
                            <input onBlur={handleBlur} type="email" name="email"  className="form-control" placeholder="Email/Username" />
                        </div>
                        <div className="form-group mb-3">
                            <input onBlur={handleBlur}  type="password" name="password"  className="form-control" placeholder="Password" />
                        </div>
                      {
                         hasAccount ?
                        <div className="form-group">
                            <button id="btn" onClick={handleSignUp}>Sign Up</button>
                            <p>Already have an account? <button onClick={() => setHasAccount(!hasAccount)}>Sign In</button></p> 
                         </div> :  
                            <div className="form-group">
                            <button id="btn" onClick={handleSignIn}>Sign In</button>
                            <p>Don't have an account?  <button onClick={() => setHasAccount(!hasAccount)}>Sign Up</button></p>
                            </div>
                    }
                    </div>
                  
                    <div>
                        <p  className="or">OR</p>
                        <hr/>
                    </div>
                        <div className=" col-md-10 m-auto"> 
                      <button id="btn" onClick={handleGoogleSignIn}> Continue with Google</button>
                  </div>
            </div>
        </div>
     </div>
    );
};

export default Login;