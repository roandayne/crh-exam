Rails.application.routes.draw do
  namespace :api do
    get 'sessions', to: 'sessions#show'
    post 'sessions', to: 'sessions#create'
    delete 'sessions', to: 'sessions#destroy'

    resources :users, only: [:show]
  end
end
