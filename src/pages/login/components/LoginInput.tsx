const LoginInput: React.FunctionComponent = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    return (
        <>
            <div className="flex justify-center min-w-[600px]">
                <div
                    className="flex justify-center  bg-cover bg-center w-[100%] h-[85vh]"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/login.jpeg"})` }}
                >
                    <div className=" grid place-content-center w-full bg-[#fff] bg-opacity-60 px-[30px]">
                        <div className="flex-col">
                            <p className="text-[20px] font-bold">Account</p>
                            <input
                                type=""
                                placeholder="Example@gmail.com"
                                className="border h-[40px] w-[300px] text-[#000]  "
                            />
                            <p className="text-[20px] font-bold">Password</p>
                            <input type="" className="border h-[40px] w-[300px] text-[#000]" />
                        </div>
                        <div className="flex justify-end mt-[20px]">
                            <button
                                className="py-[5px] px-[30px] bg-[#18C5BF] rounded-full"
                                onClick={() => {
                                    console.log("send");
                                }}
                            >
                                <p className="text-[#fff] text-[20px] font-bold">Login</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default LoginInput;
