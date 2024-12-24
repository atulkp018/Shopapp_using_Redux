import { useState } from "react";  // Removed useEffect since we won't need it
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { products } from "./../data";

const Home = () => {
  // Commented out API-related code
  // const API_URL = "https://fakestoreapi.com/products";
  const [loading] = useState(false);  // Kept for potential future use
  const [posts] = useState(products);  // Directly use products from data.js

  // Commented out API fetch function since we're using local data
  /*
  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      // setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      // setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])
  */

  return (
    <div>
      {
        loading ? <Spinner /> :
        posts.length > 0 ? 
        (<div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map((post) => (
              <Product key={post.id} post={post}/>
            ))
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
