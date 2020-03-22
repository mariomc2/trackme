Rails.application.routes.draw do

  
  resources :runs do
  	resources :locations
  end
	root 'trackme#live'

  get 'trackme/live'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
