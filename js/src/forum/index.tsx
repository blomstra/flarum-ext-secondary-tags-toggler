import app from 'flarum/forum/app';

import DiscussionHero from 'flarum/forum/components/DiscussionHero';

import { extend } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';
import Discussion from 'flarum/common/models/Discussion';
import Model from 'flarum/common/Model';

import sortTags from 'flarum/tags/utils/sortTags';

import ToggleableTagLabelList from './components/ToggleableTagLabelList';

app.initializers.add('blomstra/secondary-tags-toggler', () => {
  Discussion.prototype.canViewSecondaryTagToggler = Model.attribute('canViewSecondaryTagToggler');

  let allSecondaryTags: any[] | null = null;

  setTimeout(async () => {
    allSecondaryTags = sortTags(app.store.all('tags').filter((tag: any) => tag.position() === null && tag.canAddToDiscussion()));

    m.redraw();
  }, 0);

  extend(DiscussionHero.prototype, 'items', function (this: DiscussionHero, items: ItemList) {
    const discussion: any = this.attrs.discussion;

    if (!discussion.canViewSecondaryTagToggler() || !discussion.canTag()) return;
    if (!allSecondaryTags) return;

    items.add('secondaryTagsToggle', <ToggleableTagLabelList allSecondaryTags={allSecondaryTags} discussion={discussion} />, 4);
  });
});

import * as components from './components';

export { components };
