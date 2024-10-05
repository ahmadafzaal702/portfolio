import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="h-screen bg-white p-12 flex items-center justify-center text-center">
            <section className=''>
                <h2>Page Not Found</h2>
                <p>Could not find requested page</p>

                <Link href="/">
                    <p className="text-black mt-3 font-bold underline">
                        Return Home
                    </p>
                </Link>
            </section>
        </main>

    )
}