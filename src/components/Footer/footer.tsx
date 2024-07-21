import Link from "next/link";
import styles from "./footer.module.css";
import classNames from "classnames";
import Logo from "@/components/Logo";

const FOOTER_ITEMS = [
  {
    title: "About",
    items: [
      {
        title: "Shop",
        url: "/shop",
      },
      {
        title: "Plan My Kitchen",
        url: "/plan",
      },
      {
        title: "About Us",
        url: "/about-us",
      },
      {
        title: "Gallery",
        url: "/gallery",
      },
    ],
  },
  {
    title: "Service",
    items: [
      {
        title: "FAQ",
        url: "/faq",
      },
      {
        title: "Contact",
        url: "/contact",
      },
      {
        title: "How To Buy",
        url: "/buy",
      },
      {
        title: "Downloads",
        url: "/downloads",
      },
    ],
  },
  {
    title: "Info",
    items: [
      {
        title: "Delivery",
        url: "/delivery",
      },
      {
        title: "Terms",
        url: "/terms",
      },
      {
        title: "Privacy",
        url: "/privacy",
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <div className={classNames(styles.wrapper, "container")}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.menu}>
          {FOOTER_ITEMS.map((footerItem, index) => (
            <div key={index}>
              <span className={styles.menuHeading}>{footerItem.title}</span>
              <ul className={styles.menuList}>
                {footerItem.items.map((item, index) => (
                  <li key={index} className={styles.menuItem}>
                    <Link className={styles.menuLink} href={item.url}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <span className={styles.menuHeading}>Follow</span>
            <div className={styles.socialList}>
              <Link
                className={styles.socialLink}
                href="https://www.facebook.com/"
                target="_blank"
              >
                <span className={styles.socialIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.281"
                    height="18"
                    viewBox="0 0 9.281 18"
                  >
                    <path
                      id="facebook-f"
                      d="M2.707,18V9.949H0V6.75H2.707V4.219A4.168,4.168,0,0,1,3.832,1.107,4.075,4.075,0,0,1,6.82,0,17.413,17.413,0,0,1,9.281.141V2.988H7.594a1.632,1.632,0,0,0-1.3.422,1.8,1.8,0,0,0-.281,1.125V6.75H9l-.422,3.2H6.012V18Z"
                      fill="#000"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                className={styles.socialLink}
                href="https://x.com/"
                target="_blank"
              >
                <span className={styles.socialIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.154"
                    height="18"
                    viewBox="0 0 22.154 18"
                  >
                    <path
                      id="Path"
                      d="M19.861,4.5a2.578,2.578,0,0,1,.043.563,12.83,12.83,0,0,1-1.514,6.014,12.357,12.357,0,0,1-4.37,4.889A12.484,12.484,0,0,1,6.966,18,12.606,12.606,0,0,1,0,15.966q.476.043,1.082.043A9.008,9.008,0,0,0,6.75,14.063a4.226,4.226,0,0,1-2.661-.887A4.519,4.519,0,0,1,2.51,10.947q.433.043.822.043a5.767,5.767,0,0,0,1.212-.13,4.578,4.578,0,0,1-2.6-1.6A4.356,4.356,0,0,1,.909,6.4V6.317a4.277,4.277,0,0,0,2.034.606A5.04,5.04,0,0,1,1.471,5.279,4.407,4.407,0,0,1,1.558.822,12.528,12.528,0,0,0,5.69,4.2,12.577,12.577,0,0,0,10.9,5.582a6.307,6.307,0,0,1-.087-1.038,4.5,4.5,0,0,1,.606-2.272A4.446,4.446,0,0,1,13.067.606,4.388,4.388,0,0,1,15.317,0a4.335,4.335,0,0,1,1.839.389,5.139,5.139,0,0,1,1.493,1.038,9.244,9.244,0,0,0,2.9-1.082,4.509,4.509,0,0,1-1.99,2.51,9.76,9.76,0,0,0,2.6-.736A9.987,9.987,0,0,1,19.861,4.5Z"
                      fill="#000"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                className={styles.socialLink}
                href="https://www.instagram.com/"
                target="_blank"
              >
                <span className={styles.socialIcon}>
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
                      fill="#000"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <small className={styles.copyright}>
          Copyright Online MTC Home Kitchens 2018 - All rights reserved.
          Responsive website design, Development & Hosting by mtc.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
