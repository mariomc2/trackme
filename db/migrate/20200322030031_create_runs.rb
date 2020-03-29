class CreateRuns < ActiveRecord::Migration[6.0]
  def change
    create_table :runs do |t|
      t.string :title
      t.float :distance
      t.float :duration
      t.datetime :started_at
      t.datetime :ended_at, :null => true
      t.text :note
      t.boolean :finished, :default => false
      t.boolean :paused, :default => false
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
