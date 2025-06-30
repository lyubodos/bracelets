import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {AnimateOnScrollBasicDemo} from "./components/animateonscrollbasicdemo/animateonscrollbasicdemo.component";
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {AvatarModule} from "primeng/avatar";
import {AppHeaderComponent} from "./components/app-header/app-header.component";
import {MainComponent} from "./components/main/main.component";
import {ImageModule} from "primeng/image";
import {GalleriaModule} from "primeng/galleria";
import {AppFooterComponent} from "./components/app-footer/app-footer.component";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    AnimateOnScrollModule,
    AvatarModule,
    ImageModule,
    GalleriaModule
  ],
    declarations: [
        AppComponent,
        AppHeaderComponent,
        MainComponent,
        AnimateOnScrollBasicDemo,
        AppFooterComponent
    ],
  providers: [
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
