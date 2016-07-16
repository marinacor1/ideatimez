Rails.application.routes.draw do
  root 'ideas#index'

  resouces :ideas, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :ideas, defaults {format: :json} do
      end
    end
  end
  
end
