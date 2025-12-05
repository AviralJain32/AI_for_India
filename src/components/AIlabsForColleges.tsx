// import React from 'react';

// const Section = ({ title, items, icon }) => (
//   <div className="mb-8">
//     <h3 className="text-2xl font-semibold text-saffron mb-4">{icon} {title}</h3>
//     <ul className="list-disc list-inside text-white/80 space-y-2 pl-4">
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );

// const CollegeRequirementsSection = () => {
//   return (
//     <section className="py-20 bg-dark-navy text-white px-6 md:px-16">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           College <span className="text-neon-teal">AI Lab Requirements</span>
//         </h2>

//         <Section
//           title="1. Infrastructure Requirements"
//           icon="🏫"
//           items={[
//             "Dedicated Lab Space (500–800 sq. ft.) with A/C and ventilation",
//             "High-End Workstations (i7/Ryzen 7, 16–32GB RAM, GPU RTX 3050+)",
//             "Power Backup with UPS and inverter",
//             "Smart Board / Projector / Display",
//             "Optional: Server/Edge Devices",
//             "Ergonomic Furniture & Lockable Storage",
//           ]}
//         />

//         <Section
//           title="2. Software & Tools"
//           icon="💻"
//           items={[
//             "OS: Ubuntu (preferred), Windows (dual boot optional)",
//             "Environments: Python (Jupyter, VS Code), R (optional), MATLAB",
//             "Frameworks: TensorFlow, PyTorch, Scikit-learn, OpenCV, CUDA Toolkit",
//             "Data Tools: MySQL, MongoDB, Tableau, Power BI",
//             "Cloud Platforms: GCP, AWS Educate, Azure (academic credits)",
//             "Version Control: Git, GitHub, GitLab",
//           ]}
//         />

//         <Section
//           title="3. Faculty & Human Resources"
//           icon="👨‍🏫"
//           items={[
//             "AI-Trained Faculty",
//             "Lab Assistants/Technicians",
//             "Guest Lecturers & Mentors",
//             "Research Coordinators",
//           ]}
//         />

//         <Section
//           title="4. Curriculum & Content"
//           icon="📘"
//           items={[
//             "AI/ML Syllabus (UG/PG, UGC/AICTE-aligned)",
//             "Modules: Python, ML, DL, NLP, CV, Ethics",
//             "Capstone Projects & Research Templates",
//             "Access to IEEE, Springer, etc.",
//           ]}
//         />

//         <Section
//           title="5. Partnerships & Collaboration"
//           icon="🤝"
//           items={[
//             "MoUs with Google, NVIDIA, IBM, etc.",
//             "Ties with IITs, IISc, and startups",
//             "Participation in SIH, AICTE Events, Kaggle",
//           ]}
//         />

//         <Section
//           title="6. Administrative & Policy"
//           icon="📋"
//           items={[
//             "Initial Budget Estimate: ₹10–30 lakhs",
//           ]}
//         />
//       </div>
//     </section>
//   );
// };

// export default CollegeRequirementsSection;



import React from 'react';

// const Section = ({ title, icon, children }) => (
//   <div className="mb-10">
//     <h3 className="text-2xl font-semibold text-saffron mb-4">
//       {icon} {title}
//     </h3>
//     <div className="text-white/80 space-y-2 pl-4">{children}</div>
//   </div>
// );

const Section = ({ title, icon, children }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-2xl md:text-3xl font-bold text-saffron tracking-tight">
        {title}
      </h3>
    </div>
    <div className="text-white/80 text-base md:text-lg leading-relaxed space-y-3 border-l-4 border-saffron pl-6">
      {children}
    </div>
  </div>
);

const CollegeRequirementsSection = () => {
  return (
    <section className="py-20 bg-dark-navy text-white px-6 md:px-16">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          College <span className="text-neon-teal">AI Lab Requirements</span>
        </h2>

        <Section title="1. Infrastructure Requirements" icon="🏫">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Dedicated Lab Space:</strong> 500–800 sq. ft., air-conditioned, well-lit, and ventilated.
            </li>
            <li>
              <strong>High-End Workstations:</strong> i7/Ryzen 7 CPU, 16–32GB RAM, 512GB SSD, NVIDIA RTX 3050+ GPU (1:1 or 1:2 ratio).
            </li>
            <li>Power Backup: UPS and inverter/generator support.</li>
            <li>Smart Board / Projector / Large Display for presentations.</li>
            <li>Optional: Server or Edge Devices for advanced computation.</li>
            <li>Ergonomic, modular furniture and lockable storage units.</li>
          </ul>
        </Section>

        <Section title="2. Software & Tools" icon="💻">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Operating Systems:</strong> Ubuntu (preferred for ML/DL), Windows (dual-boot setups supported).
            </li>
            <li>
              <strong>Programming Environments:</strong> Python (Jupyter Notebook, VS Code, PyCharm), R (optional), MATLAB (optional).
            </li>
            <li>
              <strong>AI/ML Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn, Keras, OpenCV, CUDA Toolkit (for GPU acceleration).
            </li>
            <li>
              <strong>Data Tools:</strong> MySQL, MongoDB, Tableau, Power BI.
            </li>
            <li>
              <strong>Cloud Platforms (with academic credits):</strong> Google Cloud, AWS Educate, Microsoft Azure.
            </li>
            <li>
              <strong>Version Control:</strong> Git, GitHub, GitLab.
            </li>
          </ul>
        </Section>

        <Section title="3. Faculty & Human Resources" icon="👨‍🏫">
          <ul className="list-disc list-inside space-y-2">
            <li>AI-Trained Faculty with certifications in AI/ML/Data Science.</li>
            <li>Dedicated Lab Assistants and Technicians.</li>
            <li>Industry Mentors and Guest Lecturers.</li>
            <li>Research Coordinators to guide projects and funding proposals.</li>
          </ul>
        </Section>

        <Section title="4. Curriculum & Content" icon="📘">
          <ul className="list-disc list-inside space-y-2">
            <li>
              UG/PG level AI & ML syllabus aligned with UGC/AICTE guidelines.
            </li>
            <li>
              <strong>Modular Curriculum includes:</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Python for Data Science</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Computer Vision</li>
                <li>Ethics & Responsible AI</li>
              </ul>
            </li>
            <li>Capstone project templates and research paper formats.</li>
            <li>Access to research journals like IEEE, Springer, etc.</li>
          </ul>
        </Section>

        <Section title="5. Partnerships & Industry Collaboration" icon="🤝">
          <ul className="list-disc list-inside space-y-2">
            <li>
              MoUs with AI leaders: Google, IBM, NVIDIA, Intel.
            </li>
            <li>
              Collaboration with institutions: IITs, IISc, startups.
            </li>
            <li>
              Participation in:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Smart India Hackathon</li>
                <li>AICTE and national innovation events</li>
                <li>Kaggle competitions</li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section title="6. Administrative & Policy Requirements" icon="📋">
          <ul className="list-disc list-inside space-y-2">
            <li>Initial Budget Estimate: ₹10–30 lakhs depending on scale.</li>
            <li>Annual Maintenance Contracts (AMC) for all hardware/software.</li>
            <li>Data Protection and Responsible AI Usage Guidelines.</li>
            <li>Defined Lab Usage Policies and Student Consent Forms.</li>
            <li>Encouragement for innovation proposals to DST, MeitY, AICTE, etc.</li>
          </ul>
        </Section>
      </div>
    </section>
  );
};

export default CollegeRequirementsSection;
