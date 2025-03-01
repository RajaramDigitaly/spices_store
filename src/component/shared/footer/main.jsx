import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter,FaYoutube } from "react-icons/fa6";

const CustomFooter = () => {
      const image='https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/2023/05/Logo-2x-min.png'
    const helpContent=[{
      
        
        title:"our story",
        links:[
            {subtitle:'company profile',href:'#'},
            {subtitle:'our facility',href:'#'},
            {subtitle:'Commitment To Quality',href:'#'},
            {subtitle:'Contract Manufacturing',href:'#'},
            {subtitle:'our awards',href:'#'},

        ],
      },
      {
        title:'categories',
        links:[
            {subtitle:'BBQ & Grilling',href:'#'},
            {subtitle:'Chiles & Paprikas',href:'#'},
            {subtitle:'Dips & Dressing',href:'#'},
            {subtitle:'Garlic & Onion',href:'#'},
            {subtitle:'Salt & Pepper',href:'#'},

        ],

      },

    {
        title:'support',
        links:[
            {subtitle:'Look Up Order',href:'#'},
            {subtitle:'Refer a friend',href:'#'},
            {subtitle:'Returns',href:'#'},
            {subtitle:'Shipping & Delivery',href:'#'},
        
            
        ],
    },
    {
        title:'Contact us',
        links:[
            {subtitle:'Become a XStore',href:'#'},
            {subtitle:'Contract Manufacturing',href:'#'},
            {subtitle:'Terms & Condition',href:'#'},
            {subtitle:'Career with us',href:'#'},
            {subtitle:'Consumer enquiry',href:'#'},
        ]
    }


    ]
    return (
        <div className=' grid  md:grid-cols-5 w-full bg-black text-white'>
            <div className='mx-auto p-4'>
                <img src={image} alt='img' className='h-[100px] w-[] '/>

                
                <div className='flex gap-3 translate-6 text-xl'>
                    <p className=''><FaInstagram /></p>
                    <p className=''><FaXTwitter /></p>
                    <p className=''><FaYoutube/></p>

                </div>

            </div>
            {
                helpContent.map((item,i)=>(
                    
                        <div  key={i} className="grid grid-cols  md:gap-2 px-6 md:px-2 mt-6">
                        <h1 className='text-3xl p-3 font-bold text-center'>{item.title}</h1>
                       
                        {item.links.map((link, x) => (  
                        <p key={x} className='p-2 text-center '>
                       <a href={link.href}>{link.subtitle}</a>
                    </p>
                      ))}
                    </div>

                )

                )
            }
         <div className='w-full'>
         {/* <hr className="md:my-6 border-gray-200 sm:mx-auto dark:border-gray-700 " /> */}
         <span className="block p-5 text-sm text-gray-500 text-center dark:text-gray-400"> Copyright © 2025 |<a href="" className=''></a> Powered by Digitaly</span>
         </div> 


            
        </div>
    );
};

export default CustomFooter;