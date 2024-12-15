// import { Injectable, Injector, NgModuleFactory, Type } from '@angular/core';
// import { loadRemoteModule } from '@angular-architects/module-federation';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class DynamicLoaderService {
//   constructor() {}
//
//   async loadComponent(cid: number): Promise<Type<any>> {
//     switch (cid) {
//       case 123:
//         const { Component1 } = await loadRemoteModule({
//           remoteEntry: 'https://remote-components.pages.dev/remoteEntry.js',
//           remoteName: 'remoteComponents',
//           exposedModule: './Component1',
//         });
//         return Component1;
//
//       case 332:
//         const { Component2 } = await loadRemoteModule({
//           remoteEntry: 'https://remote-components.pages.dev/remoteEntry.js',
//           remoteName: 'remoteComponents',
//           exposedModule: './Component2',
//         });
//         return Component2;
//
//       default:
//         throw new Error('Unknown CID');
//     }
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DynamicLoaderService {
  async loadComponent(cid: number): Promise<any> {
    if (cid === 123) {
      const remoteModule = await import('remoteComponents/Component1');
      return remoteModule.Component1Component; // Return the component directly
    } else if (cid === 332) {
      const remoteModule = await import('remoteComponents/Component2');
      return remoteModule.Component2Component; // Return the component directly
    } else {
      throw new Error('Unknown Component ID');
    }
  }
}
