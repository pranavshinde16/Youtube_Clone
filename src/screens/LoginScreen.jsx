import React from 'react'
// import { Link } from "react-router-dom";
import './loginScreen.css'
import { auth, provider,signInWithPopup} from '../firebase'
const LoginScreen = () => {

   const handleAuth = () => {
      signInWithPopup(auth, provider).then((result) => {
         // console.log(result)
         const name = result.user.displayName;
         const email = result.user.email;
         const profilePic = result.user.photoURL;

         localStorage.setItem("name", name);
         localStorage.setItem("email", email);
         localStorage.setItem("profilePic", profilePic);
      }).catch((error) => {
         console.log(error)
      })
   }
   return (
      <div className='login drop-shadow-xl'>
         <div className='login__container'>
            <h2>Youtube Clone :<span style={{ color: "#aaa" }}> by Pranav Shinde</span></h2>
            <img
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               alt=''
            />
            <button onClick={handleAuth}>Login With google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
         </div>
      </div>
   )
}

export default LoginScreen