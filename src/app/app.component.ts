import { Component } from '@angular/core';
import { TeacherBook } from './teacher-book';
import { TeacherAssistant } from './teacher-assistant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public statistic = [];

  constructor() {
    let tb = new TeacherBook();
    tb.addStudent("Александр");
    tb.addStudent("Николай");
    tb.addLesson();
    tb.setRating("Александр", 1, 10);
    tb.addLesson();
    tb.setRating("Александр", 2, 5);
    tb.setRating("Николай", 2, 5);
    tb.setAbsence("Николай", 1);

    let assistant = new TeacherAssistant();

    assistant.calculateStatistic(tb, 3)
      .forEach((stat, studentName) => {
        this.statistic.push({
          studentName,
          stat
        });
      });


  }

}
