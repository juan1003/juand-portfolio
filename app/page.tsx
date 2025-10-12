'use client';

import React from "react"

interface Props {
    href: string,
    children: string
}

const NavLink = ({ href, children }: Props) => (
  <a href={href} className="text-secondary hover:text-primary transition-colors duration-300">
    {children}
  </a>
);

const ProjectCard = ({ title, description, tech, href }: { title: string, description: string, tech: string[], href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="cyber-border p-6 rounded-lg block hover:bg-primary/10 transition-colors duration-300">
    <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
    <p className="text-secondary mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
          {t}
        </span>
      ))}
    </div>
  </a>
);

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 text-white">
      <nav className="flex justify-between items-center mb-24">
        <h1 className="text-3xl font-bold cyber-glow">J.D.</h1>
        <div className="flex gap-8 items-center">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </nav>

      <main>
        <section id="hero" className="text-center mb-24">
          <h2 className="text-6xl font-bold mb-4">
            <span className="cyber-glow">J.D.</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-8">
            A software engineer with 9 years of experience, specializing in web technologies and exploring the world of AI.
          </p>
          <a href="#projects" className="cyber-border inline-block bg-primary/20 text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary/40 transition-colors duration-300">
            View My Work
          </a>
        </section>

        <section id="about" className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 cyber-glow">About Me</h2>
          <div className="max-w-4xl mx-auto text-lg text-secondary text-center">
            <p className="mb-4">
              With 9 years in the field, I specialize in web technologies, creating elegant and efficient solutions. I am passionate about learning and applying my knowledge to new challenges.
            </p>
            <p>
              Currently, I am diving deep into AI technologies and their applications, constantly expanding my skill set.
            </p>
          </div>
        </section>

        <section id="projects" className="text-center mb-24">
          <h2 className="text-4xl font-bold text-center mb-8 cyber-glow">Projects</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-8">
            You can find my work on my GitHub profile.
          </p>
          <a href="https://github.com/juan1003" target="_blank" rel="noopener noreferrer" className="cyber-border inline-block bg-primary/20 text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary/40 transition-colors duration-300">
            Visit my GitHub
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ProjectCard
              title="Medic Notes"
              description="A medical notes application for efficient patient record management."
              tech={["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"]}
              href="https://medic-notes-inky.vercel.app/login"
            />
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-4xl font-bold mb-8 cyber-glow">Get In Touch</h2>
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
              };
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
              if (response.ok) {
                alert('Message sent successfully!');
              } else {
                alert('Failed to send message.');
              }
            }}
            className="max-w-xl mx-auto"
          >
            <div className="mb-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 bg-black/20 cyber-border rounded-lg" />
            </div>
            <div className="mb-4">
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 bg-black/20 cyber-border rounded-lg" />
            </div>
            <div className="mb-4">
              <textarea name="message" placeholder="Your Message" required rows={5} className="w-full p-3 bg-black/20 cyber-border rounded-lg"></textarea>
            </div>
            <button type="submit" className="cyber-border inline-block bg-primary/20 text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary/40 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="text-center mt-24 text-secondary">
        <p>&copy; {new Date().getFullYear()} J.D. All rights reserved.</p>
      </footer>
    </div>
  );
}
