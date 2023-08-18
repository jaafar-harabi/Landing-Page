import { Typography, 
    
    Button, } from "@material-tailwind/react";

    import dash from '../assets/dash.png'
    import google from '../assets/google.png'
    import store from '../assets/store.png'
    

    

 
export default function Home() {
  return (
   <div className="home-bg">
            <div className="grid lg:grid-cols-1 md:lg-cols-1 xl:grid-cols-2  pt-20" >

                <div className="text-center pt-14 ">

                    <div className="flex flex-col text-center">
                        <Typography className="text-h mx-auto pb-7">
                            <span className="head-1" >Run your</span>  <span className="head-2" >payroll </span>  <span className="head-3" >easily </span>   <span className="head-1" >in</span> <span className="head-4" >  seconds</span>
                        </Typography> 

                        <Typography className="home-par mx-auto "> 
                        We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.
                        
                        <div className="pb-10 pt-5">
                        <Button className="home-button rounded-full mx-auto home-btn "  >
                                                Start Using Free, Forever
                        </Button> 
                        </div>
                        

                        <span className="home-par2 mt-7 " > Download the Eazipay App </span> 
                        <div className="flex gap-4 mt-5 btn-responsive">
                        <img src={store} alt="" className="w-40 h-16 " />
                        <img src={google} alt="" className="w-40 h-16"  />
                        </div>
                        

                        
                        </Typography>

                    
                        </div>
                            
                        

                </div>

                <div >

                <img src={dash}  alt=""  className="hidden xl:block" />

                    
                </div>

            </div>


    
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F0F7EB" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,256C640,277,800,299,960,282.7C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        
   </div>
  );
}