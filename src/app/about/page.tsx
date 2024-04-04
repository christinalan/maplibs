import Link from 'next/link'
import { Figtree } from 'next/font/google'
import { Cormorant } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'] })
const cormorant = Cormorant({ subsets: ['latin']})

export default function About() {
    return (
        <main className="min-h-screen py-8 px-6 sm:py-12 sm:px-16 sm:w-3/5 text-slate-700">
            <nav className="flex gap-5 items-start">    
            <h1 className={`${cormorant.className} text-2xl sm:text-2xl pb-6`}>About Maplibs</h1>
            <Link  href="/">
                        <span className="material-symbols-outlined" style={{fontSize:"36px"}}>
                            home
                        </span>
                    </Link>
            </nav>
            <p className="">The Maplibs Project is a living atlas of the spaces that make us feel, remember and imagine community in greater Bronzeville neighborhoods.
                We gather residents to more inclusively pursue a shared vision for the future of the built environment.
                Inspired by the word game Mad Libs, the project invites you to reflect on your community by playing a word game.
                The game lets players fill in key parts of a story about community in their neighborhood using words of particular senses.
                Stretching conventional notions of maps and mapping, the project invites you to submit sounds, photos and videos of your view of community.
                The collection of media submissions explores the moments of memory making and imagining.
                The Maplibs Project is a porch for neighborhood memory, experience and imagination.
                You can play the word game <Link href="/maplibs"><span className="underline">here.</span></Link>{" "}
                You can also leave a voicemail or text your answers to 312-869-2584.
                If you are interested in learning more or creating the next edition of the word game about your neighborhood, you can reach her by 
                {" "}<span><a className="underline" href="mailto: cchristmasrouse@gmail.com">email.</a></span>{" "}
                Thank you to space-makers, space-keepers and everyone who shared their videos of spaces for us all to connect to in this online portal.</p>
        </main>
    )
}