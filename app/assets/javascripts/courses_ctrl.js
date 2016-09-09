new Vue({
  el: '#new-course-form',
  data: {
    title: "",
    students: []
  },
  methods: {
    saveForm: function(title, description) {
      var params = {
        title: title,
        description: description,
        students: JSON.stringify(this.students)
      };
      $.post('/api/v1/courses.json', params).done(function(result) {
        console.log(params);
        this.title = '';
        this.description = '';
      }.bind(this)).fail(function(result) {
        this.errors = result.responseJSON.errors;
      }.bind(this));
    },
      addNewStudent: function() {
        this.students.push({
          first_name: "",
          last_name: "",
          email: ""
        })
      }
    }
  ,
  ready: function() {
  //  $.get('/api/v1/students.json', function(result) {
  //    this.students = result.map(function(student) {
  //      console.log(student)
  //      return student;
  //    });
  //  }.bind(this));
 }
})

//
// addPerson: function(name, bio) {
//       this.errors = [];
//       var params = {
//         name: name,
//         bio: bio
//       };
    //   $.post('/api/v1/people.json', params).done(function(result) {
    //     result.bioStrikeThrough = false;
    //     this.people.push(result);
    //     this.newPersonName = '';
    //     this.newPersonBio = '';
    //   }.bind(this)).fail(function(result) {
    //     this.errors = result.responseJSON.errors;
    //     console.log(this.people);
    //   }.bind(this));
    // },