import Head from 'next/head';
import Link from 'next/link';

export default function Products() {
  return (
    <>
      <Head>
        <title>Alle Produkte</title>
      </Head>
      <h1>Produkte</h1>
      <p>Liste aller Produkte</p>
      <ul>
        <li>
          <Link href="/product/guppy">
            <a>Guppy</a>
          </Link>
        </li>
        <li>
          <Link href="/product/regenbogenfisch">
            <a>Regenbogenfisch</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
