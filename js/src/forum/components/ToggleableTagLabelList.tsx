import Component from 'flarum/common/Component';
import ToggleableTagLabel from './ToggleableTagLabel';

interface IAttrs {
  allSecondaryTags: any[];
  discussion: any;
}

interface IState {
  disabled: boolean;
}

export default class ToggleableTagLabelList extends Component<IAttrs, IState> {
  state = {
    disabled: false,
  };

  view() {
    const { allSecondaryTags, discussion } = this.attrs;

    return (
      <span class="BlomstraToggleableTagLabels">
        {allSecondaryTags?.map?.((tag) => {
          return (
            <ToggleableTagLabel
              key={tag.id()}
              tagModel={tag}
              discussion={discussion}
              disabled={this.state.disabled}
              onBeginChange={() => {
                this.state.disabled = true;
                m.redraw();
              }}
              onChangeComplete={() => {
                this.state.disabled = false;
                m.redraw();
              }}
            />
          );
        })}
      </span>
    );
  }
}
