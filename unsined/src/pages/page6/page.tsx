import Image from "next/image";
import Envelope from "../../../public/home/envelop.svg";
import Background from "../../../public/six/background.webp";
import note from '../../../public/home/note.webp'
import Curve from '../../../public/six/curve.svg'
import { AnimatePresence, motion } from 'framer-motion';


export default function Page6() {

    return (
        <div className="flex flex-col w-full h-auto bg-[#010625] relative" id="footer" >
            <div className="w-full h-32 pointer-events-none flex bg-[#010625]">
                <div className="w-full inline-block">
                    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 69.23621074296807 C 191.60000000000002 38.18246934262007 191.60000000000002 38.18246934262007 383.20000000000005 53.70934004279407 C 574.8000000000001 69.23621074296807 574.8000000000001 69.23621074296807 766.4000000000001 41.998299260276056 C 958.0000000000001 14.760387777584043 958.0000000000001 14.760387777584043 1149.6 41.206848587161026 C 1341.1999999999998 67.65330939673801 1341.1999999999998 67.65330939673801 1532.8000000000002 51.8150713813991 C 1724.4000000000005 35.97683336606019 1724.4000000000005 35.97683336606019 1916 40.02583303811935 L 1916 128 L 0 128 Z" fill="#111534" mask="url(#mask)"></path>
                    </svg>
                </div>
            </div>
            <div className="flex justify-around items-center px-[10vw] py-[6vh] bgSix">
                <div className="flex flex-col gap-6 justify-center items-center">
                    <motion.div className='flex flex-col'
                        initial={{ translateY: -100, opacity: 0 }}
                        whileInView={{ translateY: 0 , opacity: 1, transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' }}}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                            <h1 className="font-medium text-[62px] leading-[63px] text-home-header font-sans spacing-[-3px]">Creating harmony</h1>
                            <h1 className="font-medium text-[62px] leading-[63px] text-home-header font-sans spacing-[-3px]">with the help of</h1>

                        <div className="flex gap-4 items-center w-full">
                            <h1 className="font-medium text-[62px] leading-[63px] text-home-header font-sans spacing-[-3px] home-header">Music</h1>
                            <div className='w-12 h-12 bg-[#FFFFFF12] rounded-full flex justify-center items-center z-[11]'>
                                <Image src={note} alt="fly1" width={25} height={20} />
                            </div>
                        </div>
                    </motion.div>
                    <div className='flex rounded-[33px] justify-center items-center gap-2 bg-[#313B66A3] border-[0.49px] border-[#8792C0]/50 pl-4 w-full h-16'>
                        <Image src={Envelope} alt="envelope" width={15} height={6} />
                        <input type="text" placeholder="EMAIL ADDRESS" className=' outline-none border-none bg-transparent text-white text-sm font-medium placeholder-[#A4AEDA] pl-2 flex-grow' />
                        <button className='text-white font-semibold text-sm rounded-[33px] bg-home-button h-full w-[200px] karla-font hover:scale-110 transition ease-in-out duration-300'>
                            GET STARTED
                        </button>
                    </div>
                </div>
                <Image src={Background} alt="bg" style={{
                    width: '22vw',
                    height: '37vh',
                }} />
            </div>

            <Image src={Curve} alt="curve" style={{
                position: 'absolute',
                bottom: '-20%',
                left: '10%',
            }} />
        </div>
    )
}