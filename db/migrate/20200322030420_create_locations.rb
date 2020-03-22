class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.datetime :logged_at
      t.float :latitude
      t.float :longitude
      t.belongs_to :run, null: false, foreign_key: true

      t.timestamps
    end
  end
end
