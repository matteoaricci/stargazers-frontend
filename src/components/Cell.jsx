import React from 'react'
import '../Grid.css'

export const Cell = ({ color, onCellClick, position }) => {
  return (
    <div className={`cell ${color}`} onClick={() => onCellClick(position, color === 'white' ? 'black' : 'white')}>

    </div >
  )
}
