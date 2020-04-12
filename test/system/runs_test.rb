require "application_system_test_case"

class RunsTest < ApplicationSystemTestCase
  setup do
    @run = runs(:one)
  end

  test "visiting the index" do
    visit runs_url
    assert_selector "h1", text: "Runs"
  end

  test "creating a Run" do
    visit runs_url
    click_on "New Run"

    fill_in "Distance", with: @run.distance
    fill_in "Duration", with: @run.duration
    fill_in "Ended at", with: @run.ended_at
    fill_in "Note", with: @run.note
    fill_in "Started at", with: @run.started_at
    fill_in "Title", with: @run.title
    click_on "Create Run"

    assert_text "Run was successfully created"
    click_on "Back"
  end

  test "updating a Run" do
    visit runs_url
    click_on "Edit", match: :first

    fill_in "Distance", with: @run.distance
    fill_in "Duration", with: @run.duration
    fill_in "Ended at", with: @run.ended_at
    fill_in "Note", with: @run.note
    fill_in "Started at", with: @run.started_at
    fill_in "Title", with: @run.title
    click_on "Update Run"

    assert_text "Run was successfully updated"
    click_on "Back"
  end

  test "destroying a Run" do
    visit runs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Run was successfully destroyed"
  end
end
