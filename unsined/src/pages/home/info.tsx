import Image from 'next/image'
import Arrow from '../../../public/home/header.svg'
import Envelope from '../../../public/home/envelop.svg'
import Music from '../../../public/home/music.svg'
import Cup from '../../../public/home/cup.svg'
import Star from '../../../public/home/star.svg'
import No1Star from '../../../public/home/no1.svg'
import bgImg from '../../../public/home/bgImage.webp'
import Curve from '../../../public/home/curve.svg'
import Fly from './fly'

export default function Info() {
    return (
        <div className='w-full flex justify-between z-[10] mb-[5vh] overflow-hidden'>
            <div className="flex flex-col items-center">
                <div className='flex flex-col mb-9'>
                    <h1 className="font-medium text-[62px] leading-[63px] text-home-header font-sans spacing-[-3px]">Monetize Your Talents</h1>
                    <div className="flex gap-4 items-center w-full">
                        <h1 className="font-medium text-[62px] leading-[63px] text-home-header font-sans spacing-[-3px] home-header">Let's Join Forces</h1>
                        <Image src={Arrow} alt="Arrow" width={105} height={53} style={{
                            marginTop: '1rem'
                        }} />
                    </div>
                </div>
                <span className='text-white text-xl w-full karla-font font-light mb-10'>Music Contests: Where Fun Meets Fame!</span>
                <div className='flex rounded-[33px] justify-center items-center gap-2 bg-[#313B66A3] border-[0.49px] border-[#8792C0]/50 pl-4 w-full h-16 mb-[15vh]'>
                    <Image src={Envelope} alt="envelope" width={15} height={6} />
                    <input type="text" placeholder="EMAIL ADDRESS" className=' outline-none border-none bg-transparent text-white text-sm font-medium placeholder-[#A4AEDA] pl-2 flex-grow' />
                    <button className='text-white font-semibold text-sm rounded-[33px] bg-home-button h-full w-[200px] karla-font hover:scale-110 transition ease-in-out duration-300'>
                        GET STARTED
                    </button>
                </div>
                <div className='flex w-full'>
                    <div className='px-3 home-pill-attach rounded-[15px] h-7 karla-font flex justify-center items-center rotate-[-60deg] mr-[-3.1vw] mt-[2.5vh] z-[11]'>
                        <Image src={No1Star} alt="music" width={18} height={18} />
                        <span className='text-sm text-[#103E77] spacing-[-1px] font-bold'>Be the No.1</span>
                    </div>
                    <div className='flex flex-col gap-4 z-[10]'>
                        <div className='w-[7vw] h-[7vw] rounded-full bg-home-pills-primary flex justify-center items-center backdrop-blur-sm'>
                            <Image src={Music} alt="music" width={60} height={60} />
                        </div>
                        <span className='karla-font font-normal text-center text-sm'>Upload & Mix</span>
                    </div>
                    <div className='flex flex-col gap-4 ml-[-5px]'>
                        <div className='w-[7vw] h-[7vw] rounded-full bg-[#152865]/75 home-pill-secondary-outline flex justify-center items-center backdrop-blur-sm'>
                            <Image src={Cup} alt="music" width={60} height={60} />
                        </div>
                        <span className='karla-font font-normal text-center text-sm'>Participate</span>
                    </div>
                    <div className='flex flex-col gap-4 ml-[-5px]'>
                        <div className='w-[7vw] h-[7vw] rounded-full bg-[#152865]/80 home-pill-secondary-outline flex justify-center items-center backdrop-blur-sm'>
                            <Image src={Star} alt="music" width={60} height={60} />
                        </div>
                        <span className='karla-font font-normal text-center text-sm'>Win</span>
                    </div>
                </div>
            </div>
            <Image src={bgImg} alt="bg" width={600} height={100} style={{
                zIndex: 10,
            }}/>
            <Image src={Curve} alt="curve" style={{
                position: 'absolute',
                bottom: '0',
                marginBottom: '-8vh',
                left: '10%',

            }} />
            <div className='absolute right-[-15%] top-[15%] sideeffect w-[30vw] h-[45vh] z-[1]'></div>
            <div className='absolute left-[35%] bottom-[5%] sideeffect2 w-[18vw] h-[23vh] z-[1]'></div>
            {/* <Fly /> */}
        </div>
    )
} 
