import { Link } from 'react-router-dom'
import bgImg from '../assets/images/bg-head.jpg'

export default function HeaderImage({ page, page2 }) {
    return (
        <>
            <div
                className="relative w-full h-80 bg-cover bg-center border-b-2 border-white shadow-xl"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className="absolute inset-0 bg-black/30
                 bg-opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center md:justify-start md:ms-30 mt-20">
                    <div className=" text-white px-4">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4">{page}</h1>
                        <p className="text-md md:text-lg text-white py-1 font-semibold">
                            <Link to={'/'} className='hover:underline hover:text-red-500'>Home</Link> / {page} <span className='text-sm'>{page2 && `/ ${page2}`}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}