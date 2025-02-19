import React, { useState } from "react";
import TodoInput from "./TodoInput";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ListGroupItem} from "react-bootstrap";
import { ListGroup,InputGroup,FormControl,Form} from "react-bootstrap";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import '../css/list.css'
import AlertText from "./Alert";


const TodoList = ({setList,filter,list,setFilter, toogleComplete,toogleDelete,changeList }) =>{

const [editIndex,setEditIndex] = useState(null)
const [editValue,setEditValue] = useState('')
const [loading,setLoading] = useState(false)


const filteredList = list.filter((item)=>{

  if(filter == 'All') return true 
  if(filter == 'Done') return  item.completed
  if(filter == "Todo") return !item.completed

  return true
})


const deleteAll = () =>{

 if( list.length  > 0 ){

   setLoading(true) 
   setList([])  
   setLoading(false) 

 
 }


return 



}

const handleEdit  = (index,currentText) =>{

    setEditIndex(index)
    setEditValue(currentText)
}


const handleUpdate  = (index) =>{
  let  arr = [list.map(item=>item.text)]
    if (editValue.trim() === "" ) {
        alert("Il testo non può essere vuoto!");
        return;
      }

     if (arr[0].includes(editValue)){
      alert(`" task ${editValue} " già presente`)
      return 
    }
    changeList(index,editValue)
    setEditIndex(null)
    setEditValue('')
}
    return (
 
      <>
      <h1 className="mt-4">TodoList</h1>
      <Container>
     <Row>
  <Col  md={4}><Button  style={{width:'100%'}}  variant={filter === "All" ? "primary" : "outline-primary"}onClick={() => setFilter("All")}>All</Button></Col>
  <Col md={4}><Button   variant={filter === "Done" ? "primary" : "outline-primary"} style={{width:'100%'}} onClick={() => setFilter("Done")}>Done</Button></Col>
   <Col md={4}><Button   style={{width:'100%'}}  variant={filter === "Todo" ? "primary" : "outline-primary"} onClick={() => setFilter("Todo")}>Todo</Button></Col>
     </Row>
      
      </Container>
      <div className="container container-list mt-5">
        {!list.length ==0 && !filteredList.length ==0   ?
      <ListGroup >
       
        {filteredList.map((item, index) => (
          <div
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              cursor: "pointer", color:'red'
            }}
            key={index}
          >
            <ListGroupItem   style={{width:'100% !important',padding:'16px'}}>
              {editIndex === index ? (
                <>
                  <InputGroup
                   
                  >
                    <Form.Control  className="mb-2" type="text"
                   placeholder={editValue}
                    onChange={(e) => setEditValue(e.target.value)} />


                 
                  </InputGroup>
                  <Button  style={{marginRight:'10px'}}variant="success" onClick={() => handleUpdate(index)}>Salva</Button>
                  <Button  variant="danger"onClick={() => setEditIndex(null)}>Annulla</Button>
                </>
              ) : (
                <>
                <Row>
           <Col  sm={12} style={{textAlign:'left'}} md={7}><p style={{fontSize:'1.2rem',color: item.completed ? 'red' : 'black'}}>{item.text}</p></Col> 
           
               <Col  id='icons' sm={12} md={5} style={{paddingRight:'40px !important',textAlign:'right !important'}}>  <CheckBoxIcon
                    onClick={() => toogleComplete(index)}
                    style={{ marginLeft: "10px", cursor: "pointer",title:'done',color:'green' }}
                  >
                    Done
                  </CheckBoxIcon>
                  <CreateIcon
                    onClick={() => handleEdit(index, item.text)}
                    style={{ marginLeft: "10px", cursor: "pointer",color:'#FFC200' }}
                  >
                    Modifica
                  </CreateIcon>
                  <DeleteIcon
                    onClick={() => toogleDelete(index)}
                    style={{ marginLeft: "10px", cursor: "pointer",color:'#DC3444'}}
                  >
                    Elimina
                  </DeleteIcon>
                  </Col> 
                  </Row>
                </>
              )}
            </ListGroupItem>
          </div>
        ))}
        </ListGroup> :<p>Niente da vedere qui..</p> }
       
        
      </div>
      {loading ?   <AlertText  setLoading={setLoading} deleteAll={deleteAll}/> : 
      <Container className="delete-buttons mt-4">
   <Button  onClick={()=>setList(list.filter(item=>!item.completed ))} style={{width:'100%'}}variant="danger">Delete done tasks</Button>
   <Button   disabled={list.length === 0}onClick={()=>setLoading(true)}  style={{width:'100%'}}variant="danger">Delete all tasks</Button> 

 
      </Container>}
      


    </>
   
   
     
)




}

export default TodoList