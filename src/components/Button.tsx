import { MouseEventHandler } from "react"


interface IButton {
  onClick: MouseEventHandler
}

export const Botao = ({onClick}: IButton) => {
  return(
    <div>
      <button onClick={onClick} style={{backgroundColor: 'purple', color: 'black', 
        width: '100%', 
        padding: '25px', 
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '30px'}}>
        Botao
      </button>
    </div>
  )
}