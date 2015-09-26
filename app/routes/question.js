import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
//   },
// actions: {
//   update(question, params) {
//     Object.keys(params).forEach(function(key) {
//       if(params[key]!==undefined) {
//         question.set(key, params[key]);
//       }
//     });
//     question.save();
//     this.transitionTo('question');
//   },
//
//   destroyQuestion(question) {
//     question.destroyRecord();
//     this.transitionTo('index');
//   }
},
model() {
  return this.store.findAll('answer');
},

actions: {
  saveAnswer(params) {
    var newAnswer = this.store.createRecord('answer', params);
    newQAnswer.save();
    this.transitionTo('question');
  },
}
});
