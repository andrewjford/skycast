class WeatherController < ApplicationController

  def current
    geocodeResponse = GeocodeService.get_geocode(current_params[:address])
    begin
      lat_lng = geocodeResponse['results'][0]['geometry']['location']
      weatherResponse = WeatherService.get_current(lat_lng)
      render json: weatherResponse
    rescue => e
      render json: {error: "Unable to retrieve data on given location."}
    end
  end

  def history
    geocodeResponse = GeocodeService.get_geocode(history_params[:address])
    begin
      lat_lng = geocodeResponse['results'][0]['geometry']['location']
      weatherResponse = WeatherService.get_history(lat_lng, history_params[:time])
      render json: weatherResponse
    rescue => e
      render json: {error: "Unable to retrieve data on given location."}
    end
  end

  private

  def current_params
    params.permit(:address)
  end

  def history_params
    params.permit(:address, :time)
  end

end
