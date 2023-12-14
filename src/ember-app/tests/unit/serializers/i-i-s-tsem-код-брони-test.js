import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tsem-код-брони', 'Unit | Serializer | i-i-s-tsem-код-брони', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tsem-код-брони',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-tsem-класс-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
