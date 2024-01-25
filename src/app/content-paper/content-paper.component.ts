import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import joint, { dia, elementTools, layout, shapes } from 'jointjs'

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

  private paper!: dia.Paper;
  private graph!: dia.Graph;

  public ngAfterViewInit(): void {

    var namespace = shapes;

    this.graph = new dia.Graph({}, { cellNamespace: namespace });

    this.paper = new dia.Paper({
      el: this.graphElement.nativeElement,
      model: this.graph,
      width: "100%",
      height: "100%",
      cellViewNamespace: namespace,
      defaultLink: () => new shapes.standard.Link(),
      gridSize: 20,
      drawGrid: { name: "mesh" },
      background: { color: "#F3F7F6" },
    });


    this.paper.on('element:mouseenter', function (elementView) {
      elementView.showTools();
    });

    this.paper.on('element:mouseleave', function (elementView) {
      elementView.hideTools();
    });

    this.paper.on('blank:pointerdblclick', (evt, x, y) => {
      console.log(`Paper was double-clicked at coordinates x: ${x}, y: ${y}`);

      var rect = new shapes.standard.Rectangle();
      rect.position(x, y);
      rect.resize(100, 40);
      rect.attr({
        body: {
          fill: 'blue'
        },
        label: {
          text: 'NEW ONE',
          fill: 'white'
        }
      });
      rect.addTo(this.graph);

      var boundaryTool = new elementTools.Boundary();
      var removeButton = new elementTools.Remove();


      var connectButton = new elementTools.Connect({
        x: '100%',
        y: '0%',
        offset: { x: -5, y: -5 },
        magnet: 'body',

      });

      var toolsView = new dia.ToolsView({
        tools: [boundaryTool, removeButton, connectButton]
      });

      var elementView = rect.findView(this.paper);
      elementView.addTools(toolsView);

    });

  }
}

