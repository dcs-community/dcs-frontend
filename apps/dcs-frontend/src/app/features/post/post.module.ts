import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

import { MaterialModule, SharedModule, TagsModule } from '@dcs-libs/shared';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { ServicesModule } from '../../core/services';
import { CommentsComponent } from './comments/comments.component';
import { ShareButtonsComponent } from './share-buttons/share-buttons.component';
import { SimilarPostsListComponent } from './similar-posts-list/similar-posts-list.component';
import { LoginRequestModalComponent } from '../components/login-request-modal';
import { PostInfoComponent } from './post-info/post-info.component';
import { ConfirmDeleteModalComponent } from './comments/confirm-delete.modal/confirm-delete.modal.component';
import { EditCommentModalComponent } from './comments/edit-comment.modal/edit-comment.modal.component';

@NgModule({
  declarations: [
    PostComponent,
    CommentsComponent,
    ShareButtonsComponent,
    SimilarPostsListComponent,
    PostInfoComponent,
    ConfirmDeleteModalComponent,
    EditCommentModalComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    MarkdownModule.forRoot(),
    ServicesModule,
    LazyLoadImageModule.forRoot({preset: scrollPreset}),
    TagsModule,
    SharedModule
  ],
  entryComponents: [LoginRequestModalComponent, ConfirmDeleteModalComponent, EditCommentModalComponent]
})
export class PostModule {
}
