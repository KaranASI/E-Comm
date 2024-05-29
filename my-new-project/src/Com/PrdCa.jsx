import productArray from "./Data";

const ProductCard = (data) => {
  //   let data = productArray(0);
  console.log(data);
  return (
    <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow bg-[rgb(249,60,30)] dark:border-white-700">
      <div className="w-full bg-white rounded-t-lg border-2 border-[rgb(249,60,30)]">
        <img
          className="p-8 rounded-t-lg"
          src={data.images[2]}
          alt="product image"
        />
      </div>

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
        <p className="text-white dark:white">{data.description}</p>

        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
            {data.rating}
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {data.ca}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {"$" + data.price}
          </span>
          <a
            href="#"
            className="text-[rgb(249,60,30)] bg-white hover:bg-slate-300 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-slate-300 "
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
