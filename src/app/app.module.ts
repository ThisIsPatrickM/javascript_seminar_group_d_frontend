import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { MockVideoComponent } from './mock-video/mock-video.component';
import { QuizComponent } from './games/quiz/quiz.component';
import { AliasComponent } from './games/alias/alias.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    MockVideoComponent,
    QuizComponent,
    AliasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
