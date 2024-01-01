import { Component } from '@angular/core';
import { ContentNavigationComponent } from "../content-navigation/content-navigation.component";
import { ContentPaperComponent } from "../content-paper/content-paper.component";
import { ContentDrawerComponent } from "../content-drawer/content-drawer.component";
import { ContentSummaryComponent } from "../content-summary/content-summary.component";

import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.less',
  imports: [ContentNavigationComponent, ContentPaperComponent, ContentDrawerComponent, ContentSummaryComponent, MatSidenavModule]
})
export class ContentComponent {
  showFiller = false;
}
