import React from 'react';
import { IoIosContact } from "react-icons/io";

const Blog = () => {

    const image = 'https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/elementor/thumbs/Post-image-4-q6orjq03xmwi3q342frqvkijdb7x0wm5ahj2n8abi4.jpg'
    const img = 'https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/elementor/thumbs/Post-image-7-q6orjrvsbaz2qy0drgl00k1gk2yngatlyqu1ls7j5o.jpg'
    const pic = 'https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/elementor/thumbs/Post-image-1-q6orjo4fjytxgi5udeyhqkzm6jh6lieom883ood3uk.jpg'
    const picture = 'https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/elementor/thumbs/Post-image-6-q6orjrvsbaz2qy0drgl00k1gk2yngatlyqu1ls7j5o.jpg'
    const capture = 'https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/elementor/thumbs/Post-image-5-q6orjqxy4gxsfc1qwy6dg29zyp3a8lpvmm6k4i8xbw.jpg'
    const imgurl = 'https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/elementor/thumbs/Post-image-9-q6orjtrgoz1ne5xnghe95jkdqupdvp12n050kc4qt8.jpg'
    const images = 'https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/elementor/thumbs/Post-image-8-q6orjstmi50d2jz0lyzml1sx5gu0nzxcavhj3264zg.jpg'
    const photo = 'https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/elementor/thumbs/Post-image-3-q6orjq03xmwi3q342frqvkijdb7x0wm5ahj2n8abi4.jpg'
    const pictures = 'https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/elementor/thumbs/Post-image-2-q6orjp29qsv7s44h7xd4b2r2rxcjt7ieycvl5ybpoc.jpg'
    return (
        <div>
            <div className=" bg-[url('https://xstore.b-cdn.net/elementor2/spices/wp-content/uploads/sites/10/2023/05/Breadcrumbs-5.jpeg')] bg-cover bg-center h-64 w-full" >
                <p className='text-white text-center text-xl translate-y-15'> Home </p>
                <h1 className='text-white text-center text-4xl translate-y-20'>News</h1>
            </div>
            <div className='grid grid-cols-3 gap-5 w-full ml-10 mb-4 mt-5 '>
                <div className='transition-all duration-700'>
                    <div className='w-[70px] h-[70px] bg-white fixed top-3.5 left-3.5 rounded-full'> feb-13</div>
                    <div className="overflow-hidden">
                        <img src={image} alt='image' className='hover:scale-110 transition-transform duration-700' />
                    </div>
                    <h1>Black Pepper Spice Beef Recipe</h1>
                    <p>Mole sauce are a magnificent mixture fragrant layered flavors, and we're honing...</p>
                    <hr className='w-[500px] h-[70px] border-gray-300' />
                    <IoIosContact />
                </div>

                <div className='transition-all duration-700 '>
                    <div className='w-[70px] h-[70px] bg-white fixed top-3.5 left-3.5 rounded-full'> feb-13</div>
                    <div className='overflow-hidden'>
                    <img src={img} alt='image' className='hover:scale-110 transition-transform duration-700' /></div>
                    <h1>Garlicky punch and finishes</h1>
                    <p>We combine Michoacán famous carnitas flavor with herbaceous Indian spices...</p>
                </div>
                <div className='transition-all duration-700 '>
                    <div className='w-[70px] h-[70px] bg-white fixed top-3.5 left-3.5 rounded-full'> feb-13</div>
                    <div className='overflow-hidden'>
                    <img src={pic} alt='image' className='hover:scale-110 transition-transform duration-700' /></div>
                    <h1>XStore's Spices Subscription</h1>
                    <p>With blend we sought to carnitas and introduce capture the essence dimension...</p>

                </div>
                <div className='transition-all duration-700 '>
                    <div className='w-[70px] h-[70px] bg-white fixed top-3.5 left-3.5 rounded-full'> feb-13</div>
                    <div className='overflow-hidden'>
                    <img src={picture} alt='image' className='hover:scale-110 transition-transform duration-700' /></div>
                    <h1>Georgia Keeffe's famous Ranch</h1>
                    <p>With blend we sought to capture the essence carnitas and introduce dimension...</p>
                </div>
                <div className='transition-all duration-700 '>
                    <div className='w-[70px] h-[70px] bg-white fixed top-3.5 left-3.5 rounded-full'> feb-13</div>
                    <div className='overflow-hidden'>
                    <img src={capture} alt='image' className='hover:scale-110 transition-transform duration-700' /></div>
                    <h1>Inspired by rugged countryside</h1>
                    <p>Perfect for traditional pork carnitas or adding depth of flavor to rice, dips grilled...</p>

                </div>
                <div className='transition-all duration-700 '>
                    <div className='w-[70px] h-[70px] bg-white fixed top-3.5 left-3.5 rounded-full'> feb-13</div>
                    <div className='overflow-hidden'>
                    <img src={imgurl} alt='image' className='hover:scale-110 transition-transform duration-700' /></div>
                    <h1>Perfect traditional pork carnitas</h1>
                    <p>Grey grouit brings out various shades of white and matches the neutral...</p>
                </div>

                <div className='transition-all duration-700 '>
                    <div className='w-[70px] h-[70px] bg-white absolute top-3.5 left-3.5 rounded-full'> feb-13</div>
                    <div className='overflow-hidden'>
                    <img src={images} alt='image' className='hover:scale-110 transition-transform duration-700' /></div>
                    <h1>Michoacán's famous carnita flavor</h1>
                    <p>The hand-made effect adds texture to wall of this white bathroom whilst...</p>
                </div>
                <div className='transition-all duration-700'>
                    <div className='w-[70px] h-[70px] bg-white absolute top-3.5 left-3.5 rounded-full'> feb-13</div>
                    <div className='overflow-hidden'>
                    <img src={photo} alt='image' className='hover:scale-110 transition-transform duration-700' /></div>
                    <h1>The New Mexico scorpion chile</h1>
                    <p>Inspired by one of the famous Seven Moles of Oaxaca, mole negro, this blend</p>
                </div>
                <div className=' transition-all duration-700 '>
                    <div className='overflow-hidden'>
                 <img src={pictures} alt='image' className='hover:scale-110 transition-transform duration-700 ' /></div>
                    <div className='w-[70px] h-[70px] bg-white fixed top-3.5 left-3.5 rounded-full'> feb-13</div>
                    <h1>The Central Coast Maker's Trail</h1>
                    <p>Bittersweet flavors from roasted cocoa warming spices, and we combine those..</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;