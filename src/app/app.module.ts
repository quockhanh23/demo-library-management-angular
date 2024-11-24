import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogComponent} from './dialog/dialog.component';
import {MaterialModule} from "./material/material.module";
import {ToastrModule} from "ngx-toastr";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AdminActionComponent} from './admin/admin-action/admin-action.component';
import {MemberCreateComponent} from './member/member-create/member-create.component';
import {MemberDetailComponent} from './member/member-detail/member-detail.component';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    AdminActionComponent,
    MemberCreateComponent,
    MemberDetailComponent,
    BookCreateComponent,
    BookListComponent,
    BookDetailComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
