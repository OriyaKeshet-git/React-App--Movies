import React, { Component } from 'react';
//columns:array
//sortColumn:object
//onSort:function

class TableHeader extends Component {


    raiseSort=path=>{
        
        const newSortColumn={...this.props.sortColumn};
          if(newSortColumn.path===path){
            
              newSortColumn.order=(newSortColumn.order==='asc') ? 'desc' :'asc';
              
          }
          else{
             newSortColumn.path=path;
             newSortColumn.order='asc';
          }
    
        
          this.props.onSort(newSortColumn);
    
       };

       renderSortIcon=(column)=>{
        const {sortColumn}=this.props;
         if(column.path!==sortColumn.path)
         {
             return null;
         }
         if(sortColumn.order==='asc') return <i className="fa fa-sort-asc"></i>;
         return <i className="fa fa-sort-desc"></i>


       }



    render() { 
        return (<thead>
            <tr>
               { this.props.columns.map(x=><th className="clickable" key={x.path || x.key} onClick={()=>{this.raiseSort(x.path)}}>{x.label}{this.renderSortIcon(x)}</th>)}
            </tr>
        </thead>  );
    }
}
 
export default TableHeader;