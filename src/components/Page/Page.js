import Button from "../Button/Button";
import Card from "../Card/Card";

const Page = ({ cards }) => {
  return (
    <div className="page w-screen min-h-screen flex flex-col items-center justify-center py-10 px-6 gap-6">
      <h1 className="text-4xl font-bold text-[#353844] mb-4 text-[#1B264F] text-center">
        We make creative media <br /> that{" "}
        <span className="text-[#506BCA]">adds value</span>
      </h1>
      <div className="mx-auto sm:grid-cols-2 md:grid-cols-3 grid gap-4 mb-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <Button className="w-64" onClick={() => alert("Button Clicked")}>
        {" "}
        Get Started{" "}
      </Button>
    </div>
  );
};

export default Page;
