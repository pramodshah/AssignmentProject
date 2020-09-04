import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css'

const View=()=> {
    const [data,setData] = useState([])
    
    useEffect(()=>{
       fetch('/formdata',{
       }).then(res=>res.json())
       .then(result=>{ 
          
           setData(result.formData)
       })
    },[])


  
 
  return (
      <div>
          {
              
              data.map(item=>{
                  return  (
                   <div className="card" style={{margin:"10% 30% 0% 30%"}}>
                       <p>Title : {item.title}</p>
                       <p>Exam : {item.exam}</p>
                       <p>Image : </p>
                       <div className="card-image">
                                <img src={item.image}/>
                        </div>
                         <p>Status :{item.status}</p>
                         
                    </div>
                  )
                 
                 
              })
          }
      </div>
  )
}
 
export default View;

