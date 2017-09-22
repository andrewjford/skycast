class WeatherController < ApplicationController

  def current
    geocodeResponse = GeocodeService.getGeocode(current_params[:address])
    begin
      lat_lng = geocodeResponse['results'][0]['geometry']['location']
      weatherResponse = WeatherService.getCurrent(lat_lng)
      render json: weatherResponse
    rescue => e
      render json: {error: "Location Invalid"}
    end
  end

  private

  def current_params
    params.permit(:address)
  end

end
