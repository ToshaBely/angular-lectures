import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeedSimpleComponent } from './components/feed-simple/feed-simple.component';
import { FeedDecompositionComponent } from './components/feed-decomposition/feed-decomposition.component';
import { PostComponent } from './components/feed-decomposition/post/post.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { InterpolationExampleComponent } from './components/interpolation-example/interpolation-example.component';
import { CustomInterpolationComponent } from './components/interpolation-example/custom-interpolation/custom-interpolation.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationExampleComponent,
    FeedSimpleComponent,
    FeedDecompositionComponent,
    PostComponent,
    LifecycleHooksComponent,
    CustomInterpolationComponent,
    TwoWayBindingComponent,
    TemplateSyntaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
