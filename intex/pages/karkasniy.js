import Slide from 'react-reveal/Slide'; 
import Modal from '@mui/material/Modal'
import { FiX } from 'react-icons/fi'
import { useState } from 'react';

const Karkasniy = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const karkasDatas = [
        {
          id: 1,
          status: 'Рекомендуем',
          name: 'Рамка призмы',
          price: 450000,
          salePrice: 400000,
          img: 'karkas1.png',
        }
        ,
        {
          id: 2,
          status: 'Рекомендуем',
          name: 'Рамка призмы',
          price: 650000,
          salePrice: 550000,
          img: 'karkas2.png',
        },
        {
          id: 3,
          status: 'Рекомендуем',
          name: 'Рамка призмы',
          price: 800000,
          salePrice: 690000,
          img: 'karkas1.png',
        },
        {
          id: 4,
          status: 'Рекомендуем',
          name: 'Прямоугольная рама',
          price: 450000,
          salePrice: 400000,
          img: 'karkas3.png',
        }
        ,
        {
          id: 5,
          status: 'Рекомендуем',
          name: 'Прямоугольная рама',
          price: 650000,
          salePrice: 550000,
          img: 'karkas2.png',
        },
      ]
      
    return (
        <>
      
      <div className="w-full h-11 md:h-24 bg-green-main flex items-center justify-center mt-8 md:mt-24" id='karkas'  >
              <h1 className="text-center text-2xl md:text-5xl font-bold text-white tracking-wide ">
              Каркасные бассейны
              </h1>
      </div>
        
      <div className="w-full px-10 xl:px-36 pt-9 md:pt-24" >
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-between gap-10 flex-wrap" >
        <Slide bottom>
            {karkasDatas?.map((karkas) => (
              <div key={karkas.id}>
                <div className="w-resCardWidth h-resCardHeight sm:w-cardWidth sm:h-cardHeight bg-white rounded-cardRadius shadow-cardShadow p-4 flex items-center flex-wrap flex-col" >
                    <h2 className='text-xl sm:text-2xl font-semibold text-green-main mt-4 sm:mt-6' >{karkas.name}</h2>
                    <img src={karkas.img} alt="photo" className='h-20 mt-3 sm:w-48 sm:h-28 '  />
                    <div className='flex items-center mt-5 gap-10' >
                        <div className='w-28 h-6 sm:w-36 sm:h-7 bg-green-recommend shadow-labelShadow text-white absolute top-0 left-0 text-center rounded-br-lg text-sm' >Рекомендуем</div>
                        <div className=' sm:leading-3' >
                            <h3 className=' text-xs sm:text-md ' >{karkas.price} сум <hr className='bg-red-600 h-1 relative  bottom-2 w-3/4 sm:rotate-6 ' /> </h3>
                            <h3 className='text-sm sm:text-xl font-bold '  >{karkas.salePrice} сум</h3>
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
                              <div className='relative bg-white w-resModalWidth h-resModalHeight md:w-itemModalWidth md:h-modalHeight rounded-modalRadius shadow-cardShadow px-9 flex flex-col md:flex-row md:gap-12 justify-start items-center pt-9' >
                              <FiX className='absolute w-6 h-6 md:w-10 md:h-10 text-gray-400 right-7 top-4 hover:text-gray-500 ' onClick={handleClose} />
                                  <div className='w-60 h-40 md:w-itemCardWidth md:h-itemCardHeight rounded-cardRadius shadow-cardShadow' ></div>
                                  <p className='pt-7 font-bold md:absolute bottom-28 left-1/4 md:text-xl' >1.390.000 сум</p>
                                  <div>
                                      <form action="/send-data-here" method="post" className="flex flex-col items-center gap-4 pt-2 md:mt-6 " >
                                                  
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

export default Karkasniy;
