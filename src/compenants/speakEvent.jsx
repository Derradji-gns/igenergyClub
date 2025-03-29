import logo from "../assets/sitelogo.jpg"
import Part from "./part"
import Logo from "../assets/speak-logo.jpg"


function Speak() {
    return (
  <div className="bg-gray-900 w-screen h-auto ">
  <div className=" flex w-full h-17 bg-gray-900 justify-center shadow-lg border-b border-gray-400">
              <div className=" bg-gray-900 flex   w-40 items-center h-full">
                  <img className="w-full h-full " src={logo}/>
                  
                  
  
              </div>
  
          </div>
      <div className="w-full h-10  mt-12 flex justify-start items-center pl-5 ">
        <img src={Logo} className="w-10 h-full "/>
        <h2 className="font-extrabold text-white text-xl pl-4 text-left">SPEAK UP</h2>
  
      </div>
      <div className="w-full h-70  mt-8">
        <h1 className="text-3xl text-left font-extrabold text-white pl-4">An Event to boosts public speaking skills through talks and interactive discussions</h1>
        <p className="text-gray-500 pl-4 mt-5 w-4/5 text-xl ">This event is designed to enhance speaking skills through talks and interactive<br/> discussions and engaging talks, participants will gain confidence, refine their delivery, and improve communication in a supportive environment. </p>
        <div className="w-full h-20 flex mt-7 gap-2 pl-4">
        <button className="text-white ml-2 rounded w-25 h-12 py-2 bg-blue-500 hover:bg-blue-700">Join Now !</button>
        <button className="text-white ml-2 rounded w-40 h-12 py-2 bg-gray-500 hover:bg-gray-700">Last session winners</button>
        </div>
      </div>
      <div className="w-full h-120  mt-50 lg:mt-10">
        <Part title="Conference" caption="Rich Show contains a lot of informations presented by experts, ingeniers" src={"Conf"}/>
      </div>
      <div className="w-full h-120  mt-7">
        <Part title="Free Space" caption="Chance to take the mic and speak in front of pepole, it also a gold chance to practice languages" src={"space"}/>
      </div>
      <div className="w-full h-120  mt-7">
        <Part title="Collectif picture" caption="The Iconic part of course 😅" src={"coll"}/>
      </div>
      <hr className="w-full bg-white"/>
      <h6 className="text-white text-center p-3 ">@ SPEAK UP</h6>
      </div>
    );
  };
  
  export default Speak;