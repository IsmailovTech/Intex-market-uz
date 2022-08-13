import Slide from 'react-reveal/Slide'; 
import Image from 'next/image'


const Naduvnoy = () => {
  
  const datas = [
    {
      id: 1,
      status: 'Рекомендуем',
      name: 'Надувной',
      price: 450000,
      salePrice: 400000,
      img: 'naduv1.png',
    }
    ,
    {
      id: 1,
      status: 'Рекомендуем',
      name: 'Надувной',
      price: 650000,
      salePrice: 550000,
      img: 'naduv1.png',
    },
    {
      id: 1,
      status: 'Рекомендуем',
      name: 'Надувной',
      price: 800000,
      salePrice: 690000,
      img: 'naduv1.png',
    },
    {
      id: 1,
      status: 'Рекомендуем',
      name: 'Надувной',
      price: 450000,
      salePrice: 400000,
      img: 'naduv1.png',
    }
    ,
    {
      id: 1,
      status: 'Рекомендуем',
      name: 'Надувной',
      price: 650000,
      salePrice: 550000,
      img: 'naduv1.png',
    },
    {
      id: 1,
      status: 'Рекомендуем',
      name: 'Надувной',
      price: 800000,
      salePrice: 690000,
      img: 'naduv1.png',
    },
    {
      id: 1,
      status: 'Рекомендуем',
      name: 'Надувной',
      price: 800000,
      salePrice: 690000,
      img: 'naduv1.png',
    },
  ]

  return (
    <>
   
   <Image
      layout="responsive"
      className="object-center object-cover pointer-events-none"
      src="/bgintex.png"
      alt="bg image"
      width={500}
      height={300}
    />

      {/* <div className=" w-full h-screen   bg-center bg-no-repeat bg-cover bg-[url('../public/Assets/bgintex.png')]"></div> */}

      <div
        className="w-full h-[45px] md:h-[100px] bg-[#009398] flex items-center
                justify-center"
      >
        <h1 className="text-center text-2xl md:text-5xl font-bold text-white tracking-wide ">
        Надувной бассейн
        </h1>
      </div>
    
      {/* shadow-inner shadow-[#00000022] drop-shadow-2xl */}
<div className="w-full px-2 xl:px-36" >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  content-start" >
        <Slide bottom>
            {datas?.map((data) => (
              <div key={data.id}>
                <div className="w-[310px] h-[250px] sm:w-[340px] sm:h-[284px] bg-white rounded-b-[35px] rounded-tr-[35px] shadow-xl drop-shadow shadow-[#00000032]   m-6 md:m-8 p-4 flex items-center flex-wrap flex-col" >
                    <h2 className='text-xl sm:text-2xl font-semibold text-[#009398] mt-4 sm:mt-6' >Надувной</h2>
                    <img src={data.img} alt="photo" className='h-20 mt-3 sm:w-48 sm:h-28 '  />
                    <div className='flex items-center mt-5 gap-10' >
                        <div className='w-28 h-6 sm:w-36 sm:h-7 bg-[#139D4B] shadow-md drop-shadow shadow-[#0000004c] text-white absolute top-0 left-0 text-center rounded-br-[10px] text-sm' >Рекомендуем</div>
                        <div className=' sm:leading-3' >
                            <h3 className=' text-xs sm:text-md ' >{data.price} сум <hr className='bg-red-600 h-[2px] relative  bottom-2 w-[80%] rotate-[8deg] sm:rotate-6 ' /> </h3>
                            <h3 className='text-sm sm:text-xl font-bold '  >{data.salePrice} сум</h3>
                        </div>

                        <button className='bg-[#FFE600] hover:bg-[#efd914] rounded-tr-[10px] rounded-bl-[10px] w-24 sm:w-28 h-5 sm:h-6 font-bold text-xs sm:text-base shadow-md' >Заказать</button>
                    </div>
                </div>
              </div>
            ))}
        </Slide>
      </div>
      
</div>
    </>
  )
}

export default Naduvnoy
