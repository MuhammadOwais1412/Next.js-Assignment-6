import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="md:flex w-full">
            <div className="flex flex-col justify-center md:items-center w-full md:w-1/2 p-3 md:p-0">
                <h1 className="font-bold text-5xl md:text-[56px] w-[380px] md:w-[500px]">Learn new skills online with ease</h1>
                <p className="text-lg w-[380px] md:w-[500px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

                <section className="flex gap-6 w-[358px] md:w-[500px] mt-7">
                    <button className="w-[178px] h-12 bg-black text-white border border-black rounded-[5px]">Start learning now</button>
                    <button className="w-[164px] h-12 border border-black rounded-[5px]">Explore Courses</button>
                </section>

            </div>

            <div className="w-full h-auto md:h-auto md:w-1/2">
                <Image src={"/images/img.png"} alt="Hero-image" width={640} height={900} className="w-full h-auto"/>
            </div>

        </div>
    )
}

export default Hero
