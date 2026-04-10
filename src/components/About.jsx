// src/components/About.jsx

import { motion } from 'framer-motion';
import myPhoto from '../assets/Talat.png';
// Removed useInViewAnimation since it's not being used in the provided code
// import { useInViewAnimation } from './Ani';

export default function About() {
  // const [ref, inView] = useInViewAnimation(); // This hook was not used

  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT: Heading + Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="about-text-box"
        >
          <div className="glow-card dark:bg-gray-900 bg-white p-6 rounded-xl mt-4">
            {/* Apply the glow animation class to the section heading */}
            <h2 className="about-heading animate-glow-outline">
              About Me
            </h2>
        
            <p className="text-gray-800 dark:text-gray-200 text-lg mt-4"> {/* Added margin-top */}
              I'm <strong>Talatunnisa A. Siddiqui</strong>, a passionate B.Tech Computer Science and Engineering student with a strong interest in full-stack development, AI-powered applications, and software testing.

I specialize in building responsive and user-friendly web applications using the MERN stack, along with hands-on experience in REST API development and integration. I have foundational knowledge of cloud platforms including AWS, Azure, and GCP, and I am familiar with CI/CD pipelines for efficient deployment.

Alongside development, I focus on software quality through debugging, API testing, and writing basic test cases. I enjoy combining design, logic, and automation to solve real-world problems and continuously strive to learn modern technologies and best practices.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: Photo */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="about-photo-box"
        >
          <img
            src={myPhoto}
            alt="Talatunnisa"
            className="about-photo"
          />
        </motion.div>
      </div>
    </section>
  );
}