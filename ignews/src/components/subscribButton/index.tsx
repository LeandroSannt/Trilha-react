import styles from './styles.module.scss'

interface SubscripProps{
  priceId:string;
}

export function SubscribButton({priceId}:SubscripProps){
  return(
    <button
    type='button'
    className={styles.subscrib}
      >
        Subscribe now

    </button>
  )
}
