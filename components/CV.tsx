import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Printer, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import Button from './ui/Button';

declare const html2pdf: any;

interface CVProps {
  onBack: () => void;
}

const CV: React.FC<CVProps> = ({ onBack }) => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleDownloadPDF = () => {
    const element = cvRef.current;
    if (!element) return;

    const opt = {
      margin: [10, 10, 10, 10], // top, left, bottom, right margins
      filename: 'Muhammad_Bin_Naveed_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="pt-28 pb-20 px-4 min-h-screen bg-warmGray-50 dark:bg-navy-950 transition-colors">
      
      {/* Navigation & Actions Header */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 no-print">
        <Button variant="ghost" onClick={onBack} icon={<ArrowLeft size={16} />} className="pl-0 hover:bg-transparent">
          Back to Portfolio
        </Button>

        <div className="flex flex-wrap gap-4 w-full md:w-auto justify-end">
          <Button variant="outline" onClick={handlePrint} icon={<Printer size={16} />}>
            Print
          </Button>
          <Button variant="outline" onClick={handleShare} icon={<Share2 size={16} />}>
            Share Link
          </Button>
          <Button variant="primary" onClick={handleDownloadPDF} icon={<Download size={16} />}>
            Download PDF
          </Button>
        </div>
      </div>

      {/* CV Container */}
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          ref={cvRef}
          className="bg-white text-navy-900 rounded-lg shadow-xl overflow-hidden print-shadow-none"
        >
          {/* Header Section */}
          <div className="bg-navy-50 p-8 md:p-12 text-center border-b border-navy-100">
            <img 
              src="public/muhamad-bin-naveed.jpg" 
              alt="Muhammad Bin Naveed" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-white"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">Muhammad Bin Naveed</h1>
            <h2 className="text-xl text-cyan-600 font-medium mb-4">Computer Science Student & Full Stack Developer</h2>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-navy-600 mt-4">
              <a href="mailto:muhammadbinnaveed01@gmail.com" className="flex items-center gap-2 hover:text-cyan-600">
                <Mail size={16} /> muhammadbinnaveed01@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <Phone size={16} /> +92 321 508 1609
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Lahore, Pakistan
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10">
            {/* Objective */}
            <section>
              <h3 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4 border-b border-navy-100 pb-2">Profile & Objective</h3>
              <p className="text-navy-700 leading-relaxed mb-4">
                A motivated and self-driven Computer Science student with a strong foundation in front-end development and a growing passion for modern web technologies. I enjoy building projects, solving technical challenges, and learning new tools through hands-on practice.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Aiming to grow my full-stack development skills and contribute to meaningful projects using React, Node.js, MongoDB, and modern UI/UX principles.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4 border-b border-navy-100 pb-2">Experience</h3>
              <div className="mb-4">
                <div className="flex justify-between items-baseline flex-wrap mb-1">
                  <h4 className="text-lg font-bold text-navy-900">MERN Stack Development</h4>
                  <span className="text-sm text-navy-500 italic">1 Year Learning Experience</span>
                </div>
                <p className="text-navy-700">
                  Hands-on training with MERN stack projects including API development, authentication, backend routing, and UI building. Developed responsive web applications using React.js and Tailwind CSS.
                </p>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4 border-b border-navy-100 pb-2">Education</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-warmGray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-navy-900">BS Computer Science</h4>
                  <p className="text-navy-600">Rise Group of Colleges, Lahore</p>
                  <p className="text-sm text-cyan-600 mt-1">On-going</p>
                </div>
                <div className="bg-warmGray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-navy-900">Full Stack Web Development</h4>
                  <p className="text-navy-600">EVS Training Institute, Lahore</p>
                  <p className="text-sm text-cyan-600 mt-1">Completed</p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4 border-b border-navy-100 pb-2">Technical Skills</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy-800 mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'Bootstrap 5', 'Tailwind CSS', 'JavaScript ES6+', 'React.js'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cyan-50 text-cyan-700 text-sm rounded-md font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-navy-800 mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MongoDB + Mongoose', 'RESTful APIs', 'CRUD', 'Auth'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-navy-100 text-navy-700 text-sm rounded-md font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-navy-800 mb-3">Tools & Architecture</h4>
                  <ul className="list-disc list-inside text-sm text-navy-700 space-y-1">
                    <li>MVC Pattern & OOP</li>
                    <li>Git & GitHub</li>
                    <li>NPM & Nodemon</li>
                    <li>Algorithmic Thinking</li>
                  </ul>
                </div>

                 <div>
                  <h4 className="font-semibold text-navy-800 mb-3">Soft Skills</h4>
                  <ul className="list-disc list-inside text-sm text-navy-700 space-y-1">
                    <li>Collaboration & Communication</li>
                    <li>Creativity</li>
                    <li>Time Management</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Personal Details */}
             <section>
              <h3 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4 border-b border-navy-100 pb-2">Personal Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-navy-700">
                <div>
                  <span className="block font-semibold text-navy-900">Date of Birth</span>
                  19 Oct 2005
                </div>
                <div>
                  <span className="block font-semibold text-navy-900">Nationality</span>
                  Pakistani
                </div>
                <div>
                  <span className="block font-semibold text-navy-900">Languages</span>
                  English, Urdu
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;