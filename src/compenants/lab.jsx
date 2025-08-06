import Lab1 from "/public/graphics/lab1.jpg"
import Lab2 from "/public/graphics/lab2.jpg"
function Lab() {
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
              <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">


                  {/* Dropdown Card */}
                  <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl" role="tooltip">
                    {/* Body */}
  
                    {/* End Body */}

                    {/* Footer */}

                    {/* End Footer */}
                  </div>
                  {/* End Dropdown Card */}
                </div>
              </div>
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
        <h2 className="text-2xl text-white font-bold md:text-3xl">Tech Lab: Where Arduino Makes Creativity</h2>

        <p className="text-lg text-gray-400">Tech Lab is a hands-on event dedicated to exploring the exciting world of Arduino-based projects. It’s a space where creativity, electronics, and programming come together — giving students the tools and guidance they need to bring ideas to life.</p>
      </div>

      <p className="text-lg text-gray-400">Whether you're building your first blinking LED or working on a full automation system, Tech Lab is where passion becomes a prototype.</p>

      <figure>
        <img className="w-full object-cover rounded-xl" src={Lab1} alt="Blog Image" />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
         <br />
        </figcaption>
      </figure>

      <p className="text-lg text-gray-400">At Tech Lab, we believe in learning by doing. This event invites students to roll up their sleeves and dive into the world of embedded systems, working with sensors, microcontrollers, and real-world components.</p>

      <p className="text-lg text-gray-400">Throughout the event, participants share their Arduino projects from smart home systems and robotic arms to weather stations and creative gadgets.</p>

      <blockquote className="text-center p-4 sm:px-7">

      </blockquote>

      <figure>
        <img className="w-full object-cover rounded-xl" src={Lab2} alt="Blog Image" />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          <br />
        </figcaption>
      </figure>

      <div className="space-y-3">
        <h3 className="text-2xl text-white font-semibold">What Tech Lab Offers ?</h3>

        <p className="text-lg text-gray-400">Tech Lab is designed to inspire both beginners and advanced learners, through workshops, demos, and peer collaboration.</p>
      </div>

      <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-400">
        <li className="ps-2">Live project showcases from student teams.</li>
        <li className="ps-2"> Beginner-friendly workshops introducing Arduino basics.</li>
                <li className="ps-2">Hands-on stations for testing sensors, motors, and modules.</li>
        <li className="ps-2">Team challenges that push creativity under time constraints.</li>
                <li className="ps-2">Mentoring sessions with experienced members and guests.</li>

      </ul>

       <h3 className="text-xl text-white">From Workshop to Workshop</h3>
      <p className="text-lg text-gray-400">
Tech Lab is more than an event — it’s the starting point of a journey into electronics and embedded systems. We aim to make technology accessible, interactive, and fun for everyone, no matter their level of experience.</p>


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
  
  export default Lab;