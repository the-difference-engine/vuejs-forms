class AddIdToStudent < ActiveRecord::Migration[5.0]
  def change
    add_reference :students, :course, index: true
  end
end
