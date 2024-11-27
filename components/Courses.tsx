import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (

    <div className="mt-6 w-full h-[1690] md:h-[1742px]">
      <div className="text-center">
        <h1 className="font-bold text-[56px] leading-[67.2px]">Courses</h1>
        <p className="text-lg mt-4">Your Ultimate Guide to learning</p>
      </div>

      <div className="flex justify-center gap-12 mt-12">
        <p className="w-[87px] border-b border-[#676767] text-center pb-[10px]">Popular</p>
        <p className="text-center pb-[10px]">Recommended</p>
        <p className="text-center pb-[10px]">Best Price</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(3,_1fr)] gap-8 mt-12">

        {/* course 1 */}
        <div className="w-[416px] h-[534px] bg-[#F7F7F7] mt-5">
          <section className="w-full h-[300px] relative">
            <Image src={"/images/image1.svg"} alt="image" fill style={{ objectFit: "cover" }} />
          </section>

          <section className="w-[416px] h-[210px] p-4 mt-5">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Design</p>
              <span className="flex items-center">
                <Image src={"/icons/Star.svg"} alt="Star" width={24} height={24} />
                <p className="text-sm font-semibold ml-2">5.0</p>
              </span>
            </div>
            <h5 className="font-bold text-2xl mt-2">UX/UI Design 201</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className="flex items-center gap-7 mt-6">
              <button className="w-[117px] h-10 border border-black rounded-[5px]">Enroll Now</button>
              <p className="font-medium">$400</p>
            </div>
          </section>

        </div>

        {/* course 2 */}
        <div className="w-[416px] h-[534px] bg-[#F7F7F7] mt-5">
          <section className="w-full h-[300px] relative">
            <Image src={"/images/image2.svg"} alt="image" fill style={{ objectFit: "cover" }} />
          </section>
          <section className="w-[416px] h-[210px] p-4 mt-5">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Programming</p>
              <span className="flex items-center">
                <Image src={"/icons/Star.svg"} alt="Star" width={24} height={24} />
                <p className="text-sm font-semibold ml-2">5.0</p>
              </span>
            </div>
            <h5 className="font-bold text-2xl mt-2">Introduction to Python</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className="flex items-center gap-7 mt-6">
              <button className="w-[117px] h-10 border border-black rounded-[5px]">Enroll Now</button>
              <p className="font-medium">$400</p>
            </div>
          </section>
        </div>

        {/* course 3 */}
        <div className="w-[416px] h-[534px] bg-[#F7F7F7] mt-5">
          <section className="w-full h-[300px] relative">
            <Image src={"/images/image3.svg"} alt="image" fill style={{ objectFit: "cover" }} />
          </section>
          <section className="w-[416px] h-[210px] p-4 mt-5">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Business</p>
              <span className="flex items-center">
                <Image src={"/icons/Star.svg"} alt="Star" width={24} height={24} />
                <p className="text-sm font-semibold ml-2">5.0</p>
              </span>
            </div>
            <h5 className="font-bold text-2xl mt-2">Data Analysis for Beginners</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className="flex items-center gap-7 mt-6">
              <button className="w-[117px] h-10 border border-black rounded-[5px]">Enroll Now</button>
              <p className="font-medium">$400</p>
            </div>
          </section>
        </div>

        {/* course 4 */}
        <div className="hidden md:block w-[416px] h-[534px] bg-[#F7F7F7] mt-5">
          <section className="w-full h-[300px] relative">
            <Image src={"/images/image4.svg"} alt="image" fill style={{ objectFit: "cover" }} />
          </section>
          <section className="w-[416px] h-[210px] p-4 mt-5">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Art</p>
              <span className="flex items-center">
                <Image src={"/icons/Star.svg"} alt="Star" width={24} height={24} />
                <p className="text-sm font-semibold ml-2">5.0</p>
              </span>
            </div>
            <h5 className="font-bold text-2xl mt-2">Art Specialization</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className="flex items-center gap-7 mt-6">
              <button className="w-[117px] h-10 border border-black rounded-[5px]">Enroll Now</button>
              <p className="font-medium">$400</p>
            </div>
          </section>
        </div>

        {/* course 5 */}
        <div className="hidden md:block w-[416px] h-[534px] bg-[#F7F7F7] mt-5">
          <section className="w-full h-[300px] relative">
            <Image src={"/images/image5.svg"} alt="image" fill style={{ objectFit: "cover" }} />
          </section>
          <section className="w-[416px] h-[210px] p-4 mt-5">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Law</p>
              <span className="flex items-center">
                <Image src={"/icons/Star.svg"} alt="Star" width={24} height={24} />
                <p className="text-sm font-semibold ml-2">5.0</p>
              </span>
            </div>
            <h5 className="font-bold text-2xl mt-2">Rule of Law</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className="flex items-center gap-7 mt-6">
              <button className="w-[117px] h-10 border border-black rounded-[5px]">Enroll Now</button>
              <p className="font-medium">$400</p>
            </div>
          </section>
        </div>

        {/* course 6 */}
        <div className="hidden md:block w-[416px] h-[534px] bg-[#F7F7F7] mt-5">
          <section className="w-full h-[300px] relative">
            <Image src={"/images/image6.svg"} alt="image" fill style={{ objectFit: "cover" }} />
          </section>
          <section className="w-[416px] h-[210px] p-4 mt-5">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">Tech</p>
              <span className="flex items-center">
                <Image src={"/icons/Star.svg"} alt="Star" width={24} height={24} />
                <p className="text-sm font-semibold ml-2">5.0</p>
              </span>
            </div>
            <h5 className="font-bold text-2xl mt-2">Introduction to webflow</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className="flex items-center gap-7 mt-6">
              <button className="w-[117px] h-10 border border-black rounded-[5px]">Enroll Now</button>
              <p className="font-medium">$400</p>
            </div>
          </section>


        </div>
      </div>


      <section className="flex justify-center items-center md:mt-[72px] mx-auto">
        <button className="w-[152px] h-10 border border-black rounded-[5px]">View All Courses</button>
      </section>

    </div>
  )
}

export default Courses
