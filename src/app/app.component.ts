import { Component, Output, EventEmitter } from '@angular/core';

import { Message } from './message';
import { Channel } from './channel';
import { MessageService } from './message.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-one-practice';

  luffy = "assets/luffy.png";

  public displayMessages: any[] = [];

  public selectedChannel: Channel = {
    name: 'General',
    description: 'For general workspace conversations',
    index : 0
  }

  myDate = Date.now();

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
      dateTime: this.myDate,
      edited: true
    },

  ];

  imageList: any[] = [

    'assets/Luffy.jpg ',
    'assets/Sanji.jpg',
    'assets/Zoro.jpg',
  ];

  @Output() deleteItemEvent = new EventEmitter<any>();
  constructor(private readonly messageService: MessageService) { }

  clickChannel(channel: Channel) {
    this.selectedChannel = channel;
    this.fetchMessages(channel.index);
  };

  fetchMessages(channelIndex: Channel["index"]): void {
    this.displayMessages = this.messageService.messages[channelIndex].messages;
    // console.log(this.messageService.messages[channelIndex])
  }

  tellToDeleteItem(item: any) {
    this.deleteItemEvent.emit(item);
  }

  deleteItem(item: any){
    let itemIndex =this.messageList.indexOf(item)
    this.messageList.splice(itemIndex, 1);

  }

submitNewMessage(){
// send the new message data to the messsage service, 
//Put the new message inside the messages array of the appropriate channel object
//Then run this.fetchMessages(this.selectedChannel.index)
}

//later
saveMessages(){
  // this will submit your service array data, your array of channels and messages, into localstorage

}
  ngOnInit() {
    for (let i = 0; i < this.messageList.length; i++) {
      console.log(this.imageList[i])
      console.log(this.messageList[i]);
    }
    this.fetchMessages(this.selectedChannel.index);
  }
}
