import React from "react";
import Button from "./Button";

function Header({title, views, createdAt, upvotes, downvotes, handleClick, isHidden})
{
    return (
        <div className="bottom-border header">
            <h1>{title}</h1>
            <span>{views} Views | Updated {createdAt}</span>
            <div>
                <Button id='upvotes' handleClick={() => handleClick('upvote')}>
                    {upvotes} 👍
                </Button>
                <Button id={'downvotes'} handleClick={() => handleClick('downvote')}>
                    {downvotes} 👎
                </Button>
            </div>
            <Button id={'comments'} handleClick={handleClick}>
                    {isHidden ? "Show Comments" : "Hide Comments"}
            </Button>
        </div>
    )
}

export default Header;