import ReactCurvedText from "react-curved-text";
import Image from "next/image";
import BGIMG from '../../../public/fifth/page5.webp'
import Arrow from '../../../public/third/arrow.svg'
import { AnimatePresence, motion } from 'framer-motion';

export default function Page5() {
    return (
        <div className="flex flex-col w-full h-auto px-[10vw] py-[10vh] bg-[#010625]">
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-4 w-[52vw]">
                    <h1 className="karla-font font-normal spacing-[-1px] text-[4vh] page5-header leading-[4vh]">ELEVATE YOUR MUSIC</h1>
                    <span className="karla-font font-normal spacing-[-1px] text-[4vh] page5-header leading-[4vh]">CAREER WITH US</span>
                </div>
                <div className="flex justify-center items-center pr-[3.5vw] ">
                    <div className="animate-[spin_20s_linear_infinite]">
                        <ReactCurvedText 
                            width={180}
                            height={180}
                            cx={90}
                            cy={90}
                            rx={80}
                            ry={80}
                            startOffset={0}
                            text="WINCHANCE•TO•"
                            textProps={{
                                style : {
                                    fill: 'white',
                                    fontSize: '20px',
                                    letterSpacing: '26px'
                                }
                            }}
                        />
                    </div>
                    <div className="flex absolute h-[220px] w-[220px] justify-center items-center">
                        <Image src={Arrow} alt="arrow" style={{
                            width: '4vh',
                            height: '4vh'
                        }} />
                    </div>
                </div>
            </div>
            <motion.div className="flex justify-center items-center w-full mt-[-4vh]"
                initial={{ scale: 0.6, opacity: 0.6 }}
                whileInView={{ scale: 1 , opacity: 1, transition: { duration: 0.8, delay: 0.1, ease: 'easeOut' }}}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <Image src={BGIMG} alt="Page 5" />
            </motion.div>
        </div>
    )
}