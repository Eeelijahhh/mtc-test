import LinkButton from "@/UI/LinkButton";
import styles from "./section.module.css";
import Image from "next/image";
import classNames from "classnames";

const Section: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src="/images/section.jpg"
          alt="Section image"
          fill
        />
      </div>
      <div className={classNames(styles.contentWrapper, "container")}>
        <div className={styles.content}>
          <h3 className={styles.subTitle}>
            Quality Craftmanship from build to delivery
          </h3>
          <h2 className={styles.title}>
            Discover the beauty of a handmade kitchen
          </h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
            feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
            eu pharetra tincidunt, mauris purus ultrices.
          </p>
          <LinkButton href="/about-us">About Us</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Section;
