import db from '@/utils/db';

export const fetchFeaturedProducts = async()=>{
const produkty = await db.product.findMany({
    where:{
        featured:true
    }
})
return produkty;
}

export const fetchAllProducts = () => {
  return db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};