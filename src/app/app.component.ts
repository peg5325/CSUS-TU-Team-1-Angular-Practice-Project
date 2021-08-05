import { Component } from '@angular/core';

import { Message } from './message';
import { Channel } from './channel';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-one-practice';

  luffy = "assets/luffy.png";

  public selectedChannel: Channel = {
    name: 'General',
    description: 'General desc.'
  }

  messageList: Message[] = [
    {
      username: "Luffy",
      avatarURL: "assets/Luffy.jpg",
      messageText: "I'm getting 403 errors on the API. Does anyone know what's going on?",
      dateTime: "2021-08-04T03:17:28.808Z",
      edited: true
    },
    {
      username: "Zoro",
      avatarURL: "assets/Zoro.jpg",
      messageText: "Hey Connor, I was rebooting the server. Try it now and lemme know if you run into any more issues",
      dateTime: "2021-08-04T03:17:28.808Z",
      edited: true
    },
    {
      username: "Sanji",
      avatarURL: "assets/Sanji.jpg",
      messageText: "It works now! Thanks!",
      dateTime: "2021-08-04T03:17:28.808Z",
      edited: true
    },

  ];

  imageList: any[] = [

    'assets/Luffy.jpg ',
    'assets/Sanji.jpg',
    'assets/Zoro.jpg',
  ];

  constructor() { }

  clickChannel(channel: Channel) {
    this.selectedChannel = channel;

    console.log(channel.name);
  };

  printLists() {

  }

  ngOnInit() {


    for (let i = 0; i < this.messageList.length; i++) {
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