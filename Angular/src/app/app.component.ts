import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'csharp',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/csharp.svg'));
    iconRegistry.addSvgIcon(
        'python',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/python.svg'));
    iconRegistry.addSvgIcon(
        'web',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/html.svg'));
  }
}
