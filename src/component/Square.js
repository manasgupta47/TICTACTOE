import React from 'react'

const Square=({value,onClick,isWinningSquare})=> {
  return (
    <button  className={`square ${isWinningSquare ? 'winning' : ''} ${
      value === 'X' ? 'text-green' : 'text-orange'
    }`} type='button' onClick={onClick}  style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }} >{value}</button>
  )
}

export default Square