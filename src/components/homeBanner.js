import React from "react";
import styled from '@emotion/styled';
import '../styles/globalstyle.css';
import { fontSize60, font9, globalfont, fontSize16 } from '../assets/globalStyles'
import { Button, Grid } from '@mui/material';
import bannerimg from '../images/banner.png'

const BannerHeading = styled('h1')`
    ${font9}
    font-size: ${fontSize60};
    font-family: ${globalfont};
    color: #000;
`;

const BannerDescription = styled('p')`
    color:#888;
    margin-bottom: 1.5rem !important;
    font-size: ${fontSize16};
`;

const BannerImg = styled('div')`
    background: #FFHGS;
`;

const MainContainer = styled('section')`
    padding: 90px 0px;
    margin-top: 110px;
`;

const GridDiv = styled('div')`
    padding-right: 3rem !important;
`;

const InnerContainer = styled('div')`

`;

export default function HomeBanner(){
    return(
        <MainContainer>
            <InnerContainer className='container'>
                <Grid container direction={'row'}>
                    <Grid item sm={6} >
                        <GridDiv>
                            <BannerHeading>{'Get high quality leads, save time and money!'}</BannerHeading>
                            <BannerDescription>{'Improve linkedin marketing, email marketing, whatsapp marketing and telemarketing, Say no to excel sheets, switch to blinkCRM, Manage your follow ups well and become a sales machine.'}</BannerDescription>
                        </GridDiv>
                    </Grid>
                    <Grid item sm={6} >
                        <BannerImg>
                            <img src={bannerimg} alt='' width='100%'/>
                        </BannerImg>
                    </Grid>
                </Grid>
            </InnerContainer>
        </MainContainer>    
    )
}
