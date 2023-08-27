import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);
  const [PushComment, setPushComment] = useState("");
  const Addcomment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://chitra-sh7b.onrender.com/api/comments/${videoId}`,
        {
          desc: PushComment,
          videoId,
        }
      );
      const newComment = res.data;
      setPushComment("");
      setComments([...comments, newComment]);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (PushComment === "") {
      document.getElementById("comment").value = "";
    }
  }, [PushComment]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

  //TODO: ADD NEW COMMENT FUNCTIONALITY

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?.img} />
        <Input
          id="comment"
          placeholder="Add a comment..."
          onChange={(e) => setPushComment(e.target.value)}
        />
        <Button onClick={Addcomment}>Add</Button>
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;
