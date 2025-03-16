import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient  } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),FormsModule , provideRouter(routes)]
})
  .catch(err => console.error(err));