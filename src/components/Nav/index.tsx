import './style.css'
import globePrint from '../../assets/globePrint.svg'
import loginPrint from '../../assets/loginPrint.svg'

export function Nav(){
  return(
    <div>
      <nav className='nav-container'>
        <h1 aria-label='Logo do site'>MakeMeAnEvent</h1>
        <div>
          <img src={globePrint} alt="login logo" />
          <p>Login</p>
          <img src={loginPrint} alt='a globo to reference a world' />
          <p>English</p>
        </div>
      </nav>
    </div>
  )
}