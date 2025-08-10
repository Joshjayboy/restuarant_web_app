// const Footer = () => {
//   return (
//     <>
//       <footer className="px-[10%] bg-[#212121]">
//         <div className="mx-auto w-full max-w-screen-xl pt-[100px] pb-6 lg:pb-8">
//           <div className="md:flex md:justify-between">
//             <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
//               <div>
//                 <h2 className="mb-6 text-[22px] font-bold text-white">
//                   Company
//                 </h2>
//                 <ul className="text-white font-medium">
//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       About us
//                     </a>
//                   </li>

//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       Team
//                     </a>
//                   </li>

//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       Careers
//                     </a>
//                   </li>

//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       Blog
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="mb-6 text-[22px] font-bold text-white">
//                   Contact
//                 </h2>
//                 <ul className="text-white font-medium">
//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       Help & Support
//                     </a>
//                   </li>

//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       Partner with us
//                     </a>
//                   </li>

//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       Ride with us
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="mb-6 text-[22px] font-bold text-white">Legal</h2>
//                 <ul className="text-white font-medium">
//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       Terms & Conditions
//                     </a>
//                   </li>

//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       Refund & Cancellation
//                     </a>
//                   </li>

//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       Privacy Policy
//                     </a>
//                   </li>

//                   <li className="mb-[16px]">
//                     <a className="hover:underline text-[18px] font-normal">
//                       Cookie Policy
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="mb-6 md:mb-0">
//               <div className="text-[#F5F5F5] text-[18px] font-bold">
//                 FOLLOW US
//               </div>
//               <div className="flex gap-[16px] mt-6">
//                 <img src="/instagram.svg" alt="facebbok" />

//                 <img src="/facebook.svg" alt="facebbok" />

//                 <img src="/twitter.svg" alt="facebbok" />
//               </div>

//               <div className="text-[#BBBBBB] text-[16px] font-bold mt-[43px]">
//                 Receive exclusive offers in your mailbox
//               </div>

//               <div className="mt-[40px]">
//                 <form className="max-w-lg mx-auto">
//                   <div className="flex items-center gap-3">
//                     <div className="flex flex-1 w-[334px]">
//                       <span className="inline-flex items-center px-3 text-sm rounded-s-md bg-[#424242]">
//                         <img src="/mail.svg" alt="search_logo" />
//                       </span>
//                       <input
//                         type="text"
//                         id="website-admin"
//                         className="rounded-none rounded-e-lg bg-[#424242] text-[#ADADAD] focus:ring-blue-500 focus:border-blue-500 block flex-1 text-sm p-2.5"
//                         placeholder="Enter your email"
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="px-4 py-2 text-white bg-gradient-to-r from-[#FFB800] to-[#FF8A00] hover:opacity-90 rounded-lg text-sm font-medium"
//                     >
//                       Subscribe
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <hr className="my-6 border-[#424242] sm:mx-auto lg:my-8" />
//           <div className="sm:flex sm:items-center text-[#F5F5F5] sm:justify-between">
//             <span className="text-[15px] text-[#F5F5F5] sm:text-center">
//               All rights Reserved <strong>© Your Company, 2021 </strong>
//             </span>
//             <div className="flex mt-4 sm:justify-center font-normal text-[15px] sm:mt-0">
//               Made with love by{" "}
//               <strong className="font-bold"> ThemeWagon</strong>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-[10%] bg-[#212121]">
      <div className="mx-auto w-full max-w-screen-xl pt-12 sm:pt-16 lg:pt-[100px] pb-6 lg:pb-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Company / Contact / Legal Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-4 sm:mb-6 text-lg sm:text-[22px] font-bold text-white">
                Company
              </h2>
              <ul className="text-white font-medium">
                {["About us", "Team", "Careers", "Blog"].map((item) => (
                  <li key={item} className="mb-3 sm:mb-[16px]">
                    <a className="hover:underline text-base sm:text-[18px] font-normal">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 sm:mb-6 text-lg sm:text-[22px] font-bold text-white">
                Contact
              </h2>
              <ul className="text-white font-medium">
                {["Help & Support", "Partner with us", "Ride with us"].map(
                  (item) => (
                    <li key={item} className="mb-3 sm:mb-[16px]">
                      <a className="hover:underline text-base sm:text-[18px] font-normal">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 sm:mb-6 text-lg sm:text-[22px] font-bold text-white">
                Legal
              </h2>
              <ul className="text-white font-medium">
                {[
                  "Terms & Conditions",
                  "Refund & Cancellation",
                  "Privacy Policy",
                  "Cookie Policy",
                ].map((item) => (
                  <li key={item} className="mb-3 sm:mb-[16px]">
                    <a className="hover:underline text-base sm:text-[18px] font-normal">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Follow Us + Newsletter */}
          <div className="flex flex-col items-start">
            <div className="text-[#F5F5F5] text-lg sm:text-[18px] font-bold">
              FOLLOW US
            </div>
            <div className="flex gap-4 sm:gap-[16px] mt-4 sm:mt-6">
              <img src="/instagram.svg" alt="instagram" />
              <img src="/facebook.svg" alt="facebook" />
              <img src="/twitter.svg" alt="twitter" />
            </div>

            <div className="text-[#BBBBBB] text-sm sm:text-[16px] font-bold mt-6 sm:mt-[43px]">
              Receive exclusive offers in your mailbox
            </div>

            <div className="mt-6 sm:mt-[40px] w-full">
              <form className="w-full max-w-lg">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex flex-1 w-full">
                    <span className="inline-flex items-center px-3 text-sm rounded-s-md bg-[#424242]">
                      <img src="/mail.svg" alt="mail" />
                    </span>
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-none rounded-e-lg bg-[#424242] text-[#ADADAD] focus:ring-blue-500 focus:border-blue-500 block flex-1 text-sm p-2.5"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-gradient-to-r from-[#FFB800] to-[#FF8A00] hover:opacity-90 rounded-lg text-sm font-medium w-full sm:w-auto"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="my-6 border-[#424242] sm:mx-auto lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center text-[#F5F5F5] sm:justify-between gap-3 text-center sm:text-left">
          <span className="text-sm sm:text-[15px]">
            All rights Reserved <strong>© Your Company, 2021 </strong>
          </span>
          <div className="text-sm sm:text-[15px]">
            Made with love by <strong className="font-bold">ThemeWagon</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
