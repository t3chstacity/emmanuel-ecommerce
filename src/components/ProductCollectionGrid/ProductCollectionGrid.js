import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.jpg'}
        title={'Men'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/hoodie_logo_black.jpg'}
        title={'Women'}
        text={'SHOP NOW'}
        link={'/women'}
      />
      <ProductCollection
        image={'/collections/collection3.jpg'}
        title={'Accessories'}
        text={'SHOP NOW'}
        link={'/accessories'}
      />
      <ProductCollection
        image={'/collections/collection4.jpg'}
        title={'Simple Cotton'}
        text={'SHOP NOW'}
        link={'/cotton'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
