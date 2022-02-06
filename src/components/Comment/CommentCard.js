import React, { useState } from 'react';
import up from '../../images/up.png'
import down from '../../images/down.png'

const CommentCard = ({name, comment}) => {
  const[voteUp, setVoteUp] = useState(0)
  const[voteDown, setVoteDown] = useState(0)
  return <il>
      <h4>{name}</h4>
      <p>{comment}</p>
      <p>funcionu</p>
      <section> 
        <button onClick={()=>{setVoteUp(voteUp +1)}}><img src={up}></img></button>
        <p>{voteUp}</p>
        <button onClick={()=>{setVoteDown(voteDown +1)}}><img src={down}></img></button>
        <p>{voteDown}</p>
      </section>
  </il>;
};

export default CommentCard;
