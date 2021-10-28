import React,{useState} from 'react'

export default function Form1(props) {
   
    const [text, setText] = useState(0);
    const handclick =(event)=>{
        // console.log("textte here is "+text)
        let newtext= text.toUpperCase();
        setText(newtext)
          
    };
    const handclick1=(event)=>{
            setText(event.target.value);
            let newtext=navigator.clipboard.writeText(text);
            console.log(newtext);
            alert("text copied successfully");
          
    };
  
    const handchange =(event)=>{
        
        setText( event.target.value);
      
    };
    // const copyit=()=>{
    //         // setText(event.target.value);
    //         alert("text copied successfully");
    //         let newtext=navigator.clipboard.writeText(text);
    //         console.log(newtext);
            
           
    // };
    
    return (
        <>
        <div >
            <div className="form-floating border:3px bordercolor:'white' mx-4 my-1" >
                <textarea className="form-control" id="floatingTextarea2 "  rows="12" height="900px" widht="500px" value={text}  onChange={handchange} > </textarea>
                
            </div>
            
            <button type="button" className="btn btn-primary position-relative  my-2 mx-2" onClick={handclick} >
                    Convert it to UPPERCASE
                    <span className="position-absolute top-0 start-100 translate-middle  " >
                    </span>
            </button>
             
            <button type="button" className="btn btn-primary "onClick={handclick1}>copy</button>
        </div>
        <div className= "container" style={{ color: props.mode==='light'?'dark':'light' }} >
            <h2> Here is ur summary about TEXT</h2>
            <span>words, {text.length} characters</span>
            
            <h2>preview</h2>
            <p>{text}</p> 
       {/*  {text.split(" ").length} */} 
     </div>
        </>
    )
}
