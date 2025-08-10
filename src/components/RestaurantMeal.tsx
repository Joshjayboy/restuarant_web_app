import Meal from "@/components/RestaurantCard";
import Button from "@/components/RestaurantButton";

const RestaurantMeal = () => {
  const handleAddMeal = () => {
    console.log("Meal added!");
  };
  return (
    <>
      <div className="mt-[80px] mb-[48px] font-bold flex justify-center md:text-[43px] text-[22px]">
        Featured Meals
      </div>
      <Meal />
      <div className="flex justify-center mb-[48px] ">
        <Button onClick={handleAddMeal}>{`Load More >`}</Button>
      </div>
    </>
  );
};

export default RestaurantMeal;
