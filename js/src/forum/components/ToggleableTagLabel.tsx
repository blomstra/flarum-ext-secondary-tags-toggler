import app from 'flarum/forum/app';

import classList from 'flarum/common/utils/classList';

import tagIcon from 'flarum/tags/helpers/tagIcon';
import isTagOnDiscussion from '../utils/isTagOnDiscussion';

import { nanoid } from 'nanoid';
import Component from 'flarum/common/Component';

interface IState {
  disabled: boolean;
}

interface IAttrs {
  discussion: any;
  tagModel: any;
  disabled: boolean;
  onBeginChange: () => void;
  onChangeComplete: () => void;
}

interface IElementAttrs {
  style: Record<string, unknown>;
  className: string;
}

export default class ToggleableTagLabel extends Component<IAttrs> {
  oninit(vnode) {
    super.oninit(vnode);
  }

  oncreate(vnode) {
    super.oncreate(vnode);
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  view() {
    const domAttrs: IElementAttrs = {
      style: {},
      className: 'TagLabel TagLabel--toggleable',
    };

    const { discussion, tagModel } = this.attrs;

    const isTagEnabled = isTagOnDiscussion(discussion, tagModel);
    const uniqueId = nanoid();
    const tagText = tagModel ? tagModel.name() : app.translator.trans('flarum-tags.lib.deleted_tag_text');

    if (tagModel) {
      const color = tagModel.color();
      if (color) {
        domAttrs.style['--tag-bg'] = color;
        domAttrs.className = classList(domAttrs.className, 'colored');
      }

      if (tagModel.isChild()) {
        domAttrs.className = classList(domAttrs.className, 'TagLabel--child');
      }
    } else {
      domAttrs.className = classList(domAttrs.className, 'untagged');
    }

    return (
      <span {...domAttrs}>
        <label for={uniqueId} className="TagLabel-text">
          <input
            disabled={this.attrs.disabled}
            onchange={async (e: InputEvent): Promise<void> => {
              this.attrs.onBeginChange();

              // Tag ID to Tag map
              const discussionTags = (discussion.tags() as any[]).reduce((acc, tag) => {
                acc[tag.id()] = tag;
                return acc;
              }, {} as Record<string, any>);

              if ((e.target as HTMLInputElement).checked) {
                discussionTags[tagModel.id()] = tagModel;
              } else {
                delete discussionTags[tagModel.id()];
              }

              await discussion.save({ relationships: { tags: Object.values(discussionTags) } });

              this.attrs.onChangeComplete();
            }}
            id={uniqueId}
            type="checkbox"
            className="TagLabel-toggle"
            checked={isTagEnabled}
          />

          <span class="BlomstraTagLabel-label">
            {tagModel && tagModel.icon() && tagIcon(tagModel, {}, { useColor: false })} {tagText}
          </span>
        </label>
      </span>
    );
  }
}
