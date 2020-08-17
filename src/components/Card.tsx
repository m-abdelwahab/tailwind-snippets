import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Img from "gatsby-image"

interface CardProps {
  link: string
  title: string
  image: any
  alt: string
  numOfComponents?: number
}
const Card = ({ link, title, image, numOfComponents, alt }: CardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link
        to={link}
        className="no-underline bg-white rounded-lg shadow-lg hover:shadow-raised hover:translateY-2px transition flex-1 flex flex-col overflow-hidden"
      >
        <Img
          className="bg-cover aspect-16x9"
          loading="lazy"
          fluid={image}
          alt={alt}
        />
        <div className="p-6 flex-1 flex flex-col justify-between">
          <h3 className="font-medium text-black text-lg mb-4">{title}</h3>
          {numOfComponents && (
            <span className="text-gray-700">{numOfComponents} variations</span>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

export default Card
