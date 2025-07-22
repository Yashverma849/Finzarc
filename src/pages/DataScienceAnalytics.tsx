import React from "react";
import { BarChart3, Search, TrendingUp, LayoutDashboard, Database, Brain } from "lucide-react";

const offerings = [
  {
    icon: <Search className="w-10 h-10 text-[#5078f2] mb-4" />,
    title: "Data Strategy & Consulting",
    desc: "We help you define your data goals, audit existing systems, and build a roadmap for data-driven transformation."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-[#00bfa6] mb-4" />,
    title: "Predictive Analytics",
    desc: "Use machine learning models to forecast outcomes, customer behavior, sales trends, and more — before they happen."
  },
  {
    icon: <LayoutDashboard className="w-10 h-10 text-[#e66465] mb-4" />,
    title: "Business Intelligence Dashboards",
    desc: "Interactive dashboards that visualize your KPIs in real-time — so your team can act, not react."
  },
  {
    icon: <Database className="w-10 h-10 text-[#5078f2] mb-4" />,
    title: "Data Cleaning & Engineering",
    desc: "No more messy data. We clean, structure, and engineer data pipelines that are reliable and scalable."
  },
  {
    icon: <Brain className="w-10 h-10 text-[#00bfa6] mb-4" />,
    title: "AI-Powered Insights",
    desc: "From customer segmentation to churn prediction, we deliver AI-backed insights that create measurable impact."
  }
];

const reasons = [
  { label: "Domain Expertise", desc: "Experienced data scientists & analysts" },
  { label: "Custom Solutions", desc: "Tailored to your business challenges" },
  { label: "Tech Stack Mastery", desc: "Python, SQL, Power BI, Tableau, TensorFlow, and more" },
  { label: "Actionable Results", desc: "We turn complexity into clarity" }
];

const DataScienceAnalytics = () => (
  <div className="min-h-screen bg-skin-beige dark:bg-gray-900 text-foreground px-4 sm:px-8 pt-16 pb-20">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <div className="flex justify-center mb-4">
        <BarChart3 className="w-12 h-12 text-[#5078f2] animate-pulse" />
      </div>
      <h1 className="font-manrope text-4xl sm:text-5xl font-extrabold mb-4">Data Science & Analytics</h1>
      <h2 className="font-manrope text-xl sm:text-2xl font-semibold text-[#5078f2] mb-6">Turn Your Data into Decisions</h2>
      <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
        In a world driven by data, we help businesses transform raw information into strategic insights. Our data science solutions unlock patterns, predict trends, and power intelligent decision-making.
      </p>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {offerings.map((item) => (
        <div key={item.title} className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition hover:scale-105 hover:shadow-2xl">
          {item.icon}
          <h3 className="font-manrope text-xl font-bold mb-2 text-foreground">{item.title}</h3>
          <p className="font-manrope text-base text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="font-manrope text-2xl sm:text-3xl font-bold mb-4 text-[#00bfa6]">Why Work With Us</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
        {reasons.map((r) => (
          <div key={r.label} className="flex-1 bg-white dark:bg-black rounded-xl p-6 shadow-md flex flex-col items-center">
            <div className="font-manrope text-lg font-bold text-[#5078f2] mb-1">{r.label}</div>
            <div className="font-manrope text-base text-muted-foreground">{r.desc}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-3xl mx-auto text-center mt-16">
      <h2 className="font-manrope text-2xl sm:text-3xl font-extrabold mb-4 text-foreground">Don’t just collect data — use it.</h2>
      <p className="font-manrope text-lg text-muted-foreground mb-6">Partner with us to make your data work smarter, harder, and faster.</p>
    </div>
  </div>
);

export default DataScienceAnalytics; 