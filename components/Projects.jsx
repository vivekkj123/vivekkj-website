import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";
import projects from "../json/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  const [ShowMore, setShowMore] = useState(false);
  const [Projects, setProjects] = useState([]);
  useEffect(() => {
    !ShowMore
      ? (setProjects(projects.slice(0, 6)))
      // ,
      //   document
      //     .getElementById("projects")
      //     .scrollIntoView({ behavior: "smooth", block: "center" })
      : setProjects(projects);
  }, [ShowMore]);
  return (
    <div
      id="projects"
      className="Projects text-center md:text-left md:p-20 mb-20"
    >
      <h1 className="text-4xl ml-10 md:text-6xl font-bold">Projects 🧑🏻‍💻</h1>
      <div className="projectGrid mt-20 grid lg:grid-cols-3 grid-cols-1">
        {Projects.map((project) => (
          <div className={styles.project} key={project.title}>
            <div className="h-64 w-full relative overflow-hidden">
              {/*  */}
              {project.images.length === 1 ? (
                <ExportedImage
                  key={project.images[0]}
                  src={project.images[0]}
                  placeholder="blur"
                  blurDataURL={project.images[0]}
                  fill
                  style={{objectFit:"scale-down"}}

                  alt={project.title}
                />
              ) : (
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className={styles.swiper}
                  loop
                >
                  {project.images.map((img) => (
                    <SwiperSlide key={img} className={styles.swiperSlide}>
                      <ExportedImage
                        src={img}
                        fill
                        style={{objectFit:"scale-down"}}
                        alt={project.title}
                        placeholder="blur"
                        blurDataURL={img}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div className="tags flex flex-wrap  my-4">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="bg-primary-fg m-1 text-primary-bg font-bold py-1 px-2 rounded-full text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xl">
            <h2 className="font-extrabold">{project.title}</h2>
            <h2 className="">{project.year}</h2>
            </div>
            <p className="mt-6">{project.description}</p>
            <div className="ButtonWrapper my-8 flex flex-wrap justify-around px-2">
              {project.buttons.map((btn) => (
                <Link
                  className="hover:bg-primary-fg hover:text-primary-bg delay-[0.1s] transition-colors border-2 border-primary-fg text-white  py-2 px-4 rounded-lg m-1"
                  href={btn.link}
                  key={btn.link}
                >
                  {btn.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          setShowMore(!ShowMore)
        }}
        className="mx-auto transition-opacity hover:bg-primary-bg hover:border-4 hover:border-primary-fg hover:text-primary-fg font-bold ViewMoreBtn cursor-pointer w-52 text-center m-24 rounded-full p-4 bg-primary-fg text-primary-bg"
      >
        <h2>{ShowMore ? "View Less..." : "View More..."}</h2>
      </div>
    </div>
  );
};

export default Projects;
