import styles from "./link.module.css";
import { Link } from "react-router-dom";

//a component to display sign in link
const SignInLink = () => {
  return <Link to="/signin" className={styles.signin}>Sign in</Link>;
};

export default SignInLink;
