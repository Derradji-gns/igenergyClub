import "tailwindcss";
function Part({title, caption, src}) {
    return(
        <div className="w-full h-120 lg:h-150">
            <h2 className="text-white text-left font-bold text-2xl p-5">{title}:</h2>
            <p className="text-gray-500 text-left  pl-4 text-xl">{caption}</p>
            <div className="w-full h-70 flex justify-around items-center mt-10">
                <img src={src} className="w-90 h-60 lg:w-120 lg:h-90 lg:mt-15 border-3 border-white rounded-xl"/>
            </div>
        </div>

    )
};

export default Part;