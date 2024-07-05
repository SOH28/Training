import Image from "next/image"
import Mic from '../../../public/fourth/mic.webp';
import Arrow from '../../../public/fourth/arrow.svg';
import ArrowRight from '../../../public/fourth/arrow-right.svg';
import ArrowBottom from '../../../public/fourth/arrow-bottom.svg';
import { useState, useEffect } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Page4() {

    const [hover, setHover] = useState("");

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    return (
        <div className="flex flex-col w-full h-auto">
            <div className="relative w-full h-56 flex bg-[#010625]">
                <div className="flex z-10 opacity-20 absolute bottom-0 left-0 w-full h-56">
                    <div className="w-full inline-block">
                        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path d="M 0 115.13631330064503 C 319.3333333333333 175.04923342209236 319.3333333333333 175.04923342209236 638.6666666666666 145.0927733613687 C 958 115.13631330064504 958 115.13631330064504 1277.3333333333333 159.82829381329577 C 1596.6666666666665 204.5202743259465 1596.6666666666665 204.5202743259465 1916 155.24254506344406 L 1916 224 L 0 224 Z" fill="#0133e5" mask="url(#mask)"></path>
                        </svg>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full flex z-[11] h-32">
                    <div className="w-full inline-block">
                        <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path d="M 0 40.68582680766969 C 191.60000000000002 59.85137895406114 191.60000000000002 59.85137895406114 383.20000000000005 50.268602880865416 C 574.8000000000001 40.68582680766969 574.8000000000001 40.68582680766969 766.4000000000001 65.75431386383038 C 958.0000000000001 90.82280091999107 958.0000000000001 90.82280091999107 1149.6 77.74953527242923 C 1341.1999999999998 64.67626962486739 1341.1999999999998 64.67626962486739 1532.8000000000002 78.97812676035599 C 1724.4000000000005 93.2799838958446 1724.4000000000005 93.2799838958446 1916 72.75911654566124 L 1916 128 L 0 128 Z" fill="#0133e5" mask="url(#mask)"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex bgFourth px-[10vw] py-[5vh] pb-[10vh] flex-col">
                <div className="flex gap-6 items-center">
                    <h1 className="text-[11vh] dm-sans-font font-bold text-white leading-[11vh]">Create and Win</h1>
                    <Image src={Mic} alt="Mic" />
                    <div className="flex gap-6 justify-center items-center ml-[-2vw] mb-[-3vh]">
                        <div className="p-4 bg-white rounded-full flex justify-center items-center">
                            <Image src={Arrow} alt="Arrow" />
                        </div>
                        <span className="text-lg text-white dm-sans-font">Join For Free</span>
                    </div>
                </div>
                <span className="dm-sans-font font-bold text-white text-[11vh] leading-[11vh] mb-[7vh]">Prizes with your music</span>
                <span className="text-lg dm-sans-font text-white mb-[8vh]">Distribute your Music to the most popular Platform, including Facebook, Twitter, Youtube with just a simple steps and get a chance to win big prizes!</span>
                <div className="flex justify-between">
                    <div className="flex gap-6">
                        <button className='text-[#010625] flex justify-center items-center gap-2 py-4 px-12 font-semibold text-md rounded-[33px] bg-white h-full karla-font hover:scale-110 transition-all ease-in-out duration-500' onMouseEnter={() => setHover('pill1')} onMouseLeave={() => setHover("")}>
                            GET STARTED
                            {hover === 'pill1' && <Image src={ArrowRight} alt="Arrow" />}
                        </button>
                        <button className='text-white flex justify-center items-center gap-2 py-4 px-6 font-semibold border-[1px] border-white text-md rounded-[33px] bg-white/10 h-full karla-font hover:scale-110 hover:bg-white hover:text-[#010625] transition-all ease-in-out duration-500' onMouseEnter={() => setHover('pill2')} onMouseLeave={() => setHover("")}>
                            Create Your Music
                            {hover === 'pill2' && <Image src={ArrowRight} alt="Arrow" />}
                        </button>
                    </div>
                    <div className="flex gap-6 justify-center items-center">
                        <span className="text-lg font-medium text-white dm-sans-font">
                            Scroll Down
                        </span>
                        <div className="flex justify-center items-center relative hover:animate-bounce transition-all ease-in-out">
                            <div className="absolute w-full h-full bg-white rounded-full z-10 animate-ping"></div>
                            <button className="w-[2vw] h-[2vw] bg-white rounded-full flex justify-center items-center relative z-[11]" onClick={() => {
                                const element = document.getElementById('footer');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <Image src={ArrowBottom} alt="Arrow" />
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}