import FFCountBtn from "components/FFCountBtn";
import FFFCartSendBtn from "components/FFFCartSendBtn";

const CartContainer: React.FunctionComponent = () => {
    return (
        <>
            <div className="mx-auto min-w-[600px] mt-[30px] only:lg:max-w-[1200px] w-[400px]">
                <h2
                    className="text-[#18C5BF]
                 text-[40px] font-bold flex justify-start py-[30px]"
                >
                    Your Cart
                </h2>
                <div className="flex justify-around text-[#18C5BF]">
                    <p className="w-[120px]">PROCUCT</p>
                    <p className="w-[120px]">QUANTITY</p>
                    <p className="w-[120px]">TOTAL</p>
                </div>
                <div className="flex justify-around items-center">
                    <div className=" w-[120px] h-[120px]">
                        <img src="./images/foodBuffaloChicken.jpeg"></img>
                    </div>

                    <FFCountBtn />
                    <div className="flex justify-center items-centertext-[16px] text-[#18C5BF] font-bold w-[120px]">
                        <p>1</p>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    );
};

export default CartContainer;
