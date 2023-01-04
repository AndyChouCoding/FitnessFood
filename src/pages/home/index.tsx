import FFHeader from "components/FFHeader";
import FFFooter from "components/FFFooter";

const Home: React.FC = () => {
  return (
    <>
      <FFHeader />
      <section className="items-center min-w-[600px] lg:max-w-[1200px] lg:mx-auto md:flex">
        <img src="./images/homePageTitle.jpeg" alt="" 
             className=" w-[100vh] h-[40vh] md:w-[40vh] md:h-[30vh] md:ml-[10%] md:my-[40px] lg:w-[55vh] lg:h-[40vh] lg:my-[60px]"
        />
        <div>
        <div className=" flex justify-center ">
            <h1 className=" font-bold text-[60px] md:text-[40px] ">Get Fitness Life!</h1>
        </div>
        <div className=" flex justify-center">
            <p className=" w-[400px]">We have you covered this festive season with tasty dishes designed to fit your lifestyle.</p>
        </div>
        <div className="flex justify-center my-[30px]">
            <button className="rounded-full flex justify-center px-5 p-[10px] bg-[#18C5BF] hover:bg-[#D3E9E8] active:bg-[#18C5BF] focus:outline-none focus:ring focus:ring-[#18C5BF]">
              <a href="./cart/">Get Fitness</a>
            </button>
        </div>
        </div>
        
      </section>
      {/* HomeTitlePage */}

      <section className="min-w-[600px]">
          <h2 className="text-[50px] flex justify-center mb-[10px] md:text-[30px] lg:text-[30px]">Lean gains plan</h2>
          <div className="md:flex md:justify-center ">
              <div className=" bg-[#D3E9E8] pb-[20px] md:w-[25%] px-[30px]">
                  <div className="flex justify-center">
                      <img className="h-[350px] w-[350px] md:h-[100px] md:w-[100px] md:m-5 mt-[20px] rounded-3xl md:rounded-full " src="./images/content(title1).jpeg" alt="" />
                  </div>
                  <h3 className="flex justify-center text-[30px] md:text-[12px] md:font-bold md:mb-[10px]">Ideal package for:</h3>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">Men & women looking to maintain lean muscle and lose body fat</p>
                  </div>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">Maintaining a lean, toned physique</p>
                  </div>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">Active individuals needing to fuel their workouts</p>
                  </div>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">Sustaining a consistent diet that will boost energy levels alongside your training</p>
                  </div>
              </div>

              <div className="bg-[#D3E9E8] pb-[20px] md:w-[25%] px-[30px] md:mx-[30px]">
                  <div className="flex justify-center">
                      <img className="h-[350px] w-[350px] md:h-[100px] md:w-[100px] md:m-5 mt-[20px] rounded-3xl md:rounded-full " src="./images/content(title2).jpeg" alt="" />
                  </div>
                  <h3 className="flex justify-center text-[30px] md:text-[12px] md:font-bold md:mb-[10px]">10% calorie deficit:</h3>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">Choose your own nutrition preference</p>
                  </div>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">High protein to build and repair muscle</p>
                  </div>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">Adequate carbohydrates to fuel your workouts, ithout compromising your goal to stay lean</p>
                  </div>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">Slight calorie deficit to promote fat loss without compromising lean muscle mass</p>
                  </div>
              </div>
              
              <div className="bg-[#D3E9E8] pb-[20px] md:w-[25%] px-[30px]">
                  <div className="flex justify-center">
                      <img className="h-[350px] w-[350px] md:h-[100px] md:w-[100px] md:m-5 mt-[20px] rounded-3xl md:rounded-full " src="./images/content(title3).gif" alt="" />
                  </div>
                  <h3 className="flex justify-center text-[30px] md:text-[12px] md:font-bold md:mb-[10px]">All meals are:</h3>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">Nutritionally balanced with essential vitamins and minerals</p>
                  </div>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">Made using wholefood ingredients</p>
                  </div>
                  <div className="  flex justify-center items-start mb-[20px]">
                      <img className="   w-[25px] h-[25px]  mr-[5px]" src="./images/contentList.png" alt="" />
                      <p className="text-[12px] md:text-[10px] w-[300px]">Freshly prepared by an expert team of chefs the day before delivery</p>
                  </div>
              </div>
              




          </div>
          
      </section>
      
      <FFFooter />
    </>
  );
};

export default Home;


// Maintaining a lean, toned physique

// Active individuals needing to fuel their workouts

// Sustaining a consistent diet that will boost 
// energy levels alongside your training