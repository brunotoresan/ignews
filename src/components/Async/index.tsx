import { useEffect, useState } from "react"

export function Async() {
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [isButtonInvisible, setIsButtonInvisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsButtonVisible(true)
      setIsButtonInvisible(false)
    }, 1000)
  })

  return (
    <div>
      <div>Hello World</div>
      { isButtonVisible && <button>Button</button> }
      { isButtonInvisible && <button>Invisible</button> }
    </div>
  )
}