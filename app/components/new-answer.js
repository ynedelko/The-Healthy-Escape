import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('answer');
  },
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
      saveAnswer(params) {
        var newQuestion = this.store.createRecord('answer', params);
        newAnswer.save();
        this.transitionTo('question');
    }
  }
});
