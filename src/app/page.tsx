import Link from 'next/link'
import Image from 'next/image'
import statue from '../images/statue.png'

export default function Home() {
  return (
    <main className="min-h-screen p-24 flex flex-col">
         
    <div className="mx-72 text-center">
        <h1 className='text-lg'>
        The Maplibs Project is a living atlas of the spaces that make feel, remember, and imagine community in the greater Bronzeville neighborhoods.
        </h1>
    </div>
    
    <div className="flex p-32 items-center justify-between">
      <div className="bg-sky-500 bg-opacity-40 rounded-full flex items-center text-center justify-center cursor-pointer" style={{width: '200px', height: '200px'}}>
        <Link href="/maplib">Play MapLibs</Link>
      </div>
      <div className="bg-sky-500 bg-opacity-40 rounded-full flex items-center text-center justify-center cursor-pointer" style={{width: '200px', height: '200px'}}>
        <Link href="/views">Explore a View of Bronzeville</Link>
      </div>
    </div>


    <div className="flex mx-auto before:fixed before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl after:-z-20 after:h-[100px] after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-400 after:blur-2xl before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-200 before:dark:opacity-10 after:dark:from-sky-300 after:dark:via-[#0369a1] after:dark:opacity-30 before:lg:h-[180px] z-[-1]">
          <div className="fixed -bottom-2 -z-1">
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
