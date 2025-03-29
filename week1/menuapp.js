// menu app for week 8 project 
//collecting user input to build a playlist(s) with songs and artist names

class Song { //prompted user input collects song name first, artist name second
    constructor (song, artist){
    this.song = song;
    this.artist = artist;
    }

    describe (){ //output returns artist name first, song name second
        return `${this.artist} plays ${this.song}`;
    }
    }

    class Playlist { //creates an array of user inpout for songs, output returns playlist name and contents 
    constructor (name) {
    this.name = name;
    this.songs = [];
    }
    
    addSong (song){ // allows user to add song to a selected playlist, outputs error if no song can be pushed
        if(song instanceof Song ){
            this.songs.push(song);
        }else{
            throw new Error(`you can only add an instance of Song. Argument is not a song: ${song}`);
        }
    }

    describe(){
        return `${this.name} has ${this.songs.length} songs.`;
    }
    }

class Menu {
    constructor() {
    this.playlists = [];
    this.selectedPlaylist = null; 
    }


start() { // menu options that user input to perform based on selections and input
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createPlaylist();
    break;
    case '2' :
    this.viewPlaylist();
    break;
    case '3' :
    this.deletePlaylist();
    break;
    case '4' :
    this.displayPlaylists();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Have a nice day!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create a new playlist
        2) view a playlist
        3) delete a playlist
        4) display all playlists
        `);
    }

    showPlaylistMenuOptions(playlistInfo) {
        //options within a playlist menu
        return prompt(`
        0) back
        1) add a new song
        2) delete a song
        -----------------
        ${playlistInfo}
        `);
        }

     displayPlaylists() {
        //shows all existing playlists in form of a string
         let playlistString = '';
         for (let i = 0; i < this.playlists.length; i++) {
         playlistString += i+ ') ' + this.playlists[i].name + '\n';
         }
         alert(playlistString);
         }

    createPlaylist() {// user input pushes new playlist to array of playlists
        let name = prompt('Enter name for a new playlist: ');
        this.playlists.push(new Playlist(name));
        }
    
     viewPlaylist() {
         let index = prompt("Enter the index of the playlist that you want to view:");
         if (index > -1 && index < this.playlists.length) {
         this.selectedPlaylist = this.playlists[index];
         let description = 'Playlist Name: ' + this.selectedPlaylist.name + '\n';
         description += ' ' + this.selectedPlaylist.describe() + '\n ';
         for (let i = 0; i < this.selectedPlaylist.songs.length; i++) {
         description += i + ') ' + this.selectedPlaylist.songs[i].describe() + '\n';
         }
         let selection1 = this.showPlaylistMenuOptions(description);
         switch (selection1) {
         case '1' :
         this.createSong();
         break;
         case '2' :
         this.deleteSong();
         }
         } 
         }

         deletePlaylist() { //removes playlist and song array from list of playlists
            let index = prompt('Enter the index of the playlist that you wish to delete: ');
            if (index > -1 && index < this.playlists.length) {
            this.playlists.splice(index,1);
            }
            }
    
        createSong() {
            let name = prompt('Enter name for new song: ');
            let artist = prompt('Enter artist of new song: ');
            this.selectedPlaylist.addSong(new Song(name,artist));
            }
        deleteSong() { //removes song from playlist
            let index = prompt('Enter the index of the song that you wish to delete: ');
            if (index > -1 && index < this.selectedPlaylist.songs.length) { this.selectedPlaylist.songs.splice(index,1);
               }
               }
    }
    let menu = new Menu();
    menu.start();