function Card({title, src, caption}) {

    return (
      
      <div className="grid grid-rows-2 items-center  justify-center w-90 h-30 mt-10 bg-gray-600 border-2 border-white rounded-2xl shadow-6xl shadow-white ">
        <div className=" flex justify-start items-center  w-full h-10 mb-10  ">
          <img
            className=" h-8 w-8 ml-5 mt-10  "
            src={src}
            alt=""
          />
          <h3 className=" text-start font-bold pl-4 mt-10 text-white text-2xl" ><a  href="#">{title}</a></h3>
          </div>
          <div className=" flex justify-start items-center  w-full lg:w-full h-20 mb-8  ">
            <p className=" mt-3 p-5 text-white ">{caption}</p>
            </div>
        
      </div>
    );
  };
  
  
  export default Card;
  