import React from "react"
import { WithComponentPreview } from "../../components"
import { Layout } from "../../components/layout"

const TwoColGrid = () => {
  return (
    <Layout>
      <WithComponentPreview Code={code} Component={TwoColGridComponent} />
    </Layout>
  )
}

export default TwoColGrid

const TwoColGridComponent = () => {
  return (
    <div className="bg-white max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="mt-6 pt-10">
        <div className="mx-auto md:grid md:grid-cols-2 md:gap-8">
          <div>
            <div className="rounded bg-gray-800 h-10 w-full "></div>
            <div className="rounded bg-gray-800 h-10 w-full mt-12"></div>
            <div className="rounded bg-gray-800 h-10 w-full mt-12"></div>
          </div>

          <div className="mt-12 sm:mt-0">
            <div className="rounded bg-gray-800 h-10 w-full"></div>
            <div className="rounded bg-gray-800 h-10 w-full mt-12"></div>
            <div className="rounded bg-gray-800 h-10 w-full mt-12"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const code = `
<div className="bg-white max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
  <div className="mt-6 pt-10">
    <div className="mx-auto md:grid md:grid-cols-2 md:gap-8">
      <div>
        <div className="rounded bg-gray-800 h-10 w-full "></div>
        <div className="rounded bg-gray-800 h-10 w-full mt-12"></div>
        <div className="rounded bg-gray-800 h-10 w-full mt-12"></div>
      </div>

      <div className="mt-12 sm:mt-0">
        <div className="rounded bg-gray-800 h-10 w-full"></div>
        <div className="rounded bg-gray-800 h-10 w-full mt-12"></div>
        <div className="rounded bg-gray-800 h-10 w-full mt-12"></div>
      </div>
    </div>
  </div>
</div>
`
