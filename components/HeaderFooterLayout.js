import Footer from '../components/Footer.js'
import Header from '../components/Header.js'

import React from 'react'

export default function HeaderFooterLayout({ children }) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}
