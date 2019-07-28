import { Component, OnInit } from '@angular/core';
import { Playlist } from '../models/playlist';
import { Library } from '../models/library';
import { PlaylistService } from '../services/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlists:Playlist[]; //create a playlist array
  library_entry= new Library;
  statusMessage:string;
  playlist=new Playlist;

  constructor(private _playService:PlaylistService) { }
    //get all playlists
    getPlaylists():void{
      console.log("Got a Playlist");
      this._playService.getPlayists()
        .subscribe((playlistData)=>this.playlists=playlistData,
          (error)=>{console.log(error);
            this.statusMessage="Problem with service. Please try again later";
                    }
            );     
    }

  ngOnInit() {
    this. getPlaylists();
  }

}

