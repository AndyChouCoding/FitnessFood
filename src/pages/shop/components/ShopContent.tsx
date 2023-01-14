import FFCountBtn from "components/FFCountBtn";
import FFFCartSendBtn from "components/FFFCartSendBtn";

const ShopContent: React.FunctionComponent = () => {
    return (
        <>
            <div className="min-w-[600px]">
                <div className="p-6 text-[32px] text-[#18C5BF]">
                    <h3 className="">Featured Product</h3>
                </div>
                <div className=" grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 px-[30px]">
                    <div className=" shadow-2xl shadow-slate-500">
                        <img src="./images/shop/foodBuffaloChicken.jpeg" alt="" />
                        <div className="flex justify-end items-center px-3">
                            <p className="text-[16px] text-[#18C5BF]">$100</p>
                            <FFCountBtn />
                            <FFFCartSendBtn />
                        </div>
                    </div>
                    <div className=" shadow-2xl shadow-slate-500">
                        <img src="./images/shop/foodBuffaloChicken.jpeg" alt="" />
                        <div className="flex justify-end items-center px-3">
                            <p className="text-[16px] text-[#18C5BF]">$100</p>
                            <FFCountBtn />
                            <FFFCartSendBtn />
                        </div>
                    </div>
                    <div className=" shadow-2xl shadow-slate-500">
                        <img src="./images/shop/foodBuffaloChicken.jpeg" alt="" />
                        <div className="flex justify-end items-center px-3">
                            <p className="text-[16px] text-[#18C5BF]">$100</p>
                            <FFCountBtn />
                            <FFFCartSendBtn />
                        </div>
                    </div>
                    <div className=" shadow-2xl shadow-slate-500">
                        <img src="./images/shop/foodBuffaloChicken.jpeg" alt="" />
                        <div className="flex justify-end items-center px-3">
                            <p className="text-[16px] text-[#18C5BF]">$100</p>
                            <FFCountBtn />
                            <FFFCartSendBtn />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ShopContent;
