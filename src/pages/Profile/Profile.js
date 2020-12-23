import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Repos } from '../../components/Repos/Repos'
import { GithubContext } from '../../context/github/githubContext'

export default function Profile({match}) {
    const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
    const urlName = match.params.name

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text-center">LOADING...</p>
    }
    const {
        name, company, avatar_url,
        location, bio, blog, login, 
        html_url, followers,
        public_repos, public_gists,
        following
    } = user

    return (
        <div className="Profile">
            <Link to="/" className="btn btn-link">Home</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <img 
                                src={avatar_url} 
                                alt={name}
                                // style={{maxWidth: '200px'}}
                                 />
                                <h1>{name}</h1>
                                {location && <p>Location: {location}</p>}
                        </div>

                        <div className="col">
                            {
                                bio && <>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <a 
                                href={html_url} 
                                className="btn btn-dark"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Open Profile
                                </a>
                            <ul>
                                { login && <li>
                                    <b>Username: </b> {login}
                                </li> }
                                { company && <li>
                                    <b>Company: </b> {company}
                                </li> }
                                { blog && <li>
                                    <b>Website: </b> {blog}
                                </li> }
                            </ul>

                            <div className="badge badge-primary">Followers: {followers}</div>
                            <div className="badge badge-success">Following: {following}</div>
                            <div className="badge badge-info">Repositores: {public_repos}</div>
                            <div className="badge badge-dark">Gists: {public_gists}</div>

                        </div>
                   </div>
                            
                </div>
            </div>
            <Repos repos={repos} />
        </div>
    )
}
