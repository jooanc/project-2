import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  //create array
  // public books:Book[]=[ {"id":1,"title":"Java","author":"Martin","price":100},
  //                   {"id":2,"title":"javaScript","author":"Mark","price":200},
  //                   {"id":3,"title":"JQuery","author":"Maryin","price":300},
  //                   {"id":4,"title":"The Split in the Universe","author":"Thanos","price":0}];

  
  //return book array
  // getBooks():Book[]{
  //   return this.books;
  // }
  //get all books
  getLibrary():Observable<any>{//asynchronous
    return this._httpService.get("http://localhost:8080/Pear/api/library_entries")
  }
  constructor(private _httpService:HttpClient) { }

// //add a new book
//   addBook(book:Book){
//     let body=JSON.parse(JSON.stringify(book));
//     if(!book.id){
//       console.log("Entered for updates ");
//        return this._httpService.put("http://localhost:8090/Rev_SpringMVC_Hello/api/books",body);
//     }
//     else{
//       console.log("Entered in new");
//       return this._httpService.post("http://localhost:8090/Rev_SpringMVC_Hello/api/books/",body);
//     }
//   }

//   //delete book
//   deleteBook(bookId:number){
//     return this._httpService.delete("http://localhost:8090/Rev_SpringMVC_Hello/api/books/"+bookId);
//   }
  
//   //get a book
//   getBookById(bookId:number):Observable<any>{
//     return this._httpService.get("http://localhost:8090/Rev_SpringMVC_Hello/api/books/"+bookId);
//   }
}
