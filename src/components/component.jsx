import { getMovies } from '../services/movieService';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {toast} from 'react-toastify';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import ListGroup from './common/listgroup';
import {getGenres} from '../services/genreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './searchBox';
import { deleteMovie } from '../services/movieService';
class Mov extends Component {
    state = {
        
        mov: [],
        pageSize:4,
        currentPage:1,
        genres: [],
        sortColumn:{path: 'title', order:'asc'},
        searchQuery:"",
        selectedGenre:null

        
        
        
       }
       constructor(){
           super();
           console.log(this.state.mov);
       }

async componentDidMount(){
  const {data}=await getGenres();
  const {data: movies}=await getMovies();
  const newgenres=[{_id:'',name:'All Genres'},...data];
  this.setState({mov: movies, genres: newgenres});
}

handleSearch=query=>{
//const query=e.currentTarget.value;
this.setState({searchQuery: query, selectedGenre: null, currentPage:1});
}







getPageData(){
  const {pageSize,sortColumn,selectedGenre,searchQuery, currentPage}=this.state;
  let filtered=this.state.mov;
  if(searchQuery)
      filtered=this.state.mov.filter(m=>
         m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
  
    else if(selectedGenre && selectedGenre._id)     
   filtered=  this.state.mov.filter(m=> m.genre._id===selectedGenre._id);

  const sorted=_.orderBy(filtered,[sortColumn.path],[sortColumn.order]);

  const paginatemov=paginate(sorted,currentPage,pageSize);

  return {totalCount: filtered.length, data:paginatemov};
}


    render() {

      const {pageSize,sortColumn, currentPage}=this.state;
      const {length:moveCount}=this.state.mov;
      const {user}=this.props;
       if(moveCount===0) return <p>There are no movies in the database.</p>
       
      
      const {totalCount, data:paginatemov}=this.getPageData();  //destructuring the argument we wants!!
//אנחנו מקבלים את הערכים טוטאלקאונט ודאטה שהפונקציה מחזירה ומשנים את השם של דאטה ל-פאגינאטמובב

        return ( 
   
    
   
    <div className="container">
    <div className="row">

    <div className="col-3">
    <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre}  onItemSelect={this.handleGenresSelect}/>
    </div>
    <div className="col">
    {user &&<Link to="/movies/new" className="btn btn-primary" style={{marginBootom:20}}>
      New Movie
    </Link>}
    <p style={{fontWeight:'bold', fontSize:20}}>Showing  {totalCount}  movies in the database.</p>
    <SearchBox value={this.state.searchQuery} onChange={this.handleSearch}/>
    <MoviesTable onLLike={this.handleLike}
    sortColumn={sortColumn} 
    paginatemov={paginatemov} 
    
    onDelete2={this.handleDelete2} 
    onSort={this.handleSort} ></MoviesTable>
<Pagination currentPage={currentPage}  itemCount={totalCount} pageSize={pageSize}  onPageChange={this.handlePageChange}
/>



    </div>
    
  </div>
</div>
    
       



    );
    }


    handleSort=newSortColumn=>{

      
      
      this.setState({sortColumn:newSortColumn});
    }

    handleGenresSelect=genre=>{

     console.log(genre);
     this.setState({selectedGenre: genre,  searchQuery:"", currentPage:1});


    }

  handlePageChange=page=>{
  
    this.setState({currentPage:page});
    //const newArr=paginate(this.state.mov,page,this.state.pageSize);


  }


    handleLike=(x)=>{

      console.log("this",this);
    
      const newL=[...this.state.mov];
      const index=newL.indexOf(x);
      newL[index]={...x};
      newL[index].liked=!newL[index].liked;
     
      this.setState({mov:newL});


    }

    handleDelete=(id)=>{
          
      let newMov=[...this.state.mov];
       //console.log(newMov);
      newMov=newMov.filter((obj, index)=> index!==id);
      //console.log(newMov);
      this.setState({mov:newMov});

  
      }


      //the second way to change the list...we do not copy the mov we just get by fulter something similar without the one we delete
      handleDelete2=async (movie)=>{
        const originalMovies=this.state.mov;
        const mov=originalMovies.filter(item=>item._id!==movie._id);
        
        this.setState({mov:mov});

      try{await deleteMovie(movie._id);}
       catch(ex){
         if(ex.response&&ex.response.status===404)
               toast.error("this movie  has already been deleted!");
        this.setState({mov:originalMovies});  
       }
      }
}
 
export default Mov;