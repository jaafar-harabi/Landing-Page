import { Typography, Card,
     } from "@material-tailwind/react";

    


    

 
export default function How() {
  return (
   <div className="indiv" >


    <Typography className="text-center indiv-head">
    For Individuals and Businesses
    </Typography>

    <Typography className="text-center pb-10"> 
    Join 200+ businesses using Eazipay's easy solution.
    </Typography>


   
        
        <div className="relative flex pb-10 card-rs ">
            <Card className="    card-1  card ">
                <Typography  className="card-title1 pb-5 " >
                Tamper-proof Payroll for LIfe
                </Typography>
                <Typography className="pb-3 card-body">
                Your staff payroll history is kept in one place forever.
                </Typography>
                <Typography  className="pb-3 card-body" >
                No more excel sheet or manual records.
                </Typography>
                <Typography  className="card-body" >
                Download your payroll history anytime you need it.
                </Typography>
            </Card>

            <Card className="absolute  text-white  card-2 card  ">
                <Typography className="card-title1 pb-5" >
                All Payroll, Anytime Anywhere
                </Typography>
                <Typography className="pb-3 card-body" >
                Wherever you are Eazipay has got you covered on ALL your Payroll tasks.
                </Typography>
                <Typography  className=" card-body">
                Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!
                </Typography>
           
            </Card>

            <Card className="absolute  text-white card-3  card ">
                <Typography className="card-title1 pb-5 ">
                Payroll in Seconds
                </Typography>
                
                <Typography  className="card-body pb-3" >
                Never again wil you spend more than 2 minutes on payroll.
                </Typography>
                <Typography  className="card-body pb-3" >
                Just click on your staff annd bulk-pay them at once.
                </Typography>

                <Typography className="card-body" >
                Payment is done permanently.
                </Typography>
            </Card>
    </div>

    <Typography className="text-center indiv-text5 mx-auto">
    <span className="indiv-text2"> We are happy to answer your queries. Please, reach us at  </span> <span className="indiv-text3">hello@myeazipay.com</span>  <span className="indiv-text2" >and expect our response shortly after.</span> 
    </Typography>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,160C640,160,800,192,960,208C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
  );
}