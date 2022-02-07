import React, { useState } from 'react';
import up from '../../images/up.png'
import down from '../../images/down.png'
import { StyledComment } from '../styles/CommentsStyles';

const CommentCard = ({name, comment}) => {
  const[voteUp, setVoteUp] = useState(0)
  const[voteDown, setVoteDown] = useState(0)
  return <StyledComment>
    <div>
      <h4>{name}</h4>
      <p>{comment}</p>
    </div>
      <section> 
        <button onClick={()=>{setVoteUp(voteUp +1)}}><img src={up}></img></button>
        <p style={{color:'green'}}>{voteUp}</p>
        <button onClick={()=>{setVoteDown(voteDown +1)}}><img src={down}></img></button>
        <p style={{color:'red'}}>{voteDown}</p>
      </section>
      </StyledComment>;
};

export default CommentCard;
