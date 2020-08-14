import React from "react"
import "../styles/buy-me-coffee.css"
import { Layout } from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="about" />

      <article className="h-screen mx-12 md:mx-auto mt-40 prose lg:prose-xl mb-16">
        <h1>About This project</h1>
        <p>
          The reason I created this project was because I really like using a
          utility-first CSS framework. It allowed me to be super productive and
          to be enjoy writing CSS.
        </p>
        <p>
          As a developer, I really love re-usability. I don't want to waste my
          time building the same design over and over again. I prefer to learn
          new things and allocate my time and energy to more complex tasks
        </p>
        <p>
          I'm pretty sure this project will be beneficial to all Front-end
          Developers who love using Tailwind. If this project saved you some
          time, consider donating
        </p>

        <a
          className="bmc-button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.buymeacoffee.com/thisismahmoud"
        >
          <span role="img" aria-label="book" className="ml-1 text-md">
            📖 Buy me a Book
          </span>
        </a>
      </article>
    </Layout>
  )
}

export default About
