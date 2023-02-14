/* eslint-disable jsx-a11y/alt-text */
import FFCountBtn from "components/FFCountBtn";

const CartContainer: React.FunctionComponent = () => {
    return (
        <>
            <div className="mx-auto min-w-[600px] mt-[30px] mb-[60px] lg:max-w-[1200px] w-[400px]">
                <h2
                    className="text-[#18C5BF]
                 text-[40px] font-bold flex justify-start py-[30px]"
                >
                    Your Cart
                </h2>
                <div className="flex justify-around text-[#18C5BF] font-bold border-b-4 border-[#18C5BF] mb-3">
                    <p className=" flex justify-center w-[120px]">PROCUCT</p>
                    <p className=" flex justify-center w-[120px]">QUANTITY</p>
                    <p className=" flex justify-center w-[120px]">TOTAL</p>
                </div>
                <div className="flex justify-around items-center">
                    <div className=" w-[120px] h-[120px]">
                        <img src="./images/shop/foodBuffaloChicken.jpeg"></img>
                    </div>

                    <FFCountBtn />
                    <div className="flex justify-center items-centertext-[16px] text-[#18C5BF] font-bold w-[120px]">
                        <p>1</p>
                    </div>
                </div>
                <div className=" border-t-4 border-[#18C5BF] my-3 flex justify-end">
                    <button
                        className="my-[10px] p-1 w-[80px] rounded-full text-[#fff] bg-[#18C5BF]"
                        href="./cart"
                        onClick={() => {
                            console.log("pay");
                        }}
                    >
                        pay
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartContainer;
