import { useState } from "react";
import { Item } from "./Item";

export const PackingList = ({ items, onDeleteItem, onHandle, onClearList }) => {
  const [sortBy, setSortBy] = useState("sortByinput");

  let sortedValues;

  if (sortBy === "sortByinput") sortedValues = items;
  if (sortBy === "sortByDescription")
    sortedValues = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "sortByPacking")
    sortedValues = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedValues.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onHandle={onHandle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="sortByinput">Sort By input</option>
          <option value="sortByDescription">Sort By description</option>
          <option value="sortByPacking">Sort By Packing</option>
        </select>

        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
};
