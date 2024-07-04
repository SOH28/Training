import groupSound from '../../../public/home/GroupSound.webp'
import doubleSound from '../../../public/home/doubleSound.webp'
import note from '../../../public/home/note.webp'
import Image from 'next/image'

export default function Fly() {
    const flyingObject = [groupSound, doubleSound, note, note, doubleSound, groupSound, note, note, doubleSound, groupSound]


    return (
        <div className='absolute right-0 bottom-0 h-[85%] w-[50%] z-[11] overflow-hidden'>
            {flyingObject.map((object, index) => (
                <div className='w-12 h-12 bg-[#FFFFFF12] rounded-full absolute bottom-[-5%] fly flex justify-center items-center z-[11]' style={{
                    right: `${10+(index*5)}%`
                }}>
                    <Image src={object} alt="fly1" width={25} height={20} />
                </div>
            ))}
        </div>

    )
}