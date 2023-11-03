import { CartWidget } from "../CartWidget/CartWidget"
import styles from "/src/components/NavBar/navbar.module.css"
export const NavBar = () => {
    return (
        <nav className={styles.navbar1}>
            <div>Logotipo</div>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">NOSOTROS</a>
                </li>
                <li>
                    <a href="#">CONTACTO</a>
                </li>
                <li>
                    <a href="#">TIENDA</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
