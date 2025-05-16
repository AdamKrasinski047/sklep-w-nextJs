'use server';

import db from '@/utils/db';
import { redirect } from 'next/navigation';
import { renderError } from './error';
import { getAuthUser } from './auth'; // make sure this file exists
import { productSchema } from './schema';

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    redirect('/products');
  }

  return product;
};

export const fetchFeaturedProducts = async () => {
  return db.product.findMany({
    where: {
      featured: true,
    },
  });
};

export const fetchAllProducts = ({ search = '' }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = productSchema.safeParse(rawData);

    if (!validatedFields.success) {
      const errors = validatedFields.error.errors.map((error) => error.message);
      throw new Error(errors.join(', '));
    }

    await db.product.create({
      data: {
        ...validatedFields.data,
        image: '/images/product-1.jpg', // tymczasowe — potem Supabase
        clerkId: user.id,
      },
    });

    return { message: 'product created' };
  } catch (error) {
    return renderError(error); // np. { message: 'name must be at least 2 characters.' }
  }
};
