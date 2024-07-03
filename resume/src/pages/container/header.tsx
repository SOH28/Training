import Profile from '../../../public/profile.png'
import Image from 'next/image'

export default function Header() {
    return (
        <div className="w-full h-auto flex gap-6 mb-4">
            <div className='w-full h-auto flex flex-col text-black'>
              <h1 className='text-3xl font-bold pb-4 mb-4 border-b-[1px] border-gray-700 tnr'>SOHAM GON</h1>
              <p className='text-md calibri font-bold leading-5'>Mobile No: +91 9051018504</p>
              <p className='text-md calibri font-bold leading-5'>Email ID: <a className='text-[#0563c1]' href='mailto:sohamgon.sg@gmail.com' target='_blank'>sohamgon.sg@gmail.com</a></p>
              <p className='text-md calibri font-bold leading-5'>LinkedIn: <a className='text-[#0563c1]' href='https://www.linkedin.com/in/soham-gon-6a0a65268/' target='_blank'>https://www.linkedin.com/in/soham-gon-6a0a65268/</a></p>
              <p className='text-md calibri font-bold leading-5'>GitHub: <a className='text-[#0563c1]' href='https://github.com/SOH69/' target='_blank'>https://github.com/SOH69/</a></p>
              <p className='text-md calibri font-bold leading-5'>WhatsApp Number: +91 9051018504</p>
            </div>
            <div className='w-[10vw] h-auto flex justify-center items-center'>
              <Image src={Profile} alt='Profile' style={{
                width: '6.5vw',
                height: '8vw',
                border: '2px solid black',
              }} />
            </div>
        </div>
    )
}