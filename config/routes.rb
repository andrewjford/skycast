Rails.application.routes.draw do
  get '/current', to: 'weather#current'
end
