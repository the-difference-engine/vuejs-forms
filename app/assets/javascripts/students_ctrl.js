new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    students: []
  },
  ready: function() {
   $.get('/api/v1/students.json', function(result) {
     this.students = result.map(function(student) {
       console.log(student)
       return student;
     });
   }.bind(this));
 }
})
