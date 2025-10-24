import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <>
            <Header />
            <div style={{ minHeight: "580px", marginTop: "60px" }}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout