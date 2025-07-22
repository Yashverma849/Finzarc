import React from "react";
import { Zap, BarChart3, FileText, Calendar, MessageCircle, MoreHorizontal } from "lucide-react";

const automations = [
  {
    icon: <BarChart3 className="w-10 h-10 text-[#00bfa6] mb-4" />,
    title: "Business Expense Analysis",
    desc: "Say goodbye to messy spreadsheets. Our AI analyzes your expenses in real-time, detects patterns, flags anomalies, and delivers actionable financial insights without lifting a finger."
  },
  {
    icon: <FileText className="w-10 h-10 text-[#5078f2] mb-4" />,
    title: "Auto Resume Checker",
    desc: "Recruit smarter. Instantly screen and rank resumes using our AI resume checker — tailored to your job requirements, skill priorities, and company values."
  },
  {
    icon: <Calendar className="w-10 h-10 text-[#e66465] mb-4" />,
    title: "Auto Day Scheduler",
    desc: "Your time is valuable — let AI plan it for you. From meetings to task blocks, our smart scheduler syncs with your calendar and priorities to build your most productive day."
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-[#00bfa6] mb-4" />,
    title: "Engage Agent",
    desc: "An AI-powered conversational assistant that handles queries, nurtures leads, and enhances customer experience 24/7 — with human-like precision and context."
  },
  {
    icon: <MoreHorizontal className="w-10 h-10 text-[#5078f2] mb-4" />,
    title: "And Beyond...",
    desc: "We’re constantly evolving. Whether it's automating client onboarding, report generation, or internal workflows — our AI adapts to your business."
  }
];

const benefits = [
  { label: "Save Time", desc: "Automate repetitive tasks" },
  { label: "Boost Accuracy", desc: "Eliminate human error" },
  { label: "Scale Fast", desc: "AI grows with your business" },
  { label: "Stay Smart", desc: "Make decisions powered by data" }
];

const AIAutomation = () => (
  <div className="min-h-screen bg-skin-beige dark:bg-gray-900 text-foreground px-4 sm:px-8 pt-16 pb-20">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <div className="flex justify-center mb-4">
        <Zap className="w-12 h-12 text-[#00bfa6] animate-pulse" />
      </div>
      <h1 className="font-manrope text-4xl sm:text-5xl font-extrabold mb-4">AI Automation by Finzarc</h1>
      <h2 className="font-manrope text-xl sm:text-2xl font-semibold text-[#00bfa6] mb-6">Empower Your Business with the Intelligence of Automation</h2>
      <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
        At Finzarc, we’re not just building tools — we’re engineering the future of business automation. Our AI-driven solutions are designed to take the manual out of the mundane and give your teams the freedom to focus on what truly matters: growth, innovation, and strategy.
      </p>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {automations.map((item) => (
        <div key={item.title} className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition hover:scale-105 hover:shadow-2xl">
          {item.icon}
          <h3 className="font-manrope text-xl font-bold mb-2 text-foreground">{item.title}</h3>
          <p className="font-manrope text-base text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="font-manrope text-2xl sm:text-3xl font-bold mb-4 text-[#5078f2]">Why It Matters</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
        {benefits.map((b) => (
          <div key={b.label} className="flex-1 bg-white dark:bg-black rounded-xl p-6 shadow-md flex flex-col items-center">
            <div className="font-manrope text-lg font-bold text-[#00bfa6] mb-1">{b.label}</div>
            <div className="font-manrope text-base text-muted-foreground">{b.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AIAutomation; 