import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

function UserInfo(props) {


 
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-9 offset-3">
         
            <Table>
              <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>kasbi</td>
                <td>Age</td>
                <td>Active</td>
              </tr>
              </thead>
              <tbody>
              {props.data.length > 0 ?
              props.data.filter((item) => {
                return props.search.toLowerCase() === '' ? item : item.Name.toLowerCase().includes(props.search)
              }).map((item, index) => {
                return (
                  <>
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.Name}</td>
                      <td>{item.kasb}</td>
                      <td>{item.age}</td>
                      <td>

                        <button onClick={() => props.del(item.id)} className="btn btn-outline-danger">
                          Delate
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
              : <h1>Hech bola Qolmadi</h1>
            }
           
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
