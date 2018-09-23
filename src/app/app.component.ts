import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor (private httpService: HttpClient) { }
  arrBirds: string [];
  results = '';
  orders = '';

  ngOnInit () {
      this.httpService.get('./assets/birds.json').subscribe(
        data => {
          this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );

      this.httpService.get('https://api.github.com/users/seeschweiler').subscribe(
          data => {
          //  console.log(data);
            this.results = data as string;
          },
          (err: HttpErrorResponse) => {
            console.log (err.message);
          }
        );
      }
}
