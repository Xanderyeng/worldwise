import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
        <p className={styles.copyright}>
        &copy; copyright {new Date().getFullYear()} by Worlwise Inc.
        <span>Chepkiyeng</span>
        </p>
    </footer>
    )
}

export default Footer
