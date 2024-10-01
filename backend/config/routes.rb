Rails.application.routes.draw do
  Rails.application.routes.draw do
    resources :users
    resources :posts
    resources :photos
    resources :likes
    post 'login', to: 'sessions#create'
  end
  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end


# resources :users, only: %i[index show create]
# resources :photos, only: %i[index show create]
# resources :likes, only: [:create]
