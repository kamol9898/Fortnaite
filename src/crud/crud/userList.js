import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Search from "./search";
import Select from "./select";
import UserInfo from "./userInfo";

export default function UserList() {
  const [post, setPost] = useState([
    { id: 1, Name: "Javohir", age: 23, kasb: "web" },
    { id: 2, Name: "Sarvar", age: 44, kasb: "oshpaz" },
    { id: 3, Name: "Begzod", age: 23, kasb: "quruvchi" },
    { id: 4, Name: "Eldor", age: 56, kasb: "tikuvchi" },
  ]);

  const [ism, setIsm] = useState("");
  const [age, setYosh] = useState("");
  const [kasbi, setKasbi] = useState("");
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");




  const addPost = (e) => {
    e.preventDefault();
    if (ism.length != 0 && age != 0) {
      const newPost = {
        id: Date.now(),
        Name: ism,
        kasb: kasbi,
        age: age,
      };
      setPost([...post, newPost]);
      setIsm("");
      setYosh("");
      setKasbi("")
    }
  };

  function delates(id) {
    //    console.log(id);
    const newList = post.filter((item) => item.id !== id);
    setPost(newList);
  }

  function sort(sort) {
    console.log(sort);
    setSelect(sort);
    setPost([...post].sort((a, b) => a[sort].localeCompare(b[sort])));
  }




// function ser(e){
//   console.log(e.target.value);
  
//   setPost(post.filter((item) => item.Name.includes(e.target.value)))
  
  
// } 
// function handleSearch(e){
//   setSearch(e.target.value);
//   console.log(e.target.value);
// };


  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <Form>
              <FormGroup>
                <Label>Name {ism}</Label>
                <Input
                  value={ism}
                  onChange={(e) => setIsm(e.target.value)}
                  type="text"
                  placeholder="User Qoshish"
                ></Input>
                <br />
                <Input
                  value={age}
                  onChange={(e) => setYosh(e.target.value)}
                  type="text"
                  placeholder="yosh Qoshish"
                ></Input>

                <br />
                <Input
                  value={kasbi}
                  onChange={(e) => setKasbi(e.target.value)}
                  type="text"
                  placeholder="Kasbi"
                ></Input>
                <br />
                <div className="d-flex justify-content-between">
                  <Select
                    defaultValue="Malumotni tartiblash"
                    options={[
                      { value: "Name", name: "Ismi" },
                      { value: "kasb", name: "Kasbi" }
                    ]}
                    value={select}
                    onChange={sort}
                  />
                  
                 {/* <input type="text" onKeyUp={ser}/> */}
                 <input type="text" onChange={(e) => setSearch(e.target.value)}/>
                  {/* <Search value={search} onChange={serachs} /> */}
                </div>
              </FormGroup>
              <Button onClick={addPost} type="submit">
                Add post
              </Button>
            </Form>
          </div>
        </div>
      </div>

      <UserInfo data={post} search={search} del={delates} />
    </>
  );
}
