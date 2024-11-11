import "/public/scss/default.scss";
import Button from "../Button/Button";
import './Registry.scss'

export default function Registry({active, onChange}) {

    return (
        <div className="double">
            <h1 className="text">Реестры организаций</h1>
            <Button text='Сертифицированные' isActive={active === 'on'} onClick={() => onChange('on')}></Button>
            <Button text='Отмененные' isActive={active === 'off'} onClick={() => onChange('off')}></Button>
        </div>
    )
}