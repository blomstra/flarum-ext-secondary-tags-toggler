import app from 'flarum/admin/app';

app.initializers.add('blomstra/secondary-tags-toggler', () => {
  app.extensionData
    .for('blomstra-secondary-tags-toggler')
    .registerSetting({
      setting: 'blomstra-secondary-tag-toggler.only_one_secondary_tag',
      type: 'switch',
      label: app.translator.trans('blomstra-secondary-tags-toggler.admin.settings.only_one_secondary_tag'),
      help: app.translator.trans('blomstra-secondary-tags-toggler.admin.settings.only_one_secondary_tag_help'),
    })
    .registerPermission(
      {
        icon: 'fas fa-tags',
        label: app.translator.trans('blomstra-secondary-tags-toggler.admin.permissions.view_toggler'),
        permission: 'discussion.viewSecondaryTagsToggler',
        tagScoped: true,
      },
      'moderate',
      95
    );
});
