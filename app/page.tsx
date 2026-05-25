import Image from "next/image";
import Hero from "@/components/Hero";
import ContactLinks from "@/components/ContactLinks";
import ProjectList from "@/components/ProjectList";
import Music from "@/components/Music";
import IceBreaker from "@/components/IceBreaker";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sopiriye Jamabo",
    url: "https://sopiriye.xyz",
    image: "https://sopiriye.xyz/profile.jpg",
    jobTitle: "Full-Stack Developer & Software Engineer",
    description: "Full-stack Engineer based in Nigeria, focused on creating memorable digital experiences and solving problems by building impactful software.",
    email: "sopiriyejamabo@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nigeria",
    },
    sameAs: [
      "https://github.com/priyez",
      "https://terminal.sopiriye.xyz/",
    ],
    knowsAbout: [
      "Web Development",
      "Full-Stack Development",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Software Engineering",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "SAVVILY",
      },
      {
        "@type": "Organization",
        name: "DAP",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-18 px-4 md:px-16 bg-white dark:bg-black sm:items-start">
          <div>
            <Hero />
            <ContactLinks />

          </div>
          <ProjectList />
          <IceBreaker />
        </main>
      </div>
    </>
  );
}
