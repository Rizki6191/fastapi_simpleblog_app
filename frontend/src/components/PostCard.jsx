import React from "react";
import { Card } from "react-bootstrap";

const PostCard = ({ post }) => {
    const { id, title, content } = post;

    return (
        <Card>
            <Card.Body>
                <Card className="bg-white shadow-lg rounded-xl p-6 mb-4 border border-gray-100">
                    <Card.Body>
                        <Card.Title><b>Title: {title}</b></Card.Title>
                        <Card.Text>Content: {content}</Card.Text>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    );
}

export default PostCard;