import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
