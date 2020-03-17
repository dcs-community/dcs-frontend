import {Component, Inject, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {Store} from '@ngxs/store';

import {Environment, ENVIRONMENT, FetchCommentsAction, Post, PostState} from '@dcs-libs/shared';
import {MetaTag, MetaTagsService, MomentService, ResourceService, ScrollService} from '../../core/services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private store: Store,
    public moment: MomentService,
    public resource: ResourceService,
    private metaTags: MetaTagsService,
    private title: Title,
    private scroll: ScrollService,
    @Inject(ENVIRONMENT) private environment: Environment
  ) {
  }

  ngOnInit() {
    this.scroll.smoothScroll();
    this.store.select(PostState.post).subscribe((post: Post) => {
      if (post) {
        this.post = post;
        const imageUrl = post.banner ? new URL(post.banner.url, this.environment.apiUrl).toString() : '';
        this.metaTags.updateMetas([
          {key: MetaTagsService.metas, value: new URL(`post/${post.name}`, this.environment.siteUrl).toString()} as MetaTag,
          {key: MetaTagsService.titleMeta, value: post.title} as MetaTag,
          {key: MetaTagsService.imageMeta, value: imageUrl} as MetaTag,
          {key: MetaTagsService.descriptionMeta, value: post.description} as MetaTag,
          {key: MetaTagsService.twitterImageMeta, value: imageUrl} as MetaTag,
          {key: MetaTagsService.typeMeta, value: 'article'} as MetaTag,
          {key: MetaTagsService.twitterTitleMeta, value: post.title} as MetaTag
        ]);
        this.title.setTitle(post.title);

        this.store.dispatch(new FetchCommentsAction(post.id));
      }
    });
  }

}
