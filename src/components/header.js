import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-around;

    nav{
       display:flex;
       width:50%;
       justify-content:space-between;
    }

    nav a{
        text-decoration: none;
        background-color:black;
        color:white;
        padding:2%;
    }

`

const Header = props => {
    return (
        <StyledHeader>
            <h2>Friends Database</h2>
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/friendlist'>friendlist</Link>
                <Link to='/addfriend'>addfriend</Link>
                <Link to='/logout'>Logout</Link>
            </nav>
        </StyledHeader>
    );
};

export default Header;