import React from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap'
import { Link } from "react-router-dom"


export default function Add(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                     <Form>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" placeholder="User Qoshish"></Input>
                        </FormGroup>
                    <Button type="submit">Submit</Button>
                    <Link to='/' className="btn btn-danger">Orqaga</Link>
                     </Form>
                </div>
            </div>
        </div>
        
        </>
    )
}