import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
class Pagination extends Component {
    state = {  }
    render() { 


       const {itemCount, pageSize, currentPage, onPageChange}= this.props;
       console.log("CurrentPage",currentPage);
       const pagesCount=Math.ceil(itemCount/pageSize);
       if (pagesCount===1) return null;
       const pages= _.range(1,pagesCount+1);//we add 1 to the pagesCount because it do not include the last!


        return (<nav aria-label="Page navigation example">
        <ul className="pagination">
         
         {  pages.map(p=><li key={p} className={ p===currentPage ? "page-item active " : "page-item" } 
                        onClick={()=>onPageChange(p)}>
                        <a className="page-link" href="#">{p}</a>
             
                        </li>)
                        
        }    

        </ul>
      </nav>  );
    }
}

Pagination.propTypes={
    itemCount:PropTypes.number.isRequired,
     pageSize:PropTypes.number.isRequired,
      currentPage:PropTypes.number.isRequired,
       onPageChange:PropTypes.func.isRequired
    
    };
export default Pagination;