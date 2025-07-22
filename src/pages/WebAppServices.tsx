import React from "react";
import { Globe, Layers, Server, Zap, Wrench, Users } from "lucide-react";

const offerings = [
  {
    icon: <Wrench className="w-10 h-10 text-[#5078f2] mb-4" />,
    title: "Custom Web App Development",
    desc: "Tailored solutions from scratch — built to match your exact business needs, workflows, and vision."
  },
  {
    icon: <Layers className="w-10 h-10 text-[#00bfa6] mb-4" />,
    title: "Scalable Architecture",
    desc: "From MVPs to enterprise-level platforms, our architecture supports your growth every step of the way."
  },
  {
    icon: <Server className="w-10 h-10 text-[#e66465] mb-4" />,
    title: "API Integration & Backend Services",
    desc: "Connect with third-party services, automate data flow, and build seamless systems powered by robust backends."
  },
  {
    icon: <Globe className="w-10 h-10 text-[#5078f2] mb-4" />,
    title: "Progressive Web Apps (PWAs)",
    desc: "Get the power of mobile apps in a browser — fast, installable, and offline-capable."
  },
  {
    icon: <Zap className="w-10 h-10 text-[#00bfa6] mb-4" />,
    title: "Maintenance & Optimization",
    desc: "We don’t just build and leave. We support, optimize, and keep your web app future-proof."
  }
];

const reasons = [
  { label: "Modern Tech Stack", desc: "React, Next.js, Node.js, Tailwind, and more" },
  { label: "Agile Process", desc: "Fast delivery, clear communication" },
  { label: "Performance Focused", desc: "Speed, security, and SEO-ready" },
  { label: "Human-Centered Design", desc: "Built with your users in mind" }
];

const WebAppServices = () => (
  <div className="min-h-screen bg-skin-beige dark:bg-gray-900 text-foreground px-4 sm:px-8 pt-16 pb-20">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <div className="flex justify-center mb-4">
        <Globe className="w-12 h-12 text-[#5078f2] animate-pulse" />
      </div>
      <h1 className="font-manrope text-4xl sm:text-5xl font-extrabold mb-4">Web Application Services</h1>
      <h2 className="font-manrope text-xl sm:text-2xl font-semibold text-[#5078f2] mb-6">Build Smarter. Scale Faster.</h2>
      <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
        In a digital-first world, your web application is your brand’s heartbeat. We design and develop modern web apps that are fast, responsive, and built to grow with your business.
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
      <h2 className="font-manrope text-2xl sm:text-3xl font-bold mb-4 text-[#00bfa6]">Why Choose Us</h2>
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
      <h2 className="font-manrope text-2xl sm:text-3xl font-extrabold mb-4 text-foreground">Let’s Build the Web, Together.</h2>
      <p className="font-manrope text-lg text-muted-foreground mb-6">From idea to launch — we help you craft experiences that scale.</p>
    </div>
  </div>
);

export default WebAppServices; 