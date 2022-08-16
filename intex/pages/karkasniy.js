import Slide from 'react-reveal/Slide'; 

const Karkasniy = () => {
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

      <div className="w-full h-11 md:h-24 bg-green-main flex items-center justify-center mt-8 md:mt-24" >
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

                        <button className='bg-yellow-btn hover:bg-yellow-400 rounded-btnRadius w-24 sm:w-28 h-5 sm:h-6 font-bold text-xs sm:text-base shadow-md' >Заказать</button>
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
