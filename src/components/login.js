import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialFormValues = {
    username: '',
    password: ''
};

const StyledLoginForm = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    form{
        display:flex;
        flex-direction:column;
        width:50%;
        align-items:center;
    }
    label{
        text-transform: uppercase;
        font-weight:bold;
    }
    input{
        color:white;
        background-color:black;
        border:none;
        padding:2% 0;
        width:100%;
        text-align:center;

    }
    button{
        margin-top:5%;
        background-color:black;
        color:white;
        padding: 2%;
        width:100%;
        border:none;
        text-transform:uppercase;
        font-weight:bold;
    }
`

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
                const { token, role, username } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                localStorage.setItem('username', username);
                setFormValues(initialFormValues);
                props.history.push('/friendlist');
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <StyledLoginForm>
            <form>
                <h1>LOGIN</h1>
                <label>username</label>

                    <input
                        name='username'
                        type='text'
                        value={formValues.username}
                        onChange={handleChange}
                    />
                <label>password</label>
                    <input
                        name='password'
                        type='password'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </StyledLoginForm>
    );
};

export default Login;