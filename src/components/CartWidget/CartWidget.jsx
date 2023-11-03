import styles from "/src/components/CartWidget/cart.module.css"

export const CartWidget = () => {
  return (
    <div className={styles.cart}>
        <img src="/src/img/cart.png" alt="" />
        <span>4</span>
    </div>
  )
}
