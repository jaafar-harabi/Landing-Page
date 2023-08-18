import { Typography } from "@material-tailwind/react";

import bg from '../assets/BG.png'
import phone from '../assets/phone.png'
import step1 from '../assets/1.png'

    

 
export default function How() {
  return (
   <div className="pb-24">



    <Typography className="text-center how-head" >
            How Eazipay Works
    </Typography>

    <Typography className="text-center how-text pb-16">
        Get started in 3 simple steps.
    </Typography>
    <div className="text-center">
    <img src={bg} alt="" className="absolute bg mt-24 hidden 2xl:block "  />

    </div>
   
        <div className="grid lg:grid-cols-1 2xl:grid-cols-2  mx-20">

            
            
            <div >
                    
                    <img  src={phone} alt="" className="phone mx-auto image-responsive" />
            </div>
                


            

            <div >
                <img  src={step1} alt="" className="mx-auto hidden 2xl:block" />
                
            </div>

        </div>
        
        
   </div>
  );
}