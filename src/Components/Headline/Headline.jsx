import './Headline.scss'

export default function Headline(props) {
    return (
        <h1 className='headline' id={props.class}>
            {props.category}
        </h1>
    )
}