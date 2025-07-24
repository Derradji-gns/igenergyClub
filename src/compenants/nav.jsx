import "tailwindcss";
import Igenergy from '/public/graphics/igenergyy.png';

function Nav() {
    return(
        <div className=" flex w-full h-17 bg-gray-900 justify-start shadow-lg border-b border-gray-400">
            <div className=" bg-gray-900 flex justify-center w-auto ml-5 items-center h-full sm:m-0">
                <img className="h-full w-20" src={Igenergy}></img>
                <h2 className=" text-white font-serif bg-gray-900 font-extrabold ">Igenergy Student's Club</h2>
                
                

            </div>

        </div>

    )
};

export default Nav;