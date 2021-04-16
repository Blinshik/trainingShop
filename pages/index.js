import Head from 'next/head'
import Header from '../components/Header.js'
import HomePage from '../components/HomePage.js'

export default function index() {
    return (
        <>
            <Head>
                <title>Shop</title>
            </Head>
            <Header />
            <HomePage />
        </> 
    )
}
