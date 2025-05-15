'use server';

import db from '@/utils/db';
import { redirect } from 'next/navigation';
import { renderError } from './error';
import { getAuthUser } from './auth'; // make sure this file exists

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
  try {
    const user = await getAuthUser();

    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const price = Number(formData.get('price'));
    const image = formData.get('image') as File;
    const description = formData.get('description') as string;
    const featured = formData.get('featured') === 'on';

    if (!name || !company || isNaN(price) || !description) {
      return { message: 'Wszystkie pola są wymagane' };
    }

    await db.product.create({
      data: {
        name,
        company,
        price,
        image: '/images/product-1.jpg',
        description,
        featured,
        clerkId: user.id,
      },
    });

    return { message: 'Produkt utworzony pomyślnie!' };
  } catch (error) {
    return renderError(error);
  }
};
