import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Frontend' },
    { _id: '2', name: 'Java', category: 'Backend' }
  ]

  displayedColumns: string[] = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
