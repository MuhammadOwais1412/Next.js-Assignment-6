import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
    return (
        <div>

            <div className="flex flex-col justify-center w-full h-[830.89px] bg-[#F7F7F7]">

                <div className="ml-10">
                    <h2 className="font-bold text-[32px] md:text-5xl">Customer testimonials</h2>
                    <p className="text-lg mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="flex gap-8 w-[1,152px] h-[321.89px] ml-10 mt-16">

                    <div className="w-[362.67px] h-[321.89px] border border-black p-8">
                        <section><Image src={"/icons/Stars.svg"} alt="Stars" width={116} height={18.89} /></section>
                        <section className="w-[298.67px] h-[135] text-lg mt-[18px]"><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p></section>
                        <section className="flex items-center"><Image src={"/images/Avatar-1.svg"} alt="Avatar" width={56} height={56} />
                            <div className="p-5">
                                <p className="font-semibold">James Nduku</p>
                                <p>Software Developer</p>
                            </div>
                        </section>
                    </div>

                    <div className="hidden md:block w-[362.67px] h-[321.89px] border border-black p-8">
                        <section><Image src={"/icons/Stars.svg"} alt="Stars" width={116} height={18.89} /></section>
                        <section className="w-[298.67px] h-[135] text-lg mt-[18px]"><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p></section>
                        <section className="flex"><Image src={"/images/Avatar-2.svg"} alt="Avatar" width={56} height={56} />
                            <div className="p-5">
                                <p className="font-semibold">Erick Kipkemboi</p>
                                <p>Scrum Master</p>
                            </div>
                        </section>
                    </div>

                    <div className="hidden md:block w-[362.67px] h-[321.89px] border border-black p-8">
                        <section><Image src={"/icons/Stars.svg"} alt="Stars" width={116} height={18.89} /></section>
                        <section className="w-[298.67px] h-[135] text-lg mt-[18px]"><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p></section>
                        <section className="flex "><Image src={"/images/Avatar-3.svg"} alt="Avatar" width={56} height={56} />
                            <div className="p-5">
                                <p className="font-semibold">Stephen Kerubo</p>
                                <p>UI/UX Designer</p>
                            </div>
                        </section>
                    </div>

                </div>

                <div className="flex justify-between w-[1,152px] h-12 pl-10 pr-[70px] mt-12">
                    <Image src={"/Icons/Slider-Dots.svg"} alt="Slider-Dots" width={72} height={8} />
                    <Image src={"/Icons/Slider-Buttons.svg"} alt="Slider-Buttons" width={111} height={48} />

                </div>

            </div>
        </div>
    )
}

export default Testimonials
