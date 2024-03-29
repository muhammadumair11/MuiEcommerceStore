import React from 'react';
import CardBlock from './CardBlock';
import ProductList from '../../Common/ProuctCardList/ProductList';
import TextCardBlock from './TextCardBlock';
import FeaturesBlock from './FeaturesBlock';
import NewLetterBlock from './NewLetterBlock';
import { Container } from '@mui/material';
// import { PropTypes } from 'prop-types';

function Home() {
  return (
    <>
      <TextCardBlock />
      <CardBlock />
      <Container sx={{ py: 6 }}>
        <ProductList data={4} />
      </Container>
      <FeaturesBlock />
      <NewLetterBlock />
    </>
  );
}
export default Home;
