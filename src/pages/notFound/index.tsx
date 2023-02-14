import FFFooter from "components/FFFooter";
import FFHeader from "components/FFHeader";

const NotFound: React.FC = () => {
    return (
        <>
            <FFHeader />
            <p className=" grid place-content-center min-w-[600px] my-[300px] text-[40px] text-[#18C5BF] font-bold">
                Page Not Found
            </p>
            <FFFooter />
        </>
    );
};

export default NotFound;
