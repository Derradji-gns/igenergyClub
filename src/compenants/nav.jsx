import "tailwindcss";
import navBack from '/public/graphics/sitelogo.jpg';

function Nav() {
    return(
        <div className=" flex w-full h-17 bg-gray-900 justify-center shadow-lg border-b border-gray-400">
            <div className=" bg-gray-900 flex   w-40 items-center h-full">
                <img className="w-full h-full" src={navBack}/>
                
                

            </div>

        </div>

    )
};

export default Nav;