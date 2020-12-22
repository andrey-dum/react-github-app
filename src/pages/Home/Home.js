import React from 'react'
import Card from '../../components/Card/Card'
import Search from '../../components/Search/Search'

export default function Home() {
    const cards = new Array(6)
        .fill('')
        .map((_, i) => i)

    return (
        <>
            <Search />
            <div className="row">
                { cards.map(card => (
                    <div className="col-sm-4 mb-4" key={card}>
                        <Card />
                    </div>
                )) }
                
            </div>
        </>
    )
}
