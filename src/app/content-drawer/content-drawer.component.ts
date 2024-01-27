import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content-drawer',
  standalone: true,
  imports: [],
  templateUrl: './content-drawer.component.html',
  styleUrl: './content-drawer.component.less'
})
export class ContentDrawerComponent implements OnInit {
  elementId: string = "NONE";
  private routeSub!: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.elementId = params['elementId']; // same name as in the route path
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe(); // It's good practice to unsubscribe
    }
  }
}