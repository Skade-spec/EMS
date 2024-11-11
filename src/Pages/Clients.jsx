import "/public/scss/default.scss";
import { useState } from 'react'
import Registry from "../Components/Registry/Registry";
import Years from "../Components/Years/Years";
import Table from "../Components/Table/Table";
import Headline from "../Components/Headline/Headline";

export default function Clients() {

    const [ tab, setTab ] = useState('on')

    const [ year, setYear ] = useState('2024')

    return (
        <main>
            <Headline category="Клиенты"></Headline>
            <div className="Stack">
                <div className="double">
                    <Registry active={tab} onChange={(current) => setTab(current)}></Registry>
                    <Years active={year} onChange={(current) => setYear(current)}></Years>
                </div>
                <Table></Table>
            </div>
        </main>
    )
}