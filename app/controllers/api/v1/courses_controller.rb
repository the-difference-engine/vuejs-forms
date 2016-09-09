class Api::V1::CoursesController < ApplicationController
  def create
    course = Course.create(
      title: params[:title],
      description: params[:description]
    )
    students = JSON.parse(params[:students])
    students.each do |student|
      course.students.create(
        first_name: student["first_name"],
        last_name: student["last_name"],
        email: student["email"]
      )
    end
  end
end
