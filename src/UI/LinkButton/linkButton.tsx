import Link, { LinkProps } from "next/link";

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
}

import styles from "./linkButton.module.css";

const LinkButton: React.FC<LinkButtonProps> = ({ children, ...props }) => {
  return (
    <Link className={styles.root} {...props}>
      {children}
    </Link>
  );
};

export default LinkButton;
