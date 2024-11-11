import Button from "../Button/Button";
import "/public/scss/default.scss";

export default function TabsSection({active, onChange}) {
    return (
        <div className="Stack">
            <Button text='Business Excellence' isActive={active === 'business'} onClick={() => onChange('business')}></Button>
            <Button text='Деловой Мир' isActive={active === 'world'} onClick={() => onChange('world')}></Button>
            <Button text='Новости Госстандарта' isActive={active === 'news'} onClick={() => onChange('news')}></Button>
            <Button text='Мир качества' isActive={active === 'qualities'} onClick={() => onChange('qualities')}></Button>
        </div>
    )
}