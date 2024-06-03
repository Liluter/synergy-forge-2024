import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-integration-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './integration-card.component.html',
  styleUrl: './integration-card.component.scss'
})
export class IntegrationCardComponent {
  @Input() title!: string
}
