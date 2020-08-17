import React from "react"
import { WithComponentPreview } from "../../components"

const TwoColGrid = () => (
  <WithComponentPreview Code={code} Component={TwoColGridComponent} />
)

export default TwoColGrid

export const TwoColGridComponent = () => {
  return (
    <div className="bg-white h-screen max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
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

export const code = `
<div class="bg-white max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
  <div class="mt-6 pt-10">
    <div class="mx-auto md:grid md:grid-cols-2 md:gap-8">
      <div>
        <div class="rounded bg-gray-800 h-10 w-full "></div>
        <div class="rounded bg-gray-800 h-10 w-full mt-12"></div>
        <div class="rounded bg-gray-800 h-10 w-full mt-12"></div>
      </div>

      <div class="mt-12 sm:mt-0">
        <div class="rounded bg-gray-800 h-10 w-full"></div>
        <div class="rounded bg-gray-800 h-10 w-full mt-12"></div>
        <div class="rounded bg-gray-800 h-10 w-full mt-12"></div>
      </div>
    </div>
  </div>
</div>
`
