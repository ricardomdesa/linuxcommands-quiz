import styled from 'styled-components'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import GitHubCorner from '../src/components/GitHubCorner'
import Link from '../src/components/Link'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>
          AluraQuiz - {db.title}
        </title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget 
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input 
              name = "nomeDoUser"
              onChange = {(e) => setName(e.target.value)}
              placeholder="Diz ai seu nome"
              value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((link, index) => {
                const [projName, githubUser] = link
                  .replace(/\//g,'')
                  .replace('https:','')
                  .replace('.vercel.app','')
                  .split('.');

                return (
                <li key={link}>
                  <Widget.Topic 
                    as={Link}
                    href={`/quiz/${projName}___${githubUser}`}
                  >
                      {`${githubUser}/${projName}`}
                  </Widget.Topic>
                </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer 
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ricardomdesa" />
    </QuizBackground>
  );
}