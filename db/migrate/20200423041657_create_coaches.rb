class CreateCoaches < ActiveRecord::Migration[5.0]
  def change
    create_table :coaches do |t|
      t.string :name,      null: false
      t.text :profile,     null: false
      t.text :career,      null: false
      t.string :image,     null: false
      t.integer :birthday, null: false
      t.integer :course 
      t.text :comment,     null: false
      t.string :holiday,   null: false
      t.timestamps
    end
  end
end
