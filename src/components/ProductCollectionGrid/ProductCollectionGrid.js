import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/green_tshirt_1.jpg'}
        title={' '}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/black_hoodie_text_1.jpg'}
        title={' '}
        text={'SHOP NOW'}
        link={'/women'}
      />
      <ProductCollection
        image={'/collections/white_hoodie_plain_1.jpg'}
        title={' '}
        text={'SHOP NOW'}
        link={'/accessories'}
      />
      <ProductCollection
        image={'/collections/sweatshirt_black_1.jpg'}
        title={' '}
        text={'SHOP NOW'}
        link={'/cotton'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
