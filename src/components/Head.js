import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  
} from "@material-tailwind/react";
import logo from '../assets/head-logo.png'
 
export default function Head() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
       
        className="px-5 nav-text "
      >
        
        Individual
    
      </Typography>
      <Typography
        as="li"
        variant="small"
       
        className="px-5 nav-text"
      >
       
       Business
       
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="px-5 nav-text"
      >
       
       Pricing
      </Typography>
      <Typography
        as="li"
        variant="small"
        
        className="px-5 nav-text pr-20 "
      >
        
        Set your payroll
        
      </Typography>
    </ul>
  );
 
  return (
    <div >
     <Navbar className=" top-0 z-10 h-max max-w-full border-none py-2   lg:py-4 sm:py-3 md:py-4 nav-bg shadow-none ">
        <div className="flex   ">
          <div className="head-logo">
            <Typography
              
              
              className="mr-4 cursor-pointer py-1.5  "
            >
              <img  src={logo} alt="" className="w-28 ml-16 logo-hd" />


            </Typography>
          
          </div>
          
          <div className="flex items-center  me-auto responsive-head ">
            <div className=" hidden 2xl:block ml-10  ">{navList}</div>
            <div className="pl-20 hidden 2xl:block">
            <Button
              
             
              className="hidden lg:inline-block rounded-full capitalize w-40 h-10 mr-4   nav-button-1"
            >
              <span>Log in</span>
            </Button>

            <Button
              
              
              className="hidden lg:inline-block rounded-full capitalize w-40 h-10  nav-button-2"
            >
              <span>Register</span>
            </Button>
            </div>
            

          
            <IconButton
              variant="text"
              className="icon-hd h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent 2xl:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          
           
            
            
            
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Log in</span>
          </Button>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Register</span>
          </Button>
        </MobileNav>
      </Navbar>

    </div>
     
      
       
      
  );
}