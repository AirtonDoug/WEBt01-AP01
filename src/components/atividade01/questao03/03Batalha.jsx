import React from 'react'

export const Hero = ({ name,img }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} alt={name} />
        </div>
    )    
}

 export const Enemy = ({ name, img }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} alt={name} />
        </div>
    )    
}

export const Arena = ({name}) =>{
    return(

    <div>
        <h1>Arena:{name}</h1>
        <Hero name={"Anti-Mage"} img={"http://cdn.dota2.com/apps/dota2/images/heroes/antimage_vert.jpg"}/>

        <Enemy name={"Bane"} img={"http://cdn.dota2.com/apps/dota2/images/heroes/bane_vert.jpg"}/>
    </div>
    )
}
export const World = ({children}) =>{
    return(

    <div>
        {children}
    </div>
    )
}


