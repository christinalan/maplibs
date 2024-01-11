'use client'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'
import header from '../../images/header.png'
import { useState, useEffect, JSX } from 'react'

let text1: JSX.Element;
let text2: JSX.Element;

export default function Maplib() {
    const [selectedTab, setSelectedTab] = useState('instructions');
    const [text, setText] = useState(text1);

    function changeInfo () {
        if (selectedTab === 'instructions') {
            text1 = <p>Reflect on your neighborhood <br /> Learn about where your neighbors feel a sense of community <br /> Play the word game online or by phone <br /> Open a new view of community in a neighborhood <br />  Submit sounds, photos and videos of your view of community</p>
            setText(text1);
        } else if (selectedTab === 'about') {
            text2 = <p>The Maplibs Project is a living atlas of the spaces that make us feel, remember and imagine community in greater Bronzeville neighborhoods. We gather residents to more inclusively pursue a shared vision for the future of the built environment. Inspired by the word game Mad Libs, the project invites you to reflect on your community by playing a word game. The game lets players fill in key parts of a story about community in their neighborhood using words of particular senses. Stretching conventional notions of maps and mapping, the project invites you to submit sounds, photos and videos of your view of community. The collection of media submissions explores the moments of memory making and imagining. The Maplibs Project is a porch for neighborhood memory, experience and imagination.</p>
            setText(text2);
        }
    }

    useEffect(() => {
        changeInfo();
    }, [selectedTab])
    
    return (
        <main className="min-h-screen py-20 flex justify-evenly">
            <div className="flex flex-col items-center gap-10 pt-10 w-2/5">
                <nav className="flex flex-col min-w-full items-center">
                    <Link  href="/">
                        <span className="material-symbols-outlined" style={{fontSize:"36px"}}>
                            home
                        </span>
                    </Link>
                <div className="flex min-w-full justify-evenly pt-8 cursor-pointer">
                    <p onClick={() => setSelectedTab('about')}>About</p>
                    <p onClick={() => setSelectedTab('instructions')}>Instructions</p>
                </div>
                <div className="w-4/5 h-1 bg-slate-100 mt-2"></div>
                </nav>
                <div className={`px-4 leading-loose ${selectedTab == "instructions" ? "text-center" : "text-left"}`}>{text}</div>
            </div>
            {/* This is where the form lies */}
            <div className="flex flex-col items-center gap-14 bg-slate-200 max-w-xl w-4/5 border-2 border-black">
                <div className="pt-5">
                        <Image
                        src={header}
                        alt="Picture of Maplibs header"
                    />
                </div>
                <div className="px-4 flex flex-col items-center">
                    <form className="px-4 py-4 border-2 border-black w-11/12 text-black leading-10">
                        <p>I live in <input type="text" placeholder="a neighborhood"></input>. My neighborhood feels like a community when I go to
                         <input type="text" placeholder="a place"></input>, hear <input type="text" placeholder="a sound"></input>, and smell
                        <input type="text" placeholder="a smell"></input>. I wish more people knew about the history of <input className="mr-1" type="text" placeholder="an event"></input> 
                         in this neighborhood. In the future, I hope every street corner has <input type="text" placeholder="an object"></input>.</p>
                        <div className="flex justify-between py-4">
                        <input type="text" placeholder="First Name"></input>
                        <input type="text" placeholder="Email"></input> 
                        </div>
                    </form>
                        <div className="mt-4 flex justify-center gap-4 text-black cursor-pointer">
                        <label className="border-2 border-black w-20 h-8 flex justify-center items-center rounded-xl" htmlFor="upload">Upload</label>
                        <input type="file" id="upload" name="upload" hidden></input>
                        <button className="text-black border-2 border-black w-20 h-8 flex justify-center items-center rounded-xl" type="submit" id="submit">Submit</button>
                        <button className="text-black border-2 border-black w-24 h-8 flex justify-center items-center rounded-xl" id="example">Example</button>
                        </div>
                </div>
            </div>

        </main>
    )
}