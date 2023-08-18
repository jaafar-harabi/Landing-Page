import { Typography, Input,Card,
    
    CardBody,
    
    
    Button, } from "@material-tailwind/react";
    import cntc from '../assets/cntc.png'
    import indiv from '../assets/indiv.png'
    

 
export default function Contact() {
  return (
   <div className="relative">
   
    <div className="absolute ">
    <img  className=" mt-20 mr-0" src={cntc}  alt="img  " /> 
  
    </div>
    
 
   
        <div className="grid lg:grid-cols-1 xl:grid-cols-2">
            <div className="mt-64 ">
            <Typography variant="h5"   className="mb-2 contact-title text-center mx-auto">
            Get an Exclusive 
            Demo of Eazipay
            
            </Typography>

        <Typography variant="h5"   className="mb-2 contact-text text-center mx-auto">
        Our greatest priority is to put you and your business first. Let’s show you how we can help.
        </Typography>
            

            </div>

            <div >
           
            

            <Card shadow={false} className="w-96  shadow-gray-600 mt-28 mx-auto shadow-lg">
      
      <CardBody>
        <Typography variant="h5"   className="mb-2 card-title text-center">
            First things first
        </Typography>
        <Typography className="text-center w-80 justify-center mx-auto">
        We want to serve you better. Tell us a bit about yourself or company
        </Typography>

        <div className="flex border-class rounded-lg p-2 gap-3 w-72 mx-auto">

            <Button size="sm" className="button-1 text-white w-full  rounded-md capitalize ">Individual</Button>
            <Button size="sm" className="button-2 w-full  rounded-md capitalize">Company</Button>


        </div>

        <form className="mt-8 mb-2 w-72 max-w-screen-lg sm:w-72 mx-auto">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="First Name"  />
          <Input size="lg" label="Last Name" />
          <Input size="lg" label="Email" />
          <Input size="lg" label="Job Title" />
          <Input size="lg" label="Company Size" />
          
        </div>
       
        <Button className="mt-6 button-1 capitalize rounded-full" fullWidth>
          Request Demo
        </Button>
       
      </form>
      </CardBody>
      
    </Card>



            </div>

        </div>
      
   </div>
  );
}