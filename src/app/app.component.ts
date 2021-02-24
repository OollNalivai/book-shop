import { Component } from '@angular/core';

@Component({
    selector: 'tp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'book-shop';

    products = [123, 1231234, 45345345, 4436, 55, 6, 89, 0, 2, 32, 234];

    items = ['Tom', 'Bob', 'Sam', 'Bil11'];

    array = [23, 34, 455, 4436, 55, 6, 89, 0, 2, 32, 234];

    // condition: boolean = true;

    // toggle(){
    //   this.condition=!this.condition;
    // }
}
