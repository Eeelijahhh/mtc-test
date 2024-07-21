import LinkButton from "@/UI/LinkButton";
import styles from "./quotes.module.css";
import classNames from "classnames";
import Slider from "../Slider/slider";

const QUOTES_ITEMS = [
  {
    id: 1,
    title: "Over 35 years experience designing handmade kitchens",
    text: "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
    author: "Jane, Dundee",
  },
  {
    id: 2,
    title: "Over 35 years experience designing handmade kitchens",
    text: "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
    author: "Jane, Dundee",
  },
];

const Quotes: React.FC = () => {
  const items = QUOTES_ITEMS.map((item) => (
    <div key={item.id} className={styles.content}>
      <h2 className={styles.title}>{item.title}</h2>
      <div>
        <p className={styles.text}>{item.text}</p>
        <span className={styles.author}>{item.author}</span>
      </div>
    </div>
  ));

  return (
    <section className={styles.root}>
      <div className={classNames(styles.wrapper, "container")}>
        <h3 className={styles.subTitle}>What Our Customers Say</h3>
        <Slider items={items} arrows />
        <div className={styles.linkWrapper}>
          <LinkButton href="/faq">Frequently Asked Questions</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
