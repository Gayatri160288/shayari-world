import ShayariCard from "./ShayariCard";

function ShayariGrid({ shayaris }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shayaris.map((item) => (
        <ShayariCard
          key={item.id}
          id={item.id}
          text={item.text}
          category={item.category}
        />
      ))}
    </div>
  );
}

export default ShayariGrid;
