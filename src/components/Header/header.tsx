"use client";

import styles from "./header.module.css";
import classNames from "classnames";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  console.log(pathname);

  return (
    <header
      className={classNames(styles.root, {
        [styles.rootDark]: isMenuOpen || pathname !== "/",
      })}
    >
      <div className={classNames(styles.wrapper, "container")}>
        <Menu open={isMenuOpen} onChange={setIsMenuOpen}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
