function Header(props) {
const headerStyles={
    backgroundColor: props.bgColor,
    color: props.textColor,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
};

  return (
   <header style={headerStyles}>
        <div className="Container">
            <h1>{props.text}</h1>
        </div>
   </header>
  )
}

Header.defaultProps =
{
    text:'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
    }

export default Header


