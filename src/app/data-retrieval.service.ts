import { Injectable } from '@angular/core';

import { Message } from './message';
import { USER_MESSAGES } from './mock-messages';

@Injectable({
  providedIn: 'root'
})
export class DataRetrievalService {

  getMessages(): Message[] {
    return USER_MESSAGES;
  }

  constructor() { }
}
