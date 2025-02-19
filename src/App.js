import {React,useEffect,useState} from 'react';

import TodoInput from './components/TodoInput';

import Spinner from 'react-bootstrap/Spinner';



import TodoList from './components/Todolist';
import './App.css';


function App() {

  const [list,setList] = useState([{text:'esempio : impare cose nuove ',completed:false}])
  const [filter,setFilter] = useState('All')
  const [loading,setLoading] = useState(true)

  

useEffect(()=>{
setInterval(()=>{
setLoading(false)
},1000)

})


  const addItem =(item)=>{
   
    const newItem = {text:item,completed:false}

        setList([...list,newItem])
     
        
    
}


const toogleComplete = (index) =>{

  const updateList = list.map((item,i)=>
    i ==index ? {...item,completed : !item.completed} :item
  )
  setList(updateList)
  console.log(2)
}

const toogleDelete = (index) =>{
  const deleteList = list.filter((_,i)=>
  
  i !==index

  )
  setList(deleteList) 
}


const changeList = (index,newVal) =>{
const newList = list.map((item,i)=>

i === index ? {...item,text:newVal} : item
)

setList(newList)
}

  return (
    <>

<div className='App'>


  {loading  ?     <Spinner animation="grow" size="sm" /> : 
     <><TodoInput list={list} addItem={addItem} /><TodoList list={list} setList={setList} filter={filter} changeList={changeList} setFilter={setFilter} toogleDelete={toogleDelete} toogleComplete={toogleComplete} /></>
     
  }
     
     </div>





  
    </>
   
  );
}

export default App;
