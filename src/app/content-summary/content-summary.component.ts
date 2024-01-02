import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-content-summary',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './content-summary.component.html',
  styleUrl: './content-summary.component.less'
})
export class ContentSummaryComponent {

}
