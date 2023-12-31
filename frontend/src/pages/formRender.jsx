import $ from "jquery"; //Load jquery
import React, { createRef, useContext, useEffect, useState } from "react"; //For react component
import '../App.css'
// import ReactJson from 'react-json-view'
import { MyContext } from "../authContext/dataContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Toast from "../components/toest";
import Toast2 from "../components/toast2";

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder/dist/form-render.min.js")

const FormRender = () => {
    const { form, setForm } = useContext(MyContext);
    const [ output, setOutput] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormSubmitted2, setIsFormSubmitted2] = useState(false);
    const fb = createRef();
    let formRender;

    useEffect(() => {
          console.log(form)
          let formData = form;
          formRender = $(fb.current).formRender({ formData });
         
    }, [form])

    useEffect(() => {
        let formbuild = JSON.parse(sessionStorage.getItem("formbuild"))
        setForm(formbuild)
        console.log("trrrr",form)
    }, [])




     function saveData() {
      if(Object.keys($(fb.current)?.formRender("userData")).length > 0) {
        setOutput($(fb.current).formRender("userData"))
      }
        //   console.log('submit',form)

        handleAPI(form)
        
    }

    
    
    async function handleAPI(payload){
        try{
            
            let res = await axios.post("https://bola-form.onrender.com/form",payload)
            console.log(res.data.msg)
        
            setIsFormSubmitted(true);

        }catch(err){

            // console.log(err.response.data)
            setIsFormSubmitted2(true);

        }
    }
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 " >

        <div className="flex items-center gap-[600px] p-2" >
            <Link to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            </Link>
            <h1 className="text-2xl p-3 font-bold text-center" >  Display Form</h1>
        </div>

        <div className="float-child " >
            {
                form.length ==0 ?<h1 className="p-2 text-3xl font-mono font-bold underline decoration-wavy" >first Add the quations</h1>:<form className="font-bold w-[400px] border-dashed border-2 p-4" ref={fb}></form>
            }
            
            {Object.keys(form).length > 0 && 
            <>
              <button
              onClick={saveData}
              type="button"
              className="p-2 ring-offset-2 ring-2 text-white rounded-lg  bg-indigo-500  ring-blue-300 hover:ring-indigo-800"
              >
                Submit
              </button>
              {/* {Object.keys(output).length > 0 &&
                <ReactJson src={JSON.parse(JSON.stringify(output))} />
                }   */}

            </>
            }

        <Toast message="Form submitted successfully!" show={isFormSubmitted} />
        <Toast2 message="Error" show={isFormSubmitted2} />
        </div>
        </div>
    )
}

export default FormRender