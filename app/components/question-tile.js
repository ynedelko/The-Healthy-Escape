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
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Confirm delete?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
