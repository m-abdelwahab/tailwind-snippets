import React from "react"
import { WithComponentPreview } from "../../components"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const Button = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <div>
      <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
      <WithComponentPreview Code={code} Component={ButtonComponent} />
    </div>
  )
}

const ButtonComponent = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <button className="rounded py-2 px-6 bg-blue-500 text-white hover:bg-blue-400">
        Button
      </button>
    </div>
  )
}
const code = `
<button class="rounded py-2 px-6 bg-blue-500 text-white hover:bg-blue-400">Button</button>
`

export default Button
