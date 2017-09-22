class GeocodeService

  def self.getGeocode(address)
    @resp = Faraday.get 'https://maps.googleapis.com/maps/api/geocode/json' do |req|
      req.params['key'] = ENV['GOOGLE_KEY']
      req.params['address'] = address
    end
    return JSON.parse(@resp.body)
  end

end
