import Link from "next/link";
import styles from "./footer.module.css";
import classNames from "classnames";
import Logo from "@/components/Logo";
import SocialsList from "./socialsList";

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
            <SocialsList />
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
