import React from "react"
import { TwoColGridComponent, code } from "../pages/layouts/two-column-grid"
import { WithComponentPreview } from "../components"
import { motion } from "framer-motion"
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
const Hero = () => {
  return (
    <section className="h-screen bg-gray-200" style={{ marginBottom: "40rem" }}>
      <div className="flex flex-col items-center text-center">
        <motion.h1
          className="max-w-4xl capitalize mx-auto pt-32 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            delay: 0.4,
            duration: 1.2,
          }}
        >
          Stop writing the same CSS over and over again
        </motion.h1>
        <motion.p
          className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            delay: 0.7,
            duration: 1.2,
          }}
        >
          Common Layout and component snippets you can use to speed up your
          workflow
        </motion.p>
        {/* add product hunt badge */}
      </div>

      <motion.div
        className="relative container mx-auto"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          delay: 1.3,
          duration: 1,
        }}
      >
        <div
          className="hidden xl:block 2xl:hidden absolute w-56 leading-tight"
          style={{ top: "200px", right: "-85px" }}
        >
          <h3 className="text-center font-bold pl-8 mb-2 capitalize">
            Preview components
            <br />
            at different screen
            <br />
            sizes By dragging
          </h3>
          <svg
            className="ml-5"
            width="91px"
            height="55px"
            viewBox="0 0 91 55"
            version="1.1"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-1057.000000, -4471.000000)"
                fill="#002F3C"
              >
                <g transform="translate(175.000000, 3658.000000)">
                  <g transform="translate(927.791755, 841.038060) scale(-1, -1) rotate(-32.000000) translate(-927.791755, -841.038060) translate(875.791755, 833.038060)">
                    <path
                      d="M31.4032714,0.661420042 C21.0928429,1.37996936 10.5055648,2.36525856 0.880399707,6.06440139 C0.890892549,6.06065504 0.901385392,6.05615943 0.912685376,6.05166381 C-0.654783865,6.5311962 0.0902079526,8.8883976 1.72224853,8.42609841 C7.69590448,6.04866673 14.1901668,4.97421447 20.5916079,4.10730982 C40.6975084,1.77408504 61.2441083,2.672459 81.0828449,6.40382041 C88.1372636,7.9420704 94.944697,10.1666511 101.727916,12.5066193 C102.280808,12.6849454 102.9015,12.3073137 103.049207,11.8097988 C83.2960275,0.551277446 54.7062603,0.227593083 31.4032714,0.661420042"
                      id="Fill-1"
                    ></path>
                    <path
                      d="M97.6670145,9.45964108 C97.6977383,9.49398579 97.7276088,9.52756728 97.7574792,9.561912 C97.7267553,9.52756728 97.6968849,9.49398579 97.6670145,9.45964108 M90.4733667,1.64354777 C89.3732822,3.92174702 99.1545608,8.90020387 100.013975,13.0475187 C108.161769,16.2179172 92.9116455,-0.5293277 90.4733667,1.64354777"
                      id="Fill-3"
                    ></path>
                    <path
                      d="M99.9142377,10.7790776 C97.2774937,11.8336699 77.6397642,11.2756276 82.2677693,15.7745551 C88.0591161,15.8667935 94.0566247,14.4078896 99.9142377,13.9712946 C102.115751,13.9874363 102.114115,10.740645 99.9142377,10.7790776"
                      id="Fill-5"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div
          className="hidden xl:block 2xl:hidden absolute w-56 leading-tight"
          style={{ top: "-180px", right: "55px" }}
        >
          <h3 className="-ml-3 font-bold pt-20 mb-2">Get the code</h3>
          <svg
            className="-mt-10 ml-5"
            width="29"
            height="110"
            viewBox="0 0 29 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9878 50.0441C14.0332 48.9847 14.9407 67.3467 14.452 69.6615C14.1379 80.2157 13.7539 90.7699 13.5096 101.363C13.2304 113.291 13.0908 125.218 12.4974 137.106C12.7766 139.029 11.0314 149.269 12.8115 148.995C14.5218 149.191 13.9285 136.439 14.3822 134.321C15.0803 121.295 15.2199 108.269 15.6038 95.2427C16.0925 80.5296 16.6161 65.8558 17 51.1819C17 50.5541 16.5462 50.0441 15.9878 50.0441V50.0441Z"
              fill="#2C2C2C"
            />
            <path
              d="M22.7283 126.365C19.0741 122.534 17.4827 133.968 16.0682 136.031C15.0662 140.039 12.0014 144.106 12.1782 148.114C12.8855 149.411 15.0073 149.175 15.3609 147.701C17.4827 140.629 21.8442 133.497 22.7283 126.365V126.365Z"
              fill="#2C2C2C"
            />
            <path
              d="M12.9444 147.289C11.7656 144.342 11.5888 120.059 5.87172 126.483C5.81278 133.674 8.1114 141.159 8.7008 148.409C9.40806 151.179 13.7106 150 12.9444 147.289Z"
              fill="#2C2C2C"
            />
          </svg>
        </div>
        <WithComponentPreview Code={code} Component={TwoColGridComponent} />
      </motion.div>
    </section>
  )
}

export default Hero
