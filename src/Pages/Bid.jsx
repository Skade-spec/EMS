import "/public/scss/default.scss";
import Input from "../Components/Input/Input";
import Radio from "../Components/Radio/Radio";
import Button from "../Components/Button/Button";
import Headline from "../Components/Headline/Headline";

export default function Bid() {
    return (
        <main>
            <Headline category="Онлайн заявка"></Headline>
            <div className="StackV">
                <h1 className="text">
                    ЗАЯВКА НА ПРОВЕДЕНИЕ СЕРТИФИКАЦИОННОГО АУДИТА СИСТЕМ МЕНЕДЖМЕНТА В СИСТЕМЕ ТЕХНИЧЕСКОГО РЕГУЛИРОВАНИЯ РЕСПУБЛИКИ КАЗАХСТАН
                </h1>
                <Input title="Просим провести сертификационный аудит систем менеджмента на соответствие требованиям *" description=""></Input>    
                <h1 className="text">При этом заявляем:</h1>
                <h1 className="number">1. ДАННЫЕ ОРГАНИЗАЦИИ</h1>
                <Input title="Полное наименование: *" description=""></Input>
                <Input title="Юридический адрес: *" description=""></Input>    
                <Input title="Фактический адрес: *" description=""></Input>    
                <Input type="tel" title="Телефон: *" description=""></Input>    
                <Input title="Факс: *" description=""></Input>    
                <Input type="email" title="E-mail: *" description=""></Input>    
                <Input title="Рабочее время, обеденный перерыв" description=""></Input> 
                <h1 className="number">Банковские реквизиты</h1>
                <Input title="БИК" description=""></Input>    
                <Input title="Банк" description=""></Input>
                <Input title="ИИК" description=""></Input>    
                <Input title="БИН" description=""></Input>  
                <Input title="Организация входит в состав предприятия" description=""></Input>
                <Input title="Организация имеет в своем составе предприятия" description=""></Input>
                <Input type="number" title="Численность персонала (АУП, ИТР)" description=""></Input>    
                <Input title="ФИО первого руководителя (полностью)" description=""></Input>    
                <Input title="Должность первого руководителя" description=""></Input>    
                <Input title="ФИО ответственного по системе менеджмента (полностью)" description=""></Input>    
                <Input title="Должность, ответственного по системе менеджмента" description=""></Input>    
                <Input title="ФИО лица, назначенного для контакта (полностью)" description=""></Input>    
                <Input title="Должность назначенного для контакта, сотовый номер, рабочий телефон (внутренний номер), факс" description=""></Input>    
                <h1 className="number">2. ДАННЫЕ О СИСТЕМЕ/CИСТЕМАХ МЕНЕДЖМЕНТА</h1>
                <Input type="date" title="Укажите дату внедрения системы менеджмента" description=""></Input>
                <Radio title="Система/системы внедрена(ы) с использованием консультативных услуг" for="one" for2="two" name="1"></Radio>
                <Input title="Виды продукции/услуг, выпуск которых охвачены системным менеджментом" description="область деятельности"></Input>
                <Input title="В течение последних 3-х лет была оценена/сертифицирована:" description="наименование органа по подтверждению соответствия / дата выдачи и номер сертификата"></Input>
                <h1 className="number">3. ГОТОВНОСТЬ ОРГАНИЗАЦИИ</h1>
                <Input title="" description=""></Input>
                <Radio title="Проведен анализ системы менеджмента со стороны руководства" for="three" for2="four" name="2"></Radio>
                <Radio title="Проведены внутренние проверки подразделений Организации" for="five" for2="six" name="3"></Radio>
                <Input type="date" title="Предлагаемые сроки проведения сертификационного аудита" description=""></Input>
                <Input title="Государственная лицензия (если имеется), организационная структура Организации, Политика и Цели в области системы менеджмента, документированную информационную – процедуры, которые разработаны в Вашей организации для функционирования системного менеджмент" description="укажите, срок отправки документов в ОПС"></Input>    
                <h1 className="number">4. ОРГАНИЗАЦИЯ ОБЯЗУЕТСЯ ВЫПОЛНЯТЬ ПРАВИЛА И УСЛОВИЯ СЕРТИФИКАЦИИ В СИСТЕМЕ ТЕХНИЧЕСКОГО РЕГУЛИРОВАНИЯ РЕСПУБЛИКИ КАЗАХСТАН.</h1>
                <Button text='Отправить'></Button>
            </div>
        </main>
    )
}