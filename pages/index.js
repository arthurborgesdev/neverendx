import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDev, faLinkedinIn } from '@fortawesome/free-brands-svg-icons/'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/'

export default function Home() {
  return (
    <>
      <Head>
        <title>Neverendx - Arthur Borges's never ending portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/382832813c.js" crossorigin="anonymous"></script>
      </Head>
      <main>
        <section className="header">
          <img src="/images/neverendx-logo-resized.svg" alt="Neverendx Logo" className="logo" />
          <h1>A journey that never ends</h1>
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
        <section className="next-page-icon">
          <Link href="/counter">
            <a><FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} /></a>
          </Link>
        </section>
      </main>
      <style jsx global>{`
        main{
          display: grid;
          grid-template-columns: [line-start] 30% [line-2] auto [line-3] 30%;
          grid-template-rows: [row-start] 40% [row-2] auto;
        }
  
        main .header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          grid-column-start: line-2;
          grid-column-end: line-3;
          grid-row-start: row-start;
        }
        
        h1 {
          font-family: Orbitron;
          font-size: 1.2em;
          color: #0B70D7;
          text-align: center;
          margin-top: 5px;
          letter-spacing: 2px;
        }
        
        h1:after {
          content: "";
          display: block;
          width: 480px;
          height: 3px;
          background: black;
          margin: 5px auto;
        }
  
        .content {
          display: flex;
          grid-column-start: line-2;
          grid-column-end: line-3;
          grid-row-start: row-2;
          margin: 20px 30px 0 30px;
        }
        
        .profile {
          flex-basis: 20%;
          margin: 0 25px 0 10px;
        }
        
        .photo {
          border-radius: 50%;
          border: 3px solid #0B70D7;
          width: 150px;
          height: 150px;
        }
        
        .icons-container {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
  
        .icon {
          font-size: 28px;
          width: 30px;
          height: 30px;
          color: #0B70D7;
        }
        
        .about p, main p, .header p {
          font-family: Orbitron;
          font-size: 1em;
          color: #000;
          margin: 0 10px 0 10px;
          padding: 0;
          letter-spacing: 1px;
          line-height: 150%;
          word-spacing: 2px;
        }
        
        .next-page-icon {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          grid-column-start: line-3;
          grid-row-start: row-2;
        }
  
        .previous-page-icon {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          grid-column-start: line-start;
          grid-column-end: line-2;
          grid-row-start: row-2;
        }
      
        .chevron-right-icon, .chevron-left-icon {
          font-size: 48px;
          color: #0B70D7;
        }  
      `}</style>
    </>
  );
}