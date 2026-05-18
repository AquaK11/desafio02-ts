interface IButton {
  loginF: () => void
}

export const Botao = ({loginF}: IButton) => {
  return(
    <div>
      <button onClick={loginF} style={{backgroundColor: 'purple', color: 'black', 
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