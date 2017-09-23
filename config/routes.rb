Rails.application.routes.draw do
  get '/current', to: 'weather#current'
  get '/history', to: 'weather#history'
end
