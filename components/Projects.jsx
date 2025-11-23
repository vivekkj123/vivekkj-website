import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { useState, useMemo } from "react";
import styles from "../styles/Projects.module.css";
import projects from "../json/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [ShowMore, setShowMore] = useState(false);
  
  const displayedProjects = useMemo(() => {
    return ShowMore ? projects : projects.slice(0, 6);
  }, [ShowMore]);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">Some of my best works</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-fg/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-fg/10"
              >
                <div className="relative h-[200px] w-full overflow-hidden bg-[#0A0A0B]">
                  {project.images.length === 1 ? (
                    <div className="relative h-full w-full group-hover:scale-105 transition-transform duration-500">
                      <ExportedImage
                        src={project.images[0]}
                        fill
                        style={{ objectFit: "contain" }}
                        alt={project.title}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <Swiper
                      navigation={true}
                      pagination={{ clickable: true }}
                      modules={[Navigation, Pagination, Autoplay]}
                      loop
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      className="h-full w-full group-hover:scale-105 transition-transform duration-500"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-20" />
                </div>

                <div className="p-6 space-y-4 relative">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold group-hover:text-primary-fg transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] font-medium bg-primary-fg/10 text-primary-fg rounded-full border border-primary-fg/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-[10px] font-medium bg-white/5 text-gray-400 rounded-full">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 flex gap-3">
                    {project.buttons.map((btn) => (
                      <Link
                        key={btn.link}
                        href={btn.link}
                        target="_blank"
                        className="flex-1 text-center px-4 py-2 rounded-lg bg-white/5 hover:bg-primary-fg text-sm font-medium transition-all duration-300 border border-white/10 hover:border-primary-fg"
                      >
                        {btn.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => setShowMore(!ShowMore)}
            className="group flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-primary-fg hover:border-primary-fg transition-all duration-300"
          >
            <span>{ShowMore ? "Show Less" : "Show More Projects"}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-transform duration-300 ${ShowMore ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
