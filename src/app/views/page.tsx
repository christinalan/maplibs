import Image from 'next/image'
import Link from 'next/link'
import header from '../../images/header_white.png'

export default function Views() {
    return (
        <main className="min-h-screen flex flex-col gap-5 items-center">
            {/* header is first, then image, then bottom tier or info */}
             <div className="pt-5 max-w-md">
                <Link href="/">
                    <Image
                        src={header}
                        alt="Picture of Maplibs header"

                    />
                </Link>
                </div>
            <div className="w-5/6 h-96 border-2 border-slate-300">view content goes here</div>

            <div className="flex p-4 gap-10 items-center justify-center">
                <div className="bg-sky-500 bg-opacity-40 rounded-full flex items-center text-center justify-center cursor-pointer" style={{width: '200px', height: '200px'}}>
                    <Link href="/maplib">Play MapLibs</Link>
                </div>
                <div className="flex flex-col items-center gap-20 justify-between">
                    <div className="flex gap-10">
                        <p>Description of image/video/sound</p>
                        <p>Info about the author of the submission</p>
                    </div>
                    <div>Icons</div>
                </div>
                <div className="bg-sky-500 bg-opacity-40 rounded-full flex items-center text-center justify-center cursor-pointer" style={{width: '200px', height: '200px'}}>
                    <Link href="/views">Explore a View of Bronzeville</Link>
                </div>
            </div>
        </main>
    )
}