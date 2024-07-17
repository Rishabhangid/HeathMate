import React, { useState } from 'react';

function Exersice() {

  const [originalItems] = useState([
    {
      id: 1, catagory: 1, name: 'Warrior Pose',
      description: 'A standing pose that improves focus, balance, and stability.',
      videoUrl: 'https://www.youtube.com/embed/kkGY3xBnaGc?si=L5vyl2Q0_MiL1FQe'
    },

    {
      id: 2, catagory: 2, name: 'Sprint Drills',
      description: 'Exercises designed to improve speed and running technique.',
      videoUrl: 'https://www.youtube.com/embed/3Du0OiBJz0Y?si=FU7GKuqvXfaSKCNP',
    }
    ,
    { id: 3, catagory: 3, name: 'Cartwheel', description: 'A basic gymnastics move that helps develop.', videoUrl: 'https://www.youtube.com/embed/wDCVnVpcWAs?si=KgRCR1MKA2eZm1Ax' },

    {
      id: 4, catagory: 1, name: 'Downward Dog',
      description: 'A fundamental yoga pose that strengthens and stretches the.',
      videoUrl: 'https://www.youtube.com/embed/j97SSGsnCAQ?si=vB_Lxnl7kE2xu8Gi'
    },

    {
      id: 5, catagory: 2, name: 'Long Jump',
      description: 'An athletic event that tests leg strength and coordination.',
      videoUrl: 'https://www.youtube.com/embed/wlMsJ2ElfOY?si=DU8iL7tjFoESwX7u',
    },

    {
      id: 6, catagory: 3, name: 'Handstand', description: 'An advanced exercise that builds upper body strength.',
      videoUrl: 'https://www.youtube.com/embed/Q5QUzsfwlDI?si=l_S8M0iGGiIOS9CL'
    },
  ]);

  const [filteredItems, setFilteredItems] = useState(originalItems);

  const handleYoga = () => {
    const rr = originalItems.filter((elemm) => elemm.catagory === 1);
    setFilteredItems(rr);
  };

  const handleGym = () => {
    const rr = originalItems.filter((elemm) => elemm.catagory === 2);
    setFilteredItems(rr);
  };

  const handleAth = () => {
    const rr = originalItems.filter((elemm) => elemm.catagory === 3);
    setFilteredItems(rr);
  };

  const handleAll = () => {
    setFilteredItems(originalItems);
  };





  return (

    <div className="exercise-page w-[90%] m-auto">
      <h1 className="text-[28px] font-bold text-center pb-2 mt-5">Know your Exersice</h1>
      <p className="text-[20px] font-normal text-center pb-2">Learn your favariote exersices, detailed explaination and how to do it</p>
      <p className="text-[20px] font-normal text-center pb-10"> Switch between Yoga, Gym and Athletics</p>
      <div className="flex justify-center items-center">
        <div className="">
          <button className="bg-[#223FD3] text-white p-4  rounded-xl font-medium m-4" onClick={handleYoga}>Yoga </button>
          <button className="bg-[#223FD3] text-white p-4  rounded-xl font-medium m-4" onClick={handleGym}>Gymnastic</button>
          <button className="bg-[#223FD3] text-white p-4  rounded-xl font-medium m-4" onClick={handleAth}>Atheletics</button>
          <button className="bg-[#223FD3] text-white p-4  rounded-xl font-medium m-4" onClick={handleAll}>Show All</button>
        </div>
      </div>

      <div className="card grid grid-cols-3 p-10">

        {
          filteredItems.map((item) => {
            return (

              //   <Section key={elem.id} title={elem.title} price={elem.price} />
              <div className="h-[350px]" key={item.id} >
                <h1 className="font-bold text-[22px]"> {item.name} </h1>
                <p className="text-[15px] font-medium"> {item.description} </p>
                {/* <p> {elem.videoUrl} </p> */}
                <iframe
                  width="400\"
                  height="230"
                  src={item.videoUrl}
                  title={item.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* <button className="btn">Buy</button> */}
              </div>
            )


          })
        }






      </div>




    </div>

  )
}

export default Exersice



