import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with{"  "}
        <img
          src="/love.svg"
          alt="Netlify Logo"
          className={styles.logo}
        />{" "}
        for you by &nbsp;<font color={"red"}> Murikao</font>
        <p>₢Murikao</p>
      </footer>
    </>
  );
}
