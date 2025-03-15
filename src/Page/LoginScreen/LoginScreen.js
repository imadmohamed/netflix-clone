import { useState } from "react";
import './LoginScreen.css'
import SignInScreen from '../SignInScreen/SignInScreen'

const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginscreen'>
    <div className='loginscreen_background'>
        <img className='loginscreen_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt=''
        />

        <button className='loginscreen_button' onClick = {() => setSignIn(true)}>Sign In</button>
        
    <div className='loginscreen_gradient'/>
    </div>

    <div className='loginscreen_body'>
        {signIn ? (
                <SignInScreen/>
            ) : (
                <>
                <h1>Unlimited flims, TV programmes and more. </h1>
                <h2>watch anywhare. Cancel at any time.</h2>
                <h3>Ready to watch? Enter Your email to create or restart your membership.</h3>

                <div className='loginscreen_input'>
                    <form>
                        <input type='email' placeholder="Email Address"/>
                        <button
                        onClick={()=> setSignIn(true)}
                        className='loginscreen_getstarted'
                        >
                            GET STATER
                        </button>
                    </form>
                </div>
                </>
            )}
    </div>
    </div>
  )
}

export default LoginScreen

