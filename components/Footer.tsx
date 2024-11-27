import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <div className="w-full md:w-[1120px] md:p-20 mt-20">

        <div className="flex flex-col md:flex-row justify-between">
          <section>
            <p className="font-semibold text-lg">Subscribe to our newsletter</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>

          <section>
            <div className="flex flex-col md:flex-row">
              <input type="email" name="email" placeholder="Enter your email" className="w-[380px] md:w-[265px] h-12 border border-black p-3 rounded-[5px]" />
              <button className="w-[380px] md:w-[119px] h-12 p-3 border border-black rounded-[5px] ml-4">Subscribe</button>
            </div>
            <div>
              <p className="text-xs mt-4">By subscribing you agree to with our <span className="underline">Privacy Policy</span></p>
            </div>
          </section>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-16 items-center text-center md:text-start">
          <div className="flex gap-2 w-[250] h-10"><Image src={"icons/Logo.svg"} alt='Logo' width={32.58} height={30.38} />
            <h2 className="font-bold text-[25.07px]">Ddsgnr</h2>
          </div>
          <div className="w-[250] h-[225] text-sm">
            <div className="pb-5 text-base font-semibold"><p>Courses</p></div>
            <div className="flex flex-col gap-4">
              <p>Business</p>
              <p>Development</p>
              <p>Technology</p>
              <p>Design</p>
              <p>Programming</p>
            </div>
          </div>
          <div className="w-[250] h-[225] text-sm">
            <div className="pb-4 text-base font-semibold"><p>Resources</p></div>
            <div className="flex flex-col gap-4">
              <p>Career</p>
              <p>Resume</p>
              <p>Learning</p>
              <p>Interview Preparation</p>
              <p>Jobs</p>
            </div>
          </div>
          <div className="w-[250] h-[225] text-sm">
            <div className="pb-4 text-base font-semibold"><p>About Us</p></div>
            <div className="flex flex-col gap-3">
              <p>Contact</p>
              <p>Help/Support</p>
              <p>FAQ</p>
              <p>Terms and Conditions</p>
              <p>Partners</p>
            </div>
          </div>
        </div>

        <div className="w-[380px] md:w-[1120px] h-[57px] flex justify-between items-end border-t border-black mt-20 pt-4">
          <div className="flex gap-1 md:gap-6">
            <p>2023 Ddsgnr. All right reserved.</p>
            <p className="underline">Privacy Policy</p>
            <p className="underline">Terms of Service</p>
            <p className="underline">Cookies Settings</p>
          </div>

          <div className="flex gap-3">
            <Image src={"icons/Facebook.svg"} alt='Facebook' width={24} height={24} />
            <Image src={"icons/Instagram.svg"} alt='Instagram' width={24} height={24} />
            <Image src={"icons/Twitter.svg"} alt='Twitter' width={24} height={24} />
            <Image src={"icons/LinkedIn.svg"} alt='LinkedIn' width={24} height={24} />
          </div>

        </div>



      </div>
    </div>
  )
}

export default Footer
