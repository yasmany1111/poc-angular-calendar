import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent {
  public view: CalendarView = CalendarView.Month;

  public viewDate: Date = new Date();

  public events: CalendarEvent[] = [];
}
