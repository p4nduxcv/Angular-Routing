import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul>
      <li *ngFor="let department of departments">
        <button (click)="onSelect(department)" [class.selected]='isSelected(department)'>{{ department.id }}</button>
        {{ department.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class DepartmentListComponent implements OnInit {
  selectedId;
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Sass' },
    { id: 5, name: 'Bootstrp' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]); //palaweni eka paath ekaaa dewni eka rout parameter
    
  }

  isSelected(department) {
    return department.id === this.selectedId
    console.log(department)
  }
}
