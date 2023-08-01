import React,{useState,useEffect} from 'react'
import Splash from '@/components/Splash/Splash';
import Onboarding from '@/components/Onboarding/Onboarding';
const index = () => {
    const [secondPage,setSecondPage]=useState(false);

  useEffect(()=>{
const timeout=setTimeout(()=>{
  setSecondPage(true);
},3000);

return ()=> clearTimeout(timeout);
  },[]);
  return (
    <div>
     {!secondPage ? <Splash/> : <Onboarding/>}
    </div>
  )
}

export default index
