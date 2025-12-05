// import React from 'react';
// import { Card, CardContent } from "@/components/ui/card";

// const requirements = [
//   {
//     title: "✅ 1. Hardware Requirements",
//     items: [
//       "Computers/Laptops (at least 1 device per 2 students)",
//       "• Minimum: i5/i7 processor, 8GB RAM, 256GB SSD",
//       "High-Speed Internet Connection",
//       "Router/Wi-Fi Access Points",
//       "Uninterruptible Power Supply (UPS) or Inverter",
//       "Projector / Interactive Smart Board",
//       "Printers/Scanners (optional)",
//       "AI Hardware Kits (optional but recommended)",
//       "• Arduino / Raspberry Pi kits",
//       "• Sensors (IR, ultrasonic, temperature, etc.)",
//       "• AI-enabled robots (e.g., Cognimates, Zumi)",
//       "Furniture",
//       "• Workstations/tables and ergonomic chairs",
//       "• Storage cabinets for hardware and peripherals"
//     ]
//   },
//   {
//     title: "📦 2. Software Requirements",
//     items: [
//       "Operating System: Windows, Linux, or macOS",
//       "Programming Tools:",
//       "• Python (Thonny, Jupyter, VS Code)",
//       "• Scratch / MIT App Inventor",
//       "• AI tools: Teachable Machine, IBM Watson, Edge Impulse",
//       "Office Suite: MS Office / Google Workspace",
//       "AI Libraries: TensorFlow, Scikit-learn, OpenCV",
//       "Data Visualization Tools: Tableau, Google Data Studio (optional)"
//     ]
//   },
//   {
//     title: "👨‍🏫 3. Human Resources",
//     items: [
//       "AI Trainers / AI Experts",
//       "Lab Coordinator / IT Support Staff",
//       "Guest Mentors (optional, for industry exposure)"
//     ]
//   },
//   {
//     title: "📘 4. Curriculum & Learning Materials",
//     items: [
//       "Age-appropriate AI curriculum",
//       "Workbooks and Activity Sheets",
//       "Project Templates and Case Studies",
//       "Ethics and Responsible AI Guidelines"
//     ]
//   },
//   {
//     title: "🧠 5. Training & Capacity Building",
//     items: [
//       "Faculty development programs",
//       "Online certifications",
//       "Hackathons, quizzes and mini-projects"
//     ]
//   },
//   {
//     title: "🔗 6. Partnerships & Collaborations",
//     items: [
//       "Tie-ups with educational tech companies",
//       "Collaborations with NGOs",
//       "Support from AI startups / local institutions"
//     ]
//   },
//   {
//     title: "📝 7. Budgetary & Admin Requirements",
//     items: [
//       "Estimated Budget: ₹2–5 lakhs for basic setup",
//       "Approval from School Management",
//       "Annual Maintenance Plan (AMC)",
//       "Data Privacy Policy and consent forms for students"
//     ]
//   }
// ];

// const SchoolRequirements = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-6 space-y-6">
//       <h2 className="text-3xl font-bold mb-4 text-center">🏫 AI Lab Requirements for Schools</h2>
//       {requirements.map((section, index) => (
//         <Card key={index} className="shadow-lg">
//           <CardContent className="p-6 space-y-3">
//             <h3 className="text-xl font-semibold text-indigo-700">{section.title}</h3>
//             <ul className="list-disc list-inside space-y-1">
//               {section.items.map((item, idx) => (
//                 <li key={idx} className="text-white">{item}</li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default SchoolRequirements;


import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const requirements = [
  {
    title: "✅ 1. Hardware Requirements",
    items: [
      { text: "Computers/Laptops (at least 1 device per 2 students)", subItems: ["Minimum: i5/i7 processor, 8GB RAM, 256GB SSD"] },
      { text: "High-Speed Internet Connection" },
      { text: "Router/Wi-Fi Access Points" },
      { text: "Uninterruptible Power Supply (UPS) or Inverter" },
      { text: "Projector / Interactive Smart Board" },
      { text: "Printers/Scanners (optional)" },
      {
        text: "AI Hardware Kits (optional but recommended)",
        subItems: [
          "Arduino / Raspberry Pi kits",
          "Sensors (IR, ultrasonic, temperature, etc.)",
          "AI-enabled robots (e.g., Cognimates, Zumi)"
        ]
      },
      {
        text: "Furniture",
        subItems: [
          "Workstations/tables and ergonomic chairs",
          "Storage cabinets for hardware and peripherals"
        ]
      }
    ]
  },
  {
    title: "📦 2. Software Requirements",
    items: [
      { text: "Operating System: Windows, Linux, or macOS" },
      {
        text: "Programming Tools",
        subItems: [
          "Python (Thonny, Jupyter, VS Code)",
          "Scratch / MIT App Inventor",
          "AI tools: Teachable Machine, IBM Watson, Edge Impulse"
        ]
      },
      { text: "Office Suite: MS Office / Google Workspace" },
      { text: "AI Libraries: TensorFlow, Scikit-learn, OpenCV" },
      { text: "Data Visualization Tools: Tableau, Google Data Studio (optional)" }
    ]
  },
  {
    title: "👨‍🏫 3. Human Resources",
    items: [
      { text: "AI Trainers / AI Experts" },
      { text: "Lab Coordinator / IT Support Staff" },
      { text: "Guest Mentors (optional, for industry exposure)" }
    ]
  },
  {
    title: "📘 4. Curriculum & Learning Materials",
    items: [
      { text: "Age-appropriate AI curriculum" },
      { text: "Workbooks and Activity Sheets" },
      { text: "Project Templates and Case Studies" },
      { text: "Ethics and Responsible AI Guidelines" }
    ]
  },
  {
    title: "🧠 5. Training & Capacity Building",
    items: [
      { text: "Faculty development programs" },
      { text: "Online certifications" },
      { text: "Hackathons, quizzes and mini-projects" }
    ]
  },
  {
    title: "🔗 6. Partnerships & Collaborations",
    items: [
      { text: "Tie-ups with educational tech companies" },
      { text: "Collaborations with NGOs" },
      { text: "Support from AI startups / local institutions" }
    ]
  },
  {
    title: "📝 7. Budgetary & Admin Requirements",
    items: [
      { text: "Estimated Budget: ₹2–5 lakhs for basic setup" },
      { text: "Approval from School Management" },
      { text: "Annual Maintenance Plan (AMC)" },
      { text: "Data Privacy Policy and consent forms for students" }
    ]
  }
];

const SchoolRequirements = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">🏫 AI Lab Requirements for Schools</h2>
      {requirements.map((section, index) => (
        <Card key={index} className="shadow-lg bg-slate-900 text-white">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-indigo-400">{section.title}</h3>
            <ul className="space-y-2 list-disc list-inside">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <span>{item.text}</span>
                  {item.subItems && (
                    <ul className="list-circle list-inside ml-6 mt-1 space-y-1 text-sm text-slate-300">
                      {item.subItems.map((sub, subIdx) => (
                        <li key={subIdx}>{sub}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SchoolRequirements;

