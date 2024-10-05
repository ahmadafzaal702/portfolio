// Next imports
import Link from "next/link";

// Other imports
import Section from "@/app/components/shared/Section";
import { ExperiencesData } from "@/data/experiences";

// Experience Detail Functional Component
const ExperienceDetail = ({ params }: { params: any }) => {
    // destructuring the slug
    const { slug } = params;

    // comparing and getting the single item based on the slug
    const singleExperience = ExperiencesData.find((exp) => exp.slug === slug);

    if (!singleExperience) {
        return (
            <main className="h-screen bg-white p-12 flex items-center justify-center text-center">
                <section>
                    <h2>Experience Not Found</h2>
                    <p>Could not find <span className="font-semibold">{slug}</span> experience.</p>

                    <Link href="/">
                        <p className="text-black mt-3 font-bold underline">
                            Return Back
                        </p>
                    </Link>
                </section>
            </main>
        )
    }

    // Experience Detail Component Return
    return (
        <main className="bg-white p-4">
            <Section id="experience">
                <h2>Professional Experiences:</h2>
                < div className={`mt-2 bg-grey-light border-t-8 rounded-md ${singleExperience?.isPresent ? 'border-green' : 'border-grey'} p-3`
                }>
                    <h3>{singleExperience?.title}</h3>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <p className="text-secondary font-semibold">{singleExperience?.company}</p>
                        <p className="text-primary">{singleExperience?.startDate} – {singleExperience?.endDate}, {singleExperience?.location}</p>
                    </div>

                    <ul>
                        {singleExperience?.responsibilities?.map((responsibility, index) => {
                            return <li key={index} className="mt-1">- {responsibility}</li>
                        })}
                    </ul>

                    <Link href={`/`}>
                        <p className="text-secondary font-semibold mt-3 underline">
                            Go Back
                        </p>
                    </Link>
                </div >
            </Section >
        </main >
    )
}

export default ExperienceDetail
