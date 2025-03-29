import "tailwindcss";
function Header() {
    
    return(
        <div className=" flex justify-center items-center bg-gray-900  w-full h-140 lg:h-120" >
            < div id="child" className=" w-full">
            <h1 className="text-2xl font-bold text-white text-center "> IGENERGY STUDENT'S CLUB⚡️</h1>
            <h2 className="text-2xl font-bold text-blue-400 pt-2 text-center">Your Way To Innovation</h2>
            <div className="flex justify-center ">
            <p className="text-center  pt-3 text-white text-sm w-3/4 font-sans">A hub for Innovation and technology research, our club brings together passionate and active members to explore electronics, software, and emwrging tech . We collaborate , create, and push boundaries to shap the future ! </p></div>
            <div className="flex justify-center mt-5">
            <button className=" text-white ml-2 rounded px-5 py-2 bg-blue-500 hover:bg-blue-700" >join Us</button>
            <button className=" text-white ml-2 rounded px-5 py-2 bg-gray-500 hover:bg-gray-700">Sign Up</button> 
            </div>
                </div>


        </div>

    )
};
export default Header;