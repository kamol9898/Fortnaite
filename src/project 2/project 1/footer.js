import  React  from 'react';


export default function Footer(){
    return(
        <>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid text-light">
                    <h1>FortniteApi</h1>
                    <h3>{new Date().getFullYear()}/
                    {new Date().getMonth() + 1  < 10 ? '0' + (new Date().getMonth() + 1) :new Date().getMonth() +1 }/
                    {new Date().getDate() < 10 ? '0' + new Date().getDate() :  new Date().getDate()}
                    </h3>
                </div>
          </nav>
        </>
    )
}
