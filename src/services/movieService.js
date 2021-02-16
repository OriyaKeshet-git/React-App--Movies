import http from './httpService';

// import {apiUrl} from '../config.json';

// const apiEndpoint=apiUrl + "/movies";
const apiEndpoint="/movies";

export function getMovies()
{
    return http.get(apiEndpoint);
}


export function deleteMovie(movieId){

  return http.delete(getMovieUrl(movieId));
}

export function getMovie(movieId)
{
    return http.get(getMovieUrl(movieId));
}

function getMovieUrl(id){
      // private function with no export!
    // return apiEndpoint+'/'+id;
    return `${apiEndpoint}/${id}`;
}







export function saveMovie(movie) {
    if(movie._id){
        const body={...movie};
        delete body._id;
        return http.put(getMovieUrl(movie._id),  body);//update the object we do not want to have id property in the object body we pass because it is can be confusing if in the property and the url will be different in the id

    }
    
    return http.post(apiEndpoint,movie);// to add the movie if it do not have id property

  }