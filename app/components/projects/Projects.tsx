import Project from "./components/Project";
import { BookTree, ASA, ASAClient } from "./projectData";

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col gap-24">
        <Project
          title="BookTree"
          subtitle="An End-to-end Mobile App for Book Lovers"
          flexDirection="flex-col md:flex-col lg:flex-row"
          img="/assets/images/booktree.png"
          descriptions={BookTree}
          projectUrl={"/booktree"}
        />
        <Project
          title="ASA"
          subtitle="Complete Redesign for Alabama Supercomputer Authority"
          flexDirection="flex-col md:flex-col lg:flex-row-reverse"
          img="/assets/images/asa.png"
          descriptions={ASA}
          projectUrl={"/asa"}
        />
        <Project
          title="Client Portal"
          soon="Coming Soon"
          subtitle="A Secure Platform that Simplifies Account Management, Service Access, and Communication for Clients."
          flexDirection="flex-col md:flex-col lg:flex-row"
          img="/assets/images/asa-portal.png"
          descriptions={ASAClient}
          projectUrl={""}
        />
      </div>
      <div className="mt-48">
        <div className="text-4xl font-bold flex justify-center" >Other Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-12 lg:p-24">
          <img src="/assets/images/mobile-app.png" alt="Travel mobile app" />
          <img src="/assets/images/camcasp.png" alt="Camera e-commerce" />
          <img src="/assets/images/lumiere.png" alt="Architecture website" />
          <img src="/assets/images/fashture.png" alt="Fashion e-commerce" />
        </div>
      </div>
    </div>
  );
}
