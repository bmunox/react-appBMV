//import ListGroup from "./components/ListGroup";
import ListGroup from "../components/ListGroup";
function App_Items() {
  let items = [
    "Costa Rica",
    "Panama",
    "Nicaragua",
    "Guatemala",
    "Honduras",
    "El Salvador",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Countries"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App_Items;
