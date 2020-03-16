Rails.application.routes.draw do

	root 'trackme#live'

  get 'trackme/live'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
