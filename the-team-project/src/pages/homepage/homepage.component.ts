import { Component, ViewEncapsulation } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { IntegrationCardComponent } from '../../components/integration-card/integration-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
IntegrationCardComponent
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatGridListModule, IntegrationCardComponent, MatCardModule, MatButtonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  integrationsList: string[] = ['2015', '2017', '2018', '2021', '2022']

  addIntegrationModal() {
    console.log('Add integration')
  }
}
