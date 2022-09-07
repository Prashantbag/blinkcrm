import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { Button, CssBaseline, Grid, IconButton, Toolbar, AppBar } from '@mui/material';

import styled from '@emotion/styled';
import logo from '../images/logo.png';
import '../styles/globalstyle.css';
import {
    color1,
    color4,
    color5,
    color6,
    blinkfont,
    font2,
    fontSize15,
    fontSize18,
    lineHeight26,
    lineHeight27
} from '../assets/globalStyles';


const NavBar = styled(AppBar)`
    padding: 1rem 0rem;
    background: #ffffff;
    display: flex;
    justify-content: center;
    height: 90px;
    box-shadow: none;
    &:hover {
        background: #ffffff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    &.scrolled {
        background: #ffffff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }
`;

const Text = styled('span')`
    
    ${blinkfont};
    font-size: ${fontSize15};
    text-transform: none;
    color: ${(props) => (props.active ? '#ffffff' : color6)};
`;

const NavButton = styled(Button)`
    background: ${(props) => (props.active ? '#345eef' : '#ffffff')};
    &:hover {
        background: ${(props) => (props.active ? '#345eef' : '#ffffff')};
    }
`;

const LogoButton = styled(IconButton)`
    &:hover {
        background: none;
    }
    margin-top: 40px;
    @media (max-width: 899px) {
        display: flex;
        justify-content: center;
    }
`;



const LoginText = styled('span')`
    ${blinkfont};
    font-size: ${fontSize15};
    color: ${color6};
    text-transform: none;

    &:hover{
        color: #ffffff;
    }
`;

const LoginButton = styled(Button)`
    
    background: #e0f2e5;
    padding: 13px 28px;
    border-radius: 10px;
    border: none;
    position: relative;
    z-index: 1;
    transition: 0.2s ease;
    overflow: hidden;

    &:hover{
        background: ${color5};
        border: none;
        
    }



    &:hover #logintext{
        color: #ffffff;
    }

    &::after {
        background-color: #51B56D;
        
      }
    
   
`;

const SignupText = styled('span')`
    ${blinkfont};
    font-size: ${fontSize15};
    color: #ffffff;
    text-transform: none;
`;

const SignupButton = styled(Button)`
    
    background: ${color5};
    border-radius: 15px;
    text-transform: capitalize;
    padding: 13px 28px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    transition: 0.2s ease;
    overflow: hidden;

    &:hover{
        background: ${color5};
    }

    
`;

const NavSection = styled(Grid)`
    @media (max-width: 1199px) {
        display: none;
    }
`;

const NavLink = styled(Button)`
    text-decoration: none;
    border-radius: 10px;
    padding: 13px 28px;

    &:hover{
        background: ${color5};
        text-transform: capitalize;
        padding: 13px 28px;
        position: relative;
        z-index: 1;
        transition: 0.2s ease;
        overflow: hidden;

        
    }
    &:hover #navlink{
        color:  #ffffff;
    }
`;

const ToolBar = styled(Toolbar)`
    display: flex;
   
    


   

`;



export default function Navbar() {
    

   
    return (
        <>
            <NavBar position="relative">
                <CssBaseline />
                <ToolBar className='container'>
                    
                    <LogoButton onClick={() => navigate('/')} color="inherit" aria-label="menu">
                        <img src={logo} alt="" width='200'/>
                    </LogoButton>
                    <Grid item />
                    
                    <NavSection
                        spacing={2}
                        container
                        alignItems={'center'}
                        justifyContent={'flex-end'}>
                        <Grid item>
                            <NavLink>
                                <Text id='navlink'>Pricing</Text>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <LoginButton variant="outlined" className='btn btn-outline-primary'>
                                <LoginText id="logintext">Log In</LoginText>
                            </LoginButton>
                        </Grid>
                        <Grid item>
                            <SignupButton variant="contained" className='btn'>
                                <SignupText>Sign Up</SignupText>
                            </SignupButton>
                        </Grid>
                    </NavSection>
                </ToolBar>
            </NavBar>

            
            
        </>
    );
}
