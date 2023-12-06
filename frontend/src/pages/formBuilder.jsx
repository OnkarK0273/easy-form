import $ from "jquery"; //Load jquery
import React, { createRef, useContext, useEffect, useState } from "react"; //For react component
import '../App.css'
// import the react-json-view component
import ReactJson from 'react-json-view'
import { MyContext } from "../authContext/dataContext";
import { Link, json } from "react-router-dom";
window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder");// For FormBuilder

const FormBuilder = () => {
    const fb = createRef();
    let [ formBuilder, setFormBuilder ] = useState(null);
    const { form, setForm } = useContext(MyContext);
    useEffect(() => {
          //To create form
          if(!formBuilder?.formData){
            setFormBuilder($(fb.current).formBuilder({ 
                disabledActionButtons: ['data', 'clear', 'save'],
                formData: []
              })
            );
          }
        //   console.log(form)
    }, [])




   

    function saveData() {
      setForm(formBuilder.formData);
    //   console.log(form)
      sessionStorage.setItem("formbuild",formBuilder.formData)
   
    }
    function clearData() {
      formBuilder.actions.clearFields();      
      setForm({})
      sessionStorage.removeItem("formbuild")
    }
    return (
        <div className="float-container bg-gradient-to-r from-purple-500 to-pink-500" >
          <h1 className="p-2 text-3xl font-mono font-bold underline decoration-wavy" >Create Form</h1>
          <div ref={fb} />
          <div>
          <div>
            {/* {Object.keys(form).length > 0 &&
              <ReactJson src={JSON.parse(form)} />
            } */}
          </div>
            <div className="flex justify-center gap-4 p-5" >
              <button
                onClick={clearData}
                type="button"
                className="p-2 ring-offset-2 ring-2 text-white rounded-lg  bg-indigo-500  ring-blue-300 hover:ring-indigo-800"
              >
                Clear
              </button>
     
              <Link to={'/pre'} >
                <button
                    onClick={saveData}
                    type="button"
                    className="p-2 ring-offset-2 ring-2 text-white rounded-lg  bg-indigo-500  ring-blue-300 hover:ring-indigo-800"
                >
                    Preview
                </button>
                </Link>
            </div>
          </div>
        </div>
    )
}

export default FormBuilder