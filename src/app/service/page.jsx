"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
export const services = [
  {
    title: "Responsive Web Design",
    num: "01",
    slug: "responsive-web-design",
    des: "Creating websites that work well on a variety of devices and screen sizes.",
  },
  {
    title: "Single Page Application (SPA) Development",
    num: "02",
    slug: "spa-development",
    des: "Building SPAs using frameworks like React, Vue.js, or Angular.",
  },
  {
    title: "User Interface (UI) Design",
    num: "03",
    slug: "ui-design",
    des: "Designing visually appealing and user-friendly interfaces.",
  },
  {
    title: "Cross-Browser Compatibility",
    num: "04",
    slug: "cross-browser-compatibility",
    des: "Ensuring websites function correctly across different browsers.",
  },
  {
    title: "Performance Optimization",
    num: "05",
    slug: "performance-optimization",
    des: "Improving website load times and overall performance.",
  },
  {
    title: "Version Control with Git",
    num: "06",
    slug: "version-control-git",
    des: "Using Git for version control to manage and track changes in the codebase.",
  },
  {
    title: "API Integration",
    num: "07",
    slug: "api-integration",
    des: "Connecting front-end applications with back-end services using APIs.",
  },
  {
    title: "Testing and Debugging",
    num: "08",
    slug: "testing-debugging",
    des: "Writing tests and debugging code to ensure functionality and fix issues.",
  },
  {
    title: "Accessibility Implementation",
    num: "09",
    slug: "accessibility-implementation",
    des: "Ensuring websites are accessible to users with disabilities.",
  },
  {
    title: "SEO Best Practices",
    num: "10",
    slug: "seo-best-practices",
    des: "Implementing SEO techniques to improve website visibility on search engines.",
  },
];
const page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1  md:grid-cols-2 gap-[60px]  "
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={`/work`}>
                    <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </div>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500  truncate	">
                  {service.title}
                </h2>{" "}
                {/* description */}
                <p className="text-white/60 truncate">{service.des}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
