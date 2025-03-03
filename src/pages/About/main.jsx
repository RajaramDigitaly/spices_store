import React from 'react';

const About = () => {
    return (
        <React.Fragment>
        <div>
         <div className="bg-[url('/spice9.svg')] h-[410px] w-full bg-cover">
          <div className="bg-[#13020280] h-[410px] w-full">
            <div className='flex flex-col justify-center items-center p-50 gap-3'>
             <h6 className="text-white">Home</h6>
             <h1 className="text-white text-6xl">ABOUT US</h1>
           </div>
          </div>
         </div>
        </div>

      <div className='flex justify-center items-center w-12/12'>
        <div className='grid grid-cols-2 '>
         <div className='mx-auto w-[100%] px-30 py-30'>
            <h1 className='text-3xl'>We care for the healthy and standardized development of spice flavor.</h1>
            <p className='text-gray-500 mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
         </div>

         <div className='w-[100%] mx-auto px-8 py-8'>
            <img className='' src="/spice.svg"></img>
         </div>

         <div className='w-[100%] mx-auto px-30 py-2'>
            <h1 className='text-3xl'>We generated 2x more online sales in 2021.</h1>
            <p className='text-gray-500 mt-4'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many in their infancy.</p>
         </div>

         <div className='w-[100%] mx-auto px-8 py-5'>
            <h1 className='text-3xl'>We generated 2x more online sales in 2021.</h1>
            <p className='text-gray-500 mt-4'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many in their infancy</p>
         </div>
        </div>
      </div>

      <div>
         <div className="bg-[url('/spy1.svg')] h-[610px] w-full">
            <div className='bg-[#ffffffdc] h-[610px] w-full flex justify-center items-center text-center '>  
             <div className=''>
               <img className='' src="/spice 1.svg"></img>
               <h2 className='text-[#a00909]  font-bold'>Sustainable Spices</h2>
               <p className='text-gray-500'>It is our mission to positively impact farmer livelihood the environment and the communities where we operate.</p>
             </div>
            
            <div>
                <img className='' src="/spice 2.svg"></img>
                <h2 className='text-[#a00909]  font-bold'>Innovative Solutions</h2>
                <p className='text-gray-500'>The innovation experts in our IQ Centers understand cuisines, health trends, convenience factors and consumer behaviors</p>
            </div>

            <div>
                <img className='' src="/spice 3.svg"></img>
                <h2 className='text-[#a00909]  font-bold'>Spice Expertise</h2>
                <p className='text-gray-500'>Our customers have access to monthly market reports written by our experts to help them make the best purchasing decisions.</p>
            </div>
           </div>
         </div>
     </div> 
        </React.Fragment>
    );
};

export default About;