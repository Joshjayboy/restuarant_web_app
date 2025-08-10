import axios from "axios";

const API_BASE_URL = "https://6852821e0594059b23cdd834.mockapi.io/Food";

// Create a reusable axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET all meals
export const getMeals = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error;
  }
};

// export default getMeals;

// // GET single meal by ID
// export const getMealById = async (id) => {
//   try {
//     const response = await api.get(`/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching meal ${id}:`, error);
//     throw error;
//   }
// };

// // CREATE new meal
// export const createMeal = async (meal) => {
//   try {
//     const response = await api.post("/", meal);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating meal:", error);
//     throw error;
//   }
// };

// // UPDATE existing meal
// interface Meal {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     [key: string]: any; // For any additional properties
// }

// export const updateMeal = async (
//     id: string,
//     updatedMeal: Partial<Meal>
// ): Promise<Meal> => {
//     try {
//         const response = await api.put<Meal>(`/${id}`, updatedMeal);
//         return response.data;
//     } catch (error) {
//         console.error(`Error updating meal ${id}:`, error);
//         throw error;
//     }
// };

// // UPDATE existing meal
// interface Meal {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
//     [key: string]: any; // For any additional properties
// }
// // DELETE meal
// export const deleteMeal = async (id) => {
//   try {
//     await api.delete(`/${id}`);
//     return true;
//   } catch (error) {
//     console.error(`Error deleting meal ${id}:`, error);
//     throw error;
//   }
// };
