import axios from "axios";
import React from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./friend";

class FriendList extends React.Component {
    state = {
        friends: []
    }
    componentDidMount() {
        const token = localStorage.getItem('token');

        axiosWithAuth()
            .get("/api/friends")
            .then((res) => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        return (
            <div>
                <h1>Friends:</h1>
                {this.state.friends.map(el => {
                    return (
                        <Friend friend={el} key={el.id}/>
                    )
                })}
            </div>
        );
    }
};

export default FriendList;