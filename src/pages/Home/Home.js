import React, {useContext} from 'react'
import Card from '../../components/Card/Card'
import Search from '../../components/Search/Search'
import { GithubContext } from '../../context/github/githubContext'

export default function Home() {
    const {loading, users} = useContext(GithubContext)

    return (
        <>
            <Search />
            <div className="row">
                { loading
                    ? <p className="text-center">LOADING...</p>
                    : (
                        users.map(user => (
                            <div className="col-sm-4 mb-4" key={user.id}>
                                <Card user={user} />
                            </div>
                        ))
                    )
                }
            </div>
        </>
    )
}
