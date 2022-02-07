import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup'
import CommentCard from './CommentCard';

export const CommentForm = ({gameTitle}) => {
  
  const [listaComments, setListaComments] = useState([])
  const [comments, setComents] = useState({})
  const formik = useFormik({
    initialValues:{
          name:"",
          email:"",
          gameComment:"",
        },
    validationSchema:Yup.object({
        name: Yup.string().required("Digite um nome"),
        email: Yup.string().required("Digite um email").email("E-mail inválido"),
        gameComment: Yup.string().required("Digite um comentário")

    }),
    onSubmit:({name,gameComment})=>{
      const date = new Date
      const id = date.toString()
      const novaLista = [...listaComments, {id,name, gameComment}]
      setListaComments(novaLista)
      setComents({...comments, [gameTitle]:novaLista})
      

      
    }
  
  }) 
 
 useEffect(()=>{
   
   if(localStorage.getItem("comments")=== null ||localStorage.getItem("comments")=== 'undefined' ){
     localStorage.setItem("comments", JSON.stringify({}))
   }else{
    
     setComents(JSON.parse(localStorage.getItem("comments")))
    
   }
     
   }
  ,[])

  useEffect(()=>{
    localStorage.setItem("comments", JSON.stringify(comments))
    
  },[comments])
  
 
 
 

  return <><form onSubmit={formik.handleSubmit}>
      <input id='name' name='name' type='text' placeholder='nome' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
      {formik.touched.name &&formik.errors.name ? <p>{formik.errors.name}</p>:null}
      <input id='email' name='email' type='text' placeholder='e-mail' onBlur={formik.handleBlur} onChange={formik.handleChange}  value={formik.values.email} />
      {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p>:null}
      <textarea style={{width:'400px', display:'block'}} id='comment' name='gameComment' type='text' placeholder='comentário' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.gameComment} />
      {formik.touched.gameComment && formik.errors.gameComment ? <p>{formik.errors.gameComment}</p>:null}
      <button type='submit' >Enviar comentário</button>
      
  </form>
  <div >{
    listaComments.map((comment)=>{
      return <CommentCard key={comment.id} name={comment.name} comment={comment.gameComment}/>
        
    })
    }</div>
  </>
  
  ;
};

;
