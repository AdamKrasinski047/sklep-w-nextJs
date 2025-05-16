'use server';

import db from '@/utils/db';
import { redirect } from 'next/navigation';
import { renderError } from './error';
import { getAuthUser } from './auth';
import {
  productSchema,
  imageSchema,
  validateWithZodSchema,
} from './schema';
import { uploadImage } from '@/utils/supabase'; 

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
    const file = formData.get('image') as File;

    const validatedFields = validateWithZodSchema(productSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });

    const imageUrl = await uploadImage(validatedFile.image);

    await db.product.create({
      data: {
        ...validatedFields,
        image: imageUrl,
        clerkId: user.id,
      },
    });

    return { message: 'product created' };
  } catch (error) {
    return renderError(error);
  }

  redirect('/admin/products');
};
