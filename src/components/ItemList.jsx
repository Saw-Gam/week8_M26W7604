// Task 3
import ItemCard from "./ItemCard.jsx";

// Gets a list of menu items and shows one ItemCard for each.
function ItemList({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;