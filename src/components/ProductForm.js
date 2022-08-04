import { useState } from "react";

export default function ProductForm({ categories, product, onSubmit }) {
  const [name, setName] = useState(product?.name ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [price, setPrice] = useState(product?.price ?? "");
  const [category, setCategory] = useState(product?.categoryId ?? "");

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      name,
      description,
      price,
      category,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name{" "}
          <input
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Description{" "}
          <input
            name="description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Price{" "}
          <input
            name="description"
            type="number"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Kategorie
          <select
            name="category"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button type="submit">submit</button>
    </form>
  );
}
