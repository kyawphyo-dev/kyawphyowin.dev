import { Link } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../Utlils/animations";

export default function DevForumShowCase() {
  const projects = {
    techStack: ["Next.js", "Tailwind", "Css", "Typescript", "MongoDB"],
    title: "Developer Forum",
    githubLink: "https://github.com/kyawphyo-dev/devforum-next.js",
    role: "Backend Developer",
    timeline: "1.5 Months",
    section: [
      {
        id: "devforum",
        title: "Developer Forum",
        highlights: [
          "🔐 Secure authentication & protected routes",
          "❓ Create, edit and delete questions",
          "💬 Answer questions with Markdown support",
          "👍 Reputation system with upvotes and downvotes",
          "👁️ Track question views and engagement",
          "🏷️ Organize content with tags and categories",
          "🔎 Advanced search, filters and pagination",
          "🔔 Real-time notification system",
          "👤 User profile management (bio, avatar, activity history)",
          "🛡️ Role-based access control (User, Admin)",
          "📊 Dashboard with user statistics and contributions",
          "⚡ Built with Next.js, TypeScript and MongoDB",
        ],
        description:
          "A Stack Overflow-inspired developer forum featuring secure authentication, Q&A discussions, voting, reputation tracking, user profiles, and role-based management built with Next.js, TypeScript, and MongoDB.",
        images: [
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583269/devhome_n2zoru.png",
            title: "DevForum Homepage",
            alt: "DevForum Homepage",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583267/devAnswer_mtwcgr.png",
            title: "DevForum Answer",
            alt: "DevForum Answer",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583268/devAskQuestion_ojy4rd.png",
            title: "DevForum Ask Question",
            alt: "DevForum Ask Question",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583269/devBookmark_v1r26b.png",
            title: "DevForum Ask Bookmark",
            alt: "DevForum Ask Bookmark",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583270/devLogin_hd0fci.png",
            title: "DevForum Login",
            alt: "DevForum Login",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583270/devProfile_lwel01.png",
            title: "DevForum Profile",
            alt: "DevForum Profile",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583271/devQuestionDetails_vo31ap.png",
            title: "DevForum Question Details",
            alt: "DevForum Question Details",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583272/devRegister_kmbyyj.png",
            title: "DevForum Register",
            alt: "DevForum Register",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583273/devTags_dtjchp.png",
            title: "DevForum Tags",
            alt: "DevForum Tags",
          },
          {
            src: "https://res.cloudinary.com/dtdjpi4qs/image/upload/v1783583274/devUser_mrlfsl.png",
            title: "DevForum User",
            alt: "DevForum User",
          },
        ],
      },
    ],
  };

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen px-6 pt-6 pb-16 font-serif bg-bg md:pb-30"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="w-full max-w-5xl mx-auto"
      >
        <div>
          <Link
            to="/projects"
            className="mb-6 text-sm text-text-muted opacity-70 hover:opacity-100"
          >
            ← Back to Projects
          </Link>

          <SectionTitle id="" label={projects.title} />
        </div>
        {projects.section.map((item) => (
          <ProjectDetails
            key={item.id}
            Images={item.images}
            Highlights={item.highlights}
            TechStack={projects.techStack}
            githubLink={projects.githubLink}
            title={item.title}
            role={projects.role}
            timeline={projects.timeline}
            details={item.description}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
