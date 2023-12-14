import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tsem.caption'),
          title: i18n.t('forms.application.sitemap.tsem.title'),
          children: [{
            link: 'i-i-s-tsem-место-на-рейс-l',
            caption: i18n.t('forms.application.sitemap.tsem.i-i-s-tsem-место-на-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tsem.i-i-s-tsem-место-на-рейс-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-tsem-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.tsem.i-i-s-tsem-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.tsem.i-i-s-tsem-посад-талон-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-tsem-код-брони-l',
            caption: i18n.t('forms.application.sitemap.tsem.i-i-s-tsem-код-брони-l.caption'),
            title: i18n.t('forms.application.sitemap.tsem.i-i-s-tsem-код-брони-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-tsem-рейс-l',
            caption: i18n.t('forms.application.sitemap.tsem.i-i-s-tsem-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tsem.i-i-s-tsem-рейс-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-tsem-пассажир-l',
            caption: i18n.t('forms.application.sitemap.tsem.i-i-s-tsem-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.tsem.i-i-s-tsem-пассажир-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})