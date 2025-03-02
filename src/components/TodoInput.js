import React,{useState,useEffect} from "react"
import { InputGroup,Form,Button} from "react-bootstrap"
import Container from 'react-bootstrap/Container';

import MessageIcon from '@mui/icons-material/Message';




const  TodoInput = ({addItem,list}) =>{

    const [val,setInput] = useState('')
    


   

    const handleChange =(e) =>{

        setInput (e.target.value)
    }

   

const handleAdd  =() =>{

 let  arr = [list.map(item=>item.text.toLowerCase())]
 
console.log(arr.includes(val) == false)

    if(val.trim() !== '' && arr[0].includes(val.toLowerCase()) == false ){
        addItem(val)
       
    }
    
    else if(arr[0].includes(val.toLocaleLowerCase())){
      alert(`Task '${val}' già presente`)
      return 
    }else{

alert('input vuoto..')
    }
    setInput('')
}


  




    


return (
    <>
    
<h1 className="mt-4">TodoInput</h1>



<Container className="container-input" fluid="md">
<InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
       <MessageIcon />
        </InputGroup.Text>
        <Form.Control
        value={val} name="todo-input" onChange={handleChange}  placeholder="new todo"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>



      <Button  style={{margin:'0 auto !important',width:'100%'}} onClick={handleAdd} variant="primary">Add New Task</Button>


      </Container>

</>
)



}

export default TodoInput