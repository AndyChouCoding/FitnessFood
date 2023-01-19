import FFFooter from "components/FFFooter";
import FFHeader from "components/FFHeader";
import CartContainer from "./components/CartContainer";

const Cart: React.FunctionComponent = () => {
    return (
        <>
            <FFHeader />
            <CartContainer />
            <FFFooter />
        </>
    );
};

export default Cart;
