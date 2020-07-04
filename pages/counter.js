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
          <button onClick={() => setCount(count + 1)}></button>
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