import React from 'react'
import players from './players'
import Player from './Player'

export default function PlayerList() {
  return (
    <div>
        {players.map((player)=>
        <Player  {...player} />
        )}
    
    </div>
  )
}
