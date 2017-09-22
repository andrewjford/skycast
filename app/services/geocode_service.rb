class GeocodeService

  def self.getGeocode(address)
    url = 'https://maps.googleapis.com/maps/api/geocode/json'

    @resp = Faraday.get url do |req|
      req.params['key'] = ENV['GOOGLE_KEY']
      req.params['address'] = address
    end

    return JSON.parse(@resp.body)
  end

end
