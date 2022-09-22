import React from "react";
import asteroidsThumbnail from "../public/assets/thumbnails/asteroids.jpg";
import asteroids1 from "../public/assets/projects/asteroids/asteroids1.jpg";
import asteroids2 from "../public/assets/projects/asteroids/asteroids2.jpg";
import asteroids3 from "../public/assets/projects/asteroids/asteroids3.jpg";
import asteroids4 from "../public/assets/projects/asteroids/asteroids4.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-28">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Asteroids Game"
            backgroundImg={asteroidsThumbnail}
            type="Java Application"
            tech="Java, LibGDX, SQL, Gitlab CI/CD"
            role="Developer"
            team="5 people (SCRUM)"
            description="We developed a version of the old-school Asteroids game with special attention to using correct software engineering methods and design patterns. We performed Requirements Analysis, created use case models, UML and Sequence Diagrams, analysed class couplng, cohesion and complexity. Used design patterns include State, Template Method. This project was created while following SCRUM methodology."
            galleryImages={[asteroids1, asteroids2, asteroids3, asteroids4]}
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
