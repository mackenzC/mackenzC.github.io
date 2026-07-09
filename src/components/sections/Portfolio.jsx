import Card from "../ui/Card";
import Gallery from "../ui/Gallery";

export default function Portfolio() {
  return (
    <>
      <h1 className="text-[2rem] md:text-[2.5rem] font-medium text-gray-300">
        Portfolio
      </h1>
      <section>
        <Card
          link="https://github.com/mackenzC/Brandeis-COSI-153a-FinalProject"
          title="Full Stack Journaling App"
          year="Fall 2025"
          desc="A journal app that supports adding/modifying/removing text entries and 
              photo attachments with automatic timestamps with persistent cloud storage."
          tags={["React Native", "TypeScript", "MongoDB"]}
        />
        <Card
          link="https://mackenzc.itch.io/star-killer"
          title="STAR KILLER"
          year="Summer 2025"
          desc="A short shooter game designed/developed for the GMTK 2025 Game Jam."
          tags={["Godot/GDScript", "Aesprite"]}
        />
        <Card
          link="https://mackenzc.github.io/portfolio-v4/"
          title="Portfolio V4"
          year="Summer 2025"
          desc="A redesign of my first personal website with a focus on aesthetics 
              and exploring the Three.js library."
          tags={["HTML/CSS", "JavaScript", "Three.js", "Blender"]}
        />
        <Card
          link="https://deborahengelberg.github.io/COSI116A-Brandeis-InfoVis-Fall24.github.io/"
          title="Data Visualization Project"
          year="Fall 2024"
          desc="A team project that visualizes and analyzes the influences
              of alcohol consumption across various countries."
          tags={["HTML/CSS", "JavaScript", "Pandas", "TopoJSON", "D3.js"]}
        />
      </section>

      {/* <section id="gallery" className="flex flex-col md:flex-row">
        <Gallery
          img="/gallery/fish-snatcher.png"
          alt="fish snatcher"
          tag="Medibang"
        />
        <Gallery
          img="/gallery/fish-snatcher.png"
          alt="fish snatcher"
          tag="Medibang"
        />
        <Gallery
          img="/gallery/fish-snatcher.png"
          alt="fish snatcher"
          tag="Medibang"
        />
      </section> */}
    </>
  );
}
