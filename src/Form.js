import React from "react";
import './form.css'
import picture from './bicycle.jpg'

function form_login() {
    return (
      <div> 
        <div className="form">
      <form>
        <div className="back">
        </div>
        <div className="shop">
         <p>Eddieshop</p>
        </div>
       <h1>Welcome back</h1>
        <label className="Email" for="fname">Your email</label> <br></br>
        <input type="email" id="mail" placeholder="name@domain.com"/> <br></br>
        <label className="pswd">Password</label> <br></br>
        <input  type="password" id="passwad" placeholder="atleast 8 characters"/> <br></br>
<br></br>
         <div className="check">
        <input type="checkbox" id="keep" name="Keep me logged in" value="Keep me logged in"/>
        <label className="keep" >keep me logged in</label> 
        </div>

         <p className="pass">forgot Password?</p>
         <button className="btn" type="button">login</button>
         <div className="or">
         <p>_______or_______</p>
         </div>
         <div className="socials">
         <div className="facebook">
         <i className="facebook" class="fa-brands fa-facebook"></i>
         </div>
          <div className="google" >
          <i className="google" class="fa-brands fa-google"></i>

          </div>
          <div className="insta">
          <i className="insta" class="fa-brands fa-instagram"></i>

          </div>

         </div>
         <div className="sign">
         <p>Don't have an account? <span>Sign up</span> </p>

         </div>
         <img src={picture} alt='./bicycle.jpg'></img>
         </form>
      </div>
      </div>
    )
  }
  
  export default form_login
