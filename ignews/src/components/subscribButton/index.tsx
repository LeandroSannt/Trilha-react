import styles from './styles.module.scss'
import { useSession,signIn} from "next-auth/react"

interface SubscripProps{
  priceId:string;
}

export function SubscribButton({priceId}:SubscripProps){
  const { data: session } = useSession()
  function handleSubscribe(){
    if(!session){
      signIn('github')
      return
    }

  }


  return(
    <button
    type='button'
    className={styles.subscrib}
      >
        Subscribe now

    </button>
  )
}
