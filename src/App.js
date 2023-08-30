import { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { Stats } from "./components/Stats";
import { PackingList } from "./components/PackingList";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure you want to delete");
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onHandle={handleToggle}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
