import "./button.css"

export default function Button({children, color}:{ children?: React.ReactNode} ){

    return <button className={`button ${color}`}>{children}</button>
} 