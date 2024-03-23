import { Component } from '@angular/core';
import { ContentNavigationComponent } from "../content-navigation/content-navigation.component";
import { ContentPaperComponent } from "../content-paper/content-paper.component";
import { ElementSetupComponent } from "../element-setup/element-setup.component";
import { ContentSummaryComponent } from "../content-summary/content-summary.component";


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SolverInterfaceService } from '../sevices/solver-service/solver-interface.service';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.less',
  imports: [ContentNavigationComponent, ContentPaperComponent, ElementSetupComponent, ContentSummaryComponent, MatSidenavModule, MatButtonModule, RouterModule]
})
export class ContentComponent {
  showFiller = false;

  constructor(private solver: SolverInterfaceService) {

  }

  calculate(): void {
    this.solver.Calculate();
  }
}
