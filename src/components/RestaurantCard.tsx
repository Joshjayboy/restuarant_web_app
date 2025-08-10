import { useEffect, useState, useRef } from "react";
import { getMeals } from "../pages/api/RestaurantApi";

type MealType = {
  id: string;
  name: string;
  avatar: string;
  logo: string;
  price: number;
  rating: number;
  open: boolean;
};

const MealsWithModal = () => {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit" | "delete" | null>(
    null
  );
  const [selectedMeal, setSelectedMeal] = useState<MealType | null>(null);

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Form fields
  const [foodName, setFoodName] = useState("");
  const [foodRating, setFoodRating] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantLogo, setRestaurantLogo] = useState("");
  const [restaurantStatus, setRestaurantStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    foodName: "",
    foodRating: "",
    foodImage: "",
    restaurantName: "",
    restaurantLogo: "",
    restaurantStatus: "",
  });

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const data = await getMeals();
        setMeals(data);
      } catch (err) {
        console.error("Failed to fetch meals:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, []);

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
        "Restaurant Status must be ‘Open’ or ‘Closed’";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleAddMeal = () => {
    if (!validateForm()) return;

    const newMeal: MealType = {
      id: String(Date.now()),
      name: foodName,
      avatar: foodImage,
      logo: restaurantLogo,
      price: 10,
      rating: Number(foodRating),
      open: restaurantStatus === "Open",
    };

    setMeals((prev) => [newMeal, ...prev]);
    setShowModal(false);
    resetForm();
  };

  const handleEditMeal = () => {
    if (!validateForm() || !selectedMeal) return;

    setMeals((prev) =>
      prev.map((meal) =>
        meal.id === selectedMeal.id
          ? {
              ...meal,
              name: foodName,
              avatar: foodImage,
              logo: restaurantLogo,
              rating: Number(foodRating),
              open: restaurantStatus === "Open",
            }
          : meal
      )
    );
    setShowModal(false);
    resetForm();
  };

  const handleDeleteMeal = () => {
    if (!selectedMeal) return;
    setMeals((prev) => prev.filter((meal) => meal.id !== selectedMeal.id));
    setShowModal(false);
    resetForm();
  };

  const resetForm = () => {
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
    setSelectedMeal(null);
    setModalType(null);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openModal = (type: "add" | "edit" | "delete", meal?: MealType) => {
    setModalType(type);
    setSelectedMeal(meal || null);

    if (type === "edit" && meal) {
      setFoodName(meal.name);
      setFoodRating(String(meal.rating));
      setFoodImage(meal.avatar);
      setRestaurantLogo(meal.logo);
      setRestaurantStatus(meal.open ? "Open" : "Closed");
    }

    if (type === "add") {
      resetForm();
    }

    setShowModal(true);
  };

  return (
    <>
      {/* Meals grid / Empty state / Loading */}
      {loading ? (
        <div className="empty-state-message text-center py-10 text-gray-500">
          Loading meals...
        </div>
      ) : meals.length === 0 ? (
        <div className="empty-state-message text-center py-10 text-gray-500">
          No items available
        </div>
      ) : (
        <div className="px-4 sm:px-6 lg:px-[10%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {meals.map((meal, index) => (
            <div
              key={meal.id}
              style={{
                animation: `slideUp 0.3s ease-out ${index * 0.05}s forwards`,
                opacity: 0,
              }}
              className="rounded-lg overflow-hidden bg-white pb-6 transform transition-transform duration-150 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3]">
                <img
                  className="w-full h-full object-cover rounded-t-[16px]"
                  src={meal.avatar}
                  alt={meal.name}
                />
                <div className="absolute top-3 left-3 bg-[#F17228] bg-opacity-60 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center">
                  <img src="/tag.svg" alt="" className="pr-2 w-4 h-4" />$
                  {meal.price}
                </div>
              </div>

              {/* Meal Info */}
              <div
                className="py-4 flex justify-between items-start"
                ref={menuRef}
              >
                <div className="flex items-start">
                  <img
                    src={meal.logo}
                    className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-lg"
                    alt={meal.name}
                  />
                  <div className="pl-4">
                    <div className="font-bold text-lg sm:text-[18px] text-[#424242] leading-tight">
                      {meal.name}
                    </div>
                    <p className="text-yellow-500 text-sm sm:text-base">
                      ⭐ {meal.rating}
                    </p>
                  </div>
                </div>

                {/* Right "more" button */}
                <div className="relative">
                  <img
                    src="/More.svg"
                    alt="more"
                    className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
                    onClick={() =>
                      setOpenMenuId((prev) =>
                        prev === meal.id ? null : meal.id
                      )
                    }
                  />
                  {openMenuId === meal.id && (
                    <div className="absolute left-[-120px] top-0 bg-white shadow-md rounded-md border border-[#EDEEF1] w-[100px] py-2 z-50">
                      <button
                        className="block w-full text-[#425466] text-left px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          openModal("edit", meal);
                          setOpenMenuId(null);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-[#FF3B30] hover:bg-gray-100"
                        onClick={() => {
                          openModal("delete", meal);
                          setOpenMenuId(null);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Tag */}
              <div className=" pb-2">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                    meal.open
                      ? "bg-[#79B93C33] text-[#79B93C]"
                      : "bg-[#F1722833] text-[#F17228]"
                  }`}
                >
                  {meal.open ? "Open" : "Closed"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">
              {modalType === "add" && "Add New Meal"}
              {modalType === "edit" && "Edit Meal"}
              {modalType === "delete" && "Delete Meal"}
            </h2>

            {modalType === "delete" ? (
              <p>Are you sure you want to delete {selectedMeal?.name}?</p>
            ) : (
              <>
                <input
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  placeholder="Food Name"
                  className="border p-2 w-full mb-1"
                />
                {errors.foodName && (
                  <p className="text-red-500 text-sm">{errors.foodName}</p>
                )}
                <input
                  value={foodRating}
                  onChange={(e) => setFoodRating(e.target.value)}
                  placeholder="Food Rating"
                  className="border p-2 w-full mb-1"
                />
                {errors.foodRating && (
                  <p className="text-red-500 text-sm">{errors.foodRating}</p>
                )}
                <input
                  value={foodImage}
                  onChange={(e) => setFoodImage(e.target.value)}
                  placeholder="Food Image URL"
                  className="border p-2 w-full mb-1"
                />
                {errors.foodImage && (
                  <p className="text-red-500 text-sm">{errors.foodImage}</p>
                )}
                <input
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  placeholder="Restaurant Name"
                  className="border p-2 w-full mb-1"
                />
                {errors.restaurantName && (
                  <p className="text-red-500 text-sm">
                    {errors.restaurantName}
                  </p>
                )}
                <input
                  value={restaurantLogo}
                  onChange={(e) => setRestaurantLogo(e.target.value)}
                  placeholder="Restaurant Logo URL"
                  className="border p-2 w-full mb-1"
                />
                {errors.restaurantLogo && (
                  <p className="text-red-500 text-sm">
                    {errors.restaurantLogo}
                  </p>
                )}
                <input
                  value={restaurantStatus}
                  onChange={(e) => setRestaurantStatus(e.target.value)}
                  placeholder="Open or Closed"
                  className="border p-2 w-full mb-1"
                />
                {errors.restaurantStatus && (
                  <p className="text-red-500 text-sm">
                    {errors.restaurantStatus}
                  </p>
                )}
              </>
            )}

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              {modalType === "add" && (
                <button
                  onClick={handleAddMeal}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Add
                </button>
              )}
              {modalType === "edit" && (
                <button
                  onClick={handleEditMeal}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Save Changes
                </button>
              )}
              {modalType === "delete" && (
                <button
                  onClick={handleDeleteMeal}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Confirm Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default MealsWithModal;
