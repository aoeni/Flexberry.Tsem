import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tsem-инф-бронь', 'Unit | Model | i-i-s-tsem-инф-бронь', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tsem-инф-бронь',
    'model:i-i-s-tsem-код-брони',
    'model:i-i-s-tsem-место-на-рейс',
    'model:i-i-s-tsem-пассажир',
    'model:i-i-s-tsem-посад-талон',
    'model:i-i-s-tsem-рейс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
