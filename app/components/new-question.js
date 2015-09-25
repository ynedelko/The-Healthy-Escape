import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        ask: this.get('ask'),
        author: this.get('author'),
        note: this.get('note'),
      };
      this.set('addNewQuestion', false),
      this.sendAction('saveQuestion', params);
    }
  }
});
