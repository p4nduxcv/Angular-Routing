import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p></p>
    <h3>You selected departemnt with id = {{ departmentId }}</h3>

    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    <button (click)="goDep()">Back</button>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id
    })
    //console.log(this.departmentId);
  }
  goPrevious() {
    let preID = this.departmentId - 1;
    this.router.navigate(['/departments', preID]);
  }

  goNext() {
    let nextID = this.departmentId + 1;
    this.router.navigate(['/departments', nextID]);
  }

//optional Paramenters
  goDep() {
    let sellectedId = this.departmentId ? this.departmentId : null
    this.router.navigate(['/departments', {id: sellectedId}]);
  }
}
