import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { CounterService } from './services/counter.service';
import { FetchService } from './services/fetch.service';
import { PagerPipe } from './pager.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PictureDialogComponent,
  BigPictureDialog,
} from './components/picture-dialog/picture-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PagerPipe,
    PictureDialogComponent,
    BigPictureDialog,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    LayoutModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [CounterService, FetchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
