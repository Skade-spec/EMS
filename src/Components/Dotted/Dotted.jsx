import './Dotted.scss'

export default function Dotted(props) {
    return (
        <div className="dotted">
            <div className="dot"></div>
            <p>{props.text}</p>
        </div>
    )
}