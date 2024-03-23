import { Injectable } from '@angular/core';
import { DefaultLinkFunction, Link, Network, Vertex, VertexType } from 'simple_solver/src';

@Injectable({
  providedIn: 'root'
})
export class SolverInterfaceService {


  private network: Network;
  private verticies: Record<string, Vertex> = {}
  private links: Record<string, Link> = {}

  constructor() {
    this.network = new Network();
    this.network.Epsilon = 1;
  }


  AddVertex(name: string): void {

    const vertex = new Vertex(name, 1);

    this.verticies[name] = vertex;

    this.network.AddVertex(vertex);
  }

  AddLink(name: string, upstreamVertexName: string, downstreamVertexName: string): void {

    const upstreamVertex = this.verticies[upstreamVertexName];
    const downstreamVertex = this.verticies[downstreamVertexName];

    if (upstreamVertex != undefined && downstreamVertex != undefined) {
      const link = new Link(name, upstreamVertex, downstreamVertex, 1);

      link.AddFunc(DefaultLinkFunction);

      this.links[name] = link;

      this.network.AddLink(link);
    }
  }

  Calculate(): void {
    this.network.Calculate(1000 * 60 * 60);
  }
}
