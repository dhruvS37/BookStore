import React ,{useState,useEffect} from 'react'

function RenderUsestate() {

    const [inputField,setInputFeild] = useState({username : "" ,email:"",phone:"",dob:""})
    const [count,setCount] = useState(0)
    const handleSubmit = (event) =>{
                alert(` ${inputField.username} \n ${inputField.email} \n ${inputField.phone} \n ${inputField.dob}`)
                event.preventDefault()        /* prevent to form being defalt */
            }
    
    useEffect(()=>{
        setCount((preCount)=> preCount + 1)
    },[inputField.username,inputField.email,inputField.phone,inputField.dob])

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="formFeild">
                <label>Username</label>
                <input type='text' value={inputField.username} onChange={e => setInputFeild({...inputField,username : e.target.value})} className="inputCss"></input>
            </div>
            <div className="formFeild">
                <label>Email</label>
                <input type='text' value={inputField.email} onChange={e => setInputFeild({...inputField,email : e.target.value})} className="inputCss"></input>
            </div>
            <div className="formFeild">
                <label>Phone</label>
                <input type='tel' value={inputField.phone} onChange={e => setInputFeild({...inputField,phone : e.target.value})}className="inputCss"></input>
            </div>
            <div className="formFeild">
                <label>DOB</label>
                <input type='date' value={inputField.dob} onChange={e => setInputFeild({...inputField,dob : e.target.value})}className="inputCss"></input>
            </div>
            
            <button type="submit" className="inputCss">Submit</button>
        </form>
        <h2>RenderCount - {count}</h2>
        </>
  )
}

export default RenderUsestate