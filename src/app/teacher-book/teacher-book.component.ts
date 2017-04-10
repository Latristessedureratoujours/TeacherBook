import { Component, OnInit } from '@angular/core';
import { TeacherBook } from '../teacher-book';
import { TeacherAssistant } from '../teacher-assistant';

@Component({
  selector: 'app-teacher-book',
  templateUrl: './teacher-book.component.html',
  styleUrls: ['./teacher-book.component.css']
})
export class TeacherBookComponent implements OnInit {

  private _teacherBook: TeacherBook;
  private _teacherAssistant: TeacherAssistant;
  public _vm: any;

  private updateVm(oldVm: any, teacherBook: TeacherBook): any {
    let newVM: any = oldVm;

    newVM.lessons = [];
    for (let i = 1; i <= teacherBook.lessonsCount; i++) {
      newVM.lessons.push(i);
    }

    let stat = this._teacherAssistant.calculateStatistic(this._teacherBook, newVM.statValuesIndex);

    newVM.students = teacherBook.studentsNames.map(studentName => {
      let values = [];
      for (let lessonNumber = 1; lessonNumber <= teacherBook.lessonsCount; lessonNumber++) {
        let rating = teacherBook.getRating(studentName, lessonNumber);
        let absence = teacherBook.isAbsend(studentName, lessonNumber);
        let value = rating ? rating.toString() : absence ? "Н" : null;
        values.push(value);
      }
      return {
        name: studentName,
        values: values,
        stat: stat.get(studentName)
      };
    });
    return newVM;
  }

  constructor() {
    this._teacherAssistant = new TeacherAssistant();
    this._teacherBook = new TeacherBook();

    this._teacherBook.addLesson();
    this._teacherBook.addLesson();
    this._teacherBook.addLesson();
    this._teacherBook.addLesson();

    this._teacherBook.addStudent("Александр");
    this._teacherBook.addStudent("Николай");

    this._teacherBook.setAbsence("Александр", 2);
    this._teacherBook.setRating("Николай", 2, 1);

    this._vm = { statValuesIndex: 0 };

  }

  ngOnInit() {
  }

  public newStudentName: string;

  public get vm(): any {
    this._vm = this.updateVm(this._vm, this._teacherBook);
    return this._vm;
  }

  public addStudent() {
    this._teacherBook.addStudent(this.newStudentName);
  }

  public addLesson() {
    this._teacherBook.addLesson();
  }

  public addValue(studentName: string, lessonNumber: number, value: any) {
    if (!value) {
      return;
    } else if (+value) {
      this._teacherBook.setRating(studentName, lessonNumber, +value);
    } else {
      this._teacherBook.setAbsence(studentName, lessonNumber);
    }
  }

  public deleteStudent(studentName: string) {
    this._teacherBook.removeStudent(studentName);
  }
}