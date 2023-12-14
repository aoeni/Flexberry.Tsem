import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяОтпр: DS.attr('string'),
  выход: DS.attr('string'),
  дата: DS.attr('date'),
  конецПосад: DS.attr('string'),
  куда: DS.attr('string'),
  начПосад: DS.attr('string'),
  откуда: DS.attr('string'),
  инфБронь: DS.hasMany('i-i-s-tsem-инф-бронь', { inverse: 'рейс', async: false })
});

export let ValidationRules = {
  времяОтпр: {
    descriptionKey: 'models.i-i-s-tsem-рейс.validations.времяОтпр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  выход: {
    descriptionKey: 'models.i-i-s-tsem-рейс.validations.выход.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-tsem-рейс.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  конецПосад: {
    descriptionKey: 'models.i-i-s-tsem-рейс.validations.конецПосад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  куда: {
    descriptionKey: 'models.i-i-s-tsem-рейс.validations.куда.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начПосад: {
    descriptionKey: 'models.i-i-s-tsem-рейс.validations.начПосад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  откуда: {
    descriptionKey: 'models.i-i-s-tsem-рейс.validations.откуда.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  инфБронь: {
    descriptionKey: 'models.i-i-s-tsem-рейс.validations.инфБронь.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РейсE', 'i-i-s-tsem-рейс', {
    дата: attr('Дата', { index: 0 }),
    выход: attr('Выход', { index: 1 }),
    конецПосад: attr('Конец посадки', { index: 2 }),
    времяОтпр: attr('Время отправления', { index: 3 }),
    куда: attr('Куда', { index: 4 }),
    начПосад: attr('Начало посадки', { index: 5 }),
    откуда: attr('Откуда', { index: 6 }),
    инфБронь: hasMany('i-i-s-tsem-инф-бронь', 'Информация бронирования', {
      пассажир: belongsTo('i-i-s-tsem-пассажир', 'Пассажир', {
        фИО: attr('ФИО', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('РейсL', 'i-i-s-tsem-рейс', {
    дата: attr('Дата', { index: 0 }),
    выход: attr('Выход', { index: 1 }),
    конецПосад: attr('Конец посадки', { index: 2 }),
    времяОтпр: attr('Время отправления', { index: 3 }),
    куда: attr('Куда', { index: 4 }),
    начПосад: attr('Начало посадки', { index: 5 }),
    откуда: attr('Откуда', { index: 6 })
  });
};
