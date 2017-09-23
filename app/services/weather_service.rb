class WeatherService

  @@url_base = 'https://api.darksky.net/forecast'

  def self.get_current(lat_lng)
    latlng_string = self.convert_latlng(lat_lng)
    url = @@url_base + "/#{ENV['DARKSKY_KEY']}/#{latlng_string}"
    return self.get(url)
  end

  def self.get_history(lat_lng, time)
    latlng_string = self.convert_latlng(lat_lng)
    url = @@url_base + "/#{ENV['DARKSKY_KEY']}/#{latlng_string},#{time}"
    return self.get(url)
  end

  private

  def self.get(url)
    @resp = Faraday.get url
    begin
      return JSON.parse(@resp.body)
    rescue => e
      puts @resp.reason_phrase
      return {error: @resp.status}
    end
  end

  def self.convert_latlng(lat_lng)
    # convert lat_lng param from hash to string
    lat_lng['lat'].to_s + ',' + lat_lng['lng'].to_s
  end

end
