interface Props{
  className?: string,
  type?: any,
  value: any,
  onClick?: () => void
}

export function Button(props: Props){
  return(
    <button className={props.className} type={props.type}  onClick={props.onClick}>{props.value}</button>
  )
}