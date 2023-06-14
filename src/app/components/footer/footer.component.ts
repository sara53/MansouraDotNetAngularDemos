import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  trackNames: string[] = ['Open source', 'PD', 'Dot Net', 'Front End', 'Mearn'];

  show: boolean = false;

  color: string = 'green';
  isOpen: boolean = false;

  toggleBtn() {
    this.isOpen = !this.isOpen;
  }
}
