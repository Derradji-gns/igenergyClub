function Cer({src, name, caption }) {
    return(
        <div className="w-70 h-87 border-2 border-white rounded-2xl ml-5 shadow-6xl shadow-white">
            <div className="flex items-center w-full lg:w-full h-10 p-2">
                <img src={src} className=" w-10 h-10  border-2 mt-8 rounded-full ml-3 "/>
                <h4 className="text-white font-bold pl-3 mt-4 pt-3">@{name}</h4>
            </div>
            <div className="flex w-full lg:w-full h-auto">
                <p className="text-gray-600 p-10 text-start">{caption}</p>
            </div>
        </div>

    )
};

export default Cer;