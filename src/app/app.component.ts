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
    let itemIndex =this.displayMessages.indexOf(item)
    this.displayMessages.splice(itemIndex, 1);
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
    this.fetchMessages(this.selectedChannel.index);
    // this.getMessagesChat(); // part of text chat
  }

  currentUsername: string = "Anonymous";
  currentUserAvatarURL: string = "../assets/Luffy.jpg" //not working with default picture
  currentIsEdited: boolean = false;

  currentDate = Date.now();

  user_messages: Message[] = [];

  sendMsg(tempMsg: Message) {
    if(tempMsg) {
      this.displayMessages.push(tempMsg)
    }
  }
  
  // getMessagesChat(): void {
  //   this.user_messages = this.messageService.getMessages();
  // }
  
}
