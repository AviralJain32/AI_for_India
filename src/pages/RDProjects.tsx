import React from 'react';
import Navbar from '@/components/Navbar';

const RDProjects = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="container mx-auto px-4 py-24 lg:py-28">
        <div className="mx-auto max-w-5xl space-y-14">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-saffron">R&D Projects</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Advancing Innovation Through Research and Technology
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              <span className="font-semibold text-slate-900">AFI Edutech</span> is committed to fostering innovation through research, artificial intelligence, educational technologies, and digital transformation. Our Research & Development (R&D) division focuses on developing impactful software platforms, AI-driven products, intelligent systems, and research solutions that address challenges in education, healthcare, and industry.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
              Our mission is to bridge the gap between academic research and real-world implementation by creating scalable technologies that empower researchers, educators, institutions, healthcare professionals, and organisations worldwide.
            </p>
          </section>

          <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Research Focus Areas</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  We drive research across the technologies shaping the next decade of education, healthcare, and intelligent systems.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Artificial Intelligence & Machine Learning',
                  'Educational Technology (EdTech)',
                  'Computer Vision',
                  'Healthcare AI',
                  'Robotics & Intelligent Systems',
                  'Internet of Things (IoT)',
                  'Human-Computer Interaction',
                  'AI Literacy & Future Skills',
                  'Explainable & Responsible AI',
                  'Data Analytics & Intelligent Decision Support',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-100 p-4 ring-1 ring-slate-200">
                    <p className="text-sm leading-6 text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900">Why AFI Edutech R&D?</h3>
              <p className="mt-4 leading-7 text-slate-700">
                We combine academic research and practical engineering to deliver products that scale across institutions, healthcare providers, and industry partners.
              </p>
              <ul className="mt-6 space-y-3 text-slate-800">
                <li className="flex gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-saffron" />Scalable software platforms with research-grade quality.</li>
                <li className="flex gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-saffron" />AI systems designed for transparency, trust, and impact.</li>
                <li className="flex gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-saffron" />Solutions built for education, healthcare, and intelligent enterprises.</li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-slate-900">Completed Projects</h2>
            <p className="mt-4 leading-7 text-slate-700">
              AFI Edutech has successfully designed and deployed several digital platforms that are actively supporting educational institutions, conferences, and academic communities.
            </p>

            <div className="mt-10 space-y-12">
              <div className="rounded-3xl bg-slate-100 p-8 ring-1 ring-slate-200">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <div className="lg:w-[42%]">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                      <img
                        src="/projects/CMS.png"
                        alt="Conference Management"
                        className="h-72 w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-saffron">1. Conference Management System (CMS)</p>
                        <h3 className="text-2xl font-semibold text-slate-900">Conference Management System</h3>
                      </div>
                      <span className="rounded-full bg-saffron/10 px-4 py-2 text-sm font-semibold text-saffron">Conference & publication workflow</span>
                    </div>
                    <p className="leading-7 text-slate-700">
                      A comprehensive web-based platform for managing conferences, journals, workshops, and academic events from submission to publication.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        'Paper submission and tracking',
                        'Peer-review workflow',
                        'Reviewer management',
                        'Author dashboard',
                        'Camera-ready submission',
                        'Proceedings management',
                        'Certificate generation',
                        'Administrative analytics dashboard',
                      ].map((feature) => (
                        <div key={feature} className="rounded-2xl bg-white p-4 text-sm text-slate-900 shadow-sm ring-1 ring-slate-200">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-100 p-8 ring-1 ring-slate-200">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <div className="lg:w-[42%]">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                      <img
                        src="/projects/Learning_Platform.png"
                        alt="E-Learning Platform"
                        className="h-72 w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-saffron">2. E-Learning Platform</p>
                        <h3 className="text-2xl font-semibold text-slate-900">E-Learning Platform</h3>
                      </div>
                      <span className="rounded-full bg-saffron/10 px-4 py-2 text-sm font-semibold text-saffron">Learner-centric LMS</span>
                    </div>
                    <p className="leading-7 text-slate-700">
                      A modern Learning Management System (LMS) supporting online teaching, assessments, certifications, and learner analytics.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        'Interactive online courses',
                        'Video lectures and digital resources',
                        'Online assessments',
                        'Assignment management',
                        'Learner progress tracking',
                        'Faculty dashboard',
                        'Performance analytics',
                        'Certificate generation',
                      ].map((feature) => (
                        <div key={feature} className="rounded-2xl bg-white p-4 text-sm text-slate-900 shadow-sm ring-1 ring-slate-200">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-100 p-8 ring-1 ring-slate-200">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <div className="lg:w-[42%]">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                      <img
                        src="/projects/Olympiad.png"
                        alt="Olympiad Examination Platform"
                        className="h-72 w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-saffron">3. Olympiad Examination Platform</p>
                        <h3 className="text-2xl font-semibold text-slate-900">Olympiad Examination Platform</h3>
                      </div>
                      <span className="rounded-full bg-saffron/10 px-4 py-2 text-sm font-semibold text-saffron">Secure assessment engine</span>
                    </div>
                    <p className="leading-7 text-slate-700">
                      A secure digital examination platform developed for national and international Olympiads, aptitude tests, and certification programmes.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        'Online registrations',
                        'Secure examination engine',
                        'Question bank management',
                        'AI-assisted evaluation',
                        'Automated ranking',
                        'Digital certificates',
                        'Participant analytics',
                        'Administrative dashboard',
                      ].map((feature) => (
                        <div key={feature} className="rounded-2xl bg-white p-4 text-sm text-slate-900 shadow-sm ring-1 ring-slate-200">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-slate-900">Ongoing Projects</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Our research team is actively developing next-generation AI-powered systems with applications in education and healthcare.
            </p>

            <div className="mt-10 space-y-10">
              <div className="rounded-3xl bg-slate-100 p-8 shadow-sm ring-1 ring-slate-200">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <div className="lg:w-[42%]">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                      <img
                        src="/projects/Bot.png"
                        alt="Edu-Bot AI Teaching Assistant"
                        className="h-72 w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900">Edu-Bot: AI Teaching Assistant</h3>
                    <p className="mt-4 leading-7 text-slate-700">
                      Edu-Bot is an intelligent AI-powered teaching assistant developed to transform traditional classrooms into AI-ready learning environments by supporting teachers and enhancing student engagement through conversational intelligence, interactive teaching, and personalized learning experiences.
                    </p>
                    <p className="mt-4 leading-7 text-slate-700">
                      Rather than replacing educators, Edu-Bot serves as a collaborative classroom companion that assists with lesson delivery, answers academic questions through natural voice and text interactions, presents educational content including presentations, diagrams, images, and videos, conducts quizzes and revision activities, monitors student participation, and adapts explanations based on individual learning needs.
                    </p>
                    <p className="mt-4 leading-7 text-slate-700">
                      By promoting digital literacy, critical thinking, problem-solving, and confidence in emerging technologies, Edu-Bot empowers teachers to focus on mentorship and personalized instruction while preparing students for an increasingly AI-driven future.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-100 p-8 shadow-sm ring-1 ring-slate-200">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <div className="lg:w-[42%]">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                      <img
                        src="/projects/GastroAI.png"
                        alt="Gastro-Vision AI"
                        className="h-72 w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900">Gastro-Vision AI</h3>
                    <p className="mt-4 leading-7 text-slate-700">
                      GastroVision AI is an intelligent deep learning–based medical screening platform designed for the early diagnosis, risk stratification, and clinical management of gastric cancer by integrating multimodal medical data into a unified AI-powered framework.
                    </p>
                    <p className="mt-4 leading-7 text-slate-700">
                      The platform employs advanced neural networks to detect pathological features, perform precise lesion detection, classify patient risk, and provide explainable predictions that clinicians can trust.
                    </p>
                    <p className="mt-4 leading-7 text-slate-700">
                      Built for cloud and edge deployment, GastroVision AI integrates with HIS, PACS, EHR, and endoscopic systems to support hospitals, research institutions, and remote healthcare facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RDProjects;
