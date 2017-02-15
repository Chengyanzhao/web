import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { contactRoutes } from './contact.routes';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes)
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
