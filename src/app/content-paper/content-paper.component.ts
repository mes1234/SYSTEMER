import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { dia, layout, shapes } from 'jointjs'

@Component({
  selector: 'app-content-paper',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './content-paper.component.html',
  styleUrl: './content-paper.component.less'
})
export class ContentPaperComponent implements AfterViewInit {

  @ViewChild('graph')
  graphElement: ElementRef | any;

  paper: any;
  graph: any;

  public ngAfterViewInit(): void {

    var namespace = shapes;

    var graph = new dia.Graph({}, { cellNamespace: namespace });

    var paper = new dia.Paper({
      el: this.graphElement.nativeElement,
      model: graph,
      gridSize: 1,
      width: this.graphElement.nativeElement.width,
      height: this.graphElement.nativeElement.height,
      cellViewNamespace: namespace
    });

    var rect = new shapes.standard.Rectangle();
    rect.position(100, 30);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: 'blue'
      },
      label: {
        text: 'Hello',
        fill: 'white'
      }
    });
    rect.addTo(graph);

    var rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr('label/text', 'World!');
    rect2.addTo(graph);

    var link = new shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.addTo(graph);

    this.paper.setDimensions(
      this.graphElement.nativeElement.offsetWidth,
      this.graphElement.nativeElement.offsetHeight);

  }

}

