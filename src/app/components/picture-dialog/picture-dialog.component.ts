import { Component, Inject, Input } from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

export interface DialogData {
  largeImageURL: string;
}

@Component({
  selector: 'app-picture-dialog',
  templateUrl: 'picture-dialog.component.html',
  // styleUrls: ['picture-dialog.component.scss'],
})
export class PictureDialogComponent {
  constructor(public dialog: Dialog) {}

  @Input() largeImageURL: string;

  openDialog(url: string): void {
    this.dialog.open<string>(BigPictureDialog, {
      data: {
        largeImageURL: url,
      },
    });
  }
}

@Component({
  selector: 'big-picture-dialog',
  templateUrl: 'big-picture-dialog.html',
  styleUrls: ['big-picture-dialog.scss'],
})
export class BigPictureDialog {
  constructor(@Inject(DIALOG_DATA) public data: DialogData) {}
}
