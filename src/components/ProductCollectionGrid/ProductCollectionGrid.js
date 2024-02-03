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
        image={'/collections/hoodie_logo_blue.jpg'}
        title={' '}
        text={'SHOP NOW'}
        link={'/cotton'}
        />
      <ProductCollection
        image={'/collections/woman_hoodie.jpg'}
        title={' '}
        text={'SHOP NOW'}
        link={'/women'}
      />
       <ProductCollection
        image={'/collections/tee.jpg'}
        title={' '}
        text={'SHOP NOW'}
        link={'/accessories'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
