import React from "react"
import { LiveProvider, LiveEditor } from "react-live"
import theme from "prism-react-renderer/themes/nightOwl"
import { Resizable } from "re-resizable"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Frame from "react-frame-component"
import { CopyButton } from "./index"

interface WithComponentPreviewProps {
  Code: string
  Component: React.ReactNode
}

const WithComponentPreview = ({
  Code,
  Component,
}: WithComponentPreviewProps) => {
  return (
    <div className="my-32 container mx-auto">
      <LiveProvider code={Code}>
        <Tabs className="max-w-5xl mx-auto">
          <div className="flex items-end justify-end">
            <TabList>
              <Tab>Preview</Tab>
              <Tab>Code</Tab>
            </TabList>
            <CopyButton text={Code} />
          </div>
          <TabPanel className="bg-gray-300">
            <Resizable
              handleStyles={{
                right: {
                  backgroundColor: "#4a5668",
                  borderRadius: "10px",
                },
              }}
              className="border-gray-400 border-solid border-2"
              defaultSize={{
                width: "100%",
                height: 720,
              }}
              minWidth={300}
              maxWidth={1024}
              maxHeight={720}
            >
              <Frame
                className="w-full h-full"
                head={
                  <link
                    href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
                    rel="stylesheet"
                  />
                }
              >
                <Component />
              </Frame>
            </Resizable>
          </TabPanel>
          <TabPanel>
            <LiveEditor disabled={true} className="mb-2" theme={theme} />
          </TabPanel>
        </Tabs>
      </LiveProvider>
    </div>
  )
}

export default WithComponentPreview
