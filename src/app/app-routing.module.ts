import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {NgModule} from "@angular/core";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'about', component: AboutUsComponent },
  // { path: 'products/components', component: ComponentsComponent },
  // { path: 'products/blocks', component: BlocksComponent },
  // { path: 'products/uikit', component: UIKitComponent },
  // { path: 'products/templates/apollo', component: ApolloComponent },
  // { path: 'products/templates/ultima', component: UltimaComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
