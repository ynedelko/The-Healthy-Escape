import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question);
    },
    destroyQuestion(question) {
      question.get('answers').then(function(answers) {
        answers.forEach(function(answer) {
          answer.destroyRecord();
        });
      });
      question.destroyRecord();
      this.transitionTo('index');
    },
    saveAnswer(question, params) {
      var thisAnswer = this.store.createRecord('answer', params);
      thisAnswer.save();
      question.save().then(function(question) {
        question.reload();
      });
      this.transitionTo('question', question);
    }
  }
});
