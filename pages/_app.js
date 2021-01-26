import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/> 

      <title>Comandos Linux - Quiz Alura</title>
      <meta name="title" content="Comandos Linux - Quiz Alura"/>
      <meta name="description" content=""/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://linuxcommands-quiz.ricardomdesa.vercel.app/"/>
      <meta property="og:title" content={db.title}/>
      <meta property="og:description" content={db.description}/>
      <meta property="og:image" content={db.bg}/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://linuxcommands-quiz.ricardomdesa.vercel.app/"/>
      <meta property="twitter:title" content={db.title}/>
      <meta property="twitter:description" content={db.description}/>
      <meta property="twitter:image" content={db.bg}></meta>
    </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}