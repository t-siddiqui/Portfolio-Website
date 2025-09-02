import resumeImage from '../assets/Screenshot 2025-07-28 172723.png'; // Preview image
import resumePDF from '../assets/TALAT_RESUME_2025.pdf'; // Full PDF
import { useInViewAnimation } from './Ani';

export default function Resume() {
  const [ref, inView] = useInViewAnimation();

  return (
    <section
      id="resume"
      ref={ref}
      className={`section transition-all duration-1000 ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="section text-center">
        <h2 className="section-title mb-4">Resume</h2>

        {/* Resume Preview Image */}
        <div className="flex justify-center">
          <img
  src={resumeImage}
  alt="Resume Preview"
  className="rounded-lg glow-animate w-96 md:max-w-xl"
/>


        </div>

        {/* Download Button */}
        <div className="mt-6">
          <a
  href={resumePDF}
  download="Talat_Resume.pdf"
  className="inline-block bg-gradient-to-r from-blue-500 to-sky-400 text-white px-6 py-2 rounded-full glow-animate"
>
  📄 Download Resume (PDF)
</a>


        </div>
      </div>
    </section>
  );
}
