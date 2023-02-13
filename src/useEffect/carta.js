import React from 'react'
import { YMaps, Map, Placemark,ListBox, ListBoxItem,  Button, FullscreenControl, RouteButton, TypeSelector, ZoomControl } from '@pbe/react-yandex-maps';


export default function Carta(){
    const defaultState = {
        center: [40.94886672042529, 68.75788013312665],
        zoom: 10,
        controls: [],
      
      };


     
  
    
    return(
        <>
        <div className='w-100 h-50'>
            <YMaps>
                <Map defaultState={defaultState} >
                    <FullscreenControl/>
                <ListBox data={{ content: "Select city" }}>
                    <ListBoxItem data={{ content: "O'zbekiston" }} />
                    <ListBoxItem
                        data={{
                        content: "Tashkent",
                        }}
                    />
                 </ListBox>
              
                 <ZoomControl options={{ float: "right" }} />
                </Map>
            </YMaps>
        </div>
            
        </>
    )
}