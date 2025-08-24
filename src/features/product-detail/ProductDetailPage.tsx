import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "@app/store/store";
import { ProductDetails } from "@features/product-detail/components/ProductDetails";
import { Slider } from "@features/product-detail/components/Slider";
import { Loading } from "@components/loading/Loading";

export function ProductDetailPage() {
  const { products } = useSelector((state: RootState) => state.productList);
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.productId === id);

  if(!product) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 md:col-span-6 bg-white py-7 px-7"><Slider mediaUrls={product.mediaUrls || []} /></div>
      <div className="col-span-12 md:col-span-6 bg-white py-7 px-7"><ProductDetails product={product}/></div> 
    </div>
  );
}