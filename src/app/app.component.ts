import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: `
		select.form-select {
			margin: 0.5rem 0.5rem 0 0;
			width: auto;
		}
	`,
  
})
export class AppComponent {
  title = 'my-app';
  displayMonths = 2;
	navigation = 'select';
	showWeekNumbers = false;
	outsideDays = 'visible';
}
