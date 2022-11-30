import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "박현지",
        comment: "안녕하세요, 박현지입니다.",
    },
    {
        name: "김주영",
        comment: "안녕하세요, 김주영입니다.",
    },
    {
        name: "허준",
        comment: "안녕하세요, 허준입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;