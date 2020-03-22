# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_22_030420) do

  create_table "locations", force: :cascade do |t|
    t.datetime "logged_at"
    t.float "latitude"
    t.float "longitude"
    t.integer "run_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["run_id"], name: "index_locations_on_run_id"
  end

  create_table "runs", force: :cascade do |t|
    t.string "title"
    t.float "distance"
    t.float "duration"
    t.datetime "started_at"
    t.datetime "ended_at"
    t.text "note"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "locations", "runs"
end
