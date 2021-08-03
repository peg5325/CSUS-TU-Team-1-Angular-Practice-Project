import { Component } from '@angular/core';

import { Message } from './message'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'team-one-practice';
  
  luffy = "assets/luffy.png";
  
  messageList: Message[] = [
    {
      username: "Luffy",  
      avatarURL: "assets/luffy.png", 
      messageText: "Luffy See Ya",
      edited: true
    },


    
  ];

  imageList: any[] = [

    'assets/Luffy.jpg ', 
    'assets/Sanji.jpg',
    'assets/Zoro.jpg',
  ]; 

  constructor() { }

  printLists() {

  
  
 }
  
  ngOnInit() {
    for( let i =0; i<this.messageList.length; i++){
      console.log(this.imageList[i])
      console.log(this.messageList[i]);
    }
     
}
}
// creat a message interface formatting your message objects
// you want to create a single array of object
/*
[{
  username: "Luffy",  
  avatarURL: "dfhsoidfso", 
  messageTexts: ["blah blah blah", "blahbla blah",
  dateTime: dateObject or a string,
  edited: true
  editedDateTime: object

},

{
  username: "Luffy",  
  avatarURL: "dfhsoidfso", 
  messageText: "blah blah blah",
  dateTime: dateObject or a string,
  edited: true
  editedDateTime: object

},

{
  username: "Luffy",  
  avatarURL: "dfhsoidfso", 
  messageText: "blah blah blah",
  dateTime: dateObject or a string,
  edited: true
  editedDateTime: object

}

]


*/