import React from 'react';
import Container from '../components/container';
import HomeBanner from '../components/homeBanner';
import { Link } from '@mui/material';

export default function Index() {
    return (
        <Container>
           <HomeBanner/>
           <Link href="/posts">Link</Link>
        </Container>
    );
}


