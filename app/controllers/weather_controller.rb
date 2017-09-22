class WeatherController < ApplicationController

  def current
    geocodeResponse = GeocodeService.getGeocode(current_params[:address])
    render json: geocodeResponse
  end

  private

  def current_params
    params.permit(:address)
  end

end
