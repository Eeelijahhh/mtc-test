import LinkButton from "@/UI/LinkButton";
import styles from "./gallery.module.css";
import Image from "next/image";
import classNames from "classnames";

const GALLERY_ITEMS = [
  {
    id: 1,
    image: "/images/gallery-1.jpg",
  },
  {
    id: 2,
    image: "/images/gallery-2.jpg",
  },
  {
    id: 3,
    image: "/images/gallery-3.jpg",
  },
  {
    id: 4,
    image: "/images/gallery-4.jpg",
  },
];

const Gallery: React.FC = () => {
  return (
    <section className={classNames(styles.root)}>
      <div className="container">
        <h4 className={styles.title}>Customer Gallery</h4>
        <div className={styles.gallery}>
          <ul className={styles.galleryList}>
            {GALLERY_ITEMS.map((item) => (
              <li key={item.id} className={styles.galleryItem}>
                <Image
                  src={item.image}
                  height="310"
                  width="310"
                  alt="img"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.linkWrapper}>
          <LinkButton href="/gallery">View More</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
