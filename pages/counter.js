import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDev, faLinkedinIn } from '@fortawesome/free-brands-svg-icons/'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/'

export default function Counter() {
  return (
    <>
      <Head>
        <title>Neverendx - Arthur Borges's never ending portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/382832813c.js" crossorigin="anonymous"></script>
      </Head>
      <main>
        <section className="header">
          <h1>Counter Component</h1>
          <p>Why such a basic counter component? Because it is the Hello World of React,
            so it makes sense to become my first portfolio's React component. :)
          </p>
        </section>
        <section className="content">
          <div className="profile">
            <div className="photo-container">
              <img src="/images/avatar.jpeg" alt="Arthur Borges's profile photo" className="photo" />
            </div> 
            <div className="social">
              <div className="icons-container">
                <a href="https://github.com/arthurborgesdev" target="_blank">
                  <FontAwesomeIcon className="icon github-icon" icon={faGithub} />
                </a>
                <a href="https://dev.to/arthurborges" target="_blank">
                  <FontAwesomeIcon className="icon dev-icon" icon={faDev} />
                </a>
                <a className="github-icon" href="https://linkedin.com/in/arthurmoises" target="_blank">
                  <FontAwesomeIcon className="icon linkedin-icon" icon={faLinkedinIn} />
                </a>
              </div>
            </div>  
          </div>
          <article className="about">
            <p>
              Hello!! My name is Arthur Borges and this is my portfolio that never ends.
              Here every page is a React Component like this one, developed using Next.js
              and served by Vercel's platform. Click on the arrow on the right to navigate 
              through pages. Enjoy! 
            </p>
          </article>
        </section>
        <section className="previous-page-icon">
          <Link href="/">
            <a><FontAwesomeIcon className="chevron-left-icon" icon={faChevronLeft} /></a>
          </Link>
        </section>
        <section className="next-page-icon">
          <Link href="/google">
            <a><FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} /></a>
          </Link>
        </section>
      </main>
    </>
  );
}