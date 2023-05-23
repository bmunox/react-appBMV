//import ListGroup from "./components/ListGroup";
import Alert from "../components/Alert";

function App_child() {
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
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App_child;
