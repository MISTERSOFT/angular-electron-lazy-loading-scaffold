import { NgModule } from '@angular/core';
import { ElectronService } from 'app/core/electron.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [],
  declarations: [MenuComponent],
  providers: [
    ElectronService
  ]
})
export class CoreModule { }
