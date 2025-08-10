const Hero = () => {
  return (
    <div className="px-[5%] text-white flex flex-col md:flex-row justify-between items-center bg-[#FFB30E] min-h-[514px] overflow-hidden">
      {/* Text Section */}
      <div className="mt-[92px] md:mt-[2px] text-[32px] sm:text-[40px] md:text-[48px] flex-1 text-center md:text-left">
        <p className="font-bold sm:pt-[40px]">Are you starving?</p>
        <div className="text-[14px] sm:text-[16px] mt-2">
          Within a few clicks, find meals that are accessible near you
        </div>

        <div className="bg-white px-[16px] sm:px-[24px] py-[16px] sm:py-[24px] rounded-[16px] mt-[24px]">
          {/* Delivery / Pickup */}
          <div className="text-[16px] sm:text-[18px] font-bold flex flex-col sm:flex-row gap-2">
            <button className="text-[#F17228] rounded-[8px] px-[16px] sm:px-[24px] py-[8px] sm:py-[10px] bg-[#F172281A] w-full sm:w-auto">
              <div className="flex items-center justify-center sm:justify-start">
                <img src="/bike.svg" className="pr-[10px]" alt="bike" />
                Delivery
              </div>
            </button>
            <button className="text-[#757575] rounded-[8px] px-[16px] sm:px-[24px] py-[8px] sm:py-[10px] w-full sm:w-auto">
              <div className="flex items-center justify-center sm:justify-start">
                <img src="/shop.svg" className="pr-[10px]" alt="shop" />
                Pickup
              </div>
            </button>
          </div>

          <hr className="my-[12px]" />

          {/* Search Form */}
          <form className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex flex-1 w-full">
                <span className="inline-flex items-center px-3 text-sm rounded-s-md bg-[#F5F5F5]">
                  <img src="/search.svg" alt="search_logo" />
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
                className="px-4 py-2 w-full sm:w-auto text-white bg-gradient-to-r from-[#FF7A7A] to-[#F65900] hover:opacity-90 rounded-lg text-sm font-medium"
              >
                Find Meal
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[619px] md:h-[612px] pt-[32px] md:pt-[182px] flex items-center justify-center">
        <img
          src="/egg.png"
          alt="meal"
          className="w-full h-auto max-h-[400px] md:max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
