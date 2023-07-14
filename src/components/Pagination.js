import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ detailsPerPage, detail, paginate }) => {

    const pageNumber = []

    for(let i = 1; i <= Math.ceil(detail/detailsPerPage); i++){
        pageNumber.push(i)
    }

  return (
    <nav>
        <ul className='pagination'>
            {pageNumber.map((number) => {
                return (
                    <li key={number} className='page-item'><Link onClick={()=>{paginate(number)}} to='/details' className='page-link'>{number}</Link></li>
                )
            })}

        </ul>
    </nav>
  )
}

export default Pagination
