import Head from 'next/head'
import HomePage from '../components/HomePage.js'
import HeaderFooterLayout from '../components/HeaderFooterLayout.js'

export default function index() {
    return (
        <HeaderFooterLayout>
            <Head>
                <title>Markom</title>
            </Head>
            <HomePage />
        </HeaderFooterLayout> 
    )
}
