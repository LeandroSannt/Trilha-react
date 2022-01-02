import styles from './styles.module.scss'
import { useSession,signIn} from "next-auth/react"
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'

interface SubscripProps{
  priceId:string;
}

export function SubscribButton({priceId}:SubscripProps){
  const { data: session } = useSession()
  async function handleSubscribe(){
    if(!session){
      signIn('github')
      return
    }

    try{

      const response = await api.post("/subscribe")
      console.log('response.data')

      const {sessionId} = response.data

      const stripe = await getStripeJs()

     await stripe.redirectToCheckout({sessionId})
    }catch(err){
      console.log(err.message)
    }
  }


  return(
    <button
    type='button'
    className={styles.subscrib}
    onClick={handleSubscribe}
      >
        Subscribe now

    </button>
  )
}
