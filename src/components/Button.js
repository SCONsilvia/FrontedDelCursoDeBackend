const Button = (props) => {
    return(
        <div className="buttonStyle" onClick={props.handleClick}>{props.children}</div>
    )
}

export default Button