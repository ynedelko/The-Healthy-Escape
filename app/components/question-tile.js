import Ember from 'ember';

export default Ember.Component.extend({
  isNoteShowing: false,
  updateQuestion: false,
  actions: {
    noteShow: function() {
      this.set('isNoteShowing', true);
    },
    noteHide: function() {
      this.set('isNoteShowing', false)
    },
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
    destroyQuestion(question) {
      if (confirm('Confirm delete?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    saveAnswer(question, params) {
      this.sendAction('saveAnswer', question, params);
    }
  }
});
