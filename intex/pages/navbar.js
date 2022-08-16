import { useState, useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/Ai";
import { IoIosCall } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";


const Navbar = () => {

    const[open,setOpen] = useState(false);

    const handleClick = () =>{
        setOpen(!open)
    }

  

    return (
        <>
           <div className="w-full h-[74px] bg-green-main px-4 md:px-16 sticky top-0 z-50 shadow-2xl " >
                <div className="container mx-auto h-full flex items-center justify-between" >

                <h1 className=" text-lg md:text-2xl font-bold leading-8 text-white cursor-pointer" >INTEX-MARKET.UZ</h1>

                <ul className="hidden xl:flex" >
                    <li className="text-xl text-white font-bold hover:bg-gray-400 px-3 py-1 rounded-sm cursor-pointer hover:bg-opacity-30 transition-all tracking-wide">
                            Надувной бассейн
                    </li>
                    <li className="text-xl  text-white font-bold hover:bg-gray-400 px-3 py-1 rounded-sm cursor-pointer hover:bg-opacity-30 transition-all tracking-wide" >Каркасный бассейн</li>
                    <li className="text-xl text-white font-bold hover:bg-gray-400 px-3 py-1 rounded-sm cursor-pointer hover:bg-opacity-30 transition-all tracking-wide" >Аксессуары</li>
                    
                </ul>
                
                <div className="flex items-center gap-2" >
                    <p className="hidden xl:block text-md font-semibold text-white cursor-pointer" >(97) 389 10 98</p>
                <div className="flex gap-2" > {/* responsive 11111   */}
 
                    <div className=" w-6 h-6 md:w-8 md:h-8 bg-slate-200 rounded-md flex items-center justify-center cursor-pointer" ><FaTelegramPlane className="w-4 h-4 md:w-5 md:h-5 text-green-main " /></div>
                    
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-slate-200 rounded-md flex items-center justify-center cursor-pointer" ><AiFillInstagram className="w-4 h-4 md:w-5 md:h-5 text-green-main" /></div>
                    
                    <div className="w-6 h-6 md:w-8 md:h-8 text-xs md:text-base bg-slate-200 rounded-md flex items-center justify-center cursor-pointer font-semibold text-green-main" >RU</div>
                </div>
                {/* Responsive design */}
                
                <div className=" xl:hidden" onClick={handleClick}  >

                    {
                        open ? (
                            <FiX className="w-7 h-7 text-white ml-1"  />
                            ): (
                                <FiMenu className="w-7 h-7 text-white ml-1 " />
                            )
                    }

                </div>

</div> {/* responsive 11111   */}  
                    <div className={ open ? " h-screen w-64 lg:w-96 bg-green-main absolute top-0 left-0 transition-[3s] shadow-2xl shadow-black flex flex-col items-center " : "h-screen w-64 bg-green-main absolute top-0 left-[-256px] transition-[3s] "}>

                         <h1 className="text-xl text-white mt-4 font-bold" >INTEX-MARKET.UZ</h1>
                         
                         <ul className="mt-12 flex flex-col gap-12" >
                            <li className=" w-52 md:w-60 h-14 bg-white rounded-lg flex items-center justify-center text-md font-semibold text-green-main shadow-md shadow-[#00000046]" >Надувной бассейн</li>
                            <li className="w-52 md:w-60 h-14 bg-white rounded-lg flex items-center justify-center text-md font-semibold text-green-main shadow-md shadow-[#00000046]" >Каркасный бассейн</li>
                            <li className="w-52 md:w-60 h-14 bg-white rounded-lg flex items-center justify-center text-md font-semibold text-green-main shadow-md shadow-[#00000046]" >Аксессуары</li>
                         </ul>

                         <div className="mt-8 flex flex-col gap-4" >
                           
                            <button className="w-52 md:w-60 h-14 bg-green-recommend rounded-lg flex items-center justify-center gap-2 text-lg font-semibold text-white shadow-md shadow-[#00000046]" ><IoIosCall className="w-7 h-7 md:w-5 md:h-5" /> Позвонить </button>
                           
                            <button className="w-52 md:w-60 h-14 bg-white rounded-lg flex items-center justify-center gap-2 text-lg font-semibold text-green-main shadow-md shadow-[#00000046]" ><FaTelegramPlane className="w-7 h-7 md:w-5 md:h-5 text-green-main " />Телеграм</button>
                           
                            <button className="w-52 md:w-60 h-14 bg-white rounded-lg flex items-center justify-center gap-2 text-lg font-semibold text-green-main shadow-md shadow-[#00000046]" ><AiFillInstagram className="w-7 h-7 md:w-5 md:h-5 text-green-main" />Инстаграм</button>
                        
                         </div>


                    </div>
                    
                </div>

                
           </div>     
        </>
    );
}

export default Navbar;
