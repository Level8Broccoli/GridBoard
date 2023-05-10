import { useEffect, useState } from "react"
import { Cell } from "./Cell"

type BoardState = {
  [coord: string]: boolean
}

function App() {
  const [height, setHeight] = useState(1)
  const [width, setWidth] = useState(2)
  const [state, setState] = useState<BoardState>({})

  useEffect(() => {
    const newState: BoardState = {}
    for (let i = 1; i <= height; i++) {
      for (let j = 1; j <= width; j++) {
        const coord = `${i}-${j}`;
        const existing: boolean | undefined = state[coord]
        if (existing === undefined) {
          newState[coord] = false
        } else {
          newState[coord] = existing
        }
      }
    }
    console.log(newState, "useEffect");

    setState(newState)

  }, [width, height])

  const toggler = (coord: string) => (to: boolean) => {
    setState(prev => {
      const newState = { ...prev }
      newState[coord] = to;
      console.log(newState, "toggler");

      return newState
    })
  }

  return (
    <>
      <main>
        <div className="x-grid" style={{
          "--columns": `${width}`
        } as any}>
          {[...Array(height).keys()].map((i) => {
            {
              return [...Array(width).keys()].map((j) => {
                const coord = `${i + 1}-${j + 1}`;
                return <div key={coord}>
                  <Cell isActive={state[coord]} toggleTo={toggler(coord)} coord={coord} />
                </div>
              })
            }
          })}
        </div>
        <div className="right">
          <button className="secondary" onClick={
            () => setWidth(Math.max(width + 1, 1))
          }>Add</button>
          {width}
          <button className="secondary" onClick={
            () => setWidth(Math.max(width - 1, 1))
          }>Remove</button>
        </div>
        <div className="bottom">
          <button className="secondary" onClick={
            () => setHeight(Math.max(height + 1, 1))
          }>Add</button>
          {height}
          <button className="secondary" onClick={
            () => setHeight(Math.max(height - 1, 1))
          }>Remove</button>
        </div>
      </main>
    </>
  )
}

export default App
