import { useState } from "react"

export function Cell() {
    const [active, setActive] = useState(false)
    return <button className={active ? "contrast" : ""} onClick={() => setActive(!active)}></button>
}