import './style.css'
import global from '../../assets/global.svg'
import login from '../../assets/login.svg'

export function Nav(){
  return(
    <div>
      <nav className='nav-container'>
        <h1 aria-label='Logo do site'>MakeMeAnEvent</h1>
        <div>
          <img src={login} alt="login logo" />
          <p>Login</p>
          <img src={global} alt='a globo to reference a world' />
          <p>English</p>
        </div>
      </nav>
    </div>
  )
}