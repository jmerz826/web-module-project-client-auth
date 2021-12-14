import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = props => {
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth().post('/api/logout').then(res => {
            localStorage.removeItem('token');
            push('/login');
        });
    }, []);

    return (<div></div>)
};


export default Logout;
