const AllProductSidebar = () => {
    return (
        <div className="all-product-sidebar fixed w-[280px] mx-10 mt-28 overflow-y-auto inset-0 z-10">
          <PriceRenge />
          <Category />
          <Ratings />
        </div>
    );
};

export default AllProductSidebar;


const PriceRenge = () => {
    return (
        <div className="price-range p-3 w-[250px] rounded border border-gray-200 my-10">
          <h2 className="border-l-2 p-3 text-2xl">Price Renge</h2>
          <ul className="p-2 space-y-2">
            <li> <input type="checkbox" name="price1" id="price1" /> <label className="px-2" htmlFor="price1">$20.00 - $50.00</label> </li>
            <li> <input type="checkbox" name="price2" id="price2" /> <label className="px-2" htmlFor="price2">$20.00 - $50.00</label> </li>
            <li> <input type="checkbox" name="price3" id="price3" /> <label className="px-2" htmlFor="price3">$20.00 - $50.00</label> </li>
            <li> <input type="checkbox" name="price4" id="price4" /> <label className="px-2" htmlFor="price4">$20.00 - $50.00</label> </li>
          </ul>
        </div>
    );
};

const Category = () => {
    return (
        <div className="category p-3 w-[250px] rounded border border-gray-200 my-10">
          <h2 className="border-l-2 p-3 text-2xl">Category / Brands</h2>
            <ul className="p-2 space-y-2">
                <li><input type="checkbox" name="category1" id="category1" /> <label className="px-2" htmlFor="category1"> Category 1 </label> </li>
                <li><input type="checkbox" name="category2" id="category2" /> <label className="px-2" htmlFor="category2"> Category 2 </label> </li>
                <li><input type="checkbox" name="category3" id="category3" /> <label className="px-2" htmlFor="category3"> Category 3 </label> </li>
                <li><input type="checkbox" name="category4" id="category4" /> <label className="px-2" htmlFor="category4"> Category 4 </label> </li>
            </ul>
        </div>
    );
}

const Ratings = () => {
    return (
        <div className="ratings p-3 w-[250px] rounded border border-gray-200 my-10">
          <h2 className="border-l-2 p-3 text-2xl">Ratings</h2>
            <ul className="p-2 space-y-2">
                <li><input type="checkbox" name="rating1" id="rating1" /> <label className="px-2" htmlFor="rating1">1 Star </label> </li>
                <li><input type="checkbox" name="rating2" id="rating2" /> <label className="px-2" htmlFor="rating2">2 Star </label> </li>
                <li><input type="checkbox" name="rating3" id="rating3" /> <label className="px-2" htmlFor="rating3">3 Star </label> </li>
                <li><input type="checkbox" name="rating4" id="rating4" /> <label className="px-2" htmlFor="rating4">4 Star </label> </li>
            </ul>
        </div>
    );
}