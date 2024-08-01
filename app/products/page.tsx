import Image from 'next/image'
import Link from 'next/link'
import products from '../../devcamp_products.json';

import Header from '../components/header';
import Footer from '../components/footer';

interface Products {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  photo: string;
  datems: number;
}

export default function Page() {
  const productList: Products[] = products
    .sort((a, b) => b.datems - a.datems)
    .slice(0, 10);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Header />
      <div className="flex-col w-full min-h-screen max-w-5xl items-center justify-between p-6 bg-slate-50">
        <h1 className="text-4xl font-bold mb-6">Products</h1>
        {productList.map((product) =>
          <div className="inline-block bg-slate-100 p-4 h-[380px] items-center border border-slate-200" key={product.id}>
              <div className="p-3">
                <Link href={`/products/${product.id}`}>
                  <Image className="p-2"
                    src={product.photo}
                    width={180}
                    height={180}
                    alt={product.name}
                  />
                </Link>
              </div>
              <div className="grow p-3 w-[180px] h-[72px]">
                <Link href={`/products/${product.id}`}>{product.name}</Link>
              </div>
              <div className="grow p-6 text-right">
                <p>{product.price}円</p>
              </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}