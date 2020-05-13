class CreateSpecialityCoaches < ActiveRecord::Migration[5.0]
  def change
    create_table :speciality_coaches do |t|
      t.references :coach, foreign_key: true
      t.references :speciality, foreign_key: true
      t.timestamps
    end
  end

end
