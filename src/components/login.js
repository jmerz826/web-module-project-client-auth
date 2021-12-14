import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const initialFormValues = {
    username: '',
    password: ''
};

const Login = props => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', formValues)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div>
            <form>
                <h1>LOGIN</h1>
                <label>username
                    <input
                        name='username'
                        type='text'
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </label>
                <label>password
                    <input
                        name='password'
                        type='password'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Login;