import React,{useState,useEffect} from 'react';
import {useHistory,Link} from 'react-router-dom';
import M from 'materialize-css'

const Form=()=> {
    const history = useHistory()
    const [title,setTitle] = useState("");
    const [exam,setExam] = useState("");
    const [image,setImage] = useState("");
    const [status,setStatus] = useState("true");
    const [url,setUrl] = useState("");
    useEffect(()=>{
        if(url){
         fetch("/postform",{
             method:"post",
             headers:{
                 "Content-Type":"application/json",
                 
             },
             body:JSON.stringify({
                 title,
                 exam,
                 image:url,
                 status 
             })
         }).then(data=>{
            
     
            if(data.error){
               M.toast({html:data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html:"Saved Successfully",classes:"#43a047 green darken-1"})
                history.push('/view')
               
            }
         }).catch(err=>{
             console.log(err)
         })
     }
     },[url])
   

    const postData = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","testData")
        data.append("cloud_name","pramodshah")
        fetch("https://api.cloudinary.com/v1_1/pramodshah/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
           setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
 
     
    }

    
  return (
      <div className="Form" style={{margin:"10% 30% 0% 30%"}}>
           
          
            
          <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <input type="text" placeholder="exam" value={exam} onChange={(e)=>setExam(e.target.value)}/>
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Uplaod Image</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <p>
            <label>
                <input type="checkbox" value={status} />
                <span>Status</span>
            </label>
            </p>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" 
            onClick={()=>postData()}>Submit</button>

    <button className="btn" style={{paddingLeft:"50px"}}><Link to="/view" style={{color:"black"}}>View Data</Link>
</button>
      </div>
  )
}
 
export default Form;

