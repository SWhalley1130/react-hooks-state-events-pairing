import userEvent from "@testing-library/user-event";
import React from "react";

function Comment({user, comment})
{
    return (
        <>
            <h4>{user}</h4>
            <p>{comment}</p>
        </>
    )
}

export default Comment;