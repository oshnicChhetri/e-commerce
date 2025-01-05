import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const useGetFullProduct = (id) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/products/product/${id}`);
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setProduct(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return { loading, product };
};

export default useGetFullProduct;
