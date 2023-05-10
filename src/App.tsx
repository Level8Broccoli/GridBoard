import { useState } from "react"
import { Cell } from "./Cell"

function App() {
  const [height, setHeight] = useState(4)
  const [width, setWidth] = useState(8)


  return (
    <>
      <main>
        <div className="x-grid" style={{
          "--columns": `${width}`
        } as any}>
          {[...Array(height * width).keys()].map((i) => {
            return <div key={i}><Cell /></div>
          })}
        </div>
        <div className="right">
          <button className="secondary" onClick={
            () => setWidth(Math.max(width + 1, 0))
          }>Add</button>
          {width}
          <button className="secondary" onClick={
            () => setWidth(Math.max(width - 1, 0))
          }>Remove</button>
        </div>
        <div className="bottom">
          <button className="secondary" onClick={
            () => setHeight(Math.max(height + 1, 0))
          }>Add</button>
          {height}
          <button className="secondary" onClick={
            () => setHeight(Math.max(height - 1, 0))
          }>Remove</button>
        </div>
      </main>
    </>
  )
}

export default App
