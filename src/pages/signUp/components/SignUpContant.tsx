const SighUpContant: React.FunctionComponent = () => {
    return (
        <>
            <div className="flex justify-center min-w-[600px]">
                <div
                    className="bg-cover bg-center w-[100%] h-[85vh]"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/signup/signUp.jpeg"})` }}
                >
                    <div className=" grid place-content-center h-full bg-[#fff] bg-opacity-60 px-[30px]">
                        <div>
                            <p className="text-[20px] font-bold">name</p>
                            <input className="border h-[40px] w-[300px] text-[#000]  " placeholder="Name"></input>
                            <p className="text-[20px] font-bold">Account</p>
                            <input
                                className="border h-[40px] w-[300px] text-[#000]  "
                                placeholder="example@gmail.com"
                            ></input>
                            <p className="text-[20px] font-bold">Password</p>
                            <input className="border h-[40px] w-[300px] text-[#000]  "></input>
                            <p className="text-[20px] font-bold">Height</p>
                            <input className="border h-[40px] w-[300px] text-[#000]  "></input>
                            <p className="text-[20px] font-bold">weight</p>
                            <input className="border h-[40px] w-[300px] text-[#000]  "></input>
                        </div>
                        <div className="flex justify-end mt-[20px]">
                            <button
                                className="py-[5px] px-[30px] bg-[#18C5BF] rounded-full"
                                onClick={() => {
                                    console.log("send");
                                }}
                            >
                                <p className="text-[#fff] text-[20px] font-bold">Sign Up</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SighUpContant;
