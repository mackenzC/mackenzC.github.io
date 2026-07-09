export default function Card(props) {
  return (
    <div className="m-3 p-4 rounded border-0 bg-[#4a4666] opacity-50 transition-all duration-300 ease-in-out hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.2)]">
      <a
        className="text-gray-300 hover:text-green-400 transition-colors duration-200"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="flex flex-row justify-between text-2xl font-medium">
          {props.title}
          <img src="/assets/open.svg" alt="open project" />
        </h2>
      </a>
      <p className="text-gray-400">{props.year}</p>
      <p className="mb-2 text-[18px] md:text-[20px] text-gray-300">
        {props.desc}
      </p>

      {props.tags.map((tag, idx) => (
        <span
          className="mb-1 md:mb-0 mr-2 p-2 inline-block rounded-full border-2 border-gray-500"
          key={idx}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
