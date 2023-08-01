import React from 'react'

import Image from 'next/image'
import styles from "./SocialUI.module.css"
const SocialUI = () => {
  return (
    <div className={styles.socialUi}>
    <div className={styles.Group}>
        <Image src="/images/Group 458 (1).png"  width={48} height={48} />
    </div>
    <div className={styles.Group}>
    <Image src="/images/Group 459 (1).png" width={48} height={48} />
    </div>
    <div className={styles.Group}>
    <Image src="/images/Group 460 (1).png" width={48} height={48} />
    </div>
</div>
  )
}

export default SocialUI