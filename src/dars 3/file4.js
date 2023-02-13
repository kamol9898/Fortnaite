import React from "react";
import '../dars 3/file4.css'
import Foto  from '../dars 3/ok.jpg'
export default function File4(){

const product = [
    {id:1, name:"Samsung", narx: '500$', img: 'https://olcha.uz/image/220x220/products/upSEKotOdwChju0pOrLgAhQ2Ey7CVllO13FOvL1jAWVLknBnhuQZQG6aJWKV.jpeg'},
    {id:2, name:"SmatWatch", narx: '1200$', img: 'https://olcha.uz/image/220x220/products/yfViveFfmKrGQKOEbOcUxN6FzdejsdaQPSxVjjBSXAhRFMeODgzb7shmev7z.'},
    {id:3, name:"Redmy", narx: '50$', img: 'https://olcha.uz/image/220x220/products/upSEKotOdwChju0pOrLgAhQ2Ey7CVllO13FOvL1jAWVLknBnhuQZQG6aJWKV.jpeg'},
    {id:4, name:"Sichqoncha", narx: '5$', img: 'https://olcha.uz/image/220x220/products/8Vh6abpEJnDtIG8tvJM1pMsPxJv5M4qMQfE38XAb4PS5f9UXcL8Rvjc9nbks.'},
    {id:5, name:"Quloqchin Apple", narx: '56$', img: 'https://olcha.uz/image/220x220/products/bbB73SzQGZdGxeL68uFXjJlNUaDJdMnmtmSmMVuw7VaNaMWSomzt10qYY0nM.'},
    {id:6, name:"Telvizor", narx: '7880$', img: 'https://olcha.uz/image/220x220/products/O2KNHe1KxeR0wPqkeooI8kYdE22ejQLZ4lEQHQSYVnoipUJlhQRjwJ2ilvYy.'},
    {id:7, name:"ChangYutgich", narx: '900$', img: 'https://olcha.uz/image/220x220/products/Kfc5E9SuJVHZCuLg6f9yHWUk1dE5rS6zJAD4MAwjDeJvui7Gdd63tACNcZBO.'},
    {id:7, name:"ChangYutgich", narx: '900$', img: 'https://olcha.uz/image/220x220/products/Kfc5E9SuJVHZCuLg6f9yHWUk1dE5rS6zJAD4MAwjDeJvui7Gdd63tACNcZBO.'},
    {id:8, name:"Kamera", narx: '45$', img: 'https://olcha.uz/image/128x128/category/4pDWY3qKGaRkR6glyN93LBrK1eUOEATa9ixoASTO7qMPSbatt1YqVKXXKRAz.png'},
]

    return(
        <>

         <div className="wrap">
            {product.map((item, index) => {
                return(
                     <div className="cards">
              <img className="foto" src={item.img} alt="" />
              <div className="card-body">
                 <h4>Name: {item.name}</h4>
                 <h3>Summa: {item.narx}</h3>
                 <button className="buy">Buy</button>
                 <button className="delate">Delate</button>
              </div>           
             </div> 
                )
            })}
          
         </div>
        </>
    )
}