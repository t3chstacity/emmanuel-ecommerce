import { navigate } from 'gatsby';
import React from 'react';
import * as styles from './ProductCollection.module.css';

const ProductCollection = (props) => {
  const { image, title, text, link } = props;

  return (
    <div
      role={'presentation'}
      onClick={() => navigate(link)}
      className={styles.root}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.content}>
        <div>{'Hello my images hsould come here'}</div>
        <span className={styles.title}>{title}</span>
        <span className={styles.text}>{text}</span>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default ProductCollection;
