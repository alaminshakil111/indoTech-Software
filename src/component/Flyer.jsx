import React, { useState } from 'react';
import { GiTireIronCross } from "react-icons/gi";


// imort from local
import flyer1 from '../assets/images/popUp/IT_ura_A4_chirashi_tate_ol_CS6.ai.png';
import flyer2 from '../assets/images/popUp/IT_omote_A4_chirashi_tate_ol_CS6.ai.png';


const Flyer = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className=' bg-[#354452] '>
                <div className=' containerCustom bg-[#86B3D9] py-5 px-5 grid grid-cols-1 md:grid-cols-2 '>

                    <h2 className='text-3xl md:text-4xl text-center font-bold text-[#0072B5] 
                    text-shadow-[1px_1px_#000] ' > 
                        Please Check Our Flyer 
                    </h2>
                    <div className='flex justify-center '>
                        <button 
                            className='btnGradient w-fit px-10px! '
                            onClick={()=>{setIsOpen(true)}}
                        >
                            Click Here
                        </button>
                    </div>
                </div>
            </div>

            {/* popUp */}

            {isOpen && (
                <div className=' fixed inset-0 z-50 items-center flex justify-center bg-black/20 '
                    onClick={()=> {setIsOpen(false)}}
                >
                    <div className=' relative bg-white max-w-4xl w-[90%] p-7 rounded-[10px] popup-slide-down  '                     
                    >
                        <button className=' absolute right-2 top-2 text-xl text-gray-700 hover:text-red-700 
                                            cursor-pointer ' 
                            onClick={()=> {setIsOpen(false)}}
                        >
                            <GiTireIronCross />
                        </button>

                        <div className=' grid grid-cols-2 gap-1 '>
                            <img 
                                src={flyer1}
                            />
                            <img 
                                src={flyer2}
                            />
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default Flyer;