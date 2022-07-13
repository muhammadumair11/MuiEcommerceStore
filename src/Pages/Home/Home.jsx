import React from 'react';
import CardBlock from './CardBlock';
import ProductList from '../../Common/ProuctCardList/ProductList';
import TextCardBlock from './TextCardBlock';
// import { PropTypes } from 'prop-types';

function Home() {
  return (
    <>
      <TextCardBlock />
      <CardBlock />
      <ProductList data={4} />
    </>
  );
}
export default Home;
