import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '@mui/icons-material';
import { Box, Container, Divider, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { footerLinks } from '../../Constants/Footerlinks';
import { IconWrapper } from '../Wrappers/IconWrapper';

const FooterContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: '2rem 0',
  width: '100%'
}));

function FooterVersion2() {
  return (
    <FooterContainer>
      <Container>
        <Grid container>
          <Grid item lg={3} paddingY={2}>
            <Typography variant="h2" paddingY={2} color="secondary.light" fontWeight="bold">
              Avion
            </Typography>
            <Typography variant="body2" paddingY={1} color="secondary.light">
              21 New york
            </Typography>
            <Typography variant="body2" paddingY={1} color="secondary.light">
              New York City
            </Typography>
            <Typography variant="body2" paddingY={1} color="secondary.light">
              United States of America
            </Typography>
            <Typography variant="body2" paddingY={1} color="secondary.light">
              432 34
            </Typography>
          </Grid>
          <Grid
            item
            display={'flex'}
            flexDirection="column"
            lg={3}
            xs={12}
            sm={12}
            paddingY={2}
            md={12}>
            <Typography variant="h4" paddingY={2} color="secondary.light">
              Social links
            </Typography>
            <Box display={'flex'}>
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
            </Box>
          </Grid>
          {footerLinks.map((items, index) => (
            <Grid item lg={2} xs={12} sm={12} paddingY={2} md={12} key={index}>
              <Typography variant="h4" paddingY={2} color="secondary.light">
                {items.title}
              </Typography>
              {items.links.map((link, index) => (
                <Typography variant="body2" paddingY={0.5} color="secondary.light" key={index}>
                  {link.name}
                </Typography>
              ))}
            </Grid>
          ))}

          <Grid item lg={12}>
            <Divider />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h6" paddingY={2} color="secondary.light">
              Copyright 2022 Avion LTD
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
}

export default FooterVersion2;
