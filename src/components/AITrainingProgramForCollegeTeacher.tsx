import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FaClock, FaGraduationCap, FaCompass } from "react-icons/fa";

const ProgramMeta = ({ icon, label, value }) => (
  <div className="flex items-center gap-2 text-white/90">
    <span className="text-saffron text-xl">{icon}</span>
    <span className="font-medium">{label}:</span>
    <span>{value}</span>
  </div>
);

const SectionHeader = ({ title, icon }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="text-3xl text-saffron">{icon}</span>
    <h2 className="text-2xl md:text-4xl font-bold text-center tracking-tight text-white">{title}</h2>
  </div>
);

const SubList = ({ title, items }) => (
  <div className="mb-3">
    <h4 className="font-semibold text-saffron">{title}</h4>
    <ul className="list-disc pl-6 text-white/80 space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

const modules = [
  {
    title: "Module 1: Foundations of Artificial Intelligence",
    duration: "4–5 hours",
    objectives: ["Understand what AI is and its role in academia and industry"],
    topics: [
      "AI definition and history",
      "Types of AI (narrow, general, strong)",
      "AI in education, healthcare, business, and research"
    ],
    outcomes: [
      "Explain key AI concepts and terminologies",
      "Recognize the scope of AI across disciplines",
      "Discuss AI’s transformative impact on society"
    ],
    activities: ["Case study discussions", "AI timeline mapping"]
  },
  {
    title: "Module 2: Mathematics & Programming Essentials for AI",
    duration: "6–8 hours",
    objectives: ["Build foundational skills required for understanding AI algorithms"],
    topics: [
      "Linear Algebra, Probability, Statistics",
      "Python basics for AI",
      "Libraries: NumPy, pandas, matplotlib"
    ],
    outcomes: [
      "Apply basic math for AI problem-solving",
      "Write simple Python programs",
      "Use Python libraries to manipulate and visualize data"
    ],
    activities: ["Coding exercises in Jupyter notebooks"]
  },
  {
    title: "Module 3: Machine Learning Fundamentals",
    duration: "8–10 hours",
    objectives: ["Learn basic ML models and their applications"],
    topics: [
      "Supervised, Unsupervised, Reinforcement Learning",
      "Algorithms: Linear Regression, Decision Trees, k-NN, Clustering",
      "Train/test split, model evaluation"
    ],
    outcomes: [
      "Describe different ML approaches and algorithms",
      "Train basic ML models using real-world datasets",
      "Evaluate ML model accuracy and performance"
    ],
    tools: ["scikit-learn", "Colab notebooks"]
  },
  {
    title: "Module 4: Deep Learning and Neural Networks",
    duration: "8–10 hours",
    objectives: ["Understand and implement neural networks"],
    topics: ["Perceptrons and MLPs", "CNNs and RNNs basics", "Applications in image and text processing"],
    outcomes: [
      "Understand the architecture of neural networks",
      "Implement and train simple deep learning models",
      "Identify use cases for CNNs and RNNs"
    ],
    tools: ["TensorFlow/Keras or PyTorch"]
  },
  {
    title: "Module 5: Natural Language Processing & Generative AI",
    duration: "6–8 hours",
    objectives: ["Explore AI in text and language applications"],
    topics: [
      "Text preprocessing, sentiment analysis",
      "Chatbots and language models (GPT, BERT basics)",
      "Prompt engineering and generative AI tools (ChatGPT, Claude, etc.)"
    ],
    outcomes: [
      "Preprocess and analyze text data",
      "Create basic NLP applications (chatbot, sentiment analyzer)",
      "Utilize generative AI tools responsibly in education"
    ],
    handsOn: ["Build a simple chatbot"]
  },
  {
    title: "Module 6: AI Tools for Teaching, Research and Automation",
    duration: "4–6 hours",
    objectives: ["Apply AI tools to improve academic productivity"],
    topics: [
      "AI-powered teaching tools (Gradescope, Elicit, ChatGPT in teaching)",
      "AI for research synthesis and paper writing",
      "Automating tasks with AI assistants"
    ],
    outcomes: [
      "Integrate AI tools into the teaching-learning process",
      "Enhance research productivity with AI-based platforms",
      "Automate repetitive academic or administrative tasks"
    ],
    activities: ["Tool demos and integration exercises"]
  },
  {
    title: "Module 7: Ethics, Bias, and Responsible AI",
    duration: "4–5 hours",
    objectives: ["Understand the societal implications and responsibilities of using AI"],
    topics: [
      "AI bias, fairness, and accountability",
      "Privacy, data security, plagiarism risks",
      "Global and institutional AI policies in academia (UGC/AICTE guidelines)"
    ],
    outcomes: [
      "Recognize and address ethical issues in AI applications",
      "Foster responsible AI use among students",
      "Evaluate AI tools for ethical compliance in academia"
    ],
    activities: ["Case analysis", "ethical dilemmas workshop"]
  },
  {
    title: "Module 8: AI Curriculum Integration & Capstone Project",
    duration: "6–8 hours",
    objectives: [
      "Design AI-infused lesson plans, develop a prototype project"
    ],
    topics: [
      "Curriculum mapping",
      "Project planning using AI concepts",
      "Capstone project presentation and peer review"
    ],
    outcomes: [
      "Design AI-integrated course content or modules",
      "Develop and mentor student AI projects",
      "Present a working AI-based academic or classroom solution"
    ]
  }
];

const ProgramOutcomes = () => (
  <div className="bg-saffron/10 border-l-4 border-saffron p-6 rounded-xl text-white space-y-3 mt-10">
    <h3 className="text-xl font-bold text-saffron">🎯 Program Outcomes</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Teach AI concepts or integrate them into existing courses</li>
      <li>Use AI tools to enhance pedagogy and research</li>
      <li>Develop AI-based mini-projects or student assignments</li>
      <li>Promote responsible and ethical use of AI in academic settings</li>
    </ul>
  </div>
);

export default function AITrainingProgram() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-dark-navy rounded-2xl shadow-lg">
      <SectionHeader title="AI Training Program for College Faculty" icon={<FaGraduationCap />} />

      <div className="space-y-3 text-white/90 mb-10">
        <ProgramMeta icon={<FaCompass />} label="Objective" value="Equip faculty with AI knowledge and tools for integration into academics" />
        <ProgramMeta icon={<FaClock />} label="Duration" value="40–60 Hours (Blended Mode)" />
        <ProgramMeta icon="👥" label="Target Group" value="Faculty in Engineering, Sciences, Management, Humanities" />
      </div>

      <h3 className="text-xl font-bold text-saffron mb-4">📘 Modular Curriculum</h3>
      <Accordion type="single" collapsible className="space-y-3">
        {modules.map((mod, i) => (
          <AccordionItem key={i} value={`module-${i}`} className="border border-white/10 rounded-xl bg-white/5 p-4">
            <h4 className="text-lg font-semibold text-white mb-2">{mod.title}</h4>
            <Badge variant="outline" className="text-xs mb-2 bg-saffron/20 text-saffron">
              ⏱ Duration: {mod.duration}
            </Badge>
            <div className="space-y-2">
              <SubList title="Objectives" items={mod.objectives} />
              <SubList title="Topics" items={mod.topics} />
              {mod.outcomes && <SubList title="Outcomes" items={mod.outcomes} />}
              {mod.activities && <SubList title="Activities" items={mod.activities} />}
              {mod.tools && <SubList title="Tools" items={mod.tools} />}
              {mod.handsOn && <SubList title="Hands-on" items={mod.handsOn} />}
            </div>
          </AccordionItem>
        ))}
      </Accordion>

      <ProgramOutcomes />
    </div>
  );
}
