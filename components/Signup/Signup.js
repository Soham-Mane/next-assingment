import React, { useState } from 'react'
import styles from "./Singup.module.css";
import StatusBar from '../StatusBar/StatusBar';
import Image from 'next/image';
import Link from 'next/link';
const Signup = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [cpassword,setCpassword]=useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const alertFunction=()=>{
    if(isFormVaild && isEmailValid===true)
    alert("New account has been created");
    else
    alert("Please enter all details to proceed!!")
  }
  const nameHandler=(e)=>{
    setName(e.target.value)
  }
  const emailHandler=(e)=>{
    setEmail(e.target.value);
    setIsEmailValid(e.target.value.includes('@'));

  }
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }
  const cpasswordHandler=(e)=>{
    setCpassword(e.target.value)
  }
  const checkEmailValidity = (e) => {
    // e.preventDefault();
    setIsEmailValid(email.includes('@'));
  };

  // const isEmailValid=email.includes('@');
  const isFormVaild= name.trim()!=='' && email.trim()!=='' && password.trim()!=='' && cpassword.trim()!==''
  const handleCombineClick=()=>{
    alertFunction();
    checkEmailValidity();

  }
  return (
    <>
    <StatusBar/>
    <div className={styles.container}>
      <Image src="/images/Back (1).png" width={24} height={24} className={styles.back} />
        {/* <img src={logo} className={styles.logo} /> */}
        <Image src="/images/MOkx logo 1.png" width={72} height={64} className={styles.logo} />
        <span className={styles.sign}>Sign up with Email</span>
        <span className={styles.enter}>Enter your  details and dive into a realm of ancient wisdom! 💫</span>
     <div className={styles.details}>

      <div  className={styles.info}>Enter name
      <input className={styles.input} onChange={nameHandler} />
      <div className={styles.line}/>
      </div>


      <div className={styles.info}>Enter Email
      <input className={styles.input} onChange={emailHandler} value={email}/>
      {/* <div className={`${styles.line}  ${!isEmailValid && styles.invalid}`} /> */}

      <div className={styles.line}/>
      </div>
      {!isEmailValid && <p className={styles.invalid}>Invalid email address</p>}
     


      <div className={styles.info}>Enter Password
      <input className={styles.input} onChange={passwordHandler} />
      <div className={styles.line}/>
      </div>
      <div className={styles.info}>Confirm password
      <input className={styles.input} onChange={cpasswordHandler} />
      <div className={styles.line}/>
      </div>

     </div>

     <button className={styles.btn} onClick={handleCombineClick}>

     <span>Create an account</span>
  
    
     </button>
       
</div>
    </>
    
  )
}

export default Signup