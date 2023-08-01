import React from 'react'
import styles from "./Header.module.css"
import StatusBar from '../StatusBar/StatusBar';

import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return ( 
      <div className={styles.rectangle81}>
      <StatusBar/>
      <div className={styles.back}>
<Link href="/message">
<Image src="/images/Back (1).png" width={24} height={24} />

</Link>
  </div> 
<div className={styles.logo}>
<Image src="/images/Rectangle 1092.png" width={44} height={44} />
  </div> 
  <Image src="/images/Ellipse 385.png" width={8} height={8} className={styles.online} />
  <div className={styles.arya}>Arya</div>
  <div className={styles.hindi}>
  <Link href="/message2" >
    <span className={styles.span1}>A/</span>
    </Link> 

  <Link href="/message3" >
    <span className={styles.span2} style={{ textDecoration: 'none' }}>क</span>
   </Link>  
  </div>
  <div className={styles.vedic}>Vedic AI Bot</div>
   
   </div>

  )
}

export default Header
