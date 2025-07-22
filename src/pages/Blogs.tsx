import React from "react";

const blogs = [
  {
    title: "The Rise of AI in Everyday Business",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    desc: "How artificial intelligence is transforming operations, customer service, and decision-making for companies of all sizes.",
    link: "/blogs/ai-in-business"
  },
  {
    title: "Building Scalable Web Apps with Modern Stacks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    desc: "A guide to using React, Next.js, and cloud-native tools to create web applications that grow with your business.",
    link: "/blogs/scalable-web-apps"
  },
  {
    title: "Data Science: From Raw Data to Real Insights",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "Explore the journey of data — from collection and cleaning to analysis and actionable business intelligence.",
    link: "/blogs/data-to-insights"
  },
  {
    title: "The Future of Automation: Trends to Watch",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    desc: "Discover the latest trends in automation, from AI-powered bots to workflow orchestration and beyond.",
    link: "/blogs/future-of-automation"
  }
];

const Blogs = () => (
  <div className="min-h-screen bg-skin-beige dark:bg-gray-900 text-foreground px-4 sm:px-8 pt-16 pb-20">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <h1 className="font-manrope text-4xl sm:text-5xl font-extrabold mb-4">Our Tech Blog</h1>
      <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
        Insights, guides, and stories from the world of AI, web development, and data science — curated by the Finzarc team.
      </p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {blogs.map((blog) => (
        <div key={blog.title} className="bg-white dark:bg-black rounded-2xl shadow-xl overflow-hidden flex flex-col">
          <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="font-manrope text-2xl font-bold mb-2 text-foreground">{blog.title}</h2>
            <p className="font-manrope text-base text-muted-foreground mb-4 flex-1">{blog.desc}</p>
            <a href={blog.link} className="text-[#00bfa6] font-bold hover:underline mt-auto">Read More →</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Blogs; 