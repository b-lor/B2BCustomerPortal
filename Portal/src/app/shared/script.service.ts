import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
    { name: '1', src: 'https://code.jquery.com/jquery-3.3.1.js' },
    { name: '2', src: 'https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js' },
    { name: '3', src: 'https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js' },
    { name: '4', src: 'https://cdn.datatables.net/buttons/1.5.2/js/buttons.flash.min.js' },
    { name: '5', src: 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js' },
    { name: '6', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js' },
    { name: '7', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js' },
    { name: '8', src: 'https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js' },
    { name: '9', src: 'https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js' }

];

declare var document: any;

@Injectable()
export class ScriptService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        // load script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  // IE
            script.onreadystatechange = () => {
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                }
            };
        } else {  // Others
            script.onload = () => {
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
            };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

}
