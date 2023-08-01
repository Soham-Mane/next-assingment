import React from 'react'
import styles from "./Message1.module.css";
import StatusBar from '../StatusBar/StatusBar';
import Image from 'next/image';
import Header from '../Header/Header';
import Link from 'next/link';
const Message1 = () => {
  return (
    <>
 
       <div className={styles.container}>
      <Header/>
      
      <div className={styles.rectangle1}>
    <Image src="/images/Rectangle 1092.png" width={44} height={44} />
   </div>
   <div className={styles.Group360}>
    <span>🙏 Namaste!  I’m Arya, your AI Vedic help.  I'm here to provide insights from Vedas for daily life concerns. </span>
<span>Whether you seek guidance on mantras, general life advice, or specific Vedic interpretations, I’m here to assist you.</span>
   </div>
       <div className={styles.queries}>
       <Image src="/images/Vector.png" width={19} height={21}  />
         <span>You can ask queries like:</span>
       </div>
       
       <div className={styles.box1}>What is the mantra in Rigveda 10.2.3?</div>
       <div className={styles.box2}>What are the prescribed Vedic remedies for snake bites?</div>
       <div className={styles.box3}>Can you tell me the significance of the Gayatri Mantra?</div>
  <div className={styles.limi}>
    <Image src="/images/Group (1).png" width={15} height={12}  />
  Limitation: May struggle with complex queries.

  </div>
  <div className={styles.Group364}>
   <div className={styles.rectangle}>
    <Image src="/images/Rectangle 1092.png" width={44} height={44} />
   </div>
<div className={styles.chat}>
  <span>Let your curiosity guide you; wishing you blessings and enlightenment 🕉️</span>

  </div>
  <div className={styles.timeContainer}>
    09:25 AM
      </div>
  </div>
  <div className={styles.Frame}>
    <input placeholder='Write your message'  />

    <Link href="/message2">

    <Image src="/images/send.png" className={styles.img1} width={24} height={24} />
    </Link>
   
    <Image src="/images/microphone-2.png" className={styles.img2} width={24} height={24} />
  </div>

    </div>

</>
)
   
 
}

export default Message1