Rails.application.routes.draw do
  get 'courses/new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'students#index'

  namespace :api do
    namespace :v1 do
      get '/students' => 'students#index'
      post '/courses' => 'courses#create'
    end
  end
end
