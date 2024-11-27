import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <div className="hidden bg-[#F7F7F7] lg:flex justify-between text-[14px] ">
                <section className="flex justify-start p-3 ml-7">
                    <p>Phone Number: 956 742 455 678</p>
                    <p className="ml-4 pl-4 border-l border-black">Email:info@ddsgnr.com</p>
                </section>

                <section className="flex justify-end p-3 mr-7 ">
                    <Image src={"icons/Facebook.svg"} alt='Facebook' width={24} height={24} />
                    <Image src={"icons/Instagram.svg"} alt='Instagram' width={24} height={24} className="ml-4" />
                    <Image src={"icons/Twitter.svg"} alt='Twitter' width={24} height={24} className="ml-4" />
                    <Image src={"icons/LinkedIn.svg"} alt='LinkedIn' width={24} height={24} className="ml-4" />
                </section>
            </div>

            <div className="flex justify-between bg-[#F7F7F7] lg:mt-5 p-4">

                <section className="flex items-center">
                    <Image src={"icons/Logo.svg"} alt='Logo' width={32.58} height={30.38} className="ml-7" />
                    <h1 className='font-bold text-[25.7px] ml-2'>Ddsgnr</h1>

                    <div className="md:hidden absolute right-4">
                        <Image src={"/Icons/Menu.svg"} alt="Menu-Icon" width={24} height={24} />
                    </div>
                </section>


                <nav className="hidden bg-white md:flex items-center justify-between py-4 mr-7 w-3/4 h-11">
                    <ul className="flex items-center">
                        <li className="mx-5 cursor-pointer">Home</li>
                        <li className="mx-5 cursor-pointer">Courses</li>
                        <li className="mx-5 cursor-pointer">Services</li>
                        <li className="mx-5 cursor-pointer">Achievement</li>
                        <li className="mx-5 cursor-pointer">About Us</li>
                        <li className="mx-5 cursor-pointer">Testimonial</li>
                    </ul>

                    <div className="flex gap-4">
                        <button className="border border-black rounded-[5px] w-20 h-10">Login</button>
                        <button className="bg-black text-white border border-black rounded-[5px] w-[95px] h-10" >Sign Up</button>
                    </div>

                </nav>

            </div>
        </header>
    )
}

export default Header
