import React from 'react'
import styles from "./StatusBar.module.css"

import Image from 'next/image'
const StatusBar = ({color}) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
        <div className={styles.Frame}>
            <span>9:41</span>      
    </div>
    <div className={styles.emojis}>
      
        <Image src="/images/Exclude (1).png" width={17} height={10} />
        <Image src="/images/Exclude.png" width={15} height={11}/>
        <Image src="/images/Group.png" width={24} height={11}/>

    </div>


    </div>
  )
}

export default StatusBar