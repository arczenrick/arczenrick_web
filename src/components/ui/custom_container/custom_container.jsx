const { Container } = require("react-bootstrap");
import styles from "./custom_container.module.scss";

const CustomContainer = ({ children, noPadding, noCont, ...props }) => {
  if (noCont) {
    return <>{children}</>;
  }
  return (
    <Container
      style={{
        height: "100%",
        padding: noPadding && 0,
      }}
      className={styles.CustomContainer}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
