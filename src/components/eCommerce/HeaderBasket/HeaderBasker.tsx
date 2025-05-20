import Logo from '@assets/svg/cart.svg?react'
import styles from './styles.module.css'
const {basketContainer, basketQuantity} = styles;
function HeaderBasker() {
  return (
    <div className={basketContainer}>
        <Logo title='basket icon'/>
        <div className={basketQuantity}>0</div>
    </div>
  )
}

export default HeaderBasker