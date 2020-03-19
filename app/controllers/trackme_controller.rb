class TrackmeController < ApplicationController
  def live
  	# ActionCable.server.broadcast('notifications_channel', 'You have visited the welcome page.')
  end
end
