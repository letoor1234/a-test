import "./App.css";
import Page from "./components/Page/Page";

function App() {
  return (
    <Page
      cards={[
        {
          images: ["https://via.placeholder.com/150"],
          title: "Card Title",
          items: ["Item 1", "Item 2", "Item 3"],
          paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
        },
        {
          images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150",
          ],
          title: "Card Title",
          items: ["Item 1", "Item 2", "Item 3"],
          paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
        },
        {
          images: ["https://via.placeholder.com/150"],
          title: "Card Title",
          items: [],
          paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
        },
        {
          images: ["https://via.placeholder.com/150"],
          title: "Card Title",
          items: [],
          paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ],
        },
      ]}
    />
  );
}

export default App;
