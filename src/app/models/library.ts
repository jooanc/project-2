import { Playlist } from "./playlist";

export  class Library{
    id:number;
    title: string;
    album: string;
    artist: string;
    genre: string;
    playlists:Playlist[]; 
    constructor(){
        
    }
}