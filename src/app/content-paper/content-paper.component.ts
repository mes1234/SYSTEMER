import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { dia, elementTools, linkTools, shapes } from 'jointjs'
// TODO CLEAN IT UP
@Component({
  selector: 'app-content-paper',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './content-paper.component.html',
  styleUrl: './content-paper.component.less'
})
export class ContentPaperComponent implements AfterViewInit {

  constructor(private router: Router) { }


  @ViewChild('graph')
  graphElement: ElementRef | any;

  private paper!: dia.Paper;
  private graph!: dia.Graph;

  public ngAfterViewInit(): void {

    var namespace = shapes;

    this.graph = new dia.Graph({}, { cellNamespace: namespace });

    var removeButton = new linkTools.Remove();

    const tools = [
      new linkTools.Vertices(),
      new linkTools.Segments(),
      new linkTools.Boundary(),
      new linkTools.Remove({ distance: -20 })
    ];

    const CustomLink = shapes.standard.Link.define;

    CustomLink.prototype.addTools = function () {
      const linkView = this.findView(this.paper);
      linkView.addTools(new dia.ToolsView({
        tools: tools
      }));
      linkView.showTools();  // Hide the tools initially if needed
      return this;
    };

    this.paper = new dia.Paper({
      el: this.graphElement.nativeElement,
      model: this.graph,
      width: "100%",
      height: "100%",
      cellViewNamespace: namespace,
      defaultLink: () => new shapes.standard.Link({
        router: { name: 'manhattan' }
      }),
      gridSize: 20,
      drawGrid: { name: "mesh" },
      background: { color: "lightblue" },
    });

    this.paper.on('link:pointerdown', (linkView) => {
      const toolsView = new dia.ToolsView({
        tools: tools
      });
      linkView.addTools(toolsView);
    });

    this.paper.on('link:mouseleave', function (linkView) {
      linkView.hideTools();
    });

    this.paper.on('element:mouseenter', (elementView: dia.ElementView) => {

      elementView.showTools();

      const model = (elementView as any).model;
      const elementId = model.id;

      this.router.navigate(['/element', elementId]);
    });

    this.paper.on('element:mouseleave', function (elementView) {
      elementView.hideTools();
    });

    this.paper.on('blank:pointerdblclick', (evt, x, y) => {

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

    (this.graph as any).on('remove', function (cell: dia.Cell, graph: dia.Graph, opt: any) {
      if (cell.isElement()) {
        console.log('Element removed:', cell);
      }

      if (cell.isLink()) {
        console.log('Link removed:', cell);
      }
    });

    (this.graph as any).on('add', function (cell: dia.Cell, graph: dia.Graph, opt: any) {
      if (cell.isElement()) {
        console.log('Element added:', cell);
      }

      if (cell.isLink()) {
        (cell as any).on('change:source change:target', () => {
          if ((cell as any).get('source').id && (cell as any).get('target').id) {
            console.log('Link fully connected:', cell);
            console.log('Source ID:', (cell as any).get('source').id);
            console.log('Target ID:', (cell as any).get('target').id);
          }
        });
      }
    });
  }
}
