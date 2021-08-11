import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  public messages = [
    {
      "channelName" : "General",
      "description": "For general workspace conversations",
      "messages" : [
        {
          username: "Luffy",
          avatarURL: "assets/Luffy.jpg",
          messageText: "Here is General Channal",
          dateTime: "2021-08-04T03:17:28.808Z",
          edited: true
        }
      ]
    },
    {
      "channelName" : "Random",
      "description" : "For Random Channel'",
      "messages" : [
        {
          username: "Zoro",
          avatarURL: "assets/Zoro.jpg",
          messageText: "Here is Random Channal",
          dateTime: "2021-08-04T03:17:28.808Z",
          edited: true
        }
      ]
    },
    {
      "channelName" : "Client Chat",
      "description": "For Client Chat Channel",
      "messages" : [
        {
          username: "Sanji",
          avatarURL: "assets/Sanji.jpg",
          messageText: "Here is Client Chat Channal",
          dateTime: "2021-08-04T03:17:28.808Z",
          edited: true
        },
      ]
    },
    {
      "channelName" : "Internal Projects",
      "description": "For Internal Projects Channel",
      "messages" : [
        {
          username: "Luffy",
          avatarURL: "assets/Luffy.jpg",
          messageText: "Here is Internal Projects Channal",
          dateTime: "2021-08-04T03:17:28.808Z",
          edited: true
        },
      ]
    },
    {
      "channelName" : "Marketing",
      "description": "For Marketing Channel",
      "messages" : [
        {
          username: "Zoro",
          avatarURL: "assets/Zoro.jpg",
          messageText: "Here is Marketing Channal",
          dateTime: "2021-08-04T03:17:28.808Z",
          edited: true
        }
      ]
    },
  ];
}
