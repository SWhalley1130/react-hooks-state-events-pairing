import React from "react";
import Button from "./Button";

function Header({title, views, createdAt, upvotes, downvotes})
{
    return (
        <div className="bottom-border header">
            <h1>{title}</h1>
            <span>{views} Views | Updated {createdAt}</span>
            <div>
                <Button>
                    <span>{upvotes} 👍</span>
                </Button>
                <Button>
                    <span>{downvotes} 👎</span>
                </Button>
            </div>
            <Button>
                    <span>Hide Comments</span>
            </Button>
        </div>
    )
}

export default Header;