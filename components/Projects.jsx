import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { useState, useMemo } from "react";
import styles from "../styles/Projects.module.css";
import projects from "../json/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  const [ShowMore, setShowMore] = useState(false);
  
  // Use useMemo instead of useEffect for better performance
  const displayedProjects = useMemo(() => {
    return ShowMore ? projects : projects.slice(0, 6);
  }, [ShowMore]);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-16">
          Featured Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.title}
              className={`${styles.project} h-[600px]`}
            >
              <div className="relative h-[350px] w-full mb-6 rounded-2xl overflow-hidden">
                {project.images.length === 1 ? (
                  <ExportedImage
                    src={project.images[0]}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={project.title}
                    loading="lazy"
                  />
                ) : (
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    loop
                    className="h-full w-full"
                  >
                    {project.images.map((img) => (
                      <SwiperSlide key={img}>
                        <ExportedImage
                          src={img}
                          fill
                          style={{ objectFit: "contain" }}
                          alt={project.title}
                          loading="lazy"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary-fg/10 text-primary-fg rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-gray-400">{project.year}</span>
                </div>

                <p className="text-gray-300 text-sm">{project.description}</p>

                <div className="flex gap-4 pt-4">
                  {project.buttons.map((btn) => (
                    <Link
                      key={btn.link}
                      href={btn.link}
                      className="px-4 py-2 rounded-lg border border-white/10 hover:bg-primary-fg hover:border-primary-fg hover:text-white transition-all duration-300"
                    >
                      {btn.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowMore(!ShowMore)}
          className="mx-auto mt-16 flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-primary-fg hover:border-primary-fg transition-all duration-300"
        >
          {ShowMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
