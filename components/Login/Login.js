import React, { useEffect, useState } from 'react'
import styles from "./Login.module.css";
import StatusBar from '../StatusBar/StatusBar';
import SocialUI from '../SocialUI/SocialUI';
import Link from 'next/link';
// import Image from 'next/image';
const Login = () => {
    const [selected,setSelected]=useState();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const handleEmailChange = (e) => {
      const newEmail=e.target.value;
      setEmail(newEmail);

      if(!newEmail.includes('@')) {
        setEmailError('Email must contain @ symbol');
      }
      else{
        setEmailError('');
      }
    };
    const alertHandler=()=>{
      if(emailError)
      {
        alert('Email must contain @ symbol')
      }
      else{
        return;
      }
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const isFormValid = email.trim() !== '' && password.trim() !== '' &&emailError==='';

    const loginButton = isFormValid ? (
<Link href="/message">
  <button className={`${styles.btn} ${styles.active}`}>Login</button>
</Link>
    ) : (
<button className={styles.btn} disabled>Login</button>

    );


  return (
    <>
    <StatusBar />
<div className={styles.container}>
    <div className={styles.login}>
        Log in to Mokx
    </div>
    <div className={styles.stroke}></div>
    <div className={styles.welcome}>Welcome back! Sign in using your social account or email to continue us</div>
   <div className={styles.socialUi}>
    <SocialUI />
</div>
<div className={styles.orUi}>
<div className={styles.line}></div>
  <span className={styles.orText}>OR</span>
  <div className={styles.line}></div>
</div>
<form>
<div className={styles.email}>
    Your email
    <input className={styles.input} type="text" value={email} onChange={handleEmailChange} />
 <div className={styles.line}/>
</div>
<div className={styles.password}>
    Password
    <input  className={styles.input} type="password" value={password} onChange={handlePasswordChange} />

 <div className={styles.line}/>
</div>
</form>
  
     {/* <Link href="/message">
     <button  onClick={alertHandler} className={`${styles.btn} ${isFormValid ? styles.active : ''}`}    >Login</button>
     </Link>    */}

{loginButton}
        <span className={styles.forgot}>Forgot Password?</span>
        </div>
    </>
   
  )
}

export default Login