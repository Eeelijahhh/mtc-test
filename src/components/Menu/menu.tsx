"use client";

import Link from "next/link";
import styles from "./menu.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classNames from "classnames";
import SocialsList from "./socialsList";

const MENU_ITEMS = [
  {
    id: 1,
    title: "Shop",
    url: "/shop",
  },
  {
    id: 2,
    title: "Play My Kitchen",
    url: "/plan",
  },
  {
    id: 3,
    title: "About Us",
    url: "/about-us",
  },
  {
    id: 4,
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: 5,
    title: "My Order",
    url: "/order",
    isOrder: true,
  },
];

const CART_ICON = (
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CLOSE_HAMBURGER_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="#FFFFFF"
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </svg>
);

const OPEN_HAMBURGER_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="#FFFFFF" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
  </svg>
);

interface MenuProps {
  children: React.ReactNode;
  open: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ open, onChange, children }) => {
  const handleHamburgerClick = () => {
    onChange((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [open]);

  return (
    <nav className={styles.root}>
      <div className={styles.wrapperStart}>
        <SocialsList />
        <ul className={styles.list}>
          {MENU_ITEMS.slice(0, 2).map((item) => (
            <li key={item.id} className={styles.item}>
              <Link className={styles.link} href={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {children}
      <ul className={styles.list}>
        {MENU_ITEMS.slice(2, MENU_ITEMS.length).map((item) => (
          <li key={item.id} className={styles.item}>
            <Link
              className={classNames({
                [styles.link]: !item.isOrder,
                [styles.orderLink]: item.isOrder,
              })}
              href={item.url}
            >
              <span>{item.title}</span>
              {item.isOrder ? CART_ICON : null}
            </Link>
          </li>
        ))}
      </ul>
      <button className={styles.hamburgerButton} onClick={handleHamburgerClick}>
        <span className={styles.hamburgerIcon}>
          {open ? CLOSE_HAMBURGER_ICON : OPEN_HAMBURGER_ICON}
        </span>
      </button>
      <div
        className={classNames({
          [styles.mobileMenu]: !open,
          [styles.mobileMenuOpen]: open,
        })}
      >
        <ul className={styles.mobileList}>
          {MENU_ITEMS.map((item) => (
            <li key={item.id} className={styles.mobileItem}>
              <Link
                className={classNames({
                  [styles.mobileLink]: !item.isOrder,
                  [styles.orderLink]: item.isOrder,
                })}
                href={item.url}
              >
                <span>{item.title}</span>
                {item.isOrder ? CART_ICON : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
