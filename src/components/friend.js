import React from "react";
import styled from "styled-components";

const StyledFriend = styled.div`
    text-transform: uppercase;
    font-weight: bold;
`

const Friend = props => {
    const { friend } = props;
    return (
        <StyledFriend>
            <h3>{friend.name} - { friend.email}</h3>
        </StyledFriend>
    );
};

export default Friend;