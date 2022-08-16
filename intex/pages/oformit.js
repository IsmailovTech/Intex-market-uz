import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { FiX } from 'react-icons/fi'
import Image from 'next/image'
import True from '../public/true.svg'

const Oformit = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className=' pb-6 md:pb-20'>
      <div className=" w-full h-52 md:h-60 bg-green-main mt-14 md:mt-24 px-4 md:px-16">
        <div className="container mx-auto flex flex-col items-center justify-center py-7">
          <h1 className=" text-2xl md:text-5xl text-white font-semibold">
            Бесплатная доставка
          </h1>
          <p className=" text-sm md:text-2xl max-w-[1041px] text-white text-center mt-2">
            Бесплатная доставка осуществляется в пределах города Ташкент (за
            пределами города доставка оплачивается отдельно)
          </p>
          <button
            onClick={handleOpen}
            className=" w-40 h-6 md:w-64 md:h-9 text-center bg-yellow-btn rounded-xl shadow-labelShadow mt-5 text-sm md:text-base font-semibold "
          >
            Оформить заказ
          </button>

          {/* Oformit zakaz*/}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex items-center justify-center "
          >
            <div className='relative bg-white w-resModalWidth h-resModalHeight md:w-modalWidth md:h-modalHeight rounded-modalRadius shadow-cardShadow px-9 flex flex-col justify-start items-center' >
            <FiX className='absolute w-10 h-10 text-gray-400 right-7 top-4 hover:text-gray-500 ' onClick={handleClose} />
              <div className='w-20 h-24 md:w-32 md:h-32 mt-12 md:mt-16' ><Image
                  layout="responsive"
                  className=" object-center object-cover pointer-events-none"
                  src="/oformit.svg"
                  alt="bg image"
                  width={121}
                  height={131}
                /></div>

                <h3 className=' text-xl md:text-3xl font-bold pt-5 md:pt-7' >Получить консультацию</h3>
                <form action="/send-data-here" method="post" className="flex flex-col items-center gap-5 pt-2 mt-5 md:mt-6 " >
                           
                            <input className=" w-64 h-12 md:w-80 md:h-14 rounded-2xl p-4 outline-none shadow-cardShadow"  type="text" placeholder="Ваше имя" />
                            
                            <input className="w-64 h-12 md:w-80 md:h-14 rounded-2xl p-4 outline-none shadow-cardShadow" type="tel" placeholder="Ваш номер" />

                            <button className=" w-44 h-9 md:w-60 md:h-12 md:mt-8 bg-yellow-btn rounded-2xl text-lg font-semibold shadow-cardShadow"  type="submit">Заказать</button>
                </form>
            </div>
          </Modal>
        </div>
      </div>

      <div className=" w-full h-24 bg-green-transparent mt-9 md:mt-20 flex items-center justify-center">
        <h2 className=" container mx-auto text-2xl md:text-5xl flex items-center justify-center text-green-main font-bold">
          Ценности наших клиентов
        </h2>
      </div>

      <div className="w-full h-auto pl-1 md:px-36 pt-10 md:pt-24 pb-8 md:pb-14">
        <div className="container mx-auto flex flex-col gap-4 md:gap-0 md:flex-row items-start justify-between">
          <div className="flex">
            <Image
              layout="fixed"
              className=" object-center object-cover pointer-events-none"
              src="/master.svg"
              alt="bg image"
              width={100}
              height={100}
            />

            <h2 className="ml-3 w-64  flex flex-col text-xl md:text-4xl font-bold leading-6">
              Опыт{' '}
              <span className="text-xl font-semibold">
                Профессионализм наших сотрудников
              </span>
            </h2>
          </div>
          <div className="flex">
            <Image
              layout="fixed"
              className=" object-center object-cover pointer-events-none "
              src="/truck.svg"
              alt="bg image"
              width={100}
              height={100}
            />
            <h2 className="ml-3 w-64  flex flex-col text-xl md:text-4xl font-bold leading-6">
              Доставка{' '}
              <span className="text-xl font-semibold">
                Бесплатная доставка по городу
              </span>
            </h2>
          </div>
          <div className="flex">
            <Image
              layout="fixed"
              className=" object-center object-cover pointer-events-none"
              src="/medal.svg"
              alt="bg image"
              width={100}
              height={100}
            />
            <h2 className="ml-3 w-64  flex flex-col text-xl md:text-4xl font-bold leading-6">
              Качество{' '}
              <span className="text-xl font-semibold">
                Прочные, качественные бассейны
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className=" w-full h-24 bg-green-transparent mt-9 md:mt-20 flex items-center justify-center">
        <h2 className=" container mx-auto text-2xl md:text-5xl flex items-center justify-center text-green-main font-bold">
          Бассейны от intex в Ташкенте
        </h2>
      </div>

      <div className=" w-full px-8 md:px-36">
        <div className="container mx-auto  flex flex-col md:flex-row  items-center justify-between mt-11 ">
          <h3 className=" text-xs font-semibold md:text-2xl max-w-lg">
            Бассейны от intex - доступная по цене, качественная, надежная и
            экологически чистая продукция, которая предназначена для приятного
            отдыха всей семьи. Бассейн можно установить совершенно на любом
            участке и активно пользоваться им в летний период. Бассейн подарит
            вам яркие эмоции и спасет от жары в знойные летние дни.
          </h3>
          <div className=" text-sm font-semibold md:text-2xl mt-2 md:mt-0  " >
            <h1 className="max-w-lg mb-4 md:mb-0 ">
              Бассейны от intex отличаются обширным перечнем преимуществ, из
              которых можно выделить самые важные:
            </h1>
            <h2 className=" flex">
              <span className="pr-1" >
                <Image
                  layout="fixed"
                  className=" object-center object-cover pointer-events-none "
                  src="/true.svg"
                  alt="bg image"
                  width={18}
                  height={18}
                />
              </span>
              Прочность
            </h2>
            <h2 className="flex">
              <span className="pr-1" >
                <Image
                  layout="fixed"
                  className=" object-center object-cover pointer-events-none"
                  src="/true.svg"
                  alt="bg image"
                  width={18}
                  height={18}
                />
              </span>
              Простота установки
            </h2>
            <h2 className="flex">
              <span className="pr-1" >
                <Image
                  layout="fixed"
                  className=" object-center object-cover pointer-events-none"
                  src="/true.svg"
                  alt="bg image"
                  width={18}
                  height={18}
                />
              </span>
              Красивые и ярки цвета
            </h2>
            <h2 className="flex">
              <span className="pr-1" >
                <Image
                  layout="fixed"
                  className=" object-center object-cover pointer-events-none"
                  src="/true.svg"
                  alt="bg image"
                  width={18}
                  height={18}
                />
              </span>
              Стильный дизайн
            </h2>
            <h2 className="flex">
              <span  className="pr-1"  >
                <Image
                  layout="fixed"
                  className=" object-center object-cover pointer-events-none"
                  src="/true.svg"
                  alt="bg image"
                  width={18}
                  height={18}
                />
              </span>
              Высокое качество
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Oformit
