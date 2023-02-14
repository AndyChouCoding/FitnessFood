import FFFooter from "components/FFFooter";
import FFHeader from "components/FFHeader";

const Login: React.FC = () => {
    return (
        <>
            <FFHeader />

            <div className="flex justify-center min-w-[600px]">
                <div
                    className="flex justify-center  bg-cover bg-center w-[100%] h-[85vh]"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/login/login.jpeg"})` }}
                >
                    <div className=" grid place-content-center w-full bg-[#fff] bg-opacity-60 px-[30px]">
                        <div className="flex justify-center min-w-[600px] text-[#18C5BF] text-[40px] font-bold">
                            <p>User,</p>
                            <h2>Welcome to back.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <FFFooter />
        </>
    );
};

export default Login;
