"use client";

import Link from "next/link";
import styles from "./menu.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classNames from "classnames";

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
        <ul className={styles.socialList}>
          <li className={styles.socialItem}>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className={styles.socialLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9.281"
                height="18"
                viewBox="0 0 9.281 18"
              >
                <path
                  id="facebook-f"
                  d="M2.707,18V9.949H0V6.75H2.707V4.219A4.168,4.168,0,0,1,3.832,1.107,4.075,4.075,0,0,1,6.82,0,17.413,17.413,0,0,1,9.281.141V2.988H7.594a1.632,1.632,0,0,0-1.3.422,1.8,1.8,0,0,0-.281,1.125V6.75H9l-.422,3.2H6.012V18Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </li>
          <li className={styles.socialItem}>
            <Link
              href="https://www.x.com/"
              target="_blank"
              className={styles.socialLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.154"
                height="18"
                viewBox="0 0 22.154 18"
              >
                <path
                  id="Path"
                  d="M19.861,4.5a2.578,2.578,0,0,1,.043.563,12.83,12.83,0,0,1-1.514,6.014,12.357,12.357,0,0,1-4.37,4.889A12.484,12.484,0,0,1,6.966,18,12.606,12.606,0,0,1,0,15.966q.476.043,1.082.043A9.008,9.008,0,0,0,6.75,14.063a4.226,4.226,0,0,1-2.661-.887A4.519,4.519,0,0,1,2.51,10.947q.433.043.822.043a5.767,5.767,0,0,0,1.212-.13,4.578,4.578,0,0,1-2.6-1.6A4.356,4.356,0,0,1,.909,6.4V6.317a4.277,4.277,0,0,0,2.034.606A5.04,5.04,0,0,1,1.471,5.279,4.407,4.407,0,0,1,1.558.822,12.528,12.528,0,0,0,5.69,4.2,12.577,12.577,0,0,0,10.9,5.582a6.307,6.307,0,0,1-.087-1.038,4.5,4.5,0,0,1,.606-2.272A4.446,4.446,0,0,1,13.067.606,4.388,4.388,0,0,1,15.317,0a4.335,4.335,0,0,1,1.839.389,5.139,5.139,0,0,1,1.493,1.038,9.244,9.244,0,0,0,2.9-1.082,4.509,4.509,0,0,1-1.99,2.51,9.76,9.76,0,0,0,2.6-.736A9.987,9.987,0,0,1,19.861,4.5Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </li>
          <li className={styles.socialItem}>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className={styles.socialLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  id="twitter_instagram"
                  data-name="twitter instagram"
                  d="M9,18c-1.739,0-3-.02-3.757-.06a6.606,6.606,0,0,1-1.989-.382,4.31,4.31,0,0,1-1.748-1.065A4.717,4.717,0,0,1,.4,14.746,7.642,7.642,0,0,1,.06,12.757C.02,12,0,10.739,0,9S.02,6,.06,5.243A7.642,7.642,0,0,1,.4,3.254,4.706,4.706,0,0,1,3.254.4,7.642,7.642,0,0,1,5.243.06C6,.02,7.261,0,9,0s3,.02,3.757.06A7.642,7.642,0,0,1,14.746.4,4.706,4.706,0,0,1,17.6,3.254a8.2,8.2,0,0,1,.361,2.009C17.986,6.01,18,7.268,18,9s-.02,3-.06,3.757a7.642,7.642,0,0,1-.341,1.989A4.706,4.706,0,0,1,14.746,17.6a7.642,7.642,0,0,1-1.989.341C12,17.98,10.739,18,9,18ZM8.357,1.607c-1.06,0-1.9.013-2.491.04a8.548,8.548,0,0,0-2.17.321A2.92,2.92,0,0,0,1.968,3.7a8.142,8.142,0,0,0-.321,2.17c-.026.593-.04,1.432-.04,2.491V9.643c0,1.06.013,1.9.04,2.491a8.548,8.548,0,0,0,.321,2.17A3.059,3.059,0,0,0,3.7,16.031a8.5,8.5,0,0,0,2.17.322c.593.026,1.432.04,2.491.04H9.643c1.087,0,1.925-.013,2.491-.04a8.1,8.1,0,0,0,2.17-.322A3.055,3.055,0,0,0,16.031,14.3a8.5,8.5,0,0,0,.322-2.17c.026-.593.04-1.432.04-2.491V8.357c0-1.087-.013-1.925-.04-2.491a8.1,8.1,0,0,0-.322-2.17A2.916,2.916,0,0,0,14.3,1.968a8.142,8.142,0,0,0-2.17-.321c-.593-.026-1.432-.04-2.491-.04ZM9,13.621A4.52,4.52,0,0,1,6.69,13,4.647,4.647,0,0,1,5,11.31,4.6,4.6,0,0,1,5,6.69,4.647,4.647,0,0,1,6.69,5,4.6,4.6,0,0,1,11.31,5,4.647,4.647,0,0,1,13,6.69a4.6,4.6,0,0,1,0,4.621A4.647,4.647,0,0,1,11.31,13,4.52,4.52,0,0,1,9,13.621ZM9,5.987A3.017,3.017,0,0,0,5.987,9,3.017,3.017,0,0,0,9,12.013,3.017,3.017,0,0,0,12.013,9,3.017,3.017,0,0,0,9,5.987Zm4.821-.724a1.1,1.1,0,0,1-1.084-1.084,1.085,1.085,0,0,1,2.169,0,1.253,1.253,0,0,1-.341.763A.982.982,0,0,1,13.821,5.263Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </li>
        </ul>
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
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <button className={styles.hamburgerButton} onClick={handleHamburgerClick}>
        <span className={styles.hamburgerIcon}>
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>close</title>
              <path
                fill="#FFFFFF"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>menu</title>
              <path
                fill="#FFFFFF"
                d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
              />
            </svg>
          )}
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
              <Link className={styles.mobileLink} href={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
