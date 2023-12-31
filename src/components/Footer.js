import { Typography, Input } from "@material-tailwind/react";
import logo from '../assets/logo.png'
 
export default function SimpleFooter() {
  return (
    <footer className=" py-6 mx-20">
      <div className="grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 mx-auto p-10  ">
            <div className="lg:order-first md:order-last sm:order-last md:mx-auto sm:mx-auto  ">
                <img src={logo} alt="img" className="text-left pb-10 pt-10"/>
                <p  className="text text-left  copyright pb-2 ">
                    Copyright &copy; 2023 Eazipay. 
                    
                </p>
                <p className="text text-left  copyright pb-5 ">
                All right reserved

                </p>
            <div className="flex gap-3">
                    <svg  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"  ><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#515251" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.999 7.4668C13.6814 7.4668 13.3906 7.47693 12.4804 7.51835C11.5719 7.55995 10.9518 7.70378 10.4092 7.9148C9.84798 8.13276 9.37189 8.42432 8.89757 8.89881C8.4229 9.37313 8.13134 9.84922 7.91267 10.4103C7.70111 10.9531 7.55711 11.5733 7.51622 12.4814C7.47551 13.3917 7.46484 13.6827 7.46484 16.0002C7.46484 18.3178 7.47515 18.6077 7.5164 19.5179C7.55818 20.4264 7.702 21.0465 7.91285 21.5891C8.13098 22.1503 8.42254 22.6264 8.89704 23.1007C9.37117 23.5754 9.84727 23.8677 10.4082 24.0856C10.9511 24.2967 11.5714 24.4405 12.4797 24.4821C13.3899 24.5235 13.6806 24.5336 15.9979 24.5336C18.3156 24.5336 18.6056 24.5235 19.5158 24.4821C20.4243 24.4405 21.0451 24.2967 21.588 24.0856C22.1491 23.8677 22.6245 23.5754 23.0986 23.1007C23.5733 22.6264 23.8648 22.1503 24.0835 21.5893C24.2933 21.0465 24.4373 20.4262 24.48 19.5181C24.5208 18.6079 24.5315 18.3178 24.5315 16.0002C24.5315 13.6827 24.5208 13.3918 24.48 12.4816C24.4373 11.5732 24.2933 10.9531 24.0835 10.4105C23.8648 9.84922 23.5733 9.37313 23.0986 8.89881C22.6239 8.42414 22.1493 8.13258 21.5875 7.9148C21.0435 7.70378 20.423 7.55995 19.5146 7.51835C18.6043 7.47693 18.3146 7.4668 15.9963 7.4668H15.999ZM15.2334 9.00457C15.4606 9.00421 15.7141 9.00457 15.9989 9.00457C18.2774 9.00457 18.5474 9.01274 19.4472 9.05363C20.2792 9.09168 20.7307 9.2307 21.0315 9.3475C21.4298 9.50217 21.7137 9.68706 22.0122 9.98573C22.3108 10.2844 22.4957 10.5688 22.6507 10.9671C22.7675 11.2675 22.9067 11.7191 22.9446 12.5511C22.9855 13.4507 22.9944 13.7209 22.9944 15.9982C22.9944 18.2756 22.9855 18.5458 22.9446 19.4454C22.9066 20.2774 22.7675 20.729 22.6507 21.0294C22.4961 21.4276 22.3108 21.7112 22.0122 22.0097C21.7135 22.3084 21.4299 22.4932 21.0315 22.6479C20.7311 22.7652 20.2792 22.9039 19.4472 22.942C18.5476 22.9828 18.2774 22.9917 15.9989 22.9917C13.7203 22.9917 13.4503 22.9828 12.5507 22.942C11.7187 22.9036 11.2672 22.7645 10.9662 22.6477C10.568 22.4931 10.2835 22.3082 9.98483 22.0095C9.68616 21.7108 9.50127 21.4271 9.34625 21.0287C9.22945 20.7282 9.09025 20.2767 9.05238 19.4447C9.01149 18.5451 9.00331 18.2749 9.00331 15.9961C9.00331 13.7173 9.01149 13.4485 9.05238 12.549C9.09042 11.717 9.22945 11.2654 9.34625 10.9646C9.50092 10.5664 9.68616 10.2819 9.98483 9.98324C10.2835 9.68457 10.568 9.49968 10.9662 9.34466C11.267 9.22732 11.7187 9.08866 12.5507 9.05043C13.3379 9.01488 13.643 9.00421 15.2334 9.00243V9.00457ZM20.554 10.4215C19.9887 10.4215 19.53 10.8796 19.53 11.4451C19.53 12.0105 19.9887 12.4691 20.554 12.4691C21.1194 12.4691 21.578 12.0105 21.578 11.4451C21.578 10.8798 21.1194 10.4215 20.554 10.4215ZM15.999 11.6179C13.5789 11.6179 11.6167 13.5801 11.6167 16.0002C11.6167 18.4203 13.5789 20.3816 15.999 20.3816C18.4191 20.3816 20.3805 18.4203 20.3805 16.0002C20.3805 13.5801 18.4191 11.6179 15.999 11.6179ZM15.999 13.1557C17.5698 13.1557 18.8434 14.4292 18.8434 16.0002C18.8434 17.5711 17.5698 18.8447 15.999 18.8447C14.4279 18.8447 13.1545 17.5711 13.1545 16.0002C13.1545 14.4292 14.4279 13.1557 15.999 13.1557Z" fill="#515251" ></path></svg>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"  ><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#515251" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5208 13.0051L15.5544 13.5587L14.9948 13.4909C12.9579 13.2311 11.1784 12.3498 9.66756 10.8696L8.92891 10.1352L8.73865 10.6776C8.33575 11.8865 8.59316 13.1633 9.43253 14.022C9.8802 14.4965 9.77948 14.5643 9.00725 14.2819C8.73865 14.1915 8.50363 14.1237 8.48124 14.1576C8.4029 14.2367 8.6715 15.2648 8.88414 15.6716C9.17513 16.2365 9.76828 16.7902 10.4174 17.1178L10.9658 17.3777L10.3167 17.389C9.68994 17.389 9.66756 17.4003 9.73471 17.6376C9.95854 18.372 10.8427 19.1516 11.8276 19.4906L12.5214 19.7278L11.9171 20.0894C11.0218 20.6091 9.96973 20.9029 8.91772 20.9255C8.41409 20.9368 8 20.982 8 21.0159C8 21.1289 9.36538 21.7616 10.16 22.0102C12.5438 22.7446 15.3753 22.4282 17.5017 21.1741C19.0126 20.2815 20.5235 18.5076 21.2286 16.7902C21.6091 15.875 21.9896 14.2028 21.9896 13.4006C21.9896 12.8808 22.0232 12.813 22.6499 12.1916C23.0192 11.83 23.3662 11.4346 23.4333 11.3216C23.5452 11.1069 23.534 11.1069 22.9633 11.299C22.012 11.638 21.8777 11.5928 22.3477 11.0843C22.6947 10.7228 23.1088 10.0674 23.1088 9.87536C23.1088 9.84146 22.9409 9.89796 22.7506 9.99964C22.5492 10.1126 22.1015 10.2821 21.7658 10.3838L21.1614 10.5759L20.613 10.203C20.3108 9.99964 19.8856 9.77367 19.6617 9.70588C19.0909 9.5477 18.218 9.57029 17.7032 9.75107C16.3042 10.2595 15.4201 11.5702 15.5208 13.0051Z" fill="#515251"></path></svg>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" ><circle cx="16" cy="16" r="16" fill="#515251"></circle><path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM5.58736 16C5.58736 21.7507 10.2493 26.4126 16 26.4126C21.7507 26.4126 26.4126 21.7507 26.4126 16C26.4126 10.2493 21.7507 5.58736 16 5.58736C10.2493 5.58736 5.58736 10.2493 5.58736 16Z" fill="#F2F1F1" ></path><path d="M16 4C9.3736 4 4 9.3736 4 16C4 22.6264 9.3736 28 16 28C22.6264 28 28 22.6264 28 16C28 9.3736 22.6264 4 16 4ZM12.5129 22.1406H9.59039V13.3481H12.5129V22.1406ZM11.0518 12.1475H11.0327C10.052 12.1475 9.41772 11.4724 9.41772 10.6286C9.41772 9.76581 10.0714 9.10938 11.0712 9.10938C12.0709 9.10938 12.6862 9.76581 12.7052 10.6286C12.7052 11.4724 12.0709 12.1475 11.0518 12.1475ZM23.051 22.1406H20.1288V17.4368C20.1288 16.2547 19.7057 15.4485 18.6483 15.4485C17.8409 15.4485 17.3601 15.9923 17.1488 16.5173C17.0715 16.7051 17.0527 16.9677 17.0527 17.2305V22.1406H14.1303C14.1303 22.1406 14.1686 14.173 14.1303 13.3481H17.0527V14.593C17.441 13.9939 18.1359 13.1417 19.6865 13.1417C21.6093 13.1417 23.051 14.3984 23.051 17.099V22.1406Z" fill="#F2F1F1" ></path></svg>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"  ><circle cx="16" cy="16" r="16" fill="#515251" ></circle><path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM5.84688 16C5.84688 21.6074 10.3926 26.1531 16 26.1531C21.6074 26.1531 26.1531 21.6074 26.1531 16C26.1531 10.3926 21.6074 5.84688 16 5.84688C10.3926 5.84688 5.84688 10.3926 5.84688 16Z" fill="#F2F1F1" ></path><path d="M16 4C9.37256 4 4 9.37256 4 16C4 22.6274 9.37256 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37256 22.6274 4 16 4ZM20.578 10.1111L18.9183 10.1118C17.6168 10.1118 17.3651 10.7303 17.3651 11.6378V13.6388H20.4688L20.4673 16.7729H17.3654V24.8158H14.1281V16.7729H11.422V13.6388H14.1281V11.3274C14.1281 8.64507 15.767 7.1842 18.1596 7.1842L20.5783 7.18789V10.1111H20.578Z" fill="#F2F1F1" ></path></svg>
            </div>
            </div>

            <div className=" pt-2 md:mx-auto sm:mx-auto  ">
                <Typography  className="text-bold text-left pb-5 pt-5">
                    Product
                </Typography>
                <Typography  className="text text-left pb-2">
                   Indidual
                </Typography>
                <Typography  className="text text-left pb-2">
                    Businesses
                </Typography>
                <Typography  className="text text-left pb-2">
                    Request Demo
                </Typography>
                <Typography  className="text text-left">
                    Pricing
                </Typography>

                </div>

                <div className=" pt-2 md:mx-auto sm:mx-auto ">
                <Typography  className="text-bold text-left pb-5 pt-5">
                    Legal
                </Typography>
                <Typography  className="text text-left pb-2 ">
                    Privacy Policy
                </Typography>
                <Typography  className="text text-left pb-2">
                    Terms of Service
                </Typography>
                    
                </div>

                <div className="md:mx-auto sm:mx-auto  pt-2">
                <Typography  className="text-bold text-left pb-5 pt-5">
                    Ressources
                </Typography>
                <Typography  className="text text-left pb-2">
                    FAQs
                </Typography>
                <Typography  className="text text-left pb-2">
                    Blog
                </Typography>
                <Typography  className="text text-left pb-2">
                    Career
                </Typography>
                <Typography  className="text text-left pb-2">
                    Customer Stories
                </Typography>
                    
                </div>

                <div className="md:mx-auto sm:mx-auto  pt-2 lg:order-last md:order-first sm:order-first ">
                <Typography  className="text-bold text-left pb-5 pt-5">
                    Contact us
                </Typography>
                <Typography  className="text text-left pb-2">
                    eazipay@gmail.com
                </Typography>
                <Typography  className="text text-left pb-5">
                    +234 816 878 9518
                </Typography>
                <div className="inp">
                <div className="md:w-1/2 sm:w-1/2 ">
                <Input className="input-footer "  label="Your email address" icon={<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-80bf18a6=""><g clip-path="url(#clip0_463_19022)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0303 1.75875C17.2341 1.96248 17.3031 2.26491 17.2079 2.53685L11.9579 17.5368C11.8563 17.8271 11.5878 18.0259 11.2806 18.0385C10.9733 18.051 10.6895 17.8747 10.5646 17.5937L7.6818 11.1073L1.1954 8.22444C0.91439 8.09955 0.738092 7.81577 0.750627 7.50851C0.763163 7.20125 0.961991 6.93278 1.25224 6.83119L16.2522 1.58119C16.5242 1.48601 16.8266 1.55502 17.0303 1.75875ZM9.14456 10.7052L11.1671 15.2558L14.7064 5.14335L9.14456 10.7052ZM13.6457 4.08269L3.53331 7.62204L8.0839 9.64452L13.6457 4.08269Z" fill="#515251"></path></g><defs><clipPath id="clip0_463_19022"><rect width="18" height="18" fill="white" transform="translate(0 0.789062)"></rect></clipPath></defs></svg>} />

                </div>

                </div>
                    
                </div>

                
        </div>
      
     
    </footer>
  );
}