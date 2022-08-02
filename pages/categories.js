import Head from 'next/head';
import Link from 'next/link';

export default function Categories() {
  return (
    <>
      <Head>
        <title>Alle Kategorien</title>
      </Head>
      <h1>Kategorien</h1>
      <p>Liste aller Kategorien</p>
      <ul>
        <li>
          <Link href="/category/meerwasser">
            <a>Meerwasser</a>
          </Link>
        </li>
        <li>
          <Link href="/category/muscheln">
            <a>Muscheln</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
