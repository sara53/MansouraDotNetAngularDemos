import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  componentTitle: string = 'Our Product Section';
  isShow: boolean = true;
  imgSrc: string = '2.jpg';

  studentName: string = '';
  age: string = '';
  selectValue: string = '';

  show(x: any): void {
    console.log(x);
  }
  // getInputValue(e: any) {
  //   this.inputValue = e.target.value; //
  //   console.log(this.inputValue);
  // }
}
