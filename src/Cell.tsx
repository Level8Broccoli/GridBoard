export function Cell(props: { isActive: boolean, toggleTo: (to: boolean) => void, coord: string }) {
    return <button className={props.isActive ? "contrast" : ""} onClick={() => props.toggleTo(!props.isActive)}>
        {props.coord}
    </button>
}