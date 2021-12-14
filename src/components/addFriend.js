import axios from "axios";
import React, {useState} from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialFormValues = {
    name: '',
    email: ''
};

const AddFriend = props => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFriend = {
            name: formValues.name,
            email: formValues.email
        };
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>ADD FRIEND</h1>
            <form>
                <label>Friend Name</label>
                <input
                    name='name'
                    type='text'
                    value={formValues.name}
                    onChange={handleChange}
                />
                <label>Friend Email</label>
                <input
                    name='email'
                    type='email'
                    value={formValues.email}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default AddFriend;