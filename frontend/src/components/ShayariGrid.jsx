import ShayariCard from "./ShayariCard";

function ShayariGrid({ shayaris, onImageClick }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shayaris.map((item) => (
        <ShayariCard
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          author={item.author}
          category={item.category?.name}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
}

export default ShayariGrid;
