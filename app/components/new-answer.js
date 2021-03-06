import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
      saveAnswer(question) {
        var params = {
          author: this.get('author'),
          content: this.get('content'),
          question: this.get('question'),
          date_added: Date.now()
        };
        this.set('addNewAnswer', false),
        this.sendAction('saveAnswer', question, params);
      }
    }
});
