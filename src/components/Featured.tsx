import React, { useEffect } from "react"
import Card from "./Card"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"
import { v4 as uuidv4 } from "uuid"

interface FeaturedProps {
  title: string
  data: any
  link: string
}
const Featured = ({ title, data, link }: FeaturedProps) => {
  const animation = useAnimation()

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "50px 0px",
  })
  // Awesome answer https://stackoverflow.com/questions/59953580/framer-check-if-element-is-into-viewport
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    } else {
      animation.start("hidden")
    }
  }, [animation, inView])

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="h-auto container lg:max-w-screen-lg mx-auto px-6 py-10">
      <div className="mb-8">
        <div className="flex items-baseline justify-between border-b-2 border-grey-light mb-10">
          <h2 className="text-base font-display font-bold tracking-wide uppercase py-4 border-b-2 border-blue-500 -mb-2px">
            {title}
          </h2>
          <Link
            to={link}
            className="font-semibold text-blue-500 hover:underline no-underline"
          >
            View All
          </Link>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={animation}
          className="flex flex-wrap -mx-3"
        >
          {data.map(card => {
            return (
              <motion.div
                key={uuidv4()}
                variants={item}
                className="w-full md:w-1/2 lg:w-1/3 px-3 flex flex-col mb-8"
              >
                <Card
                  image={card.image.src.childImageSharp.fluid}
                  alt={card.image.alt}
                  title={card.title}
                  link={card.link}
                  numOfComponents={card.numOfComponents}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Featured
