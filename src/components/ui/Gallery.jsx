export default function Gallery(props) {
  function zoomIn() {
    const overlay = document.createElement("div");
    overlay.className =
      "fixed top-0 left-0 z-[1000] flex flex-col items-center justify-center w-full h-full bg-black/80 cursor-zoom-out";

    const zoomedImg = document.createElement("img");
    zoomedImg.src = props.img;
    zoomedImg.alt = props.alt;
    zoomedImg.className = "w-[70vw] md:w-[35vw] h-auto rounded select-none";

    const tag = document.createElement("p");
    tag.textContent = props.tag;
    tag.className =
      "mt-5 px-2.5 py-1.5 border border-gray-500 rounded-full text-center text-xl text-gray-500";

    overlay.appendChild(zoomedImg);
    overlay.appendChild(tag);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", function () {
      document.body.removeChild(overlay);
    });
  }

  return (
    <div
      className="w-[325px] md:w-[300px] h-auto m-3 overflow-hidden rounded border-0 bg-gray-200 opacity-70 transition-all duration-300 ease-in-out 
                    hover:opacity-100 hover:cursor-zoom-in hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.2)]"
    >
      <img onClick={zoomIn} src={props.img} alt={props.alt} />
    </div>
  );
}
