
import styles from "/src/components/ItemListContainer/itemlist.module.css"
export const ItemListContainer = ({greeting}) => {
    return (
        <div className={styles.itemlist}>{greeting}</div>
    )
}
