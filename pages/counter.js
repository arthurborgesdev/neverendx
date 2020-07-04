import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/'

export default function Counter() {
  const [count, setCount] = useState(0);

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
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
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
      <style jsx global>{`
        main {
          display: grid;
          grid-template-columns: [line-start] 30% [line-2] auto [line-3] 30%;
          grid-template-rows: [row-start] 40% [row-2] auto;
        }

        .header {
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

        .header p {
          font-family: Orbitron;
          font-size: 1em;
          color: #000;
          margin: 0 10px 0 10px;
          padding: 0;
          letter-spacing: 1px;
          line-height: 150%;
          word-spacing: 2px;
        }

        .content {
          grid-column-start: line-2;
          grid-column-end: line-3;
          grid-row-start: row-2;
          width: 100px;
          height: 30px;
        }

        .content p {
          padding: 50px;
        }

        .content button {
          width: 20px;
          height: 20px;
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