import BrowseAllCategories from "@/Pages/BrowseAllCategories"
import PopularProduct from "@/Pages/PopularProducts"
import Packaging from "@/Pages/Packaging"
import SignsMarketing from "@/Pages/SignsMarketing"
import Stationery from "@/Pages/Stationery"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-sm:p-5">
      <BrowseAllCategories/>
      <PopularProduct/>
      <Packaging/>
      <SignsMarketing/>
    </main>
  );
}
