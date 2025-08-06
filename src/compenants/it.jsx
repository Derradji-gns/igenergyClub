import it1 from "/public/graphics/tt.jpg"
import it2 from "/public/graphics/tech-competition.jpg"
function IT() {
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
                          <div
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl"
                            role="tooltip"
                          >
                            {/* Body */}
                            <div className="p-4 sm:p-5">
                              <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                                <div className="shrink-0">
                                  <img
                                    className="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                    alt="Avatar"
                                  />
                                </div>

                                <div className="grow"></div>
                              </div>
                              <p className="text-sm text-gray-400">
                                Leyla is a Customer Success Specialist at
                                Preline and spends her time speaking to in-house
                                recruiters all over the world.
                              </p>
                            </div>
                            {/* End Body */}

                            {/* Footer */}
                            <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                              <ul className="text-xs space-x-3">
                                <li className="inline-block">
                                  <span className="font-semibold text-gray-200">
                                    56
                                  </span>
                                  <span className="text-gray-400">
                                    articles
                                  </span>
                                </li>
                                <li className="inline-block">
                                  <span className="font-semibold text-gray-200">
                                    1k+
                                  </span>
                                  <span className="text-gray-400">
                                    followers
                                  </span>
                                </li>
                              </ul>

                              <div>
                                <button
                                  type="button"
                                  className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path
                                      fillRule="evenodd"
                                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                                    />
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
                <h2 className="text-2xl text-white font-bold md:text-3xl">
                  IT Day :{" "}
                </h2>

                <p className="text-lg text-gray-400">
                  At IT Day, our mission has always been centered on spreading
                  technology awareness and empowering young minds to innovate
                  and grow. We believe that by creating a platform where
                  students and tech enthusiasts can share their work, attend
                  workshops, and connect with one another, we build more than
                  just knowledge—we build a community.
                </p>
              </div>

              <p className="text-lg text-gray-400">
                We’re proud to be part of an initiative that promotes
                creativity, learning, and open exchange. IT Day continues to
                grow as a hub where ideas turn into action, and passion for
                technology is celebrated.
              </p>

              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src={it1}
                  alt="Blog Image"
                />
                <figcaption className="mt-3 text-sm text-center text-gray-500">
                  IT Day : great chance
                </figcaption>
              </figure>

              <p className="text-lg text-gray-400">
                As IT Day has evolved, we’ve seen how it has helped students
                take bold steps—presenting their tech projects, giving live
                demos, and receiving feedback from professionals and peers.
                These experiences don’t just enhance technical skills; they
                build confidence, communication, and teamwork.
              </p>

              <p className="text-lg text-gray-400">
                We’ve also learned that the earlier students engage with
                real-world tech experiences, the faster they develop a mindset
                of problem-solving and innovation—skills that are critical in
                today’s world.
              </p>

              <br />

              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src={it2}
                  alt="Blog Image"
                />
                <figcaption className="mt-3 text-sm text-center text-gray-500">
                  <br />
                </figcaption>
              </figure>

              <div className="space-y-3">
                <h3 className="text-2xl text-white font-semibold">
                  Why IT Day?
                </h3>

                <p className="text-lg text-gray-400">
                  IT Day is more than a one-day event—it's the beginning of a movement. We believe in the power of sharing knowledge, ideas, and experiences. Whether you're a beginner exploring tech for the first time or a developer working on your fifth project, there’s a place for you here.


                </p>
              </div>



              <p className="text-lg text-gray-400">
               As our community continues to grow, so does our commitment to making technology accessible, inspiring, and collaborative for all.
              </p>


            </div>
            {/* End Content */}
          </div>
        </div>
        {/* End Blog Article */}

        {/* Sticky Share Group */}

        {/* Button */}


        {/* Button */}

        {/* Button */}

        {/* Button */}

        {/* Button */}
      </div>
    );
  };
  
  export default IT;