// Next imports

// Other imports
import About from "@/app/components/widgets/About";
import Skills from "@/app/components/widgets/Skills";
import Experiences from "@/app/components/widgets/Experiences";
import Education from "@/app/components/widgets/Education";
import Awards from "@/app/components/widgets/Awards";

// Home Functional Component
export default function Home() {
  return (
    <main className="bg-white p-4">
      <About />
      <Skills />
      <Experiences />
      <Education />
      <Awards />
    </main>
  );
}
