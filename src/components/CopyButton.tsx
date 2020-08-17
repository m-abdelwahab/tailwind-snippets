import React from "react"
import { useClipboard } from "use-clipboard-copy"

interface CopyButtonProps {
  text: string
}
const CopyButton = ({ text }: CopyButtonProps) => {
  const clipboard = useClipboard({
    copiedTimeout: 600, // timeout duration in ms
  })
  return (
    <button
      onClick={() => clipboard.copy(text)}
      className="mb-1  bg-blue-500 text-white rounded py-2 px-6 ml-5"
    >
      {clipboard.copied ? (
        <p className="text-sm">copied!</p>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      )}
    </button>
  )
}

export default CopyButton
