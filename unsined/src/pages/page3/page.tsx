import ReactCurvedText from "react-curved-text";
import Image from "next/image";
import Arrow from "../../../public/third/arrow.svg";
import List from "./list";
import { motion } from 'framer-motion';

export default function Page3() {
    return (
        <div className="relative pt-[7vh] pb-[12vh] px-[10vw] bg-[#010625] flex flex-col">
            <div className='absolute left-[10%] top-[5%] sideeffect2 w-[18vw] h-[23vh] z-[1] opacity-50'></div>
            <div className="flex justify-between w-full">
                <motion.div className="flex flex-col gap-4 w-[52vw]"
                    initial={{ translateY: -100, opacity: 0 }}
                    whileInView={{ translateY: 0 , opacity: 1, transition: { duration: 0.5, ease: 'easeOut' }}
                }>
                    <h1 className="page3-header font-sans font-bold text-[114px]">
                        Participate to WIN
                    </h1>
                    <span className="font-sans text-xl spacing-[0.2px]">Distribute Your Music To The Most Popular Platform, Including Facebook, Twitter, Youtube With Just A Simple Steps And Get A Chance To Win Big Prizes!</span>
                </motion.div>
                <div className="flex justify-center items-center">
                    <div className="animate-[spin_20s_linear_infinite]">
                        <ReactCurvedText 
                            width={220}
                            height={220}
                            cx={110}
                            cy={110}
                            rx={100}
                            ry={100}
                            startOffset={0}
                            text="WINCHANCE•TO•"
                            textProps={{
                                style : {
                                    fill: 'white',
                                    fontSize: '30px',
                                    letterSpacing: '30px'
                                }
                            }}
                        />
                    </div>
                    <div className="flex absolute h-[220px] w-[220px] justify-center items-center">
                        <Image src={Arrow} alt="arrow" style={{
                            width: '5vh',
                            height: '5vh'
                        }} />
                    </div>
                </div>
            </div>
            <List />
        </div>
    )
}