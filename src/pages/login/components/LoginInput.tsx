import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginInput: React.FunctionComponent = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const go = useNavigate();

    // const handleSubmit = (e: any) => {
    //     go("/loginSuccess");
    // };

    const handleSubmit = (e: any) => {
        // e.preventDefault(go("/"));
        console.log(Username);
        console.log(Password);
        if (Username.length < 4) {
        }
    };

    return (
        <>
            <div className="flex justify-center min-w-[600px]">
                <div
                    className="flex justify-center  bg-cover bg-center w-[100%] h-[85vh]"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/login/login.jpeg"})` }}
                >
                    <div className=" grid place-content-center w-full bg-[#fff] bg-opacity-60 px-[30px]">
                        <div className="flex-col">
                            <div className="h-[80px]">
                                <p className="text-[20px] font-bold">Account</p>
                                <input
                                    type="text"
                                    defaultValue={Username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                    placeholder="Example@gmail.com"
                                    className="border h-[40px] w-[300px] text-[#000]"
                                />
                                <p className="text-[red] text-[16px] font-bold hidden">error</p>
                            </div>
                            <div className="h-[80px]">
                                <p className="text-[20px] font-bold mt-[30px]">Password</p>
                                <input
                                    type="text"
                                    defaultValue={Password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    className="border h-[40px] w-[300px] text-[#000]"
                                />
                                <p className="text-[red] text-[16px] font-bold hidden">error</p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-[20px]">
                            <button
                                className="py-[5px] px-[30px]"
                                onClick={() => {
                                    go("/signup");
                                }}
                            >
                                <p className="text-[#18C5BF] text-[20px] font-bold">Sign Up</p>
                            </button>
                            <button className="py-[5px] px-[30px] bg-[#18C5BF] rounded-full" onClick={handleSubmit}>
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
