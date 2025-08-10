// const Hero = () => {
//   return (
//     <div className="px-[10%] text-white flex justify-between items-center bg-[#FFB30E] h-[514px] overflow-hidden">
//       <div className="text-[48px]">
//         Are you starving?
//         <div className="text-[12px]">
//           Within a few clicks, find meals that are accessible near you
//         </div>
//         <div className="bg-white px-[24px] py-[24px] rounded-[16px] mt-[24px]">
//           <div className="text-[18px] font-bold flex ">
//             <button className="text-[#F17228] rounded-[8px] px-[24px] py-[10px] bg-[#F172281A]">
//               <div className="flex ">
//                 <img src="/bike.svg" className="pr-[10px]" alt="bike" />
//                 Delivery
//               </div>
//             </button>
//             <button className="text-[#757575] rounded-[8px] px-[24px] py-[10px]">
//               <div className="flex ">
//                 <img src="/shop.svg" className="pr-[10px]" alt="bike" />
//                 Pickup
//               </div>
//             </button>
//           </div>
//           <hr className="py-[12px]" />
//           <form className="max-w-lg mx-auto">
//             <div className="flex items-center gap-3">
//               <div className="flex flex-1 w-[495px]">
//                 <span className="inline-flex items-center px-3 text-sm rounded-s-md bg-[#F5F5F5]">
//                   <img src="/search.svg" alt="search_logo" />
//                 </span>
//                 <input
//                   type="text"
//                   id="website-admin"
//                   className="rounded-none rounded-e-lg bg-[#F5F5F5] text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 text-sm p-2.5"
//                   placeholder="What do you like to eat today?"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="px-4 py-2 text-white bg-gradient-to-r from-[#FF7A7A] to-[#F65900] hover:opacity-90 rounded-lg text-sm font-medium"
//               >
//                 Find Meal
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="w-[619px] h-[612px] pt-[182px] flex items-center justify-center">
//         <img
//           src="/egg.png"
//           alt="meal"
//           className="w-full h-full object-contain"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <div className="px-4 sm:px-8 md:px-[10%] text-white flex flex-col lg:flex-row justify-between items-center bg-[#FFB30E] min-h-[400px] lg:h-[514px] overflow-hidden">
      {/* Left Section */}
      <div className="text-center lg:text-left max-w-xl">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight">
          Are you starving?
        </h1>
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] mt-2">
          Within a few clicks, find meals that are accessible near you
        </p>

        {/* Search Card */}
        <div className="bg-white px-4 sm:px-6 lg:px-[24px] py-4 sm:py-6 lg:py-[24px] rounded-[16px] mt-6">
          {/* Tabs */}
          <div className="text-[16px] sm:text-[18px] font-bold flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button className="text-[#F17228] rounded-[8px] px-4 sm:px-[24px] py-2 bg-[#F172281A] flex items-center justify-center">
              <img src="/bike.svg" className="pr-2 w-5 h-5" alt="bike" />
              Delivery
            </button>
            <button className="text-[#757575] rounded-[8px] px-4 sm:px-[24px] py-2 flex items-center justify-center">
              <img src="/shop.svg" className="pr-2 w-5 h-5" alt="shop" />
              Pickup
            </button>
          </div>

          <hr className="my-3" />

          {/* Search Form */}
          <form className="max-w-full">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="flex flex-1">
                <span className="inline-flex items-center px-3 text-sm rounded-s-md bg-[#F5F5F5]">
                  <img
                    src="/search.svg"
                    alt="search_logo"
                    className="w-5 h-5"
                  />
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-[#F5F5F5] text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 text-sm p-2.5"
                  placeholder="What do you like to eat today?"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-gradient-to-r from-[#FF7A7A] to-[#F65900] hover:opacity-90 rounded-lg text-sm font-medium"
              >
                Find Meal
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-2xl mt-8 lg:mt-0 flex items-center justify-center">
        <img
          src="/egg.png"
          alt="meal"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
