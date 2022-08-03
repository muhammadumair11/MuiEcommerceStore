import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '@mui/icons-material';
import { Container, Divider, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { footerLinks } from '../../Constants/Footerlinks';
import NewLetter from '../NewLetter/NewLetter';
import { IconWrapper } from '../Wrappers/IconWrapper';

const FooterContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: '2rem 0',
  width: '100%'
}));

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Grid container>
          {footerLinks.map((items, index) => (
            <Grid item lg={2} xs={12} sm={12} paddingY={2} md={12} key={index}>
              <Typography variant="h4" paddingY={2} color="secondary.light">
                {items.title}
              </Typography>
              {items.links.map((link, index) => (
                <Typography variant="h5" paddingY={0.5} color="secondary.light" key={index}>
                  {link.name}
                </Typography>
              ))}
            </Grid>
          ))}
          <Grid
            item
            display="flex"
            flexDirection="column"
            justifyContent="start"
            paddingY={2}
            lg={6}
            xs={12}
            sm={12}
            md={12}>
            <Typography variant="h4" paddingY={2} color="secondary.light">
              Join our mailing list
            </Typography>
            <NewLetter primary />
          </Grid>
          <Grid item lg={12}>
            <Divider />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h6" paddingY={2} color="secondary.light">
              Copyright 2022 Avion LTD
            </Typography>
          </Grid>
          <Grid item lg={6} display="flex" justifyContent="flex-end">
            <IconWrapper padding="10">
              <LinkedIn color="secondary" />
            </IconWrapper>
            <IconWrapper padding="10">
              <Facebook color="secondary" />
            </IconWrapper>
            <IconWrapper padding="10">
              <Instagram color="secondary" />
            </IconWrapper>
            <IconWrapper padding="10">
              <Twitter color="secondary" />
            </IconWrapper>
            <IconWrapper padding="10">
              <Pinterest color="secondary" />
            </IconWrapper>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
