import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Coursera',
    date: 'March 2025',
    credentialUrl: '#',
  },
  {
    title: 'Angular Developer Certification',
    issuer: 'Meta',
    date: 'January 2026',
    credentialUrl: '#',
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'HackerRank',
    date: 'December 2025',
  },
  {
    title: 'UI/UX Design Fundamentals',
    issuer: 'Udemy',
    date: 'October 2026',
    credentialUrl: '#',
  },
  {
    title: 'Angular',
    issuer: 'Sololearn',
    date: 'April 2026',
    credentialUrl: '#',
  },
  {
    title: 'Certified in Cybersecurity',
    issuer: 'ISC2',
    date: 'April 2026',
    credentialUrl: '#',
  },
  {
    title: 'Data Analytics Fundamentals',
    issuer: 'DataSense Analytics',
    date: 'May 2026',
    credentialUrl: '#',
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="px-6 py-24 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl text-white poppins-bold">Certifications</h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-indigo-500" />
          <p className="mx-auto mt-4 max-w-lg text-gray-400 poppins-regular">
            Some of the certifications I have earned to strengthen my skills
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="group relative rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-purple-500/10 to-indigo-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
                <h3 className="mb-2 text-xl transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-indigo-400 group-hover:bg-clip-text group-hover:text-transparent poppins-semibold">
                  {cert.title}
                </h3>

                <p className="mb-1 text-sm text-gray-300 poppins-medium">
                  {cert.issuer} • {cert.date}
                </p>

                {cert.description && (
                  <p className="mb-4 text-sm text-gray-400 poppins-light">{cert.description}</p>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 poppins-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
