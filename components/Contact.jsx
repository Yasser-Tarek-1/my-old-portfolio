import React from "react";

const Contact = () => {
  return (
    <div className="w-full py-24" id="contact">
      <div className="container mx-auto p-4">
        <div>
          <p className="font-bold uppercase py-2 text-lg text-[#5651ef] ">
            Contact
          </p>
          <h2>Get In Touch</h2>
          <div className="shadow-gray-400 shadow-lg p-3  mt-14 rounded-lg md:w-[700px] mx-auto">
            <form>
              <div className="flex flex-col ">
                <div className="flex items-center justify-between flex-col sm:flex-row">
                  <div className="flex items-center justify-between sm:w-[48%] w-full">
                    <label
                      htmlFor="name"
                      className="text-sm w-14 font-semibold mr-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="outline-none border-[1px] border-gray-300 rounded-[4px]  w-full px-2"
                    />
                  </div>
                  <div className="flex items-center justify-between sm:w-[48%] w-full mt-2 sm:mt-0">
                    <label
                      htmlFor="email"
                      className="text-sm w-14 mr-1 font-semibold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="outline-none border-[1px] border-gray-300 rounded-[4px] w-full  px-2"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between w-full my-2">
                  <label
                    htmlFor="number"
                    className="text-sm w-14 mr-1  font-semibold"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="number"
                    className="outline-none border-[1px] border-gray-300 rounded-[4px] w-full px-2"
                  />
                </div>
                <div className="flex items-center justify-between w-full my-2">
                  <label
                    htmlFor="subject"
                    className="text-sm w-14 mr-1 font-semibold"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="outline-none border-[1px] border-gray-300 rounded-[4px] w-full px-2"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="msg" className="font-semibold">
                    Message
                  </label>
                  <textarea
                    className="w-full outline-none border-[1px] border-gray-300 rounded-[4px] py-2 px-4 min-h-[250px]"
                    id="msg"
                  />
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="px-8 py-2 rounded-full w-full bg-[#5651df] font-semibold mt-2 "
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
