import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-content-paper',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './content-paper.component.html',
  styleUrl: './content-paper.component.less'
})
export class ContentPaperComponent {

}
