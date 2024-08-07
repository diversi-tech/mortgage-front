// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule, {
//   ngZoneEventCoalescing: true
// })
//   .catch(err => console.log(err));
// Mocking localStorage for server-side rendering or build process
if (typeof localStorage === 'undefined' || localStorage === null) {
  const localStorageMock = (() => {
    let store: { [key: string]: string } = {};
    let length = 0;

    return {
      get length() {
        return length;
      },
      key: (index: number): string | null => {
        const keys = Object.keys(store);
        return keys[index] || null;
      },
      getItem: (key: string): string | null => store[key] || null,
      setItem: (key: string, value: string): void => {
        store[key] = value;
        length = Object.keys(store).length;
      },
      removeItem: (key: string): void => {
        delete store[key];
        length = Object.keys(store).length;
      },
      clear: (): void => {
        store = {};
        length = 0;
      }
    };
  })();
  
  global['localStorage'] = localStorageMock;
}


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.log(err));