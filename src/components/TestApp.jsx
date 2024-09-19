import { useEffect, useState } from "react";
import Button from "./Button";


export function TestApp(){
    const [ test, SetTest] = useState ('');
    const [items, setItems] = useState ('')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${test}`)
      .then(response => response.json())
      .then(data => setItems(data))
    } , [test])

    return (<>
    <div className="container">
        <h1>TestApp</h1>
        <div className="d-flex">
            
        <Button btnClass={'btn-success'} text={'Post'} onClick={()=> SetTest('posts')}/>
        <Button btnClass={'btn-warning'} text={'Users'} onClick={()=> SetTest('users')}/>
        <Button btnClass={'btn-alert'} text={'Comments'} onClick={()=> SetTest('comments')}/>
          
        </div>
        <h2 className="subtitle text-primary">{!test ? "Select from above" : test}</h2>
    
    {!items ? null: 
    items.map((item)=> {
        return( <div className="card card-primary" key={item.id}>
            {item.name && 
            <h2>
                {item.name}
            </h2>} 
            
            <div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </div>
            
        </div>)
    })
    
    }
    
    </div>
  
    </>)
}