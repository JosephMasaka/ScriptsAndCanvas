import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Products from "@/components/Products";
import ProductsCta from "./ProductsCta";

export const metadata: Metadata = {
  title: "Products — Scripts&Canvas",
  description:
    "Explore our SaaS products: LipaPoint POS system and TunzaAssets asset management platform.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        number="02"
        title="Our Products"
        subtitle="SaaS products we've built and launched — solving real problems for real businesses."
      />
      <Products />
      <ProductsCta />
    </>
  );
}
