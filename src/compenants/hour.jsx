import logo from "./assets/sitelogo.jpg"
import Logo from "./assets/hour-logo.jpg"

import Part from "./part";

function Hour() {
    return (
  <div className="bg-gray-900 w-screen h-auto ">
  <div className=" flex w-full h-17 bg-gray-900 justify-center shadow-lg border-b border-gray-400">
              <div className=" bg-gray-900 flex   w-40 items-center h-full">
                  <img className="w-full h-full " src={logo}/>
                  
                  
  
              </div>
  
          </div>
      <div className="w-full h-10  mt-12 flex justify-start items-center pl-5 ">
        <img src={Logo} className="w-10 h-full bg-amber-400 "/>
        <h2 className="font-extrabold text-white text-xl pl-4 text-left">HOUR OF CODE</h2>
  
      </div>
      <div className="w-full h-70  mt-8">
        <h1 className="text-3xl text-left font-extrabold text-white pl-4">Teaching Members programming languages and problem solving</h1>
        <p className="text-gray-500 pl-4 mt-5 w-4/5 text-xl ">This Event is one of the most important events in our club<br/> because it's help members to understand programming and how to solve problems. </p>
        <div className="w-full h-20 flex mt-7 gap-2 pl-4">
        <button className="text-white ml-2 rounded w-25 h-12 py-2 bg-blue-500 hover:bg-blue-700">Join Now !</button>
        <button className="text-white ml-2 rounded w-40 h-12 py-2 bg-gray-500 hover:bg-gray-700">Last session winners</button>
        </div>
      </div>
      <div className="w-full h-120  mt-50 lg:mt-10">
        <Part title="Programming Lessons" caption="Teaching programming languages and fondamentals, presented by experts, engineers" src={""}/>
      </div>
      <hr className="w-full bg-white"/>
      <h6 className="text-white text-center p-3 ">@HOUR_OF-CODE</h6>
      </div>
    );
  };
  
  export default Hour;