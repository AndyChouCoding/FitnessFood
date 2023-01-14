import React from "react";
import FFCountBtn from "components/FFCountBtn";
import FFFCartSendBtn from "../../../components/FFFCartSendBtn";

interface IImage {
    id: number;
    src: string;
    title: string;
    classes: string;
    content: any;
}

const HomeCart: React.FunctionComponent = () => {
    const [targetImage, setTargetImage] = React.useState<IImage>({
        id: 1,
        src: "./images/foodCornWafflesWithPoachedEggs.jpeg",
        title: "Corn Waffles With Poached Eggs",
        classes: "",
        content: ["Low Calorie", "High Protein", "High in carbohydrates"],
    });

    const imagesData: IImage[] = [
        {
            id: 1,
            src: "./images/foodCornWafflesWithPoachedEggs.jpeg",
            title: "Corn Waffles With Poached Eggs",
            classes: "",
            content: ["Low Calorie", "High Protein", "High in carbohydrates"],
        },
        {
            id: 2,
            src: "./images/foodGrilledPeriPeriChicken.png",
            title: "Grilled Peri Peri Chicken",
            classes: "mt-[13px] lg:mt-[17px]",
            content: ["Low Calorie", "High Protein", "High in carbohydrates"],
        },
        {
            id: 3,
            src: "./images/foodRoastedCod&Ratatouille.png",
            title: "Roasted Cod & Ratatouille",
            classes: "mt-[13px] lg:mt-[17px]",
            content: ["Low Calorie", "High Protein", "High in carbohydrates"],
        },
        {
            id: 4,
            src: "./images/foodBuffaloChicken.jpeg",
            title: "Buffalo Chicken",
            classes: " mt-[13px] lg:mt-[17px]",
            content: ["Low Calorie", "High Protein", "High in carbohydrates"],
        },
    ];

    const onTargetImage = (data: any) => {
        setTargetImage(data);
    };

    return (
        <>
            <div className="min-w-[600px] md:flex md:justify-center ">
                <div className="flex justify-center mt-[50px] mb-[30px]">
                    <div>
                        <img
                            className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"
                            src={targetImage.src}
                            alt="targetImage.src"
                        />
                    </div>
                    <div className="ml-[20px]">
                        {imagesData.map((d) => {
                            return (
                                <div
                                    className="w-[65px] h-[65px] lg:w-[100px] lg:h-[100px]"
                                    onClick={() => onTargetImage(d)}
                                >
                                    <img className={`${d.classes}`} src={d.src} alt={d.src} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="min-w-[100px] md:ml-[3%] md:w-[300px] ">
                    <h3 className="flex justify-center md:justify-start text-[36px] md:w-[250px] md:text-[32px]  md:mt-[50px] md:mb-[10px] lg:text-[36px] ">
                        {targetImage.title}
                    </h3>
                    <div className="md:h-[100px] md:mt-[20px] lg:my-[50px]">
                        <ul className="hidden md:block w-[300px]  list-decimal">
                            <li className="list-decimal flex justify-start text-[16px] lg:text-[24px]">
                                {targetImage.content[0]}
                            </li>
                            <li className="list-decimal flex justify-start text-[16px] lg:text-[24px]">
                                {targetImage.content[1]}
                            </li>
                            <li className="list-decimal flex justify-start text-[16px] lg:text-[24px]">
                                {targetImage.content[2]}
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center mb-[30px] ">
                        <FFCountBtn />
                        <FFFCartSendBtn />
                    </div>
                </div>
            </div>
        </>
    );
};
export default HomeCart;
