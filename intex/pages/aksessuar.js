import { useState } from 'react';
import { FiX } from 'react-icons/fi'
import Image from 'next/image'

import Slide from 'react-reveal/Slide'; 
import Modal from '@mui/material/Modal'

const Aksessuar = () => {
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    
    const aksessuars = [
        {
          id: 1,
          status: 'Рекомендуем',
          name: 'Насос',
          price: 450000,
          salePrice: 400000,
          img: 'nasos.jpg',
        }
        ,
        {
          id: 2,
          status: 'Рекомендуем',
          name: 'Насос',
          price: 650000,
          salePrice: 550000,
          img: 'nasos.jpg',
        },
       
      ]
      
    return (
        <>

            <div className="w-full h-11 md:h-24 bg-green-main flex items-center justify-center mt-8 md:mt-24" >
                        <h1 className="text-center text-2xl md:text-5xl font-bold text-white tracking-wide ">
                        Аксессуары
                        </h1>
            </div>
            <div className="w-full px-10  xl:px-36 pt-9 md:pt-24" >
                <div className="container mx-auto flex md:flex-row flex-col items-center justify-between gap-10 flex-wrap" >
                    <Slide bottom>
                        {aksessuars?.map((aksessuar) => (
                        <div key={aksessuar.id}>
                            <div className="w-resCardWidth h-resCardHeight sm:w-cardWidth sm:h-cardHeight bg-white rounded-cardRadius shadow-cardShadow p-4 flex items-center flex-wrap flex-col" >
                                <h2 className='text-xl sm:text-2xl font-semibold text-green-main mt-4 sm:mt-6' >{aksessuar.name}</h2>
                                <img src={aksessuar.img} alt="photo" className='h-20 mt-3 sm:w-48 sm:h-28 '  />
                                <div className='flex items-center mt-5 gap-10' >
                                    <div className='w-28 h-6 sm:w-36 sm:h-7 bg-green-recommend shadow-labelShadow text-white absolute top-0 left-0 text-center rounded-br-lg text-sm' >Рекомендуем</div>
                                    <div className=' sm:leading-3' >
                                        <h3 className=' text-xs sm:text-md ' >{aksessuar.price} сум <hr className='bg-red-600 h-1 relative  bottom-2 w-3/4 sm:rotate-6 ' /> </h3>
                                        <h3 className='text-sm sm:text-xl font-bold '  >{aksessuar.salePrice} сум</h3>
                                    </div>

                                    <button className='bg-yellow-btn hover:bg-yellow-400 rounded-btnRadius w-24 sm:w-28 h-5 sm:h-6 font-bold text-xs sm:text-base shadow-md' onClick={handleOpen} >Заказать</button>
                                    {/* Modal */}

                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        className="flex items-center justify-center "
                                    >
                                        <div className='relative bg-white w-resModalWidth h-itemModalHeight md:w-itemModalWidth md:h-modalHeight rounded-modalRadius shadow-cardShadow px-9 flex flex-col md:flex-row md:gap-12 justify-start items-center' >
                                        <FiX className='absolute w-10 h-10 text-gray-400 right-7 top-4 hover:text-gray-500 ' onClick={handleClose} />
                                            <div className='w-60 h-40    md:w-itemCardWidth md:h-itemCardHeight rounded-cardRadius shadow-cardShadow' >
                                               
                                            </div>
                                            <div>
                                                <form action="/send-data-here" method="post" className="flex flex-col items-center gap-5 pt-2 mt-5 md:mt-6 " >
                                                            
                                                            <input className=" w-64 h-12 md:w-80 md:h-14 rounded-2xl p-4 outline-none shadow-cardShadow"  type="text" placeholder="Ваше имя" />
                                                            
                                                            <input className="w-64 h-12 md:w-80 md:h-14 rounded-2xl p-4 outline-none shadow-cardShadow" type="tel" placeholder="Ваш номер" />
                                                           
                                                            <input className=" w-64 h-12 md:w-80 md:h-14 rounded-2xl p-4 outline-none shadow-cardShadow"  type="text" placeholder="Ваш адрес" />

                                                            <button className=" w-44 h-9 md:w-60 md:h-12 md:mt-8 bg-yellow-btn rounded-2xl text-lg font-semibold shadow-cardShadow"  type="submit">Заказать</button>
                                                </form>
                                            </div>

                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        ))}
                    </Slide>
                </div>
            </div>
        </>
    );
}

export default Aksessuar;
