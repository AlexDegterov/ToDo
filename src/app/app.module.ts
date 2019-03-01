import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import { SaveLocalService } from './save-local.service';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
      MatDatepickerModule,
      MatNativeDateModule
  ],
  providers: [SaveLocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
