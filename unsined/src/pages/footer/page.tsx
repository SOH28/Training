import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import FB from '../../../public/footer/fb.svg'
import Twitter from '../../../public/footer/twitter.svg'
import Linkdeln from '../../../public/footer/linkdeln.svg'
import YT from '../../../public/footer/yt.svg'
import Envelope from '../../../public/footer/envelope.svg'
import note from '../../../public/home/doubleSound.webp'

export default function Footer() {
    return (
        <div className="w-full h-auto flex flex-col bg-[#010625] px-[10vw] pt-[18vh] justify-between pb-[6vh] relative">
            <div className="flex justify-between mb-[8vh]">
                <div className="flex flex-col justify-around">
                    <Image src={Logo} alt="logo" width={250} height={64} />
                    <div className="flex flex-col">
                        <h1 className="text-[4vh] text-home-header font-sans leading-[3.5h] spacing-[-3px]">Listen .</h1>
                        <h1 className="text-[4vh] text-home-header font-sans leading-[3.5vh] spacing-[-3px]">Create . <text style={{color: '#6BADFF'}}>Mix</text></h1>
                    </div>
                </div>
                <div className="flex flex-col gap-4 dm-sans-font">
                    <h1 className="text-[2.5vh] text-white footer-head relative leading-[8vh] mb-8">Contest</h1>
                    <h1 className="text-[1.5vh] text-white">Remix</h1>
                    <h1 className="text-[1.5vh] text-white">Original Track</h1>
                    <h1 className="text-[1.5vh] text-white">Creative Moods</h1>
                    <h1 className="text-[1.5vh] text-white">Featured Content</h1>
                </div>
                <div className="flex flex-col gap-4 dm-sans-font">
                    <h1 className="text-[2.5vh] text-white footer-head relative leading-[8vh] mb-8">Quick Links</h1>
                    <h1 className="text-[1.5vh] text-white">About Unsined</h1>
                    <h1 className="text-[1.5vh] text-white">Careers</h1>
                    <h1 className="text-[1.5vh] text-white">Annoucements</h1>
                    <h1 className="text-[1.5vh] text-white">Contact Us</h1>
                </div>
                <div className="flex flex-col gap-4 dm-sans-font">
                    <h1 className="text-[2.5vh] text-white footer-head relative leading-[8vh] mb-8">Get In Touch</h1>
                    <div className="flex gap-2 mb-4">
                        <div className='w-12 h-12 bg-[#FFFFFF12] border-[0.5px] border-[#2E407E] rounded-full flex justify-center items-center z-[11] hover:scale-110 transition-all ease-in-out duration-300'>
                            <Image src={FB} alt="fly1" width={15} height={15} />
                        </div>
                        <div className='w-12 h-12 bg-[#FFFFFF12] border-[0.5px] border-[#2E407E] rounded-full flex justify-center items-center z-[11] hover:scale-110 transition-all ease-in-out duration-300'>
                            <Image src={Twitter} alt="fly1" width={15} height={15} />
                        </div>
                        <div className='w-12 h-12 bg-[#FFFFFF12] border-[0.5px] border-[#2E407E] rounded-full flex justify-center items-center z-[11] hover:scale-110 transition-all ease-in-out duration-300'>
                            <Image src={Linkdeln} alt="fly1" width={15} height={15} />
                        </div>
                        <div className='w-12 h-12 bg-[#FFFFFF12] border-[0.5px] border-[#2E407E] rounded-full flex justify-center items-center z-[11] hover:scale-110 transition-all ease-in-out duration-300'>
                            <Image src={YT} alt="fly1" width={15} height={15} />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <Image src={Envelope} alt="envelope" width={15} height={6} />
                        <h1 className="text-[1.3vh] text-[#BFC4D9]">support@unsinedofficial.com</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-[5vw] py-8 dm-sans-font items-center border-y-[1px] border-[#AFB8C8]/20">
                <span className='text-uppercase text-md text-white spacing-[2px]'>Privacy Policy  |  Terms and Conditions</span>
                <div className='w-12 h-12 bg-[#FFFFFF12] rounded-full flex justify-center items-center z-[11]'>
                    <Image src={note} alt="fly1" width={25} height={20} />
                </div>
                <span className='text-uppercase text-md text-white spacing-[2px]'>2024 . All Rights Reserved</span>
            </div>
            <div className='absolute right-[10%] bottom-[5%] sideeffect2 w-[18vw] h-[23vh] z-[1] opacity-35'></div>
        </div>
    )
}