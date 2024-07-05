import User from '../../../public/second/user.webp'
import Creator from '../../../public/second/image.png'
import Image from 'next/image'
import { motion } from 'framer-motion';

export default function SContainer() {
    return (
        <div className="w-full h-auto flex gap-6 bg-[#010625] px-[10vw] pt-[6vh] justify-between">
            <motion.div
                initial={{ translateY: -50, opacity: 0 }}
                whileInView={{ translateY: 0 , opacity: 1, transition: { duration: 0.8, delay: 0.1, ease: 'easeOut' }}}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
            >
                <Image src={User} alt="user" style={{
                    width: '755px',
                    height: '280px',
                }} />
            </motion.div>
            <div className="flex flex-col gap-8">
                <div className='flex gap-10 pb-8 border-b-2 border-white'>
                    <span className='karla-font spacing-[-1px] font-medium text-[2.5vw] leading-[2.5vw]'>Active Creators<br />and Participants</span>
                    <span className='text-white karla-font font-bold text-uppercase text-[5vw] karla-font leading-[5vw]'>873K</span>
                </div>
                <div className='flex gap-10'>
                    <div className='flex gap-8 items-center'>
                        <Image src={Creator} alt="creator" style={{
                            width: '6.771vw',
                            height: '5.258vh',
                        }} />
                        <button className='karla-font text-md border-b-[1px] border-white pb-[5px]'>JOIN THEM</button>
                    </div>
                    <p className='text-sm karla-font text-wrap flex-grow-0 flex-shrink-0 max-w-xs'>The number of active podcasts and their quality is
                    constantly growing.</p>
                </div>
            </div>
        </div>
    )
}