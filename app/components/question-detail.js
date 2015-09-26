import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('answer');
  },

  actions: {
    saveAnswer(params) {
      var newQuestion = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question');
    }
  }
});
