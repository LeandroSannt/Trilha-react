import { useState } from 'react'

interface ListProps{
  initialItems:string[]
}

export function List({initialItems}:ListProps) {
  const [ list, setList ] = useState(initialItems)
  const [ newItem,setNewItem ] = useState('')

  const AddToList = () =>{
    setTimeout(() =>{

      setList(state =>[...state,newItem])
    },500)
  }

  const removeFromList = (items:string) =>{
    setTimeout(() =>{
      setList(state =>state.filter(item => item !== items))
    },500)
    
  }

  return (
    <>
      <button onClick={AddToList}>adicionar</button>
      <input placeholder='novo item' type="text" onChange={(e) =>setNewItem(e.target.value) } />

      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() =>{removeFromList(item)}}>remover</button>
          </li>
        ))}
      </ul>
    </>
  )
}

