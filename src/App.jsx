// Part B task 5
import menu from "./data.json";
import { useState } from "react";

// import components
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import ItemCard from "./components/ItemCard.jsx";
import ItemList from "./components/ItemList.jsx";

// print the title of the app in an h1 tag
// declear the toyTpes array for using in buttoms for filtering the items based on toyType
const toyTypes = [
  "All",
  "Puzzle",
  "Building Set",
  "Plush",
  "Outdoor",
  "Science Kit",
];
function App() {
  // print the value of indexing the first item in the menu array and store it in a variable called item
  const item = menu[0];
  // create a state variable called toyType and set it to "All" by default
  const [toyType, setToyType] = useState("All");

  const visible =
    toyType === "All" ? menu : menu.filter((item) => item.toyType === toyType);
  return (
    <main>
      <Header />
      <Hero />
      <h1 className="bg-amber-100 p-4">M26W7604 . Tiny Town Toys</h1>
      <p>We have {menu.length} menu items.</p>

      <ItemCard item={item} />
      {/* <ItemList items={menu} /> */}

      <div className="flex flex-wrap gap-2 px-6 pt-6">
        {toyTypes.map((type) => (
          <button
            key={type}
            onClick={() => setToyType(type)}
            className={
              type === toyType
                ? "px-3 py-1 rounded bg-amber-700 text-white"
                : "px-3 py-1 rounded bg-white border text-gray-700"
            }
          >
            {type}
          </button>
        ))}
      </div>
      <ItemList items={visible} />
      <Footer />
    </main>
  );
}

export default App;
