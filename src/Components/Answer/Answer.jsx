import './Answer.scss'

export default function Answer(params) {
    return (
        <div className="answer">
            {params.text}
        </div>
    )
}