json.extract! location, :id, :logged_at, :latitude, :longitude, :run_id, :created_at, :updated_at
json.url location_url(location, format: :json)
