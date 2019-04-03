# Model View - Extraction Script for InfoWorks to GeoJson
# https://github.com/modelcreate/model-view
#
# MIT License
# 
# Copyright (c) 2019 Luke Butler (luke@matrado.ca)
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

require 'date'
require 'json'

config = {
  "crs"=>  {
    "type"=>  "name",
    "properties"=>  {
      "name"=>  "urn:ogc:def:crs:EPSG::27700"
    }
  },
  "tables"=>  [{
      "name"=>  "_nodes",
      "type"=>  "point",
      "fields"=>  ["node_id","z","user_text_1","user_text_3","user_text_3","user_text_4","user_text_5","user_text_6"],
      "results"=>  ["pressure","demand","leakage"],
      "result"=>  ["totdemnd","totleak"]
    },{
      "name"=>  "_links",
      "type"=>  "line",
      "fields"=>  ["us_node_id","ds_node_id","link_suffix","diameter","material","year","user_text_1","user_text_3","user_text_3","user_text_4","user_text_5","user_text_6","user_text_7","user_text_8"],
      "results"=>  ["flow"],
      "result"=>  []
    }
  ]
}

class Float
  def signif(signs)
    Float("%.#{signs}g" % self)
  end
end

class IwGeojson
  def initialize(network, config)
    @network = network
    @config = config
    @features = []
    @json = {
      "type" => "FeatureCollection",
      "features" => @features,
      "crs" => @config["crs"],
      "model" => {
        "timesteps" => @network.list_timesteps
      }
    }

    extract_network
  end

  def to_geojson
    @json.to_json
  end

  private

  def extract_network

    @config["tables"].each do |table|
      if table["type"] == "point"
        @network.row_object_collection(table["name"]).each do |ro|
          add_point_feature(ro, table)
        end
      elsif table["type"] == "line"
        @network.row_object_collection(table["name"]).each do |ro|
          add_line_feature(ro, table)
        end
      end
    end
  end

  def add_line_feature(ro, table)
    @features.push(
      {
        "type" => "Feature",
        "geometry" => {
          "type" => "LineString",
          "coordinates" => ro.bends.collect() { |x| (x <= 1) ? x.signif(2) : x.round(2) }.each_slice(2).to_a
        },
        "properties" => get_properties(ro, table)
      }
    )
  end

  def add_point_feature(ro, table)
    @features.push(

      {
        "type" => "Feature",
        "geometry" => {
          "type" =>  "Point",
          "coordinates" =>  [ro.x.round(2), ro.y.round(2)]
        },
        "properties" =>  get_properties(ro, table)
      }
    )
  end

  def get_properties(ro, table)

    props = {
      "table" => ro.table
    }

    table["fields"].each do |field|
      props[field] = ro[field]
    end

    table["results"].each do |field|
      props[field] = ro.results(field).collect { |x| (x <= 1) ? x.signif(2) : x.round(2) }
    end

    table["result"].each do |field|
      props[field] =  (ro.result(field) <= 1) ? ro.result(field).signif(2) : ro.result(field).round(2)
    end

    props

  end

end

puts "Model View - InfoWorks to GeoJson Extraction v0.1.0"
puts "Licenced under MIT - Luke Butler (luke@matrado.ca)"
puts "Source Code: https://github.com/modelcreate/model-view"
puts  ""

WSApplication.message_box 'Extractions may take between 1 minute and 10 minutes depending on the size of your model. This script has only been tested on WS Pro 3.5, it may not work for older versions',nil,nil,false 
net=WSApplication.current_network

begin
  is_sim =  (net.current_timestep > -2) ? true : nil
rescue => exception
  if exception.message == "current_timestep: method cannot be run on a network without loaded results"
    is_sim = false
  else
    raise exception
  end
end

#.model_object only existing on the latest versions of IW
begin
  mo = net.model_object 
  name = mo.name
rescue => exception
 name = "Model Extract"
end

if (is_sim)
  file=WSApplication.file_dialog(false, "json", "GeoJson file",name,false,false) 
  if file.nil? 
    puts "Model extraction canceled"
  else
    geojson = IwGeojson.new(net, config).to_geojson
    File.open(file,'w') do |f|
      f.write(geojson)
    end

    puts "Model extracted:"
    puts file
    puts ""
    puts "The file can now be loaded in GIS software compatible with GeoJson files or viewed online at: "
    puts "https:/modelview.matrado.ca"
  end
else
  puts "This script only works with InfoWorks simulations for now"
  puts "Read the extraction guide at the project GitHub page above, there may also be a new version of this script"
end


