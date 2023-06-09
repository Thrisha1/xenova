"use client"
import React from 'react';
import { Providers } from "@/redux/provider";
import Header from '../components/Header.jsx'
// import Footer from '../components/Footer.jsx'
import Footer_common from "../components/Footer_common.jsx"
import './globals.css'
import { ApolloProvider } from '@apollo/client'
import graphQLClient from '../functions/graphql/apolloClient';

const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  const client = graphQLClient();
  return (
    <html lang="en">
      <body className=" ">
        <ApolloProvider client={client}>
          <Providers>
            <Header />
            {children}
            <Footer_common />
          </Providers>
        </ApolloProvider>
      </body>
    </html>
  )
}
