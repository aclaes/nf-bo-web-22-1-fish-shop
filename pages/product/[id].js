import { useRouter } from 'next/router';
import Head from 'next/head';
import ProductForm from '../../src/components/ProductForm';
import { getAllCategories } from '../../src/services/categoriesService';
import { getProductById } from '../../src/services/productsService';
import { useFetch } from '../../src/hooks/useFetch';

export async function getServerSideProps(context) {
  const categories = await getAllCategories();
  const product = await getProductById(context.params.id);

  return {
    props: {
      product,
      categories,
    },
  };
}

export default function Product({ product, categories }) {
  const router = useRouter();
  const fetchApi = useFetch();

  async function handleSubmit(data) {
    await fetchApi(`/api/product/${product.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });

    router.push('/products');
  }

  async function handleDelete() {
    await fetchApi(`/api/product/${product.id}`, {
      method: 'DELETE',
    });

    router.push('/products');
  }

  const { id, name } = product;

  return (
    <>
      <Head>
        <title>Produkt: {product.name}</title>
      </Head>
      <h1>Produkt: {name}</h1>
      <p>ID: {id}</p>
      <ProductForm
        onSubmit={handleSubmit}
        categories={categories}
        product={product}
      />
      <button type="button" onClick={handleDelete}>
        Produkt löschen
      </button>
    </>
  );
}
