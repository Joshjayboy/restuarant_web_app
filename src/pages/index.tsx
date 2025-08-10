import RestuarantNavBar from "@/components/RestuarantNavBar";

import Hero from "@/components/RestaurantHero";
import Footer from "@/components/RestaurantFooter";
import RestaurantMeal from "@/components/RestaurantMeal";

export default function Home() {
  return (
    <>
      <RestuarantNavBar />
      <Hero />
      <RestaurantMeal />
      <Footer />
    </>
  );
}
