import { Typography } from "@material-tailwind/react";

    import img from '../assets/Mask group.png'
    import frame from '../assets/frame.png'
    import google from '../assets/google.png'
    import store from '../assets/store.png'

 
export default function Payments() {
  return (
   <div className="bg-payment relative pb-20">

   <div className="absolute">
    <img src={frame} alt="img" className="ml-28"/> 
   
   </div>

    <div className="grid lg:grid-cols-1 2xl:grid-cols-2">

        <div className="flex flex-col justify-center items-center">
            <div >
                <Typography className="payment-head mt-36 mx-auto" >
                    <span className="payment-head-1 "> Free forever 
                        for your </span> 
                        <span className="payment-head-2">
                        salary
                        payment
                        </span> 
                        <Typography className="payment-text pt-5 pb-3 "> Subscribe to the Eazilife today</Typography>

                 </Typography>
        

            </div>
            
        
        <div className="flex gap-4 ">
            <div>
                <img src={google} alt="" className="w-40 h-16"/>
            </div>

            <div>
                <img src={store} alt="" className="w-40 h-16" />
            </div>

        </div>
        </div>

        
        

        <div className="pt-28 ">
            <img src={img} alt="" className="mx-auto image-responsive" /> 
        </div>

    </div>
        
        
   </div>
  );
}