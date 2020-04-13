import React, { useState } from 'react'
import { Cell } from './Cell'
import '../Grid.css'

const createGrid = (rows, columns) => {
  const array = [];
  for (let row = 0; row <= rows; row++) {
    array[row] = [];
    for (let col = 0; col < columns; col++) {
      array[row][col] = 'black'
    }
  }

  return array;
}

export const Grid = () => {
  const [grid, setGrid] = useState(createGrid(25, 25))

  const onCellClick = (position, newColor) => {
    setGrid(grid.map((row, i) => {
      return row.map((cell, j) => {
        if (i === position[0] && j === position[1]) {
          return newColor
        } else {
          return cell
        }
      })
    }))
  }

  return (
    <div className="grid">
      {grid.map((row, i) => {
        return row.map((cell, j) => {
          return <Cell key={[i, j]} position={[i, j]} color={cell} onCellClick={onCellClick} />
        })
      })}
    </div>
  )
}
