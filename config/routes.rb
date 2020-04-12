Rails.application.routes.draw do

	root to: 'trackme#home'
  devise_for :users
  
  resources :runs do
  	resources :locations
  end
	

  get 'trackme/live'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
