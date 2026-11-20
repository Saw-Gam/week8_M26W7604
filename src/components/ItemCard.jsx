// Task 2 create a ItemCard Component and pass the props and using if else conditional statenment used then finding the appropriate message to display
function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
      <img src={item.toyPhoto} alt={item.toyName}
        className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-lg font-bold">{item.toyName}</h3>
      <p className="text-gray-600">{item.recommendedAge} years · ⭐ {item.kidRating}</p>
      {item.giftWrap ? (
        <span className="text-green-700 font-bold">Gift wrap OK</span>
      ) : (
        <span className="text-gray-400">No gift wrap</span>
      )}
    </div>
  );
}

export default ItemCard;