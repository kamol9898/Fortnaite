import React, {useState} from 'react';
import UserInfo from './userInfo';

function Home() {
    const [user, setUser] = useState([
        {id: 1, ism:'sardor', emaili: 'sardor@gmail.com.', kasbi: 'oshpaz' },
        {id: 2, ism:'Asl oga', emaili: 'sardor@gmail.com.', kasbi: 'hakker cala' },
        {id: 3, ism:'Azim oga', emaili: 'sardor@gmail.com.', kasbi: 'web' },
        {id: 4, ism:'faruh', emaili: 'sardor@gmail.com.', kasbi: 'max' },
       ])
        const [ism, setIsm] = useState('')
        const [email, setEmail] = useState('')
        const [kasb, setKasb] = useState('')
        const [select, setSelect] = useState('')
        const [search, setSearch] = useState('')

        function addUser(e){
          e.preventDefault()
          if(ism.length == '' && email.length == '' && kasb.length == ''){
           console.log('hechnima yoq');
          }else{
          const newUSer ={
            id: Date.now(), 
            ism: ism, 
            emaili: email, 
            kasbi: kasb,
          }
          setUser([...user, newUSer])
          setIsm('')
          setEmail('')
          setKasb('')
                       }
          
          
        }

        function delates(e){
        
          const newList = user.filter((item) => item.id !== e)
          setUser(newList)
        }


        function sort(sort) {
          setSelect(sort);
          setUser([...user].sort((a, b) => a[sort].localeCompare(b[sort])));
        }
      
    return (  
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 border mt-2">
                    <h1>Malumot kiriting</h1>
                  <form>
                  <label htmlFor="#">Ism</label>
                    <input type="text"
                     className='form-control'
                     value={ism}
                      onChange={(e) => setIsm(e.target.value)} />
                      {ism.length > 5 ? '' : <span className='text-danger'>ismingiz 5ta sozdan kop boliwi kerak</span>}
                      <br />
                    <label htmlFor="#">Email</label>
                    <input type="email"
                     className='form-control'
                     value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="#">Kasbi</label>
                    <input type="text"
                     placeholder="Kasbi"
                      className="form-control"
                      value={kasb}
                       onChange={(e) => setKasb(e.target.value)} />
                    <button onClick={addUser} className='btn btn-info mt-3'>Submit</button>
                  </form>
                </div>
               <UserInfo  
                    
                    onChange={sort} 
                    selectValue={select} 

                    remuv={delates} 
                    data={user}
                    
                    searchvalue={search}
                    setSearchhok={setSearch}
                    />
            </div>
        </div>
        </>
     );
}

export default Home;