export const Item = ({ item, onDeleteItem, onHandle }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onHandle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};
