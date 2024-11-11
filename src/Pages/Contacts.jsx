import "/public/scss/default.scss";
import Headline from "../Components/Headline/Headline";
import Bubble from "../Components/Bubble/Bubble";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";


export default function Contacts() {
    return (
        <main>
            <Headline category="Контакты"></Headline>
            <div className="Stack">
            
                <div className="double">
                    <h1 className="text">Контакты</h1>
                    <Bubble title="Наш адрес:" description="г. Алматы, ул. Радостовца 152/4, кв. 4А, 050060 Республика Казахстан"></Bubble>
                    <div className="inline">
                        <Bubble title="E-mail:" description="ems@ems.kz" class="full"></Bubble>
                        <Bubble title="График работы:" description="Пн - Пт: 9:00 - 19:00, Сб, Вс: Выходной"></Bubble>
                    </div>
                    <Bubble title="Телефоны:" description={`+7|727|275-34-48, +7|727|274-74-74, +7|727|274-23-90, +7|701|761-98-12`}></Bubble>
                </div>
                <div className="double">
                    <Input title="Имя" description="Ваше имя..." type="text"></Input>
                    <Input title="Email" description="Ваше почта..." type="email"></Input>
                    <Input title="Сообщение" description="Ваше сообщение..." type="textbox" id="big"></Input>
                    <Button text="Отправить" isActive="button active"></Button>
                </div>
            </div>
        </main>
    )
}