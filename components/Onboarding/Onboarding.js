import React from 'react';
import Image from 'next/image';
import styles from "./Onboarding.module.css"
import StatusBar from '../StatusBar/StatusBar';
import SocialUI from '../SocialUI/SocialUI';
import Signup from '../Signup/Signup';
import Link from 'next/link';
const Onboarding = () => {
  return (
    <>
<StatusBar color="purple"  />
<div className={styles.container}>
    <Image src="/images/cartoon-image-of-indian-girl-doing-namaste 1.png" width={375} height={304} />
<div className={styles.rectangle}>Arya, Vedic AI Guide</div>
<div className={styles.discover}>
    Discover the timeless wisdom of  
</div>
<span className={styles.ved}>the Vedas.</span>
<div className={styles.Signup}>
Sign up and <span>journey through ancient knowledge with Arya 🌟</span> 
</div>
<div className={styles.socialUi}>
    <div className={styles.Group}>
        <Image src="/images/Group 458.png" width={48} height={48}  />
    </div>
    <div className={styles.Group}>
    <Image src="/images/Group 459.png" width={48} height={48}   />
    </div>
    <div className={styles.Group}>
    <Image src="/images/Group 460.png" width={48} height={48}  />
    </div>
   
</div>
<div className={styles.orUi}>
<div className={styles.line}></div>
  <span className={styles.orText}>OR</span>
  <div className={styles.line}></div>

</div>
<Link href="/signup">
<button   className={styles.btn}>Sign up with mail</button>

</Link>
<div className={styles.existing}>
  Existing account?  <Link href="/login"><span>Login </span> </Link>  

    

</div>
</div>
    </>
 
  )
}

export default Onboarding