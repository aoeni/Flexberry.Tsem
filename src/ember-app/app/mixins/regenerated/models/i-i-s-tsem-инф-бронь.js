import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пассажир: DS.belongsTo('i-i-s-tsem-пассажир', { inverse: null, async: false }),
  рейс: DS.belongsTo('i-i-s-tsem-рейс', { inverse: 'инфБронь', async: false })
});

export let ValidationRules = {
  пассажир: {
    descriptionKey: 'models.i-i-s-tsem-инф-бронь.validations.пассажир.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рейс: {
    descriptionKey: 'models.i-i-s-tsem-инф-бронь.validations.рейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнфБроньE', 'i-i-s-tsem-инф-бронь', {
    пассажир: belongsTo('i-i-s-tsem-пассажир', 'Пассажир', {
      фИО: attr('ФИО', { index: 1, hidden: true }),
      кодБрони: belongsTo('i-i-s-tsem-код-брони', '', {
        код: attr('Код бронирования', { index: 2 })
      }, { index: -1, hidden: true }),
      местоНаРейс: belongsTo('i-i-s-tsem-место-на-рейс', '', {
        место: attr('Место', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
