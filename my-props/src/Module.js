import React from 'react'
export default function Module(props) {
  console.log(props);
  return (
    <>
      <ul>
        <li>Nom :{props.nom}</li>
        <li>Pnom :{props.pnom}</li>
        <li>Note :{props.note}</li>
        <li>status :{props.status}</li>
      </ul>
   
    </>
  )
}
