import React from "react";
import Button from "./Button";

function Header({title, views, createdAt, upvotes, downvotes, handleClick})
{
    return (
        <div className="bottom-border header">
            <h1>{title}</h1>
            <span>{views} Views | Updated {createdAt}</span>
            <div>
                <Button id='upvotes' handleClick={handleClick}>
                    {upvotes} 👍
                </Button>
                <Button id={'downvotes'} handleClick={handleClick}>
                    {downvotes} 👎
                </Button>
            </div>
            <Button id={'comments'} handleClick={handleClick}>
                    Hide Comments
            </Button>
        </div>
    )
}

export default Header;