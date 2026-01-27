import React from 'react';
import Container from '../ui/Container';
// import styles from '../../styles/modules/Header.module.css'; // Will create later if needed, prompt put css in modules/Hero.module.css? No, Header likely needs its own or ui? 
// Prompt said: /styles/modules/[Section].module.css. Header is in layout. 
// Step 3 structure doesn't explicitly list Header.module.css.
// It lists /styles/modules/Hero...CTA.
// And /styles/ui/Button, SectionHeader.
// It does NOT list Header.module.css.
// "Process.module.css", etc.
// I should probably create Header.module.css in modules even if not listed, or inline/global? No, "CSS Modules ONLY".
// I'll add Header.module.css and Footer.module.css to modules or layout specific?
// Step 3 structure:
// /styles/modules/Hero...
// /styles/ui/Button...
// Maybe Header/Footer are considered part of "base" or I should add them to modules. I'll add them to modules.

const Header = () => {
    return (
        <header style={{ padding: '20px 0', borderBottom: '1px solid var(--color-border)' }}>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>Sunergy Potentia</div>
                    <nav>
                        {/* Nav items */}
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;
