import React, { useState } from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap'
import { Link } from "react-router-dom"




export default function Edit(){
 const [values, setValues] = useState('')


 
    return(
        <>
        <h1>Edd</h1>

        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                   
                     <Form>
                        <FormGroup>
                            <Label>Name {values}</Label>
                            <input value={values} onChange={e =>  console.log(e)} type="text" placeholder="User Qoshish"></input>
                        </FormGroup>
                        <Button type="submit">Edit Name</Button>
                        <Link to='/' className="btn btn-danger">Orqaga</Link>
                     </Form>
                </div>
            </div>
        </div>
        </>
    )
}