import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пассажир: DS.belongsTo('i-i-s-tsem-пассажир', { inverse: null, async: false }),
  рейс: DS.belongsTo('i-i-s-tsem-рейс', { inverse: null, async: false })
});

export let ValidationRules = {
  пассажир: {
    descriptionKey: 'models.i-i-s-tsem-посад-талон.validations.пассажир.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рейс: {
    descriptionKey: 'models.i-i-s-tsem-посад-талон.validations.рейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосадТалонE', 'i-i-s-tsem-посад-талон', {
    пассажир: belongsTo('i-i-s-tsem-пассажир', 'Пассажир', {
      кодБрони: belongsTo('i-i-s-tsem-код-брони', '', {
        код: attr('Код бронирования', { index: 1 })
      }, { index: -1, hidden: true }),
      фИО: attr('ФИО', { index: 2, hidden: true }),
      местоНаРейс: belongsTo('i-i-s-tsem-место-на-рейс', '', {
        место: attr('Место на рейс', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' }),
    рейс: belongsTo('i-i-s-tsem-рейс', 'Рейс', {
      куда: attr('Куда', { index: 5 }),
      откуда: attr('Откуда', { index: 6 }),
      дата: attr('Дата', { index: 7 }),
      времяОтпр: attr('Время отправления', { index: 8 }),
      начПосад: attr('Начало посадки', { index: 9 }),
      конецПосад: attr('Конец посадки', { index: 10 }),
      выход: attr('Выход', { index: 11, hidden: true })
    }, { index: 4, displayMemberPath: 'выход' })
  });

  modelClass.defineProjection('ПосадТалонL', 'i-i-s-tsem-посад-талон', {
    пассажир: belongsTo('i-i-s-tsem-пассажир', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true }),
    рейс: belongsTo('i-i-s-tsem-рейс', 'Выход', {
      выход: attr('Выход', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
