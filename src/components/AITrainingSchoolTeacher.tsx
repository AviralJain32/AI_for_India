import React from "react";
const ModuleCard = ({ title, duration, objectives, topics, outcomes, activities }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-5 transition-all duration-300">
      <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <strong>Duration:</strong> {duration}
      </p>
  
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-100">Objectives:</h4>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
          {objectives.map((obj, i) => <li key={i}>{obj}</li>)}
        </ul>
      </div>
  
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-100">Key Topics:</h4>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
          {topics.map((topic, i) => <li key={i}>{topic}</li>)}
        </ul>
      </div>
  
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-100">Outcomes:</h4>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
          {outcomes.map((outcome, i) => <li key={i}>{outcome}</li>)}
        </ul>
      </div>
  
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-100">Activities:</h4>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
          {activities.map((act, i) => <li key={i}>{act}</li>)}
        </ul>
      </div>
    </div>
  );

const modules = [
  {
    title: "Module 1: Understanding AI – Concepts and Context",
    duration: "3–4 hours",
    objectives: ["Understand what AI is, its history, and current relevance."],
    topics: [
      "What is AI? (narrow vs general AI)",
      "History and Evolution of AI",
      "AI in everyday life: voice assistants, recommendation systems, etc.",
      "Real-world applications of AI (education, health, agriculture, etc.)",
      "Myths and misconceptions about AI"
    ],
    outcomes: ["Define AI and its types", "Identify real-life applications of AI"],
    activities: ["Group discussion", "Videos", "Case studies"]
  },
  {
    title: "Module 2: Core Technologies Behind AI",
    duration: "5–6 hours",
    objectives: ["Understand key AI concepts and underlying technologies."],
    topics: [
      "Data and algorithms",
      "Machine Learning basics (supervised, unsupervised, reinforcement)",
      "Natural Language Processing",
      "Computer Vision and Robotics"
    ],
    outcomes: ["Recognize basic technologies behind AI", "Understand how data and algorithms work"],
    activities: ["Interactive simulations", "Concept mapping"]
  },
  {
    title: "Module 3: AI in Education – Tools and Applications",
    duration: "4–5 hours",
    objectives: ["Introduce AI-based educational tools for teaching and learning."],
    topics: [
      "Google Teachable Machine",
      "Scratch + ML extensions",
      "Chatbots in Education (ChatGPT, Dialogflow basics)",
      "Canva AI, Grammarly, and EdTech AI assistants"
    ],
    outcomes: ["Identify and use AI tools in teaching", "Explore AI for personalized learning"],
    activities: ["Hands-on exploration of tools"]
  },
  {
    title: "Module 4: Designing AI-integrated Lessons",
    duration: "6 hours",
    objectives: ["Enable teachers to incorporate AI concepts into subject areas."],
    topics: [
      "AI in Math, Science, Social Studies and Language classes",
      "Inquiry-based learning and project-based learning using AI",
      "Creating simple AI lesson plans",
      "Assessment strategies for AI concepts"
    ],
    outcomes: ["Plan and implement AI-integrated activities in class"],
    activities: ["Co-creation of lesson plans", "Peer review"]
  },
  {
    title: "Module 5: Ethical Use of AI",
    duration: "3–4 hours",
    objectives: ["Raise awareness of ethical issues in AI."],
    topics: [
      "Data bias and fairness",
      "Privacy and data protection",
      "AI and society: impact on jobs, democracy, and behaviour",
      "Ethical and Responsible use of AI tools in classroom"
    ],
    outcomes: ["Discuss AI's impact on society", "Promote ethical use of AI"],
    activities: ["Scenario analysis", "Group debates"]
  },
  {
    title: "Module 6: Hands-on Mini Project",
    duration: "6 hours",
    objectives: ["Apply learning through projects and peer assessment"],
    topics: [
      "Plan and execute a mini-AI project",
      "Chatbot for school FAQs",
      "Assessing student work in AI",
      "Using rubrics and reflective journals",
      "Student surveys analysed by ML models"
    ],
    outcomes: ["Build a basic AI-powered classroom project or lesson"],
    activities: ["Project presentations", "Portfolio submissions"]
  },
  {
    title: "Module 7: Capacity Building & Continuing AI Learning for Educators",
    duration: "2–3 hours",
    objectives: ["Encourage long-term development and networking"],
    topics: [
      "Communities of practice",
      "Online courses and certifications",
      "Resources for staying updated (MOOCs, forums, journals)",
      "Teacher communities and webinars"
    ],
    outcomes: ["Stay updated and connected to AI learning communities"],
    activities: ["Goal setting", "Action planning"]
  }
];
const AITrainingSchool = () => (
  <div className="min-h-screen px-4 py-10 sm:px-8 md:px-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 dark:text-indigo-400">
          AI Training Program for School Teachers
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Empowering school educators to integrate Artificial Intelligence into classrooms
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Duration: 30–40 hours | Target: Grades 6–12 | Format: Blended Learning
        </p>
      </div>

      <div className="space-y-8">
        {modules.map((mod, index) => (
          <ModuleCard key={index} {...mod} />
        ))}
      </div>

      <div className="bg-indigo-100 dark:bg-indigo-900 rounded-xl p-6 shadow-inner transition-all">
        <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">✅ Program Outcomes</h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 mt-3 space-y-1">
          <li>Explain core AI concepts to students</li>
          <li>Use and evaluate AI tools in teaching</li>
          <li>Develop responsible and ethical AI use practices</li>
          <li>Create and assess AI-integrated classroom projects</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AITrainingSchool;