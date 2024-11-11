import "/public/scss/default.scss";
import Button from "../Button/Button";

export default function Years({active, onChange}) {
    return (
        <>
        <h1 className="text">Год выдачи</h1>
        <span className="inline">
            <div className="double">
                <Button text='2024' isActive={active === '2024'} onClick={() => onChange('2024')}></Button>
                <Button text='2021' isActive={active === '2021'} onClick={() => onChange('2021')}></Button>
            </div>
            <div className="double">
                <Button text='2023' isActive={active === '2023'} onClick={() => onChange('2023')}></Button>
                <Button text='2020' isActive={active === '2020'} onClick={() => onChange('2020')}></Button>
            </div>
            <div className="double">
                <Button text='2022' isActive={active === '2022'} onClick={() => onChange('2022')}></Button>
                <Button text='2019' isActive={active === '2019'} onClick={() => onChange('2019')}></Button>
            </div>
        </span>
        <span className="inline">
            <div className="double">
                <Button text='2018' isActive={active === '2018'} onClick={() => onChange('2018')}></Button>
                <Button text='2015' isActive={active === '2015'} onClick={() => onChange('2015')}></Button>
            </div>
            <div className="double">
                <Button text='2017' isActive={active === '2017'} onClick={() => onChange('2017')}></Button>
                <Button text='2014' isActive={active === '2014'} onClick={() => onChange('2014')}></Button>
            </div>
            <div className="double">
                <Button text='2016' isActive={active === '2016'} onClick={() => onChange('2016')}></Button>
                <Button text='2013' isActive={active === '2013'} onClick={() => onChange('2013')}></Button>
            </div>
        </span>
        </>
    )
}