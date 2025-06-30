import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: 'home', component: MainComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'products/components', component: ComponentsComponent },
  // { path: 'products/blocks', component: BlocksComponent },
  // { path: 'products/uikit', component: UIKitComponent },
  // { path: 'products/templates/apollo', component: ApolloComponent },
  // { path: 'products/templates/ultima', component: UltimaComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
