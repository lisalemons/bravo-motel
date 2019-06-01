import { Injectable } from '@angular/core';
import { Room } from '@models/room/room';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  rooms: Room[];
  constructor() { }
}
