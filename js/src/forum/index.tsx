import app from 'flarum/forum/app';

import DiscussionHero from 'flarum/forum/components/DiscussionHero';

import { extend } from 'flarum/common/extend';
import ItemList from 'flarum/common/utils/ItemList';

import sortTags from 'flarum/tags/utils/sortTags';

import ToggleableTagLabelSet from './components/ToggleableTagLabelList';

app.initializers.add('blomstra/secondary-tags-toggler', () => {
  let allSecondaryTags: any[] | null = null;

  setTimeout(async () => {
    const tags = app.store.pushPayload(
      await app.request({
        url: app.forum.attribute('apiUrl') + '/blomstra-secondary-tags-toggle/all-secondary-tags',
        method: 'GET',
      })
    );

    delete tags.payload;

    allSecondaryTags = sortTags(tags);

    m.redraw();
  }, 0);

  extend(DiscussionHero.prototype, 'items', function (this: DiscussionHero, items: ItemList) {
    const discussion: any = this.attrs.discussion;

    if (!discussion.canTag()) return;
    if (allSecondaryTags === null) return;

    items.add('secondaryTagsToggle', <ToggleableTagLabelSet allSecondaryTags={allSecondaryTags} discussion={discussion} />, 4);
  });
});
