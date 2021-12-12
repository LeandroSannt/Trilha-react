import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'

export function  SingnInButton(){

  const isUserLoged = true

  return isUserLoged ? (

    <button
    type='button'
    className={styles.singInButton}>
      <FaGithub color='#04d361'/>
      Leandro Santos
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>

  ) : (
    <button
    type='button'
    className={styles.singInButton}>
      <FaGithub color='#eba417'/>
      Sign in with Github
    </button>
  )
}

export default SingnInButton
