import React from 'react'

const Achievements = () => {
    return (
        <div className="h-[451px] md:h-[488px] px-10 mt-28">

            <div className="text-center mx-auto">
            <h1 className="font-bold text-[32px] md:text-5xl leading-[57.6px] p-5 md:p-0">Our Achievements</h1>
            <p className="text-lg w-[362px] md:w-[1152px] leading-[27px] md:mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            
            
            <div className="flex justify-around mt-9">

                <div className="flex flex-col items-center p-2 md:p-0">
                    <h3 className="font-bold text-[40px]">+200</h3>
                    <p>Courses</p>
                </div>

                <div className="flex flex-col items-center p-2 md:p-0">
                    <h3 className="font-bold text-[40px]">50K</h3>
                    <p>Mentors</p>
                </div>

                <div className="flex flex-col items-center p-2 md:p-0">
                    <h3 className="font-bold text-[40px]">370k</h3>
                    <p>Students</p>
                </div>

                <div className="flex flex-col items-center p-2 md:p-0">
                    <h3 className="font-bold text-[40px]">100+</h3>
                    <p>Recognition</p>
                </div>

            </div>
        </div>
    )
}

export default Achievements
