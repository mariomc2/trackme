class Run < ApplicationRecord
	belongs_to :user
	has_many :locations

	def km
		if self.distance
			return self.distance / 1000
		else
			return 0
		end
	end

	def dur
		if self.duration
			return Time.at(self.duration).utc.strftime("%H:%M:%S")
		else
			return
		end
	end

	def kmh
		if self.duration && self.distance
			return (self.distance/1000) / (self.duration/3600)
		else
			return 0
		end
	end
end
