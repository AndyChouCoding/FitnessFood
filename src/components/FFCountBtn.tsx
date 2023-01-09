// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { set } from "immer/dist/internal";
import React, { useState } from "react";

const FFCountBtn: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);

    const countHandle = (num: number) => {
        setCount((prev) => {
            if (prev + num < 0) {
                return 0;
            }
            return prev + num;
        });
    };

    return (
        <>
            <div className="flex justify-center p-[20px] items-center w-[200px]">
                {/* <button className="flex p-[20px]" onClick={()=>setCount(0)} >Reset</button> */}
                <button
                    className="flex p-[12px] w-[20px] h-[20px] items-center justify-center  bg-[#18C5BF] text-[#fff] text-[30px]"
                    onClick={() => countHandle(-1)}
                >
                    -
                </button>
                <p className="mx-[20px]">{count}</p>
                <button
                    className="flex p-[12px] w-[20px] h-[20px] items-center justify-center  bg-[#18C5BF] text-[#fff] text-[30px]"
                    onClick={() => countHandle(1)}
                >
                    +
                </button>
            </div>
        </>
    );
};
export default FFCountBtn;
