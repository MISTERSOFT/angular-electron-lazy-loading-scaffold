import { NgModule } from '@angular/core';
import { ElectronService } from 'app/core/electron.service';
import { MenuComponent } from 'app/core/menu/menu.component';

@NgModule({
  imports: [],
  exports: [
    MenuComponent
  ],
  declarations: [MenuComponent],
  providers: [
    ElectronService
  ]
})
export class CoreModule { }
