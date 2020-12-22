import React, {useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Search = () => {
    const { show } = useContext(AlertContext)

    const onSubmit = (e) => {
        if (e.key === 'Enter') {
            show('Alert')
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter user name"
                onKeyPress={onSubmit}
            />
            
        </div>
    )
}

export default Search