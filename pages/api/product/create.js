import { dbConnect } from "../../../src/dbConnect";
import Product from "../../../src/models/productModel";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    const data = JSON.parse(request.body);

    await Product.create(data);

    response.status(200).json({
      message: "product created",
    });
  }
}
