import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/green_tshirt_1.jpg'}
        title={'Men'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/black_hoodie_text_1.jpg'}
        title={'Women'}
        text={'SHOP NOW'}
        link={'/women'}
      />
      <div>{'Added new line here.'}</div>
      <ProductCollection
        image={'/collections/collection3.jpg'}
        title={'Accessories'}
        text={'SHOP NOW'}
        link={'/accessories'}
      />
      <div>{'Added new line here.'}</div>
      <ProductCollection
        image={'/collections/collection4.jpg'}
        title={'Simple Cotton'}
        text={'SHOP NOW'}
        link={'/cotton'}
      />
      <div>{'Link goes here revision 4.'}</div>
    </div>
  );
};

export default ProductCollectionGrid;
