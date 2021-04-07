import { NgModule } from '@angular/core';

import { UserImageRoutingModule } from './upload-user-image.routing.module';
import { UserImagePage } from './upload-image.component';

@NgModule({

  declarations: [UserImagePage],
  imports: [UserImageRoutingModule ]
})

export class UploadImageModule { }
