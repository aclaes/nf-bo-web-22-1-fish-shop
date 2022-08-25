import { dbConnect } from '../../../src/dbConnect';
import Product from '../../../src/models/productModel';
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(request, response) {
  const session = await unstable_getServerSession(request, response, authOptions)

  if(!session){ 
    response.status(403).json({error:'no-session'})
  }

  await dbConnect();

  if (request.method === 'POST') {
    const data = JSON.parse(request.body);

    await Product.create(data);

    response.status(200).json({
      message: 'product created',
    });
  }
}
