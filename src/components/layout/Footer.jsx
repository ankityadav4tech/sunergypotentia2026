import React from 'react';
import Container from '../ui/Container';

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto', padding: '40px 0', borderTop: '1px solid var(--color-border)' }}>
            <Container>
                <p>&copy; {new Date().getFullYear()} Sunergy Potentia LLP. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
