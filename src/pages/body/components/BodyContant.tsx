const BodyContant: React.FunctionComponent = () => {
    return (
        <>
            <div
                className="min-w-[600px] max-w-[1200px] flex justify-center bg-left bg-no-repeat w-[100%] h-[85vh]"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/Body/bg.png"})` }}
            >
                <div className="bg-slate-200 w-full bg-opacity-60 flex-col md:bg-opacity-0">
                    <div className="flex justify-center my-[40px]">
                        <h3 className="text-[48px] text-[#18C5BF] font-bold">Your Info</h3>
                    </div>
                    <div className="flex justify-center my-[10px]">
                        <div className="flex-col">
                            <p className=" mx-[15px] text-[#18C5BF] text-[20px] font-bold">Height</p>
                            <input
                                className="w-[100px] mx-[10px] border-[1px] border-stone-900 bg-[#fff] text-[#18C5BF] rounded-md"
                                type="text"
                                value="cm"
                            />
                        </div>
                        <div>
                            <p className=" mx-[15px] text-[#18C5BF] text-[20px] font-bold">Weight</p>
                            <input
                                className="w-[100px] mx-[10px] border-[1px] border-stone-900 bg-[#fff] text-[#18C5BF] rounded-md"
                                type="text"
                                value="kg"
                            />
                        </div>
                    </div>
                    <div className=" flex justify-center my-[10px]">
                        <div className="flex-col">
                            <p className=" mx-[15px] text-[#18C5BF] text-[20px] font-bold">Birth data</p>
                            <input
                                className="w-[100px] mx-[10px] border-[1px] border-stone-900 bg-[#fff] text-[#18C5BF] rounded-md"
                                type="text"
                                value="DD"
                            />
                            <input
                                className="w-[100px] mx-[10px] border-[1px] border-stone-900 bg-[#fff] text-[#18C5BF] rounded-md"
                                type="text"
                                value="MM"
                            />
                            <input
                                className="w-[100px] mx-[10px] border-[1px] border-stone-900 bg-[#fff] text-[#18C5BF] rounded-md"
                                type="text"
                                value="YY"
                            />
                        </div>
                    </div>
                    <div className="flex-col my-[10px]">
                        <div className="flex justify-center">
                            <p className="mr-[150px] text-[#18C5BF] text-[20px] font-bold">Gender</p>
                        </div>
                        <div className="flex justify-center">
                            <input
                                className="w-[100px] mx-[10px] border-[1px] border-stone-900 bg-[#fff] text-[#18C5BF] rounded-md"
                                type="button"
                                value="Male"
                                onClick={() => {
                                    console.log("Male");
                                }}
                            />
                            <input
                                className="w-[100px] mx-[10px] border-[1px] border-stone-900 bg-[#fff] text-[#18C5BF] rounded-md"
                                type="button"
                                value="Female"
                                onClick={() => {
                                    console.log("Female");
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-[30px]">
                        <button
                            className="py-[5px] px-[30px] bg-[#18C5BF] rounded-full"
                            onClick={() => {
                                console.log("send");
                            }}
                        >
                            <p className="text-[#fff] text-[20px] font-bold">Get Your Info</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BodyContant;
