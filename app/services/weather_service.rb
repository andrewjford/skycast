class WeatherService

  def self.getCurrent(lat_lng)
    # lat_lng param is a hash
    latlng_string = lat_lng['lat'].to_s + ',' + lat_lng['lng'].to_s

    url = 'https://api.darksky.net/forecast'
    url += "/#{ENV['DARKSKY_KEY']}/#{latlng_string}"

    @resp = Faraday.get url
    return JSON.parse(@resp.body)
  end

end
