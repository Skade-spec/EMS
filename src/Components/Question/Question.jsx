import './Question.scss'

export default function Question(params) {
    return (
        <div className="question">
            {params.text}
        </div>
    )
}