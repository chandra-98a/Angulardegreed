import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div *ngFor="let color of colors; index as i; first as f">
    <h2>{{i}}{{f}}{{color}}</h2>
</div>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public colors=["red","blue","green","voilet"]
}
