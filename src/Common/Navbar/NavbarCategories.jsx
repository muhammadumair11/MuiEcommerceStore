import { Link, styled } from '@mui/material';
import React from 'react';

import { CategoryItemsConstant } from '../../Constants/CategoryListContants';

const MyCategories = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '1.2rem 2rem',

  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const CategoryList = styled('ul')(({ theme }) => ({
  display: 'flex'
}));

const CategoryItems = styled('li')(({ theme }) => ({
  padding: '0 1rem',
  listStyle: 'none',
  textTransform: 'capitalize'
}));

function NavbarCategories() {
  return (
    <MyCategories>
      <CategoryList>
        {CategoryItemsConstant.map((item, index) => (
          <CategoryItems key={index}>
            <Link underline="none" color="primary.light" variant="body2">
              {item}
            </Link>
          </CategoryItems>
        ))}
      </CategoryList>
    </MyCategories>
  );
}

export default NavbarCategories;
