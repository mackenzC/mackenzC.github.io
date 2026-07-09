import Contacts from "./Contacts";

export default function About() {
  return (
    <>
      <h1 className="text-[2rem] md:text-[2.5rem] font-medium text-gray-300 ">
        Hi, I'm <span className="font-bold">Mackenzie</span>!
      </h1>

      <p className="text-justify text-[18px] md:text-[23px] mt-[10px]">
        I'm a recent Computer Science graduate with a passion for{" "}
        <a className="scroll-link-tech font-medium" href="#portfolio">
          interactive technology
        </a>{" "}
        and{" "}
        <a className="scroll-link-art font-medium" href="#gallery">
          digital art
        </a>
        . I create 2D illustrations in Krita and 3D models in Blender and
        explore different ways to combine art with programming to build
        interactive experiences.
      </p>
      <Contacts />
    </>
  );
}
