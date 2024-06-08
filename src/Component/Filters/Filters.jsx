import React from 'react'

const Filters = ({sortOrder, handleSortChange ,sortByPriceOrder,handleSortByPriceOrderChange }) => {
  return (
    <div className='sort_section'>
    Sort Order:
    <select value={sortOrder} onChange={handleSortChange}>
        <option value='aec'>Ascending</option>
        <option value='desc'>Descending</option>
    </select>
    Sort By Price:
    <select value={sortByPriceOrder} onChange={handleSortByPriceOrderChange}>
        <option value='aec'>Low to High</option>
        <option value='desc'>High to Low</option>
    </select>
</div>
  )
}

export default Filters