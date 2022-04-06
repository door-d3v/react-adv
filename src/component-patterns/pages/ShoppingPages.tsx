import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/';

const product = {
  id: '1',
  title: 'Coffee Mug Card',
  img: './coffee-mug.png',
};

const ShoppingPages = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Compound Component Pattern */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPages;
