import styles from "./link.module.css";
import { Link } from "react-router-dom";

//a component to display sign up link
const SignUpLink = () => {
  return <Link to="/signin" className={styles.signup}>Sign up</Link>;
};

export default SignUpLink;
