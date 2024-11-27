import Image from "next/image";

const Card = () => {
    return (
        <div className="w-full h-[862px] md:h-[1049px]">
            <section className="w-[385px] md:w-[768px] mx-auto my-20 p-5 md:pt-8 text-center md:text-left">
                <h1 className="font-bold text-[32px] md:text-5xl">Explore Courses By Category</h1>
                <p className="text-lg w-[385px] md:w-[768px] mt-6 ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-[repeat(3,_1fr)] gap-x-6 gap-y-12 mt-28 mb-9 w-[380px] h-[556px] md:w-full md:h-auto items-center">

                {/* Card 1 */}
                <div className="flex gap-5 items-center w-[380px] md:w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                    <span className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[5px] ml-3"><Image src={"/icons/1.svg"} alt="1" width={32} height={32} /></span>
                    <div>
                        <h3 className="text-xl font-semibold">Design & Development</h3>
                        <p className="text-lg">50+ Courses Available</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex gap-5 items-center w-[380px] md:w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                    <span className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[5px] ml-3"><Image src={"/icons/2.svg"} alt="1" width={32} height={32} /></span>
                    <div>
                        <h3 className="text-xl font-semibold">Marketing</h3>
                        <p className="text-lg">50+ Courses Available</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex gap-5 items-center w-[380px] md:w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                    <span className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[5px] ml-3"><Image src={"/icons/3.svg"} alt="1" width={32} height={32} /></span>
                    <div>
                        <h3 className="text-xl font-semibold">Development</h3>
                        <p className="text-lg">50+ Courses Available</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="hidden md:flex gap-5 items-center w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                    <span className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[5px] ml-3"><Image src={"/icons/4.svg"} alt="1" width={32} height={32} /></span>
                    <div>
                        <h3 className="text-xl font-semibold">Communication</h3>
                        <p className="text-lg">50+ Courses Available</p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="hidden md:flex gap-5 items-center w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                    <span className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[5px] ml-3"><Image src={"/icons/5.svg"} alt="1" width={32} height={32} /></span>
                    <div>
                        <h3 className="text-xl font-semibold">Digital Marketing</h3>
                        <p className="text-lg">50+ Courses Available</p>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="hidden md:flex gap-5 items-center w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                    <span className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[5px] ml-3"><Image src={"/icons/6.svg"} alt="1" width={32} height={32} /></span>
                    <div>
                        <h3 className="text-xl font-semibold">Self Development</h3>
                        <p className="text-lg">50+ Courses Available</p>
                    </div>
                </div>

                {/* Card 7 */}
                <div className="hidden md:flex gap-5 items-center w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                    <span className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[5px] ml-3"><Image src={"/icons/7.svg"} alt="1" width={32} height={32} /></span>
                    <div>
                        <h3 className="text-xl font-semibold">Business</h3>
                        <p className="text-lg">50+ Courses Available</p>
                    </div>
                </div>

                {/* Card 8 */}
                <div className="hidden md:flex gap-5 items-center w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                    <span className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[5px] ml-3"><Image src={"/icons/8.svg"} alt="1" width={32} height={32} /></span>
                    <div>
                        <h3 className="text-xl font-semibold">Finance</h3>
                        <p className="text-lg">50+ Courses Available</p>
                    </div>
                </div>

                {/* Card 9 */}
                <div className="hidden md:flex gap-5 items-center w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
                    <span className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[5px] ml-3"><Image src={"/icons/9.svg"} alt="1" width={32} height={32} /></span>
                    <div>
                        <h3 className="text-xl font-semibold">Consulting</h3>
                        <p className="text-lg">50+ Courses Available</p>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center md:mt-28">
                <button className="w-[155px] h-12 border border-black rounded-[5px]">View All Courses</button>
            </section>
        </div>
    );
}

export default Card