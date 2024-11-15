import './Button.scss'

export default function Button({text, onClick, isActive}) {

    return (
        <button className={isActive ? 'button active' : 'button'} onClick={onClick}>
            {text}
        </button>
    )
}