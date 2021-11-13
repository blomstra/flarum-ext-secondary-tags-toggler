import app from 'flarum/admin/app';

app.initializers.add('blomstra/secondary-tags-toggler', () => {
  app.extensionData.for('blomstra-secondary-tags-toggler').registerPermission(
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
