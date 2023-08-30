export const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">Start Adding some items to your packing list 🚀</p>
    );
  const numberItem = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numberItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? ` You got Everything Ready to Go ✈️`
          : `
        💼 You have ${numberItem} items in your List and you already packed
        ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
};
