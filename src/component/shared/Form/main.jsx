import React from 'react';


const CustomForm = () => {
    return (
        <React.Fragment>
            <div>
            <div className="bg-[url('/spy3.svg')] h-[150px] bg-cover">
           
            <div className="bg-[#a52a2aea] w-full h-[150px] flex  ">
           
            <form className=" mx-auto flex justify-center  gap-3 mt-10 "> 
            <h1 className=" text-2xl font-bold text-white pb-5">Our Subscription</h1>
          
            <input type='email' name='email' placeholder='your email address' className=' rounded-sm w-[600px] h-[50px] px-2 border-2 bg-white border-white  text-black'/>
          
            <button type="button" className="text-white hover:text-white border text-center  border-white  h-[50px] focus:outline-none font-bold text-sm px-15  dark:border-white  ">SUBSCRIBE</button>
            </form>
                
            </div>
            </div>
            </div>
     
        
         
  
          
        
         
        </React.Fragment>
    );
};

export default CustomForm;