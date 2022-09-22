import React from "react";
import ProjectItem from "./ProjectItem";
import Images from "./Images";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-28">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Live Gym Tracker"
            backgroundImg={Images.fitnessTrackerThumbnail}
            type="Website module"
            tech="Vue.js, Chart.js, Node.js, PostgreSQL"
            role="Developer"
            team="Me"
            description="I offered to create a Live Gym Tracker for my university gym. It allows users to see live data about current number of people in the gym as well as previous trends, letting them choose their preferred time of working out. When the gym is open, the Gym Tracker resides in the main page of TU Delft X. It responsive and is offered both in English and Dutch."
            galleryImages={[
              Images.fitnessTracker1,
              Images.fitnessTracker2,
              Images.fitnessTracker3,
              Images.fitnessTracker4,
            ]}
          />
          <ProjectItem
            title="Go Green (Clima mutatio dolus)"
            backgroundImg={Images.goGreenThumbnail}
            type="Java Application"
            tech="Java, Spring, Maven, JUnit, Mockito, Heroku"
            role="Developer"
            team="7 people (SCRUM)"
            description="Our SCRUM team created and deployed a full-fledged Java application designed to track and improve users' environmentally-friendly habits. The process of improving habits was gameified and users were rewarded points and achievements based on their environmentally-friendly actions. Made in Java over the course of two months while following the SCRUM framework"
            galleryImages={[
              Images.goGreen1,
              Images.goGreen2,
              Images.goGreen3,
              Images.goGreen4,
              Images.goGreen5,
            ]}
          />
          <ProjectItem
            title="Weekly COVID-19 Statistics"
            backgroundImg={Images.covidAppThumbnail}
            type="Web App"
            tech="React, Node.js, Express, Docker"
            role="Developer"
            team="Me"
            description="Created a application which shows COVID-19 cases and deaths per country on a weekly basis. The country can be chosen in a dropdown menu which updates the chart dynamically. The application reads data from a publicly accessible endpoint, processes it in an Express server and serves it as a REST API endpoint to frontend, which is built on React. The application supports Docker image creation."
            galleryImages={[Images.covidApp1, Images.covidApp2]}
          />
          <ProjectItem
            title="Asteroids"
            backgroundImg={Images.asteroidsThumbnail}
            type="Java Application"
            tech="Java, LibGDX, SQL, Gitlab CI/CD"
            role="Developer"
            team="5 people (SCRUM)"
            description="We developed a version of the old-school Asteroids game with special attention to using correct software engineering methods and design patterns. We performed Requirements Analysis, created use case models, UML and Sequence Diagrams, analysed class couplng, cohesion and complexity. Used design patterns include State, Template Method. This project was created while following SCRUM methodology."
            galleryImages={[
              Images.asteroids1,
              Images.asteroids2,
              Images.asteroids3,
              Images.asteroids4,
            ]}
          />
          <ProjectItem
            title="Netflix Recommendation System"
            backgroundImg={Images.netflixPrizeThumbnail}
            type="Python Implementation/Analysis"
            tech="Python, Numpy, Pandas"
            role="Developer"
            team="2 people"
            description="Following the famous Netflix Prize challenge, me and my partner implemented a recommendation system for users and movies using Data Mining algorithms. We implemented multiple variations of Collaborative Filtering and Latent Factors and optimized the performance by tuning different similarity measures and hyperparameters. We then combined these algorithms to produce a final movie reccomendation system. Final RMSE score : 0.85"
            galleryImages={[
              Images.netflixPrize1,
              Images.netflixPrize2,
              Images.netflixPrize3,
            ]}
          />
          <ProjectItem
            title="Machine Learning Algorithm Analysis"
            backgroundImg={Images.mlAnalysisThumbnail}
            type="Python Implementation/Research Analysis"
            tech="Python, Numpy, Pandas"
            role="Developer"
            team="2 people"
            description="We implemented and experimentally analysed the performance of five different machine learning algorithms on two different datasets (US Census dataset and MNIST) with the task of classifying unseen test data. The algorithms include Gaussian Naive Bayes, Logistic Regression, K Nearest Neighbors, Support Vector Machines and Decision Trees. We then automated the hyper-parameter tuning of these algorithms to find the best possible classification performance for each of them."
            galleryImages={[
              Images.mlAnalysis1,
              Images.mlAnalysis2,
              Images.mlAnalysis3,
            ]}
          />
          <ProjectItem
            title="Raytracer"
            backgroundImg={Images.raytracerThumbnail}
            type="C++ Application"
            tech="C++, OpenGL"
            role="Developer"
            team="6 people"
            description="Our team developed a raytracer using OpenGL library. We implemented Bouding Box tree structure, acceleration data structures and multicore parallelization, hard & soft shadows, reflection and refraction effects, transparent objects, anti-aliasing."
            galleryImages={[
              Images.raytracer1,
              Images.raytracer2,
              Images.raytracer3,
              Images.raytracer4,
              Images.raytracer5,
            ]}
          />
          <ProjectItem
            title="Pacman Testing"
            backgroundImg={Images.pacmanTestingThumbnail}
            type="Java Testing Project"
            tech="Java, JUnit, Mockito, Gradle, Gitlab CI/CD"
            role="Developer"
            team="2 people"
            description="Completed a series of university assignments with the purpose of learning software testing techniques. Wrote unit, integration and system-level tests to test both individual system components and their integration. Used random fuzzing testing to detect anomalies in system's behavious. Used state-chart diagrams to test the logic of the system. Test-driven development was tried out by writing tests for new functionality of system and then implementing it."
            galleryImages={[
              Images.pacmanTesting1,
              Images.pacmanTesting2,
              Images.pacmanTesting3,
              Images.pacmanTesting4,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
