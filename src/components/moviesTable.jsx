import React, { Component } from 'react';
import Like from './common/like';
import Table  from './common/table';
import { Link } from 'react-router-dom';
import auth from '../services/authService';
class MoviesTable extends Component {
   columns=[ {path:'title',label:'Title', content:x=><Link to={`/movies/${x._id}`}>{x.title}</Link>},
             {path:'genre.name',label:'Genre'},
             {path:'numberInStock',label:'Stock'},
             {path:'dailyRentalRate',label:'Rate'},
             {key:'like', content: x=> <Like liked={x.liked} onLike={()=>this.props.onLLike(x) } />}
            //  {key:'Delete', content:x=><button className="btn btn-danger btn-sm" id={index} onClick={()=>{this.props.onDelete(index)}}>Delete</button>},
            

   ];
  deleteColumn= {key:'Delete2',  content :x=><button className="btn btn-danger btn-sm"  onClick={()=>{this.props.onDelete2(x)}}>Delete</button>};

   constructor(){
     super();
     const user=auth.getCurrentUser();
     if(user && user.isAdmin)
      this.columns.push(
           this.deleteColumn);
   }

    render() { 

    const {paginatemov,  sortColumn,onSort, }=this.props;
    console.log(paginatemov);

    return ( 
      <Table  columns={this.columns} data={paginatemov} onSort={onSort} sortColumn={sortColumn}/>
     );
        
    }
}
 
export default MoviesTable ;





