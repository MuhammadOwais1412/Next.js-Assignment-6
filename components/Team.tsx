import React from 'react'
import Image from 'next/image'

const Team = () => {
    return (
        <div className=" flex flex-col justify-center bg-[#F7F7F7] w-full h-[895px]">

            <div className="text-center">
                <h2 className="font-bold text-[32px] md:text-5xl">Our team</h2>
                <p className="text-lg mt-5 w-[363px] md:w-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="mt-12 w-full h-[482px]">

                <div className="flex flex-col md:flex-row justify-around w-full h-[209px]">
                    <section className="flex flex-col items-center justify-center w-[394.67px]"><Image src={"images/team-1.svg"} alt="team" width={80} height={80} />
                        <p className="mt-6 font-semibold text-xl">James Nduku</p>
                        <p className="text-lg">Marketing Coordinator</p>

                    </section>
                    <section className="flex flex-col items-center justify-center w-[394.67px]"><Image src={"images/team-2.svg"} alt="team" width={80} height={80} />
                        <p className="mt-6 font-semibold text-xl">Joseph Munyambu</p>
                        <p className="text-lg">Nursing Assistant</p>

                    </section>
                    <section className="flex flex-col items-center justify-center w-[394.67px]"><Image src={"images/team-3.svg"} alt="team" width={80} height={80} />
                        <p className="mt-6 font-semibold text-xl">Joseph Ngumbau</p>
                        <p className="text-lg">Medical Assistant</p>

                    </section>

                </div>

                <div className="hidden md:flex justify-around items-center">
                    <div className="flex gap-5">
                        <Image src={"/Icons/LinkedIn.svg"} alt="LinkedIn" width={24} height={24} />
                        <Image src={"/Icons/Twitter.svg"} alt="Twitter" width={24} height={24} />
                        <Image src={"/Icons/Dribble.svg"} alt="Dribble" width={24} height={24} />
                    </div>

                    <div className="flex gap-5">
                        <Image src={"/Icons/LinkedIn.svg"} alt="LinkedIn" width={24} height={24} />
                        <Image src={"/Icons/Twitter.svg"} alt="Twitter" width={24} height={24} />
                        <Image src={"/Icons/Dribble.svg"} alt="Dribble" width={24} height={24} />
                    </div>

                    <div className="flex gap-5">
                        <Image src={"/Icons/LinkedIn.svg"} alt="LinkedIn" width={24} height={24} />
                        <Image src={"/Icons/Twitter.svg"} alt="Twitter" width={24} height={24} />
                        <Image src={"/Icons/Dribble.svg"} alt="Dribble" width={24} height={24} />
                    </div>
                </div>




                <div className="hidden md:flex justify-around w-full h-[209px] mt-10">
                    <section className="flex flex-col items-center justify-center w-[394.67px]"><Image src={"images/team-4.svg"} alt="team" width={80} height={80} />
                        <p className="mt-6 font-semibold text-xl">Erick Kipkemboi</p>
                        <p className="text-lg">Web Designer</p>
                    </section>
                    <section className="flex flex-col items-center justify-center w-[394.67px]"><Image src={"images/team-5.svg"} alt="team" width={80} height={80} />
                        <p className="mt-6 font-semibold text-xl">Stephen Kerubo</p>
                        <p className="text-lg">President of Sales</p>
                    </section>
                    <section className="flex flex-col items-center justify-center w-[394.67px]"><Image src={"images/team-6.svg"} alt="team" width={80} height={80} />

                        <p className="mt-6 font-semibold text-xl">John Leboo</p>
                        <p className="text-lg">Dog Trainer</p></section>
                </div>


                <div className="hidden md:flex justify-around items-center">
                    <div className="flex gap-5">
                        <Image src={"/Icons/LinkedIn.svg"} alt="LinkedIn" width={24} height={24} />
                        <Image src={"/Icons/Twitter.svg"} alt="Twitter" width={24} height={24} />
                        <Image src={"/Icons/Dribble.svg"} alt="Dribble" width={24} height={24} />
                    </div>

                    <div className="flex gap-5">
                        <Image src={"/Icons/LinkedIn.svg"} alt="LinkedIn" width={24} height={24} />
                        <Image src={"/Icons/Twitter.svg"} alt="Twitter" width={24} height={24} />
                        <Image src={"/Icons/Dribble.svg"} alt="Dribble" width={24} height={24} />
                    </div>

                    <div className="flex gap-5">
                        <Image src={"/Icons/LinkedIn.svg"} alt="LinkedIn" width={24} height={24} />
                        <Image src={"/Icons/Twitter.svg"} alt="Twitter" width={24} height={24} />
                        <Image src={"/Icons/Dribble.svg"} alt="Dribble" width={24} height={24} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Team
