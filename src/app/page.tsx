import Link from 'next/link'
import Image from 'next/image'
import statue from '../images/statue.png'
import { Figtree } from 'next/font/google'
import { Cormorant } from 'next/font/google'
import Background from './background/page'

const figtree = Figtree({ subsets: ['latin'] })
const cormorant = Cormorant({ subsets: ['latin']})

export default function Home() {
  return (
    <main className="min-h-screen py-8 px-2 sm:py-12 sm:px-16 flex flex-col">
    <nav className="flex flex-col items-center">
      <div className="flex flex-row text-xl sm:text-lg sm:w-1/4 gap-10 sm:place-content-between cursor-pointer">
        <Link href="/about">
          <p className="hover:text-sky-200">About</p>
        </Link>
        <Link href="/book">
          <p className="hover:text-sky-200">Buy the Book</p>
        </Link>
      </div>
      <div className="w-11/12 sm:w-5/6 h-1 bg-slate-100 mt-2 opacity-50"></div>
     
    <div className="mx-6 sm:mx-44 text-center pt-10">
        <h1 className={`${cormorant.className} text-2xl sm:text-2xl`}>
        The Maplibs Project is a living atlas of the spaces that make feel, remember, and imagine community in the greater Bronzeville neighborhoods.
        </h1>
    </div>
    </nav>
    
    <div className={`${figtree.className} flex flex-col sm:flex-row gap-5 content-between pt-8 sm:p-32 items-center justify-between`}>

    <Link href="/maplib">
      <div className="bg-sky-500 bg-opacity-60 sm:bg-opacity-50 rounded-full flex items-center text-center justify-center cursor-pointer" style={{width: '200px', height: '200px'}}>
        <p>Play MapLibs</p>
      </div>
      </Link>
      <Link href="/views">
      <div className="bg-sky-500 bg-opacity-60 sm:bg-opacity-50 rounded-full flex items-center text-center justify-center cursor-pointer" style={{width: '200px', height: '200px'}}>
        <p>Explore a View of Bronzeville</p>
      </div>
      </Link>
      
    </div>


    <div className="flex mx-auto before:fixed before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl after:-z-20 after:h-[100px] after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-400 after:blur-2xl before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-200 before:dark:opacity-10 after:dark:from-sky-300 after:dark:via-[#0369a1] after:dark:opacity-30 before:lg:h-[180px] z-[-1]">
          <div className="fixed -bottom-2 -z-1 opacity-25 sm:opacity-70">
            <Image
                src={statue}
                width={300}
                height={300}
                alt="Picture of the Bronzeville Statue"
              />
            </div>
      </div>
      
    </main>
  )
}


// text
// The Maplibs Project is a living atlas of the spaces that make us feel, remember and imagine community in greater Bronzeville neighborhoods. We gather residents to more inclusively pursue a shared vision for the future of the built environment. Inspired by the word game Mad Libs, the project invites you to reflect on your community by playing a word game. The game lets players fill in key parts of a story about community in their neighborhood using words of particular senses. Stretching conventional notions of maps and mapping, the project invites you to submit sounds, photos and videos of your view of community. The collection of media submissions explores the moments of memory making and imagining. The Maplibs Project is a porch for neighborhood memory, experience and imagination.
