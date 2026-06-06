import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Cake Reservation System',
    description: 'A web application designed to facilitate the reservation of cakes for special occasions. Users can browse through a variety of cake options, select their desired cake, and make a reservation for pickup or delivery.',
    tech: ['PHP', 'CSS', 'MySQL'],
    image: '/cake.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Student Clearance and Monitoring System (SCMS)',
    description:
      'A comprehensive web application designed to streamline the student clearance process for educational institutions. Built with Angular for the frontend and PHP for the backend, SCMS offers an intuitive interface for students and administrators to manage clearance tasks efficiently.',
    tech: ['Angular', 'PHP', 'TypeScript', 'MySQL'],
    image: '/scams.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Clinic Management System',
    description:
      'A robust web application tailored for dental clinics, designed to manage patient records, appointments, and billing processes.',
    tech: ['Next.js', 'Bootstrap', 'TypeScript'],
    image: '/medgabay.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: ' Dental Clinic Management System',
    description:
      'A comprehensive web application designed to streamline the operations of a clinic, including patient management, appointment scheduling, and medical record keeping.',
    tech: ['Flask', 'Python', 'Bootstrap', 'HTML', 'MySQL'],
    image: '/dental.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Recipehub',
    description:
      'A web application that allows users to discover, share, and manage their favorite recipes. Users can create an account, submit their own recipes, and explore a wide variety of dishes from around the world.',
    tech: ['React.js', 'CSS', 'MySQL'],
    image: '/recipehub.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Pet Health Tracker',
    description:
      'A mobile application that helps pet owners monitor and manage their pets health records, appointments, and dietary needs.',
    tech: ['Dart', 'Flutter'],
    image: '/pethealth.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Keithston Coffee Shop',
    description:
      'A modern landing page for a coffee shop, designed to showcase their products and services.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    image: '/coffee.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Food Lover',
    description:
      'A simple and visually appealing landing page for a restaurant, designed to attract and engage visitors with their menu and services.',
    tech: ['HTML', 'CSS'],
    image: '/restaurant.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Travel Landing Page',
    description:
      'Visually appealing landing page for a travel agency, designed to attract and engage visitors.',
    tech: ['HTML', 'CSS'],
    image: '/travel.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'A sleek and modern portfolio website to showcase personal projects and skills.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/portfolio.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Elearning',
    description:
      'A modern e-learning platform designed to provide an engaging and interactive learning experience for students.',
    tech: ['React18', 'CSS', 'TypeScript'],
    image: '/elearn.png',
    liveUrl: '#',
    githubUrl: '',
  },
  {
    title: 'Foodie ecommerce',
    description:
      'A modern e-commerce platform designed for food enthusiasts to discover and purchase their favorite culinary products.',
    tech: ['React.js', 'CSS', 'TypeScript'],
    image: '/foodie.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Scramble Game',
    description:
      'A fun and engaging word game where players unscramble letters to form valid words.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/scramble.png',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 text-white">
      <div className="container mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl poppins-bold text-white">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mt-2" />

          <p className="text-gray-400 poppins-regular mt-4 max-w-lg mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl group hover:scale-[1.02] transition-all duration-500"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">

                {/* Project Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl poppins-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r from-purple-400 to-indigo-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed poppins-light flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10 poppins-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-5 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors poppins-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors poppins-medium"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <a
            href="https://github.com/Enzonggg?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm poppins-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-purple-400/60 hover:bg-purple-500/10"
          >
            Explore More Projects

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
