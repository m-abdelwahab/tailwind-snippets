import React from "react"
import { Footer, Navbar, GitHubRibbon, TailwindUIBanner } from "./index"
import { motion } from "framer-motion"

const duration = 0.6

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}
interface LayoutProps {
  children: React.ReactNode
  location: any
}
const Layout = ({ children, location }: LayoutProps) => {
  return (
    <div className=" flex flex-col">
      <GitHubRibbon />
      <Navbar />
      <motion.main
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.main>
      <TailwindUIBanner />
      <Footer />
    </div>
  )
}

export default Layout
