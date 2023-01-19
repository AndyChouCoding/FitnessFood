const HomeTitle: React.FunctionComponent = () => {
    return (
        <>
            <section className="items-center min-w-[600px] lg:max-w-[1200px] lg:mx-auto md:flex">
                <img
                    src="./images/homepage/homePageTitle.jpeg"
                    alt=""
                    className=" w-[100vh] h-[40vh] md:w-[40vh] md:h-[30vh] md:ml-[10%] md:my-[40px] lg:w-[55vh] lg:h-[40vh] lg:my-[60px]"
                />
                <div>
                    <div className=" flex justify-center ">
                        <h1 className=" font-bold text-[60px] md:text-[40px] ">Get Fitness Life!</h1>
                    </div>
                    <div className=" flex justify-center">
                        <p className=" w-[350px]">
                            We have you covered this festive season with tasty dishes designed to fit your lifestyle.
                        </p>
                    </div>
                    <div className="flex justify-center my-[30px]">
                        <button className="rounded-full flex justify-center px-5 p-[10px] bg-[#18C5BF] text-[#fff] hover:bg-[#D3E9E8] active:bg-[#18C5BF] focus:outline-none focus:ring focus:ring-[#18C5BF]">
                            <a href="./cart/">Get Fitness</a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeTitle;
