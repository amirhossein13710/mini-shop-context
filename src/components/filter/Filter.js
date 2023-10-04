import React,{useContext} from 'react'
import "./Filter.css"
import { DataContext } from '../../Context'
const Filter = () => {
    const value = useContext(DataContext)
    const [products,setProducts] = value.products
    const sortProduct = value.sortProduct
    const filterProducts = value.filterProducts
  return (
    <div className='filter'>
        <div className='result'>
             تعداد محصولات : {products.length} محصول
        </div>
        <div className='sort'>
            <div className='sort-title'>مرتب سازی بر اساس</div>
            <div className='form-check-box'>
                <div className='form-group'>
                    <input 
                    type='radio' 
                    name='filter' 
                    value="asc"
                    onChange={sortProduct}    
                    />
                    <label>جدیدترین محصولات</label>
                </div>
                <div className='form-group'>
                    <input 
                    type='radio' 
                    name='filter' 
                    value="desc"
                    onChange={sortProduct}    
                    />
                    <label>قدیمی ترین محصولات</label>
                </div>
            </div>
        </div>
        <div className='brands'>
            برندها
            <select onChange={filterProducts}>
                <option value="all">همه</option>
                <option value="samsung">سامسونگ</option>
                <option value="iphon">ایفون</option>
                <option value="motorola">موتورولا</option>
                <option value="blackberry">بلک بری</option>
                <option value="lg">ال جی</option>
                <option value="sony">سونی</option>
            </select>
        </div>
    </div>
  )
}

export default Filter