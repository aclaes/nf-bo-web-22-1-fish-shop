import Head from "next/head";
import {
  getAllCategories,
  getCategoryById,
} from "../../src/services/categoriesService";

export function getStaticPaths() {
  const categories = getAllCategories();
  return {
    paths: categories.map((category) => ({ params: { id: category.id } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const category = getCategoryById(context.params.id);
  return {
    props: { category },
  };
}

export default function Category({ category }) {
  const { id, name, description } = category;

  return (
    <>
      <Head>
        <title>Kategorie: {name}</title>
      </Head>
      <h1>Kategorie: {name}</h1>
      <p>ID: {id}</p>
      <h2>Beschreibung</h2>
      <p>{description}</p>
    </>
  );
}
