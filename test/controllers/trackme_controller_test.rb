require 'test_helper'

class TrackmeControllerTest < ActionDispatch::IntegrationTest
  test "should get live" do
    get trackme_live_url
    assert_response :success
  end

end
