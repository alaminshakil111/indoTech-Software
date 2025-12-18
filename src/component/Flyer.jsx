import React from 'react';

const Flyer = () => {
    return (
        <div className=' bg-[#354452] '>
            <div className=' containerCustom bg-[#86B3D9] py-5 px-5 grid grid-cols-1 md:grid-cols-2 '>

                <h2 className='text-3xl md:text-4xl text-center font-bold text-[#0072B5]' > 
                    Please Check Our Flyer 
                </h2>
                <div className='flex justify-center '>
                    <button className='btnGradient w-fit px-[40px]! '>
                        Click Here
                    </button>
                </div>


            </div>
        </div>
    );
};

export default Flyer;