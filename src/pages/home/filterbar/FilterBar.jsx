import React, { useState } from 'react'
import Ratings from '../../../components/header/ratings/Ratings'

const FilterBar = () => {
  const [filters, setFilters] = useState({
    price: "500",
    rating: 4
  })


  const handleChengeInput = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleOrder = () => {
    const cardShort = Math.floor(filters.price)
    // console.log(cardShort)
    const newShort = [...cardShort].sort((item1, item2) => item1.price - item2.price)
    // console.log(newShort)
    // setFilters(prev => ({}))
    setFilters(prev => ({ ...prev, price: newShort }));
  }

  return (
    <>
      <div className="bg-gray-800 h-screen min-w-[250px] max-[586px]:hidden border-r-2 border-r-gray-400 p-6 text-white sticky top-[3.3rem]">
        {/* Sort Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Sort By</h2>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="asc">Ascending</label>
            <input onClick={handleOrder} type="radio" id="asc" name="sort" className="radio radio-info" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="desc">Descending</label>
            <input type="radio" id="desc" name="sort" className="radio radio-info" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white mb-6"></div>

        {/* Filter Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="outOfStock">Out of Stock</label>
            <input type="checkbox" id="outOfStock" className="checkbox checkbox-neutral" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="someFilter">Another Filter</label>
            <input type="checkbox" id="someFilter" className="checkbox checkbox-neutral" defaultChecked />
          </div>
        </div>
        {/* Ratings Section */}
        <div className='py-3'>

          <Ratings

            defaultRating={filters.rating}
            isEditable={true}
            onRatingChange={(rating) => setFilters(prev => ({
              ...prev,
              rating: rating
            })

            )} />
        </div>

        {/* Range Filter */}

        <div className='py-3'>
          <p className='pb-4'>Price : {filters.price}</p>
          <input
            type="range"
            min="0"
            max="5000"
            name="price"
            value={filters.price}
            onChange={handleChengeInput}
            className="range range-secondary" />
        </div>

        {/* Clear field button */}

        <div className='pt-40 '>
          <button
            className="btn btn-success w-full"
          // onClick={() => setFilters()}
          >Clear</button>
        </div>
      </div>

    </>
  )
}

export default FilterBar