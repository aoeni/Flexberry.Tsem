import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tsem-код-брони-l');
  this.route('i-i-s-tsem-код-брони-e',
  { path: 'i-i-s-tsem-код-брони-e/:id' });
  this.route('i-i-s-tsem-код-брони-e.new',
  { path: 'i-i-s-tsem-код-брони-e/new' });
  this.route('i-i-s-tsem-место-на-рейс-l');
  this.route('i-i-s-tsem-место-на-рейс-e',
  { path: 'i-i-s-tsem-место-на-рейс-e/:id' });
  this.route('i-i-s-tsem-место-на-рейс-e.new',
  { path: 'i-i-s-tsem-место-на-рейс-e/new' });
  this.route('i-i-s-tsem-пассажир-l');
  this.route('i-i-s-tsem-пассажир-e',
  { path: 'i-i-s-tsem-пассажир-e/:id' });
  this.route('i-i-s-tsem-пассажир-e.new',
  { path: 'i-i-s-tsem-пассажир-e/new' });
  this.route('i-i-s-tsem-посад-талон-l');
  this.route('i-i-s-tsem-посад-талон-e',
  { path: 'i-i-s-tsem-посад-талон-e/:id' });
  this.route('i-i-s-tsem-посад-талон-e.new',
  { path: 'i-i-s-tsem-посад-талон-e/new' });
  this.route('i-i-s-tsem-рейс-l');
  this.route('i-i-s-tsem-рейс-e',
  { path: 'i-i-s-tsem-рейс-e/:id' });
  this.route('i-i-s-tsem-рейс-e.new',
  { path: 'i-i-s-tsem-рейс-e/new' });
});

export default Router;
