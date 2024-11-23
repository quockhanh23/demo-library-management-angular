import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminActionComponent} from "./admin/admin-action/admin-action.component";
import {MemberDetailComponent} from "./member/member-detail/member-detail.component";
import {BookListComponent} from "./book/book-list/book-list.component";
import {BookDetailComponent} from "./book/book-detail/book-detail.component";

const routes: Routes = [
  {
    path: 'admin', component: AdminActionComponent,
  },
  {
    path: 'detailMember/:id', component: MemberDetailComponent,
  },
  {
    path: 'books', component: BookListComponent,
  },
  {
    path: 'detailBook/:id', component: BookDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
