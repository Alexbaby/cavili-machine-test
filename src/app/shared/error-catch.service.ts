import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: []
})
export class CatchError {

  error: string;

  handleError(error) {
    console.log('error catched', error)
  }

}
