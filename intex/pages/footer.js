import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/Ai";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
    return (
        <>
             <div className="w-full h-96 md:h-72 bg-green-main md:px-36 " >
                <div className="container mx-auto  flex flex-col md:flex-row items-center md:items-start justify-between pt-4 " >
                    
                    <div  >
                        <h3 className=" text-xl md:text-2xl color-white text-white font-semibold text-center max-w-xs" >Получить бесплатную консультацию</h3>
                        
                        <form action="/send-data-here" method="post" className="flex flex-col items-center gap-5 pt-2" >
                            <input className=" w-72 h-9 md:w-80 md:h-11 rounded-lg p-4 outline-none "  type="text" placeholder="Ваше имя" />
                            
                            <input className="w-72 h-9 md:w-80 md:h-11 rounded-lg p-4 outline-none " type="tel" placeholder="Ваше номер" />

                            <button className=" w-60 h-9 bg-yellow-btn rounded-lg text-sm font-semibold "  type="submit">Хочу проконсультироваться</button>
                        </form>
                    
                    </div>

                   <div className="grid grid-cols-2 px-8 md:px-0 md:gap-20 mt-8 md:mt-0" >
                        <div>
                            <h3 className=" text-sm md:text-xl text-white " ><span>*</span> Рабочее время</h3>
                            <h2 className="text-xs md:text-xl text-white " >Будние дни: 10:00 - 22:00<br/> Без выходных </h2>
                            <div className="flex pt-4 gap-2 md:gap-4" >
                                <div className=" w-7 h-7 md:w-11 md:h-11 bg-slate-200 rounded-md flex items-center justify-center cursor-pointer" ><FaTelegramPlane className="w-4 h-4 md:w-6 md:h-6 text-green-main " /></div>
                    
                                <div className="w-7 h-7 md:w-11 md:h-11 bg-slate-200 rounded-md flex items-center justify-center cursor-pointer" ><AiFillInstagram className="w-4 h-4 md:w-6 md:h-6 text-green-main" /></div>
                                <div className="w-7 h-7 md:w-11 md:h-11 bg-slate-200 rounded-md flex items-center justify-center cursor-pointer" ><IoIosCall className="w-4 h-4 md:w-6 md:h-6 text-green-main" /></div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs md:text-xl text-white max-w-xs text-start ">
                            Intex.uz
                            +998(90)1288182
                            Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент
                            </h3>
                            
                            <p className="text-xs md:text-md text-white max-w-xs pt-2 md:pt-4" >
                            Разработано в Support Solutions Все права защищены.
                            </p>
                        </div>
                   </div>

                </div>
             </div>   
        </>
    );
}

export default Footer;
