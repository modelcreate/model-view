# NO LONGER IN USE, ONLY EPANET MODELS CAN BE LOADED

## Extract InfoWorks WS Pro Model to GeoJson

The script included in this directory converts a simulation in InfoWorks WS Pro into a GeoJSON file which can be opened with compatible GIS software or with the Model View application.

## Using the script

1. [Download the script](https://raw.githubusercontent.com/modelcreate/model-view/master/ruby/modelview_export_to_geojson.rb)
2. Open a simulation in InfoWorks WS Pro
3. With the geoplan open run the script by going to Network > Run Ruby Script
4. Choose a location and filename for the GeoJSON file
5. The script runs between 1 minute to 10 minutes, based on the size of your network

## Known issues/limitations

- Currently only tested with IW Pro 3.5, it may not work on older versions
- Will only extract simulation results, you can not use it on a network directly
- Which fields get extracted are currently hard-coded within the ruby script
