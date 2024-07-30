import logo from "./logo.svg";
import "./App.css";
import Page from "./components/Page/Page";

function App() {
  return (
    <Page
      cards={[
        {
          title: "Card Title",
          description: "Card Description",
          image: "https://via.placeholder.com/150",
        },
        {
          title: "Card Title",
          description: "Card Description",
          image: "https://via.placeholder.com/150",
        },
        {
          title: "Card Title",
          description: "Card Description",
          image: "https://via.placeholder.com/150",
        },
        {
          title: "Card Title",
          description: "Card Description",
          image: "https://via.placeholder.com/150",
        },
      ]}
    />
  );
}

export default App;
