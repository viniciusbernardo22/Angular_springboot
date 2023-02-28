import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns: string[] = ['_id', 'name', 'category'];


  constructor(
    private service: CoursesService,
    public dialog: MatDialog,
  ) {

    this.courses$ = this.service.listCourses().pipe(
      catchError((err) => {
        this.onError('Erro ao carregar cursos.');

        return of([])
      })
    )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    }
    );
  }
  ngOnInit(): void {

  }

}
