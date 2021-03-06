/* eslint-disable import/no-unresolved */
import React, { useLayoutEffect } from 'react';

import LeftNav from 'gatsby-theme-carbon/src/components/LeftNav';
import Meta from 'gatsby-theme-carbon/src/components/Meta';
import Header from 'gatsby-theme-carbon/src/components/Header';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import Container from 'gatsby-theme-carbon/src/components/Container';

import 'gatsby-theme-carbon/src/styles/index.scss';

const Layout = ({
    children,
    homepage,
    theme,
    titleType,
    pageTitle,
    pageDescription,
    pageKeywords,
    tabs,
    customNavItems,
    noResourceLinks,
}) => {
    const is404 = children.key === null;

    useLayoutEffect(() => {
        // eslint-disable-next-line global-require
        const scroll = require(`smooth-scroll`)(`a[href*="#"]`, {
            speed: 400,
            durationMin: 250,
            durationMax: 700,
            easing: `easeInOutCubic`,
            clip: true,
            offset: tabs ? 112 : 64,
        });
        return scroll.destroy;
    }, [tabs]);

    return (
        <>
            <Meta
                titleType={titleType}
                pageTitle={pageTitle}
                pageDescription={pageDescription}
                pageKeywords={pageKeywords}
            />
            <Header />
            <Switcher />

            {!homepage && (
                <LeftNav
                    homepage={homepage}
                    is404Page={is404}
                    theme="dark"
                    isCustomNav={!!customNavItems}
                    customNavItems={customNavItems}
                    noResourceLinks={noResourceLinks}
                />
            )}

            <Container homepage={homepage} theme={theme}>
                {children}
                <Footer homepage={homepage} />
            </Container>
        </>
    );
};

export default Layout;
