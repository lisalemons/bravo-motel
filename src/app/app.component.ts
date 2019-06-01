import { Component } from '@angular/core';
import { BookingService } from '@services/booking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bravoMotel';

  constructor(private bookingService:BookingService) {
    console.log(bookingService);
  }
}
