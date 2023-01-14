const AboutSectionOne: React.FunctionComponent = () => {
    return (
        <>
            <div className=" min-w-[600px] lg:max-w-[1200px] ">
                <div className="mt-[40px]">
                    <div className="flex justify-center">
                        <h2 className="text-[40px] lg:text-[48px]">Our Story</h2>
                    </div>
                    <div className="flex justify-center">
                        <p className=" w-[350px] lg:text-[20px]">
                            Born out of a passion for food, we’ve reinvented the meal delivery experience
                        </p>
                    </div>
                </div>
                <div className="my-[50px] md:flex md:justify-center">
                    <div className="bg-[#D3E9E8] md:bg-[#fff] h-[200px] flex justify-center items-center md:flex-col md:h-[300px] md:justify-start">
                        <div>
                            <img
                                className="w-[70px] h-[70px] mr-[20px] md:w-[60px] md:h-[60px]"
                                src="./images/About/contentOne.png"
                            ></img>
                        </div>
                        <div className="w-[350px] md:w-[200px]">
                            <h3 className="font-bold md:text-[16px] md:mt-[30px] md:mb-[40px]">
                                Delivering convenience
                            </h3>
                            <p className="">
                                Our specially curated, ready-to-eat meals save you hours of shopping, prepping, cooking
                                and counting macros.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#fff] h-[200px] flex justify-center items-center md:flex-col  md:h-[300px] md:justify-start md:mx-[5%]">
                        <div>
                            <img
                                className="w-[70px] h-[70px] mr-[20px] md:w-[60px] md:h-[60px]"
                                src="./images/About/contentTwo.png"
                            ></img>
                        </div>
                        <div className="">
                            <h3 className="font-bold md:text-[16px] md:mt-[30px] md:mb-[40px]">Driven by science</h3>
                            <p className="w-[350px] md:w-[200px]">
                                Top nutritionists create highly tailored plans to give you structure and consistency,
                                while our world first mobile app makes tracking your goals easy.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#D3E9E8] md:bg-[#fff] h-[200px] flex justify-center items-center md:flex-col  md:h-[300px] md:justify-start">
                        <div>
                            <img
                                className="w-[70px] h-[70px] mr-[20px] md:w-[60px] md:h-[60px]"
                                src="./images/About/contentThr.png"
                            ></img>
                        </div>
                        <div className="">
                            <h3 className="font-bold md:text-[16px] md:mt-[30px] md:mb-[40px]">Direct to your door</h3>
                            <p className="w-[350px] md:w-[200px]">No-fuss delivery, no-cook meals</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutSectionOne;
