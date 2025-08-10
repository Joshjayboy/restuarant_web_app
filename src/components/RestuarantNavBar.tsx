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
            <RestaurantButton onClick={() => setIsOpen(true)}>
              Add Meal
            </RestaurantButton>
            <RestaurantModal isOpen={isOpen} onClose={handleCloseModal} />
          
          </div>
        </div>
      </nav>
    </>
  );
};

export default RestuarantNavBar;
