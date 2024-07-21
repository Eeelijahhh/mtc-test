import Link from "next/link";

import styles from "./notFound.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <h2>Not Found</h2>
        <p>Could not find requested page</p>
        <Link href="/">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
