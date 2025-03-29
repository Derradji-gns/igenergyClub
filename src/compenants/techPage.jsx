import "tailwindcss";
import logo from "../assets/sitelogo.jpg"
import techlogo from "../assets/dernitech.jpg"
import Part from "./part"
import conf from "../assets/tech-conf.jpg"
import competition from "../assets/tech-competition.jpg"
import workshop from "../assets/tech-work.jpg"
import certification from "../assets/tech-cer.jpg"
import pic from "../assets/tech-pic.jpg"



function Tech() {
  return (
<div className="bg-gray-900 w-screen h-auto ">
<div className=" flex w-full h-17 bg-gray-900 justify-center shadow-lg border-b border-gray-400">
            <div className=" bg-gray-900 flex   w-40 items-center h-full">
                <img className="w-full h-full " src={logo}/>
                
                

            </div>

        </div>
    <div className="w-full h-10  mt-12 flex justify-start items-center pl-5 ">
      <img src={techlogo} className="w-10 h-full "/>
      <h2 className="font-extrabold text-white text-xl pl-4 text-left">TECH HUB</h2>

    </div>
    <div className="w-full h-70  mt-8">
      <h1 className="text-3xl text-left font-extrabold text-white pl-4">Great Competition For Programmers and IT Students</h1>
      <p className="text-gray-500 pl-4 mt-5 w-4/5 text-xl ">An annual Competition made for programmers challenges and IT students with real-world<br/> problem-solving tasks, fostering innovation, collaboration, and technical expertise . </p>
      <div className="w-full h-20 flex mt-7 gap-2 pl-4">
        <button className="text-white ml-2 rounded w-25 h-12 py-2 bg-blue-500 hover:bg-blue-700">Join Now !</button>
        <button className="text-white ml-2 rounded w-40 h-12 py-2 bg-gray-500 hover:bg-gray-700">Last session winners</button>
      </div>
    </div>
    <div className="w-full h-120  mt-50 lg:mt-10">
      <Part title="Conference" caption="Rich Show contains a lot of informations presented by experts, ingeniers" src={conf}/>
    </div>
    <div className="w-full h-120  mt-7">
      <Part title="Workshops" caption="Idial chanse to learn, practise and know new skills from harded persons " src={workshop}/>
    </div>
    <div className="w-full h-120  mt-7">
      <Part title="Competition" caption="The big part in our event when pepole comme from all specialities to solve programming challenges" src={competition}/>
    </div>
    <div className="w-full h-120  mt-7">
      <Part title="Certifications" caption="Last Part when winners takes thier certifications and giphts" src={certification}/>
    </div>
    <div className="w-full h-120  mt-7">
      <Part title="Collectif picture" caption="the iconic part ofcourse 😅" src={pic}/>
    </div>

    <hr className="w-full bg-white"/>
    <h6 className="text-white text-center p-3 ">@ TECH HUB</h6>
    </div>
  );
};

export default Tech;