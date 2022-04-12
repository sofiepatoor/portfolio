import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sofie Patoor // Portfolio</title>
        <meta name="description" content="Sofie Patoor's portfolio website" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Title>
        Hello!
      </Title>
      <Intro>
        Great, you&apos;ve found my portfolio website! Unfortunately it&apos;s still under construction.
        <br />
        <br />
        In the meantime, you can find or reach me on these platforms:
      </Intro>
      <Socials>
        <SocialsItem><a href="https://www.linkedin.com/in/sofiepatoor" target="_blank" rel="noopener noreferrer">LinkedIn</a></SocialsItem>
        <SocialsItem><a href="https://github.com/sofiepatoor" target="_blank" rel="noopener noreferrer">Github</a></SocialsItem>
        <SocialsItem><a href="mailto:sofie.patoor@gmail.com">Email</a></SocialsItem>
      </Socials>
    </>
  )
};

const Title = styled.h1`
  margin: 0 0 0.8em;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Intro = styled.p`
  font-size: 1.6rem;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
`;

const Socials = styled.ul`
  list-style: none;
  padding: 2.2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const SocialsItem = styled.li`
  width: 100%;

  @media (min-width: 480px) {
    width: auto;
    margin-right: 1rem;
  }
`;
