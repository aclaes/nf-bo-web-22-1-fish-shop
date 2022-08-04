import Head from 'next/head';
import Link from 'next/link';
import { getAllProducts } from '../src/services/productsService';

export async function getStaticProps() {
  const products = await getAllProducts();

  console.log(products);

  return {
    props: { products },
  };
}

export default function Products({ products }) {
  return (
    <>
      <Head>
        <title>Alle Produkte</title>
      </Head>
      <h1>Produkte</h1>
      <p>Liste aller Produkte</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              <a>{product.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
