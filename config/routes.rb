Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api, defaults: {format: :json} do
      resources :users, only:[:create, :update, :show, :index]
      resource :session, only:[:create, :destroy]
      resources :channels, only:[:create, :index, :update, :show, :destroy]
      resource :memberships, only:[:create, :destroy]
      resources :messages, only:[:create, :index, :update, :show, :destroy]
      resources :reactions, only:[:create, :destroy]
      resources :notifications, only:[:create, :show, :destroy]
    end

    root "static_pages#root"
end
