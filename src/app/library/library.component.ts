import { Library } from "../models/library";
import { Component, OnInit } from "@angular/core";
import { LibraryService } from "../services/library.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  library_entries:Library[]; //create a playlist array
  statusMessage:string;
  library_entry=new Library;
  constructor(private _libraryService:LibraryService) { }

  //get library
  getLibrary():void{
    console.log("Got a library_entry");
    this._libraryService.getLibrary()
      .subscribe((library_entryData)=>this.library_entries=library_entryData,
        (error)=>{console.log(error);
          this.statusMessage="Problem with service. Please try again later";
                  }
          );
          console.log(this.library_entries)
  }

  ngOnInit() {
    this. getLibrary();
  }

}
