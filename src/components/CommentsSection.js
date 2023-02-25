import React from "react";
import Comment from "./Comment";

function CommentsSection({ comments })
{
    return (
        <div>
            <h3>{comments.length} Comments</h3>
            {comments.map(comment=>
                <Comment key={comment.id} user={comment.user} comment={comment.comment} />)}
        </div>  
    )
}

export default CommentsSection;