import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { DynamicLoaderService } from './dynamic-loader.service';

@Component({
  selector: 'app-dynamic-loader',
  template: `
    <div>
      <h2>Dynamic Component Loader</h2>
      <button (click)="loadComponent(123)">Load Component 1</button>
      <button (click)="loadComponent(332)">Load Component 2</button>
      <div #dynamicContainer></div>
    </div>
  `,
})
export class DynamicLoaderComponent implements OnInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(private loaderService: DynamicLoaderService) {}

  ngOnInit(): void {}

  async loadComponent(cid: number) {
    this.container.clear();
    const component = await this.loaderService.loadComponent(cid);
    this.container.createComponent(component); // Dynamically create the component in the container
  }
}
