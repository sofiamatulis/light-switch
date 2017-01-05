require 'test_helper'

class LightsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lights_index_url
    assert_response :success
  end

end
