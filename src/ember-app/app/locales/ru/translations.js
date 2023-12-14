import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTsemКодБрониLForm from './forms/i-i-s-tsem-код-брони-l';
import IISTsemМестоНаРейсLForm from './forms/i-i-s-tsem-место-на-рейс-l';
import IISTsemПассажирLForm from './forms/i-i-s-tsem-пассажир-l';
import IISTsemПосадТалонLForm from './forms/i-i-s-tsem-посад-талон-l';
import IISTsemРейсLForm from './forms/i-i-s-tsem-рейс-l';
import IISTsemКодБрониEForm from './forms/i-i-s-tsem-код-брони-e';
import IISTsemМестоНаРейсEForm from './forms/i-i-s-tsem-место-на-рейс-e';
import IISTsemПассажирEForm from './forms/i-i-s-tsem-пассажир-e';
import IISTsemПосадТалонEForm from './forms/i-i-s-tsem-посад-талон-e';
import IISTsemРейсEForm from './forms/i-i-s-tsem-рейс-e';
import IISTsemИнфБроньModel from './models/i-i-s-tsem-инф-бронь';
import IISTsemКодБрониModel from './models/i-i-s-tsem-код-брони';
import IISTsemМестоНаРейсModel from './models/i-i-s-tsem-место-на-рейс';
import IISTsemПассажирModel from './models/i-i-s-tsem-пассажир';
import IISTsemПосадТалонModel from './models/i-i-s-tsem-посад-талон';
import IISTsemРейсModel from './models/i-i-s-tsem-рейс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tsem-инф-бронь': IISTsemИнфБроньModel,
    'i-i-s-tsem-код-брони': IISTsemКодБрониModel,
    'i-i-s-tsem-место-на-рейс': IISTsemМестоНаРейсModel,
    'i-i-s-tsem-пассажир': IISTsemПассажирModel,
    'i-i-s-tsem-посад-талон': IISTsemПосадТалонModel,
    'i-i-s-tsem-рейс': IISTsemРейсModel
  },

  'application-name': 'Tsem',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tsem',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tsem',
          title: 'Tsem'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        tsem: {
          caption: 'Tsem',
          title: 'Tsem',
          'i-i-s-tsem-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          },
          'i-i-s-tsem-посад-талон-l': {
            caption: 'Посад талон',
            title: ''
          },
          'i-i-s-tsem-код-брони-l': {
            caption: 'Код брони',
            title: ''
          },
          'i-i-s-tsem-рейс-l': {
            caption: 'Рейс',
            title: ''
          },
          'i-i-s-tsem-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-tsem-код-брони-l': IISTsemКодБрониLForm,
    'i-i-s-tsem-место-на-рейс-l': IISTsemМестоНаРейсLForm,
    'i-i-s-tsem-пассажир-l': IISTsemПассажирLForm,
    'i-i-s-tsem-посад-талон-l': IISTsemПосадТалонLForm,
    'i-i-s-tsem-рейс-l': IISTsemРейсLForm,
    'i-i-s-tsem-код-брони-e': IISTsemКодБрониEForm,
    'i-i-s-tsem-место-на-рейс-e': IISTsemМестоНаРейсEForm,
    'i-i-s-tsem-пассажир-e': IISTsemПассажирEForm,
    'i-i-s-tsem-посад-талон-e': IISTsemПосадТалонEForm,
    'i-i-s-tsem-рейс-e': IISTsemРейсEForm
  },

});

export default translations;
