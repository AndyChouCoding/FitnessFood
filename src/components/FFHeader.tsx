/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Home from "pages/home";

const FFHeader: React.FunctionComponent = () => {
    const go = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-white border-b-[1px] border-gray-300 ">
            <div className="flex justify-between box-border h-[60px] lg:max-w-[1200px] lg:mx-auto min-w-[600px]">
                <img
                    src="/images/logo.jpg"
                    alt=""
                    onClick={() => {
                        go("/");
                    }}
                />
                {/* logo */}

                <nav className="items-center hidden lg:block lg:flex ">
                    <div className="mx-[30px] text-[#18C5BF] text-[22px] font-bold ">
                        <a href="./body">Body</a>
                    </div>
                    <div className="mx-[30px] text-[#18C5BF] text-[22px] font-bold ">
                        <a href="./shop">Shop</a>
                    </div>
                    <div className="mx-[30px] text-[#18C5BF] text-[22px] font-bold ">
                        <a href="./about">About</a>
                    </div>
                </nav>
                {/* navContiner */}

                <nav className="flex items-center">
                    <img
                        src="/images/cart.png"
                        alt=""
                        className="mr-[10px]"
                        onClick={() => {
                            go("/cart");
                        }}
                    />
                    {/* cart */}
                    <nav className="flex items-center hidden lg:block lg:flex">
                        <div className="mx-[5px] text-[#18C5BF] text-[16px]">
                            <a href="./login">Login</a>
                        </div>
                        <div className="mx-[5px] text-[#fff] text-[16px] bg-[#18C5BF] px-6 py-1 rounded-full">
                            <a href="./signUp">Sign Up</a>
                        </div>
                    </nav>
                    <label className="flex flex-col mx-[20px] lg:hidden" onClick={() => setIsNavOpen((prev) => !prev)}>
                        <span className="w-[30px] h-[5px] bg-[#18C5BF] "></span>
                        <span className="w-[30px] h-[5px] bg-[#18C5BF] my-2"></span>
                        <span className="w-[30px] h-[5px] bg-[#18C5BF]"></span>
                    </label>
                    {/* hamburger */}

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div className=" absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                            <svg
                                className="h-8 w-8 text-[#fff]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b my-8 uppercase">
                                <a href="./login">Login</a>
                            </li>
                            <li className="border-b my-8 uppercase">
                                <a href="./signup">SignUp</a>
                            </li>
                            <li className="border-b my-8 uppercase">
                                <a href="./body">Body</a>
                            </li>
                            <li className="border-b my-8 uppercase">
                                <a href="./shop">Shop</a>
                            </li>
                            <li className="border-b my-8 uppercase">
                                <a href="./about">About</a>
                            </li>
                        </ul>
                    </div>
                    <style>
                        {`
                            .hideMenuNav {
                                display: none;
                              }
                            .showMenuNav {
                                display: block;
                                position: absolute;
                                width: 100%;
                                height: 100vh;
                                top: 0;
                                left: 0;
                                background:#18C5BF;
                                color:#fff;
                                font-size:40px;
                                z-index: 10;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-evenly;
                                align-items: center;
                              }
                            `}
                    </style>
                    {/* menuBtn */}
                </nav>
                {/* cart&info&hamburger */}
            </div>
        </header>
    );
};
export default FFHeader;
