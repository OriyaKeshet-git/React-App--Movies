import React from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

//זה צורה שבה הפונקציה מקבלת בתור ארגיומנט את המשתנים המסויימים של הפרופס!

const Table = ({   columns, data, onSort, sortColumn      }) => {
   
    

    return (  <table className="table">
    <TableHeader  columns={columns} sortColumn={sortColumn} onSort={onSort}/>
    <TableBody data={data} columns={columns} />
   </table>);
}
 
export default Table;