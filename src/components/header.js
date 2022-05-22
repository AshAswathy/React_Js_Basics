import { useState,useEffect,useRef } from "react";
import axios from "axios";
export default function Header(){
    let currentId=1;
    let a=10;
    const [b,setB]=useState(false); //setB rerenders
    const [c,setC]=useState(false);
    const i = useRef(null);
    async function increase_counter(){
        console.log(setB(true)); //sync runs first async last
        console.log(b); //sync
    }
    //console.log(a);
    function fetchData(){
        axios.get("https://jsonplaceholder.typicode.com/posts/").then((res)=>setC(res.data)); //then-success catch-failure
    }

    useEffect(()=>{     //to do smthg when page reloads (automatic function call), called for all changes in states
        console.log("c has changed"); 
        if(c==false)
        fetchData();
    },
    [   //dependencies - only when state changes useeffect is called 
        b
    ]
    )
    if(c==false){
        return <div>Loading...</div> //viewed until the page is rendered
    }

    function handleSubmit(){
        axios.post('https://jsonplaceholder.typicode.com/posts',{   //post method - create
            title: i.current.value,     //default keys (title,body,id,userid) of this server
            body: i.current.value,
            userId: 1,
        }).then((res)=>{console.log(res,res.data)})
    }

    function handleEdit(){
        axios.put('https://jsonplaceholder.typicode.com/posts/'+currentId,{  //put method - update - all fields required, patch method - same function - all fields needn't required
            title: i.current.value, 
            body: i.current.value,
            userId: 1,
            id: currentId,
        }).then((res)=>{console.log(res,res.data); return 1}).then((res)=>{console.log(res)}) //then - works in a chain format - return given explicitly or else shows as undefined
    }

    function handleDelete(){    //delete
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+currentId).then((res)=>{console.log(res,res.data)})
    }
    return (
        <div className="h-screen bg-cyan-200">
        <div className="container mx-auto rounded-xl shadow border p-8 bg-zinc-900 text-zinc-50">
            <p className="text-3xl text-zinc-50 font-bold mb-5">
            Welcome!
            </p>
            <p className="text-zinc-50">Hello !</p>
            <p className="text-zinc-50 text-lg">
            React and {b}Tailwind CSS
            </p>
            {
                c!=false && <div>hello{c.map((todo)=> <p onClick={()=>{i.current.value=todo.title; currentId=todo.id}}>{todo.title}</p>)}</div>
            }
            <input type="text" className="text-zinc-900" ref={i} onChange={()=>{console.log(i,i.current.value)}}></input> {/*i is the ref variable of input tag*/}
            <button className="bg-zinc-500" disabled={b} onClick={()=>handleEdit()}>Submit</button><br></br>
            <button className="bg-zinc-500" disabled={b} onClick={()=>handleDelete()}>Delete</button>
        </div>
        </div>

    );
  }

