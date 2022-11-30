import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        heught: 50,
        borderRadius: 25,
    },
    ContentContainer: {
        margin: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commenttext: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                    alt="니컴 구림"
                />
            </div>
            
            <div style={styles.ContentContainer}>
                <span style={styles.nameText}>
                {props.name}
                </span>
                <span style={styles.commenttext}>
                {props.comment}    
                </span>
            </div>
        </div>
    );
}

export default Comment;