import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons/'

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let zeroCount = 0;
    if (count < 0) setCount(zeroCount);
  }, [count]);

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
          <p>Why such a basic counter component? Because it is the "Hello World" of React,
            so it makes sense to become my first portfolio's React component. :)
          </p>
        </section>
        <section className="container">
          <section className="previous-page-icon">
            <Link href="/">
              <a><FontAwesomeIcon className="chevron-left-icon" icon={faChevronLeft} /></a>
            </Link>
          </section>
          <section className="content">
            <a onClick={() => setCount(count + 1)}>
              <FontAwesomeIcon className="plus-circle-icon" icon={faPlusCircle} />
            </a>
            <span>Counter: {count < 0 ? 0 : count}</span> 
            <a onClick={() => setCount(count - 1)}>
              <FontAwesomeIcon className="minus-circle-icon" icon={faMinusCircle} />
            </a>
          </section>
          <section className="next-page-icon">
            <Link href="/google">
              <a><FontAwesomeIcon className="chevron-right-icon" icon={faChevronRight} /></a>
            </Link>
          </section>
        </section>   
      </main>
      <style jsx global>{`
        .header {
          padding-right: 30%;
          padding-left: 30%;
          width: 480px;
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

        .header p, .content span {
          font-family: Orbitron;
          font-size: 1em;
          color: #000;
          margin: 0 10px 0 10px;
          padding: 0;
          letter-spacing: 1px;
          line-height: 150%;
          word-spacing: 2px;
        }

        .container {
          display: flex;
          justify-content: space-evenly;
        }

        .content {
          margin-top: 100px;
        }

        .content a {
          padding: 0 10px 0 10px;
        }

        .plus-circle-icon,  .minus-circle-icon {
          font-size: 32px;
          color: #0B70D7;
          cursor: pointer;
        }  
      
        .chevron-right-icon, .chevron-left-icon {
          font-size: 48px;
          color: #0B70D7;
        }
     `}</style>
    </>
  );
}