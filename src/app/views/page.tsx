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
            <div className="w-11/12 sm:w-5/6 h-96 border-2 border-slate-300">view content goes here</div>

            <div className="flex flex-col sm:flex-row p-4 gap-10 items-center sm:justify-center">
                <div className="bg-blue-500 bg-opacity-30 rounded-full flex order-1 sm:order-0 items-center text-center justify-center cursor-pointer" style={{width: '200px', height: '200px'}}>
                    <Link href="/maplib">Play MapLibs</Link>
                </div>
                <div className="flex flex-col items-center gap-20 justify-between  order-0 sm:order-1">
                    <div className="flex flex-col sm:flex-row gap-10">
                        <p>Description of image/video/sound</p>
                        <p>Info about the author of the submission</p>
                    </div>
                    <div>Icons</div>
                </div>
                <div className="bg-blue-500 bg-opacity-30 rounded-full flex items-center text-center justify-center cursor-pointer order-2 sm:order-2" style={{width: '200px', height: '200px'}}>
                    <Link href="/views">Explore a View of Bronzeville</Link>
                </div>
            </div>
        </main>
    )
}