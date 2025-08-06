import energy from "/public/graphics/energy.jpg"
import energy2 from "/public/graphics/model1.jpg"
function Energy() {
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
        <h2 className="text-2xl text-white font-bold md:text-3xl">Energy Space: Where Ideas Meet Action</h2>

        <p className="text-lg text-gray-400">Energy Space is more than just an event — it’s a dynamic environment where students connect, collaborate, and celebrate progress. Each year, we bring together first-year students and experienced members of our club to share knowledge, showcase achievements, and ignite curiosity.</p>
      </div>

      <p className="text-lg text-gray-400">From interactive sessions to engaging discussions, Energy Space is designed to make newcomers feel welcomed, motivated, and inspired to start their journey in the world of technology and science.</p>

      <figure>
        <img className="w-full object-cover rounded-xl" src={energy} alt="Blog Image" />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          Happy members :)
        </figcaption>
      </figure>

      <p className="text-lg text-gray-400">For many students, Energy Space is their first contact with the world of tech innovation outside the classroom. It helps them realize they’re not alone — there’s a whole community ready to support them.</p>

      <p className="text-lg text-gray-400"> “I joined just to see what it’s about. I left with new friends, a clearer vision, and the motivation to start my own project.”
    — First-Year Participant</p>

      <blockquote className="text-center p-4 sm:px-7">


      </blockquote>

      <figure>
        <img className="w-full object-cover rounded-xl" src={energy2} alt="Blog Image" />
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          Great project Corner
        </figcaption>
      </figure>

      <div className="space-y-3">
        <h3 className="text-2xl text-white font-semibold">Why Energy Space Matters ?</h3>

        <p className="text-lg text-gray-400">As we grow, we’ve seen how important it is to create a space where early students can explore freely and see what’s possible. Energy Space is the spark that introduces them to the spirit of teamwork, creativity, and innovation.</p>
      </div>

      <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-400">
        <li className="ps-2">Showcasing achievements from previous projects and activities.</li>
        <li className="ps-2">Welcoming first-year students and helping them integrate smoothly into the club culture.</li>
        <li className="ps-2"> Encouraging exploration of tech tools, topics, and concepts in a friendly environment.</li>
        <li className="ps-2">Promoting collaboration through workshops, games, and team challenges.</li>
        <li className="ps-2">Building confidence and communication skills in a safe, supportive space.</li>

      </ul>

      <p className="text-lg text-gray-400">Energy Space is a starting point, not a final destination. It’s where passion begins to grow, where beginners feel safe to ask questions, and where the next generation of creators starts taking shape.</p>


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
  
  export default Energy;