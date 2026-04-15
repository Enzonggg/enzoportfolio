import LogoLoop from './LogoLoop';
import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiVite,
  SiAngular,
  SiReact,
  SiPhp,
  SiPython,
  SiMysql,
  SiFirebase,
  SiLinux,
  SiDocker,
} from 'react-icons/si';

const techLogos = [
  { node: <SiAngular color="#a3b3ff" />, title: "Angular" },
  { node: <SiReact color="#a3b3ff" />, title: "React" },
  
  { node: <SiHtml5 color="#a3b3ff" />, title: "HTML" },
  { node: <SiCss3 color="#a3b3ff" />, title: "CSS" },
  { node: <SiJavascript color="#a3b3ff" />, title: "JavaScript" },
  { node: <SiTypescript color="#a3b3ff" />, title: "TypeScript" },
  { node: <SiTailwindcss color="#a3b3ff" />, title: "Tailwind CSS" },
  { node: <SiPhp color="#a3b3ff" />, title: "PHP" },
  { node: <SiPython color="#a3b3ff" />, title: "Python" },
  { node: <SiGit color="#a3b3ff" />, title: "Git" },
  { node: <SiVite color="#a3b3ff" />, title: "Vite" },
  { node: <SiMysql color="#a3b3ff" />, title: "MySQL" },
  { node: <SiFirebase color="#a3b3ff" />, title: "Firebase" },
  { node: <SiLinux color="#a3b3ff" />, title: "Linux" },
  { node: <SiDocker color="#a3b3ff" />, title: "Docker" },


];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="text-4xl poppins-bold text-white">About Me</h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={stagger} 
          whileInView="visible" 
          initial="hidden" 
          viewport={{ once: true }} 
          className="glass-card glow-border p-6 md:p-8 flex flex-col md:flex-row items-center gap-10"
        >
          {/* Left: Profile Card */}
          <motion.div variants={fadeLeft} className="flex justify-center md:justify-start">
            <ProfileCard />
          </motion.div>

          {/* Right: Bio */}
          <motion.div variants={stagger} className="flex-1 space-y-4 text-white">
            <motion.p variants={fadeUp} className="text-lg leading-relaxed poppins-regular">
              Hi! I'm <span className="gradient-text poppins-semibold">Lorenzo Aurin</span>, a passionate web developer dedicated to crafting engaging digital experiences. With a keen eye for design and a commitment to clean, efficient code, I strive to bring ideas to life on the web.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed poppins-extralight">
              My journey into web development began with a fascination for how websites are built and function. Over the years, I've honed my skills in various technologies, focusing on creating responsive and user-friendly applications.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed poppins-extralight">
              When I'm not coding, I enjoy exploring the latest tech trends, contributing to open-source projects, and collaborating with fellow developers to push the boundaries of what's possible on the web.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Tech Logos Loop */}
        <motion.div 
          transition={{ duration: 0.8, delay: 0.3 }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }} 
          className=" h-32 relative mt-5">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Technology stack"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
