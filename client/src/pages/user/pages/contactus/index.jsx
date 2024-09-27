import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div
        className="hero lg:min-h-screen sm:h-[600px] h-[800px] relative top-0"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className=" text-neutral-content place-content-around">
          <div className="lg:max-w-4xl max-2xl border-0 px-4 mt-[-50px]">
            <h1 className="mb-5 lg:text-5xl text-[30px] font-samibold text-center">
              Contact Us
            </h1>
            <p className="border-b-[1px] text-center leading-5 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              error aliquid voluptate ipsam ab suscipit iusto, eius voluptatem
              totam asperiores, pariatur maiores sunt possimus nam autem dolor
              vitae eum architecto!
            </p>
            <div className="grid grid-cols-2 mt-4 leading-5 sm:px-2">
              <div className=" sm:col-span-1 col-span-2 border-0 grid grid-cols-3 sm:h-[270px] mb-4">
                <div className="sm:flex border-0 sm:my-0 py-0 col-span-1 sm:col-span-3 ">
                  <div className="w-[100px]">
                    <figure className="m-auto mx-2 sm:mx-0">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Img"
                        className="rounded-full w-[50px] sm:w-[60px] h-auto"
                      />
                    </figure>
                  </div>
                  <div className="sm:ml-2 leading-4 mt-2 ">
                    <p className="text-[14px] sm:text-[20px]">
                      Address : <br />
                      <span className="text-[12px] sm:text-[13px]">
                        Lorem ipsum dolor lore Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Impedit, sapiente. sit
                        amet.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="sm:flex border-0 sm:my-0 py-0 col-span-1 sm:col-span-3 ">
                  <div className="w-[100px]">
                    <figure className="m-auto mx-2 sm:mx-0">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Img"
                        className="rounded-full w-[50px] sm:w-[60px] h-auto"
                      />
                    </figure>
                  </div>
                  <div className="sm:ml-2 leading-4 mt-2 ">
                    <p className="text-[14px] sm:text-[20px]">
                      Address : <br />
                      <span className="text-[12px] sm:text-[13px]">
                        Lorem ipsum dolor lore Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Impedit, sapiente. sit
                        amet.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="sm:flex border-0 sm:my-0 py-0 col-span-1 sm:col-span-3 ">
                  <div className="w-[100px]">
                    <figure className="m-auto mx-2 sm:mx-0">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Img"
                        className="rounded-full w-[50px] sm:w-[60px] h-auto"
                      />
                    </figure>
                  </div>
                  <div className="sm:ml-2 leading-4 mt-2 ">
                    <p className="text-[14px] sm:text-[20px]">
                      Address : <br />
                      <span className="text-[12px] sm:text-[13px]">
                        Lorem ipsum dolor lore Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Impedit, sapiente. sit
                        amet.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" sm:col-span-1 col-span-2 sm:mx-2">
                <form className=" py-6 px-12 border-[1px] rounded-sm ">
                  <div className="">
                    <label
                      htmlFor="name"
                      className="block text-[15px] font-medium leading-6 text-slate-300"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-sm border-[1.5px] px-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-200 border-slate-200 bg-inherit"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="email"
                      className="block text-[15px] font-medium leading-6 text-slate-300"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="family-name"
                        className="block w-full rounded-sm border-[1.5px] px-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-200 border-slate-200 bg-inherit"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="message"
                      className="block text-[15px] font-medium leading-6 text-slate-300"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        type="text-area"
                        autoComplete="family-name"
                        className="block w-full rounded-sm border-[1.5px] px-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-200 border-slate-200 bg-inherit"
                        placeholder="Message..."
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className=" mt-4 ">
                    <button className=" px-6 py-1.5 text-slate-300 hover:text-slate-100 font-semibold rounded-md ring-2 ring-inset ring-gray-400  focus:ring-2.5 focus:ring-inset focus:ring-sky-600 hover:ring-sky-400 ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
