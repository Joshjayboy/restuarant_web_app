import RestaurantButton from "@/components/RestaurantButton";
import AddMealModal from "@/components/RestaurantModal";
import RestaurantModal from "@/components/RestaurantModal";
// import React from "react";
import { useState } from "react";

const RestuarantNavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMeal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const handleAddMeal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 px-[10%]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-[16px]">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/Logo.svg" className="h-8" alt="Flowbite Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <button
              // type={type}
              // onClick={onClick}
              className="text-white bg-[#FFBA26] hover:bg-[#FF9A0E] focus:outline-none font-bold rounded-[14px] text-[18px] px-4 py-2 text-center"
            >
              Add Modal
            </button> */}
            <RestaurantButton onClick={() => setIsOpen(true)}>
              Add Meal
            </RestaurantButton>
            <RestaurantModal isOpen={isOpen} onClose={handleCloseModal} />
            {/* Modal */}

            {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default RestuarantNavBar;
