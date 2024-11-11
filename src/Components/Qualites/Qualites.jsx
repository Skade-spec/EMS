import './Qualites.scss'

export default function Qualites(props) {
    return (
        <span className="qualites">
            <img src={props.icon} />
            <p>{props.text}</p>
        </span>
    )
}