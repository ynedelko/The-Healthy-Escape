import Ember from 'ember';

export function currentDate() {
  return moment().format('llll');
}

export default Ember.Helper.helper(currentDate);
