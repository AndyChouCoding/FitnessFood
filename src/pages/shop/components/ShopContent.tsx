import React from "react";
import FFCountBtn from "components/FFCountBtn";
import FFFCartSendBtn from "components/FFFCartSendBtn";

interface ShopCarousels {
    id: number;
    src: string;
    title: string;
    classes: string;
    content: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ShopContent: React.FunctionComponent = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [targetShopCarousels, setShopCarousels] = React.useState<ShopCarousels>({
        id: 1,
        src: "./images/shop/foodBuffaloChicken.jpeg",
        title: "foodBuffaloChicken",
        classes: "",
        content: ["Low Calorie", "High Protein", "High in carbohydrates"],
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ShopContentData: ShopCarousels[] = [
        {
            id: 1,
            src: "./images/shop/foodBuffaloChicken.jpeg",
            title: "foodBuffaloChicken",
            classes: "",
            content: ["Low Calorie", "High Protein", "High in carbohydrates"],
        },
        {
            id: 2,
            src: "./images/shop/foodBuffaloChicken.jpeg",
            title: "foodBuffaloChicken",
            classes: "",
            content: ["Low Calorie", "High Protein", "High in carbohydrates"],
        },
        {
            id: 3,
            src: "./images/shop/foodBuffaloChicken.jpeg",
            title: "foodBuffaloChicken",
            classes: "",
            content: ["Low Calorie", "High Protein", "High in carbohydrates"],
        },
        {
            id: 4,
            src: "./images/shop/foodBuffaloChicken.jpeg",
            title: "foodBuffaloChicken",
            classes: "",
            content: ["Low Calorie", "High Protein", "High in carbohydrates"],
        },
    ];
    const onShopCarousels = (data: any) => {
        setShopCarousels(data);
    };

    return (
        <>
            <div className="min-w-[600px] max-w-[1200px] mb-[100px]">
                <div className="p-6 text-[32px] text-[#18C5BF]">
                    <h3 className="">Featured Product</h3>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                        {ShopContentData.map((d) => {
                            return (
                                <>
                                    <div
                                        className="mb-[60px] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] px-5"
                                        onClick={() => onShopCarousels(d)}
                                    >
                                        <img className={`${d.classes}`} src={d.src} alt={d.src} />
                                        <div className="flex justify-end mt-[10px]">
                                            <FFCountBtn />
                                            <FFFCartSendBtn />
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
export default ShopContent;

//原始頁面
// const ShopContent: React.FunctionComponent = () => {
//     return (
//         <>
//             <div className="min-w-[600px]">
//                 <div className="p-6 text-[32px] text-[#18C5BF]">
//                     <h3 className="">Featured Product</h3>
//                 </div>
//                 <div className=" grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 px-[30px]">
//                     <div className=" shadow-2xl shadow-slate-500">
//                         <img src="./images/shop/foodBuffaloChicken.jpeg" alt="" />
//                         <div className="flex justify-end items-center px-3">
//                             <p className="text-[16px] text-[#18C5BF]">$100</p>
//                             <FFCountBtn />
//                             <FFFCartSendBtn />
//                         </div>
//                     </div>
//                     <div className=" shadow-2xl shadow-slate-500">
//                         <img src="./images/shop/foodBuffaloChicken.jpeg" alt="" />
//                         <div className="flex justify-end items-center px-3">
//                             <p className="text-[16px] text-[#18C5BF]">$100</p>
//                             <FFCountBtn />
//                             <FFFCartSendBtn />
//                         </div>
//                     </div>
//                     <div className=" shadow-2xl shadow-slate-500">
//                         <img src="./images/shop/foodBuffaloChicken.jpeg" alt="" />
//                         <div className="flex justify-end items-center px-3">
//                             <p className="text-[16px] text-[#18C5BF]">$100</p>
//                             <FFCountBtn />
//                             <FFFCartSendBtn />
//                         </div>
//                     </div>
//                     <div className=" shadow-2xl shadow-slate-500">
//                         <img src="./images/shop/foodBuffaloChicken.jpeg" alt="" />
//                         <div className="flex justify-end items-center px-3">
//                             <p className="text-[16px] text-[#18C5BF]">$100</p>
//                             <FFCountBtn />
//                             <FFFCartSendBtn />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default ShopContent;
