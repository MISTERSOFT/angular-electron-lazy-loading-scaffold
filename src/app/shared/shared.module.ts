import { NgModule } from '@angular/core';
//#region Angular Modules
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//#endregion

@NgModule({
  imports: [
    // Angular Modules
    HttpModule,
    CommonModule,
    FormsModule
  ],
  declarations: []
})
export class SharedModule { }
