import React, { useState } from "react";
import RestaurantInputField from "@/components/RestaurantInputField";

type AddMealModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type MealType = {
  id: string;
  name: string;
  avatar: string;
  logo: string;
  price: number;
  rating: number;
  open: boolean;
};

export default function AddMealModal({ isOpen, onClose }: AddMealModalProps) {
  const [foodName, setFoodName] = useState("");
  const [foodRating, setFoodRating] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantLogo, setRestaurantLogo] = useState("");
  const [restaurantStatus, setRestaurantStatus] = useState("");

  const [errors, setErrors] = useState({
    foodName: "",
    foodRating: "",
    foodImage: "",
    restaurantName: "",
    restaurantLogo: "",
    restaurantStatus: "",
  });

  if (!isOpen) return null;

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      foodName: "",
      foodRating: "",
      foodImage: "",
      restaurantName: "",
      restaurantLogo: "",
      restaurantStatus: "",
    };

    if (!foodName.trim()) {
      newErrors.foodName = "Food Name is required";
      valid = false;
    }
    if (isNaN(Number(foodRating)) || !foodRating.trim()) {
      newErrors.foodRating = "Food Rating must be a number";
      valid = false;
    }
    if (!foodImage.trim()) {
      newErrors.foodImage = "Food Image URL is required";
      valid = false;
    }
    if (!restaurantName.trim()) {
      newErrors.restaurantName = "Restaurant Name is required";
      valid = false;
    }
    if (!restaurantLogo.trim()) {
      newErrors.restaurantLogo = "Restaurant Logo URL is required";
      valid = false;
    }
    if (restaurantStatus !== "Open" && restaurantStatus !== "Closed") {
      newErrors.restaurantStatus =
        "Restaurant Status must be ‘Open Now’ or ‘Closed’";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleAddMeal = () => {
    if (!validateForm()) return;

    console.log("Meal added:", {
      foodName,
      foodRating,
      foodImage,
      restaurantName,
      restaurantLogo,
      restaurantStatus,
    });

    // reset
    setFoodName("");
    setFoodRating("");
    setFoodImage("");
    setRestaurantName("");
    setRestaurantLogo("");
    setRestaurantStatus("");
    setErrors({
      foodName: "",
      foodRating: "",
      foodImage: "",
      restaurantName: "",
      restaurantLogo: "",
      restaurantStatus: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
        <h2 className="text-xl font-bold mb-4 text-center text-[#FF9A0E]">
          Add a Meal
        </h2>

        <RestaurantInputField
          id="food-name"
          placeholder="Food name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          error={errors.foodName}
        />
        <RestaurantInputField
          id="food-rating"
          placeholder="Food rating"
          value={foodRating}
          onChange={(e) => setFoodRating(e.target.value)}
          error={errors.foodRating}
        />
        <RestaurantInputField
          id="food-image"
          placeholder="Food image (link)"
          value={foodImage}
          onChange={(e) => setFoodImage(e.target.value)}
          error={errors.foodImage}
        />
        <RestaurantInputField
          id="restaurant-name"
          placeholder="Restaurant name"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          error={errors.restaurantName}
        />
        <RestaurantInputField
          id="restaurant-logo"
          placeholder="Restaurant logo (link)"
          value={restaurantLogo}
          onChange={(e) => setRestaurantLogo(e.target.value)}
          error={errors.restaurantLogo}
        />

        <select
          className="bg-[#F5F5F5] text-[#9E9E9E] rounded-md p-2 w-full mb-4"
          value={restaurantStatus}
          onChange={(e) => setRestaurantStatus(e.target.value)}
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
        {errors.restaurantStatus && (
          <p id="restaurant-status-error" className="text-red-500 text-sm mb-4">
            {errors.restaurantStatus}
          </p>
        )}

        <div className="flex justify-center gap-4 w-full">
          <button
            onClick={handleAddMeal}
            className="px-6 py-2 bg-[#FFBA26] hover:bg-[#FF9A0E] text-white rounded-md font-bold"
          >
            Add
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 border border-[#FFBA26] text-black rounded-md font-bold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
