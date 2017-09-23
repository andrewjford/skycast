class GeocodeService

  def self.get_geocode(address)
    url = 'https://maps.googleapis.com/maps/api/geocode/json'

    @resp = Faraday.get url do |req|
      req.params['key'] = ENV['GOOGLE_KEY']
      req.params['address'] = address
    end

    begin
      return JSON.parse(@resp.body)
    rescue
      puts @resp.reason_phrase
      return {error: @resp.status}
    end
  end

end
