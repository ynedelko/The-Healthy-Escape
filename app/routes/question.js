import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
//should this be the RSVP.hash?
  model() {
    return this.store.findAll('answer');
  },

  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answer').addObject(newAnswer);
      newAnswer.save(). then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question_id);
    },
  }
});
