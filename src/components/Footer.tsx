import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="border-t border-white/10 px-6 pb-8 pt-10 md:pt-16"
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-white md:grid-cols-3 md:gap-20">
        <div>
          <h2 className="gradient-text text-xl poppins-semibold">Lorenzo Aurin</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-400 poppins-light">
            Aspiring Full Stack Developer focused on building clean, responsive,
            and modern web experiences.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-wider text-gray-300 poppins-semibold">
            Navigation
          </h3>
          <ul className="space-y-2 text-gray-400 poppins-regular">
            <li>
              <a href="#about" className="transition hover:text-purple-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="transition hover:text-purple-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-purple-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-wider text-gray-300 poppins-semibold">
            Connect
          </h3>
          <div className="flex gap-5">
            <a
              href="https://github.com/Enzonggg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-purple-400"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/lorenzo-aurin-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-purple-400"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:aurinlorenzo699@gmail.com"
              className="text-gray-400 transition hover:text-purple-400"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://instagram.com/enzonggg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-purple-400"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-300 poppins-light">
        &copy; {new Date().getFullYear()} Lorenzo Aurin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
