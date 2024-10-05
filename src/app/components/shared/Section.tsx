// Next imports

// Other imports

type sectionTypes = {
    id?: string,
    children: React.ReactNode,
    border?: boolean;
}

// Section Functional Component
const Section = ({ id, children, border = true }: sectionTypes) => {
    return <section className={`p-4 pb-8 mb-4 ${border ? 'border-b' : 'border-none'} border-b-grey`} id={id}>{children}</section>
}

export default Section