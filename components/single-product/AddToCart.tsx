import { Button } from '../ui/button';

function AddToCart({ productId }: { productId: string }) {
  void productId;

  return (
    <Button className='capitalize mt-8' size='lg'>
      dodaj do koszyka
    </Button>
  );
}

export default AddToCart;
