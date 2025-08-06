import hour1 from "/public/graphics/hour1.jpg"
import hour2 from "/public/graphics/hour2.jpg"

function Hour() {
    return (
  <div className="bg-gray-900 w-full h-auto ">

      
      {/* Blog Article */}
<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
  <div className="max-w-2xl">
    {/* Avatar Media */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">


        <div className="grow">
          <div className="flex justify-between items-center gap-x-2">
            <div>
              {/* Tooltip */}



                  {/* Dropdown Card */}
  
                    {/* End Body */}

                    {/* Footer */}



   
              {/* End Tooltip */}


            </div>

            {/* Button Group */}

            {/* End Button Group */}
          </div>
        </div>
      </div>
    </div>
    {/* End Avatar Media */}

    {/* Content */}
    <div className="space-y-5 md:space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl text-white font-bold md:text-3xl">Hour of Code: One Hour Can Spark a Lifetime of Innovation</h2>

        <p className="text-lg text-gray-400">Hour of Code is an engaging initiative that offers specialized training sessions across various fields of technology — all designed to introduce students and beginners to the world of coding and digital creation, one hour at a time.</p>
      </div>

      <p className="text-lg text-gray-400">It’s more than just an hour, it’s an invitation to explore, experiment, and get inspired by what technology can do.</p>

      <figure>
        <img className="w-full object-cover rounded-xl" src={hour1} alt="Blog Image" />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          <br /></figcaption>
      </figure>
      

      <p className="text-lg text-gray-400">Hour of Code is a global movement, and in our version of the event, we bring that energy to life through short, focused workshops that dive into different tech topics — from web development and game design to artificial intelligence and robotics.</p>

      <p className="text-lg text-gray-400">Each session is tailored to be beginner-friendly, yet powerful enough to leave a lasting impression.</p>

      <blockquote className="text-center p-4 sm:px-7">
        

      </blockquote>

      <figure>
        <img className="w-full object-cover rounded-xl" src={hour2} alt="Blog Image" />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          <br />
        </figcaption>
      </figure>

      <div className="space-y-3">
        <h3 className="text-2xl text-white font-semibold">Training in Many Tech Fields :</h3>

        <p className="text-lg text-gray-400">What makes Hour of Code special is its diversity of content. Participants don’t just sit and listen — they interact, build, and explore. <br /><br /> Our workshops cover areas like:</p>
      </div>

      <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-400">
        <li className="ps-2"> Web & App Development</li>
        <li className="ps-2"> Arduino & Hardware Basics.</li>
                <li className="ps-2">Cybersecurity Fundamentals</li>
        <li className="ps-2">Game Design and Animation</li>
                <li className="ps-2">Artificial Intelligence & Machine Learning</li>
        <li className="ps-2">UI/UX Design Principles</li>

      </ul>

      <p className="text-lg text-gray-400">One hour can change how someone sees technology. It can reveal hidden interests, spark curiosity, and even influence future career paths.
        <br /><br />
Hour of Code is our way of opening the door — and showing that with the right guidance, anyone can start creating..</p>


    </div>
    {/* End Content */}
  </div>
</div>
{/* End Blog Article */}

{/* Sticky Share Group */}

      {/* Button */}



      {/* Button */}

      {/* Button */}
    </div>



    );
  };
  
  export default Hour;