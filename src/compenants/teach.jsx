import Tech from "/public/graphics/techhub.jpg"
import Tech2 from "/public/graphics/tech2.jpg"
function Teach() {
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
                    <div className="p-4 sm:p-5">
                      <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                        <div className="shrink-0">
                          <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                        </div>

                        <div className="grow">

                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.
                      </p>
                    </div>
                    {/* End Body */}

                    {/* Footer */}
                    <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                      <ul className="text-xs space-x-3">
                        <li className="inline-block">
                          <span className="font-semibold text-gray-200">56</span>
                          <span className="text-gray-400">articles</span>
                        </li>
                        <li className="inline-block">
                          <span className="font-semibold text-gray-200">1k+</span>
                          <span className="text-gray-400">followers</span>
                        </li>
                      </ul>

                      <div>
                        <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                          Follow
                        </button>
                      </div>
                    </div>
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
        <h2 className="text-2xl text-white font-bold md:text-3xl">Tech Hub : IT competition</h2>

        <p className="text-lg text-gray-400">Welcome to the Tech Hub: IT Competition
Join us for an inspiring journey into the world of programming, where transparency, collaboration, and innovative coding ideas come together to create advanced software solutions. This event brings together programmers, developers, and designers to share knowledge, explore new technologies, and build outstanding projects.

Be part of a vibrant community inspired by the mission of fostering openness and teamwork in programming.</p>
      </div>

      <p className="text-lg text-gray-400">Whether you’re a startup, a freelance developer, or an IT professional, this is your chance to connect, learn, and grow.</p>

      <figure>
        <img className="w-full object-cover rounded-xl" src={Tech} alt="Blog Image" />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          Tech Hub : innovative competition
        </figcaption>
      </figure>

      <p className="text-lg text-gray-400">We know the power of sharing in programming is real, and we want to create an opportunity for everyone to explore how open collaboration and transparent coding can transform projects. </p>

      <p className="text-lg text-gray-400">This event is designed to bring programmers, developers, and tech teams together to share their work, learn from each other, and speed up the software development process.</p>

      <blockquote className="text-center p-4 sm:px-7">
  

      </blockquote>


      <figure>
        <img className="w-full object-cover rounded-xl" src={Tech2} alt="Blog Image" />
        <br />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
         
        </figcaption>
      </figure>

      <div className="space-y-3">
        <h3 className="text-2xl text-white font-semibold">The Main goals of this event</h3>


      </div>

      <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-400">
        <li className="ps-2">Enhance real-time collaboration among developers, making it easier for teams to stay updated with each other’s progress and code changes.</li>
        <li className="ps-2">Promote knowledge sharing by encouraging programmers to exchange solutions, coding tips, and best practices.</li>
        <li className="ps-2">Speed up problem-solving by allowing teams to detect bugs, review code, and implement improvements earlier in the development cycle.</li>
      <li className="ps-2">Encourage mentorship between experienced developers and newcomers, helping build skills faster.</li>
            <li className="ps-2">Create a space for innovation where participants can experiment with new programming tools, frameworks, and methodologies.</li>
                  <li className="ps-2">Foster transparency in software development so that every team member understands the project’s progress and challenges.</li>
                        <li className="ps-2">Build strong tech communities that continue collaborating beyond the event, creating long-term professional connections.</li>
      </ul>

      


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
  
  export default Teach;