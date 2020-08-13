import React from "react"
import { WithComponentPreview } from "../../components"
import { Layout } from "../../components/layout"

const Avatar = () => {
  return (
    <Layout>
      <WithComponentPreview Code={code} Component={AvatarComponent} />
    </Layout>
  )
}

const AvatarComponent = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <img
        className=" w-32 h-32 rounded-full bg-white shadow"
        alt="person logo"
        src="https://img.icons8.com/pastel-glyph/256/000000/person-male.png"
      />
    </div>
  )
}
const code = `
<img src="" alt="" className="w-64 h-64 rounded-full shadow-sm"/>
`

export default Avatar
