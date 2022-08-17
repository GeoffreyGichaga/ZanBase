Rails.application.routes.draw do
  resources :user_details, only: [:create,:update]
  resources :attendances
  resources :targets, only: [:create,:index]
  resources :users , only: [:create,:show,:update]
  resources :tutorials
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to: "sessions#create"
  # post "/signup",to: "users#create"
end
