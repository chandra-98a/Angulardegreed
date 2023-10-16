import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
 <h2 *ngIf="displayName;  then thenBlock; else elseBlock">
 </h2>
 <ng-template #thenBlock>
  <h1>kala</h1>
 </ng-template>

 <ng-template #elseBlock>
  <h1>chandrakala</h1>
 </ng-template>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public displayName=true;
}
