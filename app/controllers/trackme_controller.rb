class TrackmeController < ApplicationController
  def live
  	# ActionCable.server.broadcast('notifications_channel', 'You have visited the welcome page.')
  end

  def home
  	@run = current_user.runs.where(finished: false).order('started_at').last
  	if !@run
  		@run = Run.new
  	end
  end
end
