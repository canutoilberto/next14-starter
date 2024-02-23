import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Neno.</div>
      <div className={styles.text}>
        Neno creative thoughts agency &copy; All rights reserved
      </div>
    </div>
  );
};

export default Footer;
