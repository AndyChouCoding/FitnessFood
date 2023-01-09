import React from 'react'

import FFCountBtn from "components/FFCountBtn";

interface IImage {
    id:number
    src:string
    title:string
    classes:string
}

const HomeCart: React.FunctionComponent = () => {
   const [targetImage,setTargetImage] =  React.useState<IImage>({
        id: 1,
        src: "./images/food(Corn Waffles with Poached Eggs).jpeg",
        title: "Corn Waffles With Poached Eggs1",
        classes:'w-[90px] h-[90px] mt-[10px]'
      })

  const imagesData:IImage[] = [
    {
      id: 1,
      src: "./images/food(Corn Waffles with Poached Eggs).jpeg",
      title: "Corn Waffles With Poached Eggs1",
      classes:'w-[90px] h-[90px] mt-[10px]'

    },
    {
      id: 2,
      src: "./images/food(Grilled Peri Peri Chicken).png",
      title: "Corn Waffles With Poached Eggs2",
      classes:'w-[90px] h-[90px] mt-[10px] mb-[15px]'

    },
    {
      id: 3,
      src: "./images/food(Grilled Peri Peri Chicken).png",
      title: "Corn Waffles With Poached Eggs3",
      classes:'w-[90px] h-[90px] mt-[10px] mb-[15px]'
    },
    {
      id: 4,
      src: "./images/food(Roasted Cod & Ratatouille).png",
      title: "Corn Waffles With Poached Eggs4",
      classes:'w-[90px] h-[90px] mt-[10px]'
    },
  ];

  const onTargetImage = (data:any)=>{
        setTargetImage(data)
  }

  return (
    <>
      <div>
        <div className="flex justify-center mt-[50px]">
          <div>
            <img
              src={targetImage.src}
              alt="targetImage.src"
            />
          </div>
          <div className="ml-[50px]">
            {imagesData.map(d=>{
                return <div className='cursor-pointer' onClick={()=>onTargetImage(d)}>
                <img
                  className={`${d.classes}`}
                  src={d.src}
                  alt={d.src}
                />
              </div>
            })}
           
          </div>
        </div>
        <p className="flex justify-center text-[36px]">
          {targetImage.title}
        </p>
      </div>
      <FFCountBtn />
    </>
  );
};
export default HomeCart;
