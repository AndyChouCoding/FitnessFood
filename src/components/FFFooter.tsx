


const FFFooter: React.FunctionComponent =() => {

    return (<>
        <div className="   flex items-center justify-center h-[100px] bg-[#D3E9E8] mt-[10px] min-w-[600px]">
            <div className=" ml-[20vh] ">
                <p className=" text-[#18C5BF] font-bold text-lg"> &copy; FITNESS FOOD</p>
            </div>
            <div className="mx-[10%] flex items-center">
                <img src="/images/footerIconIns.png" alt="" className="flex items-center w-[25px] h-25[px]" 
                    onClick={() => {
                        console.log('123')
                     }}
                />
                <img src="/images/footerIconTwt.png" alt="" className="flex items-center w-[25px] h-25[px] mx-[10px]"
                    onClick={() => {
                        console.log('456')
                     }}
                />
                <img src="/images/footerIconFcb.png" alt="" className="flex items-center w-[25px] h-25[px]"
                    onClick={() => {
                        console.log('789')
                     }}
                />
            </div>
        </div>
    </>);
}
export default FFFooter;