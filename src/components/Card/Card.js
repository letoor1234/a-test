const Card = ({ images, title, items, paragraphs }) => {
  return (
    <div className="card max-w-96 h-64 rounded-md shadow-md bg-white flex items-start overflow-hidden text-[#353844] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer">
      <div className="h-full w-1/3 flex flex-col gap-1">
        {images.map((image, index) => (
          <img
            className="h-full object-cover"
            key={index}
            src={image}
            alt="placeholder"
          />
        ))}
      </div>
      <div className="w-2/3 flex flex-col items-start justify-start pl-6 px-2 py-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <ul className="list-none my-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex gap-2 items-center flex-start w-full font-bold"
            >
              <div className="w-2 h-2 rounded-full bg-[#D2AD81]" />
              {item}
            </li>
          ))}
        </ul>
        {paragraphs.map((paragraph, index) => (
          <p className="text-md text-gray-500 mb-2" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
