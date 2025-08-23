import type { RootState } from "@app";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ProductDetails, Slider } from "@features";
import { Loading } from "@components";

export function ProductDetailPage() {
  const { products } = useSelector((state: RootState) => state.productList);
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.productId === id);

  if(!product) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="col-span-12 md:col-span-6"><Slider mediaUrls={product.mediaUrls || []} /></div>
      <div className="col-span-12 md:col-span-6"><ProductDetails product={product}/></div> 
    </div>
  );
}