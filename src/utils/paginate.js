import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){


    const startIndex=(pageNumber-1)*pageSize;
    console.log("startIndex",startIndex);

    
    return  _(items)
          .slice(startIndex)
          .take(pageSize)
          .value();







    //_.slice(items,startIndex);
    //_.take(); //how much items you want to take!!
    //.value() change the array from lodash wrapper to regular
    //_items() change the array from regular to lodash wrapper




}