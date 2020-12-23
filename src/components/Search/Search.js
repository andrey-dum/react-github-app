import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Search = () => {
    const { show } = useContext(AlertContext)
    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        if (e.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            console.log(value);
            setValue('')
        } else {
            show('Введите поисковый запрос!', 'danger')
        }
        
    }

    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter user name"
                onKeyPress={onSubmit}
                value={value}
                onChange={changeHandler}
            />
            
        </div>
    )
}

export default Search