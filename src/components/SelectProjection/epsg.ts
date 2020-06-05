export interface ProjectionOption {
  value: string;
  label: string;
}

export const proj4List: ProjectionOption[] = [
  {
    label: "Abidjan 1987 - EPSG:4143",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-124.76,53,466.79,0,0,0,0 +no_defs",
  },
  {
    label: "Abidjan 1987 / TM 5 NW - EPSG:2165",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-5 +k=0.9996 +x_0=500000 +y_0=0 +ellps=clrk80 +towgs84=-124.76,53,466.79,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Abidjan 1987 / UTM zone 29N - EPSG:2043",
    value:
      "+proj=utm +zone=29 +ellps=clrk80 +towgs84=-124.76,53,466.79,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Abidjan 1987 / UTM zone 30N - EPSG:2041",
    value:
      "+proj=utm +zone=30 +ellps=clrk80 +towgs84=-124.76,53,466.79,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Accra - EPSG:4168",
    value:
      "+proj=longlat +a=6378300 +b=6356751.689189189 +towgs84=-199,32,322,0,0,0,0 +no_defs",
  },
  {
    label: "Accra / Ghana National Grid - EPSG:2136",
    value:
      "+proj=tmerc +lat_0=4.666666666666667 +lon_0=-1 +k=0.99975 +x_0=274319.7391633579 +y_0=0 +a=6378300 +b=6356751.689189189 +towgs84=-199,32,322,0,0,0,0 +to_meter=0.3047997101815088 +no_defs",
  },
  {
    label: "Accra / TM 1 NW - EPSG:2137",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-1 +k=0.9996 +x_0=500000 +y_0=0 +a=6378300 +b=6356751.689189189 +towgs84=-199,32,322,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Adindan - EPSG:4201",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-166,-15,204,0,0,0,0 +no_defs",
  },
  {
    label: "Adindan / UTM zone 35N - EPSG:20135",
    value:
      "+proj=utm +zone=35 +ellps=clrk80 +towgs84=-166,-15,204,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Adindan / UTM zone 36N - EPSG:20136",
    value:
      "+proj=utm +zone=36 +ellps=clrk80 +towgs84=-166,-15,204,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Adindan / UTM zone 37N - EPSG:20137",
    value:
      "+proj=utm +zone=37 +ellps=clrk80 +towgs84=-166,-15,204,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Adindan / UTM zone 38N - EPSG:20138",
    value:
      "+proj=utm +zone=38 +ellps=clrk80 +towgs84=-166,-15,204,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Afgooye - EPSG:4205",
    value: "+proj=longlat +ellps=krass +towgs84=-43,-163,45,0,0,0,0 +no_defs",
  },
  {
    label: "Afgooye / UTM zone 38N - EPSG:20538",
    value:
      "+proj=utm +zone=38 +ellps=krass +towgs84=-43,-163,45,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Afgooye / UTM zone 39N - EPSG:20539",
    value:
      "+proj=utm +zone=39 +ellps=krass +towgs84=-43,-163,45,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Agadez - EPSG:4206",
    value: "+proj=longlat +a=6378249.2 +b=6356515 +no_defs",
  },
  {
    label: "AGD66 - EPSG:4202",
    value:
      "+proj=longlat +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +no_defs",
  },
  {
    label: "AGD66 / ACT Standard Grid - EPSG:5825",
    value:
      "+proj=tmerc +lat_0=-35.31773627777778 +lon_0=149.0092948305555 +k=1.000086 +x_0=200000 +y_0=600000 +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 48 (deprecated) - EPSG:20248",
    value:
      "+proj=utm +zone=48 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 49 - EPSG:20249",
    value:
      "+proj=utm +zone=49 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 50 - EPSG:20250",
    value:
      "+proj=utm +zone=50 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 51 - EPSG:20251",
    value:
      "+proj=utm +zone=51 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 52 - EPSG:20252",
    value:
      "+proj=utm +zone=52 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 53 - EPSG:20253",
    value:
      "+proj=utm +zone=53 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 54 - EPSG:20254",
    value:
      "+proj=utm +zone=54 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 55 - EPSG:20255",
    value:
      "+proj=utm +zone=55 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 56 - EPSG:20256",
    value:
      "+proj=utm +zone=56 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 57 - EPSG:20257",
    value:
      "+proj=utm +zone=57 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / AMG zone 58 - EPSG:20258",
    value:
      "+proj=utm +zone=58 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD66 / Vicgrid66 - EPSG:3110",
    value:
      "+proj=lcc +lat_1=-36 +lat_2=-38 +lat_0=-37 +lon_0=145 +x_0=2500000 +y_0=4500000 +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs",
  },
  {
    label: "AGD84 - EPSG:4203",
    value:
      "+proj=longlat +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +no_defs",
  },
  {
    label: "AGD84 / AMG zone 48 (deprecated) - EPSG:20348",
    value:
      "+proj=utm +zone=48 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "AGD84 / AMG zone 49 - EPSG:20349",
    value:
      "+proj=utm +zone=49 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "AGD84 / AMG zone 50 - EPSG:20350",
    value:
      "+proj=utm +zone=50 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "AGD84 / AMG zone 51 - EPSG:20351",
    value:
      "+proj=utm +zone=51 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "AGD84 / AMG zone 52 - EPSG:20352",
    value:
      "+proj=utm +zone=52 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "AGD84 / AMG zone 53 - EPSG:20353",
    value:
      "+proj=utm +zone=53 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "AGD84 / AMG zone 54 - EPSG:20354",
    value:
      "+proj=utm +zone=54 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "AGD84 / AMG zone 55 - EPSG:20355",
    value:
      "+proj=utm +zone=55 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "AGD84 / AMG zone 56 - EPSG:20356",
    value:
      "+proj=utm +zone=56 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "AGD84 / AMG zone 57 (deprecated) - EPSG:20357",
    value:
      "+proj=utm +zone=57 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "AGD84 / AMG zone 58 (deprecated) - EPSG:20358",
    value:
      "+proj=utm +zone=58 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ain el Abd - EPSG:4204",
    value: "+proj=longlat +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +no_defs",
  },
  {
    label: "Ain el Abd / Aramco Lambert - EPSG:2318",
    value:
      "+proj=lcc +lat_1=17 +lat_2=33 +lat_0=25.08951 +lon_0=48 +x_0=0 +y_0=0 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ain el Abd / Bahrain Grid - EPSG:20499",
    value:
      "+proj=utm +zone=39 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ain el Abd / UTM zone 36N - EPSG:20436",
    value:
      "+proj=utm +zone=36 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ain el Abd / UTM zone 37N - EPSG:20437",
    value:
      "+proj=utm +zone=37 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ain el Abd / UTM zone 38N - EPSG:20438",
    value:
      "+proj=utm +zone=38 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ain el Abd / UTM zone 39N - EPSG:20439",
    value:
      "+proj=utm +zone=39 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ain el Abd / UTM zone 40N - EPSG:20440",
    value:
      "+proj=utm +zone=40 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Albanian 1987 - EPSG:4191",
    value: "+proj=longlat +ellps=krass +no_defs",
  },
  {
    label: "Albanian 1987 / Gauss Kruger zone 4 (deprecated) - EPSG:2199",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "Albanian 1987 / Gauss-Kruger zone 4 - EPSG:2462",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "American Samoa 1962 - EPSG:4169",
    value: "+proj=longlat +ellps=clrk66 +towgs84=-115,118,426,0,0,0,0 +no_defs",
  },
  {
    label: "American Samoa 1962 / American Samoa Lambert - EPSG:3102",
    value:
      "+proj=lcc +lat_1=-14.26666666666667 +lat_0=-14.26666666666667 +lon_0=-170 +k_0=1 +x_0=152400.3048006096 +y_0=95169.31165862332 +ellps=clrk66 +towgs84=-115,118,426,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label:
      "American Samoa 1962 / American Samoa Lambert (deprecated) - EPSG:2155",
    value:
      "+proj=lcc +lat_1=-14.26666666666667 +lat_0=-14.26666666666667 +lon_0=170 +k_0=1 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=-115,118,426,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label:
      "American Samoa 1962 / American Samoa Lambert (deprecated) - EPSG:2194",
    value:
      "+proj=lcc +lat_1=-14.26666666666667 +lat_0=-14.26666666666667 +lon_0=-170 +k_0=1 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=-115,118,426,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "Amersfoort - EPSG:4289",
    value:
      "+proj=longlat +ellps=bessel +towgs84=565.4171,50.3319,465.5524,-0.398957388243134,0.343987817378283,-1.87740163998045,4.0725 +no_defs",
  },
  {
    label: "Amersfoort / RD New - EPSG:28992",
    value:
      "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.4171,50.3319,465.5524,-0.398957388243134,0.343987817378283,-1.87740163998045,4.0725 +units=m +no_defs",
  },
  {
    label: "Amersfoort / RD New + NAP height - EPSG:7415",
    value:
      "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.4171,50.3319,465.5524,-0.398957388243134,0.343987817378283,-1.87740163998045,4.0725 +units=m +vunits=m +no_defs",
  },
  {
    label: "Amersfoort / RD Old - EPSG:28991",
    value:
      "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=0 +y_0=0 +ellps=bessel +towgs84=565.4171,50.3319,465.5524,-0.398957388243134,0.343987817378283,-1.87740163998045,4.0725 +units=m +no_defs",
  },
  {
    label: "Ammassalik 1958 - EPSG:4196",
    value:
      "+proj=longlat +ellps=intl +towgs84=-45,417,-3.5,0,0,0.814,-0.6 +no_defs",
  },
  {
    label: "Anguilla 1957 - EPSG:4600",
    value: "+proj=longlat +ellps=clrk80 +no_defs",
  },
  {
    label: "Anguilla 1957 / British West Indies Grid - EPSG:2000",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "Antigua 1943 - EPSG:4601",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-255,-15,71,0,0,0,0 +no_defs",
  },
  {
    label: "Antigua 1943 / British West Indies Grid - EPSG:2001",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=-255,-15,71,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Aratu - EPSG:4208",
    value:
      "+proj=longlat +ellps=intl +towgs84=-151.99,287.04,-147.45,0,0,0,0 +no_defs",
  },
  {
    label: "Aratu / UTM zone 22S - EPSG:20822",
    value:
      "+proj=utm +zone=22 +south +ellps=intl +towgs84=-151.99,287.04,-147.45,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Aratu / UTM zone 23S - EPSG:20823",
    value:
      "+proj=utm +zone=23 +south +ellps=intl +towgs84=-151.99,287.04,-147.45,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Aratu / UTM zone 24S - EPSG:20824",
    value:
      "+proj=utm +zone=24 +south +ellps=intl +towgs84=-151.99,287.04,-147.45,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Aratu / UTM zone 25S - EPSG:5337",
    value:
      "+proj=utm +zone=25 +south +ellps=intl +towgs84=-151.99,287.04,-147.45,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Arc 1950 - EPSG:4209",
    value:
      "+proj=longlat +a=6378249.145 +b=6356514.966398753 +towgs84=-143,-90,-294,0,0,0,0 +no_defs",
  },
  {
    label: "Arc 1950 / UTM zone 34S - EPSG:20934",
    value:
      "+proj=utm +zone=34 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-143,-90,-294,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Arc 1950 / UTM zone 35S - EPSG:20935",
    value:
      "+proj=utm +zone=35 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-143,-90,-294,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Arc 1950 / UTM zone 36S - EPSG:20936",
    value:
      "+proj=utm +zone=36 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-143,-90,-294,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Arc 1960 - EPSG:4210",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +no_defs",
  },
  {
    label: "Arc 1960 / UTM zone 35N - EPSG:21095",
    value:
      "+proj=utm +zone=35 +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Arc 1960 / UTM zone 35S - EPSG:21035",
    value:
      "+proj=utm +zone=35 +south +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Arc 1960 / UTM zone 36N - EPSG:21096",
    value:
      "+proj=utm +zone=36 +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Arc 1960 / UTM zone 36S - EPSG:21036",
    value:
      "+proj=utm +zone=36 +south +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Arc 1960 / UTM zone 37N - EPSG:21097",
    value:
      "+proj=utm +zone=37 +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Arc 1960 / UTM zone 37S - EPSG:21037",
    value:
      "+proj=utm +zone=37 +south +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ascension Island 1958 - EPSG:4712",
    value: "+proj=longlat +ellps=intl +towgs84=-205,107,53,0,0,0,0 +no_defs",
  },
  {
    label: "ATF (Paris) - EPSG:4901",
    value:
      "+proj=longlat +a=6376523 +b=6355862.933255573 +pm=2.337208333333333 +no_defs",
  },
  {
    label: "ATF (Paris) / Nord de Guerre - EPSG:27500",
    value:
      "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=5.399999999999999 +k_0=0.99950908 +x_0=500000 +y_0=300000 +a=6376523 +b=6355862.933255573 +pm=2.337208333333333 +units=m +no_defs",
  },
  {
    label: "ATS77 - EPSG:4122",
    value: "+proj=longlat +a=6378135 +b=6356750.304921594 +no_defs",
  },
  {
    label: "ATS77 / MTM Nova Scotia zone 4 - EPSG:2294",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=4500000 +y_0=0 +a=6378135 +b=6356750.304921594 +units=m +no_defs",
  },
  {
    label: "ATS77 / MTM Nova Scotia zone 5 - EPSG:2295",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=5500000 +y_0=0 +a=6378135 +b=6356750.304921594 +units=m +no_defs",
  },
  {
    label: "ATS77 / New Brunswick Stereographic (ATS77) - EPSG:2200",
    value:
      "+proj=sterea +lat_0=46.5 +lon_0=-66.5 +k=0.999912 +x_0=300000 +y_0=800000 +a=6378135 +b=6356750.304921594 +units=m +no_defs",
  },
  {
    label: "ATS77 / Prince Edward Isl. Stereographic (ATS77) - EPSG:2290",
    value:
      "+proj=sterea +lat_0=47.25 +lon_0=-63 +k=0.999912 +x_0=700000 +y_0=400000 +a=6378135 +b=6356750.304921594 +units=m +no_defs",
  },
  {
    label: "ATS77 / UTM zone 19N - EPSG:2219",
    value:
      "+proj=utm +zone=19 +a=6378135 +b=6356750.304921594 +units=m +no_defs",
  },
  {
    label: "ATS77 / UTM zone 20N - EPSG:2220",
    value:
      "+proj=utm +zone=20 +a=6378135 +b=6356750.304921594 +units=m +no_defs",
  },
  {
    label: "Australian Antarctic - EPSG:4176",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Australian Antarctic - EPSG:4930",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Australian Antarctic (geocentric) - EPSG:4340",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Ayabelle Lighthouse - EPSG:4713",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-79,-129,145,0,0,0,0 +no_defs",
  },
  {
    label: "Azores Central 1948 - EPSG:4183",
    value: "+proj=longlat +ellps=intl +towgs84=-104,167,-38,0,0,0,0 +no_defs",
  },
  {
    label: "Azores Central 1948 / UTM zone 26N - EPSG:2189",
    value:
      "+proj=utm +zone=26 +ellps=intl +towgs84=-104,167,-38,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Azores Central 1995 - EPSG:4665",
    value:
      "+proj=longlat +ellps=intl +towgs84=-106.226,166.366,-37.893,0,0,0,0 +no_defs",
  },
  {
    label: "Azores Central 1995 / UTM zone 26N - EPSG:3063",
    value:
      "+proj=utm +zone=26 +ellps=intl +towgs84=-106.226,166.366,-37.893,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Azores Occidental 1939 - EPSG:4182",
    value: "+proj=longlat +ellps=intl +towgs84=-425,-169,81,0,0,0,0 +no_defs",
  },
  {
    label: "Azores Occidental 1939 / UTM zone 25N - EPSG:2188",
    value:
      "+proj=utm +zone=25 +ellps=intl +towgs84=-425,-169,81,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Azores Oriental 1940 - EPSG:4184",
    value: "+proj=longlat +ellps=intl +towgs84=-203,141,53,0,0,0,0 +no_defs",
  },
  {
    label: "Azores Oriental 1940 / UTM zone 26N - EPSG:2190",
    value:
      "+proj=utm +zone=26 +ellps=intl +towgs84=-203,141,53,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Azores Oriental 1995 - EPSG:4664",
    value:
      "+proj=longlat +ellps=intl +towgs84=-204.619,140.176,55.226,0,0,0,0 +no_defs",
  },
  {
    label: "Azores Oriental 1995 / UTM zone 26N - EPSG:3062",
    value:
      "+proj=utm +zone=26 +ellps=intl +towgs84=-204.619,140.176,55.226,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Barbados 1938 - EPSG:4212",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=31.95,300.99,419.19,0,0,0,0 +no_defs",
  },
  {
    label: "Barbados 1938 / Barbados National Grid - EPSG:21292",
    value:
      "+proj=tmerc +lat_0=13.17638888888889 +lon_0=-59.55972222222222 +k=0.9999986 +x_0=30000 +y_0=75000 +ellps=clrk80 +towgs84=31.95,300.99,419.19,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Barbados 1938 / British West Indies Grid - EPSG:21291",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=31.95,300.99,419.19,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Batavia - EPSG:4211",
    value: "+proj=longlat +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +no_defs",
  },
  {
    label: "Batavia (Jakarta) - EPSG:4813",
    value:
      "+proj=longlat +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +pm=jakarta +no_defs",
  },
  {
    label: "Batavia (Jakarta) / NEIEZ - EPSG:5330",
    value:
      "+proj=merc +lon_0=3.192280555555556 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +pm=jakarta +units=m +no_defs",
  },
  {
    label: "Batavia (Jakarta) / NEIEZ (deprecated) - EPSG:21100",
    value:
      "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +pm=jakarta +units=m +no_defs",
  },
  {
    label: "Batavia / NEIEZ - EPSG:3001",
    value:
      "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Batavia / TM 109 SE - EPSG:2308",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=109 +k=0.9996 +x_0=500000 +y_0=10000000 +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Batavia / UTM zone 48S - EPSG:21148",
    value:
      "+proj=utm +zone=48 +south +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Batavia / UTM zone 49S - EPSG:21149",
    value:
      "+proj=utm +zone=49 +south +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Batavia / UTM zone 50S - EPSG:21150",
    value:
      "+proj=utm +zone=50 +south +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "BDA2000 - EPSG:4762",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "BDA2000 - EPSG:4886",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "BDA2000 / Bermuda 2000 National Grid - EPSG:3770",
    value:
      "+proj=tmerc +lat_0=32 +lon_0=-64.75 +k=1 +x_0=550000 +y_0=100000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beduaram - EPSG:4213",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-106,-87,188,0,0,0,0 +no_defs",
  },
  {
    label: "Beduaram / TM 13 NE - EPSG:2931",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13 +k=0.9996 +x_0=500000 +y_0=0 +a=6378249.2 +b=6356515 +towgs84=-106,-87,188,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 - EPSG:4214",
    value:
      "+proj=longlat +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 102E - EPSG:2431",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 105E - EPSG:2432",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 108E - EPSG:2433",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 111E - EPSG:2434",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 114E - EPSG:2435",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 117E - EPSG:2436",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 120E - EPSG:2437",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 123E - EPSG:2438",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 126E - EPSG:2439",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 129E - EPSG:2440",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 132E - EPSG:2441",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 135E - EPSG:2442",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 75E - EPSG:2422",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 78E - EPSG:2423",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 81E - EPSG:2424",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 84E - EPSG:2425",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 87E - EPSG:2426",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 90E - EPSG:2427",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 93E - EPSG:2428",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 96E - EPSG:2429",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger CM 99E - EPSG:2430",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 25 - EPSG:2401",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 26 - EPSG:2402",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 27 - EPSG:2403",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 28 - EPSG:2404",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 29 - EPSG:2405",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 30 - EPSG:2406",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 31 - EPSG:2407",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 32 - EPSG:2408",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 33 - EPSG:2409",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 34 - EPSG:2410",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 35 - EPSG:2411",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 36 - EPSG:2412",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 37 - EPSG:2413",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 38 - EPSG:2414",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 39 - EPSG:2415",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 40 - EPSG:2416",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 41 - EPSG:2417",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 42 - EPSG:2418",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 43 - EPSG:2419",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 44 - EPSG:2420",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / 3-degree Gauss-Kruger zone 45 - EPSG:2421",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 13N (deprecated) - EPSG:21473",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 14N (deprecated) - EPSG:21474",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 15N (deprecated) - EPSG:21475",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 16N (deprecated) - EPSG:21476",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 17N (deprecated) - EPSG:21477",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 18N (deprecated) - EPSG:21478",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 19N (deprecated) - EPSG:21479",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 20N (deprecated) - EPSG:21480",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 21N (deprecated) - EPSG:21481",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 22N (deprecated) - EPSG:21482",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger 23N (deprecated) - EPSG:21483",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 105E - EPSG:21458",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 111E - EPSG:21459",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 117E - EPSG:21460",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 123E - EPSG:21461",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 129E - EPSG:21462",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 135E - EPSG:21463",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 75E - EPSG:21453",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 81E - EPSG:21454",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 87E - EPSG:21455",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 93E - EPSG:21456",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger CM 99E - EPSG:21457",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 13 - EPSG:21413",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 14 - EPSG:21414",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 15 - EPSG:21415",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 16 - EPSG:21416",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 17 - EPSG:21417",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 18 - EPSG:21418",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 19 - EPSG:21419",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 20 - EPSG:21420",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 21 - EPSG:21421",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 22 - EPSG:21422",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Beijing 1954 / Gauss-Kruger zone 23 - EPSG:21423",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Belge 1950 - EPSG:4215",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Belge 1950 (Brussels) - EPSG:4809",
    value: "+proj=longlat +ellps=intl +pm=brussels +no_defs",
  },
  {
    label: "Belge 1950 (Brussels) / Belge Lambert 50 - EPSG:21500",
    value:
      "+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=90 +lon_0=0 +x_0=150000 +y_0=5400000 +ellps=intl +pm=brussels +units=m +no_defs",
  },
  {
    label: "Belge 1972 - EPSG:4313",
    value:
      "+proj=longlat +ellps=intl +towgs84=-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747 +no_defs",
  },
  {
    label: "Belge 1972 / Belge Lambert 72 - EPSG:31300",
    value:
      "+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=90 +lon_0=4.356939722222222 +x_0=150000.01256 +y_0=5400088.4378 +ellps=intl +towgs84=-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs",
  },
  {
    label: "Belge 1972 / Belgian Lambert 72 - EPSG:31370",
    value:
      "+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs",
  },
  {
    label: "Belge 1972 / Belgian Lambert 72 + Ostend height - EPSG:6190",
    value:
      "+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747 +units=m +vunits=m +no_defs",
  },
  {
    label: "Bellevue - EPSG:4714",
    value: "+proj=longlat +ellps=intl +towgs84=-127,-769,472,0,0,0,0 +no_defs",
  },
  {
    label: "Bermuda 1957 - EPSG:4216",
    value: "+proj=longlat +ellps=clrk66 +towgs84=-73,213,296,0,0,0,0 +no_defs",
  },
  {
    label: "Bermuda 1957 / UTM zone 20N - EPSG:3769",
    value:
      "+proj=utm +zone=20 +ellps=clrk66 +towgs84=-73,213,296,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bern 1898 (Bern) - EPSG:4801",
    value:
      "+proj=longlat +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +pm=bern +no_defs",
  },
  {
    label: "Bern 1898 (Bern) / LV03C - EPSG:21780",
    value:
      "+proj=somerc +lat_0=46.95240555555556 +lon_0=0 +k_0=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +pm=bern +units=m +no_defs",
  },
  {
    label: "Bern 1938 - EPSG:4306",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "Bissau - EPSG:4165",
    value: "+proj=longlat +ellps=intl +towgs84=-173,253,27,0,0,0,0 +no_defs",
  },
  {
    label: "Bissau / UTM zone 28N - EPSG:2095",
    value:
      "+proj=utm +zone=28 +ellps=intl +towgs84=-173,253,27,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bogota 1975 - EPSG:4218",
    value: "+proj=longlat +ellps=intl +towgs84=307,304,-318,0,0,0,0 +no_defs",
  },
  {
    label: "Bogota 1975 (Bogota) - EPSG:4802",
    value:
      "+proj=longlat +ellps=intl +towgs84=307,304,-318,0,0,0,0 +pm=bogota +no_defs",
  },
  {
    label: "Bogota 1975 / Colombia Bogota zone - EPSG:21897",
    value:
      "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-74.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bogota 1975 / Colombia Bogota zone (deprecated) - EPSG:21892",
    value:
      "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-74.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bogota 1975 / Colombia East - EPSG:21899",
    value:
      "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-68.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bogota 1975 / Colombia East (deprecated) - EPSG:21894",
    value:
      "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-68.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bogota 1975 / Colombia East Central zone - EPSG:21898",
    value:
      "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-71.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bogota 1975 / Colombia East Central zone (deprecated) - EPSG:21893",
    value:
      "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-71.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bogota 1975 / Colombia West zone - EPSG:21896",
    value:
      "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-77.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bogota 1975 / Colombia West zone (deprecated) - EPSG:21891",
    value:
      "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-77.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bogota 1975 / UTM zone 17N (deprecated) - EPSG:21817",
    value:
      "+proj=utm +zone=17 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bogota 1975 / UTM zone 18N - EPSG:21818",
    value:
      "+proj=utm +zone=18 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Bukit Rimpah - EPSG:4219",
    value: "+proj=longlat +ellps=bessel +towgs84=-384,664,-48,0,0,0,0 +no_defs",
  },
  {
    label: "Cadastre 1997 - EPSG:4473",
    value: "+proj=geocent +ellps=intl +units=m +no_defs",
  },
  {
    label: "Cadastre 1997 - EPSG:4475",
    value:
      "+proj=longlat +ellps=intl +towgs84=-381.788,-57.501,-256.673,0,0,0,0 +no_defs",
  },
  {
    label: "Cadastre 1997 / UTM zone 38S - EPSG:5879",
    value:
      "+proj=utm +zone=38 +south +ellps=intl +towgs84=-381.788,-57.501,-256.673,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cadastre 1997 / UTM zone 38S (deprecated) - EPSG:4474",
    value:
      "+proj=utm +zone=38 +south +ellps=intl +towgs84=-382,-59,-262,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Camacupa - EPSG:4220",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-50.9,-347.6,-231,0,0,0,0 +no_defs",
  },
  {
    label: "Camacupa / TM 11.30 SE - EPSG:22091",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11.5 +k=0.9996 +x_0=500000 +y_0=10000000 +ellps=clrk80 +towgs84=-50.9,-347.6,-231,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Camacupa / TM 12 SE - EPSG:22092",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9996 +x_0=500000 +y_0=10000000 +ellps=clrk80 +towgs84=-50.9,-347.6,-231,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Camacupa / UTM zone 32S - EPSG:22032",
    value:
      "+proj=utm +zone=32 +south +ellps=clrk80 +towgs84=-50.9,-347.6,-231,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Camacupa / UTM zone 33S - EPSG:22033",
    value:
      "+proj=utm +zone=33 +south +ellps=clrk80 +towgs84=-50.9,-347.6,-231,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Camp Area Astro - EPSG:4715",
    value: "+proj=longlat +ellps=intl +towgs84=-104,-129,239,0,0,0,0 +no_defs",
  },
  {
    label: "Campo Inchauspe - EPSG:4221",
    value: "+proj=longlat +ellps=intl +towgs84=-148,136,90,0,0,0,0 +no_defs",
  },
  {
    label: "Campo Inchauspe / Argentina 1 - EPSG:22191",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-72 +k=1 +x_0=1500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Campo Inchauspe / Argentina 2 - EPSG:22192",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Campo Inchauspe / Argentina 3 - EPSG:22193",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-66 +k=1 +x_0=3500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Campo Inchauspe / Argentina 4 - EPSG:22194",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-63 +k=1 +x_0=4500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Campo Inchauspe / Argentina 5 - EPSG:22195",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-60 +k=1 +x_0=5500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Campo Inchauspe / Argentina 6 - EPSG:22196",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-57 +k=1 +x_0=6500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Campo Inchauspe / Argentina 7 - EPSG:22197",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-54 +k=1 +x_0=7500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Campo Inchauspe / UTM zone 19S - EPSG:2315",
    value:
      "+proj=utm +zone=19 +south +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Campo Inchauspe / UTM zone 20S - EPSG:2316",
    value:
      "+proj=utm +zone=20 +south +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape - EPSG:4222",
    value:
      "+proj=longlat +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +no_defs",
  },
  {
    label: "Cape / Lo15 - EPSG:22275",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / Lo17 - EPSG:22277",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=17 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / Lo19 - EPSG:22279",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=19 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / Lo21 - EPSG:22281",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / Lo23 - EPSG:22283",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=23 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / Lo25 - EPSG:22285",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / Lo27 - EPSG:22287",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / Lo29 - EPSG:22289",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=29 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / Lo31 - EPSG:22291",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / Lo33 - EPSG:22293",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / UTM zone 34S - EPSG:22234",
    value:
      "+proj=utm +zone=34 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / UTM zone 35S - EPSG:22235",
    value:
      "+proj=utm +zone=35 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape / UTM zone 36S (deprecated) - EPSG:22236",
    value:
      "+proj=utm +zone=36 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cape Canaveral - EPSG:4717",
    value: "+proj=longlat +ellps=clrk66 +towgs84=-2,151,181,0,0,0,0 +no_defs",
  },
  {
    label: "Carthage - EPSG:4223",
    value: "+proj=longlat +datum=carthage +no_defs",
  },
  {
    label: "Carthage (Paris) - EPSG:4816",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-263,6,431,0,0,0,0 +pm=paris +no_defs",
  },
  {
    label: "Carthage / Nord Tunisie - EPSG:22391",
    value:
      "+proj=lcc +lat_1=36 +lat_0=36 +lon_0=9.9 +k_0=0.999625544 +x_0=500000 +y_0=300000 +datum=carthage +units=m +no_defs",
  },
  {
    label: "Carthage / Sud Tunisie - EPSG:22392",
    value:
      "+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=9.9 +k_0=0.999625769 +x_0=500000 +y_0=300000 +datum=carthage +units=m +no_defs",
  },
  {
    label: "Carthage / TM 11 NE - EPSG:2088",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11 +k=0.9996 +x_0=500000 +y_0=0 +datum=carthage +units=m +no_defs",
  },
  {
    label: "Carthage / UTM zone 32N - EPSG:22332",
    value: "+proj=utm +zone=32 +datum=carthage +units=m +no_defs",
  },
  {
    label: "Cayman Islands National Grid 2011 - EPSG:6391",
    value:
      "+proj=lcc +lat_1=19.33333333333333 +lat_2=19.7 +lat_0=19.33333333333333 +lon_0=-80.56666666666666 +x_0=899160 +y_0=579120 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "Cayman Islands National Grid 2011 (deprecated) - EPSG:6141",
    value:
      "+proj=lcc +lat_1=19.33333333333333 +lat_2=19.7 +lat_0=19.33333333333333 +lon_0=80.56666666666666 +x_0=899160 +y_0=579120 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 102E - EPSG:4543",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 105E - EPSG:4544",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 108E - EPSG:4545",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 111E - EPSG:4546",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 114E - EPSG:4547",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 117E - EPSG:4548",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 120E - EPSG:4549",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 123E - EPSG:4550",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 126E - EPSG:4551",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 129E - EPSG:4552",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 132E - EPSG:4553",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 135E - EPSG:4554",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 75E - EPSG:4534",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 78E - EPSG:4535",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 81E - EPSG:4536",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 84E - EPSG:4537",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 87E - EPSG:4538",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 90E - EPSG:4539",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 93E - EPSG:4540",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 96E - EPSG:4541",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger CM 99E - EPSG:4542",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 25 - EPSG:4513",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 26 - EPSG:4514",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 27 - EPSG:4515",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 28 - EPSG:4516",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 29 - EPSG:4517",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 30 - EPSG:4518",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 31 - EPSG:4519",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 32 - EPSG:4520",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 33 - EPSG:4521",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 34 - EPSG:4522",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 35 - EPSG:4523",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 36 - EPSG:4524",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 37 - EPSG:4525",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 38 - EPSG:4526",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 39 - EPSG:4527",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 40 - EPSG:4528",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 41 - EPSG:4529",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 42 - EPSG:4530",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 43 - EPSG:4531",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 44 - EPSG:4532",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / 3-degree Gauss-Kruger zone 45 - EPSG:4533",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 105E - EPSG:4507",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 111E - EPSG:4508",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 117E - EPSG:4509",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 123E - EPSG:4510",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 129E - EPSG:4511",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 135E - EPSG:4512",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 75E - EPSG:4502",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 81E - EPSG:4503",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 87E - EPSG:4504",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 93E - EPSG:4505",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger CM 99E - EPSG:4506",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 13 - EPSG:4491",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 14 - EPSG:4492",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 15 - EPSG:4493",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 16 - EPSG:4494",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 17 - EPSG:4495",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 18 - EPSG:4496",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 19 - EPSG:4497",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 20 - EPSG:4498",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 21 - EPSG:4499",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 22 - EPSG:4500",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CGCS2000 / Gauss-Kruger zone 23 - EPSG:4501",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CH1903 - EPSG:4149",
    value:
      "+proj=longlat +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +no_defs",
  },
  {
    label: "CH1903 / LV03 - EPSG:21781",
    value:
      "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "CH1903 / LV03C-G - EPSG:21782",
    value:
      "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "CH1903+ - EPSG:4150",
    value:
      "+proj=longlat +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +no_defs",
  },
  {
    label: "CH1903+ / LV95 - EPSG:2056",
    value:
      "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Chatham Islands 1971 - EPSG:4672",
    value: "+proj=longlat +ellps=intl +towgs84=175,-38,113,0,0,0,0 +no_defs",
  },
  {
    label: "Chatham Islands 1979 - EPSG:4673",
    value:
      "+proj=longlat +ellps=intl +towgs84=174.05,-25.49,112.57,0,0,0.554,0.2263 +no_defs",
  },
  {
    label: "China Geodetic Coordinate System 2000 - EPSG:4479",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "China Geodetic Coordinate System 2000 - EPSG:4490",
    value: "+proj=longlat +ellps=GRS80 +no_defs",
  },
  {
    label: "Chos Malal 1914 - EPSG:4160",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Chos Malal 1914 / Argentina 2 - EPSG:2081",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +units=m +no_defs",
  },
  {
    label: "CHTRF95 - EPSG:4151",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "CHTRF95 - EPSG:4932",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CHTRF95 (geocentric) - EPSG:4344",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Chua - EPSG:4224",
    value:
      "+proj=longlat +ellps=intl +towgs84=-143.87,243.37,-33.52,0,0,0,0 +no_defs",
  },
  {
    label: "Chua / UTM zone 23S - EPSG:4071",
    value:
      "+proj=utm +zone=23 +south +ellps=intl +towgs84=-143.87,243.37,-33.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "CI1971 / Chatham Islands Map Grid - EPSG:5518",
    value:
      "+proj=tmerc +lat_0=-44 +lon_0=-176.5 +k=1 +x_0=350000 +y_0=650000 +ellps=intl +towgs84=175,-38,113,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "CI1979 / Chatham Islands Map Grid - EPSG:5519",
    value:
      "+proj=tmerc +lat_0=-44 +lon_0=-176.5 +k=1 +x_0=350000 +y_0=650000 +ellps=intl +towgs84=174.05,-25.49,112.57,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "CIGD11 - EPSG:6133",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "CIGD11 - EPSG:6135",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Cocos Islands 1965 - EPSG:4708",
    value:
      "+proj=longlat +ellps=aust_SA +towgs84=-491,-22,435,0,0,0,0 +no_defs",
  },
  {
    label: "Combani 1950 - EPSG:4632",
    value: "+proj=longlat +ellps=intl +towgs84=-382,-59,-262,0,0,0,0 +no_defs",
  },
  {
    label: "Combani 1950 / UTM zone 38S - EPSG:2980",
    value:
      "+proj=utm +zone=38 +south +ellps=intl +towgs84=-382,-59,-262,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Conakry 1905 - EPSG:4315",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-23,259,-9,0,0,0,0 +no_defs",
  },
  {
    label: "Conakry 1905 / UTM zone 28N - EPSG:31528",
    value:
      "+proj=utm +zone=28 +a=6378249.2 +b=6356515 +towgs84=-23,259,-9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Conakry 1905 / UTM zone 29N - EPSG:31529",
    value:
      "+proj=utm +zone=29 +a=6378249.2 +b=6356515 +towgs84=-23,259,-9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Corrego Alegre 1961 - EPSG:5524",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Corrego Alegre 1961 / UTM zone 21S - EPSG:5536",
    value: "+proj=utm +zone=21 +south +ellps=intl +units=m +no_defs",
  },
  {
    label: "Corrego Alegre 1961 / UTM zone 22S - EPSG:5537",
    value: "+proj=utm +zone=22 +south +ellps=intl +units=m +no_defs",
  },
  {
    label: "Corrego Alegre 1961 / UTM zone 23S - EPSG:5538",
    value: "+proj=utm +zone=23 +south +ellps=intl +units=m +no_defs",
  },
  {
    label: "Corrego Alegre 1961 / UTM zone 24S - EPSG:5539",
    value: "+proj=utm +zone=24 +south +ellps=intl +units=m +no_defs",
  },
  {
    label: "Corrego Alegre 1970-72 - EPSG:4225",
    value:
      "+proj=longlat +ellps=intl +towgs84=-205.57,168.77,-4.12,0,0,0,0 +no_defs",
  },
  {
    label: "Corrego Alegre 1970-72 / UTM zone 21S - EPSG:22521",
    value:
      "+proj=utm +zone=21 +south +ellps=intl +towgs84=-205.57,168.77,-4.12,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Corrego Alegre 1970-72 / UTM zone 22S - EPSG:22522",
    value:
      "+proj=utm +zone=22 +south +ellps=intl +towgs84=-205.57,168.77,-4.12,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Corrego Alegre 1970-72 / UTM zone 23S - EPSG:22523",
    value:
      "+proj=utm +zone=23 +south +ellps=intl +towgs84=-205.57,168.77,-4.12,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Corrego Alegre 1970-72 / UTM zone 24S - EPSG:22524",
    value:
      "+proj=utm +zone=24 +south +ellps=intl +towgs84=-205.57,168.77,-4.12,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Corrego Alegre 1970-72 / UTM zone 25S - EPSG:22525",
    value:
      "+proj=utm +zone=25 +south +ellps=intl +towgs84=-205.57,168.77,-4.12,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Cote d'Ivoire - EPSG:4226",
    value: "+proj=longlat +a=6378249.2 +b=6356515 +no_defs",
  },
  {
    label: "County ST74 - EPSG:3854",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18.05787 +k=0.99999506 +x_0=100182.7406 +y_0=-6500620.1207 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "CR05 - EPSG:5363",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "CR05 - EPSG:5365",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "CR05 / CRTM05 - EPSG:5367",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-84 +k=0.9999 +x_0=500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "CSG67 - EPSG:4623",
    value: "+proj=longlat +ellps=intl +towgs84=-186,230,110,0,0,0,0 +no_defs",
  },
  {
    label: "CSG67 / UTM zone 21N - EPSG:3312",
    value:
      "+proj=utm +zone=21 +ellps=intl +towgs84=-186,230,110,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "CSG67 / UTM zone 22N - EPSG:2971",
    value:
      "+proj=utm +zone=22 +ellps=intl +towgs84=-186,230,110,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Dabola 1981 - EPSG:4155",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-83,37,124,0,0,0,0 +no_defs",
  },
  {
    label: "Dabola 1981 / UTM zone 28N - EPSG:3461",
    value:
      "+proj=utm +zone=28 +a=6378249.2 +b=6356515 +towgs84=-83,37,124,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Dabola 1981 / UTM zone 28N (deprecated) - EPSG:2063",
    value:
      "+proj=utm +zone=28 +a=6378249.2 +b=6356515 +towgs84=-23,259,-9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Dabola 1981 / UTM zone 29N - EPSG:3462",
    value:
      "+proj=utm +zone=29 +a=6378249.2 +b=6356515 +towgs84=-83,37,124,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Dabola 1981 / UTM zone 29N (deprecated) - EPSG:2064",
    value:
      "+proj=utm +zone=29 +a=6378249.2 +b=6356515 +towgs84=-23,259,-9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Datum 73 - EPSG:4274",
    value:
      "+proj=longlat +ellps=intl +towgs84=-223.237,110.193,36.649,0,0,0,0 +no_defs",
  },
  {
    label: "Datum 73 / Modified Portuguese Grid - EPSG:27493",
    value:
      "+proj=tmerc +lat_0=39.66666666666666 +lon_0=-8.131906111111112 +k=1 +x_0=180.598 +y_0=-86.98999999999999 +ellps=intl +towgs84=-223.237,110.193,36.649,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Datum 73 / Modified Portuguese Grid (deprecated) - EPSG:27492",
    value:
      "+proj=tmerc +lat_0=39.66666666666666 +lon_0=-8.131906111111112 +k=1 +x_0=180.598 +y_0=-86.98999999999999 +ellps=intl +towgs84=-223.237,110.193,36.649,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Datum 73 / UTM zone 29N - EPSG:27429",
    value:
      "+proj=utm +zone=29 +ellps=intl +towgs84=-223.237,110.193,36.649,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DB_REF - EPSG:5681",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "DB_REF - EPSG:5828",
    value: "+proj=geocent +ellps=bessel +units=m +no_defs",
  },
  {
    label: "DB_REF / 3-degree Gauss-Kruger zone 2 (E-N) - EPSG:5682",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label:
      "DB_REF / 3-degree Gauss-Kruger zone 2 (E-N) + DHHN92 height - EPSG:5832",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +units=m +vunits=m +no_defs",
  },
  {
    label: "DB_REF / 3-degree Gauss-Kruger zone 3 (E-N) - EPSG:5683",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label:
      "DB_REF / 3-degree Gauss-Kruger zone 3 (E-N) + DHHN92 height - EPSG:5833",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +units=m +vunits=m +no_defs",
  },
  {
    label: "DB_REF / 3-degree Gauss-Kruger zone 4 (E-N) - EPSG:5684",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label:
      "DB_REF / 3-degree Gauss-Kruger zone 4 (E-N) + DHHN92 height - EPSG:5834",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +units=m +vunits=m +no_defs",
  },
  {
    label: "DB_REF / 3-degree Gauss-Kruger zone 5 (E-N) - EPSG:5685",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label:
      "DB_REF / 3-degree Gauss-Kruger zone 5 (E-N) + DHHN92 height - EPSG:5835",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +units=m +vunits=m +no_defs",
  },
  {
    label: "Dealul Piscului 1930 - EPSG:4316",
    value:
      "+proj=longlat +ellps=intl +towgs84=103.25,-100.4,-307.19,0,0,0,0 +no_defs",
  },
  {
    label: "Dealul Piscului 1930 / Stereo 33 - EPSG:31600",
    value:
      "+proj=sterea +lat_0=45.9 +lon_0=25.39246588888889 +k=0.9996667 +x_0=500000 +y_0=500000 +ellps=intl +towgs84=103.25,-100.4,-307.19,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Dealul Piscului 1970 - EPSG:4317",
    value: "+proj=longlat +ellps=krass +towgs84=28,-121,-77,0,0,0,0 +no_defs",
  },
  {
    label: "Dealul Piscului 1970/ Stereo 70 (deprecated) - EPSG:31700",
    value:
      "+proj=sterea +lat_0=46 +lon_0=25 +k=0.99975 +x_0=500000 +y_0=500000 +ellps=krass +towgs84=28,-121,-77,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Deception Island - EPSG:4736",
    value: "+proj=longlat +ellps=clrk80 +towgs84=260,12,-147,0,0,0,0 +no_defs",
  },
  {
    label: "Deir ez Zor - EPSG:4227",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-190.421,8.532,238.69,0,0,0,0 +no_defs",
  },
  {
    label: "Deir ez Zor / Levant Stereographic - EPSG:22780",
    value:
      "+proj=sterea +lat_0=34.2 +lon_0=39.15 +k=0.9995341 +x_0=0 +y_0=0 +a=6378249.2 +b=6356515 +towgs84=-190.421,8.532,238.69,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Deir ez Zor / Levant Zone - EPSG:22700",
    value:
      "+proj=lcc +lat_1=34.65 +lat_0=34.65 +lon_0=37.35 +k_0=0.9996256 +x_0=300000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=-190.421,8.532,238.69,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Deir ez Zor / Syria Lambert - EPSG:22770",
    value:
      "+proj=lcc +lat_1=34.65 +lat_0=34.65 +lon_0=37.35 +k_0=0.9996256 +x_0=300000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=-190.421,8.532,238.69,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 - EPSG:4755",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "DGN95 - EPSG:4897",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 46.2 - EPSG:23830",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=94.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 47.1 - EPSG:23831",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=97.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 47.2 - EPSG:23832",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=100.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 48.1 - EPSG:23833",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=103.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 48.2 - EPSG:23834",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=106.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 49.1 - EPSG:23835",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=109.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 49.2 - EPSG:23836",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=112.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 50.1 - EPSG:23837",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=115.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 50.2 - EPSG:23838",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=118.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 51.1 - EPSG:23839",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=121.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 51.2 - EPSG:23840",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=124.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 52.1 - EPSG:23841",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=127.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 52.2 - EPSG:23842",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=130.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 53.1 - EPSG:23843",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=133.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 53.2 - EPSG:23844",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=136.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / Indonesia TM-3 zone 54.1 - EPSG:23845",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=139.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 46N - EPSG:23866",
    value:
      "+proj=utm +zone=46 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 47N - EPSG:23867",
    value:
      "+proj=utm +zone=47 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 47S - EPSG:23877",
    value:
      "+proj=utm +zone=47 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 48N - EPSG:23868",
    value:
      "+proj=utm +zone=48 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 48S - EPSG:23878",
    value:
      "+proj=utm +zone=48 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 49N - EPSG:23869",
    value:
      "+proj=utm +zone=49 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 49S - EPSG:23879",
    value:
      "+proj=utm +zone=49 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 50N - EPSG:23870",
    value:
      "+proj=utm +zone=50 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 50S - EPSG:23880",
    value:
      "+proj=utm +zone=50 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 51N - EPSG:23871",
    value:
      "+proj=utm +zone=51 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 51S - EPSG:23881",
    value:
      "+proj=utm +zone=51 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 52N - EPSG:23872",
    value:
      "+proj=utm +zone=52 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 52S - EPSG:23882",
    value:
      "+proj=utm +zone=52 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 53S - EPSG:23883",
    value:
      "+proj=utm +zone=53 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DGN95 / UTM zone 54S - EPSG:23884",
    value:
      "+proj=utm +zone=54 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DHDN - EPSG:4314",
    value: "+proj=longlat +datum=potsdam +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss zone 1 (deprecated) - EPSG:31461",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=3 +k=1 +x_0=1500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss zone 2 (deprecated) - EPSG:31462",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss zone 3 (deprecated) - EPSG:31463",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss zone 4 (deprecated) - EPSG:31464",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss zone 5 (deprecated) - EPSG:31465",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss-Kruger zone 1 - EPSG:5520",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=3 +k=1 +x_0=1500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss-Kruger zone 1 (E-N) - EPSG:5680",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=3 +k=1 +x_0=1500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss-Kruger zone 2 - EPSG:31466",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss-Kruger zone 2 (E-N) - EPSG:5676",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss-Kruger zone 3 - EPSG:31467",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss-Kruger zone 3 (E-N) - EPSG:5677",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss-Kruger zone 4 - EPSG:31468",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss-Kruger zone 4 (E-N) - EPSG:5678",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss-Kruger zone 5 - EPSG:31469",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / 3-degree Gauss-Kruger zone 5 (E-N) - EPSG:5679",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "DHDN / Soldner Berlin - EPSG:3068",
    value:
      "+proj=cass +lat_0=52.41864827777778 +lon_0=13.62720366666667 +x_0=40000 +y_0=10000 +datum=potsdam +units=m +no_defs",
  },
  {
    label: "Diego Garcia 1969 - EPSG:4724",
    value: "+proj=longlat +ellps=intl +towgs84=208,-435,-229,0,0,0,0 +no_defs",
  },
  {
    label: "Dominica 1945 - EPSG:4602",
    value: "+proj=longlat +ellps=clrk80 +towgs84=725,685,536,0,0,0,0 +no_defs",
  },
  {
    label: "Dominica 1945 / British West Indies Grid - EPSG:2002",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=725,685,536,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Douala - EPSG:4228",
    value: "+proj=longlat +a=6378249.2 +b=6356515 +no_defs",
  },
  {
    label: "Douala / UTM zone 32N (deprecated) - EPSG:22832",
    value: "+proj=utm +zone=32 +a=6378249.2 +b=6356515 +units=m +no_defs",
  },
  {
    label: "Douala 1948 - EPSG:4192",
    value:
      "+proj=longlat +ellps=intl +towgs84=-206.1,-174.7,-87.7,0,0,0,0 +no_defs",
  },
  {
    label: "Douala 1948 / AEF west - EPSG:3119",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=10.5 +k=0.999 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=-206.1,-174.7,-87.7,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Douala 1948 / AOF west (deprecated) - EPSG:2214",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=10.5 +k=0.999 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=-206.1,-174.7,-87.7,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 - EPSG:5262",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 - EPSG:5264",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "DRUKREF 03 / Bhutan National Grid - EPSG:5266",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Bumthang TM - EPSG:5292",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90.73333333333333 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Chhukha TM - EPSG:5293",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=89.55 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Dagana TM - EPSG:5294",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=89.84999999999999 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Gasa TM - EPSG:5295",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90.03333333333333 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Ha TM - EPSG:5296",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90.15000000000001 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Lhuentse TM - EPSG:5297",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=91.13333333333334 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Mongar TM - EPSG:5298",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=91.23333333333333 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Paro TM - EPSG:5299",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=89.34999999999999 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Pemagatshel TM - EPSG:5300",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=91.34999999999999 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Punakha TM - EPSG:5301",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=89.84999999999999 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Samdrup Jongkhar TM - EPSG:5302",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=91.56666666666666 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Samtse TM - EPSG:5303",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=89.06666666666666 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Sarpang TM - EPSG:5304",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90.26666666666667 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Thimphu TM - EPSG:5305",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=89.55 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Trashigang TM - EPSG:5306",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=91.75 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Trongsa TM - EPSG:5307",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90.5 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Tsirang TM - EPSG:5308",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90.16666666666667 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Wangdue Phodrang TM - EPSG:5309",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90.11666666666666 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Yangtse TM - EPSG:5310",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=91.56666666666666 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "DRUKREF 03 / Zhemgang TM - EPSG:5311",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90.86666666666666 +k=1 +x_0=250000 +y_0=-2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Easter Island 1967 - EPSG:4719",
    value: "+proj=longlat +ellps=intl +towgs84=211,147,111,0,0,0,0 +no_defs",
  },
  {
    label: "ED50 - EPSG:4230",
    value: "+proj=longlat +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +no_defs",
  },
  {
    label: "ED50 / 3-degree Gauss-Kruger zone 10 - EPSG:2207",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=10500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / 3-degree Gauss-Kruger zone 11 - EPSG:2208",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=11500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / 3-degree Gauss-Kruger zone 12 - EPSG:2209",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=12500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / 3-degree Gauss-Kruger zone 13 - EPSG:2210",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=13500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / 3-degree Gauss-Kruger zone 14 - EPSG:2211",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=14500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / 3-degree Gauss-Kruger zone 15 - EPSG:2212",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=15500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / 3-degree Gauss-Kruger zone 9 - EPSG:2206",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=9500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / France EuroLambert (deprecated) - EPSG:2192",
    value:
      "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=2.337229166666667 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / Iraq National Grid - EPSG:3893",
    value:
      "+proj=tmerc +lat_0=29.02626833333333 +lon_0=46.5 +k=0.9994 +x_0=800000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / Jordan TM - EPSG:3066",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=37 +k=0.9998 +x_0=500000 +y_0=-3000000 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / SPBA LCC - EPSG:5643",
    value:
      "+proj=lcc +lat_1=52.66666666666666 +lat_2=54.33333333333334 +lat_0=48 +lon_0=10 +x_0=815000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / TM 0 N - EPSG:23090",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=0 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / TM 5 NE - EPSG:23095",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=5 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / TM 6 NE - EPSG:5627",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=6 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / TM27 - EPSG:2319",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / TM30 - EPSG:2320",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / TM33 - EPSG:2321",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / TM36 - EPSG:2322",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / TM39 - EPSG:2323",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / TM42 - EPSG:2324",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / TM45 - EPSG:2325",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 28N - EPSG:23028",
    value:
      "+proj=utm +zone=28 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 29N - EPSG:23029",
    value:
      "+proj=utm +zone=29 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 30N - EPSG:23030",
    value:
      "+proj=utm +zone=30 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 31N - EPSG:23031",
    value:
      "+proj=utm +zone=31 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 32N - EPSG:23032",
    value:
      "+proj=utm +zone=32 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 33N - EPSG:23033",
    value:
      "+proj=utm +zone=33 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 34N - EPSG:23034",
    value:
      "+proj=utm +zone=34 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 35N - EPSG:23035",
    value:
      "+proj=utm +zone=35 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 36N - EPSG:23036",
    value:
      "+proj=utm +zone=36 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 37N - EPSG:23037",
    value:
      "+proj=utm +zone=37 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50 / UTM zone 38N - EPSG:23038",
    value:
      "+proj=utm +zone=38 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50(ED77) - EPSG:4154",
    value: "+proj=longlat +ellps=intl +towgs84=-117,-132,-164,0,0,0,0 +no_defs",
  },
  {
    label: "ED50(ED77) / UTM zone 38N - EPSG:2058",
    value:
      "+proj=utm +zone=38 +ellps=intl +towgs84=-117,-132,-164,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50(ED77) / UTM zone 39N - EPSG:2059",
    value:
      "+proj=utm +zone=39 +ellps=intl +towgs84=-117,-132,-164,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50(ED77) / UTM zone 40N - EPSG:2060",
    value:
      "+proj=utm +zone=40 +ellps=intl +towgs84=-117,-132,-164,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED50(ED77) / UTM zone 41N - EPSG:2061",
    value:
      "+proj=utm +zone=41 +ellps=intl +towgs84=-117,-132,-164,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ED79 - EPSG:4668",
    value: "+proj=longlat +ellps=intl +towgs84=-86,-98,-119,0,0,0,0 +no_defs",
  },
  {
    label: "ED87 - EPSG:4231",
    value:
      "+proj=longlat +ellps=intl +towgs84=-83.11,-97.38,-117.22,0.00569290865241986,-0.0446975835137458,0.0442850539012516,0.1218 +no_defs",
  },
  {
    label: "Egypt 1907 - EPSG:4229",
    value:
      "+proj=longlat +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +no_defs",
  },
  {
    label: "Egypt 1907 / Blue Belt - EPSG:22991",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=35 +k=1 +x_0=300000 +y_0=1100000 +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Egypt 1907 / Extended Purple Belt - EPSG:22994",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=27 +k=1 +x_0=700000 +y_0=1200000 +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Egypt 1907 / Purple Belt - EPSG:22993",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=27 +k=1 +x_0=700000 +y_0=200000 +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Egypt 1907 / Red Belt - EPSG:22992",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=31 +k=1 +x_0=615000 +y_0=810000 +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Egypt 1930 - EPSG:4199",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Egypt Gulf of Suez S-650 TL - EPSG:4706",
    value:
      "+proj=longlat +ellps=helmert +towgs84=-146.21,112.63,4.05,0,0,0,0 +no_defs",
  },
  {
    label: "Egypt Gulf of Suez S-650 TL / Red Belt - EPSG:3355",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=31 +k=1 +x_0=615000 +y_0=810000 +ellps=helmert +towgs84=-146.21,112.63,4.05,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 - EPSG:4159",
    value:
      "+proj=longlat +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +no_defs",
  },
  {
    label: "ELD79 / Libya zone 10 - EPSG:2073",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / Libya zone 11 - EPSG:2074",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / Libya zone 12 - EPSG:2075",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=23 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / Libya zone 13 - EPSG:2076",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=25 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / Libya zone 5 - EPSG:2068",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / Libya zone 6 - EPSG:2069",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / Libya zone 7 - EPSG:2070",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / Libya zone 8 - EPSG:2071",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / Libya zone 9 - EPSG:2072",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=17 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / TM 12 NE - EPSG:2087",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / UTM zone 32N - EPSG:2077",
    value:
      "+proj=utm +zone=32 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / UTM zone 33N - EPSG:2078",
    value:
      "+proj=utm +zone=33 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / UTM zone 34N - EPSG:2079",
    value:
      "+proj=utm +zone=34 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ELD79 / UTM zone 35N - EPSG:2080",
    value:
      "+proj=utm +zone=35 +ellps=intl +towgs84=-115.8543,-99.0583,-152.4616,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "EST92 - EPSG:4133",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0.055,-0.541,-0.185,0.0183,-0.0003,-0.007,-0.014 +no_defs",
  },
  {
    label: "EST97 - EPSG:4180",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "EST97 - EPSG:4934",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "EST97 (geocentric) - EPSG:4342",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Estonian Coordinate System of 1992 - EPSG:3300",
    value:
      "+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0.055,-0.541,-0.185,0.0183,-0.0003,-0.007,-0.014 +units=m +no_defs",
  },
  {
    label: "Estonian Coordinate System of 1997 - EPSG:3301",
    value:
      "+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 - EPSG:4258",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "ETRS89 - EPSG:4936",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ETRS89 (geocentric) - EPSG:4346",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Albania 2010 - EPSG:6870",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Austria Lambert - EPSG:3416",
    value:
      "+proj=lcc +lat_1=49 +lat_2=46 +lat_0=47.5 +lon_0=13.33333333333333 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Belgian Lambert 2005 - EPSG:3447",
    value:
      "+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=50.797815 +lon_0=4.359215833333333 +x_0=150328 +y_0=166262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Belgian Lambert 2008 - EPSG:3812",
    value:
      "+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=50.797815 +lon_0=4.359215833333333 +x_0=649328 +y_0=665262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / DKTM1 - EPSG:4093",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.99998 +x_0=200000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / DKTM1 + DVR90 height - EPSG:4097",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.99998 +x_0=200000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / DKTM2 - EPSG:4094",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=10 +k=0.99998 +x_0=400000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / DKTM2 + DVR90 height - EPSG:4098",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=10 +k=0.99998 +x_0=400000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / DKTM3 - EPSG:4095",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11.75 +k=0.99998 +x_0=600000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / DKTM3 + DVR90 height - EPSG:4099",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11.75 +k=0.99998 +x_0=600000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / DKTM4 - EPSG:4096",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=800000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / DKTM4 + DVR90 height - EPSG:4100",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=800000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / EPSG Arctic zone 2-22 - EPSG:6069",
    value:
      "+proj=lcc +lat_1=83.66666666666667 +lat_2=80.33333333333333 +lat_0=82.05842488888888 +lon_0=16 +x_0=22500000 +y_0=2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / EPSG Arctic zone 3-11 - EPSG:6070",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=21 +x_0=11500000 +y_0=3500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / EPSG Arctic zone 4-26 - EPSG:6071",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=10 +x_0=26500000 +y_0=4500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / EPSG Arctic zone 4-28 - EPSG:6072",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=34 +x_0=28500000 +y_0=4500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / EPSG Arctic zone 5-11 - EPSG:6073",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=14 +x_0=11500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / EPSG Arctic zone 5-13 - EPSG:6074",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=34 +x_0=13500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / EPSG Arctic zone 5-47 - EPSG:6125",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-5 +x_0=47500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK19FIN - EPSG:3126",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=19 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK20FIN - EPSG:3127",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK21FIN - EPSG:3128",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK22FIN - EPSG:3129",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=22 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK23FIN - EPSG:3130",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=23 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK24FIN - EPSG:3131",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK25FIN - EPSG:3132",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK26FIN - EPSG:3133",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=26 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK27FIN - EPSG:3134",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK28FIN - EPSG:3135",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK29FIN - EPSG:3136",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=29 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK30FIN - EPSG:3137",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / ETRS-GK31FIN - EPSG:3138",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Faroe TM - EPSG:5316",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-7 +k=0.999997 +x_0=200000 +y_0=-6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Faroe TM + FVR09 height - EPSG:5318",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-7 +k=0.999997 +x_0=200000 +y_0=-6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / GK19FIN - EPSG:3873",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=19 +k=1 +x_0=19500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK20FIN - EPSG:3874",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20 +k=1 +x_0=20500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK21FIN - EPSG:3875",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=21500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK22FIN - EPSG:3876",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=22 +k=1 +x_0=22500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK23FIN - EPSG:3877",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=23 +k=1 +x_0=23500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK24FIN - EPSG:3878",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=24500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK25FIN - EPSG:3879",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=25500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK26FIN - EPSG:3880",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=26 +k=1 +x_0=26500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK27FIN - EPSG:3881",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=27500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK28FIN - EPSG:3882",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=28500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK29FIN - EPSG:3883",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=29 +k=1 +x_0=29500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK30FIN - EPSG:3884",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=30500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / GK31FIN - EPSG:3885",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=31500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Guernsey Grid - EPSG:3108",
    value:
      "+proj=tmerc +lat_0=49.5 +lon_0=-2.416666666666667 +k=0.999997 +x_0=47000 +y_0=50000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Jersey Transverse Mercator - EPSG:3109",
    value:
      "+proj=tmerc +lat_0=49.225 +lon_0=-2.135 +k=0.9999999000000001 +x_0=40000 +y_0=70000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Kp2000 Bornholm - EPSG:2198",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Kp2000 Bornholm + DVR90 height - EPSG:7420",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / Kp2000 Jutland - EPSG:2196",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9.5 +k=0.99995 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Kp2000 Jutland + DVR90 height - EPSG:7418",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9.5 +k=0.99995 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / Kp2000 Zealand - EPSG:2197",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.99995 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Kp2000 Zealand + DVR90 height - EPSG:7419",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.99995 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / LAEA Europe - EPSG:3035",
    value:
      "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / LCC Europe - EPSG:3034",
    value:
      "+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / LCC Germany (E-N) - EPSG:5243",
    value:
      "+proj=lcc +lat_1=48.66666666666666 +lat_2=53.66666666666666 +lat_0=51 +lon_0=10.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / LCC Germany (N-E) - EPSG:4839",
    value:
      "+proj=lcc +lat_1=48.66666666666666 +lat_2=53.66666666666666 +lat_0=51 +lon_0=10.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 10 - EPSG:5110",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=10.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 10 (deprecated) - EPSG:4860",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=10.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 10 + NN2000 height - EPSG:5950",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=10.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 10 + NN54 height - EPSG:6150",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=10.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 11 - EPSG:5111",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=11.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 11 (deprecated) - EPSG:4861",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 11 + NN2000 height - EPSG:5951",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=11.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 11 + NN54 height - EPSG:6151",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=11.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 12 - EPSG:5112",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=12.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 12 (deprecated) - EPSG:4862",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 12 + NN2000 height - EPSG:5952",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=12.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 12 + NN54 height - EPSG:6152",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=12.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 13 - EPSG:5113",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=13.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 13 (deprecated) - EPSG:4863",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 13 + NN2000 height - EPSG:5953",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=13.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 13 + NN54 height - EPSG:6153",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=13.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 14 - EPSG:5114",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=14.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 14 (deprecated) - EPSG:4864",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=14.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 14 + NN2000 height - EPSG:5954",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=14.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 14 + NN54 height - EPSG:6154",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=14.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 15 - EPSG:5115",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=15.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 15 (deprecated) - EPSG:4865",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 15 + NN2000 height - EPSG:5955",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=15.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 15 + NN54 height - EPSG:6155",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=15.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 16 - EPSG:5116",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=16.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 16 (deprecated) - EPSG:4866",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 16 + NN2000 height - EPSG:5956",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=16.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 16 + NN54 height - EPSG:6156",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=16.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 17 - EPSG:5117",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=17.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 17 (deprecated) - EPSG:4867",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=17.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 17 + NN2000 height - EPSG:5957",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=17.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 17 + NN54 height - EPSG:6157",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=17.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 18 - EPSG:5118",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=18.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 18 (deprecated) - EPSG:4868",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 18 + NN2000 height - EPSG:5958",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=18.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 18 + NN54 height - EPSG:6158",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=18.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 19 - EPSG:5119",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=19.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 19 (deprecated) - EPSG:4869",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=19.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 19 + NN2000 height - EPSG:5959",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=19.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 19 + NN54 height - EPSG:6159",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=19.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 20 - EPSG:5120",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=20.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 20 (deprecated) - EPSG:4870",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 20 + NN2000 height - EPSG:5960",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=20.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 20 + NN54 height - EPSG:6160",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=20.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 21 - EPSG:5121",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=21.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 21 (deprecated) - EPSG:4871",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 21 + NN2000 height - EPSG:5961",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=21.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 21 + NN54 height - EPSG:6161",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=21.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 22 - EPSG:5122",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=22.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 22 (deprecated) - EPSG:4872",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=22.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 22 + NN2000 height - EPSG:5962",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=22.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 22 + NN54 height - EPSG:6162",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=22.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 23 - EPSG:5123",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=23.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 23 (deprecated) - EPSG:4873",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=23.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 23 + NN2000 height - EPSG:5963",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=23.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 23 + NN54 height - EPSG:6163",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=23.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 24 - EPSG:5124",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=24.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 24 (deprecated) - EPSG:4874",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 24 + NN2000 height - EPSG:5964",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=24.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 24 + NN54 height - EPSG:6164",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=24.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 25 - EPSG:5125",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=25.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 25 (deprecated) - EPSG:4875",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=25.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 25 + NN2000 height - EPSG:5965",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=25.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 25 + NN54 height - EPSG:6165",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=25.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 26 - EPSG:5126",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=26.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 26 (deprecated) - EPSG:4876",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=26.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 26 + NN2000 height - EPSG:5966",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=26.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 26 + NN54 height - EPSG:6166",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=26.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 27 - EPSG:5127",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=27.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 27 (deprecated) - EPSG:4877",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 27 + NN2000 height - EPSG:5967",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=27.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 27 + NN54 height - EPSG:6167",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=27.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 28 - EPSG:5128",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=28.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 28 (deprecated) - EPSG:4878",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=28.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 28 + NN2000 height - EPSG:5968",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=28.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 28 + NN54 height - EPSG:6168",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=28.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 29 - EPSG:5129",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=29.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 29 (deprecated) - EPSG:4879",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=29.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 29 + NN2000 height - EPSG:5969",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=29.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 29 + NN54 height - EPSG:6169",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=29.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 30 - EPSG:5130",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=30.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 30 (deprecated) - EPSG:4880",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 30 + NN2000 height - EPSG:5970",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=30.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 30 + NN54 height - EPSG:6170",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=30.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 5 - EPSG:5105",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=5.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 5 (deprecated) - EPSG:4855",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=5.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 5 + NN2000 height - EPSG:5945",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=5.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 5 + NN54 height - EPSG:6145",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=5.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 6 - EPSG:5106",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=6.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 6 (deprecated) - EPSG:4856",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=6.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 6 + NN2000 height - EPSG:5946",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=6.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 6 + NN54 height - EPSG:6146",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=6.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 7 - EPSG:5107",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=7.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 7 (deprecated) - EPSG:4857",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=7.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 7 + NN2000 height - EPSG:5947",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=7.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 7 + NN54 height - EPSG:6147",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=7.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 8 - EPSG:5108",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=8.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 8 (deprecated) - EPSG:4858",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=8.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 8 + NN2000 height - EPSG:5948",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=8.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 8 + NN54 height - EPSG:6148",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=8.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 9 - EPSG:5109",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=9.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 9 (deprecated) - EPSG:4859",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 9 + NN2000 height - EPSG:5949",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=9.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / NTM zone 9 + NN54 height - EPSG:6149",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=9.5 +k=1 +x_0=100000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / Poland CS2000 zone 5 - EPSG:2176",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.999923 +x_0=5500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Poland CS2000 zone 6 - EPSG:2177",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=0.999923 +x_0=6500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Poland CS2000 zone 7 - EPSG:2178",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.999923 +x_0=7500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Poland CS2000 zone 8 - EPSG:2179",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.999923 +x_0=8500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Poland CS92 - EPSG:2180",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / Portugal TM06 - EPSG:3763",
    value:
      "+proj=tmerc +lat_0=39.66825833333333 +lon_0=-8.133108333333334 +k=1 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / TM 30 NE - EPSG:2213",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / TM Baltic93 - EPSG:25884",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / TM26 (deprecated) - EPSG:3038",
    value:
      "+proj=utm +zone=26 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / TM27 (deprecated) - EPSG:3039",
    value:
      "+proj=utm +zone=27 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / TM35FIN(E,N) - EPSG:3067",
    value:
      "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / TM35FIN(N,E) - EPSG:5048",
    value:
      "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / TM35FIN(N,E) + N2000 height - EPSG:3903",
    value:
      "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / TM35FIN(N,E) + N60 height - EPSG:3902",
    value:
      "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / TM38 (deprecated) - EPSG:3050",
    value:
      "+proj=utm +zone=38 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / TM39 (deprecated) - EPSG:3051",
    value:
      "+proj=utm +zone=39 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 28N - EPSG:25828",
    value:
      "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 28N (N-E) - EPSG:3040",
    value:
      "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 29N - EPSG:25829",
    value:
      "+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 29N (N-E) - EPSG:3041",
    value:
      "+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 30N - EPSG:25830",
    value:
      "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 30N (N-E) - EPSG:3042",
    value:
      "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 31 + NN2000 height - EPSG:5971",
    value:
      "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 31 + NN54 height - EPSG:6171",
    value:
      "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 31N - EPSG:25831",
    value:
      "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 31N (N-E) - EPSG:3043",
    value:
      "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 31N (N-zE) - EPSG:5651",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=3 +k=0.9996 +x_0=31500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 31N (zE-N) - EPSG:5649",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=3 +k=0.9996 +x_0=31500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 31N + DHHN92 height - EPSG:5554",
    value:
      "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 32 + NN2000 height - EPSG:5972",
    value:
      "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 32 + NN54 height - EPSG:6172",
    value:
      "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 32N - EPSG:25832",
    value:
      "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 32N (N-E) - EPSG:3044",
    value:
      "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 32N (N-zE) - EPSG:5652",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=32500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 32N (zE-N) - EPSG:4647",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=32500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 32N + DHHN92 height - EPSG:5555",
    value:
      "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 32N + DVR90 height - EPSG:7416",
    value:
      "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 33 + NN2000 height - EPSG:5973",
    value:
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 33 + NN54 height - EPSG:6173",
    value:
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 33N - EPSG:25833",
    value:
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 33N (N-E) - EPSG:3045",
    value:
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 33N (N-zE) - EPSG:5653",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=33500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 33N (zE-N) - EPSG:5650",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=33500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 33N + DHHN92 height - EPSG:5556",
    value:
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 33N + DVR90 height - EPSG:7417",
    value:
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 34 + NN2000 height - EPSG:5974",
    value:
      "+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 34 + NN54 height - EPSG:6174",
    value:
      "+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 34N - EPSG:25834",
    value:
      "+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 34N (N-E) - EPSG:3046",
    value:
      "+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 35 + NN2000 height - EPSG:5975",
    value:
      "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 35 + NN54 height - EPSG:6175",
    value:
      "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 35N - EPSG:25835",
    value:
      "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 35N (N-E) - EPSG:3047",
    value:
      "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 36 + NN2000 height - EPSG:5976",
    value:
      "+proj=utm +zone=36 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 36 + NN54 height - EPSG:6176",
    value:
      "+proj=utm +zone=36 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 36N - EPSG:25836",
    value:
      "+proj=utm +zone=36 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 36N (N-E) - EPSG:3048",
    value:
      "+proj=utm +zone=36 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 37N - EPSG:25837",
    value:
      "+proj=utm +zone=37 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 37N (N-E) - EPSG:3049",
    value:
      "+proj=utm +zone=37 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 / UTM zone 38N (deprecated) - EPSG:25838",
    value:
      "+proj=utm +zone=38 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ETRS89 + EVRF2000 height - EPSG:7409",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +vunits=m +no_defs",
  },
  {
    label: "ETRS89 + EVRF2007 height - EPSG:7423",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +vunits=m +no_defs",
  },
  {
    label: "ETRS89 + NN2000 height - EPSG:5942",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +vunits=m +no_defs",
  },
  {
    label: "ETRS89 + NN54 height - EPSG:6144",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +vunits=m +no_defs",
  },
  {
    label: "Fahud - EPSG:4232",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-346,-1,224,0,0,0,0 +no_defs",
  },
  {
    label: "Fahud / UTM zone 39N - EPSG:23239",
    value:
      "+proj=utm +zone=39 +ellps=clrk80 +towgs84=-346,-1,224,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Fahud / UTM zone 40N - EPSG:23240",
    value:
      "+proj=utm +zone=40 +ellps=clrk80 +towgs84=-346,-1,224,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Fatu Iva 72 - EPSG:4688",
    value:
      "+proj=longlat +ellps=intl +towgs84=347.103,1078.125,2623.922,-33.8875,70.6773,-9.3943,186.074 +no_defs",
  },
  {
    label: "Fatu Iva 72 / UTM zone 7S - EPSG:3303",
    value:
      "+proj=utm +zone=7 +south +ellps=intl +towgs84=347.103,1078.125,2623.922,-33.8875,70.6773,-9.3943,186.074 +units=m +no_defs",
  },
  {
    label: "FD54 - EPSG:4741",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "FD54 / UTM zone 29N - EPSG:3374",
    value: "+proj=utm +zone=29 +ellps=intl +units=m +no_defs",
  },
  {
    label: "FD58 - EPSG:4132",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-241.54,-163.64,396.06,0,0,0,0 +no_defs",
  },
  {
    label: "FD58 / Iraq zone - EPSG:3200",
    value:
      "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=45 +k_0=0.9987864078000001 +x_0=1500000 +y_0=1166200 +ellps=clrk80 +towgs84=-241.54,-163.64,396.06,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "FEH2010 - EPSG:5591",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "FEH2010 - EPSG:5593",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "FEH2010 / Fehmarnbelt TM - EPSG:5596",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11.33333333333333 +k=1 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "FEH2010 / Fehmarnbelt TM + FCSVR10 height - EPSG:5598",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11.33333333333333 +k=1 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "Fiji 1956 - EPSG:4721",
    value:
      "+proj=longlat +ellps=intl +towgs84=265.025,384.929,-194.046,0,0,0,0 +no_defs",
  },
  {
    label: "Fiji 1956 / UTM zone 1S - EPSG:3142",
    value:
      "+proj=utm +zone=1 +south +ellps=intl +towgs84=265.025,384.929,-194.046,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Fiji 1956 / UTM zone 60S - EPSG:3141",
    value:
      "+proj=utm +zone=60 +south +ellps=intl +towgs84=265.025,384.929,-194.046,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Fiji 1986 - EPSG:4720",
    value:
      "+proj=longlat +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +no_defs",
  },
  {
    label: "Fiji 1986 / Fiji Map Grid - EPSG:3460",
    value:
      "+proj=tmerc +lat_0=-17 +lon_0=178.75 +k=0.99985 +x_0=2000000 +y_0=4000000 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "Fiji 1986 / Fiji Map Grid (deprecated) - EPSG:3143",
    value:
      "+proj=tmerc +lat_0=-17 +lon_0=178.75 +k=0.99985 +x_0=2000000 +y_0=4000000 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "fk89 - EPSG:4753",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Fort Marigot - EPSG:4621",
    value: "+proj=longlat +ellps=intl +towgs84=137,248,-430,0,0,0,0 +no_defs",
  },
  {
    label: "Fort Marigot / UTM zone 20N - EPSG:2969",
    value:
      "+proj=utm +zone=20 +ellps=intl +towgs84=137,248,-430,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Gan 1970 - EPSG:4684",
    value: "+proj=longlat +ellps=intl +towgs84=-133,-321,50,0,0,0,0 +no_defs",
  },
  {
    label: "Gandajika - EPSG:4685",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Gandajika 1970 - EPSG:4233",
    value: "+proj=longlat +ellps=intl +towgs84=-133,-321,50,0,0,0,0 +no_defs",
  },
  {
    label: "Garoua - EPSG:4197",
    value: "+proj=longlat +ellps=clrk80 +no_defs",
  },
  {
    label: "Garoua - EPSG:4234",
    value: "+proj=longlat +a=6378249.2 +b=6356515 +no_defs",
  },
  {
    label: "Garoua / UTM zone 33N - EPSG:2312",
    value: "+proj=utm +zone=33 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "Garoua / UTM zone 33N (deprecated) - EPSG:23433",
    value: "+proj=utm +zone=33 +a=6378249.2 +b=6356515 +units=m +no_defs",
  },
  {
    label: "GCGD59 - EPSG:4723",
    value:
      "+proj=longlat +ellps=clrk66 +towgs84=-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925 +no_defs",
  },
  {
    label: "GDA94 - EPSG:4283",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "GDA94 - EPSG:4938",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDA94 (geocentric) - EPSG:4348",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDA94 / Australian Albers - EPSG:3577",
    value:
      "+proj=aea +lat_1=-18 +lat_2=-36 +lat_0=0 +lon_0=132 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / BCSG02 - EPSG:3113",
    value:
      "+proj=tmerc +lat_0=-28 +lon_0=153 +k=0.99999 +x_0=50000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / CIG94 - EPSG:6721",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105.625 +k=1.00002514 +x_0=50000 +y_0=1300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / CKIG94 - EPSG:6723",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96.875 +k=0.99999387 +x_0=50000 +y_0=1500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / Geoscience Australia Lambert - EPSG:3112",
    value:
      "+proj=lcc +lat_1=-18 +lat_2=-36 +lat_0=0 +lon_0=134 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 41 - EPSG:6732",
    value:
      "+proj=utm +zone=41 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 42 - EPSG:6733",
    value:
      "+proj=utm +zone=42 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 43 - EPSG:6734",
    value:
      "+proj=utm +zone=43 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 44 - EPSG:6735",
    value:
      "+proj=utm +zone=44 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 46 - EPSG:6736",
    value:
      "+proj=utm +zone=46 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 47 - EPSG:6737",
    value:
      "+proj=utm +zone=47 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 48 - EPSG:28348",
    value:
      "+proj=utm +zone=48 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 49 - EPSG:28349",
    value:
      "+proj=utm +zone=49 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 50 - EPSG:28350",
    value:
      "+proj=utm +zone=50 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 51 - EPSG:28351",
    value:
      "+proj=utm +zone=51 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 52 - EPSG:28352",
    value:
      "+proj=utm +zone=52 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 53 - EPSG:28353",
    value:
      "+proj=utm +zone=53 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 54 - EPSG:28354",
    value:
      "+proj=utm +zone=54 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 55 - EPSG:28355",
    value:
      "+proj=utm +zone=55 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 56 - EPSG:28356",
    value:
      "+proj=utm +zone=56 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 57 - EPSG:28357",
    value:
      "+proj=utm +zone=57 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 58 - EPSG:28358",
    value:
      "+proj=utm +zone=58 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / MGA zone 59 - EPSG:6738",
    value:
      "+proj=utm +zone=59 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / NSW Lambert - EPSG:3308",
    value:
      "+proj=lcc +lat_1=-30.75 +lat_2=-35.75 +lat_0=-33.25 +lon_0=147 +x_0=9300000 +y_0=4500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / SA Lambert - EPSG:3107",
    value:
      "+proj=lcc +lat_1=-28 +lat_2=-36 +lat_0=-32 +lon_0=135 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDA94 / Vicgrid94 - EPSG:3111",
    value:
      "+proj=lcc +lat_1=-36 +lat_2=-38 +lat_0=-37 +lon_0=145 +x_0=2500000 +y_0=2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDBD2009 - EPSG:5244",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDBD2009 - EPSG:5246",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "GDBD2009 / Brunei BRSO - EPSG:5247",
    value:
      "+proj=omerc +lat_0=4 +lonc=115 +alpha=53.31580995 +k=0.99984 +x_0=0 +y_0=0 +no_uoff +gamma=53.13010236111111 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GDM2000 - EPSG:4742",
    value: "+proj=longlat +ellps=GRS80 +no_defs",
  },
  {
    label: "GDM2000 - EPSG:4920",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / East Malaysia BRSO - EPSG:3376",
    value:
      "+proj=omerc +lat_0=4 +lonc=115 +alpha=53.31580995 +k=0.99984 +x_0=0 +y_0=0 +no_uoff +gamma=53.13010236111111 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / Johor Grid - EPSG:3377",
    value:
      "+proj=cass +lat_0=2.121679744444445 +lon_0=103.4279362361111 +x_0=-14810.562 +y_0=8758.32 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / Kedah and Perlis Grid - EPSG:3383",
    value:
      "+proj=cass +lat_0=5.964672713888889 +lon_0=100.6363711111111 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / Kelantan Grid - EPSG:3385",
    value:
      "+proj=cass +lat_0=5.972543658333334 +lon_0=102.2952416694444 +x_0=13227.851 +y_0=8739.894 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / PahangGrid - EPSG:3379",
    value:
      "+proj=cass +lat_0=3.769388088888889 +lon_0=102.3682989833333 +x_0=-7368.228 +y_0=6485.858 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / Peninsula RSO - EPSG:3375",
    value:
      "+proj=omerc +lat_0=4 +lonc=102.25 +alpha=323.0257964666666 +k=0.99984 +x_0=804671 +y_0=0 +no_uoff +gamma=323.1301023611111 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / Perak Grid - EPSG:3384",
    value:
      "+proj=cass +lat_0=4.859063022222222 +lon_0=100.8154105861111 +x_0=-1.769 +y_0=133454.779 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / Pinang Grid - EPSG:3382",
    value:
      "+proj=cass +lat_0=5.421517541666667 +lon_0=100.3443769638889 +x_0=-23.414 +y_0=62.283 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / Selangor Grid - EPSG:3380",
    value:
      "+proj=cass +lat_0=3.68464905 +lon_0=101.3891079138889 +x_0=-34836.161 +y_0=56464.049 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / Sembilan and Melaka Grid - EPSG:3378",
    value:
      "+proj=cass +lat_0=2.682347636111111 +lon_0=101.9749050416667 +x_0=3673.785 +y_0=-4240.573 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GDM2000 / Terengganu Grid - EPSG:3381",
    value:
      "+proj=cass +lat_0=4.9762852 +lon_0=103.070275625 +x_0=19594.245 +y_0=3371.895 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GGRS87 - EPSG:4121",
    value: "+proj=longlat +datum=GGRS87 +no_defs",
  },
  {
    label: "GGRS87 / Greek Grid - EPSG:2100",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +datum=GGRS87 +units=m +no_defs",
  },
  {
    label: "GR96 - EPSG:4747",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "GR96 - EPSG:4908",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 1-25 - EPSG:6050",
    value:
      "+proj=lcc +lat_1=87 +lat_2=83.66666666666667 +lat_0=85.43711833333333 +lon_0=-30 +x_0=25500000 +y_0=1500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 2-18 - EPSG:6051",
    value:
      "+proj=lcc +lat_1=83.66666666666667 +lat_2=80.33333333333333 +lat_0=82.05842488888888 +lon_0=-52 +x_0=18500000 +y_0=2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 2-20 - EPSG:6052",
    value:
      "+proj=lcc +lat_1=83.66666666666667 +lat_2=80.33333333333333 +lat_0=82.05842488888888 +lon_0=-12 +x_0=20500000 +y_0=2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 3-29 - EPSG:6053",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=-69 +x_0=29500000 +y_0=3500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 3-31 - EPSG:6054",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=-39 +x_0=31500000 +y_0=3500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 3-33 - EPSG:6055",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=-10 +x_0=33500000 +y_0=3500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 4-20 - EPSG:6056",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=-64 +x_0=20500000 +y_0=4500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 4-22 - EPSG:6057",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=-39 +x_0=22500000 +y_0=4500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 4-24 - EPSG:6058",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=-14 +x_0=24500000 +y_0=4500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 5-41 - EPSG:6059",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-62 +x_0=41500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 5-43 - EPSG:6060",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-42 +x_0=43500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 5-45 - EPSG:6061",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-22 +x_0=45500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 6-26 - EPSG:6062",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-56 +x_0=26500000 +y_0=6500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 6-28 - EPSG:6063",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-38 +x_0=28500000 +y_0=6500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 6-30 - EPSG:6064",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-20 +x_0=30500000 +y_0=6500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 7-11 - EPSG:6065",
    value:
      "+proj=lcc +lat_1=67 +lat_2=63.66666666666666 +lat_0=65.35103930555555 +lon_0=-51 +x_0=11500000 +y_0=7500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 7-13 - EPSG:6066",
    value:
      "+proj=lcc +lat_1=67 +lat_2=63.66666666666666 +lat_0=65.35103930555555 +lon_0=-34 +x_0=13500000 +y_0=7500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 8-20 - EPSG:6067",
    value:
      "+proj=lcc +lat_1=63.66666666666666 +lat_2=60.33333333333334 +lat_0=62.01530688888889 +lon_0=-52 +x_0=20500000 +y_0=8500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / EPSG Arctic zone 8-22 - EPSG:6068",
    value:
      "+proj=lcc +lat_1=63.66666666666666 +lat_2=60.33333333333334 +lat_0=62.01530688888889 +lon_0=-37 +x_0=22500000 +y_0=8500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 18N - EPSG:3178",
    value:
      "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 19N - EPSG:3179",
    value:
      "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 20N - EPSG:3180",
    value:
      "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 21N - EPSG:3181",
    value:
      "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 22N - EPSG:3182",
    value:
      "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 23N - EPSG:3183",
    value:
      "+proj=utm +zone=23 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 24N - EPSG:3184",
    value:
      "+proj=utm +zone=24 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 25N - EPSG:3185",
    value:
      "+proj=utm +zone=25 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 26N - EPSG:3186",
    value:
      "+proj=utm +zone=26 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 27N - EPSG:3187",
    value:
      "+proj=utm +zone=27 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 28N - EPSG:3188",
    value:
      "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "GR96 / UTM zone 29N - EPSG:3189",
    value:
      "+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Grand Cayman 1959 / UTM zone 17N (deprecated) - EPSG:3356",
    value:
      "+proj=utm +zone=17 +ellps=clrk66 +towgs84=-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925 +units=m +no_defs",
  },
  {
    label: "Grand Cayman National Grid 1959 - EPSG:6128",
    value:
      "+proj=utm +zone=17 +ellps=clrk66 +towgs84=-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925 +units=ft +no_defs",
  },
  {
    label: "Grand Comoros - EPSG:4646",
    value: "+proj=longlat +ellps=intl +towgs84=-963,510,-359,0,0,0,0 +no_defs",
  },
  {
    label: "Grand Comoros / UTM zone 38S - EPSG:2999",
    value:
      "+proj=utm +zone=38 +south +ellps=intl +towgs84=-963,510,-359,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Greek - EPSG:4120",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "Greek (Athens) - EPSG:4815",
    value: "+proj=longlat +ellps=bessel +pm=athens +no_defs",
  },
  {
    label: "Grenada 1953 - EPSG:4603",
    value: "+proj=longlat +ellps=clrk80 +towgs84=72,213.7,93,0,0,0,0 +no_defs",
  },
  {
    label: "Grenada 1953 / British West Indies Grid - EPSG:2003",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=72,213.7,93,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Guadeloupe 1948 - EPSG:4622",
    value: "+proj=longlat +ellps=intl +towgs84=-467,-16,-300,0,0,0,0 +no_defs",
  },
  {
    label: "Guadeloupe 1948 / UTM zone 20N - EPSG:2970",
    value:
      "+proj=utm +zone=20 +ellps=intl +towgs84=-467,-16,-300,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Guam 1963 - EPSG:4675",
    value:
      "+proj=longlat +ellps=clrk66 +towgs84=-100,-248,259,0,0,0,0 +no_defs",
  },
  {
    label: "Gulshan 303 - EPSG:4682",
    value:
      "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=283.7,735.9,261.1,0,0,0,0 +no_defs",
  },
  {
    label: "Gulshan 303 / Bangladesh Transverse Mercator - EPSG:3106",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=0.9996 +x_0=500000 +y_0=0 +a=6377276.345 +b=6356075.41314024 +towgs84=283.7,735.9,261.1,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Guyane Francaise - EPSG:4235",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Hanoi 1972 - EPSG:4147",
    value:
      "+proj=longlat +ellps=krass +towgs84=-17.51,-108.32,-62.39,0,0,0,0 +no_defs",
  },
  {
    label: "Hanoi 1972 / Gauss-Kruger zone 18 - EPSG:2044",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=-17.51,-108.32,-62.39,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hanoi 1972 / Gauss-Kruger zone 19 - EPSG:2045",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=-17.51,-108.32,-62.39,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hanoi 1972 / GK 106 NE - EPSG:2093",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=106 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=-17.51,-108.32,-62.39,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 - EPSG:4148",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Hartebeesthoek94 - EPSG:4940",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 (geocentric) - EPSG:4350",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 / Lo15 - EPSG:2046",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 / Lo17 - EPSG:2047",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=17 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 / Lo19 - EPSG:2048",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=19 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 / Lo21 - EPSG:2049",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 / Lo23 - EPSG:2050",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=23 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 / Lo25 - EPSG:2051",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 / Lo27 - EPSG:2052",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 / Lo29 - EPSG:2053",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=29 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 / Lo31 - EPSG:2054",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hartebeesthoek94 / Lo33 - EPSG:2055",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "HD1909 - EPSG:3819",
    value:
      "+proj=longlat +ellps=bessel +towgs84=595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408 +no_defs",
  },
  {
    label: "HD72 - EPSG:4237",
    value:
      "+proj=longlat +ellps=GRS67 +towgs84=52.17,-71.82,-14.9,0,0,0,0 +no_defs",
  },
  {
    label: "HD72 / EOV - EPSG:23700",
    value:
      "+proj=somerc +lat_0=47.14439372222222 +lon_0=19.04857177777778 +k_0=0.99993 +x_0=650000 +y_0=200000 +ellps=GRS67 +towgs84=52.17,-71.82,-14.9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Helle 1954 - EPSG:4660",
    value:
      "+proj=longlat +ellps=intl +towgs84=982.6087,552.753,-540.873,6.68162662527694,-31.6114924086422,-19.8481610048168,16.805 +no_defs",
  },
  {
    label: "Helle 1954 / Jan Mayen Grid - EPSG:3058",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-8.5 +k=1 +x_0=50000 +y_0=-7800000 +ellps=intl +towgs84=982.6087,552.753,-540.873,6.68162662527694,-31.6114924086422,-19.8481610048168,16.805 +units=m +no_defs",
  },
  {
    label: "Herat North - EPSG:4255",
    value: "+proj=longlat +ellps=intl +towgs84=-333,-222,114,0,0,0,0 +no_defs",
  },
  {
    label: "Hito XVIII 1963 - EPSG:4254",
    value: "+proj=longlat +ellps=intl +towgs84=16,196,93,0,0,0,0 +no_defs",
  },
  {
    label: "Hito XVIII 1963 / Argentina 2 - EPSG:2083",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +towgs84=16,196,93,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hito XVIII 1963 / UTM zone 19S - EPSG:2084",
    value:
      "+proj=utm +zone=19 +south +ellps=intl +towgs84=16,196,93,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hjorsey 1955 - EPSG:4658",
    value: "+proj=longlat +ellps=intl +towgs84=-73,46,-86,0,0,0,0 +no_defs",
  },
  {
    label: "Hjorsey 1955 / UTM zone 26N - EPSG:3054",
    value:
      "+proj=utm +zone=26 +ellps=intl +towgs84=-73,46,-86,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hjorsey 1955 / UTM zone 27N - EPSG:3055",
    value:
      "+proj=utm +zone=27 +ellps=intl +towgs84=-73,46,-86,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hjorsey 1955 / UTM zone 28N - EPSG:3056",
    value:
      "+proj=utm +zone=28 +ellps=intl +towgs84=-73,46,-86,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hong Kong 1963 - EPSG:4738",
    value: "+proj=longlat +a=6378293.645208759 +b=6356617.987679838 +no_defs",
  },
  {
    label: "Hong Kong 1963 Grid System - EPSG:3407",
    value:
      "+proj=cass +lat_0=22.31213333333334 +lon_0=114.1785555555556 +x_0=40243.57775604237 +y_0=19069.93351512578 +a=6378293.645208759 +b=6356617.987679838 +to_meter=0.3047972654 +no_defs",
  },
  {
    label: "Hong Kong 1963 Grid System (deprecated) - EPSG:3366",
    value:
      "+proj=cass +lat_0=22.31213333333334 +lon_0=114.1785555555556 +x_0=40243.57775604237 +y_0=19069.93351512578 +a=6378293.645208759 +b=6356617.987679838 +units=m +no_defs",
  },
  {
    label: "Hong Kong 1963(67) - EPSG:4739",
    value: "+proj=longlat +ellps=intl +towgs84=-156,-271,-189,0,0,0,0 +no_defs",
  },
  {
    label: "Hong Kong 1980 - EPSG:4611",
    value:
      "+proj=longlat +ellps=intl +towgs84=-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246 +no_defs",
  },
  {
    label: "Hong Kong 1980 Grid System - EPSG:2326",
    value:
      "+proj=tmerc +lat_0=22.31213333333334 +lon_0=114.1785555555556 +k=1 +x_0=836694.05 +y_0=819069.8 +ellps=intl +towgs84=-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246 +units=m +no_defs",
  },
  {
    label: "HTRS96 - EPSG:4761",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "HTRS96 - EPSG:4888",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "HTRS96 / Croatia LCC - EPSG:3766",
    value:
      "+proj=lcc +lat_1=45.91666666666666 +lat_2=43.08333333333334 +lat_0=0 +lon_0=16.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "HTRS96 / Croatia TM - EPSG:3765",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "HTRS96 / UTM zone 33N - EPSG:3767",
    value:
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "HTRS96 / UTM zone 34N - EPSG:3768",
    value:
      "+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Hu Tzu Shan 1950 - EPSG:4236",
    value: "+proj=longlat +ellps=intl +towgs84=-637,-549,-203,0,0,0,0 +no_defs",
  },
  {
    label: "Hu Tzu Shan 1950 / UTM zone 51N - EPSG:3829",
    value:
      "+proj=utm +zone=51 +ellps=intl +towgs84=-637,-549,-203,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 - EPSG:4238",
    value:
      "+proj=longlat +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +no_defs",
  },
  {
    label: "ID74 / UTM zone 46N - EPSG:23846",
    value:
      "+proj=utm +zone=46 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 46S (deprecated) - EPSG:23886",
    value:
      "+proj=utm +zone=46 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 47N - EPSG:23847",
    value:
      "+proj=utm +zone=47 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 47S - EPSG:23887",
    value:
      "+proj=utm +zone=47 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 48N - EPSG:23848",
    value:
      "+proj=utm +zone=48 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 48S - EPSG:23888",
    value:
      "+proj=utm +zone=48 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 49N - EPSG:23849",
    value:
      "+proj=utm +zone=49 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 49S - EPSG:23889",
    value:
      "+proj=utm +zone=49 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 50N - EPSG:23850",
    value:
      "+proj=utm +zone=50 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 50S - EPSG:23890",
    value:
      "+proj=utm +zone=50 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 51N - EPSG:23851",
    value:
      "+proj=utm +zone=51 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 51S - EPSG:23891",
    value:
      "+proj=utm +zone=51 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 52N - EPSG:23852",
    value:
      "+proj=utm +zone=52 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 52S - EPSG:23892",
    value:
      "+proj=utm +zone=52 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 53N (deprecated) - EPSG:23853",
    value:
      "+proj=utm +zone=53 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 53S - EPSG:23893",
    value:
      "+proj=utm +zone=53 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ID74 / UTM zone 54S - EPSG:23894",
    value:
      "+proj=utm +zone=54 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGC 1962 / Congo TM zone 12 - EPSG:3318",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGC 1962 / Congo TM zone 14 - EPSG:3319",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=14 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGC 1962 / Congo TM zone 16 - EPSG:3320",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGC 1962 / Congo TM zone 18 - EPSG:3321",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGC 1962 / Congo TM zone 20 - EPSG:3322",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGC 1962 / Congo TM zone 22 - EPSG:3323",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=22 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGC 1962 / Congo TM zone 24 - EPSG:3324",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGC 1962 / Congo TM zone 26 - EPSG:3325",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=26 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGC 1962 / Congo TM zone 28 - EPSG:3326",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=28 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGC 1962 / Congo TM zone 30 - EPSG:3327",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGC 1962 6th Parallel South - EPSG:4697",
    value: "+proj=longlat +ellps=clrk80 +no_defs",
  },
  {
    label: "IGCB 1955 - EPSG:4701",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-79.9,-158,-168.9,0,0,0,0 +no_defs",
  },
  {
    label: "IGCB 1955 / Congo TM zone 12 - EPSG:3339",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +towgs84=-79.9,-158,-168.9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGCB 1955 / Congo TM zone 14 - EPSG:3340",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=14 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +towgs84=-79.9,-158,-168.9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGCB 1955 / Congo TM zone 16 - EPSG:3341",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +towgs84=-79.9,-158,-168.9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGCB 1955 / UTM zone 33S - EPSG:3342",
    value:
      "+proj=utm +zone=33 +south +ellps=clrk80 +towgs84=-79.9,-158,-168.9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGM95 - EPSG:4670",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "IGM95 - EPSG:4982",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "IGM95 / UTM zone 32N - EPSG:3064",
    value:
      "+proj=utm +zone=32 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGM95 / UTM zone 33N - EPSG:3065",
    value:
      "+proj=utm +zone=33 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGN 1962 Kerguelen - EPSG:4698",
    value: "+proj=longlat +ellps=intl +towgs84=145,-187,103,0,0,0,0 +no_defs",
  },
  {
    label: "IGN 1962 Kerguelen / UTM zone 42S - EPSG:3336",
    value:
      "+proj=utm +zone=42 +south +ellps=intl +towgs84=145,-187,103,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGN Astro 1960 - EPSG:4700",
    value: "+proj=longlat +ellps=clrk80 +no_defs",
  },
  {
    label: "IGN Astro 1960 / UTM zone 28N - EPSG:3367",
    value: "+proj=utm +zone=28 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGN Astro 1960 / UTM zone 29N - EPSG:3368",
    value: "+proj=utm +zone=29 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGN Astro 1960 / UTM zone 30N - EPSG:3369",
    value: "+proj=utm +zone=30 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "IGN53 Mare - EPSG:4641",
    value:
      "+proj=longlat +ellps=intl +towgs84=287.58,177.78,-135.41,0,0,0,0 +no_defs",
  },
  {
    label: "IGN53 Mare / UTM zone 58S - EPSG:2995",
    value:
      "+proj=utm +zone=58 +south +ellps=intl +towgs84=287.58,177.78,-135.41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGN53 Mare / UTM zone 59S - EPSG:3172",
    value:
      "+proj=utm +zone=59 +south +ellps=intl +towgs84=287.58,177.78,-135.41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGN56 Lifou - EPSG:4633",
    value:
      "+proj=longlat +ellps=intl +towgs84=335.47,222.58,-230.94,0,0,0,0 +no_defs",
  },
  {
    label: "IGN56 Lifou / UTM zone 58S - EPSG:2981",
    value:
      "+proj=utm +zone=58 +south +ellps=intl +towgs84=335.47,222.58,-230.94,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGN63 Hiva Oa - EPSG:4689",
    value:
      "+proj=longlat +ellps=intl +towgs84=410.721,55.049,80.746,2.5779,2.3514,0.6664,17.3311 +no_defs",
  },
  {
    label: "IGN63 Hiva Oa / UTM zone 7S - EPSG:3302",
    value:
      "+proj=utm +zone=7 +south +ellps=intl +towgs84=410.721,55.049,80.746,2.5779,2.3514,0.6664,17.3311 +units=m +no_defs",
  },
  {
    label: "IGN72 Grand Terre - EPSG:4634",
    value: "+proj=longlat +ellps=intl +towgs84=-13,-348,292,0,0,0,0 +no_defs",
  },
  {
    label: "IGN72 Grand Terre / UTM zone 58S (deprecated) - EPSG:2982",
    value:
      "+proj=utm +zone=58 +south +ellps=intl +towgs84=-13,-348,292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGN72 Grande Terre - EPSG:4662",
    value:
      "+proj=longlat +ellps=intl +towgs84=-11.64,-348.6,291.98,0,0,0,0 +no_defs",
  },
  {
    label: "IGN72 Grande Terre / UTM zone 58S - EPSG:3060",
    value:
      "+proj=utm +zone=58 +south +ellps=intl +towgs84=-11.64,-348.6,291.98,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGN72 Nuku Hiva - EPSG:4630",
    value: "+proj=longlat +ellps=intl +towgs84=84,274,65,0,0,0,0 +no_defs",
  },
  {
    label: "IGN72 Nuku Hiva / UTM zone 7S - EPSG:2978",
    value:
      "+proj=utm +zone=7 +south +ellps=intl +towgs84=84,274,65,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGRS - EPSG:3887",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "IGRS - EPSG:3889",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "IGRS / UTM zone 37N - EPSG:3890",
    value:
      "+proj=utm +zone=37 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGRS / UTM zone 38N - EPSG:3891",
    value:
      "+proj=utm +zone=38 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IGRS / UTM zone 39N - EPSG:3892",
    value:
      "+proj=utm +zone=39 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IKBD-92 - EPSG:4667",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Indian 1954 - EPSG:4239",
    value:
      "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=217,823,299,0,0,0,0 +no_defs",
  },
  {
    label: "Indian 1954 / UTM zone 46N - EPSG:23946",
    value:
      "+proj=utm +zone=46 +a=6377276.345 +b=6356075.41314024 +towgs84=217,823,299,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Indian 1954 / UTM zone 47N - EPSG:23947",
    value:
      "+proj=utm +zone=47 +a=6377276.345 +b=6356075.41314024 +towgs84=217,823,299,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Indian 1954 / UTM zone 48N - EPSG:23948",
    value:
      "+proj=utm +zone=48 +a=6377276.345 +b=6356075.41314024 +towgs84=217,823,299,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Indian 1960 - EPSG:4131",
    value:
      "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=198,881,317,0,0,0,0 +no_defs",
  },
  {
    label: "Indian 1960 / TM 106 NE - EPSG:3176",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=106 +k=0.9996 +x_0=500000 +y_0=0 +a=6377276.345 +b=6356075.41314024 +towgs84=198,881,317,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Indian 1960 / UTM zone 48N - EPSG:3148",
    value:
      "+proj=utm +zone=48 +a=6377276.345 +b=6356075.41314024 +towgs84=198,881,317,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Indian 1960 / UTM zone 49N - EPSG:3149",
    value:
      "+proj=utm +zone=49 +a=6377276.345 +b=6356075.41314024 +towgs84=198,881,317,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Indian 1975 - EPSG:4240",
    value:
      "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=210,814,289,0,0,0,0 +no_defs",
  },
  {
    label: "Indian 1975 / UTM zone 47N - EPSG:24047",
    value:
      "+proj=utm +zone=47 +a=6377276.345 +b=6356075.41314024 +towgs84=210,814,289,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Indian 1975 / UTM zone 48N - EPSG:24048",
    value:
      "+proj=utm +zone=48 +a=6377276.345 +b=6356075.41314024 +towgs84=210,814,289,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IRENET95 - EPSG:4173",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "IRENET95 - EPSG:4942",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "IRENET95 (geocentric) - EPSG:4352",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "IRENET95 / Irish Transverse Mercator - EPSG:2157",
    value:
      "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=0.99982 +x_0=600000 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "IRENET95 / UTM zone 29N - EPSG:2158",
    value:
      "+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ISN2004 - EPSG:5322",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ISN2004 - EPSG:5324",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "ISN2004 / LAEA Europe - EPSG:5638",
    value:
      "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ISN2004 / Lambert 2004 - EPSG:5325",
    value:
      "+proj=lcc +lat_1=64.25 +lat_2=65.75 +lat_0=65 +lon_0=-19 +x_0=1700000 +y_0=300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ISN2004 / LCC Europe - EPSG:5639",
    value:
      "+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ISN93 - EPSG:4659",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "ISN93 - EPSG:4944",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ISN93 (geocentric) - EPSG:4387",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ISN93 / Lambert 1993 - EPSG:3057",
    value:
      "+proj=lcc +lat_1=64.25 +lat_2=65.75 +lat_0=65 +lon_0=-19 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Israel - EPSG:4141",
    value: "+proj=longlat +ellps=GRS80 +towgs84=-48,55,52,0,0,0,0 +no_defs",
  },
  {
    label: "Israel / Israeli TM Grid - EPSG:2039",
    value:
      "+proj=tmerc +lat_0=31.73439361111111 +lon_0=35.20451694444445 +k=1.0000067 +x_0=219529.584 +y_0=626907.39 +ellps=GRS80 +towgs84=-48,55,52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ITRF2000 - EPSG:4919",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF2000 (geocentric) - EPSG:4385",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF2005 - EPSG:4896",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF2008 - EPSG:5332",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF88 - EPSG:4910",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF88 (geocentric) - EPSG:4330",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF89 - EPSG:4911",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF89 (geocentric) - EPSG:4331",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF90 - EPSG:4912",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF90 (geocentric) - EPSG:4332",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF91 - EPSG:4913",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF91 (geocentric) - EPSG:4333",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF92 - EPSG:4914",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF92 (geocentric) - EPSG:4334",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF93 - EPSG:4915",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF93 (geocentric) - EPSG:4335",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF94 - EPSG:4916",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF94 (geocentric) - EPSG:4336",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF96 - EPSG:4917",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF96 (geocentric) - EPSG:4337",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF97 - EPSG:4918",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "ITRF97 (geocentric) - EPSG:4338",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Iwo Jima 1945 - EPSG:4709",
    value: "+proj=longlat +ellps=intl +towgs84=145,75,-272,0,0,0,0 +no_defs",
  },
  {
    label: "JAD2001 - EPSG:4758",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "JAD2001 - EPSG:4894",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "JAD2001 / Jamaica Metric Grid - EPSG:3448",
    value:
      "+proj=lcc +lat_1=18 +lat_0=18 +lon_0=-77 +k_0=1 +x_0=750000 +y_0=650000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JAD2001 / UTM zone 17N - EPSG:3449",
    value:
      "+proj=utm +zone=17 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JAD2001 / UTM zone 18N - EPSG:3450",
    value:
      "+proj=utm +zone=18 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JAD69 - EPSG:4242",
    value: "+proj=longlat +ellps=clrk66 +towgs84=70,207,389.5,0,0,0,0 +no_defs",
  },
  {
    label: "JAD69 / Jamaica National Grid - EPSG:24200",
    value:
      "+proj=lcc +lat_1=18 +lat_0=18 +lon_0=-77 +k_0=1 +x_0=250000 +y_0=150000 +ellps=clrk66 +towgs84=70,207,389.5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Jamaica 1875 - EPSG:4241",
    value: "+proj=longlat +a=6378249.144808011 +b=6356514.966204134 +no_defs",
  },
  {
    label: "Jamaica 1875 / Jamaica (Old Grid) - EPSG:24100",
    value:
      "+proj=lcc +lat_1=18 +lat_0=18 +lon_0=-77 +k_0=1 +x_0=167638.49597 +y_0=121918.90616 +a=6378249.144808011 +b=6356514.966204134 +to_meter=0.3047972654 +no_defs",
  },
  {
    label: "JAXA Snow Depth Polar Stereographic North - EPSG:5890",
    value:
      "+proj=stere +lat_0=90 +lat_ts=70 +lon_0=90 +k=1 +x_0=0 +y_0=0 +a=6378273 +b=6356889.449 +units=m +no_defs",
  },
  {
    label: "JGD2000 - EPSG:4612",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "JGD2000 - EPSG:4946",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2000 (geocentric) - EPSG:4354",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS I - EPSG:2443",
    value:
      "+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS II - EPSG:2444",
    value:
      "+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS III - EPSG:2445",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS IV - EPSG:2446",
    value:
      "+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS IX - EPSG:2451",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS V - EPSG:2447",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS VI - EPSG:2448",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS VII - EPSG:2449",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS VIII - EPSG:2450",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS X - EPSG:2452",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS XI - EPSG:2453",
    value:
      "+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS XII - EPSG:2454",
    value:
      "+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS XIII - EPSG:2455",
    value:
      "+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS XIV - EPSG:2456",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS XIX - EPSG:2461",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS XV - EPSG:2457",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS XVI - EPSG:2458",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS XVII - EPSG:2459",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / Japan Plane Rectangular CS XVIII - EPSG:2460",
    value:
      "+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / UTM zone 51N - EPSG:3097",
    value:
      "+proj=utm +zone=51 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / UTM zone 52N - EPSG:3098",
    value:
      "+proj=utm +zone=52 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / UTM zone 53N - EPSG:3099",
    value:
      "+proj=utm +zone=53 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / UTM zone 54N - EPSG:3100",
    value:
      "+proj=utm +zone=54 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 / UTM zone 55N - EPSG:3101",
    value:
      "+proj=utm +zone=55 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "JGD2000 + JGD2000 (vertical) height - EPSG:6696",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +vunits=m +no_defs",
  },
  {
    label: "JGD2011 - EPSG:6666",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 - EPSG:6668",
    value: "+proj=longlat +ellps=GRS80 +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS I - EPSG:6669",
    value:
      "+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS II - EPSG:6670",
    value:
      "+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS III - EPSG:6671",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS IV - EPSG:6672",
    value:
      "+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS IX - EPSG:6677",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS V - EPSG:6673",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS VI - EPSG:6674",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS VII - EPSG:6675",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS VIII - EPSG:6676",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS X - EPSG:6678",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS XI - EPSG:6679",
    value:
      "+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS XII - EPSG:6680",
    value:
      "+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS XIII - EPSG:6681",
    value:
      "+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS XIV - EPSG:6682",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS XIX - EPSG:6687",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS XV - EPSG:6683",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS XVI - EPSG:6684",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS XVII - EPSG:6685",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / Japan Plane Rectangular CS XVIII - EPSG:6686",
    value:
      "+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / UTM zone 51N - EPSG:6688",
    value: "+proj=utm +zone=51 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / UTM zone 52N - EPSG:6689",
    value: "+proj=utm +zone=52 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / UTM zone 53N - EPSG:6690",
    value: "+proj=utm +zone=53 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / UTM zone 54N - EPSG:6691",
    value: "+proj=utm +zone=54 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 / UTM zone 55N - EPSG:6692",
    value: "+proj=utm +zone=55 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "JGD2011 + JGD2011 (vertical) height - EPSG:6697",
    value: "+proj=longlat +ellps=GRS80 +vunits=m +no_defs",
  },
  {
    label: "Johnston Island 1961 - EPSG:4725",
    value: "+proj=longlat +ellps=intl +towgs84=189,-79,-202,0,0,0,0 +no_defs",
  },
  {
    label: "Jouik 1961 - EPSG:4679",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-80.01,253.26,291.19,0,0,0,0 +no_defs",
  },
  {
    label: "K0 1949 - EPSG:4631",
    value: "+proj=longlat +ellps=intl +towgs84=145,-187,103,0,0,0,0 +no_defs",
  },
  {
    label: "K0 1949 / UTM zone 42S (deprecated) - EPSG:2979",
    value:
      "+proj=utm +zone=42 +south +ellps=intl +towgs84=145,-187,103,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1880 - EPSG:4243",
    value: "+proj=longlat +a=6377299.36559538 +b=6356098.359005156 +no_defs",
  },
  {
    label: "Kalianpur 1880 / India zone 0 - EPSG:24370",
    value:
      "+proj=lcc +lat_1=39.5 +lat_0=39.5 +lon_0=68 +k_0=0.99846154 +x_0=2153865.73916853 +y_0=2368292.194628102 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs",
  },
  {
    label: "Kalianpur 1880 / India zone I - EPSG:24371",
    value:
      "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=68 +k_0=0.99878641 +x_0=2743195.592233322 +y_0=914398.5307444407 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs",
  },
  {
    label: "Kalianpur 1880 / India zone IIa - EPSG:24372",
    value:
      "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=74 +k_0=0.99878641 +x_0=2743195.592233322 +y_0=914398.5307444407 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs",
  },
  {
    label: "Kalianpur 1880 / India zone IIb - EPSG:24382",
    value:
      "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=90 +k_0=0.99878641 +x_0=2743195.592233322 +y_0=914398.5307444407 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs",
  },
  {
    label: "Kalianpur 1880 / India zone IIIa - EPSG:24373",
    value:
      "+proj=lcc +lat_1=19 +lat_0=19 +lon_0=80 +k_0=0.99878641 +x_0=2743195.592233322 +y_0=914398.5307444407 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs",
  },
  {
    label: "Kalianpur 1880 / India zone IVa - EPSG:24374",
    value:
      "+proj=lcc +lat_1=12 +lat_0=12 +lon_0=80 +k_0=0.99878641 +x_0=2743195.592233322 +y_0=914398.5307444407 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs",
  },
  {
    label: "Kalianpur 1937 - EPSG:4144",
    value:
      "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=214,804,268,0,0,0,0 +no_defs",
  },
  {
    label: "Kalianpur 1937 / India zone IIb - EPSG:24375",
    value:
      "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=90 +k_0=0.99878641 +x_0=2743185.69 +y_0=914395.23 +a=6377276.345 +b=6356075.41314024 +towgs84=214,804,268,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1937 / UTM zone 45N - EPSG:24305",
    value:
      "+proj=utm +zone=45 +a=6377276.345 +b=6356075.41314024 +towgs84=214,804,268,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1937 / UTM zone 46N - EPSG:24306",
    value:
      "+proj=utm +zone=46 +a=6377276.345 +b=6356075.41314024 +towgs84=214,804,268,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1962 - EPSG:4145",
    value:
      "+proj=longlat +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +no_defs",
  },
  {
    label: "Kalianpur 1962 / India zone I - EPSG:24376",
    value:
      "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=68 +k_0=0.99878641 +x_0=2743196.4 +y_0=914398.8 +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1962 / India zone IIa - EPSG:24377",
    value:
      "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=74 +k_0=0.99878641 +x_0=2743196.4 +y_0=914398.8 +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1962 / UTM zone 41N - EPSG:24311",
    value:
      "+proj=utm +zone=41 +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1962 / UTM zone 42N - EPSG:24312",
    value:
      "+proj=utm +zone=42 +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1962 / UTM zone 43N - EPSG:24313",
    value:
      "+proj=utm +zone=43 +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 - EPSG:4146",
    value:
      "+proj=longlat +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +no_defs",
  },
  {
    label: "Kalianpur 1975 / India zone I - EPSG:24378",
    value:
      "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=68 +k_0=0.99878641 +x_0=2743195.5 +y_0=914398.5 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 / India zone IIa - EPSG:24379",
    value:
      "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=74 +k_0=0.99878641 +x_0=2743195.5 +y_0=914398.5 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 / India zone IIb - EPSG:24380",
    value:
      "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=90 +k_0=0.99878641 +x_0=2743195.5 +y_0=914398.5 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 / India zone IIIa - EPSG:24381",
    value:
      "+proj=lcc +lat_1=19 +lat_0=19 +lon_0=80 +k_0=0.99878641 +x_0=2743195.5 +y_0=914398.5 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 / India zone IVa - EPSG:24383",
    value:
      "+proj=lcc +lat_1=12 +lat_0=12 +lon_0=80 +k_0=0.99878641 +x_0=2743195.5 +y_0=914398.5 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 / UTM zone 42N - EPSG:24342",
    value:
      "+proj=utm +zone=42 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 / UTM zone 43N - EPSG:24343",
    value:
      "+proj=utm +zone=43 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 / UTM zone 44N - EPSG:24344",
    value:
      "+proj=utm +zone=44 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 / UTM zone 45N - EPSG:24345",
    value:
      "+proj=utm +zone=45 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 / UTM zone 46N - EPSG:24346",
    value:
      "+proj=utm +zone=46 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kalianpur 1975 / UTM zone 47N - EPSG:24347",
    value:
      "+proj=utm +zone=47 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kandawala - EPSG:4244",
    value:
      "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=-97,787,86,0,0,0,0 +no_defs",
  },
  {
    label: "Kandawala / Sri Lanka Grid - EPSG:5234",
    value:
      "+proj=tmerc +lat_0=7.000480277777778 +lon_0=80.77171111111112 +k=0.9999238418 +x_0=200000 +y_0=200000 +a=6377276.345 +b=6356075.41314024 +towgs84=-97,787,86,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Karbala 1979 - EPSG:4743",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=70.995,-335.916,262.898,0,0,0,0 +no_defs",
  },
  {
    label: "Karbala 1979 / Iraq National Grid - EPSG:6646",
    value:
      "+proj=tmerc +lat_0=29.02626833333333 +lon_0=46.5 +k=0.9994 +x_0=800000 +y_0=0 +ellps=clrk80 +towgs84=70.995,-335.916,262.898,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Karbala 1979 / UTM zone 37N - EPSG:3391",
    value:
      "+proj=utm +zone=37 +ellps=clrk80 +towgs84=70.995,-335.916,262.898,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Karbala 1979 / UTM zone 38N - EPSG:3392",
    value:
      "+proj=utm +zone=38 +ellps=clrk80 +towgs84=70.995,-335.916,262.898,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Karbala 1979 / UTM zone 39N - EPSG:3393",
    value:
      "+proj=utm +zone=39 +ellps=clrk80 +towgs84=70.995,-335.916,262.898,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kasai 1953 - EPSG:4696",
    value: "+proj=longlat +ellps=clrk80 +no_defs",
  },
  {
    label: "Kasai 1953 / Congo TM zone 22 - EPSG:3316",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=22 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "Kasai 1953 / Congo TM zone 24 - EPSG:3317",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "Katanga 1955 - EPSG:4695",
    value:
      "+proj=longlat +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +no_defs",
  },
  {
    label: "Katanga 1955 / Katanga Gauss zone A - EPSG:3986",
    value:
      "+proj=tmerc +lat_0=-9 +lon_0=30 +k=1 +x_0=200000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Katanga 1955 / Katanga Gauss zone B - EPSG:3987",
    value:
      "+proj=tmerc +lat_0=-9 +lon_0=28 +k=1 +x_0=200000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Katanga 1955 / Katanga Gauss zone C - EPSG:3988",
    value:
      "+proj=tmerc +lat_0=-9 +lon_0=26 +k=1 +x_0=200000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Katanga 1955 / Katanga Gauss zone D - EPSG:3989",
    value:
      "+proj=tmerc +lat_0=-9 +lon_0=24 +k=1 +x_0=200000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Katanga 1955 / Katanga Lambert - EPSG:4415",
    value:
      "+proj=lcc +lat_1=-6.5 +lat_2=-11.5 +lat_0=-9 +lon_0=26 +x_0=500000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Katanga 1955 / Katanga Lambert (deprecated) - EPSG:3314",
    value:
      "+proj=lcc +lat_1=-6.5 +lat_2=-11.5 +lat_0=0 +lon_0=26 +x_0=0 +y_0=0 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Katanga 1955 / Katanga Lambert (deprecated) - EPSG:3985",
    value:
      "+proj=lcc +lat_1=-6.5 +lat_2=-11.5 +lat_0=9 +lon_0=26 +x_0=500000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Katanga 1955 / Katanga TM (deprecated) - EPSG:3315",
    value:
      "+proj=tmerc +lat_0=-9 +lon_0=26 +k=0.9998 +x_0=0 +y_0=0 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kertau (RSO) - EPSG:4751",
    value: "+proj=longlat +a=6377295.664 +b=6356094.667915204 +no_defs",
  },
  {
    label: "Kertau (RSO) / RSO Malaya (ch) - EPSG:3167",
    value:
      "+proj=omerc +lat_0=4 +lonc=102.25 +alpha=323.0257905 +k=0.99984 +x_0=40000 +y_0=0 +no_uoff +gamma=323.1301023611111 +a=6377295.664 +b=6356094.667915204 +to_meter=20.116756 +no_defs",
  },
  {
    label: "Kertau (RSO) / RSO Malaya (m) - EPSG:3168",
    value:
      "+proj=omerc +lat_0=4 +lonc=102.25 +alpha=323.0257905 +k=0.99984 +x_0=804670.24 +y_0=0 +no_uoff +gamma=323.1301023611111 +a=6377295.664 +b=6356094.667915204 +units=m +no_defs",
  },
  {
    label: "Kertau / R.S.O. Malaya (ch) (deprecated) - EPSG:24571",
    value:
      "+proj=omerc +lat_0=4 +lonc=102.25 +alpha=323.0257905 +k=0.99984 +x_0=804671.2997750348 +y_0=0 +no_uoff +gamma=323.1301023611111 +a=6377304.063 +b=6356103.038993155 +towgs84=-11,851,5,0,0,0,0 +to_meter=20.11678249437587 +no_defs",
  },
  {
    label: "Kertau 1968 - EPSG:4245",
    value:
      "+proj=longlat +a=6377304.063 +b=6356103.038993155 +towgs84=-11,851,5,0,0,0,0 +no_defs",
  },
  {
    label: "Kertau 1968 / Singapore Grid - EPSG:24500",
    value:
      "+proj=cass +lat_0=1.287646666666667 +lon_0=103.8530022222222 +x_0=30000 +y_0=30000 +a=6377304.063 +b=6356103.038993155 +towgs84=-11,851,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kertau 1968 / UTM zone 47N - EPSG:24547",
    value:
      "+proj=utm +zone=47 +a=6377304.063 +b=6356103.038993155 +towgs84=-11,851,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kertau 1968 / UTM zone 48N - EPSG:24548",
    value:
      "+proj=utm +zone=48 +a=6377304.063 +b=6356103.038993155 +towgs84=-11,851,5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "KKJ - EPSG:4123",
    value:
      "+proj=longlat +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +no_defs",
  },
  {
    label: "KKJ / Finland Uniform Coordinate System - EPSG:2393",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=3500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs",
  },
  {
    label: "KKJ / Finland Uniform Coordinate System + N60 height - EPSG:3901",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=3500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +vunits=m +no_defs",
  },
  {
    label: "KKJ / Finland zone 0 - EPSG:3386",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs",
  },
  {
    label: "KKJ / Finland zone 1 - EPSG:2391",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=1500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs",
  },
  {
    label: "KKJ / Finland zone 2 - EPSG:2392",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs",
  },
  {
    label: "KKJ / Finland zone 4 - EPSG:2394",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=4500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs",
  },
  {
    label: "KKJ / Finland zone 5 - EPSG:3387",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=5500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs",
  },
  {
    label: "KOC - EPSG:4246",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-294.7,-200.1,525.5,0,0,0,0 +no_defs",
  },
  {
    label: "KOC Lambert - EPSG:24600",
    value:
      "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=45 +k_0=0.9987864078000001 +x_0=1500000 +y_0=1166200 +ellps=clrk80 +towgs84=-294.7,-200.1,525.5,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korea 2000 - EPSG:4737",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Korea 2000 - EPSG:4926",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Korea 2000 / Central Belt - EPSG:5181",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korea 2000 / Central Belt 2010 - EPSG:5186",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korea 2000 / Central Belt Jeju - EPSG:5182",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=550000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korea 2000 / East Belt - EPSG:5183",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korea 2000 / East Belt 2010 - EPSG:5187",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korea 2000 / East Sea Belt - EPSG:5184",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=131 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korea 2000 / East Sea Belt 2010 - EPSG:5188",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=131 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korea 2000 / Unified CS - EPSG:5179",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korea 2000 / West Belt - EPSG:5180",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korea 2000 / West Belt 2010 - EPSG:5185",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Korean 1985 - EPSG:4162",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "Korean 1985 / Central Belt - EPSG:2097",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1985 / Central Belt Jeju - EPSG:5168",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=550000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1985 / East Belt - EPSG:2096",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1985 / East Sea Belt - EPSG:5167",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=131 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1985 / Modified Central Belt - EPSG:5174",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=127.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1985 / Modified Central Belt Jeju - EPSG:5175",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=127.0028902777778 +k=1 +x_0=200000 +y_0=550000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1985 / Modified East Belt - EPSG:5176",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=129.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1985 / Modified East Sea Belt - EPSG:5177",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=131.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1985 / Modified West Belt - EPSG:5173",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=125.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1985 / Unified CS - EPSG:5178",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1985 / West Belt - EPSG:2098",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Korean 1995 - EPSG:4166",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Kousseri - EPSG:4198",
    value: "+proj=longlat +ellps=clrk80 +no_defs",
  },
  {
    label: "Kousseri / UTM zone 33N - EPSG:2313",
    value: "+proj=utm +zone=33 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "KUDAMS - EPSG:4319",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=-20.8,11.3,2.4,0,0,0,0 +no_defs",
  },
  {
    label: "KUDAMS / KTM - EPSG:31901",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=48 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-20.8,11.3,2.4,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "KUDAMS / KTM (deprecated) - EPSG:31900",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=48 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-20.8,11.3,2.4,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Kusaie 1951 - EPSG:4735",
    value: "+proj=longlat +ellps=intl +towgs84=647,1777,-1124,0,0,0,0 +no_defs",
  },
  {
    label: "La Canoa - EPSG:4247",
    value:
      "+proj=longlat +ellps=intl +towgs84=-273.5,110.6,-357.9,0,0,0,0 +no_defs",
  },
  {
    label: "La Canoa / UTM zone 18N - EPSG:24718",
    value:
      "+proj=utm +zone=18 +ellps=intl +towgs84=-273.5,110.6,-357.9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "La Canoa / UTM zone 19N - EPSG:24719",
    value:
      "+proj=utm +zone=19 +ellps=intl +towgs84=-273.5,110.6,-357.9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "La Canoa / UTM zone 20N - EPSG:24720",
    value:
      "+proj=utm +zone=20 +ellps=intl +towgs84=-273.5,110.6,-357.9,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Lake - EPSG:4249",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Lake / Maracaibo Grid - EPSG:2102",
    value:
      "+proj=lcc +lat_1=10.16666666666667 +lat_0=10.16666666666667 +lon_0=-71.60561777777777 +k_0=1 +x_0=200000 +y_0=147315.028 +ellps=intl +units=m +no_defs",
  },
  {
    label: "Lake / Maracaibo Grid M1 - EPSG:2101",
    value:
      "+proj=lcc +lat_1=10.16666666666667 +lat_0=10.16666666666667 +lon_0=-71.60561777777777 +k_0=1 +x_0=0 +y_0=-52684.972 +ellps=intl +units=m +no_defs",
  },
  {
    label: "Lake / Maracaibo Grid M3 - EPSG:2103",
    value:
      "+proj=lcc +lat_1=10.16666666666667 +lat_0=10.16666666666667 +lon_0=-71.60561777777777 +k_0=1 +x_0=500000 +y_0=447315.028 +ellps=intl +units=m +no_defs",
  },
  {
    label: "Lake / Maracaibo La Rosa Grid - EPSG:2104",
    value:
      "+proj=lcc +lat_1=10.16666666666667 +lat_0=10.16666666666667 +lon_0=-71.60561777777777 +k_0=1 +x_0=-17044 +y_0=-23139.97 +ellps=intl +units=m +no_defs",
  },
  {
    label: "Lao 1993 - EPSG:4677",
    value: "+proj=longlat +ellps=krass +no_defs",
  },
  {
    label: "Lao 1993 - EPSG:4990",
    value: "+proj=geocent +ellps=krass +units=m +no_defs",
  },
  {
    label: "Lao 1997 - EPSG:4678",
    value:
      "+proj=longlat +ellps=krass +towgs84=44.585,-131.212,-39.544,0,0,0,0 +no_defs",
  },
  {
    label: "Lao 1997 - EPSG:4992",
    value: "+proj=geocent +ellps=krass +units=m +no_defs",
  },
  {
    label: "Le Pouce 1934 - EPSG:4699",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-770.1,158.4,-498.2,0,0,0,0 +no_defs",
  },
  {
    label: "Le Pouce 1934 / Mauritius Grid - EPSG:3337",
    value:
      "+proj=lcc +lat_1=-20.19506944444445 +lat_0=-20.19506944444445 +lon_0=57.52182777777778 +k_0=1 +x_0=1000000 +y_0=1000000 +ellps=clrk80 +towgs84=-770.1,158.4,-498.2,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Leigon - EPSG:4250",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-130,29,364,0,0,0,0 +no_defs",
  },
  {
    label: "Leigon / Ghana Metre Grid - EPSG:25000",
    value:
      "+proj=tmerc +lat_0=4.666666666666667 +lon_0=-1 +k=0.99975 +x_0=274319.51 +y_0=0 +ellps=clrk80 +towgs84=-130,29,364,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 - EPSG:4754",
    value:
      "+proj=longlat +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +no_defs",
  },
  {
    label: "LGD2006 - EPSG:4899",
    value: "+proj=geocent +ellps=intl +units=m +no_defs",
  },
  {
    label: "LGD2006 / Libya TM - EPSG:3177",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=17 +k=0.9965000000000001 +x_0=1000000 +y_0=0 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / Libya TM zone 10 - EPSG:3195",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / Libya TM zone 11 - EPSG:3196",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / Libya TM zone 12 - EPSG:3197",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=23 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / Libya TM zone 13 - EPSG:3198",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=25 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / Libya TM zone 5 - EPSG:3190",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / Libya TM zone 6 - EPSG:3191",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / Libya TM zone 7 - EPSG:3192",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / Libya TM zone 8 - EPSG:3193",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / Libya TM zone 9 - EPSG:3194",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=17 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / UTM zone 32N - EPSG:3199",
    value:
      "+proj=utm +zone=32 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / UTM zone 33N - EPSG:3201",
    value:
      "+proj=utm +zone=33 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / UTM zone 34N - EPSG:3202",
    value:
      "+proj=utm +zone=34 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LGD2006 / UTM zone 35N - EPSG:3203",
    value:
      "+proj=utm +zone=35 +ellps=intl +towgs84=-208.4058,-109.8777,-2.5764,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Liberia 1964 - EPSG:4251",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-90,40,88,0,0,0,0 +no_defs",
  },
  {
    label: "Lietuvos Koordinoei Sistema 1994 (deprecated) - EPSG:2600",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Lisbon - EPSG:4207",
    value:
      "+proj=longlat +ellps=intl +towgs84=-304.046,-60.576,103.64,0,0,0,0 +no_defs",
  },
  {
    label: "Lisbon (Lisbon) - EPSG:4803",
    value:
      "+proj=longlat +ellps=intl +towgs84=-304.046,-60.576,103.64,0,0,0,0 +pm=lisbon +no_defs",
  },
  {
    label: "Lisbon (Lisbon) / Portuguese Grid - EPSG:20791",
    value:
      "+proj=tmerc +lat_0=39.66666666666666 +lon_0=1 +k=1 +x_0=0 +y_0=0 +ellps=intl +towgs84=-304.046,-60.576,103.64,0,0,0,0 +pm=lisbon +units=m +no_defs",
  },
  {
    label: "Lisbon (Lisbon) / Portuguese National Grid - EPSG:20790",
    value:
      "+proj=tmerc +lat_0=39.66666666666666 +lon_0=1 +k=1 +x_0=200000 +y_0=300000 +ellps=intl +towgs84=-304.046,-60.576,103.64,0,0,0,0 +pm=lisbon +units=m +no_defs",
  },
  {
    label: "Lisbon / Portuguese Grid New - EPSG:5018",
    value:
      "+proj=tmerc +lat_0=39.66666666666666 +lon_0=-8.131906111111112 +k=1 +x_0=0 +y_0=0 +ellps=intl +towgs84=-304.046,-60.576,103.64,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Lisbon 1890 - EPSG:4666",
    value:
      "+proj=longlat +ellps=bessel +towgs84=508.088,-191.042,565.223,0,0,0,0 +no_defs",
  },
  {
    label: "Lisbon 1890 (Lisbon) - EPSG:4904",
    value:
      "+proj=longlat +ellps=bessel +towgs84=508.088,-191.042,565.223,0,0,0,0 +pm=lisbon +no_defs",
  },
  {
    label: "Little Cayman 1961 / UTM zone 17N (deprecated) - EPSG:3357",
    value:
      "+proj=utm +zone=17 +ellps=clrk66 +towgs84=8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081 +units=m +no_defs",
  },
  {
    label: "LKS92 - EPSG:4661",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "LKS92 - EPSG:4948",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "LKS92 (geocentric) - EPSG:4389",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "LKS92 / Latvia TM - EPSG:3059",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=-6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "LKS94 - EPSG:4669",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "LKS94 - EPSG:4950",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "LKS94 (ETRS89) - EPSG:4126",
    value: "+proj=longlat +ellps=GRS80 +no_defs",
  },
  {
    label: "LKS94 (ETRS89) (geocentric) - EPSG:4356",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "LKS94 / Lithuania TM - EPSG:3346",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Locodjo 1965 - EPSG:4142",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-125,53,467,0,0,0,0 +no_defs",
  },
  {
    label: "Locodjo 1965 / TM 5 NW - EPSG:2164",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-5 +k=0.9996 +x_0=500000 +y_0=0 +ellps=clrk80 +towgs84=-125,53,467,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Locodjo 1965 / UTM zone 29N - EPSG:2042",
    value:
      "+proj=utm +zone=29 +ellps=clrk80 +towgs84=-125,53,467,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Locodjo 1965 / UTM zone 30N - EPSG:2040",
    value:
      "+proj=utm +zone=30 +ellps=clrk80 +towgs84=-125,53,467,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Loma Quintana - EPSG:4288",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Lome - EPSG:4252",
    value: "+proj=longlat +a=6378249.2 +b=6356515 +no_defs",
  },
  {
    label: "Lome / UTM zone 31N - EPSG:25231",
    value: "+proj=utm +zone=31 +a=6378249.2 +b=6356515 +units=m +no_defs",
  },
  {
    label: "Luxembourg 1930 - EPSG:4181",
    value:
      "+proj=longlat +ellps=intl +towgs84=-189.6806,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +no_defs",
  },
  {
    label: "Luxembourg 1930 / Gauss - EPSG:2169",
    value:
      "+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-189.6806,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +units=m +no_defs",
  },
  {
    label: "Luzon 1911 - EPSG:4253",
    value: "+proj=longlat +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +no_defs",
  },
  {
    label: "Luzon 1911 / Philippines zone I - EPSG:25391",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Luzon 1911 / Philippines zone II - EPSG:25392",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=119 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Luzon 1911 / Philippines zone III - EPSG:25393",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Luzon 1911 / Philippines zone IV - EPSG:25394",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Luzon 1911 / Philippines zone V - EPSG:25395",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=125 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "M'poraloko - EPSG:4266",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-74,-130,42,0,0,0,0 +no_defs",
  },
  {
    label: "M'poraloko / UTM zone 32N - EPSG:26632",
    value:
      "+proj=utm +zone=32 +a=6378249.2 +b=6356515 +towgs84=-74,-130,42,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "M'poraloko / UTM zone 32S - EPSG:26692",
    value:
      "+proj=utm +zone=32 +south +a=6378249.2 +b=6356515 +towgs84=-74,-130,42,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MACARIO SOLIS - EPSG:5368",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "MACARIO SOLIS - EPSG:5371",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Macedonian State Coordinate System - EPSG:6204",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.9999 +x_0=500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Madeira 1936 - EPSG:4185",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Madeira 1936 / UTM zone 28N (deprecated) - EPSG:2191",
    value: "+proj=utm +zone=28 +ellps=intl +units=m +no_defs",
  },
  {
    label: "Madrid 1870 (Madrid) - EPSG:4903",
    value:
      "+proj=longlat +a=6378298.3 +b=6356657.142669561 +pm=madrid +no_defs",
  },
  {
    label: "Madrid 1870 (Madrid) / Spain - EPSG:2062",
    value:
      "+proj=lcc +lat_1=40 +lat_0=40 +lon_0=0 +k_0=0.9988085293 +x_0=600000 +y_0=600000 +a=6378298.3 +b=6356657.142669561 +pm=madrid +units=m +no_defs",
  },
  {
    label: "Madzansua - EPSG:4128",
    value: "+proj=longlat +ellps=clrk66 +no_defs",
  },
  {
    label: "MAGNA-SIRGAS - EPSG:4686",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "MAGNA-SIRGAS - EPSG:4996",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "MAGNA-SIRGAS / Colombia Bogota zone - EPSG:3116",
    value:
      "+proj=tmerc +lat_0=4.596200416666666 +lon_0=-74.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MAGNA-SIRGAS / Colombia East Central zone - EPSG:3117",
    value:
      "+proj=tmerc +lat_0=4.596200416666666 +lon_0=-71.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MAGNA-SIRGAS / Colombia East zone - EPSG:3118",
    value:
      "+proj=tmerc +lat_0=4.596200416666666 +lon_0=-68.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MAGNA-SIRGAS / Colombia Far West zone - EPSG:3114",
    value:
      "+proj=tmerc +lat_0=4.596200416666666 +lon_0=-80.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MAGNA-SIRGAS / Colombia West zone - EPSG:3115",
    value:
      "+proj=tmerc +lat_0=4.596200416666666 +lon_0=-77.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mahe 1971 - EPSG:4256",
    value: "+proj=longlat +ellps=clrk80 +towgs84=41,-220,-134,0,0,0,0 +no_defs",
  },
  {
    label: "Makassar - EPSG:4257",
    value:
      "+proj=longlat +ellps=bessel +towgs84=-587.8,519.75,145.76,0,0,0,0 +no_defs",
  },
  {
    label: "Makassar (Jakarta) - EPSG:4804",
    value:
      "+proj=longlat +ellps=bessel +towgs84=-587.8,519.75,145.76,0,0,0,0 +pm=jakarta +no_defs",
  },
  {
    label: "Makassar (Jakarta) / NEIEZ - EPSG:5331",
    value:
      "+proj=merc +lon_0=3.192280555555556 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-587.8,519.75,145.76,0,0,0,0 +pm=jakarta +units=m +no_defs",
  },
  {
    label: "Makassar (Jakarta) / NEIEZ (deprecated) - EPSG:25700",
    value:
      "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-587.8,519.75,145.76,0,0,0,0 +pm=jakarta +units=m +no_defs",
  },
  {
    label: "Makassar / NEIEZ - EPSG:3002",
    value:
      "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-587.8,519.75,145.76,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Malongo 1987 - EPSG:4259",
    value:
      "+proj=longlat +ellps=intl +towgs84=-254.1,-5.36,-100.29,0,0,0,0 +no_defs",
  },
  {
    label: "Malongo 1987 / UTM zone 32S - EPSG:25932",
    value:
      "+proj=utm +zone=32 +south +ellps=intl +towgs84=-254.1,-5.36,-100.29,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Manoca - EPSG:4260",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-70.9,-151.8,-41.4,0,0,0,0 +no_defs",
  },
  {
    label: "Manoca 1962 - EPSG:4193",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-70.9,-151.8,-41.4,0,0,0,0 +no_defs",
  },
  {
    label: "Manoca 1962 / UTM zone 32N - EPSG:2215",
    value:
      "+proj=utm +zone=32 +a=6378249.2 +b=6356515 +towgs84=-70.9,-151.8,-41.4,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Marcus Island 1952 - EPSG:4711",
    value: "+proj=longlat +ellps=intl +towgs84=124,-234,-25,0,0,0,0 +no_defs",
  },
  {
    label: "MARGEN - EPSG:5352",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "MARGEN - EPSG:5354",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "MARGEN / UTM zone 19S - EPSG:5356",
    value:
      "+proj=utm +zone=19 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MARGEN / UTM zone 20S - EPSG:5355",
    value:
      "+proj=utm +zone=20 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MARGEN / UTM zone 21S - EPSG:5357",
    value:
      "+proj=utm +zone=21 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Marshall Islands 1960 - EPSG:4732",
    value:
      "+proj=longlat +a=6378270 +b=6356794.343434343 +towgs84=102,52,-38,0,0,0,0 +no_defs",
  },
  {
    label: "Martinique 1938 - EPSG:4625",
    value: "+proj=longlat +ellps=intl +towgs84=186,482,151,0,0,0,0 +no_defs",
  },
  {
    label: "Martinique 1938 / UTM zone 20N - EPSG:2973",
    value:
      "+proj=utm +zone=20 +ellps=intl +towgs84=186,482,151,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Massawa - EPSG:4262",
    value: "+proj=longlat +ellps=bessel +towgs84=639,405,60,0,0,0,0 +no_defs",
  },
  {
    label: "Massawa / UTM zone 37N - EPSG:26237",
    value:
      "+proj=utm +zone=37 +ellps=bessel +towgs84=639,405,60,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Maupiti 83 - EPSG:4692",
    value:
      "+proj=longlat +ellps=intl +towgs84=217.037,86.959,23.956,0,0,0,0 +no_defs",
  },
  {
    label: "Maupiti 83 / UTM zone 5S - EPSG:3306",
    value:
      "+proj=utm +zone=5 +south +ellps=intl +towgs84=217.037,86.959,23.956,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mauritania 1999 - EPSG:4681",
    value: "+proj=longlat +ellps=clrk80 +no_defs",
  },
  {
    label: "Mauritania 1999 - EPSG:4702",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Mauritania 1999 - EPSG:4924",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Mauritania 1999 / UTM zone 28N - EPSG:3343",
    value:
      "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mauritania 1999 / UTM zone 28N (deprecated) - EPSG:3103",
    value: "+proj=utm +zone=28 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "Mauritania 1999 / UTM zone 29N - EPSG:3344",
    value:
      "+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mauritania 1999 / UTM zone 29N (deprecated) - EPSG:3104",
    value: "+proj=utm +zone=29 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "Mauritania 1999 / UTM zone 30N - EPSG:3345",
    value:
      "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mauritania 1999 / UTM zone 30N (deprecated) - EPSG:3105",
    value: "+proj=utm +zone=30 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "Merchich - EPSG:4261",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +no_defs",
  },
  {
    label: "Merchich / Nord Maroc - EPSG:26191",
    value:
      "+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=-5.4 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Merchich / Sahara (deprecated) - EPSG:26193",
    value:
      "+proj=lcc +lat_1=26.1 +lat_0=26.1 +lon_0=-5.4 +k_0=0.9996 +x_0=1200000 +y_0=400000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Merchich / Sahara Nord - EPSG:26194",
    value:
      "+proj=lcc +lat_1=26.1 +lat_0=26.1 +lon_0=-5.4 +k_0=0.999616304 +x_0=1200000 +y_0=400000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Merchich / Sahara Sud - EPSG:26195",
    value:
      "+proj=lcc +lat_1=22.5 +lat_0=22.5 +lon_0=-5.4 +k_0=0.999616437 +x_0=1500000 +y_0=400000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Merchich / Sud Maroc - EPSG:26192",
    value:
      "+proj=lcc +lat_1=29.7 +lat_0=29.7 +lon_0=-5.4 +k_0=0.9996155960000001 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF2008 - EPSG:6363",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF2008 - EPSG:6365",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Mexico ITRF2008 / LCC - EPSG:6372",
    value:
      "+proj=lcc +lat_1=17.5 +lat_2=29.5 +lat_0=12 +lon_0=-102 +x_0=2500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF2008 / UTM zone 11N - EPSG:6366",
    value:
      "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF2008 / UTM zone 12N - EPSG:6367",
    value:
      "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF2008 / UTM zone 13N - EPSG:6368",
    value:
      "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF2008 / UTM zone 14N - EPSG:6369",
    value:
      "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF2008 / UTM zone 15N - EPSG:6370",
    value:
      "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF2008 / UTM zone 16N - EPSG:6371",
    value:
      "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF92 - EPSG:4481",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF92 - EPSG:4483",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Mexico ITRF92 / LCC - EPSG:6362",
    value:
      "+proj=lcc +lat_1=17.5 +lat_2=29.5 +lat_0=12 +lon_0=-102 +x_0=2500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF92 / UTM zone 11N - EPSG:4484",
    value:
      "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF92 / UTM zone 12N - EPSG:4485",
    value:
      "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF92 / UTM zone 13N - EPSG:4486",
    value:
      "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF92 / UTM zone 14N - EPSG:4487",
    value:
      "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF92 / UTM zone 15N - EPSG:4488",
    value:
      "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mexico ITRF92 / UTM zone 16N - EPSG:4489",
    value:
      "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MGI - EPSG:4312",
    value: "+proj=longlat +datum=hermannskogel +no_defs",
  },
  {
    label: "MGI (Ferro) - EPSG:4805",
    value:
      "+proj=longlat +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +no_defs",
  },
  {
    label: "MGI (Ferro) / Austria Central Zone - EPSG:31282",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / Austria Central Zone (deprecated) - EPSG:31292",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / Austria East Zone - EPSG:31283",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=34 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / Austria East Zone (deprecated) - EPSG:31293",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=34 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / Austria GK Central Zone - EPSG:31252",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=0 +y_0=-5000000 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / Austria GK East Zone - EPSG:31253",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=34 +k=1 +x_0=0 +y_0=-5000000 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / Austria GK West Zone - EPSG:31251",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=0 +y_0=-5000000 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / Austria West Zone - EPSG:31281",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / Austria West Zone (deprecated) - EPSG:31291",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / M28 - EPSG:31288",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=150000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / M31 - EPSG:31289",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=450000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI (Ferro) / M34 - EPSG:31290",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=34 +k=1 +x_0=750000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "MGI / 3-degree Gauss zone 5 (deprecated) - EPSG:31265",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / 3-degree Gauss zone 6 (deprecated) - EPSG:31266",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / 3-degree Gauss zone 7 (deprecated) - EPSG:31267",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / 3-degree Gauss zone 8 (deprecated) - EPSG:31268",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria GK Central - EPSG:31255",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13.33333333333333 +k=1 +x_0=0 +y_0=-5000000 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria GK East - EPSG:31256",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16.33333333333333 +k=1 +x_0=0 +y_0=-5000000 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria GK M28 - EPSG:31257",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=10.33333333333333 +k=1 +x_0=150000 +y_0=-5000000 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria GK M31 - EPSG:31258",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13.33333333333333 +k=1 +x_0=450000 +y_0=-5000000 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria GK M34 - EPSG:31259",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16.33333333333333 +k=1 +x_0=750000 +y_0=-5000000 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria GK West - EPSG:31254",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=10.33333333333333 +k=1 +x_0=0 +y_0=-5000000 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria Lambert - EPSG:31287",
    value:
      "+proj=lcc +lat_1=49 +lat_2=46 +lat_0=47.5 +lon_0=13.33333333333333 +x_0=400000 +y_0=400000 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria Lambert (deprecated) - EPSG:31297",
    value:
      "+proj=lcc +lat_1=49 +lat_2=46 +lat_0=47.5 +lon_0=13.33333333333333 +x_0=400000 +y_0=400000 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria M28 - EPSG:31284",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=10.33333333333333 +k=1 +x_0=150000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria M31 - EPSG:31285",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13.33333333333333 +k=1 +x_0=450000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Austria M34 - EPSG:31286",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16.33333333333333 +k=1 +x_0=750000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Balkans zone 5 (deprecated) - EPSG:31275",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=5500000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Balkans zone 6 (deprecated) - EPSG:31276",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=0.9999 +x_0=6500000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Balkans zone 7 (deprecated) - EPSG:31277",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.9999 +x_0=7500000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Balkans zone 8 (deprecated) - EPSG:31278",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.9999 +x_0=7500000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Balkans zone 8 (deprecated) - EPSG:31279",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9999 +x_0=8500000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / M28 (deprecated) - EPSG:31294",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=10.33333333333333 +k=1 +x_0=150000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / M31 (deprecated) - EPSG:31295",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13.33333333333333 +k=1 +x_0=450000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / M34 (deprecated) - EPSG:31296",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16.33333333333333 +k=1 +x_0=750000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Slovene National Grid (deprecated) - EPSG:3787",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=-5000000 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI / Slovenia Grid (deprecated) - EPSG:2170",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=0 +datum=hermannskogel +units=m +no_defs",
  },
  {
    label: "MGI 1901 - EPSG:3906",
    value: "+proj=longlat +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +no_defs",
  },
  {
    label: "MGI 1901 / Balkans zone 5 - EPSG:3907",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=5500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MGI 1901 / Balkans zone 6 - EPSG:3908",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=0.9999 +x_0=6500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MGI 1901 / Balkans zone 7 - EPSG:3909",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.9999 +x_0=7500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MGI 1901 / Balkans zone 8 - EPSG:3910",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9999 +x_0=8500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MGI 1901 / Slovene National Grid - EPSG:3912",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=-5000000 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MGI 1901 / Slovenia Grid - EPSG:3911",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mhast - EPSG:4264",
    value:
      "+proj=longlat +ellps=intl +towgs84=-252.95,-4.11,-96.38,0,0,0,0 +no_defs",
  },
  {
    label: "Mhast (offshore) - EPSG:4705",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Mhast (offshore) / UTM zone 32S - EPSG:3354",
    value: "+proj=utm +zone=32 +south +ellps=intl +units=m +no_defs",
  },
  {
    label: "Mhast (onshore) - EPSG:4704",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Mhast (onshore) / UTM zone 32S - EPSG:3353",
    value: "+proj=utm +zone=32 +south +ellps=intl +units=m +no_defs",
  },
  {
    label: "Mhast / UTM zone 32S (deprecated) - EPSG:26432",
    value:
      "+proj=utm +zone=32 +south +ellps=intl +towgs84=-252.95,-4.11,-96.38,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mhast 1951 - EPSG:4703",
    value: "+proj=longlat +ellps=clrk80 +no_defs",
  },
  {
    label: "Midway 1961 - EPSG:4727",
    value: "+proj=longlat +ellps=intl +towgs84=403,-81,277,0,0,0,0 +no_defs",
  },
  {
    label: "Minna - EPSG:4263",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +no_defs",
  },
  {
    label: "Minna / Nigeria East Belt - EPSG:26393",
    value:
      "+proj=tmerc +lat_0=4 +lon_0=12.5 +k=0.99975 +x_0=1110369.7 +y_0=0 +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Minna / Nigeria Mid Belt - EPSG:26392",
    value:
      "+proj=tmerc +lat_0=4 +lon_0=8.5 +k=0.99975 +x_0=670553.98 +y_0=0 +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Minna / Nigeria West Belt - EPSG:26391",
    value:
      "+proj=tmerc +lat_0=4 +lon_0=4.5 +k=0.99975 +x_0=230738.26 +y_0=0 +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Minna / UTM zone 31N - EPSG:26331",
    value:
      "+proj=utm +zone=31 +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Minna / UTM zone 32N - EPSG:26332",
    value:
      "+proj=utm +zone=32 +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "MOLDREF99 - EPSG:4000",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "MOLDREF99 - EPSG:4023",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "MOLDREF99 / Moldova TM - EPSG:4026",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=28.4 +k=0.9999400000000001 +x_0=200000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Monte Mario - EPSG:4265",
    value:
      "+proj=longlat +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +no_defs",
  },
  {
    label: "Monte Mario (Rome) - EPSG:4806",
    value:
      "+proj=longlat +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +pm=rome +no_defs",
  },
  {
    label: "Monte Mario (Rome) / Italy zone 1 (deprecated) - EPSG:26591",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-3.45233333333333 +k=0.9996 +x_0=1500000 +y_0=0 +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +pm=rome +units=m +no_defs",
  },
  {
    label: "Monte Mario (Rome) / Italy zone 2 (deprecated) - EPSG:26592",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=2.54766666666666 +k=0.9996 +x_0=2520000 +y_0=0 +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +pm=rome +units=m +no_defs",
  },
  {
    label: "Monte Mario / Italy zone 1 - EPSG:3003",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=1500000 +y_0=0 +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +units=m +no_defs",
  },
  {
    label: "Monte Mario / Italy zone 2 - EPSG:3004",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=2520000 +y_0=0 +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +units=m +no_defs",
  },
  {
    label: "Monte Mario / TM Emilia-Romagna - EPSG:5659",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500053 +y_0=-3999820 +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +units=m +no_defs",
  },
  {
    label: "Montserrat 1958 - EPSG:4604",
    value: "+proj=longlat +ellps=clrk80 +towgs84=174,359,365,0,0,0,0 +no_defs",
  },
  {
    label: "Montserrat 1958 / British West Indies Grid - EPSG:2004",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=174,359,365,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Moorea 87 - EPSG:4691",
    value:
      "+proj=longlat +ellps=intl +towgs84=215.525,149.593,176.229,-3.2624,-1.692,-1.1571,10.4773 +no_defs",
  },
  {
    label: "Moorea 87 / UTM zone 6S - EPSG:3305",
    value:
      "+proj=utm +zone=6 +south +ellps=intl +towgs84=215.525,149.593,176.229,-3.2624,-1.692,-1.1571,10.4773 +units=m +no_defs",
  },
  {
    label: "MOP78 - EPSG:4639",
    value: "+proj=longlat +ellps=intl +towgs84=253,-132,-127,0,0,0,0 +no_defs",
  },
  {
    label: "MOP78 / UTM zone 1S - EPSG:2988",
    value:
      "+proj=utm +zone=1 +south +ellps=intl +towgs84=253,-132,-127,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Mount Dillon - EPSG:4157",
    value: "+proj=longlat +a=6378293.645208759 +b=6356617.987679838 +no_defs",
  },
  {
    label: "Mount Dillon / Tobago Grid - EPSG:2066",
    value:
      "+proj=cass +lat_0=11.25217861111111 +lon_0=-60.68600888888889 +x_0=37718.66159325 +y_0=36209.91512952 +a=6378293.645208759 +b=6356617.987679838 +to_meter=0.201166195164 +no_defs",
  },
  {
    label: "Moznet - EPSG:4130",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Moznet - EPSG:4952",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "Moznet (geocentric) - EPSG:4358",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "Moznet / UTM zone 36S - EPSG:3036",
    value:
      "+proj=utm +zone=36 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Moznet / UTM zone 37S - EPSG:3037",
    value:
      "+proj=utm +zone=37 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Moznet / UTM zone 38S - EPSG:5629",
    value:
      "+proj=utm +zone=38 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD Michigan / Michigan Central (deprecated) - EPSG:26812",
    value:
      "+proj=lcc +lat_1=44.18333333333333 +lat_2=45.7 +lat_0=43.31666666666667 +lon_0=-84.33333333333333 +x_0=609601.2192024384 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs",
  },
  {
    label: "NAD Michigan / Michigan East (deprecated) - EPSG:26801",
    value:
      "+proj=tmerc +lat_0=41.5 +lon_0=-83.66666666666667 +k=0.999942857 +x_0=152400.3048006096 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs",
  },
  {
    label: "NAD Michigan / Michigan North (deprecated) - EPSG:26811",
    value:
      "+proj=lcc +lat_1=45.48333333333333 +lat_2=47.08333333333334 +lat_0=44.78333333333333 +lon_0=-87 +x_0=609601.2192024384 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs",
  },
  {
    label: "NAD Michigan / Michigan Old Central (deprecated) - EPSG:26802",
    value:
      "+proj=tmerc +lat_0=41.5 +lon_0=-85.75 +k=0.999909091 +x_0=152400.3048006096 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs",
  },
  {
    label: "NAD Michigan / Michigan South (deprecated) - EPSG:26813",
    value:
      "+proj=lcc +lat_1=42.1 +lat_2=43.66666666666666 +lat_0=41.5 +lon_0=-84.33333333333333 +x_0=609601.2192024384 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs",
  },
  {
    label: "NAD Michigan / Michigan West (deprecated) - EPSG:26803",
    value:
      "+proj=tmerc +lat_0=41.5 +lon_0=-88.75 +k=0.999909091 +x_0=152400.3048006096 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 - EPSG:4267",
    value: "+proj=longlat +datum=NAD27 +no_defs",
  },
  {
    label: "NAD27 / Alabama East - EPSG:26729",
    value:
      "+proj=tmerc +lat_0=30.5 +lon_0=-85.83333333333333 +k=0.99996 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alabama West - EPSG:26730",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-87.5 +k=0.999933333 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska Albers - EPSG:2964",
    value:
      "+proj=aea +lat_1=55 +lat_2=65 +lat_0=50 +lon_0=-154 +x_0=0 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska zone 1 - EPSG:26731",
    value:
      "+proj=omerc +lat_0=57 +lonc=-133.6666666666667 +alpha=323.1301023611111 +k=0.9999 +x_0=5000000.001016002 +y_0=-5000000.001016002 +no_uoff +gamma=323.1301023611111 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska zone 10 - EPSG:26740",
    value:
      "+proj=lcc +lat_1=53.83333333333334 +lat_2=51.83333333333334 +lat_0=51 +lon_0=-176 +x_0=914401.8288036576 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska zone 2 - EPSG:26732",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-142 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska zone 3 - EPSG:26733",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-146 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska zone 4 - EPSG:26734",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-150 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska zone 5 - EPSG:26735",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-154 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska zone 6 - EPSG:26736",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-158 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska zone 7 - EPSG:26737",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-162 +k=0.9999 +x_0=213360.4267208534 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska zone 8 - EPSG:26738",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-166 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alaska zone 9 - EPSG:26739",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-170 +k=0.9999 +x_0=182880.3657607315 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Alberta 3TM ref merid 111 W - EPSG:3771",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-111 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Alberta 3TM ref merid 114 W - EPSG:3772",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Alberta 3TM ref merid 117 W - EPSG:3773",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-117 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Alberta 3TM ref merid 120 W - EPSG:3800",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Alberta 3TM ref merid 120 W (deprecated) - EPSG:3774",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Arizona Central - EPSG:26749",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Arizona East - EPSG:26748",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Arizona West - EPSG:26750",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Arkansas North - EPSG:26751",
    value:
      "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Arkansas South - EPSG:26752",
    value:
      "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 10N (ftUS) - EPSG:4410",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-123 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 11N (ftUS) - EPSG:4411",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-117 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 12N (ftUS) - EPSG:4412",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-111 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 13N (ftUS) - EPSG:4413",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-105 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 14N (feet) (deprecated) - EPSG:32074",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-99 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 14N (ftUS) - EPSG:32064",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-99 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 15N (feet) (deprecated) - EPSG:32075",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 15N (ftUS) - EPSG:32065",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 16N (feet) (deprecated) - EPSG:32076",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 16N (ftUS) - EPSG:32066",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 17N (feet) (deprecated) - EPSG:32077",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 17N (ftUS) - EPSG:32067",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 18N (ftUS) - EPSG:4418",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-75 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 19N (ftUS) - EPSG:4419",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-69 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 1N (ftUS) - EPSG:4401",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 2N (ftUS) - EPSG:4402",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 3N (ftUS) - EPSG:4403",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-165 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 4N (ftUS) - EPSG:4404",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-159 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 59N (ftUS) - EPSG:4399",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 5N (ftUS) - EPSG:4405",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-153 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 60N (ftUS) - EPSG:4400",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 6N (ftUS) - EPSG:4406",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-147 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 7N (ftUS) - EPSG:4407",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-141 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 8N (ftUS) - EPSG:4408",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-135 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / BLM 9N (ftUS) - EPSG:4409",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-129 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / California Albers - EPSG:3309",
    value:
      "+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / California zone I - EPSG:26741",
    value:
      "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / California zone II - EPSG:26742",
    value:
      "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / California zone III - EPSG:26743",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / California zone IV - EPSG:26744",
    value:
      "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / California zone V - EPSG:26745",
    value:
      "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / California zone VI - EPSG:26746",
    value:
      "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / California zone VII - EPSG:26799",
    value:
      "+proj=lcc +lat_1=34.41666666666666 +lat_2=33.86666666666667 +lat_0=34.13333333333333 +lon_0=-118.3333333333333 +x_0=1276106.450596901 +y_0=1268253.006858014 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / California zone VII (deprecated) - EPSG:26747",
    value:
      "+proj=lcc +lat_1=34.41666666666666 +lat_2=33.86666666666667 +lat_0=34.13333333333333 +lon_0=-118.3333333333333 +x_0=1276106.450596901 +y_0=127079.524511049 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Colorado Central - EPSG:26754",
    value:
      "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Colorado North - EPSG:26753",
    value:
      "+proj=lcc +lat_1=39.71666666666667 +lat_2=40.78333333333333 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Colorado South - EPSG:26755",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Connecticut - EPSG:26756",
    value:
      "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=182880.3657607315 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Conus Albers - EPSG:5069",
    value:
      "+proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=23 +lon_0=-96 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Cuba Norte - EPSG:3795",
    value:
      "+proj=lcc +lat_1=23 +lat_2=21.7 +lat_0=22.35 +lon_0=-81 +x_0=500000 +y_0=280296.016 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Cuba Norte (deprecated) - EPSG:2085",
    value:
      "+proj=lcc +lat_1=22.35 +lat_0=22.35 +lon_0=-81 +k_0=0.99993602 +x_0=500000 +y_0=280296.016 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Cuba Sur - EPSG:3796",
    value:
      "+proj=lcc +lat_1=21.3 +lat_2=20.13333333333333 +lat_0=20.71666666666667 +lon_0=-76.83333333333333 +x_0=500000 +y_0=229126.939 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Cuba Sur (deprecated) - EPSG:2086",
    value:
      "+proj=lcc +lat_1=20.71666666666667 +lat_0=20.71666666666667 +lon_0=-76.83333333333333 +k_0=0.99994848 +x_0=500000 +y_0=229126.939 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Delaware - EPSG:26757",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Florida East - EPSG:26758",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Florida North - EPSG:26760",
    value:
      "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Florida West - EPSG:26759",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Georgia East - EPSG:26766",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Georgia West - EPSG:26767",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Guatemala Norte (deprecated) - EPSG:32061",
    value:
      "+proj=lcc +lat_1=16.81666666666667 +lat_0=16.81666666666667 +lon_0=-90.33333333333333 +k_0=0.99992226 +x_0=500000 +y_0=292209.579 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Guatemala Sur (deprecated) - EPSG:32062",
    value:
      "+proj=lcc +lat_1=14.9 +lat_0=14.9 +lon_0=-90.33333333333333 +k_0=0.99989906 +x_0=500000 +y_0=325992.681 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Idaho Central - EPSG:26769",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Idaho East - EPSG:26768",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Idaho West - EPSG:26770",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Illinois East - EPSG:26771",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Illinois West - EPSG:26772",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Indiana East - EPSG:26773",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Indiana West - EPSG:26774",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Iowa North - EPSG:26775",
    value:
      "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Iowa South - EPSG:26776",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Kansas North - EPSG:26777",
    value:
      "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Kansas South - EPSG:26778",
    value:
      "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Kentucky North - EPSG:26779",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Kentucky South - EPSG:26780",
    value:
      "+proj=lcc +lat_1=36.73333333333333 +lat_2=37.93333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Louisiana North - EPSG:26781",
    value:
      "+proj=lcc +lat_1=31.16666666666667 +lat_2=32.66666666666666 +lat_0=30.66666666666667 +lon_0=-92.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Louisiana Offshore - EPSG:32099",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-91.33333333333333 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Louisiana South - EPSG:26782",
    value:
      "+proj=lcc +lat_1=29.3 +lat_2=30.7 +lat_0=28.66666666666667 +lon_0=-91.33333333333333 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Maine East - EPSG:26783",
    value:
      "+proj=tmerc +lat_0=43.83333333333334 +lon_0=-68.5 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Maine West - EPSG:26784",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Maryland - EPSG:26785",
    value:
      "+proj=lcc +lat_1=38.3 +lat_2=39.45 +lat_0=37.83333333333334 +lon_0=-77 +x_0=243840.4876809754 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Massachusetts Island - EPSG:26787",
    value:
      "+proj=lcc +lat_1=41.28333333333333 +lat_2=41.48333333333333 +lat_0=41 +lon_0=-70.5 +x_0=60960.12192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Massachusetts Mainland - EPSG:26786",
    value:
      "+proj=lcc +lat_1=41.71666666666667 +lat_2=42.68333333333333 +lat_0=41 +lon_0=-71.5 +x_0=182880.3657607315 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Michigan East - EPSG:5623",
    value:
      "+proj=tmerc +lat_0=41.5 +lon_0=-83.66666666666667 +k=0.999942857 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Michigan Old Central - EPSG:5624",
    value:
      "+proj=tmerc +lat_0=41.5 +lon_0=-85.75 +k=0.999909091 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Michigan West - EPSG:5625",
    value:
      "+proj=tmerc +lat_0=41.5 +lon_0=-88.75 +k=0.999909091 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Minnesota Central - EPSG:26792",
    value:
      "+proj=lcc +lat_1=45.61666666666667 +lat_2=47.05 +lat_0=45 +lon_0=-94.25 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Minnesota North - EPSG:26791",
    value:
      "+proj=lcc +lat_1=47.03333333333333 +lat_2=48.63333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Minnesota South - EPSG:26793",
    value:
      "+proj=lcc +lat_1=43.78333333333333 +lat_2=45.21666666666667 +lat_0=43 +lon_0=-94 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Mississippi East - EPSG:26794",
    value:
      "+proj=tmerc +lat_0=29.66666666666667 +lon_0=-88.83333333333333 +k=0.99996 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Mississippi West - EPSG:26795",
    value:
      "+proj=tmerc +lat_0=30.5 +lon_0=-90.33333333333333 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Missouri Central - EPSG:26797",
    value:
      "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-92.5 +k=0.999933333 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Missouri East - EPSG:26796",
    value:
      "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-90.5 +k=0.999933333 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Missouri West - EPSG:26798",
    value:
      "+proj=tmerc +lat_0=36.16666666666666 +lon_0=-94.5 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Montana Central - EPSG:32002",
    value:
      "+proj=lcc +lat_1=47.88333333333333 +lat_2=46.45 +lat_0=45.83333333333334 +lon_0=-109.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Montana North - EPSG:32001",
    value:
      "+proj=lcc +lat_1=48.71666666666667 +lat_2=47.85 +lat_0=47 +lon_0=-109.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Montana South - EPSG:32003",
    value:
      "+proj=lcc +lat_1=46.4 +lat_2=44.86666666666667 +lat_0=44 +lon_0=-109.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / MTM zone 1 - EPSG:32081",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-53 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / MTM zone 2 - EPSG:32082",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-56 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / MTM zone 3 - EPSG:32083",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-58.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / MTM zone 4 - EPSG:32084",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / MTM zone 5 - EPSG:32085",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / MTM zone 6 - EPSG:32086",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-67.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / MTQ Lambert - EPSG:3797",
    value:
      "+proj=lcc +lat_1=50 +lat_2=46 +lat_0=44 +lon_0=-70 +x_0=800000 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Nebraska North - EPSG:32005",
    value:
      "+proj=lcc +lat_1=41.85 +lat_2=42.81666666666667 +lat_0=41.33333333333334 +lon_0=-100 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Nebraska South - EPSG:32006",
    value:
      "+proj=lcc +lat_1=40.28333333333333 +lat_2=41.71666666666667 +lat_0=39.66666666666666 +lon_0=-99.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Nevada Central - EPSG:32008",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Nevada East - EPSG:32007",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Nevada West - EPSG:32009",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / New Brunswick Stereographic (NAD27) - EPSG:5588",
    value:
      "+proj=sterea +lat_0=46.5 +lon_0=-66.5 +k=0.999912 +x_0=304800 +y_0=304800 +datum=NAD27 +units=ft +no_defs",
  },
  {
    label: "NAD27 / New Hampshire - EPSG:32010",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / New Jersey - EPSG:32011",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.66666666666667 +k=0.9999749999999999 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / New Mexico Central - EPSG:32013",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / New Mexico East - EPSG:32012",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / New Mexico West - EPSG:32014",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / New York Central - EPSG:32016",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / New York East - EPSG:32015",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-74.33333333333333 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / New York Long Island - EPSG:4456",
    value:
      "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.5 +lon_0=-74 +x_0=609601.2192024384 +y_0=30480.06096012192 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / New York Long Island (deprecated) - EPSG:32018",
    value:
      "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.5 +lon_0=-74 +x_0=304800.6096012192 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / New York West - EPSG:32017",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / North Carolina - EPSG:32019",
    value:
      "+proj=lcc +lat_1=34.33333333333334 +lat_2=36.16666666666666 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / North Dakota North - EPSG:32020",
    value:
      "+proj=lcc +lat_1=47.43333333333333 +lat_2=48.73333333333333 +lat_0=47 +lon_0=-100.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / North Dakota South - EPSG:32021",
    value:
      "+proj=lcc +lat_1=46.18333333333333 +lat_2=47.48333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Ohio North - EPSG:32022",
    value:
      "+proj=lcc +lat_1=40.43333333333333 +lat_2=41.7 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Ohio South - EPSG:32023",
    value:
      "+proj=lcc +lat_1=38.73333333333333 +lat_2=40.03333333333333 +lat_0=38 +lon_0=-82.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Oklahoma North - EPSG:32024",
    value:
      "+proj=lcc +lat_1=35.56666666666667 +lat_2=36.76666666666667 +lat_0=35 +lon_0=-98 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Oklahoma South - EPSG:32025",
    value:
      "+proj=lcc +lat_1=33.93333333333333 +lat_2=35.23333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Oregon North - EPSG:32026",
    value:
      "+proj=lcc +lat_1=44.33333333333334 +lat_2=46 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Oregon South - EPSG:32027",
    value:
      "+proj=lcc +lat_1=42.33333333333334 +lat_2=44 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Pennsylvania North - EPSG:32028",
    value:
      "+proj=lcc +lat_1=40.88333333333333 +lat_2=41.95 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Pennsylvania South - EPSG:4455",
    value:
      "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Pennsylvania South (deprecated) - EPSG:32029",
    value:
      "+proj=lcc +lat_1=39.93333333333333 +lat_2=40.8 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Quebec Lambert - EPSG:32098",
    value:
      "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Rhode Island - EPSG:32030",
    value:
      "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.9999938 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Shackleford - EPSG:3080",
    value:
      "+proj=lcc +lat_1=27.41666666666667 +lat_2=34.91666666666666 +lat_0=31.16666666666667 +lon_0=-100 +x_0=914400 +y_0=914400 +datum=NAD27 +units=ft +no_defs",
  },
  {
    label: "NAD27 / South Carolina North - EPSG:32031",
    value:
      "+proj=lcc +lat_1=33.76666666666667 +lat_2=34.96666666666667 +lat_0=33 +lon_0=-81 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / South Carolina South - EPSG:32033",
    value:
      "+proj=lcc +lat_1=32.33333333333334 +lat_2=33.66666666666666 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / South Dakota North - EPSG:32034",
    value:
      "+proj=lcc +lat_1=44.41666666666666 +lat_2=45.68333333333333 +lat_0=43.83333333333334 +lon_0=-100 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / South Dakota South - EPSG:32035",
    value:
      "+proj=lcc +lat_1=42.83333333333334 +lat_2=44.4 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Tennessee - EPSG:2204",
    value:
      "+proj=lcc +lat_1=35.25 +lat_2=36.41666666666666 +lat_0=34.66666666666666 +lon_0=-86 +x_0=609601.2192024384 +y_0=30480.06096012192 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Tennessee (deprecated) - EPSG:32036",
    value:
      "+proj=lcc +lat_1=35.25 +lat_2=36.41666666666666 +lat_0=34.66666666666666 +lon_0=-86 +x_0=30480.06096012192 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Texas Central - EPSG:32039",
    value:
      "+proj=lcc +lat_1=30.11666666666667 +lat_2=31.88333333333333 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Texas North - EPSG:32037",
    value:
      "+proj=lcc +lat_1=34.65 +lat_2=36.18333333333333 +lat_0=34 +lon_0=-101.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Texas North + NGVD29 height - EPSG:7407",
    value:
      "+proj=lcc +lat_1=34.65 +lat_2=36.18333333333333 +lat_0=34 +lon_0=-101.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +vunits=us-ft +no_defs",
  },
  {
    label: "NAD27 / Texas North Central - EPSG:32038",
    value:
      "+proj=lcc +lat_1=32.13333333333333 +lat_2=33.96666666666667 +lat_0=31.66666666666667 +lon_0=-97.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Texas South - EPSG:32041",
    value:
      "+proj=lcc +lat_1=26.16666666666667 +lat_2=27.83333333333333 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Texas South Central - EPSG:32040",
    value:
      "+proj=lcc +lat_1=28.38333333333333 +lat_2=30.28333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Utah Central - EPSG:32043",
    value:
      "+proj=lcc +lat_1=39.01666666666667 +lat_2=40.65 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Utah North - EPSG:32042",
    value:
      "+proj=lcc +lat_1=40.71666666666667 +lat_2=41.78333333333333 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Utah South - EPSG:32044",
    value:
      "+proj=lcc +lat_1=37.21666666666667 +lat_2=38.35 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / UTM zone 10N - EPSG:26710",
    value: "+proj=utm +zone=10 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 11N - EPSG:26711",
    value: "+proj=utm +zone=11 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 12N - EPSG:26712",
    value: "+proj=utm +zone=12 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 13N - EPSG:26713",
    value: "+proj=utm +zone=13 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 14N - EPSG:26714",
    value: "+proj=utm +zone=14 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 15N - EPSG:26715",
    value: "+proj=utm +zone=15 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 16N - EPSG:26716",
    value: "+proj=utm +zone=16 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 17N - EPSG:26717",
    value: "+proj=utm +zone=17 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 18N - EPSG:26718",
    value: "+proj=utm +zone=18 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 19N - EPSG:26719",
    value: "+proj=utm +zone=19 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 1N - EPSG:26701",
    value: "+proj=utm +zone=1 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 20N - EPSG:26720",
    value: "+proj=utm +zone=20 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 21N - EPSG:26721",
    value: "+proj=utm +zone=21 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 22N - EPSG:26722",
    value: "+proj=utm +zone=22 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 2N - EPSG:26702",
    value: "+proj=utm +zone=2 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 3N - EPSG:26703",
    value: "+proj=utm +zone=3 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 4N - EPSG:26704",
    value: "+proj=utm +zone=4 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 59N - EPSG:3370",
    value: "+proj=utm +zone=59 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 5N - EPSG:26705",
    value: "+proj=utm +zone=5 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 60N - EPSG:3371",
    value: "+proj=utm +zone=60 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 6N - EPSG:26706",
    value: "+proj=utm +zone=6 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 7N - EPSG:26707",
    value: "+proj=utm +zone=7 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 8N - EPSG:26708",
    value: "+proj=utm +zone=8 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / UTM zone 9N - EPSG:26709",
    value: "+proj=utm +zone=9 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Vermont - EPSG:32045",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Virginia North - EPSG:32046",
    value:
      "+proj=lcc +lat_1=38.03333333333333 +lat_2=39.2 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Virginia South - EPSG:32047",
    value:
      "+proj=lcc +lat_1=36.76666666666667 +lat_2=37.96666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Washington North - EPSG:32048",
    value:
      "+proj=lcc +lat_1=47.5 +lat_2=48.73333333333333 +lat_0=47 +lon_0=-120.8333333333333 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Washington South - EPSG:32049",
    value:
      "+proj=lcc +lat_1=45.83333333333334 +lat_2=47.33333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / West Virginia North - EPSG:32050",
    value:
      "+proj=lcc +lat_1=39 +lat_2=40.25 +lat_0=38.5 +lon_0=-79.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / West Virginia South - EPSG:32051",
    value:
      "+proj=lcc +lat_1=37.48333333333333 +lat_2=38.88333333333333 +lat_0=37 +lon_0=-81 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Wisconsin Central - EPSG:32053",
    value:
      "+proj=lcc +lat_1=44.25 +lat_2=45.5 +lat_0=43.83333333333334 +lon_0=-90 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Wisconsin North - EPSG:32052",
    value:
      "+proj=lcc +lat_1=45.56666666666667 +lat_2=46.76666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Wisconsin South - EPSG:32054",
    value:
      "+proj=lcc +lat_1=42.73333333333333 +lat_2=44.06666666666667 +lat_0=42 +lon_0=-90 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Wisconsin Transverse Mercator - EPSG:3069",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9996 +x_0=500000 +y_0=-4500000 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "NAD27 / Wyoming East - EPSG:32055",
    value:
      "+proj=tmerc +lat_0=40.66666666666666 +lon_0=-105.1666666666667 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Wyoming East Central - EPSG:32056",
    value:
      "+proj=tmerc +lat_0=40.66666666666666 +lon_0=-107.3333333333333 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Wyoming West - EPSG:32058",
    value:
      "+proj=tmerc +lat_0=40.66666666666666 +lon_0=-110.0833333333333 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 / Wyoming West Central - EPSG:32057",
    value:
      "+proj=tmerc +lat_0=40.66666666666666 +lon_0=-108.75 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs",
  },
  {
    label: "NAD27 + NGVD29 height - EPSG:7406",
    value: "+proj=longlat +datum=NAD27 +vunits=us-ft +no_defs",
  },
  {
    label: "NAD27 Michigan - EPSG:4268",
    value: "+proj=longlat +a=6378450.047548896 +b=6356826.621488444 +no_defs",
  },
  {
    label: "NAD27(76) - EPSG:4608",
    value: "+proj=longlat +ellps=clrk66 +no_defs",
  },
  {
    label: "NAD27(76) / MTM zone 10 - EPSG:2019",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-79.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / MTM zone 11 - EPSG:2020",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-82.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / MTM zone 12 - EPSG:2021",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / MTM zone 13 - EPSG:2022",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-84 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / MTM zone 14 - EPSG:2023",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / MTM zone 15 - EPSG:2024",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / MTM zone 16 - EPSG:2025",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / MTM zone 17 - EPSG:2026",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-96 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / MTM zone 8 - EPSG:2017",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-73.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / MTM zone 9 - EPSG:2018",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-76.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / UTM zone 15N - EPSG:2027",
    value: "+proj=utm +zone=15 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / UTM zone 16N - EPSG:2028",
    value: "+proj=utm +zone=16 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / UTM zone 17N - EPSG:2029",
    value: "+proj=utm +zone=17 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(76) / UTM zone 18N - EPSG:2030",
    value: "+proj=utm +zone=18 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) - EPSG:4609",
    value: "+proj=longlat +ellps=clrk66 +no_defs",
  },
  {
    label: "NAD27(CGQ77) / Quebec Lambert - EPSG:2138",
    value:
      "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / SCoPQ zone 10 - EPSG:2016",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-79.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / SCoPQ zone 2 (deprecated) - EPSG:2008",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-55.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / SCoPQ zone 3 - EPSG:2009",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-58.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / SCoPQ zone 4 - EPSG:2010",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / SCoPQ zone 5 - EPSG:2011",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / SCoPQ zone 6 - EPSG:2012",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-67.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / SCoPQ zone 7 - EPSG:2013",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-70.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / SCoPQ zone 8 - EPSG:2014",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-73.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / SCoPQ zone 9 - EPSG:2015",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-76.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / UTM zone 17N - EPSG:2031",
    value: "+proj=utm +zone=17 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / UTM zone 18N - EPSG:2032",
    value: "+proj=utm +zone=18 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / UTM zone 19N - EPSG:2033",
    value: "+proj=utm +zone=19 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / UTM zone 20N - EPSG:2034",
    value: "+proj=utm +zone=20 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD27(CGQ77) / UTM zone 21N - EPSG:2035",
    value: "+proj=utm +zone=21 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "NAD83 - EPSG:4269",
    value: "+proj=longlat +datum=NAD83 +no_defs",
  },
  {
    label: "NAD83 / Alabama East - EPSG:26929",
    value:
      "+proj=tmerc +lat_0=30.5 +lon_0=-85.83333333333333 +k=0.99996 +x_0=200000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alabama West - EPSG:26930",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-87.5 +k=0.999933333 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska Albers - EPSG:3338",
    value:
      "+proj=aea +lat_1=55 +lat_2=65 +lat_0=50 +lon_0=-154 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska zone 1 - EPSG:26931",
    value:
      "+proj=omerc +lat_0=57 +lonc=-133.6666666666667 +alpha=323.1301023611111 +k=0.9999 +x_0=5000000 +y_0=-5000000 +no_uoff +gamma=323.1301023611111 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska zone 10 - EPSG:26940",
    value:
      "+proj=lcc +lat_1=53.83333333333334 +lat_2=51.83333333333334 +lat_0=51 +lon_0=-176 +x_0=1000000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska zone 2 - EPSG:26932",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-142 +k=0.9999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska zone 3 - EPSG:26933",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-146 +k=0.9999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska zone 4 - EPSG:26934",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-150 +k=0.9999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska zone 5 - EPSG:26935",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-154 +k=0.9999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska zone 6 - EPSG:26936",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-158 +k=0.9999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska zone 7 - EPSG:26937",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-162 +k=0.9999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska zone 8 - EPSG:26938",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-166 +k=0.9999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alaska zone 9 - EPSG:26939",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-170 +k=0.9999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alberta 10-TM (Forest) - EPSG:3400",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-115 +k=0.9992 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alberta 10-TM (Resource) - EPSG:3401",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-115 +k=0.9992 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alberta 3TM ref merid 111 W - EPSG:3775",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-111 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alberta 3TM ref merid 114 W - EPSG:3776",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alberta 3TM ref merid 117 W - EPSG:3777",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-117 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alberta 3TM ref merid 120 W - EPSG:3801",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Alberta 3TM ref merid 120 W (deprecated) - EPSG:3778",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Arizona Central - EPSG:26949",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Arizona Central (ft) - EPSG:2223",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Arizona East - EPSG:26948",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Arizona East (ft) - EPSG:2222",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Arizona West - EPSG:26950",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Arizona West (ft) - EPSG:2224",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Arkansas North - EPSG:26951",
    value:
      "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=400000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Arkansas North (ftUS) - EPSG:3433",
    value:
      "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=399999.99998984 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Arkansas South - EPSG:26952",
    value:
      "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=400000 +y_0=400000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Arkansas South (ftUS) - EPSG:3434",
    value:
      "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=399999.99998984 +y_0=399999.99998984 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BC Albers - EPSG:3005",
    value:
      "+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / BLM 10N (ftUS) - EPSG:4430",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-123 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 11N (ftUS) - EPSG:4431",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-117 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 12N (ftUS) - EPSG:4432",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-111 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 13N (ftUS) - EPSG:4433",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-105 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 14N (ftUS) - EPSG:32164",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-99 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 15N (ftUS) - EPSG:32165",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 16N (ftUS) - EPSG:32166",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 17N (ftUS) - EPSG:32167",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 18N (ftUS) - EPSG:4438",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-75 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 19N (ftUS) - EPSG:4439",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-69 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 1N (ftUS) - EPSG:4421",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 2N (ftUS) - EPSG:4422",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 3N (ftUS) - EPSG:4423",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-165 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 4N (ftUS) - EPSG:4424",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-159 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 59N (ftUS) - EPSG:4217",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 5N (ftUS) - EPSG:4425",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-153 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 60N (ftUS) - EPSG:4420",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 6N (ftUS) - EPSG:4426",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-147 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 7N (ftUS) - EPSG:4427",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-141 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 8N (ftUS) - EPSG:4428",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-135 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / BLM 9N (ftUS) - EPSG:4429",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-129 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / California Albers - EPSG:3310",
    value:
      "+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / California zone 1 - EPSG:26941",
    value:
      "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000 +y_0=500000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / California zone 1 (ftUS) - EPSG:2225",
    value:
      "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / California zone 2 - EPSG:26942",
    value:
      "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000 +y_0=500000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / California zone 2 (ftUS) - EPSG:2226",
    value:
      "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / California zone 3 - EPSG:26943",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000 +y_0=500000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / California zone 3 (ftUS) - EPSG:2227",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000.0001016 +y_0=500000.0001016001 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / California zone 4 - EPSG:26944",
    value:
      "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000 +y_0=500000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / California zone 4 (ftUS) - EPSG:2228",
    value:
      "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000.0001016 +y_0=500000.0001016001 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / California zone 5 - EPSG:26945",
    value:
      "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000 +y_0=500000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / California zone 5 (ftUS) - EPSG:2229",
    value:
      "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000.0001016 +y_0=500000.0001016001 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / California zone 6 - EPSG:26946",
    value:
      "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000 +y_0=500000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / California zone 6 (ftUS) - EPSG:2230",
    value:
      "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000.0001016 +y_0=500000.0001016001 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Canada Atlas Lambert - EPSG:3978",
    value:
      "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Colorado Central - EPSG:26954",
    value:
      "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Colorado Central (ftUS) - EPSG:2232",
    value:
      "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Colorado North - EPSG:26953",
    value:
      "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Colorado North (ftUS) - EPSG:2231",
    value:
      "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Colorado South - EPSG:26955",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Colorado South (ftUS) - EPSG:2233",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Connecticut - EPSG:26956",
    value:
      "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096 +y_0=152400.3048 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Connecticut (ftUS) - EPSG:2234",
    value:
      "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096012192 +y_0=152400.3048006096 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Conus Albers - EPSG:5070",
    value:
      "+proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=23 +lon_0=-96 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Delaware - EPSG:26957",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Delaware (ftUS) - EPSG:2235",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000.0001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Florida East - EPSG:26958",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Florida East (ftUS) - EPSG:2236",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Florida GDL Albers - EPSG:3086",
    value:
      "+proj=aea +lat_1=24 +lat_2=31.5 +lat_0=24 +lon_0=-84 +x_0=400000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Florida North - EPSG:26960",
    value:
      "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Florida North (ftUS) - EPSG:2238",
    value:
      "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Florida West - EPSG:26959",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Florida West (ftUS) - EPSG:2237",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Georgia East - EPSG:26966",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Georgia East (ftUS) - EPSG:2239",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000.0001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Georgia West - EPSG:26967",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=700000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Georgia West (ftUS) - EPSG:2240",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=699999.9998983998 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Great Lakes Albers - EPSG:3174",
    value:
      "+proj=aea +lat_1=42.122774 +lat_2=49.01518 +lat_0=45.568977 +lon_0=-84.455955 +x_0=1000000 +y_0=1000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Great Lakes and St Lawrence Albers - EPSG:3175",
    value:
      "+proj=aea +lat_1=42.122774 +lat_2=49.01518 +lat_0=45.568977 +lon_0=-83.248627 +x_0=1000000 +y_0=1000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Hawaii zone 1 - EPSG:26961",
    value:
      "+proj=tmerc +lat_0=18.83333333333333 +lon_0=-155.5 +k=0.999966667 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Hawaii zone 2 - EPSG:26962",
    value:
      "+proj=tmerc +lat_0=20.33333333333333 +lon_0=-156.6666666666667 +k=0.999966667 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Hawaii zone 3 - EPSG:26963",
    value:
      "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Hawaii zone 3 (ftUS) - EPSG:3759",
    value:
      "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=500000.00001016 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Hawaii zone 4 - EPSG:26964",
    value:
      "+proj=tmerc +lat_0=21.83333333333333 +lon_0=-159.5 +k=0.99999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Hawaii zone 5 - EPSG:26965",
    value:
      "+proj=tmerc +lat_0=21.66666666666667 +lon_0=-160.1666666666667 +k=1 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Idaho Central - EPSG:26969",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Idaho Central (ftUS) - EPSG:2242",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000.0001016001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Idaho East - EPSG:26968",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Idaho East (ftUS) - EPSG:2241",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000.0001016002 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Idaho West - EPSG:26970",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Idaho West (ftUS) - EPSG:2243",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000.0001016001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Illinois East - EPSG:26971",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Illinois East (ftUS) - EPSG:3435",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000.0000000001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Illinois West - EPSG:26972",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=700000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Illinois West (ftUS) - EPSG:3436",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=699999.9999898402 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Indiana East - EPSG:26973",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=100000 +y_0=250000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Indiana East (ftUS) - EPSG:2965",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249999.9998983998 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Indiana East (ftUS) (deprecated) - EPSG:2244",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249364.9987299975 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Indiana West - EPSG:26974",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=250000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Indiana West (ftUS) - EPSG:2966",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249999.9998983998 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Indiana West (ftUS) (deprecated) - EPSG:2245",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249364.9987299975 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Iowa North - EPSG:26975",
    value:
      "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=1000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Iowa North (ftUS) - EPSG:3417",
    value:
      "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=999999.9999898402 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Iowa South - EPSG:26976",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Iowa South (ftUS) - EPSG:3418",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000.00001016 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Kansas North - EPSG:26977",
    value:
      "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=400000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Kansas North (ftUS) - EPSG:3419",
    value:
      "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=399999.99998984 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Kansas South - EPSG:26978",
    value:
      "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=400000 +y_0=400000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Kansas South (ftUS) - EPSG:3420",
    value:
      "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=399999.99998984 +y_0=399999.99998984 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Kentucky North - EPSG:2205",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Kentucky North (deprecated) - EPSG:26979",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=37.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Kentucky North (ftUS) - EPSG:2246",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000.0001016001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Kentucky Single Zone - EPSG:3088",
    value:
      "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=1000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Kentucky Single Zone (ftUS) - EPSG:3089",
    value:
      "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=999999.9998983998 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Kentucky South - EPSG:26980",
    value:
      "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000 +y_0=500000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Kentucky South (ftUS) - EPSG:2247",
    value:
      "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000.0001016001 +y_0=500000.0001016001 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Louisiana North - EPSG:26981",
    value:
      "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=1000000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Louisiana North (ftUS) - EPSG:3451",
    value:
      "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=999999.9999898402 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Louisiana Offshore - EPSG:32199",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.5 +lon_0=-91.33333333333333 +x_0=1000000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Louisiana Offshore (ftUS) - EPSG:3453",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.5 +lon_0=-91.33333333333333 +x_0=999999.9999898402 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Louisiana South - EPSG:26982",
    value:
      "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=1000000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Louisiana South (ftUS) - EPSG:3452",
    value:
      "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=999999.9999898402 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Maine CS2000 Central - EPSG:3463",
    value:
      "+proj=tmerc +lat_0=43.5 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Maine CS2000 Central (deprecated) - EPSG:3073",
    value:
      "+proj=tmerc +lat_0=43 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Maine CS2000 East - EPSG:3072",
    value:
      "+proj=tmerc +lat_0=43.83333333333334 +lon_0=-67.875 +k=0.99998 +x_0=700000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Maine CS2000 West - EPSG:3074",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.375 +k=0.99998 +x_0=300000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Maine East - EPSG:26983",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Maine East (ftUS) - EPSG:26847",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000.0000000001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Maine East (ftUS) (deprecated) - EPSG:26814",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Maine West - EPSG:26984",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Maine West (ftUS) - EPSG:26848",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Maine West (ftUS) (deprecated) - EPSG:26815",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Maryland - EPSG:26985",
    value:
      "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=400000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Maryland (ftUS) - EPSG:2248",
    value:
      "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Massachusetts Island - EPSG:26987",
    value:
      "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Massachusetts Island (ftUS) - EPSG:2250",
    value:
      "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000.0001016001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Massachusetts Mainland - EPSG:26986",
    value:
      "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000 +y_0=750000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Massachusetts Mainland (ftUS) - EPSG:2249",
    value:
      "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000.0001016002 +y_0=750000 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Michigan Central - EPSG:26989",
    value:
      "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=6000000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Michigan Central (ft) - EPSG:2252",
    value:
      "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=5999999.999976001 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Michigan North - EPSG:26988",
    value:
      "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=8000000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Michigan North (ft) - EPSG:2251",
    value:
      "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=7999999.999968001 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Michigan Oblique Mercator - EPSG:3078",
    value:
      "+proj=omerc +lat_0=45.30916666666666 +lonc=-86 +alpha=337.25556 +k=0.9996 +x_0=2546731.496 +y_0=-4354009.816 +no_uoff +gamma=337.25556 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Michigan South - EPSG:26990",
    value:
      "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=4000000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Michigan South (ft) - EPSG:2253",
    value:
      "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=3999999.999984 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Minnesota Central - EPSG:26992",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000 +y_0=100000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Minnesota Central (ftUS) - EPSG:26850",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101599 +y_0=99999.99998983997 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Minnesota Central (ftUS) (deprecated) - EPSG:26820",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101601 +y_0=99999.99998984 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Minnesota North - EPSG:26991",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000 +y_0=100000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Minnesota North (ftUS) - EPSG:26849",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101599 +y_0=99999.99998983997 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Minnesota North (ftUS) (deprecated) - EPSG:26819",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101601 +y_0=99999.99998984 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Minnesota South - EPSG:26993",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000 +y_0=100000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Minnesota South (ftUS) - EPSG:26851",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101599 +y_0=99999.99998983997 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Minnesota South (ftUS) (deprecated) - EPSG:26821",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101601 +y_0=99999.99998984 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Mississippi East - EPSG:26994",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Mississippi East (ftUS) - EPSG:2254",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000.0000000001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Mississippi TM - EPSG:3814",
    value:
      "+proj=tmerc +lat_0=32.5 +lon_0=-89.75 +k=0.9998335 +x_0=500000 +y_0=1300000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Mississippi West - EPSG:26995",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=700000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Mississippi West (ftUS) - EPSG:2255",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=699999.9998983998 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Missouri Central - EPSG:26997",
    value:
      "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-92.5 +k=0.999933333 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Missouri East - EPSG:26996",
    value:
      "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-90.5 +k=0.999933333 +x_0=250000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Missouri West - EPSG:26998",
    value:
      "+proj=tmerc +lat_0=36.16666666666666 +lon_0=-94.5 +k=0.999941177 +x_0=850000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Montana - EPSG:32100",
    value:
      "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Montana (ft) - EPSG:2256",
    value:
      "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=599999.9999976 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / MTM zone 1 - EPSG:32181",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-53 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 10 - EPSG:32190",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-79.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 11 - EPSG:32191",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-82.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 12 - EPSG:32192",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 13 - EPSG:32193",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-84 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 14 - EPSG:32194",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 15 - EPSG:32195",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 16 - EPSG:32196",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 17 - EPSG:32197",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-96 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 2 - EPSG:32182",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-56 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 3 - EPSG:32183",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-58.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 4 - EPSG:32184",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 5 - EPSG:32185",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 6 - EPSG:32186",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-67.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 7 - EPSG:32187",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-70.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 8 - EPSG:32188",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-73.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTM zone 9 - EPSG:32189",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-76.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / MTQ Lambert - EPSG:3798",
    value:
      "+proj=lcc +lat_1=50 +lat_2=46 +lat_0=44 +lon_0=-70 +x_0=800000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Nebraska - EPSG:32104",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Nebraska (ftUS) - EPSG:26852",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.00001016 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Nebraska (ftUS) (deprecated) - EPSG:26822",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.0000101601 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Nevada Central - EPSG:32108",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000 +y_0=6000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Nevada Central (ftUS) - EPSG:3422",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000.00001016 +y_0=6000000 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Nevada East - EPSG:32107",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000 +y_0=8000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Nevada East (ftUS) - EPSG:3421",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000.00001016 +y_0=8000000.000010163 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Nevada West - EPSG:32109",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000 +y_0=4000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Nevada West (ftUS) - EPSG:3423",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000.0000101599 +y_0=3999999.99998984 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / New Hampshire - EPSG:32110",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / New Hampshire (ftUS) - EPSG:3437",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000.0000000001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / New Jersey - EPSG:32111",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / New Jersey (ftUS) - EPSG:3424",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / New Mexico Central - EPSG:32113",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / New Mexico Central (ftUS) - EPSG:2258",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000.0001016001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / New Mexico East - EPSG:32112",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / New Mexico East (ftUS) - EPSG:2257",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / New Mexico West - EPSG:32114",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / New Mexico West (ftUS) - EPSG:2259",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000.0001016001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / New York Central - EPSG:32116",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=250000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / New York Central (ftUS) - EPSG:2261",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=249999.9998983998 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / New York East - EPSG:32115",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / New York East (ftUS) - EPSG:2260",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / New York Long Island - EPSG:32118",
    value:
      "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / New York Long Island (ftUS) - EPSG:2263",
    value:
      "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / New York West - EPSG:32117",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / New York West (ftUS) - EPSG:2262",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000.0001016001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / North Carolina - EPSG:32119",
    value:
      "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.22 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / North Carolina (ftUS) - EPSG:2264",
    value:
      "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024384 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / North Dakota North - EPSG:32120",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / North Dakota North (ft) - EPSG:2265",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / North Dakota South - EPSG:32121",
    value:
      "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / North Dakota South (ft) - EPSG:2266",
    value:
      "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / NWT Lambert - EPSG:3580",
    value:
      "+proj=lcc +lat_1=62 +lat_2=70 +lat_0=0 +lon_0=-112 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Ohio North - EPSG:32122",
    value:
      "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Ohio North (ftUS) - EPSG:3734",
    value:
      "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Ohio South - EPSG:32123",
    value:
      "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Ohio South (ftUS) - EPSG:3735",
    value:
      "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Oklahoma North - EPSG:32124",
    value:
      "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Oklahoma North (ftUS) - EPSG:2267",
    value:
      "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Oklahoma South - EPSG:32125",
    value:
      "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Oklahoma South (ftUS) - EPSG:2268",
    value:
      "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Ontario MNR Lambert - EPSG:3161",
    value:
      "+proj=lcc +lat_1=44.5 +lat_2=53.5 +lat_0=0 +lon_0=-85 +x_0=930000 +y_0=6430000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Oregon GIC Lambert (ft) - EPSG:2992",
    value:
      "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=399999.9999984 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Oregon LCC (m) - EPSG:2991",
    value:
      "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=400000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Oregon North - EPSG:32126",
    value:
      "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Oregon North (ft) - EPSG:2269",
    value:
      "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000.0001424 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Oregon South - EPSG:32127",
    value:
      "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Oregon South (ft) - EPSG:2270",
    value:
      "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000.0001464 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Pennsylvania North - EPSG:32128",
    value:
      "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Pennsylvania North (ftUS) - EPSG:2271",
    value:
      "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Pennsylvania South - EPSG:32129",
    value:
      "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Pennsylvania South (ftUS) - EPSG:2272",
    value:
      "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Puerto Rico & Virgin Is. - EPSG:32161",
    value:
      "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=200000 +y_0=200000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Quebec Albers - EPSG:6623",
    value:
      "+proj=aea +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Quebec Lambert - EPSG:32198",
    value:
      "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Rhode Island - EPSG:32130",
    value:
      "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=100000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Rhode Island (ftUS) - EPSG:3438",
    value:
      "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=99999.99998983997 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / SCoPQ zone 2 (deprecated) - EPSG:32180",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-55.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / South Carolina - EPSG:32133",
    value:
      "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / South Carolina (ft) - EPSG:2273",
    value:
      "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / South Dakota North - EPSG:32134",
    value:
      "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / South Dakota North (ftUS) - EPSG:4457",
    value:
      "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / South Dakota North (ftUS) (deprecated) - EPSG:3454",
    value:
      "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / South Dakota South - EPSG:32135",
    value:
      "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / South Dakota South (ftUS) - EPSG:3455",
    value:
      "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Statistics Canada Lambert - EPSG:3347",
    value:
      "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=63.390675 +lon_0=-91.86666666666666 +x_0=6200000 +y_0=3000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Tennessee - EPSG:32136",
    value:
      "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Tennessee (ftUS) - EPSG:2274",
    value:
      "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Teranet Ontario Lambert - EPSG:5320",
    value:
      "+proj=lcc +lat_1=44.5 +lat_2=54.5 +lat_0=0 +lon_0=-84 +x_0=1000000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Texas Central - EPSG:32139",
    value:
      "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=700000 +y_0=3000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Texas Central (ftUS) - EPSG:2277",
    value:
      "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=699999.9998983998 +y_0=3000000 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Texas Centric Albers Equal Area - EPSG:3083",
    value:
      "+proj=aea +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=6000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Texas Centric Lambert Conformal - EPSG:3082",
    value:
      "+proj=lcc +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=5000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Texas North - EPSG:32137",
    value:
      "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000 +y_0=1000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Texas North (ftUS) - EPSG:2275",
    value:
      "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000.0001016002 +y_0=999999.9998983998 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Texas North Central - EPSG:32138",
    value:
      "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Texas North Central (ftUS) - EPSG:2276",
    value:
      "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000.0001016 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Texas South - EPSG:32141",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000 +y_0=5000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Texas South (ftUS) - EPSG:2279",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000.0000000001 +y_0=5000000.0001016 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Texas South Central - EPSG:32140",
    value:
      "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=4000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Texas South Central (ftUS) - EPSG:2278",
    value:
      "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=3999999.9998984 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Texas State Mapping System - EPSG:3081",
    value:
      "+proj=lcc +lat_1=27.41666666666667 +lat_2=34.91666666666666 +lat_0=31.16666666666667 +lon_0=-100 +x_0=1000000 +y_0=1000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Utah Central - EPSG:32143",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=2000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Utah Central (ft) - EPSG:2281",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=1999999.999992 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Utah Central (ftUS) - EPSG:3566",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=2000000.00001016 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Utah North - EPSG:32142",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=1000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Utah North (ft) - EPSG:2280",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=999999.9999960001 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Utah North (ftUS) - EPSG:3560",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=999999.9999898402 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Utah South - EPSG:32144",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000 +y_0=3000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Utah South (ft) - EPSG:2282",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.0001504 +y_0=2999999.999988 +datum=NAD83 +units=ft +no_defs",
  },
  {
    label: "NAD83 / Utah South (ftUS) - EPSG:3567",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.00001016 +y_0=3000000 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / UTM zone 10N - EPSG:26910",
    value: "+proj=utm +zone=10 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 11N - EPSG:26911",
    value: "+proj=utm +zone=11 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 12N - EPSG:26912",
    value: "+proj=utm +zone=12 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 13N - EPSG:26913",
    value: "+proj=utm +zone=13 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 14N - EPSG:26914",
    value: "+proj=utm +zone=14 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 15N - EPSG:26915",
    value: "+proj=utm +zone=15 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 16N - EPSG:26916",
    value: "+proj=utm +zone=16 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 17N - EPSG:26917",
    value: "+proj=utm +zone=17 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 18N - EPSG:26918",
    value: "+proj=utm +zone=18 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 19N - EPSG:26919",
    value: "+proj=utm +zone=19 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 1N - EPSG:26901",
    value: "+proj=utm +zone=1 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 20N - EPSG:26920",
    value: "+proj=utm +zone=20 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 21N - EPSG:26921",
    value: "+proj=utm +zone=21 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 22N - EPSG:26922",
    value: "+proj=utm +zone=22 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 23N - EPSG:26923",
    value: "+proj=utm +zone=23 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 2N - EPSG:26902",
    value: "+proj=utm +zone=2 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 3N - EPSG:26903",
    value: "+proj=utm +zone=3 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 4N - EPSG:26904",
    value: "+proj=utm +zone=4 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 59N - EPSG:3372",
    value: "+proj=utm +zone=59 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 5N - EPSG:26905",
    value: "+proj=utm +zone=5 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 60N - EPSG:3373",
    value: "+proj=utm +zone=60 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 6N - EPSG:26906",
    value: "+proj=utm +zone=6 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 7N - EPSG:26907",
    value: "+proj=utm +zone=7 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 8N - EPSG:26908",
    value: "+proj=utm +zone=8 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / UTM zone 9N - EPSG:26909",
    value: "+proj=utm +zone=9 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Vermont - EPSG:32145",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Vermont (ftUS) - EPSG:5646",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000.00001016 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Virginia Lambert - EPSG:3968",
    value:
      "+proj=lcc +lat_1=37 +lat_2=39.5 +lat_0=36 +lon_0=-79.5 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Virginia North - EPSG:32146",
    value:
      "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000 +y_0=2000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Virginia North (ftUS) - EPSG:2283",
    value:
      "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=2000000.0001016 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Virginia South - EPSG:32147",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000 +y_0=1000000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Virginia South (ftUS) - EPSG:2284",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=999999.9998983998 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Washington North - EPSG:32148",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Washington North (ftUS) - EPSG:2285",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000.0001016001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Washington South - EPSG:32149",
    value:
      "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Washington South (ftUS) - EPSG:2286",
    value:
      "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000.0001016001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / West Virginia North - EPSG:32150",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / West Virginia North (ftUS) - EPSG:26853",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / West Virginia North (ftUS) (deprecated) - EPSG:26823",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=1968500 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / West Virginia South - EPSG:32151",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / West Virginia South (ftUS) - EPSG:26854",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / West Virginia South (ftUS) (deprecated) - EPSG:26824",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=1968500 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Wisconsin Central - EPSG:32153",
    value:
      "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Wisconsin Central (ftUS) - EPSG:2288",
    value:
      "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Wisconsin North - EPSG:32152",
    value:
      "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Wisconsin North (ftUS) - EPSG:2287",
    value:
      "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Wisconsin South - EPSG:32154",
    value:
      "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Wisconsin South (ftUS) - EPSG:2289",
    value:
      "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Wisconsin Transverse Mercator - EPSG:3070",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9996 +x_0=520000 +y_0=-4480000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Wyoming East - EPSG:32155",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Wyoming East (ftUS) - EPSG:3736",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000.00001016 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Wyoming East Central - EPSG:32156",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=400000 +y_0=100000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Wyoming East Central (ftUS) - EPSG:3737",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=399999.99998984 +y_0=99999.99998983997 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Wyoming West - EPSG:32158",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000 +y_0=100000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Wyoming West (ftUS) - EPSG:3739",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000.0000101599 +y_0=99999.99998983997 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Wyoming West Central - EPSG:32157",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 / Wyoming West Central (ftUS) - EPSG:3738",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs",
  },
  {
    label: "NAD83 / Yukon Albers - EPSG:3578",
    value:
      "+proj=aea +lat_1=61.66666666666666 +lat_2=68 +lat_0=59 +lon_0=-132.5 +x_0=500000 +y_0=500000 +datum=NAD83 +units=m +no_defs",
  },
  {
    label: "NAD83 + NAVD88 height - EPSG:5498",
    value:
      "+proj=longlat +datum=NAD83 +geoidgrids=g2012a_conus.gtx,g2012a_alaska.gtx,g2012a_guam.gtx,g2012a_hawaii.gtx,g2012a_puertorico.gtx,g2012a_samoa.gtx +vunits=m +no_defs",
  },
  {
    label: "NAD83(2011) - EPSG:6317",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) - EPSG:6318",
    value: "+proj=longlat +ellps=GRS80 +no_defs",
  },
  {
    label: "NAD83(2011) / Alabama East - EPSG:6355",
    value:
      "+proj=tmerc +lat_0=30.5 +lon_0=-85.83333333333333 +k=0.99996 +x_0=200000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alabama West - EPSG:6356",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-87.5 +k=0.999933333 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska Albers - EPSG:6393",
    value:
      "+proj=aea +lat_1=55 +lat_2=65 +lat_0=50 +lon_0=-154 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska zone 1 - EPSG:6394",
    value:
      "+proj=omerc +lat_0=57 +lonc=-133.6666666666667 +alpha=323.1301023611111 +k=0.9999 +x_0=5000000 +y_0=-5000000 +no_uoff +gamma=323.1301023611111 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska zone 10 - EPSG:6403",
    value:
      "+proj=lcc +lat_1=53.83333333333334 +lat_2=51.83333333333334 +lat_0=51 +lon_0=-176 +x_0=1000000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska zone 2 - EPSG:6395",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-142 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska zone 3 - EPSG:6396",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-146 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska zone 4 - EPSG:6397",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-150 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska zone 5 - EPSG:6398",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-154 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska zone 6 - EPSG:6399",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-158 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska zone 7 - EPSG:6400",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-162 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska zone 8 - EPSG:6401",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-166 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Alaska zone 9 - EPSG:6402",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-170 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Arizona Central - EPSG:6404",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Arizona Central (ft) - EPSG:6405",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Arizona East - EPSG:6406",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Arizona East (ft) - EPSG:6407",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Arizona West - EPSG:6408",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Arizona West (ft) - EPSG:6409",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Arkansas North - EPSG:6410",
    value:
      "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=400000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Arkansas North (ftUS) - EPSG:6411",
    value:
      "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Arkansas South - EPSG:6412",
    value:
      "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=400000 +y_0=400000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Arkansas South (ftUS) - EPSG:6413",
    value:
      "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / California Albers - EPSG:6414",
    value:
      "+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 1 - EPSG:6415",
    value:
      "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 1 (ftUS) - EPSG:6416",
    value:
      "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 2 - EPSG:6417",
    value:
      "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 2 (ftUS) - EPSG:6418",
    value:
      "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 3 - EPSG:6419",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000 +y_0=500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 3 (ftUS) - EPSG:6420",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 4 - EPSG:6421",
    value:
      "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000 +y_0=500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 4 (ftUS) - EPSG:6422",
    value:
      "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 5 - EPSG:6423",
    value:
      "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000 +y_0=500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 5 (ftUS) - EPSG:6424",
    value:
      "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 6 - EPSG:6425",
    value:
      "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000 +y_0=500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / California zone 6 (ftUS) - EPSG:6426",
    value:
      "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Colorado Central - EPSG:6427",
    value:
      "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Colorado Central (ftUS) - EPSG:6428",
    value:
      "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Colorado North - EPSG:6429",
    value:
      "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Colorado North (ftUS) - EPSG:6430",
    value:
      "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Colorado South - EPSG:6431",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Colorado South (ftUS) - EPSG:6432",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Connecticut - EPSG:6433",
    value:
      "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096 +y_0=152400.3048 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Connecticut (ftUS) - EPSG:6434",
    value:
      "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096012192 +y_0=152400.3048006096 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Conus Albers - EPSG:6350",
    value:
      "+proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=23 +lon_0=-96 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Delaware - EPSG:6435",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Delaware (ftUS) - EPSG:6436",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / EPSG Arctic zone 5-29 - EPSG:6351",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-163 +x_0=29500000 +y_0=5500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / EPSG Arctic zone 5-31 - EPSG:6352",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-147 +x_0=31500000 +y_0=5500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / EPSG Arctic zone 6-14 - EPSG:6353",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-165 +x_0=14500000 +y_0=6500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / EPSG Arctic zone 6-16 - EPSG:6354",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-147 +x_0=16500000 +y_0=6500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Florida East - EPSG:6437",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Florida East (ftUS) - EPSG:6438",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Florida GDL Albers - EPSG:6439",
    value:
      "+proj=aea +lat_1=24 +lat_2=31.5 +lat_0=24 +lon_0=-84 +x_0=400000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Florida North - EPSG:6440",
    value:
      "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Florida North (ftUS) - EPSG:6441",
    value:
      "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Florida West - EPSG:6442",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Florida West (ftUS) - EPSG:6443",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Georgia East - EPSG:6444",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Georgia East (ftUS) - EPSG:6445",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Georgia West - EPSG:6446",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=700000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Georgia West (ftUS) - EPSG:6447",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Idaho Central - EPSG:6448",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Idaho Central (ftUS) - EPSG:6449",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Idaho East - EPSG:6450",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Idaho East (ftUS) - EPSG:6451",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Idaho West - EPSG:6452",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Idaho West (ftUS) - EPSG:6453",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000.0001016001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Illinois East - EPSG:6454",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Illinois East (ftUS) - EPSG:6455",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Illinois West - EPSG:6456",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=700000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Illinois West (ftUS) - EPSG:6457",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=699999.9999898402 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Indiana East - EPSG:6458",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=100000 +y_0=250000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Indiana East (ftUS) - EPSG:6459",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249999.9998983998 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Indiana West - EPSG:6460",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=250000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Indiana West (ftUS) - EPSG:6461",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249999.9998983998 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Iowa North - EPSG:6462",
    value:
      "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Iowa North (ftUS) - EPSG:6463",
    value:
      "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=999999.9999898402 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Iowa South - EPSG:6464",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Iowa South (ftUS) - EPSG:6465",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Kansas North - EPSG:6466",
    value:
      "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=400000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Kansas North (ftUS) - EPSG:6467",
    value:
      "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Kansas South - EPSG:6468",
    value:
      "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=400000 +y_0=400000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Kansas South (ftUS) - EPSG:6469",
    value:
      "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Kentucky North - EPSG:6470",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Kentucky North (ftUS) - EPSG:6471",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Kentucky Single Zone - EPSG:6472",
    value:
      "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Kentucky Single Zone (ftUS) - EPSG:6473",
    value:
      "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=999999.9998983998 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Kentucky South - EPSG:6474",
    value:
      "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000 +y_0=500000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Kentucky South (ftUS) - EPSG:6475",
    value:
      "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000.0001016001 +y_0=500000.0001016001 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Louisiana North - EPSG:6476",
    value:
      "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=1000000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Louisiana North (ftUS) - EPSG:6477",
    value:
      "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Louisiana South - EPSG:6478",
    value:
      "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=1000000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Louisiana South (ftUS) - EPSG:6479",
    value:
      "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Maine CS2000 Central - EPSG:6480",
    value:
      "+proj=tmerc +lat_0=43.5 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Maine CS2000 East - EPSG:6481",
    value:
      "+proj=tmerc +lat_0=43.83333333333334 +lon_0=-67.875 +k=0.99998 +x_0=700000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Maine CS2000 West - EPSG:6482",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.375 +k=0.99998 +x_0=300000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Maine East - EPSG:6483",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Maine East (ftUS) - EPSG:6484",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Maine West - EPSG:6485",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Maine West (ftUS) - EPSG:6486",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Maryland - EPSG:6487",
    value:
      "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=400000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Maryland (ftUS) - EPSG:6488",
    value:
      "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Massachusetts Island - EPSG:6489",
    value:
      "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Massachusetts Island (ftUS) - EPSG:6490",
    value:
      "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Massachusetts Mainland - EPSG:6491",
    value:
      "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000 +y_0=750000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Massachusetts Mainland (ftUS) - EPSG:6492",
    value:
      "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000.0001016002 +y_0=750000 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Michigan Central - EPSG:6493",
    value:
      "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=6000000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Michigan Central (ft) - EPSG:6494",
    value:
      "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=5999999.999976001 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Michigan North - EPSG:6495",
    value:
      "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=8000000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Michigan North (ft) - EPSG:6496",
    value:
      "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=7999999.999968001 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Michigan Oblique Mercator - EPSG:6497",
    value:
      "+proj=omerc +lat_0=45.30916666666666 +lonc=-86 +alpha=337.25556 +k=0.9996 +x_0=2546731.496 +y_0=-4354009.816 +no_uoff +gamma=337.25556 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Michigan South - EPSG:6498",
    value:
      "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=4000000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Michigan South (ft) - EPSG:6499",
    value:
      "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=3999999.999984 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Minnesota Central - EPSG:6500",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000 +y_0=100000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Minnesota Central (ftUS) - EPSG:6501",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Minnesota North - EPSG:6502",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000 +y_0=100000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Minnesota North (ftUS) - EPSG:6503",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Minnesota South - EPSG:6504",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000 +y_0=100000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Minnesota South (ftUS) - EPSG:6505",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Mississippi East - EPSG:6506",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Mississippi East (ftUS) - EPSG:6507",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Mississippi TM - EPSG:6508",
    value:
      "+proj=tmerc +lat_0=32.5 +lon_0=-89.75 +k=0.9998335 +x_0=500000 +y_0=1300000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Mississippi West - EPSG:6509",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=700000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Mississippi West (ftUS) - EPSG:6510",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Missouri Central - EPSG:6511",
    value:
      "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-92.5 +k=0.999933333 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Missouri East - EPSG:6512",
    value:
      "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-90.5 +k=0.999933333 +x_0=250000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Missouri West - EPSG:6513",
    value:
      "+proj=tmerc +lat_0=36.16666666666666 +lon_0=-94.5 +k=0.999941177 +x_0=850000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Montana - EPSG:6514",
    value:
      "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Montana (ft) - EPSG:6515",
    value:
      "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Nebraska - EPSG:6516",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Nebraska (ftUS) - EPSG:6880",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Nebraska (ftUS) (deprecated) - EPSG:6517",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Nevada Central - EPSG:6518",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000 +y_0=6000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Nevada Central (ftUS) - EPSG:6519",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000.00001016 +y_0=6000000 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Nevada East - EPSG:6520",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000 +y_0=8000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Nevada East (ftUS) - EPSG:6521",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000.00001016 +y_0=8000000.000010163 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Nevada West - EPSG:6522",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000 +y_0=4000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Nevada West (ftUS) - EPSG:6523",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000.0000101599 +y_0=3999999.99998984 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / New Hampshire - EPSG:6524",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / New Hampshire (ftUS) - EPSG:6525",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / New Jersey - EPSG:6526",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / New Jersey (ftUS) - EPSG:6527",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / New Mexico Central - EPSG:6528",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / New Mexico Central (ftUS) - EPSG:6529",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / New Mexico East - EPSG:6530",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / New Mexico East (ftUS) - EPSG:6531",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / New Mexico West - EPSG:6532",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / New Mexico West (ftUS) - EPSG:6533",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000.0001016001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / New York Central - EPSG:6534",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=250000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / New York Central (ftUS) - EPSG:6535",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=249999.9998983998 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / New York East - EPSG:6536",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / New York East (ftUS) - EPSG:6537",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / New York Long Island - EPSG:6538",
    value:
      "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / New York Long Island (ftUS) - EPSG:6539",
    value:
      "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / New York West - EPSG:6540",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / New York West (ftUS) - EPSG:6541",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000.0001016001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / North Carolina - EPSG:6542",
    value:
      "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.22 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / North Carolina (ftUS) - EPSG:6543",
    value:
      "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024384 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / North Dakota North - EPSG:6544",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / North Dakota North (ft) - EPSG:6545",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / North Dakota South - EPSG:6546",
    value:
      "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / North Dakota South (ft) - EPSG:6547",
    value:
      "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Ohio North - EPSG:6548",
    value:
      "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Ohio North (ftUS) - EPSG:6549",
    value:
      "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Ohio South - EPSG:6550",
    value:
      "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Ohio South (ftUS) - EPSG:6551",
    value:
      "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Oklahoma North - EPSG:6552",
    value:
      "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Oklahoma North (ftUS) - EPSG:6553",
    value:
      "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Oklahoma South - EPSG:6554",
    value:
      "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Oklahoma South (ftUS) - EPSG:6555",
    value:
      "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Oregon GIC Lambert (ft) - EPSG:6557",
    value:
      "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=399999.9999984 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Oregon LCC (m) - EPSG:6556",
    value:
      "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=400000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Oregon North - EPSG:6558",
    value:
      "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Oregon North (ft) - EPSG:6559",
    value:
      "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000.0001424 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Oregon South - EPSG:6560",
    value:
      "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Oregon South (ft) - EPSG:6561",
    value:
      "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000.0001464 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / Pennsylvania North - EPSG:6562",
    value:
      "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Pennsylvania North (ftUS) - EPSG:6563",
    value:
      "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Pennsylvania South - EPSG:6564",
    value:
      "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Pennsylvania South (ftUS) - EPSG:6565",
    value:
      "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Puerto Rico and Virgin Is. - EPSG:6566",
    value:
      "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=200000 +y_0=200000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Rhode Island - EPSG:6567",
    value:
      "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=100000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Rhode Island (ftUS) - EPSG:6568",
    value:
      "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=99999.99998983997 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / South Carolina - EPSG:6569",
    value:
      "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / South Carolina (ft) - EPSG:6570",
    value:
      "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(2011) / South Dakota North - EPSG:6571",
    value:
      "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / South Dakota North (ftUS) - EPSG:6572",
    value:
      "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / South Dakota South - EPSG:6573",
    value:
      "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / South Dakota South (ftUS) - EPSG:6574",
    value:
      "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Tennessee - EPSG:6575",
    value:
      "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Tennessee (ftUS) - EPSG:6576",
    value:
      "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Texas Central - EPSG:6577",
    value:
      "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=700000 +y_0=3000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Texas Central (ftUS) - EPSG:6578",
    value:
      "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=699999.9998983998 +y_0=3000000 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Texas Centric Albers Equal Area - EPSG:6579",
    value:
      "+proj=aea +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=6000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Texas Centric Lambert Conformal - EPSG:6580",
    value:
      "+proj=lcc +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=5000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Texas North - EPSG:6581",
    value:
      "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000 +y_0=1000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Texas North (ftUS) - EPSG:6582",
    value:
      "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000.0001016002 +y_0=999999.9998983998 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Texas North Central - EPSG:6583",
    value:
      "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Texas North Central (ftUS) - EPSG:6584",
    value:
      "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000.0001016 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Texas South - EPSG:6585",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000 +y_0=5000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Texas South (ftUS) - EPSG:6586",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000.0000000001 +y_0=5000000.0001016 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Texas South Central - EPSG:6587",
    value:
      "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=4000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Texas South Central (ftUS) - EPSG:6588",
    value:
      "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=3999999.9998984 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Utah Central - EPSG:6619",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Utah Central (ftUS) - EPSG:6625",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=2000000.00001016 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Utah North - EPSG:6620",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=1000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Utah North (ftUS) - EPSG:6626",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=999999.9999898402 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Utah South - EPSG:6621",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000 +y_0=3000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Utah South (ftUS) - EPSG:6627",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.00001016 +y_0=3000000 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 10N - EPSG:6339",
    value: "+proj=utm +zone=10 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 11N - EPSG:6340",
    value: "+proj=utm +zone=11 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 12N - EPSG:6341",
    value: "+proj=utm +zone=12 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 13N - EPSG:6342",
    value: "+proj=utm +zone=13 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 14N - EPSG:6343",
    value: "+proj=utm +zone=14 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 15N - EPSG:6344",
    value: "+proj=utm +zone=15 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 16N - EPSG:6345",
    value: "+proj=utm +zone=16 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 17N - EPSG:6346",
    value: "+proj=utm +zone=17 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 18N - EPSG:6347",
    value: "+proj=utm +zone=18 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 19N - EPSG:6348",
    value: "+proj=utm +zone=19 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 1N - EPSG:6330",
    value: "+proj=utm +zone=1 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 2N - EPSG:6331",
    value: "+proj=utm +zone=2 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 3N - EPSG:6332",
    value: "+proj=utm +zone=3 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 4N - EPSG:6333",
    value: "+proj=utm +zone=4 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 59N - EPSG:6328",
    value: "+proj=utm +zone=59 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 5N - EPSG:6334",
    value: "+proj=utm +zone=5 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 60N - EPSG:6329",
    value: "+proj=utm +zone=60 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 6N - EPSG:6335",
    value: "+proj=utm +zone=6 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 7N - EPSG:6336",
    value: "+proj=utm +zone=7 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 8N - EPSG:6337",
    value: "+proj=utm +zone=8 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / UTM zone 9N - EPSG:6338",
    value: "+proj=utm +zone=9 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Vermont - EPSG:6589",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Vermont (ftUS) - EPSG:6590",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Virginia Lambert - EPSG:6591",
    value:
      "+proj=lcc +lat_1=37 +lat_2=39.5 +lat_0=36 +lon_0=-79.5 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Virginia North - EPSG:6592",
    value:
      "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Virginia North (ftUS) - EPSG:6593",
    value:
      "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=2000000.0001016 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Virginia South - EPSG:6594",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000 +y_0=1000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Virginia South (ftUS) - EPSG:6595",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=999999.9998983998 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Washington North - EPSG:6596",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Washington North (ftUS) - EPSG:6597",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Washington South - EPSG:6598",
    value:
      "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Washington South (ftUS) - EPSG:6599",
    value:
      "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / West Virginia North - EPSG:6600",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / West Virginia North (ftUS) - EPSG:6601",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / West Virginia South - EPSG:6602",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / West Virginia South (ftUS) - EPSG:6603",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Wisconsin Central - EPSG:6879",
    value:
      "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Wisconsin Central (deprecated) - EPSG:6604",
    value:
      "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Wisconsin Central (ftUS) - EPSG:6605",
    value:
      "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Wisconsin North - EPSG:6606",
    value:
      "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Wisconsin North (ftUS) - EPSG:6607",
    value:
      "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Wisconsin South - EPSG:6608",
    value:
      "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Wisconsin South (ftUS) - EPSG:6609",
    value:
      "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Wisconsin Transverse Mercator - EPSG:6610",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9996 +x_0=520000 +y_0=-4480000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Wyoming East - EPSG:6611",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Wyoming East (ftUS) - EPSG:6612",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000.00001016 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Wyoming East Central - EPSG:6613",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=400000 +y_0=100000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Wyoming East Central (ftUS) - EPSG:6614",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=399999.99998984 +y_0=99999.99998983997 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Wyoming West - EPSG:6615",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000 +y_0=100000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Wyoming West (ftUS) - EPSG:6616",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) / Wyoming West Central - EPSG:6617",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(2011) / Wyoming West Central (ftUS) - EPSG:6618",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(2011) + NAVD88 height - EPSG:6349",
    value:
      "+proj=longlat +ellps=GRS80 +geoidgrids=g2012a_conus.gtx,g2012a_alaska.gtx,g2012a_guam.gtx,g2012a_hawaii.gtx,g2012a_puertorico.gtx,g2012a_samoa.gtx +vunits=m +no_defs",
  },
  {
    label: "NAD83(CORS96) - EPSG:6781",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(CORS96) - EPSG:6783",
    value: "+proj=longlat +ellps=GRS80 +no_defs",
  },
  {
    label: "NAD83(CORS96) / Oregon GIC Lambert (ft) - EPSG:6868",
    value:
      "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=399999.9999984 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(CORS96) / Oregon LCC (m) - EPSG:6867",
    value:
      "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=400000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(CORS96) / Oregon North - EPSG:6884",
    value:
      "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(CORS96) / Oregon North (ft) - EPSG:6885",
    value:
      "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000.0001424 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(CORS96) / Oregon South - EPSG:6886",
    value:
      "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(CORS96) / Oregon South (ft) - EPSG:6887",
    value:
      "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000.0001464 +y_0=0 +ellps=GRS80 +units=ft +no_defs",
  },
  {
    label: "NAD83(CSRS) - EPSG:4617",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "NAD83(CSRS) - EPSG:4954",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) (geocentric) - EPSG:4360",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Alberta 10-TM (Forest) - EPSG:3402",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-115 +k=0.9992 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Alberta 10-TM (Resource) - EPSG:3403",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-115 +k=0.9992 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Alberta 3TM ref merid 111 W - EPSG:3779",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-111 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Alberta 3TM ref merid 114 W - EPSG:3780",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Alberta 3TM ref merid 117 W - EPSG:3781",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-117 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Alberta 3TM ref merid 120 W - EPSG:3802",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Alberta 3TM ref merid 120 W (deprecated) - EPSG:3782",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / BC Albers - EPSG:3153",
    value:
      "+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Canada Atlas Lambert - EPSG:3979",
    value:
      "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 1-23 - EPSG:6098",
    value:
      "+proj=lcc +lat_1=87 +lat_2=83.66666666666667 +lat_0=85.43711833333333 +lon_0=-90 +x_0=23500000 +y_0=1500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 2-14 - EPSG:6099",
    value:
      "+proj=lcc +lat_1=83.66666666666667 +lat_2=80.33333333333333 +lat_0=82.05842488888888 +lon_0=-115 +x_0=14500000 +y_0=2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 2-16 - EPSG:6100",
    value:
      "+proj=lcc +lat_1=83.66666666666667 +lat_2=80.33333333333333 +lat_0=82.05842488888888 +lon_0=-75 +x_0=16500000 +y_0=2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 3-25 - EPSG:6101",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=-129 +x_0=25500000 +y_0=3500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 3-27 - EPSG:6102",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=-99 +x_0=27500000 +y_0=3500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 3-29 - EPSG:6103",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=-69 +x_0=29500000 +y_0=3500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 4-14 - EPSG:6104",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=-129 +x_0=14500000 +y_0=4500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 4-16 - EPSG:6105",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=-104 +x_0=16500000 +y_0=4500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 4-18 - EPSG:6106",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=-79 +x_0=18500000 +y_0=4500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 5-33 - EPSG:6107",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-131 +x_0=33500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 5-35 - EPSG:6108",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-111 +x_0=35500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 5-37 - EPSG:6109",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-91 +x_0=37500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 5-39 - EPSG:6110",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-71 +x_0=39500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 6-18 - EPSG:6111",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-132 +x_0=18500000 +y_0=6500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 6-20 - EPSG:6112",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-113 +x_0=20500000 +y_0=6500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 6-22 - EPSG:6113",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-94 +x_0=22500000 +y_0=6500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / EPSG Arctic zone 6-24 - EPSG:6114",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-75 +x_0=24500000 +y_0=6500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 1 - EPSG:26898",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-53 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 10 - EPSG:2952",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-79.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 11 - EPSG:26891",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-82.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 12 - EPSG:26892",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 13 - EPSG:26893",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-84 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 14 - EPSG:26894",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 15 - EPSG:26895",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 16 - EPSG:26896",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 17 - EPSG:26897",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-96 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 2 - EPSG:26899",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-56 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 3 - EPSG:2945",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-58.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 4 - EPSG:2946",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 5 - EPSG:2947",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 6 - EPSG:2948",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-67.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 7 - EPSG:2949",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-70.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 8 - EPSG:2950",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-73.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTM zone 9 - EPSG:2951",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-76.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / MTQ Lambert - EPSG:3799",
    value:
      "+proj=lcc +lat_1=50 +lat_2=46 +lat_0=44 +lon_0=-70 +x_0=800000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / New Brunswick Stereographic - EPSG:2953",
    value:
      "+proj=sterea +lat_0=46.5 +lon_0=-66.5 +k=0.999912 +x_0=2500000 +y_0=7500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / NWT Lambert - EPSG:3581",
    value:
      "+proj=lcc +lat_1=62 +lat_2=70 +lat_0=0 +lon_0=-112 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Ontario MNR Lambert - EPSG:3162",
    value:
      "+proj=lcc +lat_1=44.5 +lat_2=53.5 +lat_0=0 +lon_0=-85 +x_0=930000 +y_0=6430000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Prince Edward Isl. Stereographic (NAD83) - EPSG:2954",
    value:
      "+proj=sterea +lat_0=47.25 +lon_0=-63 +k=0.999912 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Quebec Albers - EPSG:6624",
    value:
      "+proj=aea +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Quebec Lambert - EPSG:6622",
    value:
      "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / SCoPQ zone 2 (deprecated) - EPSG:2944",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-55.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Statistics Canada Lambert - EPSG:3348",
    value:
      "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=63.390675 +lon_0=-91.86666666666666 +x_0=6200000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Teranet Ontario Lambert - EPSG:5321",
    value:
      "+proj=lcc +lat_1=44.5 +lat_2=54.5 +lat_0=0 +lon_0=-84 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 10N - EPSG:3157",
    value:
      "+proj=utm +zone=10 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 10N + CGVD2013 height - EPSG:6653",
    value:
      "+proj=utm +zone=10 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 11N - EPSG:2955",
    value:
      "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 11N + CGVD2013 height - EPSG:6654",
    value:
      "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 12N - EPSG:2956",
    value:
      "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 12N + CGVD2013 height - EPSG:6655",
    value:
      "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 13N - EPSG:2957",
    value:
      "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 13N + CGVD2013 height - EPSG:6656",
    value:
      "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 14N - EPSG:3158",
    value:
      "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 14N + CGVD2013 height - EPSG:6657",
    value:
      "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 15N - EPSG:3159",
    value:
      "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 15N + CGVD2013 height - EPSG:6658",
    value:
      "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 16N - EPSG:3160",
    value:
      "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 16N + CGVD2013 height - EPSG:6659",
    value:
      "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 17N - EPSG:2958",
    value:
      "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 17N + CGVD2013 height - EPSG:6660",
    value:
      "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 18N - EPSG:2959",
    value:
      "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 18N + CGVD2013 height - EPSG:6661",
    value:
      "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 19N - EPSG:2960",
    value:
      "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 19N + CGVD2013 height - EPSG:6662",
    value:
      "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 20N - EPSG:2961",
    value:
      "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 20N + CGVD2013 height - EPSG:6663",
    value:
      "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 21N - EPSG:2962",
    value:
      "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 21N + CGVD2013 height - EPSG:6664",
    value:
      "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 22N - EPSG:3761",
    value:
      "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 22N + CGVD2013 height - EPSG:6665",
    value:
      "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 7N - EPSG:3154",
    value:
      "+proj=utm +zone=7 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 7N + CGVD2013 height - EPSG:6650",
    value:
      "+proj=utm +zone=7 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 8N - EPSG:3155",
    value:
      "+proj=utm +zone=8 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 8N + CGVD2013 height - EPSG:6651",
    value:
      "+proj=utm +zone=8 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 9N - EPSG:3156",
    value:
      "+proj=utm +zone=9 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / UTM zone 9N + CGVD2013 height - EPSG:6652",
    value:
      "+proj=utm +zone=9 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS) / Yukon Albers - EPSG:3579",
    value:
      "+proj=aea +lat_1=61.66666666666666 +lat_2=68 +lat_0=59 +lon_0=-132.5 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS) + CGVD2013 height - EPSG:6649",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +vunits=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) - EPSG:4140",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "NAD83(CSRS98) / MTM zone 10 (deprecated) - EPSG:2147",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-79.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / MTM zone 3 (deprecated) - EPSG:2140",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-58.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / MTM zone 4 (deprecated) - EPSG:2141",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / MTM zone 5 (deprecated) - EPSG:2142",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / MTM zone 6 (deprecated) - EPSG:2143",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-67.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / MTM zone 7 (deprecated) - EPSG:2144",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-70.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / MTM zone 8 (deprecated) - EPSG:2145",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-73.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / MTM zone 9 (deprecated) - EPSG:2146",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-76.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / New Brunswick Stereo (deprecated) - EPSG:2036",
    value:
      "+proj=sterea +lat_0=46.5 +lon_0=-66.5 +k=0.999912 +x_0=2500000 +y_0=7500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label:
      "NAD83(CSRS98) / Prince Edward Isl. Stereographic (NAD83) (deprecated) - EPSG:2291",
    value:
      "+proj=sterea +lat_0=47.25 +lon_0=-63 +k=0.999912 +x_0=400000 +y_0=800000 +a=6378135 +b=6356750.304921594 +units=m +no_defs",
  },
  {
    label:
      "NAD83(CSRS98) / Prince Edward Isl. Stereographic (NAD83) (deprecated) - EPSG:2292",
    value:
      "+proj=sterea +lat_0=47.25 +lon_0=-63 +k=0.999912 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / SCoPQ zone 2 (deprecated) - EPSG:2139",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-55.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / UTM zone 11N (deprecated) - EPSG:2153",
    value:
      "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / UTM zone 12N (deprecated) - EPSG:2152",
    value:
      "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / UTM zone 13N (deprecated) - EPSG:2151",
    value:
      "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / UTM zone 17N (deprecated) - EPSG:2150",
    value:
      "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / UTM zone 18N (deprecated) - EPSG:2149",
    value:
      "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / UTM zone 19N (deprecated) - EPSG:2037",
    value:
      "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / UTM zone 20N (deprecated) - EPSG:2038",
    value:
      "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(CSRS98) / UTM zone 21N (deprecated) - EPSG:2148",
    value:
      "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) - EPSG:4152",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "NAD83(HARN) - EPSG:4956",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) (geocentric) - EPSG:4362",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Alabama East - EPSG:2759",
    value:
      "+proj=tmerc +lat_0=30.5 +lon_0=-85.83333333333333 +k=0.99996 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Alabama West - EPSG:2760",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-87.5 +k=0.999933333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Arizona Central - EPSG:2762",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Arizona Central (ft) - EPSG:2868",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Arizona East - EPSG:2761",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Arizona East (ft) - EPSG:2867",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Arizona West - EPSG:2763",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Arizona West (ft) - EPSG:2869",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Arkansas North - EPSG:2764",
    value:
      "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Arkansas North (ftUS) - EPSG:3441",
    value:
      "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Arkansas South - EPSG:2765",
    value:
      "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Arkansas South (ftUS) - EPSG:3442",
    value:
      "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / California Albers - EPSG:3311",
    value:
      "+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 1 - EPSG:2766",
    value:
      "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 1 (ftUS) - EPSG:2870",
    value:
      "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 2 - EPSG:2767",
    value:
      "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 2 (ftUS) - EPSG:2871",
    value:
      "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 3 - EPSG:2768",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 3 (ftUS) - EPSG:2872",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 4 - EPSG:2769",
    value:
      "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 4 (ftUS) - EPSG:2873",
    value:
      "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 5 - EPSG:2770",
    value:
      "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 5 (ftUS) - EPSG:2874",
    value:
      "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 6 - EPSG:2771",
    value:
      "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / California zone 6 (ftUS) - EPSG:2875",
    value:
      "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Colorado Central - EPSG:2773",
    value:
      "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Colorado Central (ftUS) - EPSG:2877",
    value:
      "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Colorado North - EPSG:2772",
    value:
      "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Colorado North (ftUS) - EPSG:2876",
    value:
      "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Colorado South - EPSG:2774",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Colorado South (ftUS) - EPSG:2878",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Connecticut - EPSG:2775",
    value:
      "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096 +y_0=152400.3048 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Connecticut (ftUS) - EPSG:2879",
    value:
      "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096012192 +y_0=152400.3048006096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Conus Albers - EPSG:5071",
    value:
      "+proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=23 +lon_0=-96 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Delaware - EPSG:2776",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Delaware (ftUS) - EPSG:2880",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Florida East - EPSG:2777",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Florida East (ftUS) - EPSG:2881",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Florida GDL Albers - EPSG:3087",
    value:
      "+proj=aea +lat_1=24 +lat_2=31.5 +lat_0=24 +lon_0=-84 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Florida North - EPSG:2779",
    value:
      "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Florida North (ftUS) - EPSG:2883",
    value:
      "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Florida West - EPSG:2778",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Florida West (ftUS) - EPSG:2882",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Georgia East - EPSG:2780",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Georgia East (ftUS) - EPSG:2884",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Georgia West - EPSG:2781",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Georgia West (ftUS) - EPSG:2885",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Guam Map Grid - EPSG:4414",
    value:
      "+proj=tmerc +lat_0=13.5 +lon_0=144.75 +k=1 +x_0=100000 +y_0=200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Hawaii zone 1 - EPSG:2782",
    value:
      "+proj=tmerc +lat_0=18.83333333333333 +lon_0=-155.5 +k=0.999966667 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Hawaii zone 2 - EPSG:2783",
    value:
      "+proj=tmerc +lat_0=20.33333333333333 +lon_0=-156.6666666666667 +k=0.999966667 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Hawaii zone 3 - EPSG:2784",
    value:
      "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Hawaii zone 3 (ftUS) - EPSG:3760",
    value:
      "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Hawaii zone 4 - EPSG:2785",
    value:
      "+proj=tmerc +lat_0=21.83333333333333 +lon_0=-159.5 +k=0.99999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Hawaii zone 5 - EPSG:2786",
    value:
      "+proj=tmerc +lat_0=21.66666666666667 +lon_0=-160.1666666666667 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Idaho Central - EPSG:2788",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Idaho Central (ftUS) - EPSG:2887",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Idaho East - EPSG:2787",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Idaho East (ftUS) - EPSG:2886",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Idaho West - EPSG:2789",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Idaho West (ftUS) - EPSG:2888",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Illinois East - EPSG:2790",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Illinois East (ftUS) - EPSG:3443",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Illinois West - EPSG:2791",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Illinois West (ftUS) - EPSG:3444",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=699999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Indiana East - EPSG:2792",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=100000 +y_0=250000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Indiana East (ftUS) - EPSG:2967",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Indiana East (ftUS) (deprecated) - EPSG:2889",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249364.9987299975 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Indiana West - EPSG:2793",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=250000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Indiana West (ftUS) - EPSG:2968",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Indiana West (ftUS) (deprecated) - EPSG:2890",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249364.9987299975 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Iowa North - EPSG:2794",
    value:
      "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Iowa North (ftUS) - EPSG:3425",
    value:
      "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=999999.9999898402 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Iowa South - EPSG:2795",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Iowa South (ftUS) - EPSG:3426",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Kansas North - EPSG:2796",
    value:
      "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Kansas North (ftUS) - EPSG:3427",
    value:
      "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Kansas South - EPSG:2797",
    value:
      "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Kansas South (ftUS) - EPSG:3428",
    value:
      "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Kentucky North - EPSG:2798",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Kentucky North (ftUS) - EPSG:2891",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Kentucky Single Zone - EPSG:3090",
    value:
      "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Kentucky Single Zone (ftUS) - EPSG:3091",
    value:
      "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Kentucky South - EPSG:2799",
    value:
      "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Kentucky South (ftUS) - EPSG:2892",
    value:
      "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000.0001016001 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Louisiana North - EPSG:2800",
    value:
      "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Louisiana North (ftUS) - EPSG:3456",
    value:
      "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Louisiana South - EPSG:2801",
    value:
      "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Louisiana South (ftUS) - EPSG:3457",
    value:
      "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Maine CS2000 Central - EPSG:3464",
    value:
      "+proj=tmerc +lat_0=43.5 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Maine CS2000 Central (deprecated) - EPSG:3076",
    value:
      "+proj=tmerc +lat_0=43 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Maine CS2000 East - EPSG:3075",
    value:
      "+proj=tmerc +lat_0=43.83333333333334 +lon_0=-67.875 +k=0.99998 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Maine CS2000 West - EPSG:3077",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.375 +k=0.99998 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Maine East - EPSG:2802",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Maine East (ftUS) - EPSG:26855",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Maine East (ftUS) (deprecated) - EPSG:26825",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Maine West - EPSG:2803",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Maine West (ftUS) - EPSG:26856",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Maine West (ftUS) (deprecated) - EPSG:26826",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Maryland - EPSG:2804",
    value:
      "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Maryland (ftUS) - EPSG:2893",
    value:
      "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Massachusetts Island - EPSG:2806",
    value:
      "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Massachusetts Island (ftUS) - EPSG:2895",
    value:
      "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Massachusetts Mainland - EPSG:2805",
    value:
      "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Massachusetts Mainland (ftUS) - EPSG:2894",
    value:
      "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000.0001016002 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Michigan Central - EPSG:2808",
    value:
      "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=6000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Michigan Central (ft) - EPSG:2897",
    value:
      "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=5999999.999976001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Michigan North - EPSG:2807",
    value:
      "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=8000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Michigan North (ft) - EPSG:2896",
    value:
      "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=7999999.999968001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Michigan Oblique Mercator - EPSG:3079",
    value:
      "+proj=omerc +lat_0=45.30916666666666 +lonc=-86 +alpha=337.25556 +k=0.9996 +x_0=2546731.496 +y_0=-4354009.816 +no_uoff +gamma=337.25556 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Michigan South - EPSG:2809",
    value:
      "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=4000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Michigan South (ft) - EPSG:2898",
    value:
      "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=3999999.999984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Minnesota Central - EPSG:2811",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Minnesota Central (ftUS) - EPSG:26858",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Minnesota Central (ftUS) (deprecated) - EPSG:26831",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Minnesota North - EPSG:2810",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Minnesota North (ftUS) - EPSG:26857",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Minnesota North (ftUS) (deprecated) - EPSG:26830",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Minnesota South - EPSG:2812",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Minnesota South (ftUS) - EPSG:26859",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Minnesota South (ftUS) (deprecated) - EPSG:26832",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Mississippi East - EPSG:2813",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Mississippi East (ftUS) - EPSG:2899",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Mississippi TM - EPSG:3815",
    value:
      "+proj=tmerc +lat_0=32.5 +lon_0=-89.75 +k=0.9998335 +x_0=500000 +y_0=1300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Mississippi West - EPSG:2814",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Mississippi West (ftUS) - EPSG:2900",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Missouri Central - EPSG:2816",
    value:
      "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-92.5 +k=0.999933333 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Missouri East - EPSG:2815",
    value:
      "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-90.5 +k=0.999933333 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Missouri West - EPSG:2817",
    value:
      "+proj=tmerc +lat_0=36.16666666666666 +lon_0=-94.5 +k=0.999941177 +x_0=850000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Montana - EPSG:2818",
    value:
      "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Montana (ft) - EPSG:2901",
    value:
      "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Nebraska - EPSG:2819",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Nebraska (ftUS) - EPSG:26860",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Nebraska (ftUS) (deprecated) - EPSG:26833",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.0000101601 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Nevada Central - EPSG:2821",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Nevada Central (ftUS) - EPSG:3430",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000.00001016 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Nevada East - EPSG:2820",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000 +y_0=8000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Nevada East (ftUS) - EPSG:3429",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000.00001016 +y_0=8000000.000010163 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Nevada West - EPSG:2822",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000 +y_0=4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Nevada West (ftUS) - EPSG:3431",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000.0000101599 +y_0=3999999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / New Hampshire - EPSG:2823",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / New Hampshire (ftUS) - EPSG:3445",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / New Jersey - EPSG:2824",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / New Jersey (ftUS) - EPSG:3432",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / New Mexico Central - EPSG:2826",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / New Mexico Central (ftUS) - EPSG:2903",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / New Mexico East - EPSG:2825",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / New Mexico East (ftUS) - EPSG:2902",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / New Mexico West - EPSG:2827",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / New Mexico West (ftUS) - EPSG:2904",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / New York Central - EPSG:2829",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / New York Central (ftUS) - EPSG:2906",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=249999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / New York East - EPSG:2828",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / New York East (ftUS) - EPSG:2905",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / New York Long Island - EPSG:2831",
    value:
      "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / New York Long Island (ftUS) - EPSG:2908",
    value:
      "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / New York West - EPSG:2830",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / New York West (ftUS) - EPSG:2907",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / North Carolina - EPSG:3358",
    value:
      "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.22 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / North Carolina (ftUS) - EPSG:3404",
    value:
      "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024384 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / North Carolina (ftUS) (deprecated) - EPSG:3359",
    value:
      "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024385 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / North Dakota North - EPSG:2832",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / North Dakota North (ft) - EPSG:2909",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / North Dakota South - EPSG:2833",
    value:
      "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / North Dakota South (ft) - EPSG:2910",
    value:
      "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Ohio North - EPSG:2834",
    value:
      "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Ohio North (ftUS) - EPSG:3753",
    value:
      "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Ohio South - EPSG:2835",
    value:
      "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Ohio South (ftUS) - EPSG:3754",
    value:
      "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Oklahoma North - EPSG:2836",
    value:
      "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Oklahoma North (ftUS) - EPSG:2911",
    value:
      "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Oklahoma South - EPSG:2837",
    value:
      "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Oklahoma South (ftUS) - EPSG:2912",
    value:
      "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Oregon GIC Lambert (ft) - EPSG:2994",
    value:
      "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=399999.9999984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Oregon LCC (m) - EPSG:2993",
    value:
      "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Oregon North - EPSG:2838",
    value:
      "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Oregon North (ft) - EPSG:2913",
    value:
      "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000.0001424 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Oregon South - EPSG:2839",
    value:
      "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Oregon South (ft) - EPSG:2914",
    value:
      "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000.0001464 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Pennsylvania North - EPSG:3362",
    value:
      "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Pennsylvania North (ftUS) - EPSG:3363",
    value:
      "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Pennsylvania South - EPSG:3364",
    value:
      "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Pennsylvania South (ftUS) - EPSG:3365",
    value:
      "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Puerto Rico and Virgin Is. - EPSG:2866",
    value:
      "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=200000 +y_0=200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Rhode Island - EPSG:2840",
    value:
      "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=100000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Rhode Island (ftUS) - EPSG:3446",
    value:
      "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=99999.99998983997 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / South Carolina - EPSG:3360",
    value:
      "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / South Carolina (ft) - EPSG:3361",
    value:
      "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / South Dakota North - EPSG:2841",
    value:
      "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / South Dakota North (ftUS) - EPSG:3458",
    value:
      "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / South Dakota South - EPSG:2842",
    value:
      "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / South Dakota South (ftUS) - EPSG:3459",
    value:
      "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Tennessee - EPSG:2843",
    value:
      "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Tennessee (ftUS) - EPSG:2915",
    value:
      "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas Central - EPSG:2846",
    value:
      "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=700000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas Central (ftUS) - EPSG:2918",
    value:
      "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=699999.9998983998 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas Centric Albers Equal Area - EPSG:3085",
    value:
      "+proj=aea +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas Centric Lambert Conformal - EPSG:3084",
    value:
      "+proj=lcc +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas North - EPSG:2844",
    value:
      "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas North (ftUS) - EPSG:2916",
    value:
      "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000.0001016002 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas North Central - EPSG:2845",
    value:
      "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas North Central (ftUS) - EPSG:2917",
    value:
      "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas South - EPSG:2848",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas South (ftUS) - EPSG:2920",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000.0000000001 +y_0=5000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas South Central - EPSG:2847",
    value:
      "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Texas South Central (ftUS) - EPSG:2919",
    value:
      "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=3999999.9998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Utah Central - EPSG:2850",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Utah Central (ft) - EPSG:2922",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=1999999.999992 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Utah Central (ftUS) - EPSG:3569",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=2000000.00001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Utah North - EPSG:2849",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Utah North (ft) - EPSG:2921",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=999999.9999960001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Utah North (ftUS) - EPSG:3568",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=999999.9999898402 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Utah South - EPSG:2851",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Utah South (ft) - EPSG:2923",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.0001504 +y_0=2999999.999988 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Utah South (ftUS) - EPSG:3570",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.00001016 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 10N - EPSG:3740",
    value:
      "+proj=utm +zone=10 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 11N - EPSG:3741",
    value:
      "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 12N - EPSG:3742",
    value:
      "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 13N - EPSG:3743",
    value:
      "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 14N - EPSG:3744",
    value:
      "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 15N - EPSG:3745",
    value:
      "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 16N - EPSG:3746",
    value:
      "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 17N - EPSG:3747",
    value:
      "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 18N - EPSG:3748",
    value:
      "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 19N - EPSG:3749",
    value:
      "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 2S - EPSG:2195",
    value:
      "+proj=utm +zone=2 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 4N - EPSG:3750",
    value:
      "+proj=utm +zone=4 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 59S (deprecated) - EPSG:2156",
    value:
      "+proj=utm +zone=59 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / UTM zone 5N - EPSG:3751",
    value:
      "+proj=utm +zone=5 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Vermont - EPSG:2852",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Vermont (ftUS) - EPSG:5654",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Virginia Lambert - EPSG:3969",
    value:
      "+proj=lcc +lat_1=37 +lat_2=39.5 +lat_0=36 +lon_0=-79.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Virginia North - EPSG:2853",
    value:
      "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Virginia North (ftUS) - EPSG:2924",
    value:
      "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=2000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Virginia South - EPSG:2854",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Virginia South (ftUS) - EPSG:2925",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Washington North - EPSG:2855",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Washington North (ftUS) - EPSG:2926",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Washington South - EPSG:2856",
    value:
      "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Washington South (ftUS) - EPSG:2927",
    value:
      "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / West Virginia North - EPSG:2857",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / West Virginia North (ftUS) - EPSG:26861",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / West Virginia North (ftUS) (deprecated) - EPSG:26834",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=1968500 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / West Virginia South - EPSG:2858",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / West Virginia South (ftUS) - EPSG:26862",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / West Virginia South (ftUS) (deprecated) - EPSG:26835",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=1968500 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Wisconsin Central - EPSG:2860",
    value:
      "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Wisconsin Central (ftUS) - EPSG:2929",
    value:
      "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Wisconsin North - EPSG:2859",
    value:
      "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Wisconsin North (ftUS) - EPSG:2928",
    value:
      "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Wisconsin South - EPSG:2861",
    value:
      "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Wisconsin South (ftUS) - EPSG:2930",
    value:
      "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Wisconsin Transverse Mercator - EPSG:3071",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9996 +x_0=520000 +y_0=-4480000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Wyoming East - EPSG:2862",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Wyoming East (ftUS) - EPSG:3755",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Wyoming East Central - EPSG:2863",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=400000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Wyoming East Central (ftUS) - EPSG:3756",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=399999.99998984 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Wyoming West - EPSG:2865",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Wyoming West (ftUS) - EPSG:3758",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) / Wyoming West Central - EPSG:2864",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(HARN) / Wyoming West Central (ftUS) - EPSG:3757",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(HARN) + NAVD88 height - EPSG:5499",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +geoidgrids=g2012a_conus.gtx,g2012a_alaska.gtx,g2012a_guam.gtx,g2012a_hawaii.gtx,g2012a_puertorico.gtx,g2012a_samoa.gtx +vunits=m +no_defs",
  },
  {
    label: "NAD83(MA11) - EPSG:6323",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(MA11) - EPSG:6325",
    value: "+proj=longlat +ellps=GRS80 +no_defs",
  },
  {
    label: "NAD83(MA11) / Guam Map Grid - EPSG:6637",
    value:
      "+proj=tmerc +lat_0=13.5 +lon_0=144.75 +k=1 +x_0=100000 +y_0=200000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) - EPSG:4759",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "NAD83(NSRS2007) - EPSG:4892",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alabama East - EPSG:3465",
    value:
      "+proj=tmerc +lat_0=30.5 +lon_0=-85.83333333333333 +k=0.99996 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alabama West - EPSG:3466",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-87.5 +k=0.999933333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska Albers - EPSG:3467",
    value:
      "+proj=aea +lat_1=55 +lat_2=65 +lat_0=50 +lon_0=-154 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska zone 1 - EPSG:3468",
    value:
      "+proj=omerc +lat_0=57 +lonc=-133.6666666666667 +alpha=323.1301023611111 +k=0.9999 +x_0=5000000 +y_0=-5000000 +no_uoff +gamma=323.1301023611111 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska zone 10 - EPSG:3477",
    value:
      "+proj=lcc +lat_1=53.83333333333334 +lat_2=51.83333333333334 +lat_0=51 +lon_0=-176 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska zone 2 - EPSG:3469",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-142 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska zone 3 - EPSG:3470",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-146 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska zone 4 - EPSG:3471",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-150 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska zone 5 - EPSG:3472",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-154 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska zone 6 - EPSG:3473",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-158 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska zone 7 - EPSG:3474",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-162 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska zone 8 - EPSG:3475",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-166 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Alaska zone 9 - EPSG:3476",
    value:
      "+proj=tmerc +lat_0=54 +lon_0=-170 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Arizona Central - EPSG:3478",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Arizona Central (ft) - EPSG:3479",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Arizona East - EPSG:3480",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Arizona East (ft) - EPSG:3481",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Arizona West - EPSG:3482",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Arizona West (ft) - EPSG:3483",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Arkansas North - EPSG:3484",
    value:
      "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Arkansas North (ftUS) - EPSG:3485",
    value:
      "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Arkansas South - EPSG:3486",
    value:
      "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Arkansas South (ftUS) - EPSG:3487",
    value:
      "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California Albers - EPSG:3488",
    value:
      "+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 1 - EPSG:3489",
    value:
      "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 1 (ftUS) - EPSG:3490",
    value:
      "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 2 - EPSG:3491",
    value:
      "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 2 (ftUS) - EPSG:3492",
    value:
      "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 3 - EPSG:3493",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 3 (ftUS) - EPSG:3494",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 4 - EPSG:3495",
    value:
      "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 4 (ftUS) - EPSG:3496",
    value:
      "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 5 - EPSG:3497",
    value:
      "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 5 (ftUS) - EPSG:3498",
    value:
      "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 6 - EPSG:3499",
    value:
      "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / California zone 6 (ftUS) - EPSG:3500",
    value:
      "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Colorado Central - EPSG:3501",
    value:
      "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Colorado Central (ftUS) - EPSG:3502",
    value:
      "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Colorado North - EPSG:3503",
    value:
      "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Colorado North (ftUS) - EPSG:3504",
    value:
      "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Colorado South - EPSG:3505",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Colorado South (ftUS) - EPSG:3506",
    value:
      "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Connecticut - EPSG:3507",
    value:
      "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096 +y_0=152400.3048 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Connecticut (ftUS) - EPSG:3508",
    value:
      "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096012192 +y_0=152400.3048006096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Conus Albers - EPSG:5072",
    value:
      "+proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=23 +lon_0=-96 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Delaware - EPSG:3509",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Delaware (ftUS) - EPSG:3510",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / EPSG Arctic zone 5-29 - EPSG:6094",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-163 +x_0=29500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / EPSG Arctic zone 5-31 - EPSG:6095",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=-147 +x_0=31500000 +y_0=5500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / EPSG Arctic zone 6-14 - EPSG:6096",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-165 +x_0=14500000 +y_0=6500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / EPSG Arctic zone 6-16 - EPSG:6097",
    value:
      "+proj=lcc +lat_1=70.33333333333333 +lat_2=67 +lat_0=68.68747555555557 +lon_0=-147 +x_0=16500000 +y_0=6500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Florida East - EPSG:3511",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Florida East (ftUS) - EPSG:3512",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Florida GDL Albers - EPSG:3513",
    value:
      "+proj=aea +lat_1=24 +lat_2=31.5 +lat_0=24 +lon_0=-84 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Florida North - EPSG:3514",
    value:
      "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Florida North (ftUS) - EPSG:3515",
    value:
      "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Florida West - EPSG:3516",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Florida West (ftUS) - EPSG:3517",
    value:
      "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Georgia East - EPSG:3518",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Georgia East (ftUS) - EPSG:3519",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Georgia West - EPSG:3520",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Georgia West (ftUS) - EPSG:3521",
    value:
      "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Idaho Central - EPSG:3522",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Idaho Central (ftUS) - EPSG:3523",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Idaho East - EPSG:3524",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Idaho East (ftUS) - EPSG:3525",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Idaho West - EPSG:3526",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Idaho West (ftUS) - EPSG:3527",
    value:
      "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Illinois East - EPSG:3528",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Illinois East (ftUS) - EPSG:3529",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Illinois West - EPSG:3530",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Illinois West (ftUS) - EPSG:3531",
    value:
      "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=699999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Indiana East - EPSG:3532",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=100000 +y_0=250000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Indiana East (ftUS) - EPSG:3533",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Indiana West - EPSG:3534",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=250000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Indiana West (ftUS) - EPSG:3535",
    value:
      "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Iowa North - EPSG:3536",
    value:
      "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Iowa North (ftUS) - EPSG:3537",
    value:
      "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=999999.9999898402 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Iowa South - EPSG:3538",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Iowa South (ftUS) - EPSG:3539",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Kansas North - EPSG:3540",
    value:
      "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Kansas North (ftUS) - EPSG:3541",
    value:
      "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Kansas South - EPSG:3542",
    value:
      "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Kansas South (ftUS) - EPSG:3543",
    value:
      "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Kentucky North - EPSG:3544",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Kentucky North (ftUS) - EPSG:3545",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Kentucky Single Zone - EPSG:3546",
    value:
      "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Kentucky Single Zone (ftUS) - EPSG:3547",
    value:
      "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Kentucky South - EPSG:3548",
    value:
      "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Kentucky South (ftUS) - EPSG:3549",
    value:
      "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000.0001016001 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Louisiana North - EPSG:3550",
    value:
      "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Louisiana North (ftUS) - EPSG:3551",
    value:
      "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Louisiana South - EPSG:3552",
    value:
      "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Louisiana South (ftUS) - EPSG:3553",
    value:
      "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maine CS2000 Central - EPSG:3554",
    value:
      "+proj=tmerc +lat_0=43.5 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maine CS2000 East - EPSG:3555",
    value:
      "+proj=tmerc +lat_0=43.83333333333334 +lon_0=-67.875 +k=0.99998 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maine CS2000 West - EPSG:3556",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.375 +k=0.99998 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maine East - EPSG:3557",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maine East (ftUS) - EPSG:26863",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maine East (ftUS) (deprecated) - EPSG:26836",
    value:
      "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maine West - EPSG:3558",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maine West (ftUS) - EPSG:26864",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maine West (ftUS) (deprecated) - EPSG:26837",
    value:
      "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maryland - EPSG:3559",
    value:
      "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Maryland (ftUS) - EPSG:3582",
    value:
      "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Massachusetts Island - EPSG:3583",
    value:
      "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Massachusetts Island (ftUS) - EPSG:3584",
    value:
      "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Massachusetts Mainland - EPSG:3585",
    value:
      "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Massachusetts Mainland (ftUS) - EPSG:3586",
    value:
      "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000.0001016002 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Michigan Central - EPSG:3587",
    value:
      "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=6000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Michigan Central (ft) - EPSG:3588",
    value:
      "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=5999999.999976001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Michigan North - EPSG:3589",
    value:
      "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=8000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Michigan North (ft) - EPSG:3590",
    value:
      "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=7999999.999968001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Michigan Oblique Mercator - EPSG:3591",
    value:
      "+proj=omerc +lat_0=45.30916666666666 +lonc=-86 +alpha=337.25556 +k=0.9996 +x_0=2546731.496 +y_0=-4354009.816 +no_uoff +gamma=337.25556 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Michigan South - EPSG:3592",
    value:
      "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=4000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Michigan South (ft) - EPSG:3593",
    value:
      "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=3999999.999984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Minnesota Central - EPSG:3594",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Minnesota Central (ftUS) - EPSG:26866",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label:
      "NAD83(NSRS2007) / Minnesota Central (ftUS) (deprecated) - EPSG:26842",
    value:
      "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Minnesota North - EPSG:3595",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Minnesota North (ftUS) - EPSG:26865",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Minnesota North (ftUS) (deprecated) - EPSG:26841",
    value:
      "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Minnesota South - EPSG:3596",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Minnesota South (ftUS) - EPSG:26867",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Minnesota South (ftUS) (deprecated) - EPSG:26843",
    value:
      "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Mississippi East - EPSG:3597",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Mississippi East (ftUS) - EPSG:3598",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Mississippi TM - EPSG:3816",
    value:
      "+proj=tmerc +lat_0=32.5 +lon_0=-89.75 +k=0.9998335 +x_0=500000 +y_0=1300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Mississippi West - EPSG:3599",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Mississippi West (ftUS) - EPSG:3600",
    value:
      "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Missouri Central - EPSG:3601",
    value:
      "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-92.5 +k=0.999933333 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Missouri East - EPSG:3602",
    value:
      "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-90.5 +k=0.999933333 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Missouri West - EPSG:3603",
    value:
      "+proj=tmerc +lat_0=36.16666666666666 +lon_0=-94.5 +k=0.999941177 +x_0=850000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Montana - EPSG:3604",
    value:
      "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Montana (ft) - EPSG:3605",
    value:
      "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Nebraska - EPSG:3606",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Nebraska (ftUS) - EPSG:26868",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Nebraska (ftUS) (deprecated) - EPSG:26844",
    value:
      "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.0000101601 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Nevada Central - EPSG:3607",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Nevada Central (ftUS) - EPSG:3608",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000.00001016 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Nevada East - EPSG:3609",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000 +y_0=8000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Nevada East (ftUS) - EPSG:3610",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000.00001016 +y_0=8000000.000010163 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Nevada West - EPSG:3611",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000 +y_0=4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Nevada West (ftUS) - EPSG:3612",
    value:
      "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000.0000101599 +y_0=3999999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New Hampshire - EPSG:3613",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New Hampshire (ftUS) - EPSG:3614",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New Jersey - EPSG:3615",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New Jersey (ftUS) - EPSG:3616",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New Mexico Central - EPSG:3617",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New Mexico Central (ftUS) - EPSG:3618",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New Mexico East - EPSG:3619",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New Mexico East (ftUS) - EPSG:3620",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New Mexico West - EPSG:3621",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New Mexico West (ftUS) - EPSG:3622",
    value:
      "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New York Central - EPSG:3623",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New York Central (ftUS) - EPSG:3624",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=249999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New York East - EPSG:3625",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New York East (ftUS) - EPSG:3626",
    value:
      "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New York Long Island - EPSG:3627",
    value:
      "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New York Long Island (ftUS) - EPSG:3628",
    value:
      "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New York West - EPSG:3629",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / New York West (ftUS) - EPSG:3630",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / North Carolina - EPSG:3631",
    value:
      "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.22 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / North Carolina (ftUS) - EPSG:3632",
    value:
      "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024384 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / North Dakota North - EPSG:3633",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / North Dakota North (ft) - EPSG:3634",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / North Dakota South - EPSG:3635",
    value:
      "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / North Dakota South (ft) - EPSG:3636",
    value:
      "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Ohio North - EPSG:3637",
    value:
      "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Ohio North (ftUS) - EPSG:3728",
    value:
      "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Ohio South - EPSG:3638",
    value:
      "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Ohio South (ftUS) - EPSG:3729",
    value:
      "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Oklahoma North - EPSG:3639",
    value:
      "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Oklahoma North (ftUS) - EPSG:3640",
    value:
      "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Oklahoma South - EPSG:3641",
    value:
      "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Oklahoma South (ftUS) - EPSG:3642",
    value:
      "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Oregon GIC Lambert (ft) - EPSG:3644",
    value:
      "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=399999.9999984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Oregon LCC (m) - EPSG:3643",
    value:
      "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Oregon North - EPSG:3645",
    value:
      "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Oregon North (ft) - EPSG:3646",
    value:
      "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000.0001424 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Oregon South - EPSG:3647",
    value:
      "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Oregon South (ft) - EPSG:3648",
    value:
      "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000.0001464 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Pennsylvania North - EPSG:3649",
    value:
      "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Pennsylvania North (ftUS) - EPSG:3650",
    value:
      "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Pennsylvania South - EPSG:3651",
    value:
      "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Pennsylvania South (ftUS) - EPSG:3652",
    value:
      "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Puerto Rico and Virgin Is. - EPSG:4437",
    value:
      "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=200000 +y_0=200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Rhode Island - EPSG:3653",
    value:
      "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=100000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Rhode Island (ftUS) - EPSG:3654",
    value:
      "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=99999.99998983997 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / South Carolina - EPSG:3655",
    value:
      "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / South Carolina (ft) - EPSG:3656",
    value:
      "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / South Dakota North - EPSG:3657",
    value:
      "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / South Dakota North (ftUS) - EPSG:3658",
    value:
      "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / South Dakota South - EPSG:3659",
    value:
      "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / South Dakota South (ftUS) - EPSG:3660",
    value:
      "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Tennessee - EPSG:3661",
    value:
      "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Tennessee (ftUS) - EPSG:3662",
    value:
      "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas Central - EPSG:3663",
    value:
      "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=700000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas Central (ftUS) - EPSG:3664",
    value:
      "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=699999.9998983998 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas Centric Albers Equal Area - EPSG:3665",
    value:
      "+proj=aea +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas Centric Lambert Conformal - EPSG:3666",
    value:
      "+proj=lcc +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas North - EPSG:3667",
    value:
      "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas North (ftUS) - EPSG:3668",
    value:
      "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000.0001016002 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas North Central - EPSG:3669",
    value:
      "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas North Central (ftUS) - EPSG:3670",
    value:
      "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas South - EPSG:3671",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas South (ftUS) - EPSG:3672",
    value:
      "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000.0000000001 +y_0=5000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas South Central - EPSG:3673",
    value:
      "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Texas South Central (ftUS) - EPSG:3674",
    value:
      "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=3999999.9998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Utah Central - EPSG:3675",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Utah Central (ft) - EPSG:3676",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=1999999.999992 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Utah Central (ftUS) - EPSG:3677",
    value:
      "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=2000000.00001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Utah North - EPSG:3678",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Utah North (ft) - EPSG:3679",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=999999.9999960001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Utah North (ftUS) - EPSG:3680",
    value:
      "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=999999.9999898402 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Utah South - EPSG:3681",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Utah South (ft) - EPSG:3682",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.0001504 +y_0=2999999.999988 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Utah South (ftUS) - EPSG:3683",
    value:
      "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.00001016 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 10N - EPSG:3717",
    value:
      "+proj=utm +zone=10 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 11N - EPSG:3718",
    value:
      "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 12N - EPSG:3719",
    value:
      "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 13N - EPSG:3720",
    value:
      "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 14N - EPSG:3721",
    value:
      "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 15N - EPSG:3722",
    value:
      "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 16N - EPSG:3723",
    value:
      "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 17N - EPSG:3724",
    value:
      "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 18N - EPSG:3725",
    value:
      "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 19N - EPSG:3726",
    value:
      "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 1N - EPSG:3708",
    value:
      "+proj=utm +zone=1 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 2N - EPSG:3709",
    value:
      "+proj=utm +zone=2 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 3N - EPSG:3710",
    value:
      "+proj=utm +zone=3 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 4N - EPSG:3711",
    value:
      "+proj=utm +zone=4 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 59N - EPSG:3706",
    value:
      "+proj=utm +zone=59 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 5N - EPSG:3712",
    value:
      "+proj=utm +zone=5 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 60N - EPSG:3707",
    value:
      "+proj=utm +zone=60 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 6N - EPSG:3713",
    value:
      "+proj=utm +zone=6 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 7N - EPSG:3714",
    value:
      "+proj=utm +zone=7 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 8N - EPSG:3715",
    value:
      "+proj=utm +zone=8 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / UTM zone 9N - EPSG:3716",
    value:
      "+proj=utm +zone=9 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Vermont - EPSG:3684",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Vermont (ftUS) - EPSG:5655",
    value:
      "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Virginia Lambert - EPSG:3970",
    value:
      "+proj=lcc +lat_1=37 +lat_2=39.5 +lat_0=36 +lon_0=-79.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Virginia North - EPSG:3685",
    value:
      "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Virginia North (ftUS) - EPSG:3686",
    value:
      "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=2000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Virginia South - EPSG:3687",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Virginia South (ftUS) - EPSG:3688",
    value:
      "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Washington North - EPSG:3689",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Washington North (ftUS) - EPSG:3690",
    value:
      "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Washington South - EPSG:3691",
    value:
      "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Washington South (ftUS) - EPSG:3692",
    value:
      "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / West Virginia North - EPSG:3693",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / West Virginia North (ftUS) - EPSG:26869",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label:
      "NAD83(NSRS2007) / West Virginia North (ftUS) (deprecated) - EPSG:26845",
    value:
      "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=1968500 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / West Virginia South - EPSG:3694",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / West Virginia South (ftUS) - EPSG:26870",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label:
      "NAD83(NSRS2007) / West Virginia South (ftUS) (deprecated) - EPSG:26846",
    value:
      "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=1968500 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wisconsin Central - EPSG:3695",
    value:
      "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wisconsin Central (ftUS) - EPSG:3696",
    value:
      "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wisconsin North - EPSG:3697",
    value:
      "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wisconsin North (ftUS) - EPSG:3698",
    value:
      "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wisconsin South - EPSG:3699",
    value:
      "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wisconsin South (ftUS) - EPSG:3700",
    value:
      "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wisconsin Transverse Mercator - EPSG:3701",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9996 +x_0=520000 +y_0=-4480000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wyoming East - EPSG:3702",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wyoming East (ftUS) - EPSG:3730",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wyoming East Central - EPSG:3703",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=400000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wyoming East Central (ftUS) - EPSG:3731",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=399999.99998984 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wyoming West - EPSG:3705",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wyoming West (ftUS) - EPSG:3733",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wyoming West Central - EPSG:3704",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NAD83(NSRS2007) / Wyoming West Central (ftUS) - EPSG:3732",
    value:
      "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(NSRS2007) + NAVD88 height - EPSG:5500",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +geoidgrids=g2012a_conus.gtx,g2012a_alaska.gtx,g2012a_guam.gtx,g2012a_hawaii.gtx,g2012a_puertorico.gtx,g2012a_samoa.gtx +vunits=m +no_defs",
  },
  {
    label: "NAD83(PA11) - EPSG:6320",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(PA11) - EPSG:6322",
    value: "+proj=longlat +ellps=GRS80 +no_defs",
  },
  {
    label: "NAD83(PA11) / Hawaii zone 1 - EPSG:6628",
    value:
      "+proj=tmerc +lat_0=18.83333333333333 +lon_0=-155.5 +k=0.999966667 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(PA11) / Hawaii zone 2 - EPSG:6629",
    value:
      "+proj=tmerc +lat_0=20.33333333333333 +lon_0=-156.6666666666667 +k=0.999966667 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(PA11) / Hawaii zone 3 - EPSG:6630",
    value:
      "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(PA11) / Hawaii zone 3 (ftUS) - EPSG:6633",
    value:
      "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +units=us-ft +no_defs",
  },
  {
    label: "NAD83(PA11) / Hawaii zone 4 - EPSG:6631",
    value:
      "+proj=tmerc +lat_0=21.83333333333333 +lon_0=-159.5 +k=0.99999 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(PA11) / Hawaii zone 5 - EPSG:6632",
    value:
      "+proj=tmerc +lat_0=21.66666666666667 +lon_0=-160.1666666666667 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(PA11) / UTM zone 2S - EPSG:6636",
    value: "+proj=utm +zone=2 +south +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(PA11) / UTM zone 4N - EPSG:6634",
    value: "+proj=utm +zone=4 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NAD83(PA11) / UTM zone 5N - EPSG:6635",
    value: "+proj=utm +zone=5 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Nahrwan 1934 - EPSG:4744",
    value: "+proj=longlat +ellps=clrk80 +no_defs",
  },
  {
    label: "Nahrwan 1934 / Iraq zone - EPSG:3394",
    value:
      "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=45 +k_0=0.9987864078000001 +x_0=1500000 +y_0=1166200 +ellps=clrk80 +units=m +no_defs",
  },
  {
    label: "Nahrwan 1967 - EPSG:4270",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-242.2,-144.9,370.3,0,0,0,0 +no_defs",
  },
  {
    label: "Nahrwan 1967 / UTM zone 37N - EPSG:27037",
    value:
      "+proj=utm +zone=37 +ellps=clrk80 +towgs84=-242.2,-144.9,370.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Nahrwan 1967 / UTM zone 38N - EPSG:27038",
    value:
      "+proj=utm +zone=38 +ellps=clrk80 +towgs84=-242.2,-144.9,370.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Nahrwan 1967 / UTM zone 39N - EPSG:27039",
    value:
      "+proj=utm +zone=39 +ellps=clrk80 +towgs84=-242.2,-144.9,370.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Nahrwan 1967 / UTM zone 40N - EPSG:27040",
    value:
      "+proj=utm +zone=40 +ellps=clrk80 +towgs84=-242.2,-144.9,370.3,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Nakhl-e Ghanem - EPSG:4693",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,-0.15,0.68,0,0,0,0 +no_defs",
  },
  {
    label: "Nakhl-e Ghanem / UTM zone 39N - EPSG:3307",
    value:
      "+proj=utm +zone=39 +ellps=WGS84 +towgs84=0,-0.15,0.68,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Naparima 1955 - EPSG:4158",
    value:
      "+proj=longlat +ellps=intl +towgs84=-0.465,372.095,171.736,0,0,0,0 +no_defs",
  },
  {
    label: "Naparima 1955 / UTM zone 20N - EPSG:2067",
    value:
      "+proj=utm +zone=20 +ellps=intl +towgs84=-0.465,372.095,171.736,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Naparima 1972 - EPSG:4271",
    value: "+proj=longlat +ellps=intl +towgs84=-10,375,165,0,0,0,0 +no_defs",
  },
  {
    label: "Naparima 1972 / UTM zone 20N - EPSG:27120",
    value:
      "+proj=utm +zone=20 +ellps=intl +towgs84=-10,375,165,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NDG (Paris) - EPSG:4902",
    value: "+proj=longlat +a=6376523 +b=6355862.933255573 +pm=paris +no_defs",
  },
  {
    label: "NEA74 Noumea - EPSG:4644",
    value:
      "+proj=longlat +ellps=intl +towgs84=-10.18,-350.43,291.37,0,0,0,0 +no_defs",
  },
  {
    label: "NEA74 Noumea / Noumea Lambert - EPSG:3165",
    value:
      "+proj=lcc +lat_1=-22.24469175 +lat_2=-22.29469175 +lat_0=-22.26969175 +lon_0=166.44242575 +x_0=0.66 +y_0=1.02 +ellps=intl +towgs84=-10.18,-350.43,291.37,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NEA74 Noumea / Noumea Lambert 2 - EPSG:3166",
    value:
      "+proj=lcc +lat_1=-22.24472222222222 +lat_2=-22.29472222222222 +lat_0=-22.26972222222222 +lon_0=166.4425 +x_0=8.313000000000001 +y_0=-2.354 +ellps=intl +towgs84=-10.18,-350.43,291.37,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NEA74 Noumea / UTM zone 58S - EPSG:2998",
    value:
      "+proj=utm +zone=58 +south +ellps=intl +towgs84=-10.18,-350.43,291.37,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Nepal 1981 - EPSG:6207",
    value:
      "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=293.17,726.18,245.36,0,0,0,0 +no_defs",
  },
  {
    label: "New Beijing - EPSG:4555",
    value: "+proj=longlat +ellps=krass +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 102E - EPSG:4791",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 105E - EPSG:4792",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 108E - EPSG:4793",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 111E - EPSG:4794",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 114E - EPSG:4795",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 117E - EPSG:4796",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 120E - EPSG:4797",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 123E - EPSG:4798",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 126E - EPSG:4799",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 129E - EPSG:4800",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 132E - EPSG:4812",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 135E - EPSG:4822",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 75E - EPSG:4782",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 78E - EPSG:4783",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 81E - EPSG:4784",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 84E - EPSG:4785",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 87E - EPSG:4786",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 90E - EPSG:4787",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 93E - EPSG:4788",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 96E - EPSG:4789",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger CM 99E - EPSG:4790",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 25 - EPSG:4652",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 26 - EPSG:4653",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 27 - EPSG:4654",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 28 - EPSG:4655",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 29 - EPSG:4656",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 30 - EPSG:4766",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 31 - EPSG:4767",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 32 - EPSG:4768",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 33 - EPSG:4769",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 34 - EPSG:4770",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 35 - EPSG:4771",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 36 - EPSG:4772",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 37 - EPSG:4773",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 38 - EPSG:4774",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 39 - EPSG:4775",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 40 - EPSG:4776",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 41 - EPSG:4777",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 42 - EPSG:4778",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 43 - EPSG:4779",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 44 - EPSG:4780",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / 3-degree Gauss-Kruger zone 45 - EPSG:4781",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 105E - EPSG:4584",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 111E - EPSG:4585",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 117E - EPSG:4586",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 123E - EPSG:4587",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 129E - EPSG:4588",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 135E - EPSG:4589",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 75E - EPSG:4579",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 81E - EPSG:4580",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 87E - EPSG:4581",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 93E - EPSG:4582",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger CM 99E - EPSG:4583",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 13 - EPSG:4568",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 14 - EPSG:4569",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 15 - EPSG:4570",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 16 - EPSG:4571",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 17 - EPSG:4572",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 18 - EPSG:4573",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 19 - EPSG:4574",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 20 - EPSG:4575",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 21 - EPSG:4576",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 22 - EPSG:4577",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "New Beijing / Gauss-Kruger zone 23 - EPSG:4578",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +units=m +no_defs",
  },
  {
    label: "NGN - EPSG:4318",
    value: "+proj=longlat +ellps=WGS84 +towgs84=-3.2,-5.7,2.8,0,0,0,0 +no_defs",
  },
  {
    label: "NGN / UTM zone 38N - EPSG:31838",
    value:
      "+proj=utm +zone=38 +ellps=WGS84 +towgs84=-3.2,-5.7,2.8,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NGN / UTM zone 39N - EPSG:31839",
    value:
      "+proj=utm +zone=39 +ellps=WGS84 +towgs84=-3.2,-5.7,2.8,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NGO 1948 - EPSG:4273",
    value:
      "+proj=longlat +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +no_defs",
  },
  {
    label: "NGO 1948 (Oslo) - EPSG:4817",
    value:
      "+proj=longlat +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +no_defs",
  },
  {
    label: "NGO 1948 (Oslo) / NGO zone I - EPSG:27391",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=-4.666666666666667 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs",
  },
  {
    label: "NGO 1948 (Oslo) / NGO zone II - EPSG:27392",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=-2.333333333333333 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs",
  },
  {
    label: "NGO 1948 (Oslo) / NGO zone III - EPSG:27393",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs",
  },
  {
    label: "NGO 1948 (Oslo) / NGO zone IV - EPSG:27394",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=2.5 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs",
  },
  {
    label: "NGO 1948 (Oslo) / NGO zone V - EPSG:27395",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=6.166666666666667 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs",
  },
  {
    label: "NGO 1948 (Oslo) / NGO zone VI - EPSG:27396",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=10.16666666666667 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs",
  },
  {
    label: "NGO 1948 (Oslo) / NGO zone VII - EPSG:27397",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=14.16666666666667 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs",
  },
  {
    label: "NGO 1948 (Oslo) / NGO zone VIII - EPSG:27398",
    value:
      "+proj=tmerc +lat_0=58 +lon_0=18.33333333333333 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs",
  },
  {
    label: "Nord Sahara 1959 - EPSG:4307",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547 +no_defs",
  },
  {
    label: "Nord Sahara 1959 (Paris) - EPSG:4819",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547 +pm=paris +no_defs",
  },
  {
    label: "Nord Sahara 1959 / Nord Algerie - EPSG:30791",
    value:
      "+proj=lcc +lat_1=36 +lat_0=36 +lon_0=2.7 +k_0=0.999625544 +x_0=500135 +y_0=300090 +ellps=clrk80 +towgs84=-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547 +units=m +no_defs",
  },
  {
    label: "Nord Sahara 1959 / Sud Algerie - EPSG:30792",
    value:
      "+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=2.7 +k_0=0.999625769 +x_0=500135 +y_0=300090 +ellps=clrk80 +towgs84=-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547 +units=m +no_defs",
  },
  {
    label: "Nord Sahara 1959 / UTM zone 29N - EPSG:30729",
    value:
      "+proj=utm +zone=29 +ellps=clrk80 +towgs84=-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547 +units=m +no_defs",
  },
  {
    label: "Nord Sahara 1959 / UTM zone 30N - EPSG:30730",
    value:
      "+proj=utm +zone=30 +ellps=clrk80 +towgs84=-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547 +units=m +no_defs",
  },
  {
    label: "Nord Sahara 1959 / UTM zone 31N - EPSG:30731",
    value:
      "+proj=utm +zone=31 +ellps=clrk80 +towgs84=-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547 +units=m +no_defs",
  },
  {
    label: "Nord Sahara 1959 / UTM zone 32N - EPSG:30732",
    value:
      "+proj=utm +zone=32 +ellps=clrk80 +towgs84=-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547 +units=m +no_defs",
  },
  {
    label: "Nouakchott 1965 - EPSG:4680",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=124.5,-63.5,-281,0,0,0,0 +no_defs",
  },
  {
    label: "NSIDC EASE-Grid Global - EPSG:3410",
    value:
      "+proj=cea +lon_0=0 +lat_ts=30 +x_0=0 +y_0=0 +a=6371228 +b=6371228 +units=m +no_defs",
  },
  {
    label: "NSIDC EASE-Grid North - EPSG:3408",
    value:
      "+proj=laea +lat_0=90 +lon_0=0 +x_0=0 +y_0=0 +a=6371228 +b=6371228 +units=m +no_defs",
  },
  {
    label: "NSIDC EASE-Grid South - EPSG:3409",
    value:
      "+proj=laea +lat_0=-90 +lon_0=0 +x_0=0 +y_0=0 +a=6371228 +b=6371228 +units=m +no_defs",
  },
  {
    label: "NSIDC Sea Ice Polar Stereographic North - EPSG:3411",
    value:
      "+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +a=6378273 +b=6356889.449 +units=m +no_defs",
  },
  {
    label: "NSIDC Sea Ice Polar Stereographic South - EPSG:3412",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-70 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6378273 +b=6356889.449 +units=m +no_defs",
  },
  {
    label: "NSWC 9Z-2 - EPSG:4276",
    value: "+proj=longlat +ellps=WGS66 +no_defs",
  },
  {
    label: "NTF - EPSG:4275",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +no_defs",
  },
  {
    label: "NTF (Paris) - EPSG:4807",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +no_defs",
  },
  {
    label: "NTF (Paris) / Centre France (deprecated) - EPSG:27592",
    value:
      "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Corse (deprecated) - EPSG:27594",
    value:
      "+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / France I (deprecated) - EPSG:27581",
    value:
      "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=1200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / France II (deprecated) - EPSG:27582",
    value:
      "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / France II + NGF IGN69 - EPSG:7402",
    value:
      "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +vunits=m +no_defs",
  },
  {
    label: "NTF (Paris) / France II + NGF Lallemand - EPSG:7401",
    value:
      "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +vunits=m +no_defs",
  },
  {
    label: "NTF (Paris) / France III (deprecated) - EPSG:27583",
    value:
      "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=3200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / France III + NGF IGN69 - EPSG:7403",
    value:
      "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=3200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +vunits=m +no_defs",
  },
  {
    label: "NTF (Paris) / France IV (deprecated) - EPSG:27584",
    value:
      "+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=4185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert Centre France - EPSG:27562",
    value:
      "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert Corse - EPSG:27564",
    value:
      "+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert Nord France - EPSG:27561",
    value:
      "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert Sud France - EPSG:27563",
    value:
      "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone I - EPSG:27571",
    value:
      "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=1200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone I + NGF-IGN69 height - EPSG:5707",
    value:
      "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=1200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +vunits=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone II - EPSG:27572",
    value:
      "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone II + NGF IGN69 - EPSG:7412",
    value:
      "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +vunits=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone II + NGF Lallemand height - EPSG:7411",
    value:
      "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +vunits=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone II + NGF-IGN69 height - EPSG:7421",
    value:
      "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +vunits=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone III - EPSG:27573",
    value:
      "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=3200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone III + NGF IGN69 - EPSG:7413",
    value:
      "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=3200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +vunits=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone III + NGF-IGN69 height - EPSG:7422",
    value:
      "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=3200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +vunits=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone IV - EPSG:27574",
    value:
      "+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=4185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Lambert zone IV + NGF-IGN78 height - EPSG:5708",
    value:
      "+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=4185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +vunits=m +no_defs",
  },
  {
    label: "NTF (Paris) / Nord France (deprecated) - EPSG:27591",
    value:
      "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) / Sud France (deprecated) - EPSG:27593",
    value:
      "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "NTF (Paris) + NGF IGN69 height - EPSG:7400",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +vunits=m +no_defs",
  },
  {
    label: "NZGD2000 - EPSG:4167",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "NZGD2000 - EPSG:4958",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NZGD2000 (geocentric) - EPSG:4364",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Amuri 2000 - EPSG:2119",
    value:
      "+proj=tmerc +lat_0=-42.68888888888888 +lon_0=173.01 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Antipodes Islands TM 2000 - EPSG:3790",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=179 +k=1 +x_0=3500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Auckland Islands TM 2000 - EPSG:3788",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=166 +k=1 +x_0=3500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Bay of Plenty 2000 - EPSG:2106",
    value:
      "+proj=tmerc +lat_0=-37.76111111111111 +lon_0=176.4661111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Bluff 2000 - EPSG:2132",
    value:
      "+proj=tmerc +lat_0=-46.6 +lon_0=168.3427777777778 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Buller 2000 - EPSG:2117",
    value:
      "+proj=tmerc +lat_0=-41.81055555555555 +lon_0=171.5811111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Campbell Island TM 2000 - EPSG:3789",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=169 +k=1 +x_0=3500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Chatham Island Circuit 2000 - EPSG:3764",
    value:
      "+proj=tmerc +lat_0=-44 +lon_0=-176.5 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Chatham Islands TM 2000 - EPSG:3793",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-176.5 +k=1 +x_0=3500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Collingwood 2000 - EPSG:2114",
    value:
      "+proj=tmerc +lat_0=-40.71472222222223 +lon_0=172.6719444444444 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Gawler 2000 - EPSG:2125",
    value:
      "+proj=tmerc +lat_0=-43.74861111111111 +lon_0=171.3605555555555 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Grey 2000 - EPSG:2118",
    value:
      "+proj=tmerc +lat_0=-42.33361111111111 +lon_0=171.5497222222222 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Hawkes Bay 2000 - EPSG:2108",
    value:
      "+proj=tmerc +lat_0=-39.65083333333333 +lon_0=176.6736111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Hokitika 2000 - EPSG:2121",
    value:
      "+proj=tmerc +lat_0=-42.88611111111111 +lon_0=170.9797222222222 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Jacksons Bay 2000 - EPSG:2123",
    value:
      "+proj=tmerc +lat_0=-43.97777777777778 +lon_0=168.6061111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Karamea 2000 - EPSG:2116",
    value:
      "+proj=tmerc +lat_0=-41.28972222222222 +lon_0=172.1088888888889 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Lindis Peak 2000 - EPSG:2127",
    value:
      "+proj=tmerc +lat_0=-44.735 +lon_0=169.4675 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Marlborough 2000 - EPSG:2120",
    value:
      "+proj=tmerc +lat_0=-41.54444444444444 +lon_0=173.8019444444444 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Mount Eden 2000 - EPSG:2105",
    value:
      "+proj=tmerc +lat_0=-36.87972222222222 +lon_0=174.7641666666667 +k=0.9999 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Mount Nicholas 2000 - EPSG:2128",
    value:
      "+proj=tmerc +lat_0=-45.13277777777778 +lon_0=168.3986111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Mount Pleasant 2000 - EPSG:2124",
    value:
      "+proj=tmerc +lat_0=-43.59055555555556 +lon_0=172.7269444444445 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Mount York 2000 - EPSG:2129",
    value:
      "+proj=tmerc +lat_0=-45.56361111111111 +lon_0=167.7386111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Nelson 2000 - EPSG:2115",
    value:
      "+proj=tmerc +lat_0=-41.27444444444444 +lon_0=173.2991666666667 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / New Zealand Transverse Mercator 2000 - EPSG:2193",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / North Taieri 2000 - EPSG:2131",
    value:
      "+proj=tmerc +lat_0=-45.86138888888889 +lon_0=170.2825 +k=0.99996 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / NZCS2000 - EPSG:3851",
    value:
      "+proj=lcc +lat_1=-37.5 +lat_2=-44.5 +lat_0=-41 +lon_0=173 +x_0=3000000 +y_0=7000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Observation Point 2000 - EPSG:2130",
    value:
      "+proj=tmerc +lat_0=-45.81611111111111 +lon_0=170.6283333333333 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Okarito 2000 - EPSG:2122",
    value:
      "+proj=tmerc +lat_0=-43.11 +lon_0=170.2608333333333 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Poverty Bay 2000 - EPSG:2107",
    value:
      "+proj=tmerc +lat_0=-38.62444444444444 +lon_0=177.8855555555556 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Raoul Island TM 2000 - EPSG:3791",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-178 +k=1 +x_0=3500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Taranaki 2000 - EPSG:2109",
    value:
      "+proj=tmerc +lat_0=-39.13555555555556 +lon_0=174.2277777777778 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Timaru 2000 - EPSG:2126",
    value:
      "+proj=tmerc +lat_0=-44.40194444444445 +lon_0=171.0572222222222 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Tuhirangi 2000 - EPSG:2110",
    value:
      "+proj=tmerc +lat_0=-39.51222222222222 +lon_0=175.64 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / UTM zone 1S - EPSG:5700",
    value:
      "+proj=utm +zone=1 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / UTM zone 58S - EPSG:2133",
    value:
      "+proj=utm +zone=58 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / UTM zone 59S - EPSG:2134",
    value:
      "+proj=utm +zone=59 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / UTM zone 60S - EPSG:2135",
    value:
      "+proj=utm +zone=60 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Wairarapa 2000 - EPSG:2112",
    value:
      "+proj=tmerc +lat_0=-40.92527777777777 +lon_0=175.6472222222222 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Wanganui 2000 - EPSG:2111",
    value:
      "+proj=tmerc +lat_0=-40.24194444444444 +lon_0=175.4880555555555 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD2000 / Wellington 2000 - EPSG:2113",
    value:
      "+proj=tmerc +lat_0=-41.3011111111111 +lon_0=174.7763888888889 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "NZGD49 - EPSG:4272",
    value: "+proj=longlat +datum=nzgd49 +no_defs",
  },
  {
    label: "NZGD49 / Amuri Circuit - EPSG:27219",
    value:
      "+proj=tmerc +lat_0=-42.68911658333333 +lon_0=173.0101333888889 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Bay of Plenty Circuit - EPSG:27206",
    value:
      "+proj=tmerc +lat_0=-37.76124980555556 +lon_0=176.46619725 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Bluff Circuit - EPSG:27232",
    value:
      "+proj=tmerc +lat_0=-46.60000961111111 +lon_0=168.342872 +k=1 +x_0=300002.66 +y_0=699999.58 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Buller Circuit - EPSG:27217",
    value:
      "+proj=tmerc +lat_0=-41.81080286111111 +lon_0=171.5812600555556 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Collingwood Circuit - EPSG:27214",
    value:
      "+proj=tmerc +lat_0=-40.71475905555556 +lon_0=172.6720465 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Gawler Circuit - EPSG:27225",
    value:
      "+proj=tmerc +lat_0=-43.74871155555556 +lon_0=171.3607484722222 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Grey Circuit - EPSG:27218",
    value:
      "+proj=tmerc +lat_0=-42.33369427777778 +lon_0=171.5497713055556 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Hawkes Bay Circuit - EPSG:27208",
    value:
      "+proj=tmerc +lat_0=-39.65092930555556 +lon_0=176.6736805277778 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Hokitika Circuit - EPSG:27221",
    value:
      "+proj=tmerc +lat_0=-42.88632236111111 +lon_0=170.9799935 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Jacksons Bay Circuit - EPSG:27223",
    value:
      "+proj=tmerc +lat_0=-43.97780288888889 +lon_0=168.606267 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Karamea Circuit - EPSG:27216",
    value:
      "+proj=tmerc +lat_0=-41.28991152777778 +lon_0=172.1090281944444 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Lindis Peak Circuit - EPSG:27227",
    value:
      "+proj=tmerc +lat_0=-44.73526797222222 +lon_0=169.4677550833333 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Marlborough Circuit - EPSG:27220",
    value:
      "+proj=tmerc +lat_0=-41.54448666666666 +lon_0=173.8020741111111 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Mount Eden Circuit - EPSG:27205",
    value:
      "+proj=tmerc +lat_0=-36.87986527777778 +lon_0=174.7643393611111 +k=0.9999 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Mount Nicholas Circuit - EPSG:27228",
    value:
      "+proj=tmerc +lat_0=-45.13290258333333 +lon_0=168.3986411944444 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Mount Pleasant Circuit - EPSG:27224",
    value:
      "+proj=tmerc +lat_0=-43.59063758333333 +lon_0=172.7271935833333 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Mount York Circuit - EPSG:27229",
    value:
      "+proj=tmerc +lat_0=-45.56372616666666 +lon_0=167.7388617777778 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Nelson Circuit - EPSG:27215",
    value:
      "+proj=tmerc +lat_0=-41.27454472222222 +lon_0=173.2993168055555 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / New Zealand Map Grid - EPSG:27200",
    value:
      "+proj=nzmg +lat_0=-41 +lon_0=173 +x_0=2510000 +y_0=6023150 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / North Island Grid - EPSG:27291",
    value:
      "+proj=tmerc +lat_0=-39 +lon_0=175.5 +k=1 +x_0=274319.5243848086 +y_0=365759.3658464114 +datum=nzgd49 +to_meter=0.9143984146160287 +no_defs",
  },
  {
    label: "NZGD49 / North Taieri Circuit - EPSG:27231",
    value:
      "+proj=tmerc +lat_0=-45.86151336111111 +lon_0=170.2825891111111 +k=0.99996 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Observation Point Circuit - EPSG:27230",
    value:
      "+proj=tmerc +lat_0=-45.81619661111111 +lon_0=170.6285951666667 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Okarito Circuit - EPSG:27222",
    value:
      "+proj=tmerc +lat_0=-43.11012813888889 +lon_0=170.2609258333333 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Poverty Bay Circuit - EPSG:27207",
    value:
      "+proj=tmerc +lat_0=-38.62470277777778 +lon_0=177.8856362777778 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / South Island Grid - EPSG:27292",
    value:
      "+proj=tmerc +lat_0=-44 +lon_0=171.5 +k=1 +x_0=457199.2073080143 +y_0=457199.2073080143 +datum=nzgd49 +to_meter=0.9143984146160287 +no_defs",
  },
  {
    label: "NZGD49 / Taranaki Circuit - EPSG:27209",
    value:
      "+proj=tmerc +lat_0=-39.13575830555556 +lon_0=174.22801175 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Timaru Circuit - EPSG:27226",
    value:
      "+proj=tmerc +lat_0=-44.40222036111111 +lon_0=171.0572508333333 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Tuhirangi Circuit - EPSG:27210",
    value:
      "+proj=tmerc +lat_0=-39.51247038888889 +lon_0=175.6400368055556 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / UTM zone 58S - EPSG:27258",
    value: "+proj=utm +zone=58 +south +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / UTM zone 59S - EPSG:27259",
    value: "+proj=utm +zone=59 +south +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / UTM zone 60S - EPSG:27260",
    value: "+proj=utm +zone=60 +south +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Wairarapa Circuit - EPSG:27212",
    value:
      "+proj=tmerc +lat_0=-40.92553263888889 +lon_0=175.6473496666667 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Wanganui Circuit - EPSG:27211",
    value:
      "+proj=tmerc +lat_0=-40.24194713888889 +lon_0=175.4880996111111 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "NZGD49 / Wellington Circuit - EPSG:27213",
    value:
      "+proj=tmerc +lat_0=-41.30131963888888 +lon_0=174.7766231111111 +k=1 +x_0=300000 +y_0=700000 +datum=nzgd49 +units=m +no_defs",
  },
  {
    label: "Observatario - EPSG:4129",
    value: "+proj=longlat +ellps=clrk66 +no_defs",
  },
  {
    label: "Ocotepeque 1935 - EPSG:5451",
    value: "+proj=longlat +ellps=clrk66 +towgs84=205,96,-98,0,0,0,0 +no_defs",
  },
  {
    label: "Ocotepeque 1935 / Costa Rica Norte - EPSG:5456",
    value:
      "+proj=lcc +lat_1=10.46666666666667 +lat_0=10.46666666666667 +lon_0=-84.33333333333333 +k_0=0.99995696 +x_0=500000 +y_0=271820.522 +ellps=clrk66 +towgs84=205,96,-98,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ocotepeque 1935 / Costa Rica Sur - EPSG:5457",
    value:
      "+proj=lcc +lat_1=9 +lat_0=9 +lon_0=-83.66666666666667 +k_0=0.99995696 +x_0=500000 +y_0=327987.436 +ellps=clrk66 +towgs84=205,96,-98,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ocotepeque 1935 / El Salvador Lambert - EPSG:5460",
    value:
      "+proj=lcc +lat_1=13.78333333333333 +lat_0=13.78333333333333 +lon_0=-89 +k_0=0.99996704 +x_0=500000 +y_0=295809.184 +ellps=clrk66 +towgs84=205,96,-98,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ocotepeque 1935 / Guatemala Norte - EPSG:5559",
    value:
      "+proj=lcc +lat_1=16.81666666666667 +lat_0=16.81666666666667 +lon_0=-90.33333333333333 +k_0=0.99992226 +x_0=500000 +y_0=292209.579 +ellps=clrk66 +towgs84=205,96,-98,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ocotepeque 1935 / Guatemala Norte (deprecated) - EPSG:5458",
    value:
      "+proj=lcc +lat_1=16.81666666666667 +lat_0=16.81666666666667 +lon_0=-90.33333333333333 +k_0=0.99992226 +x_0=500000 +y_0=292209.579 +datum=NAD27 +units=m +no_defs",
  },
  {
    label: "Ocotepeque 1935 / Guatemala Sur - EPSG:5459",
    value:
      "+proj=lcc +lat_1=14.9 +lat_0=14.9 +lon_0=-90.33333333333333 +k_0=0.99989906 +x_0=500000 +y_0=325992.681 +ellps=clrk66 +towgs84=205,96,-98,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ocotepeque 1935 / Nicaragua Norte - EPSG:5461",
    value:
      "+proj=lcc +lat_1=13.86666666666667 +lat_0=13.86666666666667 +lon_0=-85.5 +k_0=0.99990314 +x_0=500000 +y_0=359891.816 +ellps=clrk66 +towgs84=205,96,-98,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Ocotepeque 1935 / Nicaragua Sur - EPSG:5462",
    value:
      "+proj=lcc +lat_1=11.73333333333333 +lat_0=11.73333333333333 +lon_0=-85.5 +k_0=0.9999222800000001 +x_0=500000 +y_0=288876.327 +ellps=clrk66 +towgs84=205,96,-98,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Old Hawaiian - EPSG:4135",
    value: "+proj=longlat +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +no_defs",
  },
  {
    label: "Old Hawaiian / Hawaii zone 1 - EPSG:3561",
    value:
      "+proj=tmerc +lat_0=18.83333333333333 +lon_0=-155.5 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "Old Hawaiian / Hawaii zone 2 - EPSG:3562",
    value:
      "+proj=tmerc +lat_0=20.33333333333333 +lon_0=-156.6666666666667 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "Old Hawaiian / Hawaii zone 3 - EPSG:3563",
    value:
      "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "Old Hawaiian / Hawaii zone 4 - EPSG:3564",
    value:
      "+proj=tmerc +lat_0=21.83333333333333 +lon_0=-159.5 +k=0.99999 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "Old Hawaiian / Hawaii zone 5 - EPSG:3565",
    value:
      "+proj=tmerc +lat_0=21.66666666666667 +lon_0=-160.1666666666667 +k=1 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "OS(SN)80 - EPSG:4279",
    value: "+proj=longlat +ellps=airy +no_defs",
  },
  {
    label: "OSGB 1936 - EPSG:4277",
    value: "+proj=longlat +datum=OSGB36 +no_defs",
  },
  {
    label: "OSGB 1936 / British National Grid - EPSG:27700",
    value:
      "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +datum=OSGB36 +units=m +no_defs",
  },
  {
    label: "OSGB 1936 / British National Grid + ODN height - EPSG:7405",
    value:
      "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +datum=OSGB36 +units=m +vunits=m +no_defs",
  },
  {
    label: "OSGB70 - EPSG:4278",
    value: "+proj=longlat +ellps=airy +no_defs",
  },
  {
    label: "OSNI 1952 - EPSG:4188",
    value:
      "+proj=longlat +ellps=airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +no_defs",
  },
  {
    label: "OSNI 1952 / Irish National Grid - EPSG:29901",
    value:
      "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1 +x_0=200000 +y_0=250000 +ellps=airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +units=m +no_defs",
  },
  {
    label: "Padang - EPSG:4280",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "Padang (Jakarta) - EPSG:4808",
    value: "+proj=longlat +ellps=bessel +pm=jakarta +no_defs",
  },
  {
    label: "Palestine 1923 - EPSG:4281",
    value:
      "+proj=longlat +a=6378300.789 +b=6356566.435 +towgs84=-275.7224,94.7824,340.8944,-8.001,-4.42,-11.821,1 +no_defs",
  },
  {
    label: "Palestine 1923 / Israeli CS Grid - EPSG:28193",
    value:
      "+proj=cass +lat_0=31.73409694444445 +lon_0=35.21208055555556 +x_0=170251.555 +y_0=1126867.909 +a=6378300.789 +b=6356566.435 +towgs84=-275.7224,94.7824,340.8944,-8.001,-4.42,-11.821,1 +units=m +no_defs",
  },
  {
    label: "Palestine 1923 / Palestine Belt - EPSG:28192",
    value:
      "+proj=tmerc +lat_0=31.73409694444445 +lon_0=35.21208055555556 +k=1 +x_0=170251.555 +y_0=1126867.909 +a=6378300.789 +b=6356566.435 +towgs84=-275.7224,94.7824,340.8944,-8.001,-4.42,-11.821,1 +units=m +no_defs",
  },
  {
    label: "Palestine 1923 / Palestine Grid - EPSG:28191",
    value:
      "+proj=cass +lat_0=31.73409694444445 +lon_0=35.21208055555556 +x_0=170251.555 +y_0=126867.909 +a=6378300.789 +b=6356566.435 +towgs84=-275.7224,94.7824,340.8944,-8.001,-4.42,-11.821,1 +units=m +no_defs",
  },
  {
    label: "Pampa del Castillo - EPSG:4161",
    value: "+proj=longlat +ellps=intl +towgs84=27.5,14,186.4,0,0,0,0 +no_defs",
  },
  {
    label: "Pampa del Castillo / Argentina 2 - EPSG:2082",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +towgs84=27.5,14,186.4,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Panama-Colon 1911 - EPSG:5467",
    value: "+proj=longlat +ellps=clrk66 +no_defs",
  },
  {
    label: "Panama-Colon 1911 / Panama Lambert - EPSG:5469",
    value:
      "+proj=lcc +lat_1=8.416666666666666 +lat_0=8.416666666666666 +lon_0=-80 +k_0=0.99989909 +x_0=500000 +y_0=294865.303 +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "Panama-Colon 1911 / Panama Polyconic - EPSG:5472",
    value:
      "+proj=poly +lat_0=8.25 +lon_0=-81 +x_0=914391.7962 +y_0=999404.7217154861 +ellps=clrk66 +to_meter=0.9143917962 +no_defs",
  },
  {
    label: "PD/83 - EPSG:4746",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "PD/83 / 3-degree Gauss-Kruger zone 3 - EPSG:3396",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "PD/83 / 3-degree Gauss-Kruger zone 3 (E-N) - EPSG:5666",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "PD/83 / 3-degree Gauss-Kruger zone 4 - EPSG:3397",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "PD/83 / 3-degree Gauss-Kruger zone 4 (E-N) - EPSG:5667",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Perroud 1950 - EPSG:4637",
    value: "+proj=longlat +ellps=intl +towgs84=325,154,172,0,0,0,0 +no_defs",
  },
  {
    label: "Peru96 - EPSG:5369",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Peru96 - EPSG:5373",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Peru96 / UTM zone 17S - EPSG:5839",
    value:
      "+proj=utm +zone=17 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Peru96 / UTM zone 17S (deprecated) - EPSG:5388",
    value:
      "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Peru96 / UTM zone 18S - EPSG:5387",
    value:
      "+proj=utm +zone=18 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Peru96 / UTM zone 19S - EPSG:5389",
    value:
      "+proj=utm +zone=19 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Petrels 1972 - EPSG:4636",
    value: "+proj=longlat +ellps=intl +towgs84=365,194,166,0,0,0,0 +no_defs",
  },
  {
    label: "Phoenix Islands 1966 - EPSG:4716",
    value: "+proj=longlat +ellps=intl +towgs84=298,-304,-375,0,0,0,0 +no_defs",
  },
  {
    label: "Pico de las Nieves 1984 - EPSG:4728",
    value: "+proj=longlat +ellps=intl +towgs84=-307,-92,127,0,0,0,0 +no_defs",
  },
  {
    label: "Pitcairn 1967 - EPSG:4729",
    value: "+proj=longlat +ellps=intl +towgs84=185,165,42,0,0,0,0 +no_defs",
  },
  {
    label: "Pitcairn 1967 / UTM zone 9S - EPSG:3784",
    value:
      "+proj=utm +zone=9 +south +ellps=intl +towgs84=185,165,42,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pitcairn 2006 - EPSG:4763",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Pitcairn 2006 / Pitcairn TM 2006 - EPSG:3783",
    value:
      "+proj=tmerc +lat_0=-25.06855261111111 +lon_0=-130.1129671111111 +k=1 +x_0=14200 +y_0=15500 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PNG94 - EPSG:5544",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "PNG94 - EPSG:5546",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "PNG94 / PNGMG94 zone 54 - EPSG:5550",
    value:
      "+proj=utm +zone=54 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PNG94 / PNGMG94 zone 55 - EPSG:5551",
    value:
      "+proj=utm +zone=55 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PNG94 / PNGMG94 zone 56 - EPSG:5552",
    value:
      "+proj=utm +zone=56 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Point 58 - EPSG:4620",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-106,-129,165,0,0,0,0 +no_defs",
  },
  {
    label: "Pointe Noire - EPSG:4282",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-148,51,-291,0,0,0,0 +no_defs",
  },
  {
    label: "Pointe Noire / UTM zone 32S - EPSG:28232",
    value:
      "+proj=utm +zone=32 +south +a=6378249.2 +b=6356515 +towgs84=-148,51,-291,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Popular Visualisation CRS - EPSG:4055",
    value:
      "+proj=longlat +a=6378137 +b=6378137 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Porto Santo - EPSG:4615",
    value: "+proj=longlat +ellps=intl +towgs84=-499,-249,314,0,0,0,0 +no_defs",
  },
  {
    label: "Porto Santo / UTM zone 28N - EPSG:2942",
    value:
      "+proj=utm +zone=28 +ellps=intl +towgs84=-499,-249,314,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Porto Santo 1995 - EPSG:4663",
    value:
      "+proj=longlat +ellps=intl +towgs84=-502.862,-247.438,312.724,0,0,0,0 +no_defs",
  },
  {
    label: "Porto Santo 1995 / UTM zone 28N - EPSG:3061",
    value:
      "+proj=utm +zone=28 +ellps=intl +towgs84=-502.862,-247.438,312.724,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR - EPSG:4172",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "POSGAR 2007 - EPSG:5340",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "POSGAR 2007 - EPSG:5341",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "POSGAR 2007 / Argentina 1 - EPSG:5343",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-72 +k=1 +x_0=1500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 2007 / Argentina 2 - EPSG:5344",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 2007 / Argentina 3 - EPSG:5345",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-66 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 2007 / Argentina 4 - EPSG:5346",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-63 +k=1 +x_0=4500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 2007 / Argentina 5 - EPSG:5347",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-60 +k=1 +x_0=5500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 2007 / Argentina 6 - EPSG:5348",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-57 +k=1 +x_0=6500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 2007 / Argentina 7 - EPSG:5349",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-54 +k=1 +x_0=7500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 94 - EPSG:4694",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "POSGAR 94 - EPSG:4928",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "POSGAR 94 / Argentina 1 - EPSG:22181",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-72 +k=1 +x_0=1500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 94 / Argentina 2 - EPSG:22182",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 94 / Argentina 3 - EPSG:22183",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-66 +k=1 +x_0=3500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 94 / Argentina 4 - EPSG:22184",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-63 +k=1 +x_0=4500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 94 / Argentina 5 - EPSG:22185",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-60 +k=1 +x_0=5500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 94 / Argentina 6 - EPSG:22186",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-57 +k=1 +x_0=6500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 94 / Argentina 7 - EPSG:22187",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-54 +k=1 +x_0=7500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 98 - EPSG:4190",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "POSGAR 98 - EPSG:4960",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "POSGAR 98 (geocentric) - EPSG:4366",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "POSGAR 98 / Argentina 1 - EPSG:22171",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-72 +k=1 +x_0=1500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 98 / Argentina 2 - EPSG:22172",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 98 / Argentina 3 - EPSG:22173",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-66 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 98 / Argentina 4 - EPSG:22174",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-63 +k=1 +x_0=4500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 98 / Argentina 5 - EPSG:22175",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-60 +k=1 +x_0=5500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 98 / Argentina 6 - EPSG:22176",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-57 +k=1 +x_0=6500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "POSGAR 98 / Argentina 7 - EPSG:22177",
    value:
      "+proj=tmerc +lat_0=-90 +lon_0=-54 +k=1 +x_0=7500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Principe - EPSG:4824",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "PRS92 - EPSG:4683",
    value:
      "+proj=longlat +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +no_defs",
  },
  {
    label: "PRS92 - EPSG:4994",
    value: "+proj=geocent +ellps=clrk66 +units=m +no_defs",
  },
  {
    label: "PRS92 / Philippines zone 1 - EPSG:3121",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +units=m +no_defs",
  },
  {
    label: "PRS92 / Philippines zone 2 - EPSG:3122",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=119 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +units=m +no_defs",
  },
  {
    label: "PRS92 / Philippines zone 3 - EPSG:3123",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +units=m +no_defs",
  },
  {
    label: "PRS92 / Philippines zone 4 - EPSG:3124",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +units=m +no_defs",
  },
  {
    label: "PRS92 / Philippines zone 5 - EPSG:3125",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=125 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +units=m +no_defs",
  },
  {
    label: "PSAD56 - EPSG:4248",
    value: "+proj=longlat +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +no_defs",
  },
  {
    label: "PSAD56 / ICN Regional - EPSG:2317",
    value:
      "+proj=lcc +lat_1=9 +lat_2=3 +lat_0=6 +lon_0=-66 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / Peru central zone - EPSG:24892",
    value:
      "+proj=tmerc +lat_0=-9.5 +lon_0=-76 +k=0.99932994 +x_0=720000 +y_0=1039979.159 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / Peru east zone - EPSG:24893",
    value:
      "+proj=tmerc +lat_0=-9.5 +lon_0=-70.5 +k=0.99952992 +x_0=1324000 +y_0=1040084.558 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / Peru west zone - EPSG:24891",
    value:
      "+proj=tmerc +lat_0=-6 +lon_0=-80.5 +k=0.99983008 +x_0=222000 +y_0=1426834.743 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 17N - EPSG:24817",
    value:
      "+proj=utm +zone=17 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 17S - EPSG:24877",
    value:
      "+proj=utm +zone=17 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 18N - EPSG:24818",
    value:
      "+proj=utm +zone=18 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 18S - EPSG:24878",
    value:
      "+proj=utm +zone=18 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 19N - EPSG:24819",
    value:
      "+proj=utm +zone=19 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 19S - EPSG:24879",
    value:
      "+proj=utm +zone=19 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 20N - EPSG:24820",
    value:
      "+proj=utm +zone=20 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 20S - EPSG:24880",
    value:
      "+proj=utm +zone=20 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 21N - EPSG:24821",
    value:
      "+proj=utm +zone=21 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 21S - EPSG:24881",
    value:
      "+proj=utm +zone=21 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSAD56 / UTM zone 22S - EPSG:24882",
    value:
      "+proj=utm +zone=22 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PSD93 - EPSG:4134",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006 +no_defs",
  },
  {
    label: "PSD93 / UTM zone 39N - EPSG:3439",
    value:
      "+proj=utm +zone=39 +ellps=clrk80 +towgs84=-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006 +units=m +no_defs",
  },
  {
    label: "PSD93 / UTM zone 40N - EPSG:3440",
    value:
      "+proj=utm +zone=40 +ellps=clrk80 +towgs84=-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006 +units=m +no_defs",
  },
  {
    label: "PSHD93 - EPSG:7410",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006 +vunits=m +no_defs",
  },
  {
    label: "PTRA08 - EPSG:5011",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "PTRA08 - EPSG:5013",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "PTRA08 / LAEA Europe - EPSG:5633",
    value:
      "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PTRA08 / LCC Europe - EPSG:5632",
    value:
      "+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PTRA08 / UTM zone 25N - EPSG:5014",
    value:
      "+proj=utm +zone=25 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PTRA08 / UTM zone 26N - EPSG:5015",
    value:
      "+proj=utm +zone=26 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "PTRA08 / UTM zone 28N - EPSG:5016",
    value:
      "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Puerto Rico - EPSG:4139",
    value: "+proj=longlat +ellps=clrk66 +towgs84=11,72,-101,0,0,0,0 +no_defs",
  },
  {
    label: "Puerto Rico / St. Croix - EPSG:3992",
    value:
      "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=152400.3048006096 +y_0=30480.06096012192 +ellps=clrk66 +towgs84=11,72,-101,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "Puerto Rico / UTM zone 20N - EPSG:3920",
    value:
      "+proj=utm +zone=20 +ellps=clrk66 +towgs84=11,72,-101,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Puerto Rico State Plane CS of 1927 - EPSG:3991",
    value:
      "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=11,72,-101,0,0,0,0 +units=us-ft +no_defs",
  },
  {
    label: "Pulkovo 1942 - EPSG:4284",
    value:
      "+proj=longlat +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 102E - EPSG:2610",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 105E - EPSG:2611",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 108E - EPSG:2612",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 111E - EPSG:2613",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 114E - EPSG:2614",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 117E - EPSG:2615",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 120E - EPSG:2616",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 123E - EPSG:2617",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 126E - EPSG:2618",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 129E - EPSG:2619",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 132E - EPSG:2620",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 135E - EPSG:2621",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 138E - EPSG:2622",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=138 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 141E - EPSG:2623",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 144E - EPSG:2624",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=144 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 147E - EPSG:2625",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 150E - EPSG:2626",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=150 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 153E - EPSG:2627",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 156E - EPSG:2628",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=156 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 159E - EPSG:2629",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 162E - EPSG:2630",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=162 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 165E - EPSG:2631",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 168E - EPSG:2632",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=168 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 168W - EPSG:2640",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-168 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 171E - EPSG:2633",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 171W - EPSG:2639",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 174E - EPSG:2634",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=174 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 174W - EPSG:2638",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-174 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 177E - EPSG:2635",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 177W - EPSG:2637",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 180E - EPSG:2636",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label:
      "Pulkovo 1942 / 3-degree Gauss-Kruger CM 18E (deprecated) - EPSG:3147",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 21E - EPSG:2582",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 24E - EPSG:2583",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 27E - EPSG:2584",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 30E - EPSG:2585",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 33E - EPSG:2586",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 36E - EPSG:2587",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 39E - EPSG:2588",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 42E - EPSG:2589",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 45E - EPSG:2590",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 48E - EPSG:2591",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=48 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 51E - EPSG:2592",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 54E - EPSG:2593",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=54 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 57E - EPSG:2594",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 60E - EPSG:2595",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=60 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 63E - EPSG:2596",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 66E - EPSG:2597",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=66 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 69E - EPSG:2598",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 72E - EPSG:2599",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=72 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 75E - EPSG:2601",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 78E - EPSG:2602",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 81E - EPSG:2603",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 84E - EPSG:2604",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 87E - EPSG:2605",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 90E - EPSG:2606",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 93E - EPSG:2607",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 96E - EPSG:2608",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger CM 99E - EPSG:2609",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 10 - EPSG:2526",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 11 - EPSG:2527",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=11500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 12 - EPSG:2528",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=12500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 13 - EPSG:2529",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 14 - EPSG:2530",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 15 - EPSG:2531",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 16 - EPSG:2532",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=48 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 17 - EPSG:2533",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 18 - EPSG:2534",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=54 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 19 - EPSG:2535",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 20 - EPSG:2536",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=60 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 21 - EPSG:2537",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 22 - EPSG:2538",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=66 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 23 - EPSG:2539",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 24 - EPSG:2540",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=72 +k=1 +x_0=24500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 25 - EPSG:2541",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 26 - EPSG:2542",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 27 - EPSG:2543",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 28 - EPSG:2544",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 29 - EPSG:2545",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 30 - EPSG:2546",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 31 - EPSG:2547",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 32 - EPSG:2548",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 33 - EPSG:2549",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 34 - EPSG:2551",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 35 - EPSG:2552",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 36 - EPSG:2553",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 37 - EPSG:2554",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 38 - EPSG:2555",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 39 - EPSG:2556",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 40 - EPSG:2557",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 41 - EPSG:2558",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 42 - EPSG:2559",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 43 - EPSG:2560",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 44 - EPSG:2561",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 45 - EPSG:2562",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 46 - EPSG:2563",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=138 +k=1 +x_0=46500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 47 - EPSG:2564",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=47500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 48 - EPSG:2565",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=144 +k=1 +x_0=48500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 49 - EPSG:2566",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=49500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 50 - EPSG:2567",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=150 +k=1 +x_0=50500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 51 - EPSG:2568",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=51500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 52 - EPSG:2569",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=156 +k=1 +x_0=52500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 53 - EPSG:2570",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=53500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 54 - EPSG:2571",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=162 +k=1 +x_0=54500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 55 - EPSG:2572",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=55500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 56 - EPSG:2573",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=168 +k=1 +x_0=56500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 57 - EPSG:2574",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=57500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 58 - EPSG:2575",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=174 +k=1 +x_0=58500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 59 - EPSG:2576",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=59500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label:
      "Pulkovo 1942 / 3-degree Gauss-Kruger zone 6 (deprecated) - EPSG:3146",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 60 - EPSG:3389",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=60500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label:
      "Pulkovo 1942 / 3-degree Gauss-Kruger zone 60 (deprecated) - EPSG:2577",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=60000000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 61 - EPSG:2578",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=61500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 62 - EPSG:2579",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-174 +k=1 +x_0=62500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 63 - EPSG:2580",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=63500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 64 - EPSG:2581",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-168 +k=1 +x_0=64500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 7 - EPSG:2523",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 8 - EPSG:2524",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / 3-degree Gauss-Kruger zone 9 - EPSG:2525",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Caspian Sea Mercator - EPSG:3388",
    value:
      "+proj=merc +lon_0=51 +lat_ts=42 +x_0=0 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / CS63 zone A1 - EPSG:2935",
    value:
      "+proj=tmerc +lat_0=0.1166666666666667 +lon_0=41.53333333333333 +k=1 +x_0=1300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / CS63 zone A2 - EPSG:2936",
    value:
      "+proj=tmerc +lat_0=0.1166666666666667 +lon_0=44.53333333333333 +k=1 +x_0=2300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / CS63 zone A3 - EPSG:2937",
    value:
      "+proj=tmerc +lat_0=0.1166666666666667 +lon_0=47.53333333333333 +k=1 +x_0=3300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / CS63 zone A4 - EPSG:2938",
    value:
      "+proj=tmerc +lat_0=0.1166666666666667 +lon_0=50.53333333333333 +k=1 +x_0=4300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / CS63 zone C0 - EPSG:3350",
    value:
      "+proj=tmerc +lat_0=0.1 +lon_0=21.95 +k=1 +x_0=250000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / CS63 zone C1 - EPSG:3351",
    value:
      "+proj=tmerc +lat_0=0.1 +lon_0=24.95 +k=1 +x_0=1250000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / CS63 zone C2 - EPSG:3352",
    value:
      "+proj=tmerc +lat_0=0.1 +lon_0=27.95 +k=1 +x_0=2250000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / CS63 zone K2 - EPSG:2939",
    value:
      "+proj=tmerc +lat_0=0.1333333333333333 +lon_0=50.76666666666667 +k=1 +x_0=2300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / CS63 zone K3 - EPSG:2940",
    value:
      "+proj=tmerc +lat_0=0.1333333333333333 +lon_0=53.76666666666667 +k=1 +x_0=3300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / CS63 zone K4 - EPSG:2941",
    value:
      "+proj=tmerc +lat_0=0.1333333333333333 +lon_0=56.76666666666667 +k=1 +x_0=4300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 10N (deprecated) - EPSG:28470",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 11N (deprecated) - EPSG:28471",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 12N (deprecated) - EPSG:28472",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 13N (deprecated) - EPSG:28473",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 14N (deprecated) - EPSG:28474",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 15N (deprecated) - EPSG:28475",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 16N (deprecated) - EPSG:28476",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 17N (deprecated) - EPSG:28477",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 18N (deprecated) - EPSG:28478",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 19N (deprecated) - EPSG:28479",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 20N (deprecated) - EPSG:28480",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 21N (deprecated) - EPSG:28481",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 22N (deprecated) - EPSG:28482",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 23N (deprecated) - EPSG:28483",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 24N (deprecated) - EPSG:28484",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 25N (deprecated) - EPSG:28485",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 26N (deprecated) - EPSG:28486",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 27N (deprecated) - EPSG:28487",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 28N (deprecated) - EPSG:28488",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 29N (deprecated) - EPSG:28489",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 2N (deprecated) - EPSG:28462",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 30N (deprecated) - EPSG:28490",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 31N (deprecated) - EPSG:28491",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 32N (deprecated) - EPSG:28492",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 3N (deprecated) - EPSG:28463",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 4N (deprecated) - EPSG:28464",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 5N (deprecated) - EPSG:28465",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 6N (deprecated) - EPSG:28466",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 7N (deprecated) - EPSG:28467",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 8N (deprecated) - EPSG:28468",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger 9N (deprecated) - EPSG:28469",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 105E - EPSG:2508",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 111E - EPSG:2509",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 117E - EPSG:2510",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 123E - EPSG:2511",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 129E - EPSG:2512",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 135E - EPSG:2513",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 141E - EPSG:2514",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 147E - EPSG:2515",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 153E - EPSG:2516",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 159E - EPSG:2517",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 15E (deprecated) - EPSG:2493",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 165E - EPSG:2518",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 171E - EPSG:2519",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 171W - EPSG:2522",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 177E - EPSG:2520",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 177W - EPSG:2521",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 21E - EPSG:2494",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 27E - EPSG:2495",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 33E - EPSG:2496",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 39E - EPSG:2497",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 45E - EPSG:2498",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 51E - EPSG:2499",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 57E - EPSG:2500",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 63E - EPSG:2501",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 69E - EPSG:2502",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 75E - EPSG:2503",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 81E - EPSG:2504",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 87E - EPSG:2505",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 93E - EPSG:2506",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 99E - EPSG:2507",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger CM 9E (deprecated) - EPSG:2492",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 10 - EPSG:28410",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 11 - EPSG:28411",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=11500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 12 - EPSG:28412",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=12500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 13 - EPSG:28413",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 14 - EPSG:28414",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 15 - EPSG:28415",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 16 - EPSG:28416",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 17 - EPSG:28417",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 18 - EPSG:28418",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 19 - EPSG:28419",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 2 (deprecated) - EPSG:28402",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=2500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 20 - EPSG:28420",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 21 - EPSG:28421",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 22 - EPSG:28422",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 23 - EPSG:28423",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 24 - EPSG:28424",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=24500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 25 - EPSG:28425",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 26 - EPSG:28426",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 27 - EPSG:28427",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 28 - EPSG:28428",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 29 - EPSG:28429",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 3 (deprecated) - EPSG:28403",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 30 - EPSG:28430",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 31 - EPSG:28431",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 32 - EPSG:28432",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 4 - EPSG:28404",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 5 - EPSG:28405",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 6 - EPSG:28406",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 7 - EPSG:28407",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 8 - EPSG:28408",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942 / Gauss-Kruger zone 9 - EPSG:28409",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,0,0.35,0.82,-0.12 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) - EPSG:4179",
    value:
      "+proj=longlat +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 10 - EPSG:3840",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 3 - EPSG:3837",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 3 (E-N) - EPSG:5670",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 4 - EPSG:3838",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 4 (E-N) - EPSG:5671",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 5 - EPSG:3329",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 5 (E-N) - EPSG:5672",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 6 - EPSG:3330",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 7 - EPSG:3331",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 8 - EPSG:3332",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 9 - EPSG:3839",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Gauss-Kruger zone 2 - EPSG:3833",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=2500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Gauss-Kruger zone 2 (E-N) - EPSG:5631",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=2500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Gauss-Kruger zone 3 - EPSG:3333",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Gauss-Kruger zone 3 (E-N) - EPSG:5663",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Gauss-Kruger zone 4 - EPSG:3334",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Gauss-Kruger zone 5 - EPSG:3335",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / GUGiK-80 - EPSG:3328",
    value:
      "+proj=sterea +lat_0=52.16666666666666 +lon_0=19.16666666666667 +k=0.999714 +x_0=500000 +y_0=500000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Poland zone I - EPSG:3120",
    value:
      "+proj=sterea +lat_0=50.625 +lon_0=21.08333333333333 +k=0.9998 +x_0=4637000 +y_0=5467000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Poland zone I (deprecated) - EPSG:2171",
    value:
      "+proj=sterea +lat_0=50.625 +lon_0=21.08333333333333 +k=0.9998 +x_0=4637000 +y_0=5647000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Poland zone II - EPSG:2172",
    value:
      "+proj=sterea +lat_0=53.00194444444445 +lon_0=21.50277777777778 +k=0.9998 +x_0=4603000 +y_0=5806000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Poland zone III - EPSG:2173",
    value:
      "+proj=sterea +lat_0=53.58333333333334 +lon_0=17.00833333333333 +k=0.9998 +x_0=3501000 +y_0=5999000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Poland zone IV - EPSG:2174",
    value:
      "+proj=sterea +lat_0=51.67083333333333 +lon_0=16.67222222222222 +k=0.9998 +x_0=3703000 +y_0=5627000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Poland zone V - EPSG:2175",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18.95833333333333 +k=0.999983 +x_0=237000 +y_0=-4700000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(58) / Stereo70 - EPSG:3844",
    value:
      "+proj=sterea +lat_0=46 +lon_0=25 +k=0.99975 +x_0=500000 +y_0=500000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) - EPSG:4178",
    value: "+proj=longlat +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 3 - EPSG:2397",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 3 (E-N) - EPSG:5673",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 4 - EPSG:2398",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 4 (E-N) - EPSG:5674",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 5 - EPSG:2399",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 5 (E-N) - EPSG:5675",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 6 - EPSG:3841",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 7 - EPSG:4417",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label:
      "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 7 (deprecated) - EPSG:3842",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 8 - EPSG:4434",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label:
      "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 8 (deprecated) - EPSG:3843",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / Gauss Kruger zone 3 (deprecated) - EPSG:2166",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / Gauss Kruger zone 4 (deprecated) - EPSG:2167",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / Gauss Kruger zone 5 (deprecated) - EPSG:2168",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / Gauss-Kruger zone 2 - EPSG:3834",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=2500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / Gauss-Kruger zone 2 (E-N) - EPSG:5664",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=2500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / Gauss-Kruger zone 3 - EPSG:3835",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / Gauss-Kruger zone 3 (E-N) - EPSG:5665",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1942(83) / Gauss-Kruger zone 4 - EPSG:3836",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 - EPSG:4200",
    value:
      "+proj=longlat +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 102E - EPSG:2726",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 105E - EPSG:2727",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 108E - EPSG:2728",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 111E - EPSG:2729",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 114E - EPSG:2730",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 117E - EPSG:2731",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 120E - EPSG:2732",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 123E - EPSG:2733",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 126E - EPSG:2734",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 129E - EPSG:2735",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 132E - EPSG:2738",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 135E - EPSG:2739",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 138E - EPSG:2740",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=138 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 141E - EPSG:2741",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 144E - EPSG:2742",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=144 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 147E - EPSG:2743",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 150E - EPSG:2744",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=150 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 153E - EPSG:2745",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 156E - EPSG:2746",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=156 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 159E - EPSG:2747",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 162E - EPSG:2748",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=162 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 165E - EPSG:2749",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 168E - EPSG:2750",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=168 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 168W - EPSG:2758",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-168 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 171E - EPSG:2751",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 171W - EPSG:2757",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 174E - EPSG:2752",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=174 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 174W - EPSG:2756",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-174 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 177E - EPSG:2753",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 177W - EPSG:2755",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 180E - EPSG:2754",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label:
      "Pulkovo 1995 / 3-degree Gauss-Kruger CM 18E (deprecated) - EPSG:3151",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 21E - EPSG:2699",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 24E - EPSG:2700",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 27E - EPSG:2701",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 30E - EPSG:2702",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 33E - EPSG:2703",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 36E - EPSG:2704",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 39E - EPSG:2705",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 42E - EPSG:2706",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 45E - EPSG:2707",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 48E - EPSG:2708",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=48 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 51E - EPSG:2709",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 54E - EPSG:2710",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=54 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 57E - EPSG:2711",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 60E - EPSG:2712",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=60 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 63E - EPSG:2713",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 66E - EPSG:2714",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=66 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 69E - EPSG:2715",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 72E - EPSG:2716",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=72 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 75E - EPSG:2717",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 78E - EPSG:2718",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 81E - EPSG:2719",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 84E - EPSG:2720",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 87E - EPSG:2721",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 90E - EPSG:2722",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 93E - EPSG:2723",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 96E - EPSG:2724",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger CM 99E - EPSG:2725",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 10 - EPSG:2644",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 11 - EPSG:2645",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=11500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 12 - EPSG:2646",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=12500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 13 - EPSG:2647",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 14 - EPSG:2648",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 15 - EPSG:2649",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 16 - EPSG:2650",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=48 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 17 - EPSG:2651",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 18 - EPSG:2652",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=54 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 19 - EPSG:2653",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 20 - EPSG:2654",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=60 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 21 - EPSG:2655",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 22 - EPSG:2656",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=66 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 23 - EPSG:2657",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 24 - EPSG:2658",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=72 +k=1 +x_0=24500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 25 - EPSG:2659",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 26 - EPSG:2660",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 27 - EPSG:2661",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 28 - EPSG:2662",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 29 - EPSG:2663",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 30 - EPSG:2664",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 31 - EPSG:2665",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 32 - EPSG:2666",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 33 - EPSG:2667",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 34 - EPSG:2668",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 35 - EPSG:2669",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 36 - EPSG:2670",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 37 - EPSG:2671",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 38 - EPSG:2672",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 39 - EPSG:2673",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 40 - EPSG:2674",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 41 - EPSG:2675",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 42 - EPSG:2676",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 43 - EPSG:2677",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 44 - EPSG:2678",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 45 - EPSG:2679",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 46 - EPSG:2680",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=138 +k=1 +x_0=46500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 47 - EPSG:2681",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=47500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 48 - EPSG:2682",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=144 +k=1 +x_0=48500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 49 - EPSG:2683",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=49500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 50 - EPSG:2684",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=150 +k=1 +x_0=50500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 51 - EPSG:2685",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=51500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 52 - EPSG:2686",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=156 +k=1 +x_0=52500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 53 - EPSG:2687",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=53500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 54 - EPSG:2688",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=162 +k=1 +x_0=54500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 55 - EPSG:2689",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=55500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 56 - EPSG:2690",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=168 +k=1 +x_0=56500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 57 - EPSG:2691",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=57500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 58 - EPSG:2692",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=174 +k=1 +x_0=58500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 59 - EPSG:2693",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=59500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label:
      "Pulkovo 1995 / 3-degree Gauss-Kruger zone 6 (deprecated) - EPSG:3150",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 60 - EPSG:3390",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=60500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label:
      "Pulkovo 1995 / 3-degree Gauss-Kruger zone 60 (deprecated) - EPSG:2694",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=60000000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 61 - EPSG:2695",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=61500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 62 - EPSG:2696",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-174 +k=1 +x_0=62500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 63 - EPSG:2697",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=63500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 64 - EPSG:2698",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-168 +k=1 +x_0=64500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 7 - EPSG:2641",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 8 - EPSG:2642",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / 3-degree Gauss-Kruger zone 9 - EPSG:2643",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 10N (deprecated) - EPSG:20070",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 11N (deprecated) - EPSG:20071",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 12N (deprecated) - EPSG:20072",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 13N (deprecated) - EPSG:20073",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 14N (deprecated) - EPSG:20074",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 15N (deprecated) - EPSG:20075",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 16N (deprecated) - EPSG:20076",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 17N (deprecated) - EPSG:20077",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 18N (deprecated) - EPSG:20078",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 19N (deprecated) - EPSG:20079",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 20N (deprecated) - EPSG:20080",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 21N (deprecated) - EPSG:20081",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 22N (deprecated) - EPSG:20082",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 23N (deprecated) - EPSG:20083",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 24N (deprecated) - EPSG:20084",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 25N (deprecated) - EPSG:20085",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 26N (deprecated) - EPSG:20086",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 27N (deprecated) - EPSG:20087",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 28N (deprecated) - EPSG:20088",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 29N (deprecated) - EPSG:20089",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 30N (deprecated) - EPSG:20090",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 31N (deprecated) - EPSG:20091",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 32N (deprecated) - EPSG:20092",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 4N (deprecated) - EPSG:20064",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 5N (deprecated) - EPSG:20065",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 6N (deprecated) - EPSG:20066",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 7N (deprecated) - EPSG:20067",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 8N (deprecated) - EPSG:20068",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger 9N (deprecated) - EPSG:20069",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 105E - EPSG:2477",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 111E - EPSG:2478",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 117E - EPSG:2479",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 123E - EPSG:2480",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 129E - EPSG:2481",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 135E - EPSG:2482",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 141E - EPSG:2483",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 147E - EPSG:2484",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 153E - EPSG:2485",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 159E - EPSG:2486",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 165E - EPSG:2487",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 171E - EPSG:2488",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 171W - EPSG:2491",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 177E - EPSG:2489",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 177W - EPSG:2490",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 21E - EPSG:2463",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 27E - EPSG:2464",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 33E - EPSG:2465",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 39E - EPSG:2466",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 45E - EPSG:2467",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 51E - EPSG:2468",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 57E - EPSG:2469",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 63E - EPSG:2470",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 69E - EPSG:2471",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 75E - EPSG:2472",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 81E - EPSG:2473",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 87E - EPSG:2474",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 93E - EPSG:2475",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger CM 99E - EPSG:2476",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 10 - EPSG:20010",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 11 - EPSG:20011",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=11500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 12 - EPSG:20012",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=12500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 13 - EPSG:20013",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 14 - EPSG:20014",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 15 - EPSG:20015",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 16 - EPSG:20016",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 17 - EPSG:20017",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 18 - EPSG:20018",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 19 - EPSG:20019",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 20 - EPSG:20020",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 21 - EPSG:20021",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 22 - EPSG:20022",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 23 - EPSG:20023",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 24 - EPSG:20024",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=24500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 25 - EPSG:20025",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 26 - EPSG:20026",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 27 - EPSG:20027",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 28 - EPSG:20028",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 29 - EPSG:20029",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 30 - EPSG:20030",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 31 - EPSG:20031",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 32 - EPSG:20032",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 4 - EPSG:20004",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 5 - EPSG:20005",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 6 - EPSG:20006",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 7 - EPSG:20007",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 8 - EPSG:20008",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "Pulkovo 1995 / Gauss-Kruger zone 9 - EPSG:20009",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=24.47,-130.89,-81.56,0,0,0.13,-0.22 +units=m +no_defs",
  },
  {
    label: "PZ-90 - EPSG:4740",
    value:
      "+proj=longlat +a=6378136 +b=6356751.361745712 +towgs84=0,0,1.5,0,0,0.076,0 +no_defs",
  },
  {
    label: "PZ-90 - EPSG:4922",
    value: "+proj=geocent +a=6378136 +b=6356751.361745712 +units=m +no_defs",
  },
  {
    label: "Qatar 1948 - EPSG:4286",
    value: "+proj=longlat +ellps=helmert +no_defs",
  },
  {
    label: "Qatar 1948 / Qatar Grid - EPSG:2099",
    value:
      "+proj=cass +lat_0=25.38236111111111 +lon_0=50.76138888888889 +x_0=100000 +y_0=100000 +ellps=helmert +units=m +no_defs",
  },
  {
    label: "Qatar 1974 - EPSG:4285",
    value:
      "+proj=longlat +ellps=intl +towgs84=-128.16,-282.42,21.93,0,0,0,0 +no_defs",
  },
  {
    label: "Qatar 1974 / Qatar National Grid - EPSG:28600",
    value:
      "+proj=tmerc +lat_0=24.45 +lon_0=51.21666666666667 +k=0.99999 +x_0=200000 +y_0=300000 +ellps=intl +towgs84=-128.16,-282.42,21.93,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "QND95 - EPSG:4614",
    value:
      "+proj=longlat +ellps=intl +towgs84=-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065 +no_defs",
  },
  {
    label: "QND95 / Qatar National Grid - EPSG:2932",
    value:
      "+proj=tmerc +lat_0=24.45 +lon_0=51.21666666666667 +k=0.99999 +x_0=200000 +y_0=300000 +ellps=intl +towgs84=-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065 +units=m +no_defs",
  },
  {
    label: "Qornoq - EPSG:4287",
    value: "+proj=longlat +ellps=intl +towgs84=164,138,-189,0,0,0,0 +no_defs",
  },
  {
    label: "Qornoq 1927 - EPSG:4194",
    value: "+proj=longlat +ellps=intl +towgs84=164,138,-189,0,0,0,0 +no_defs",
  },
  {
    label: "Qornoq 1927 / UTM zone 22N - EPSG:2216",
    value:
      "+proj=utm +zone=22 +ellps=intl +towgs84=164,138,-189,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Qornoq 1927 / UTM zone 23N - EPSG:2217",
    value:
      "+proj=utm +zone=23 +ellps=intl +towgs84=164,138,-189,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Rassadiran - EPSG:4153",
    value:
      "+proj=longlat +ellps=intl +towgs84=-133.63,-157.5,-158.62,0,0,0,0 +no_defs",
  },
  {
    label: "Rassadiran / Nakhl e Taqi - EPSG:2057",
    value:
      "+proj=omerc +lat_0=27.51882880555555 +lonc=52.60353916666667 +alpha=0.5716611944444444 +k=0.999895934 +x_0=658377.437 +y_0=3044969.194 +gamma=0.5716611944444444 +ellps=intl +towgs84=-133.63,-157.5,-158.62,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RD/83 - EPSG:4745",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "RD/83 / 3-degree Gauss-Kruger zone 4 - EPSG:3398",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RD/83 / 3-degree Gauss-Kruger zone 4 (E-N) - EPSG:5668",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RD/83 / 3-degree Gauss-Kruger zone 5 - EPSG:3399",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RD/83 / 3-degree Gauss-Kruger zone 5 (E-N) - EPSG:5669",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RD/NAP - EPSG:7408",
    value:
      "+proj=longlat +ellps=bessel +towgs84=565.4171,50.3319,465.5524,-0.398957388243134,0.343987817378283,-1.87740163998045,4.0725 +vunits=m +no_defs",
  },
  {
    label: "RDN2008 - EPSG:6704",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RDN2008 - EPSG:6706",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RDN2008 / Italy zone - EPSG:6875",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9985000000000001 +x_0=7000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RDN2008 / TM32 - EPSG:6707",
    value:
      "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RDN2008 / TM33 - EPSG:6708",
    value:
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RDN2008 / TM34 - EPSG:6709",
    value:
      "+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RDN2008 / Zone 12 - EPSG:6876",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=3000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "REGCAN95 - EPSG:4079",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "REGCAN95 - EPSG:4081",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "REGCAN95 / LAEA Europe - EPSG:5635",
    value:
      "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "REGCAN95 / LCC Europe - EPSG:5634",
    value:
      "+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "REGCAN95 / UTM zone 27N - EPSG:4082",
    value:
      "+proj=utm +zone=27 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "REGCAN95 / UTM zone 28N - EPSG:4083",
    value:
      "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "REGVEN - EPSG:4189",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "REGVEN - EPSG:4962",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "REGVEN (geocentric) - EPSG:4368",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "REGVEN / UTM zone 18N - EPSG:2201",
    value:
      "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "REGVEN / UTM zone 19N - EPSG:2202",
    value:
      "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "REGVEN / UTM zone 20N - EPSG:2203",
    value:
      "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Reunion 1947 - EPSG:4626",
    value: "+proj=longlat +ellps=intl +towgs84=94,-948,-1262,0,0,0,0 +no_defs",
  },
  {
    label: "Reunion 1947 / TM Reunion - EPSG:3727",
    value:
      "+proj=tmerc +lat_0=-21.11666666666667 +lon_0=55.53333333333333 +k=1 +x_0=160000 +y_0=50000 +ellps=intl +towgs84=94,-948,-1262,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Reunion 1947 / TM Reunion (deprecated) - EPSG:2990",
    value:
      "+proj=tmerc +lat_0=-21.11666666666667 +lon_0=55.53333333333333 +k=1 +x_0=50000 +y_0=160000 +ellps=intl +towgs84=94,-948,-1262,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Reykjavik 1900 - EPSG:4657",
    value:
      "+proj=longlat +a=6377019.27 +b=6355762.5391 +towgs84=-28,199,5,0,0,0,0 +no_defs",
  },
  {
    label: "RGAF09 - EPSG:5487",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGAF09 - EPSG:5489",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RGAF09 / UTM zone 20N - EPSG:5490",
    value:
      "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 - EPSG:4171",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RGF93 - EPSG:4964",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGF93 (geocentric) - EPSG:4370",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGF93 / CC42 - EPSG:3942",
    value:
      "+proj=lcc +lat_1=41.25 +lat_2=42.75 +lat_0=42 +lon_0=3 +x_0=1700000 +y_0=1200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 / CC43 - EPSG:3943",
    value:
      "+proj=lcc +lat_1=42.25 +lat_2=43.75 +lat_0=43 +lon_0=3 +x_0=1700000 +y_0=2200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 / CC44 - EPSG:3944",
    value:
      "+proj=lcc +lat_1=43.25 +lat_2=44.75 +lat_0=44 +lon_0=3 +x_0=1700000 +y_0=3200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 / CC45 - EPSG:3945",
    value:
      "+proj=lcc +lat_1=44.25 +lat_2=45.75 +lat_0=45 +lon_0=3 +x_0=1700000 +y_0=4200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 / CC46 - EPSG:3946",
    value:
      "+proj=lcc +lat_1=45.25 +lat_2=46.75 +lat_0=46 +lon_0=3 +x_0=1700000 +y_0=5200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 / CC47 - EPSG:3947",
    value:
      "+proj=lcc +lat_1=46.25 +lat_2=47.75 +lat_0=47 +lon_0=3 +x_0=1700000 +y_0=6200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 / CC48 - EPSG:3948",
    value:
      "+proj=lcc +lat_1=47.25 +lat_2=48.75 +lat_0=48 +lon_0=3 +x_0=1700000 +y_0=7200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 / CC49 - EPSG:3949",
    value:
      "+proj=lcc +lat_1=48.25 +lat_2=49.75 +lat_0=49 +lon_0=3 +x_0=1700000 +y_0=8200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 / CC50 - EPSG:3950",
    value:
      "+proj=lcc +lat_1=49.25 +lat_2=50.75 +lat_0=50 +lon_0=3 +x_0=1700000 +y_0=9200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 / Lambert-93 - EPSG:2154",
    value:
      "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGF93 / Lambert-93 + NGF-IGN69 height - EPSG:5698",
    value:
      "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "RGF93 / Lambert-93 + NGF-IGN78 height - EPSG:5699",
    value:
      "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "RGFG95 - EPSG:4624",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RGFG95 - EPSG:4966",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGFG95 (geocentric) - EPSG:4372",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGFG95 / UTM zone 21N - EPSG:3313",
    value:
      "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGFG95 / UTM zone 22N - EPSG:2972",
    value:
      "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGM04 - EPSG:4468",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGM04 - EPSG:4470",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RGM04 / UTM zone 38S - EPSG:4471",
    value:
      "+proj=utm +zone=38 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGNC 1991 - EPSG:4645",
    value: "+proj=longlat +ellps=intl +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RGNC 1991 - EPSG:4968",
    value: "+proj=geocent +ellps=intl +units=m +no_defs",
  },
  {
    label: "RGNC 1991 (geocentric) - EPSG:4382",
    value: "+proj=geocent +ellps=intl +units=m +no_defs",
  },
  {
    label: "RGNC 1991 / Lambert New Caledonia (deprecated) - EPSG:2984",
    value:
      "+proj=lcc +lat_1=-20.66666666666667 +lat_2=-22.33333333333333 +lat_0=-21.5 +lon_0=166 +x_0=400000 +y_0=300000 +ellps=intl +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGNC91-93 - EPSG:4749",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RGNC91-93 - EPSG:4906",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGNC91-93 / Lambert New Caledonia - EPSG:3163",
    value:
      "+proj=lcc +lat_1=-20.66666666666667 +lat_2=-22.33333333333333 +lat_0=-21.5 +lon_0=166 +x_0=400000 +y_0=300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGNC91-93 / UTM zone 57S - EPSG:3169",
    value:
      "+proj=utm +zone=57 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGNC91-93 / UTM zone 58S - EPSG:3170",
    value:
      "+proj=utm +zone=58 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGNC91-93 / UTM zone 59S - EPSG:3171",
    value:
      "+proj=utm +zone=59 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGPF - EPSG:4687",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0.072,-0.507,-0.245,-0.0183,0.0003,-0.007,-0.0093 +no_defs",
  },
  {
    label: "RGPF - EPSG:4998",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGPF / UTM zone 5S - EPSG:3296",
    value:
      "+proj=utm +zone=5 +south +ellps=GRS80 +towgs84=0.072,-0.507,-0.245,-0.0183,0.0003,-0.007,-0.0093 +units=m +no_defs",
  },
  {
    label: "RGPF / UTM zone 6S - EPSG:3297",
    value:
      "+proj=utm +zone=6 +south +ellps=GRS80 +towgs84=0.072,-0.507,-0.245,-0.0183,0.0003,-0.007,-0.0093 +units=m +no_defs",
  },
  {
    label: "RGPF / UTM zone 7S - EPSG:3298",
    value:
      "+proj=utm +zone=7 +south +ellps=GRS80 +towgs84=0.072,-0.507,-0.245,-0.0183,0.0003,-0.007,-0.0093 +units=m +no_defs",
  },
  {
    label: "RGPF / UTM zone 8S - EPSG:3299",
    value:
      "+proj=utm +zone=8 +south +ellps=GRS80 +towgs84=0.072,-0.507,-0.245,-0.0183,0.0003,-0.007,-0.0093 +units=m +no_defs",
  },
  {
    label: "RGR92 - EPSG:4627",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RGR92 - EPSG:4970",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGR92 (geocentric) - EPSG:4374",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGR92 / UTM zone 39S - EPSG:5644",
    value:
      "+proj=utm +zone=39 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGR92 / UTM zone 40S - EPSG:2975",
    value:
      "+proj=utm +zone=40 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 - EPSG:4039",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 - EPSG:4046",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RGRDC 2005 / Congo TM zone 12 - EPSG:4048",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / Congo TM zone 14 - EPSG:4049",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=14 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / Congo TM zone 16 - EPSG:4050",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / Congo TM zone 18 - EPSG:4051",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / Congo TM zone 20 - EPSG:4056",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / Congo TM zone 22 - EPSG:4057",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=22 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / Congo TM zone 24 - EPSG:4058",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / Congo TM zone 26 - EPSG:4059",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=26 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / Congo TM zone 28 - EPSG:4060",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=28 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / Congo TM zone 30 - EPSG:5844",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / UTM zone 33S - EPSG:4061",
    value:
      "+proj=utm +zone=33 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / UTM zone 34S - EPSG:4062",
    value:
      "+proj=utm +zone=34 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGRDC 2005 / UTM zone 35S - EPSG:4063",
    value:
      "+proj=utm +zone=35 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RGSPM06 - EPSG:4463",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RGSPM06 - EPSG:4465",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RGSPM06 / UTM zone 21N - EPSG:4467",
    value:
      "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RRAF 1991 - EPSG:4556",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RRAF 1991 - EPSG:4558",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RRAF 1991 - EPSG:4640",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RRAF 1991 - EPSG:4972",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "RRAF 1991 (geocentric) - EPSG:4384",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "RRAF 1991 / UTM zone 20N - EPSG:4559",
    value:
      "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RRAF 1991 / UTM zone 20N (deprecated) - EPSG:2989",
    value:
      "+proj=utm +zone=20 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RSRGD2000 - EPSG:4764",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "RSRGD2000 - EPSG:4884",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "RSRGD2000 / BCLC2000 - EPSG:5480",
    value:
      "+proj=lcc +lat_1=-73.66666666666667 +lat_2=-75.33333333333333 +lat_0=-74.5 +lon_0=165 +x_0=5000000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RSRGD2000 / DGLC2000 - EPSG:3852",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=157 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RSRGD2000 / MSLC2000 - EPSG:5479",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-78 +lon_0=163 +x_0=7000000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RSRGD2000 / PCLC2000 - EPSG:5481",
    value:
      "+proj=lcc +lat_1=-70.66666666666667 +lat_2=-72.33333333333333 +lat_0=-71.5 +lon_0=166 +x_0=3000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RSRGD2000 / RSPS2000 - EPSG:5482",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-90 +lon_0=180 +k=0.994 +x_0=5000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "RT38 - EPSG:4308",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "RT38 (Stockholm) - EPSG:4814",
    value: "+proj=longlat +ellps=bessel +pm=stockholm +no_defs",
  },
  {
    label: "RT38 0 gon - EPSG:3028",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18.05827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RT38 2.5 gon O - EPSG:3029",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20.30827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RT38 2.5 gon V - EPSG:3027",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15.80827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RT38 2.5 gon W (deprecated) - EPSG:30800",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15.80827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RT38 5 gon O - EPSG:3030",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=22.55827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RT38 5 gon V - EPSG:3026",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13.55827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RT38 7.5 gon V - EPSG:3025",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11.30827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "RT90 - EPSG:4124",
    value:
      "+proj=longlat +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs",
  },
  {
    label: "RT90 + RH70 height - EPSG:7404",
    value:
      "+proj=longlat +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +vunits=m +no_defs",
  },
  {
    label: "RT90 0 gon - EPSG:3022",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18.05827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs",
  },
  {
    label: "RT90 2.5 gon O - EPSG:3023",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20.30827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs",
  },
  {
    label: "RT90 2.5 gon V - EPSG:3021",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15.80827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs",
  },
  {
    label: "RT90 2.5 gon W (deprecated) - EPSG:2400",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15.80827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs",
  },
  {
    label: "RT90 5 gon O - EPSG:3024",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=22.55827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs",
  },
  {
    label: "RT90 5 gon V - EPSG:3020",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13.55827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs",
  },
  {
    label: "RT90 7.5 gon V - EPSG:3019",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11.30827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs",
  },
  {
    label: "S-JTSK - EPSG:4156",
    value: "+proj=longlat +ellps=bessel +towgs84=589,76,480,0,0,0,0 +no_defs",
  },
  {
    label: "S-JTSK (Ferro) - EPSG:4818",
    value:
      "+proj=longlat +ellps=bessel +towgs84=589,76,480,0,0,0,0 +pm=ferro +no_defs",
  },
  {
    label: "S-JTSK (Ferro) / Krovak - EPSG:2065",
    value:
      "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "S-JTSK (Ferro) / Krovak East North - EPSG:5221",
    value:
      "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +pm=ferro +units=m +no_defs",
  },
  {
    label: "S-JTSK / Krovak - EPSG:5513",
    value:
      "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "S-JTSK / Krovak East North - EPSG:5514",
    value:
      "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "S-JTSK/05 - EPSG:5228",
    value:
      "+proj=longlat +ellps=bessel +towgs84=572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378 +no_defs",
  },
  {
    label: "S-JTSK/05 (Ferro) - EPSG:5229",
    value:
      "+proj=longlat +ellps=bessel +towgs84=572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378 +pm=ferro +no_defs",
  },
  {
    label: "SAD69 - EPSG:4291",
    value: "+proj=longlat +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +no_defs",
  },
  {
    label: "SAD69 - EPSG:4618",
    value:
      "+proj=longlat +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +no_defs",
  },
  {
    label: "SAD69 / Brazil Polyconic - EPSG:29101",
    value:
      "+proj=poly +lat_0=0 +lon_0=-54 +x_0=5000000 +y_0=10000000 +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / Brazil Polyconic (deprecated) - EPSG:29100",
    value:
      "+proj=poly +lat_0=0 +lon_0=-54 +x_0=5000000 +y_0=10000000 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 17N - EPSG:5463",
    value:
      "+proj=utm +zone=17 +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 17S - EPSG:29187",
    value:
      "+proj=utm +zone=17 +south +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 17S (deprecated) - EPSG:29177",
    value:
      "+proj=utm +zone=17 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 18N - EPSG:29168",
    value:
      "+proj=utm +zone=18 +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 18N (deprecated) - EPSG:29118",
    value:
      "+proj=utm +zone=18 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 18S - EPSG:29188",
    value:
      "+proj=utm +zone=18 +south +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 18S (deprecated) - EPSG:29178",
    value:
      "+proj=utm +zone=18 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 19N - EPSG:29169",
    value:
      "+proj=utm +zone=19 +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 19N (deprecated) - EPSG:29119",
    value:
      "+proj=utm +zone=19 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 19S - EPSG:29189",
    value:
      "+proj=utm +zone=19 +south +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 19S (deprecated) - EPSG:29179",
    value:
      "+proj=utm +zone=19 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 20N - EPSG:29170",
    value:
      "+proj=utm +zone=20 +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 20N (deprecated) - EPSG:29120",
    value:
      "+proj=utm +zone=20 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 20S - EPSG:29190",
    value:
      "+proj=utm +zone=20 +south +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 20S (deprecated) - EPSG:29180",
    value:
      "+proj=utm +zone=20 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 21N - EPSG:29171",
    value:
      "+proj=utm +zone=21 +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 21N (deprecated) - EPSG:29121",
    value:
      "+proj=utm +zone=21 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 21S - EPSG:29191",
    value:
      "+proj=utm +zone=21 +south +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 21S (deprecated) - EPSG:29181",
    value:
      "+proj=utm +zone=21 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 22N - EPSG:29172",
    value:
      "+proj=utm +zone=22 +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 22N (deprecated) - EPSG:29122",
    value:
      "+proj=utm +zone=22 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 22S - EPSG:29192",
    value:
      "+proj=utm +zone=22 +south +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 22S (deprecated) - EPSG:29182",
    value:
      "+proj=utm +zone=22 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 23S - EPSG:29193",
    value:
      "+proj=utm +zone=23 +south +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 23S (deprecated) - EPSG:29183",
    value:
      "+proj=utm +zone=23 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 24S - EPSG:29194",
    value:
      "+proj=utm +zone=24 +south +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 24S (deprecated) - EPSG:29184",
    value:
      "+proj=utm +zone=24 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 25S - EPSG:29195",
    value:
      "+proj=utm +zone=25 +south +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69 / UTM zone 25S (deprecated) - EPSG:29185",
    value:
      "+proj=utm +zone=25 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69(96) - EPSG:5527",
    value:
      "+proj=longlat +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +no_defs",
  },
  {
    label: "SAD69(96) / Brazil Polyconic - EPSG:5530",
    value:
      "+proj=poly +lat_0=0 +lon_0=-54 +x_0=5000000 +y_0=10000000 +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69(96) / UTM zone 18S - EPSG:5875",
    value:
      "+proj=utm +zone=18 +south +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69(96) / UTM zone 19S - EPSG:5876",
    value:
      "+proj=utm +zone=19 +south +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69(96) / UTM zone 20S - EPSG:5877",
    value:
      "+proj=utm +zone=20 +south +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69(96) / UTM zone 21S - EPSG:5531",
    value:
      "+proj=utm +zone=21 +south +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69(96) / UTM zone 22S - EPSG:5858",
    value:
      "+proj=utm +zone=22 +south +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69(96) / UTM zone 22S (deprecated) - EPSG:5532",
    value:
      "+proj=utm +zone=22 +south +ellps=aust_SA +towgs84=-66.87,4.37,-38.52,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69(96) / UTM zone 23S - EPSG:5533",
    value:
      "+proj=utm +zone=23 +south +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69(96) / UTM zone 24S - EPSG:5534",
    value:
      "+proj=utm +zone=24 +south +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SAD69(96) / UTM zone 25S - EPSG:5535",
    value:
      "+proj=utm +zone=25 +south +ellps=aust_SA +towgs84=-67.35,3.88,-38.22,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Saint Pierre et Miquelon 1950 - EPSG:4638",
    value: "+proj=longlat +ellps=clrk66 +towgs84=30,430,368,0,0,0,0 +no_defs",
  },
  {
    label: "Saint Pierre et Miquelon 1950 / UTM zone 21N - EPSG:2987",
    value:
      "+proj=utm +zone=21 +ellps=clrk66 +towgs84=30,430,368,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Samboja - EPSG:4125",
    value:
      "+proj=longlat +ellps=bessel +towgs84=-404.78,685.68,45.47,0,0,0,0 +no_defs",
  },
  {
    label: "Samboja / UTM zone 50S (deprecated) - EPSG:2550",
    value:
      "+proj=utm +zone=50 +south +ellps=bessel +towgs84=-404.78,685.68,45.47,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Santo 1965 - EPSG:4730",
    value: "+proj=longlat +ellps=intl +towgs84=170,42,84,0,0,0,0 +no_defs",
  },
  {
    label: "Sao Tome - EPSG:4823",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Sapper Hill 1943 - EPSG:4292",
    value: "+proj=longlat +ellps=intl +towgs84=-355,21,72,0,0,0,0 +no_defs",
  },
  {
    label: "Sapper Hill 1943 / UTM zone 20S - EPSG:29220",
    value:
      "+proj=utm +zone=20 +south +ellps=intl +towgs84=-355,21,72,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Sapper Hill 1943 / UTM zone 21S - EPSG:29221",
    value:
      "+proj=utm +zone=21 +south +ellps=intl +towgs84=-355,21,72,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Schwarzeck - EPSG:4293",
    value:
      "+proj=longlat +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +no_defs",
  },
  {
    label: "Schwarzeck / Lo22/11 - EPSG:29371",
    value:
      "+proj=tmerc +lat_0=-22 +lon_0=11 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs",
  },
  {
    label: "Schwarzeck / Lo22/13 - EPSG:29373",
    value:
      "+proj=tmerc +lat_0=-22 +lon_0=13 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs",
  },
  {
    label: "Schwarzeck / Lo22/15 - EPSG:29375",
    value:
      "+proj=tmerc +lat_0=-22 +lon_0=15 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs",
  },
  {
    label: "Schwarzeck / Lo22/17 - EPSG:29377",
    value:
      "+proj=tmerc +lat_0=-22 +lon_0=17 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs",
  },
  {
    label: "Schwarzeck / Lo22/19 - EPSG:29379",
    value:
      "+proj=tmerc +lat_0=-22 +lon_0=19 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs",
  },
  {
    label: "Schwarzeck / Lo22/21 - EPSG:29381",
    value:
      "+proj=tmerc +lat_0=-22 +lon_0=21 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs",
  },
  {
    label: "Schwarzeck / Lo22/23 - EPSG:29383",
    value:
      "+proj=tmerc +lat_0=-22 +lon_0=23 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs",
  },
  {
    label: "Schwarzeck / Lo22/25 - EPSG:29385",
    value:
      "+proj=tmerc +lat_0=-22 +lon_0=25 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs",
  },
  {
    label: "Schwarzeck / UTM zone 33S - EPSG:29333",
    value:
      "+proj=utm +zone=33 +south +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Scoresbysund 1952 - EPSG:4195",
    value:
      "+proj=longlat +ellps=intl +towgs84=105,326,-102.5,0,0,0.814,-0.6 +no_defs",
  },
  {
    label: "Segara - EPSG:4613",
    value: "+proj=longlat +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +no_defs",
  },
  {
    label: "Segara (Jakarta) - EPSG:4820",
    value:
      "+proj=longlat +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +pm=jakarta +no_defs",
  },
  {
    label: "Segara (Jakarta) / NEIEZ - EPSG:5329",
    value:
      "+proj=merc +lon_0=3.192280555555556 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +pm=jakarta +units=m +no_defs",
  },
  {
    label: "Segara (Jakarta) / NEIEZ (deprecated) - EPSG:2934",
    value:
      "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +pm=jakarta +units=m +no_defs",
  },
  {
    label: "Segara / NEIEZ - EPSG:3000",
    value:
      "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Segara / UTM zone 50S - EPSG:2933",
    value:
      "+proj=utm +zone=50 +south +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Segora - EPSG:4294",
    value: "+proj=longlat +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +no_defs",
  },
  {
    label: "Selvagem Grande - EPSG:4616",
    value: "+proj=longlat +ellps=intl +towgs84=-289,-124,60,0,0,0,0 +no_defs",
  },
  {
    label: "Selvagem Grande / UTM zone 28N - EPSG:2943",
    value:
      "+proj=utm +zone=28 +ellps=intl +towgs84=-289,-124,60,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Serindung - EPSG:4295",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "Sibun Gorge 1922 - EPSG:5464",
    value: "+proj=longlat +a=6378293.645208759 +b=6356617.987679838 +no_defs",
  },
  {
    label: "Sibun Gorge 1922 / Colony Grid - EPSG:5589",
    value:
      "+proj=tmerc +lat_0=17.06124194444444 +lon_0=-88.6318575 +k=1 +x_0=66220.02833082761 +y_0=135779.5099885299 +a=6378293.645208759 +b=6356617.987679838 +to_meter=0.3047972654 +no_defs",
  },
  {
    label: "Sibun Gorge 1922 / Colony Grid (deprecated) - EPSG:5466",
    value:
      "+proj=tmerc +lat_0=17.06124194444444 +lon_0=-88.6318575 +k=1 +x_0=66220.02833082761 +y_0=135779.5099885299 +a=6378293.645208759 +b=6356617.987679838 +units=m +no_defs",
  },
  {
    label: "Sierra Leone 1924 - EPSG:4174",
    value: "+proj=longlat +a=6378300 +b=6356751.689189189 +no_defs",
  },
  {
    label: "Sierra Leone 1924 / New Colony Grid - EPSG:2159",
    value:
      "+proj=tmerc +lat_0=6.666666666666667 +lon_0=-12 +k=1 +x_0=152399.8550907544 +y_0=0 +a=6378300 +b=6356751.689189189 +to_meter=0.3047997101815088 +no_defs",
  },
  {
    label: "Sierra Leone 1924 / New War Office Grid - EPSG:2160",
    value:
      "+proj=tmerc +lat_0=6.666666666666667 +lon_0=-12 +k=1 +x_0=243839.7681452071 +y_0=182879.8261089053 +a=6378300 +b=6356751.689189189 +to_meter=0.3047997101815088 +no_defs",
  },
  {
    label: "Sierra Leone 1968 - EPSG:4175",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-88,4,101,0,0,0,0 +no_defs",
  },
  {
    label: "Sierra Leone 1968 / UTM zone 28N - EPSG:2161",
    value:
      "+proj=utm +zone=28 +ellps=clrk80 +towgs84=-88,4,101,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Sierra Leone 1968 / UTM zone 29N - EPSG:2162",
    value:
      "+proj=utm +zone=29 +ellps=clrk80 +towgs84=-88,4,101,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIGD61 - EPSG:4726",
    value:
      "+proj=longlat +ellps=clrk66 +towgs84=8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081 +no_defs",
  },
  {
    label: "SIRGAS (geocentric) - EPSG:4376",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 - EPSG:4170",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "SIRGAS 1995 - EPSG:4974",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 17N - EPSG:31986",
    value:
      "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 17S - EPSG:31992",
    value:
      "+proj=utm +zone=17 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 18N - EPSG:31987",
    value:
      "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 18S - EPSG:31993",
    value:
      "+proj=utm +zone=18 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 19N - EPSG:31988",
    value:
      "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 19S - EPSG:31994",
    value:
      "+proj=utm +zone=19 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 20N - EPSG:31989",
    value:
      "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 20S - EPSG:31995",
    value:
      "+proj=utm +zone=20 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 21N - EPSG:31990",
    value:
      "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 21S - EPSG:31996",
    value:
      "+proj=utm +zone=21 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 22N - EPSG:31991",
    value:
      "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 22S - EPSG:31997",
    value:
      "+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 23S - EPSG:31998",
    value:
      "+proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 24S - EPSG:31999",
    value:
      "+proj=utm +zone=24 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 1995 / UTM zone 25S - EPSG:32000",
    value:
      "+proj=utm +zone=25 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 - EPSG:4674",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "SIRGAS 2000 - EPSG:4988",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / Brazil Mercator - EPSG:5641",
    value:
      "+proj=merc +lon_0=-43 +lat_ts=-2 +x_0=5000000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / Brazil Polyconic - EPSG:5880",
    value:
      "+proj=poly +lat_0=0 +lon_0=-54 +x_0=5000000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 11N - EPSG:31965",
    value:
      "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 12N - EPSG:31966",
    value:
      "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 13N - EPSG:31967",
    value:
      "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 14N - EPSG:31968",
    value:
      "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 15N - EPSG:31969",
    value:
      "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 16N - EPSG:31970",
    value:
      "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 17N - EPSG:31971",
    value:
      "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 17S - EPSG:31977",
    value:
      "+proj=utm +zone=17 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 18N - EPSG:31972",
    value:
      "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 18S - EPSG:31978",
    value:
      "+proj=utm +zone=18 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 19N - EPSG:31973",
    value:
      "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 19S - EPSG:31979",
    value:
      "+proj=utm +zone=19 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 20N - EPSG:31974",
    value:
      "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 20S - EPSG:31980",
    value:
      "+proj=utm +zone=20 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 21N - EPSG:31975",
    value:
      "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 21S - EPSG:31981",
    value:
      "+proj=utm +zone=21 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 22N - EPSG:31976",
    value:
      "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 22S - EPSG:31982",
    value:
      "+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 23N - EPSG:6210",
    value:
      "+proj=utm +zone=23 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 23S - EPSG:31983",
    value:
      "+proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 24N - EPSG:6211",
    value:
      "+proj=utm +zone=24 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 24S - EPSG:31984",
    value:
      "+proj=utm +zone=24 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 25S - EPSG:31985",
    value:
      "+proj=utm +zone=25 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS 2000 / UTM zone 26S - EPSG:5396",
    value:
      "+proj=utm +zone=26 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS_ES2007.8 - EPSG:5391",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "SIRGAS_ES2007.8 - EPSG:5393",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "SIRGAS-Chile - EPSG:5358",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "SIRGAS-Chile - EPSG:5360",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "SIRGAS-Chile / UTM zone 18S - EPSG:5362",
    value:
      "+proj=utm +zone=18 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS-Chile / UTM zone 19S - EPSG:5361",
    value:
      "+proj=utm +zone=19 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS-ROU98 - EPSG:5379",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "SIRGAS-ROU98 - EPSG:5381",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "SIRGAS-ROU98 / UTM zone 21S - EPSG:5382",
    value:
      "+proj=utm +zone=21 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SIRGAS-ROU98 / UTM zone 22S - EPSG:5383",
    value:
      "+proj=utm +zone=22 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Sister Islands National Grid 1961 - EPSG:6129",
    value:
      "+proj=utm +zone=17 +ellps=clrk66 +towgs84=8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081 +units=ft +no_defs",
  },
  {
    label: "SLD99 - EPSG:5233",
    value:
      "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338 +no_defs",
  },
  {
    label: "SLD99 / Sri Lanka Grid 1999 - EPSG:5235",
    value:
      "+proj=tmerc +lat_0=7.000471527777778 +lon_0=80.77171308333334 +k=0.9999238418 +x_0=500000 +y_0=500000 +a=6377276.345 +b=6356075.41314024 +towgs84=-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338 +units=m +no_defs",
  },
  {
    label: "Slovenia 1996 - EPSG:4765",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Slovenia 1996 - EPSG:4882",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Slovenia 1996 / Slovene National Grid - EPSG:3794",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Solomon 1968 - EPSG:4718",
    value: "+proj=longlat +ellps=intl +towgs84=230,-199,-752,0,0,0,0 +no_defs",
  },
  {
    label: "South Georgia 1968 - EPSG:4722",
    value: "+proj=longlat +ellps=intl +towgs84=-794,119,-298,0,0,0,0 +no_defs",
  },
  {
    label: "South Yemen - EPSG:4164",
    value: "+proj=longlat +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +no_defs",
  },
  {
    label: "South Yemen / Gauss Kruger zone 8 (deprecated) - EPSG:2091",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "South Yemen / Gauss Kruger zone 9 (deprecated) - EPSG:2092",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "South Yemen / Gauss-Kruger zone 8 - EPSG:2395",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "South Yemen / Gauss-Kruger zone 9 - EPSG:2396",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SREF98 - EPSG:4073",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "SREF98 - EPSG:4075",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "St. George Island - EPSG:4138",
    value: "+proj=longlat +ellps=clrk66 +no_defs",
  },
  {
    label: "St. Helena 1971 - EPSG:4710",
    value: "+proj=longlat +ellps=intl +towgs84=-320,550,-494,0,0,0,0 +no_defs",
  },
  {
    label: "St. Kitts 1955 - EPSG:4605",
    value: "+proj=longlat +ellps=clrk80 +towgs84=9,183,236,0,0,0,0 +no_defs",
  },
  {
    label: "St. Kitts 1955 / British West Indies Grid - EPSG:2005",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=9,183,236,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "St. Lawrence Island - EPSG:4136",
    value: "+proj=longlat +ellps=clrk66 +no_defs",
  },
  {
    label: "St. Lucia 1955 - EPSG:4606",
    value: "+proj=longlat +ellps=clrk80 +towgs84=-149,128,296,0,0,0,0 +no_defs",
  },
  {
    label: "St. Lucia 1955 / British West Indies Grid - EPSG:2006",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=-149,128,296,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "St. Paul Island - EPSG:4137",
    value: "+proj=longlat +ellps=clrk66 +no_defs",
  },
  {
    label: "St. Vincent 1945 - EPSG:4607",
    value:
      "+proj=longlat +ellps=clrk80 +towgs84=195.671,332.517,274.607,0,0,0,0 +no_defs",
  },
  {
    label: "St. Vincent 45 / British West Indies Grid - EPSG:2007",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=195.671,332.517,274.607,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ST71 Belep - EPSG:4643",
    value:
      "+proj=longlat +ellps=intl +towgs84=-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002 +no_defs",
  },
  {
    label: "ST71 Belep / UTM zone 58S - EPSG:2997",
    value:
      "+proj=utm +zone=58 +south +ellps=intl +towgs84=-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002 +units=m +no_defs",
  },
  {
    label: "ST74 - EPSG:3152",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18.05779 +k=0.99999425 +x_0=100178.1808 +y_0=-6500614.7836 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ST84 Ile des Pins - EPSG:4642",
    value: "+proj=longlat +ellps=intl +towgs84=-13,-348,292,0,0,0,0 +no_defs",
  },
  {
    label: "ST84 Ile des Pins / UTM zone 58S - EPSG:2996",
    value:
      "+proj=utm +zone=58 +south +ellps=intl +towgs84=-13,-348,292,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ST87 Ouvea - EPSG:4635",
    value:
      "+proj=longlat +ellps=intl +towgs84=-122.383,-188.696,103.344,3.5107,-4.9668,-5.7047,4.4798 +no_defs",
  },
  {
    label: "ST87 Ouvea - EPSG:4750",
    value:
      "+proj=longlat +ellps=WGS84 +towgs84=-56.263,16.136,-22.856,0,0,0,0 +no_defs",
  },
  {
    label: "ST87 Ouvea / UTM zone 58S - EPSG:3164",
    value:
      "+proj=utm +zone=58 +south +ellps=WGS84 +towgs84=-56.263,16.136,-22.856,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "ST87 Ouvea / UTM zone 58S (deprecated) - EPSG:2983",
    value:
      "+proj=utm +zone=58 +south +ellps=intl +towgs84=-122.383,-188.696,103.344,3.5107,-4.9668,-5.7047,4.4798 +units=m +no_defs",
  },
  {
    label: "Sudan - EPSG:4296",
    value: "+proj=longlat +a=6378249.2 +b=6356515 +no_defs",
  },
  {
    label: "Sudan / UTM zone 35N (deprecated) - EPSG:29635",
    value: "+proj=utm +zone=35 +a=6378249.2 +b=6356515 +units=m +no_defs",
  },
  {
    label: "Sudan / UTM zone 36N (deprecated) - EPSG:29636",
    value: "+proj=utm +zone=36 +a=6378249.2 +b=6356515 +units=m +no_defs",
  },
  {
    label: "SVY21 - EPSG:4757",
    value: "+proj=longlat +ellps=WGS84 +no_defs",
  },
  {
    label: "SVY21 / Singapore TM - EPSG:3414",
    value:
      "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "SWEREF99 - EPSG:4619",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "SWEREF99 - EPSG:4976",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "SWEREF99 (geocentric) - EPSG:4378",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "SWEREF99 / RT90 0 gon emulation - EPSG:3848",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18.0563 +k=1.0000054 +x_0=1500083.521 +y_0=-668.8440000000001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 / RT90 2.5 gon O emulation - EPSG:3849",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20.30631666666667 +k=1.0000052 +x_0=1500102.765 +y_0=-670.706 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 / RT90 2.5 gon V emulation - EPSG:3847",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15.80628452944445 +k=1.00000561024 +x_0=1500064.274 +y_0=-667.711 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 / RT90 5 gon O emulation - EPSG:3850",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=22.55633333333333 +k=1.0000049 +x_0=1500121.846 +y_0=-672.557 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 / RT90 5 gon V emulation - EPSG:3846",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13.55626666666667 +k=1.0000058 +x_0=1500044.695 +y_0=-667.13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 / RT90 7.5 gon V emulation - EPSG:3845",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11.30625 +k=1.000006 +x_0=1500025.141 +y_0=-667.282 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 + RH2000 height - EPSG:5628",
    value:
      "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 12 00 - EPSG:3007",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 12 00 + RH2000 height - EPSG:5846",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 13 30 - EPSG:3008",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 13 30 + RH2000 height - EPSG:5847",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=13.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 14 15 - EPSG:3012",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=14.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 14 15 + RH2000 height - EPSG:5851",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=14.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 15 00 - EPSG:3009",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 15 00 + RH2000 height - EPSG:5848",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 15 45 - EPSG:3013",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 15 45 + RH2000 height - EPSG:5852",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=15.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 16 30 - EPSG:3010",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 16 30 + RH2000 height - EPSG:5849",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 17 15 - EPSG:3014",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=17.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 17 15 + RH2000 height - EPSG:5853",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=17.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 18 00 - EPSG:3011",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 18 00 + RH2000 height - EPSG:5850",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 18 45 - EPSG:3015",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 18 45 + RH2000 height - EPSG:5854",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=18.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 20 15 - EPSG:3016",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 20 15 + RH2000 height - EPSG:5855",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=20.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 21 45 - EPSG:3017",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 21 45 + RH2000 height - EPSG:5856",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 23 15 - EPSG:3018",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=23.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 23 15 + RH2000 height - EPSG:5857",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=23.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "SWEREF99 TM - EPSG:3006",
    value:
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "SWEREF99 TM + RH2000 height - EPSG:5845",
    value:
      "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +vunits=m +no_defs",
  },
  {
    label: "Tahaa 54 - EPSG:4629",
    value:
      "+proj=longlat +ellps=intl +towgs84=72.438,345.918,79.486,1.6045,0.8823,0.5565,1.3746 +no_defs",
  },
  {
    label: "Tahaa 54 / UTM zone 5S - EPSG:2977",
    value:
      "+proj=utm +zone=5 +south +ellps=intl +towgs84=72.438,345.918,79.486,1.6045,0.8823,0.5565,1.3746 +units=m +no_defs",
  },
  {
    label: "Tahiti 52 - EPSG:4628",
    value: "+proj=longlat +ellps=intl +towgs84=162,117,154,0,0,0,0 +no_defs",
  },
  {
    label: "Tahiti 52 / UTM zone 6S - EPSG:2976",
    value:
      "+proj=utm +zone=6 +south +ellps=intl +towgs84=162,117,154,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tahiti 79 - EPSG:4690",
    value:
      "+proj=longlat +ellps=intl +towgs84=221.525,152.948,176.768,-2.3847,-1.3896,-0.877,11.4741 +no_defs",
  },
  {
    label: "Tahiti 79 / UTM zone 6S - EPSG:3304",
    value:
      "+proj=utm +zone=6 +south +ellps=intl +towgs84=221.525,152.948,176.768,-2.3847,-1.3896,-0.877,11.4741 +units=m +no_defs",
  },
  {
    label: "Tananarive - EPSG:4297",
    value: "+proj=longlat +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +no_defs",
  },
  {
    label: "Tananarive (Paris) - EPSG:4810",
    value:
      "+proj=longlat +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +pm=paris +no_defs",
  },
  {
    label: "Tananarive (Paris) / Laborde Grid (deprecated) - EPSG:29700",
    value:
      "+proj=omerc +lat_0=-18.9 +lonc=44.10000000000001 +alpha=18.9 +k=0.9995000000000001 +x_0=400000 +y_0=800000 +gamma=18.9 +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "Tananarive (Paris) / Laborde Grid approximation - EPSG:29702",
    value:
      "+proj=omerc +lat_0=-18.9 +lonc=44.10000000000001 +alpha=18.9 +k=0.9995000000000001 +x_0=400000 +y_0=800000 +gamma=18.9 +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +pm=paris +units=m +no_defs",
  },
  {
    label: "Tananarive / UTM zone 38S - EPSG:29738",
    value:
      "+proj=utm +zone=38 +south +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tananarive / UTM zone 39S - EPSG:29739",
    value:
      "+proj=utm +zone=39 +south +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TC(1948) - EPSG:4303",
    value: "+proj=longlat +ellps=helmert +no_defs",
  },
  {
    label: "TC(1948) / UTM zone 39N - EPSG:30339",
    value: "+proj=utm +zone=39 +ellps=helmert +units=m +no_defs",
  },
  {
    label: "TC(1948) / UTM zone 40N - EPSG:30340",
    value: "+proj=utm +zone=40 +ellps=helmert +units=m +no_defs",
  },
  {
    label: "Tern Island 1961 - EPSG:4707",
    value: "+proj=longlat +ellps=intl +towgs84=114,-116,-333,0,0,0,0 +no_defs",
  },
  {
    label: "Tete - EPSG:4127",
    value:
      "+proj=longlat +ellps=clrk66 +towgs84=-73.472,-51.66,-112.482,0.953,4.6,-2.368,0.586 +no_defs",
  },
  {
    label: "Tete / UTM zone 36S - EPSG:2736",
    value:
      "+proj=utm +zone=36 +south +ellps=clrk66 +towgs84=-73.472,-51.66,-112.482,0.953,4.6,-2.368,0.586 +units=m +no_defs",
  },
  {
    label: "Tete / UTM zone 37S - EPSG:2737",
    value:
      "+proj=utm +zone=37 +south +ellps=clrk66 +towgs84=-73.472,-51.66,-112.482,0.953,4.6,-2.368,0.586 +units=m +no_defs",
  },
  {
    label: "TGD2005 - EPSG:5884",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "TGD2005 - EPSG:5886",
    value: "+proj=longlat +ellps=GRS80 +no_defs",
  },
  {
    label: "TGD2005 / Tonga Map Grid - EPSG:5887",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-177 +k=0.9996 +x_0=1500000 +y_0=5000000 +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "Timbalai 1948 - EPSG:4298",
    value:
      "+proj=longlat +ellps=evrstSS +towgs84=-679,669,-48,0,0,0,0 +no_defs",
  },
  {
    label: "Timbalai 1948 / RSO Borneo (ch) - EPSG:29871",
    value:
      "+proj=omerc +lat_0=4 +lonc=115 +alpha=53.31582047222222 +k=0.99984 +x_0=590476.8714630401 +y_0=442857.653094361 +gamma=53.13010236111111 +ellps=evrstSS +towgs84=-679,669,-48,0,0,0,0 +to_meter=20.11676512155263 +no_defs",
  },
  {
    label: "Timbalai 1948 / RSO Borneo (ft) - EPSG:29872",
    value:
      "+proj=omerc +lat_0=4 +lonc=115 +alpha=53.31582047222222 +k=0.99984 +x_0=590476.8727431979 +y_0=442857.6545573985 +gamma=53.13010236111111 +ellps=evrstSS +towgs84=-679,669,-48,0,0,0,0 +to_meter=0.3047994715386762 +no_defs",
  },
  {
    label: "Timbalai 1948 / RSO Borneo (m) - EPSG:29873",
    value:
      "+proj=omerc +lat_0=4 +lonc=115 +alpha=53.31582047222222 +k=0.99984 +x_0=590476.87 +y_0=442857.65 +gamma=53.13010236111111 +ellps=evrstSS +towgs84=-679,669,-48,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Timbalai 1948 / UTM zone 49N - EPSG:29849",
    value:
      "+proj=utm +zone=49 +ellps=evrstSS +towgs84=-679,669,-48,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Timbalai 1948 / UTM zone 50N - EPSG:29850",
    value:
      "+proj=utm +zone=50 +ellps=evrstSS +towgs84=-679,669,-48,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TM65 - EPSG:4299",
    value: "+proj=longlat +datum=ire65 +no_defs",
  },
  {
    label: "TM65 / Irish Grid - EPSG:29902",
    value:
      "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1.000035 +x_0=200000 +y_0=250000 +datum=ire65 +units=m +no_defs",
  },
  {
    label: "TM65 / Irish National Grid (deprecated) - EPSG:29900",
    value:
      "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1.000035 +x_0=200000 +y_0=250000 +datum=ire65 +units=m +no_defs",
  },
  {
    label: "TM75 - EPSG:4300",
    value:
      "+proj=longlat +ellps=mod_airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +no_defs",
  },
  {
    label: "TM75 / Irish Grid - EPSG:29903",
    value:
      "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1.000035 +x_0=200000 +y_0=250000 +ellps=mod_airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +units=m +no_defs",
  },
  {
    label: "Tokyo - EPSG:4301",
    value:
      "+proj=longlat +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS I - EPSG:30161",
    value:
      "+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS II - EPSG:30162",
    value:
      "+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS III - EPSG:30163",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS IV - EPSG:30164",
    value:
      "+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS IX - EPSG:30169",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS V - EPSG:30165",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS VI - EPSG:30166",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS VII - EPSG:30167",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS VIII - EPSG:30168",
    value:
      "+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS X - EPSG:30170",
    value:
      "+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS XI - EPSG:30171",
    value:
      "+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS XII - EPSG:30172",
    value:
      "+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS XIII - EPSG:30173",
    value:
      "+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS XIV - EPSG:30174",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS XIX - EPSG:30179",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS XV - EPSG:30175",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS XVI - EPSG:30176",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS XVII - EPSG:30177",
    value:
      "+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / Japan Plane Rectangular CS XVIII - EPSG:30178",
    value:
      "+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / UTM zone 51N - EPSG:3092",
    value:
      "+proj=utm +zone=51 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / UTM zone 52N - EPSG:3093",
    value:
      "+proj=utm +zone=52 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / UTM zone 53N - EPSG:3094",
    value:
      "+proj=utm +zone=53 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / UTM zone 54N - EPSG:3095",
    value:
      "+proj=utm +zone=54 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo / UTM zone 55N - EPSG:3096",
    value:
      "+proj=utm +zone=55 +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Tokyo + JSLD69 height - EPSG:7414",
    value:
      "+proj=longlat +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +vunits=m +no_defs",
  },
  {
    label: "Tokyo + JSLD72 height - EPSG:6700",
    value:
      "+proj=longlat +ellps=bessel +towgs84=-146.414,507.337,680.507,0,0,0,0 +vunits=m +no_defs",
  },
  {
    label: "Tokyo 1892 - EPSG:5132",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "Tokyo 1892 / Korea Central Belt - EPSG:5170",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Tokyo 1892 / Korea East Belt - EPSG:5171",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Tokyo 1892 / Korea East Sea Belt - EPSG:5172",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=131 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Tokyo 1892 / Korea West Belt - EPSG:5169",
    value:
      "+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs",
  },
  {
    label: "Trinidad 1903 - EPSG:4302",
    value:
      "+proj=longlat +a=6378293.645208759 +b=6356617.987679838 +towgs84=-61.702,284.488,472.052,0,0,0,0 +no_defs",
  },
  {
    label: "Trinidad 1903 / Trinidad Grid - EPSG:30200",
    value:
      "+proj=cass +lat_0=10.44166666666667 +lon_0=-61.33333333333334 +x_0=86501.46392051999 +y_0=65379.0134283 +a=6378293.645208759 +b=6356617.987679838 +towgs84=-61.702,284.488,472.052,0,0,0,0 +to_meter=0.201166195164 +no_defs",
  },
  {
    label: "Trinidad 1903 / Trinidad Grid (ftCla) - EPSG:2314",
    value:
      "+proj=cass +lat_0=10.44166666666667 +lon_0=-61.33333333333334 +x_0=86501.46392052001 +y_0=65379.0134283 +a=6378293.645208759 +b=6356617.987679838 +towgs84=-61.702,284.488,472.052,0,0,0,0 +to_meter=0.3047972654 +no_defs",
  },
  {
    label: "Tristan 1968 - EPSG:4734",
    value: "+proj=longlat +ellps=intl +towgs84=-632,438,-609,0,0,0,0 +no_defs",
  },
  {
    label: "TUREF - EPSG:5250",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "TUREF - EPSG:5252",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "TUREF / 3-degree Gauss-Kruger zone 10 - EPSG:5270",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=10500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / 3-degree Gauss-Kruger zone 11 - EPSG:5271",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=11500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / 3-degree Gauss-Kruger zone 12 - EPSG:5272",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=12500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / 3-degree Gauss-Kruger zone 13 - EPSG:5273",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=13500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / 3-degree Gauss-Kruger zone 14 - EPSG:5274",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=14500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / 3-degree Gauss-Kruger zone 15 - EPSG:5275",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=15500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / 3-degree Gauss-Kruger zone 9 - EPSG:5269",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=9500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / LAEA Europe - EPSG:5636",
    value:
      "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / LCC Europe - EPSG:5637",
    value:
      "+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / TM27 - EPSG:5253",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / TM30 - EPSG:5254",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / TM33 - EPSG:5255",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / TM36 - EPSG:5256",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / TM39 - EPSG:5257",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / TM42 - EPSG:5258",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TUREF / TM45 - EPSG:5259",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TWD67 - EPSG:3821",
    value: "+proj=longlat +ellps=aust_SA +no_defs",
  },
  {
    label: "TWD67 / TM2 zone 119 - EPSG:3827",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=119 +k=0.9999 +x_0=250000 +y_0=0 +ellps=aust_SA +units=m +no_defs",
  },
  {
    label: "TWD67 / TM2 zone 121 - EPSG:3828",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=aust_SA +units=m +no_defs",
  },
  {
    label: "TWD97 - EPSG:3822",
    value: "+proj=geocent +ellps=GRS80 +units=m +no_defs",
  },
  {
    label: "TWD97 - EPSG:3824",
    value: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "TWD97 / TM2 zone 119 - EPSG:3825",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=119 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "TWD97 / TM2 zone 121 - EPSG:3826",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 - EPSG:5558",
    value: "+proj=geocent +ellps=krass +units=m +no_defs",
  },
  {
    label: "UCS-2000 - EPSG:5561",
    value:
      "+proj=longlat +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger CM 21E (deprecated) - EPSG:5577",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger CM 24E (deprecated) - EPSG:5578",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger CM 27E (deprecated) - EPSG:5579",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger CM 30E (deprecated) - EPSG:5580",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger CM 33E (deprecated) - EPSG:5581",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger CM 36E (deprecated) - EPSG:5582",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger CM 39E (deprecated) - EPSG:5583",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger zone 10 (deprecated) - EPSG:5573",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger zone 11 (deprecated) - EPSG:5574",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=11500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger zone 12 (deprecated) - EPSG:5575",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=12500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger zone 13 (deprecated) - EPSG:5576",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger zone 7 (deprecated) - EPSG:5570",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger zone 8 (deprecated) - EPSG:5571",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / 3-degree Gauss-Kruger zone 9 (deprecated) - EPSG:5572",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Gauss-Kruger CM 21E - EPSG:5566",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Gauss-Kruger CM 27E - EPSG:5567",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Gauss-Kruger CM 33E - EPSG:5568",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Gauss-Kruger CM 39E - EPSG:5569",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Gauss-Kruger zone 4 - EPSG:5562",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Gauss-Kruger zone 5 - EPSG:5563",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Gauss-Kruger zone 6 - EPSG:5564",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Gauss-Kruger zone 7 - EPSG:5565",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Ukraine TM zone 10 - EPSG:6384",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=300000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Ukraine TM zone 11 - EPSG:6385",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=300000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Ukraine TM zone 12 - EPSG:6386",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=300000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Ukraine TM zone 13 - EPSG:6387",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=300000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Ukraine TM zone 7 - EPSG:6381",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=300000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Ukraine TM zone 8 - EPSG:6382",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=300000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "UCS-2000 / Ukraine TM zone 9 - EPSG:6383",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=300000 +y_0=0 +ellps=krass +towgs84=25,-141,-78.5,0,0.35,0.736,0 +units=m +no_defs",
  },
  {
    label: "Unknown datum based upon the Airy 1830 ellipsoid - EPSG:4001",
    value: "+proj=longlat +ellps=airy +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Airy Modified 1849 ellipsoid - EPSG:4002",
    value: "+proj=longlat +ellps=mod_airy +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Australian National Spheroid - EPSG:4003",
    value: "+proj=longlat +ellps=aust_SA +no_defs",
  },
  {
    label: "Unknown datum based upon the Authalic Sphere - EPSG:4035",
    value: "+proj=longlat +a=6371000 +b=6371000 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Average Terrestrial System 1977 ellipsoid - EPSG:4041",
    value: "+proj=longlat +a=6378135 +b=6356750.304921594 +no_defs",
  },
  {
    label: "Unknown datum based upon the Bessel 1841 ellipsoid - EPSG:4004",
    value: "+proj=longlat +ellps=bessel +no_defs",
  },
  {
    label: "Unknown datum based upon the Bessel Modified ellipsoid - EPSG:4005",
    value: "+proj=longlat +a=6377492.018 +b=6356173.508712696 +no_defs",
  },
  {
    label: "Unknown datum based upon the Bessel Namibia ellipsoid - EPSG:4006",
    value: "+proj=longlat +ellps=bess_nam +no_defs",
  },
  {
    label: "Unknown datum based upon the Clarke 1858 ellipsoid - EPSG:4007",
    value: "+proj=longlat +a=6378293.645208759 +b=6356617.987679838 +no_defs",
  },
  {
    label: "Unknown datum based upon the Clarke 1866 ellipsoid - EPSG:4008",
    value: "+proj=longlat +ellps=clrk66 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Clarke 1866 Michigan ellipsoid - EPSG:4009",
    value: "+proj=longlat +a=6378450.047548896 +b=6356826.621488444 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Clarke 1880 (Arc) ellipsoid - EPSG:4013",
    value: "+proj=longlat +a=6378249.145 +b=6356514.966398753 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Clarke 1880 (Benoit) ellipsoid - EPSG:4010",
    value: "+proj=longlat +a=6378300.789 +b=6356566.435 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Clarke 1880 (IGN) ellipsoid - EPSG:4011",
    value: "+proj=longlat +a=6378249.2 +b=6356515 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Clarke 1880 (RGS) ellipsoid - EPSG:4012",
    value: "+proj=longlat +ellps=clrk80 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Clarke 1880 (SGA 1922) ellipsoid - EPSG:4014",
    value: "+proj=longlat +a=6378249.2 +b=6356514.996941779 +no_defs",
  },
  {
    label: "Unknown datum based upon the Clarke 1880 ellipsoid - EPSG:4034",
    value: "+proj=longlat +a=6378249.144808011 +b=6356514.966204134 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Everest (1830 Definition) ellipsoid - EPSG:4042",
    value: "+proj=longlat +a=6377299.36559538 +b=6356098.359005156 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Everest 1830 (1937 Adjustment) ellipsoid - EPSG:4015",
    value: "+proj=longlat +a=6377276.345 +b=6356075.41314024 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Everest 1830 (1962 Definition) ellipsoid - EPSG:4044",
    value: "+proj=longlat +a=6377301.243 +b=6356100.230165384 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Everest 1830 (1967 Definition) ellipsoid - EPSG:4016",
    value: "+proj=longlat +ellps=evrstSS +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Everest 1830 (1975 Definition) ellipsoid - EPSG:4045",
    value: "+proj=longlat +a=6377299.151 +b=6356098.145120132 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Everest 1830 Modified ellipsoid - EPSG:4018",
    value: "+proj=longlat +a=6377304.063 +b=6356103.038993155 +no_defs",
  },
  {
    label: "Unknown datum based upon the GEM 10C ellipsoid - EPSG:4031",
    value: "+proj=longlat +ellps=WGS84 +no_defs",
  },
  {
    label: "Unknown datum based upon the GRS 1967 ellipsoid - EPSG:4036",
    value: "+proj=longlat +ellps=GRS67 +no_defs",
  },
  {
    label: "Unknown datum based upon the GRS 1980 ellipsoid - EPSG:4019",
    value: "+proj=longlat +ellps=GRS80 +no_defs",
  },
  {
    label: "Unknown datum based upon the Helmert 1906 ellipsoid - EPSG:4020",
    value: "+proj=longlat +ellps=helmert +no_defs",
  },
  {
    label:
      "Unknown datum based upon the Indonesian National Spheroid - EPSG:4021",
    value: "+proj=longlat +a=6378160 +b=6356774.50408554 +no_defs",
  },
  {
    label:
      "Unknown datum based upon the International 1924 ellipsoid - EPSG:4022",
    value: "+proj=longlat +ellps=intl +no_defs",
  },
  {
    label: "Unknown datum based upon the Krassowsky 1940 ellipsoid - EPSG:4024",
    value: "+proj=longlat +ellps=krass +no_defs",
  },
  {
    label: "Unknown datum based upon the NWL 9D ellipsoid - EPSG:4025",
    value: "+proj=longlat +ellps=WGS66 +no_defs",
  },
  {
    label: "Unknown datum based upon the OSU86F ellipsoid - EPSG:4032",
    value: "+proj=longlat +a=6378136.2 +b=6356751.516927429 +no_defs",
  },
  {
    label: "Unknown datum based upon the OSU91A ellipsoid - EPSG:4033",
    value: "+proj=longlat +a=6378136.3 +b=6356751.616592146 +no_defs",
  },
  {
    label: "Unknown datum based upon the Plessis 1817 ellipsoid - EPSG:4027",
    value: "+proj=longlat +a=6376523 +b=6355862.933255573 +no_defs",
  },
  {
    label: "Unknown datum based upon the Struve 1860 ellipsoid - EPSG:4028",
    value: "+proj=longlat +a=6378298.3 +b=6356657.142669561 +no_defs",
  },
  {
    label: "Unknown datum based upon the War Office ellipsoid - EPSG:4029",
    value: "+proj=longlat +a=6378300 +b=6356751.689189189 +no_defs",
  },
  {
    label: "Unknown datum based upon the WGS 72 ellipsoid - EPSG:4043",
    value: "+proj=longlat +ellps=WGS72 +no_defs",
  },
  {
    label: "Unknown datum based upon the WGS 84 ellipsoid - EPSG:4030",
    value: "+proj=longlat +ellps=WGS84 +no_defs",
  },
  {
    label:
      "Unspecified datum based upon the Clarke 1866 Authalic Sphere - EPSG:4052",
    value: "+proj=longlat +a=6370997 +b=6370997 +no_defs",
  },
  {
    label:
      "Unspecified datum based upon the GRS 1980 Authalic Sphere - EPSG:4047",
    value: "+proj=longlat +a=6371007 +b=6371007 +no_defs",
  },
  {
    label: "Unspecified datum based upon the Hughes 1980 ellipsoid - EPSG:4054",
    value: "+proj=longlat +a=6378273 +b=6356889.449 +no_defs",
  },
  {
    label:
      "Unspecified datum based upon the International 1924 Authalic Sphere - EPSG:4053",
    value: "+proj=longlat +a=6371228 +b=6371228 +no_defs",
  },
  {
    label: "US National Atlas Equal Area - EPSG:2163",
    value:
      "+proj=laea +lat_0=45 +lon_0=-100 +x_0=0 +y_0=0 +a=6370997 +b=6370997 +units=m +no_defs",
  },
  {
    label: "Vanua Levu 1915 - EPSG:4748",
    value:
      "+proj=longlat +a=6378306.3696 +b=6356571.996 +towgs84=51,391,-36,0,0,0,0 +no_defs",
  },
  {
    label: "Vientiane 1982 - EPSG:4676",
    value: "+proj=longlat +ellps=krass +no_defs",
  },
  {
    label: "Viti Levu 1912 - EPSG:4752",
    value:
      "+proj=longlat +a=6378306.3696 +b=6356571.996 +towgs84=51,391,-36,0,0,0,0 +no_defs",
  },
  {
    label: "Viti Levu 1912 / Viti Levu Grid - EPSG:3140",
    value:
      "+proj=cass +lat_0=-18 +lon_0=178 +x_0=109435.392 +y_0=141622.272 +a=6378306.3696 +b=6356571.996 +towgs84=51,391,-36,0,0,0,0 +to_meter=0.201168 +no_defs",
  },
  {
    label: "Viti Levu 1916 - EPSG:4731",
    value: "+proj=longlat +ellps=clrk80 +towgs84=51,391,-36,0,0,0,0 +no_defs",
  },
  {
    label: "VN-2000 - EPSG:4756",
    value:
      "+proj=longlat +ellps=WGS84 +towgs84=-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188 +no_defs",
  },
  {
    label: "VN-2000 / UTM zone 48N - EPSG:3405",
    value:
      "+proj=utm +zone=48 +ellps=WGS84 +towgs84=-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188 +units=m +no_defs",
  },
  {
    label: "VN-2000 / UTM zone 49N - EPSG:3406",
    value:
      "+proj=utm +zone=49 +ellps=WGS84 +towgs84=-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188 +units=m +no_defs",
  },
  {
    label: "Voirol 1875 - EPSG:4304",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-73,-247,227,0,0,0,0 +no_defs",
  },
  {
    label: "Voirol 1875 (Paris) - EPSG:4811",
    value:
      "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-73,-247,227,0,0,0,0 +pm=paris +no_defs",
  },
  {
    label: "Voirol 1875 / Nord Algerie (ancienne) - EPSG:30491",
    value:
      "+proj=lcc +lat_1=36 +lat_0=36 +lon_0=2.7 +k_0=0.999625544 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=-73,-247,227,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Voirol 1875 / Sud Algerie (ancienne) - EPSG:30492",
    value:
      "+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=2.7 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=-73,-247,227,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Voirol 1879 - EPSG:4671",
    value: "+proj=longlat +a=6378249.2 +b=6356515 +no_defs",
  },
  {
    label: "Voirol 1879 (Paris) - EPSG:4821",
    value: "+proj=longlat +a=6378249.2 +b=6356515 +pm=paris +no_defs",
  },
  {
    label: "Voirol 1879 / Nord Algerie (ancienne) - EPSG:30493",
    value:
      "+proj=lcc +lat_1=36 +lat_0=36 +lon_0=2.7 +k_0=0.999625544 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +units=m +no_defs",
  },
  {
    label: "Voirol 1879 / Sud Algerie (ancienne) - EPSG:30494",
    value:
      "+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=2.7 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +units=m +no_defs",
  },
  {
    label: "Wake Island 1952 - EPSG:4733",
    value: "+proj=longlat +ellps=intl +towgs84=276,-57,149,0,0,0,0 +no_defs",
  },
  {
    label: "WGS 66 - EPSG:4760",
    value: "+proj=longlat +ellps=WGS66 +no_defs",
  },
  {
    label: "WGS 66 - EPSG:4890",
    value: "+proj=geocent +ellps=WGS66 +units=m +no_defs",
  },
  {
    label: "WGS 72 - EPSG:4322",
    value:
      "+proj=longlat +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +no_defs",
  },
  {
    label: "WGS 72 - EPSG:4984",
    value: "+proj=geocent +ellps=WGS72 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 10N - EPSG:32210",
    value:
      "+proj=utm +zone=10 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 10S - EPSG:32310",
    value:
      "+proj=utm +zone=10 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 11N - EPSG:32211",
    value:
      "+proj=utm +zone=11 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 11S - EPSG:32311",
    value:
      "+proj=utm +zone=11 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 12N - EPSG:32212",
    value:
      "+proj=utm +zone=12 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 12S - EPSG:32312",
    value:
      "+proj=utm +zone=12 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 13N - EPSG:32213",
    value:
      "+proj=utm +zone=13 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 13S - EPSG:32313",
    value:
      "+proj=utm +zone=13 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 14N - EPSG:32214",
    value:
      "+proj=utm +zone=14 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 14S - EPSG:32314",
    value:
      "+proj=utm +zone=14 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 15N - EPSG:32215",
    value:
      "+proj=utm +zone=15 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 15S - EPSG:32315",
    value:
      "+proj=utm +zone=15 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 16N - EPSG:32216",
    value:
      "+proj=utm +zone=16 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 16S - EPSG:32316",
    value:
      "+proj=utm +zone=16 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 17N - EPSG:32217",
    value:
      "+proj=utm +zone=17 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 17S - EPSG:32317",
    value:
      "+proj=utm +zone=17 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 18N - EPSG:32218",
    value:
      "+proj=utm +zone=18 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 18S - EPSG:32318",
    value:
      "+proj=utm +zone=18 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 19N - EPSG:32219",
    value:
      "+proj=utm +zone=19 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 19S - EPSG:32319",
    value:
      "+proj=utm +zone=19 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 1N - EPSG:32201",
    value:
      "+proj=utm +zone=1 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 1S - EPSG:32301",
    value:
      "+proj=utm +zone=1 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 20N - EPSG:32220",
    value:
      "+proj=utm +zone=20 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 20S - EPSG:32320",
    value:
      "+proj=utm +zone=20 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 21N - EPSG:32221",
    value:
      "+proj=utm +zone=21 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 21S - EPSG:32321",
    value:
      "+proj=utm +zone=21 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 22N - EPSG:32222",
    value:
      "+proj=utm +zone=22 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 22S - EPSG:32322",
    value:
      "+proj=utm +zone=22 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 23N - EPSG:32223",
    value:
      "+proj=utm +zone=23 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 23S - EPSG:32323",
    value:
      "+proj=utm +zone=23 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 24N - EPSG:32224",
    value:
      "+proj=utm +zone=24 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 24S - EPSG:32324",
    value:
      "+proj=utm +zone=24 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 25N - EPSG:32225",
    value:
      "+proj=utm +zone=25 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 25S - EPSG:32325",
    value:
      "+proj=utm +zone=25 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 26N - EPSG:32226",
    value:
      "+proj=utm +zone=26 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 26S - EPSG:32326",
    value:
      "+proj=utm +zone=26 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 27N - EPSG:32227",
    value:
      "+proj=utm +zone=27 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 27S - EPSG:32327",
    value:
      "+proj=utm +zone=27 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 28N - EPSG:32228",
    value:
      "+proj=utm +zone=28 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 28S - EPSG:32328",
    value:
      "+proj=utm +zone=28 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 29N - EPSG:32229",
    value:
      "+proj=utm +zone=29 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 29S - EPSG:32329",
    value:
      "+proj=utm +zone=29 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 2N - EPSG:32202",
    value:
      "+proj=utm +zone=2 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 2S - EPSG:32302",
    value:
      "+proj=utm +zone=2 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 30N - EPSG:32230",
    value:
      "+proj=utm +zone=30 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 30S - EPSG:32330",
    value:
      "+proj=utm +zone=30 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 31N - EPSG:32231",
    value:
      "+proj=utm +zone=31 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 31S - EPSG:32331",
    value:
      "+proj=utm +zone=31 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 32N - EPSG:32232",
    value:
      "+proj=utm +zone=32 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 32S - EPSG:32332",
    value:
      "+proj=utm +zone=32 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 33N - EPSG:32233",
    value:
      "+proj=utm +zone=33 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 33S - EPSG:32333",
    value:
      "+proj=utm +zone=33 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 34N - EPSG:32234",
    value:
      "+proj=utm +zone=34 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 34S - EPSG:32334",
    value:
      "+proj=utm +zone=34 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 35N - EPSG:32235",
    value:
      "+proj=utm +zone=35 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 35S - EPSG:32335",
    value:
      "+proj=utm +zone=35 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 36N - EPSG:32236",
    value:
      "+proj=utm +zone=36 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 36S - EPSG:32336",
    value:
      "+proj=utm +zone=36 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 37N - EPSG:32237",
    value:
      "+proj=utm +zone=37 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 37S - EPSG:32337",
    value:
      "+proj=utm +zone=37 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 38N - EPSG:32238",
    value:
      "+proj=utm +zone=38 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 38S - EPSG:32338",
    value:
      "+proj=utm +zone=38 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 39N - EPSG:32239",
    value:
      "+proj=utm +zone=39 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 39S - EPSG:32339",
    value:
      "+proj=utm +zone=39 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 3N - EPSG:32203",
    value:
      "+proj=utm +zone=3 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 3S - EPSG:32303",
    value:
      "+proj=utm +zone=3 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 40N - EPSG:32240",
    value:
      "+proj=utm +zone=40 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 40S - EPSG:32340",
    value:
      "+proj=utm +zone=40 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 41N - EPSG:32241",
    value:
      "+proj=utm +zone=41 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 41S - EPSG:32341",
    value:
      "+proj=utm +zone=41 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 42N - EPSG:32242",
    value:
      "+proj=utm +zone=42 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 42S - EPSG:32342",
    value:
      "+proj=utm +zone=42 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 43N - EPSG:32243",
    value:
      "+proj=utm +zone=43 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 43S - EPSG:32343",
    value:
      "+proj=utm +zone=43 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 44N - EPSG:32244",
    value:
      "+proj=utm +zone=44 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 44S - EPSG:32344",
    value:
      "+proj=utm +zone=44 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 45N - EPSG:32245",
    value:
      "+proj=utm +zone=45 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 45S - EPSG:32345",
    value:
      "+proj=utm +zone=45 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 46N - EPSG:32246",
    value:
      "+proj=utm +zone=46 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 46S - EPSG:32346",
    value:
      "+proj=utm +zone=46 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 47N - EPSG:32247",
    value:
      "+proj=utm +zone=47 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 47S - EPSG:32347",
    value:
      "+proj=utm +zone=47 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 48N - EPSG:32248",
    value:
      "+proj=utm +zone=48 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 48S - EPSG:32348",
    value:
      "+proj=utm +zone=48 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 49N - EPSG:32249",
    value:
      "+proj=utm +zone=49 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 49S - EPSG:32349",
    value:
      "+proj=utm +zone=49 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 4N - EPSG:32204",
    value:
      "+proj=utm +zone=4 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 4S - EPSG:32304",
    value:
      "+proj=utm +zone=4 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 50N - EPSG:32250",
    value:
      "+proj=utm +zone=50 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 50S - EPSG:32350",
    value:
      "+proj=utm +zone=50 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 51N - EPSG:32251",
    value:
      "+proj=utm +zone=51 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 51S - EPSG:32351",
    value:
      "+proj=utm +zone=51 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 52N - EPSG:32252",
    value:
      "+proj=utm +zone=52 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 52S - EPSG:32352",
    value:
      "+proj=utm +zone=52 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 53N - EPSG:32253",
    value:
      "+proj=utm +zone=53 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 53S - EPSG:32353",
    value:
      "+proj=utm +zone=53 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 54N - EPSG:32254",
    value:
      "+proj=utm +zone=54 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 54S - EPSG:32354",
    value:
      "+proj=utm +zone=54 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 55N - EPSG:32255",
    value:
      "+proj=utm +zone=55 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 55S - EPSG:32355",
    value:
      "+proj=utm +zone=55 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 56N - EPSG:32256",
    value:
      "+proj=utm +zone=56 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 56S - EPSG:32356",
    value:
      "+proj=utm +zone=56 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 57N - EPSG:32257",
    value:
      "+proj=utm +zone=57 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 57S - EPSG:32357",
    value:
      "+proj=utm +zone=57 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 58N - EPSG:32258",
    value:
      "+proj=utm +zone=58 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 58S - EPSG:32358",
    value:
      "+proj=utm +zone=58 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 59N - EPSG:32259",
    value:
      "+proj=utm +zone=59 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 59S - EPSG:32359",
    value:
      "+proj=utm +zone=59 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 5N - EPSG:32205",
    value:
      "+proj=utm +zone=5 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 5S - EPSG:32305",
    value:
      "+proj=utm +zone=5 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 60N - EPSG:32260",
    value:
      "+proj=utm +zone=60 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 60S - EPSG:32360",
    value:
      "+proj=utm +zone=60 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 6N - EPSG:32206",
    value:
      "+proj=utm +zone=6 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 6S - EPSG:32306",
    value:
      "+proj=utm +zone=6 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 7N - EPSG:32207",
    value:
      "+proj=utm +zone=7 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 7S - EPSG:32307",
    value:
      "+proj=utm +zone=7 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 8N - EPSG:32208",
    value:
      "+proj=utm +zone=8 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 8S - EPSG:32308",
    value:
      "+proj=utm +zone=8 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 9N - EPSG:32209",
    value:
      "+proj=utm +zone=9 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72 / UTM zone 9S - EPSG:32309",
    value:
      "+proj=utm +zone=9 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs",
  },
  {
    label: "WGS 72BE - EPSG:4324",
    value:
      "+proj=longlat +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +no_defs",
  },
  {
    label: "WGS 72BE - EPSG:4986",
    value: "+proj=geocent +ellps=WGS72 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / South China Sea Lambert - EPSG:3415",
    value:
      "+proj=lcc +lat_1=18 +lat_2=24 +lat_0=21 +lon_0=114 +x_0=500000 +y_0=500000 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / TM 106 NE - EPSG:2094",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=106 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 10N - EPSG:32410",
    value:
      "+proj=utm +zone=10 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 10S - EPSG:32510",
    value:
      "+proj=utm +zone=10 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 11N - EPSG:32411",
    value:
      "+proj=utm +zone=11 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 11S - EPSG:32511",
    value:
      "+proj=utm +zone=11 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 12N - EPSG:32412",
    value:
      "+proj=utm +zone=12 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 12S - EPSG:32512",
    value:
      "+proj=utm +zone=12 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 13N - EPSG:32413",
    value:
      "+proj=utm +zone=13 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 13S - EPSG:32513",
    value:
      "+proj=utm +zone=13 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 14N - EPSG:32414",
    value:
      "+proj=utm +zone=14 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 14S - EPSG:32514",
    value:
      "+proj=utm +zone=14 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 15N - EPSG:32415",
    value:
      "+proj=utm +zone=15 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 15S - EPSG:32515",
    value:
      "+proj=utm +zone=15 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 16N - EPSG:32416",
    value:
      "+proj=utm +zone=16 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 16S - EPSG:32516",
    value:
      "+proj=utm +zone=16 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 17N - EPSG:32417",
    value:
      "+proj=utm +zone=17 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 17S - EPSG:32517",
    value:
      "+proj=utm +zone=17 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 18N - EPSG:32418",
    value:
      "+proj=utm +zone=18 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 18S - EPSG:32518",
    value:
      "+proj=utm +zone=18 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 19N - EPSG:32419",
    value:
      "+proj=utm +zone=19 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 19S - EPSG:32519",
    value:
      "+proj=utm +zone=19 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 1N - EPSG:32401",
    value:
      "+proj=utm +zone=1 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 1S - EPSG:32501",
    value:
      "+proj=utm +zone=1 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 20N - EPSG:32420",
    value:
      "+proj=utm +zone=20 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 20S - EPSG:32520",
    value:
      "+proj=utm +zone=20 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 21N - EPSG:32421",
    value:
      "+proj=utm +zone=21 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 21S - EPSG:32521",
    value:
      "+proj=utm +zone=21 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 22N - EPSG:32422",
    value:
      "+proj=utm +zone=22 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 22S - EPSG:32522",
    value:
      "+proj=utm +zone=22 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 23N - EPSG:32423",
    value:
      "+proj=utm +zone=23 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 23S - EPSG:32523",
    value:
      "+proj=utm +zone=23 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 24N - EPSG:32424",
    value:
      "+proj=utm +zone=24 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 24S - EPSG:32524",
    value:
      "+proj=utm +zone=24 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 25N - EPSG:32425",
    value:
      "+proj=utm +zone=25 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 25S - EPSG:32525",
    value:
      "+proj=utm +zone=25 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 26N - EPSG:32426",
    value:
      "+proj=utm +zone=26 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 26S - EPSG:32526",
    value:
      "+proj=utm +zone=26 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 27N - EPSG:32427",
    value:
      "+proj=utm +zone=27 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 27S - EPSG:32527",
    value:
      "+proj=utm +zone=27 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 28N - EPSG:32428",
    value:
      "+proj=utm +zone=28 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 28S - EPSG:32528",
    value:
      "+proj=utm +zone=28 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 29N - EPSG:32429",
    value:
      "+proj=utm +zone=29 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 29S - EPSG:32529",
    value:
      "+proj=utm +zone=29 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 2N - EPSG:32402",
    value:
      "+proj=utm +zone=2 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 2S - EPSG:32502",
    value:
      "+proj=utm +zone=2 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 30N - EPSG:32430",
    value:
      "+proj=utm +zone=30 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 30S - EPSG:32530",
    value:
      "+proj=utm +zone=30 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 31N - EPSG:32431",
    value:
      "+proj=utm +zone=31 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 31S - EPSG:32531",
    value:
      "+proj=utm +zone=31 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 32N - EPSG:32432",
    value:
      "+proj=utm +zone=32 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 32S - EPSG:32532",
    value:
      "+proj=utm +zone=32 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 33N - EPSG:32433",
    value:
      "+proj=utm +zone=33 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 33S - EPSG:32533",
    value:
      "+proj=utm +zone=33 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 34N - EPSG:32434",
    value:
      "+proj=utm +zone=34 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 34S - EPSG:32534",
    value:
      "+proj=utm +zone=34 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 35N - EPSG:32435",
    value:
      "+proj=utm +zone=35 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 35S - EPSG:32535",
    value:
      "+proj=utm +zone=35 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 36N - EPSG:32436",
    value:
      "+proj=utm +zone=36 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 36S - EPSG:32536",
    value:
      "+proj=utm +zone=36 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 37N - EPSG:32437",
    value:
      "+proj=utm +zone=37 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 37S - EPSG:32537",
    value:
      "+proj=utm +zone=37 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 38N - EPSG:32438",
    value:
      "+proj=utm +zone=38 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 38S - EPSG:32538",
    value:
      "+proj=utm +zone=38 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 39N - EPSG:32439",
    value:
      "+proj=utm +zone=39 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 39S - EPSG:32539",
    value:
      "+proj=utm +zone=39 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 3N - EPSG:32403",
    value:
      "+proj=utm +zone=3 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 3S - EPSG:32503",
    value:
      "+proj=utm +zone=3 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 40N - EPSG:32440",
    value:
      "+proj=utm +zone=40 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 40S - EPSG:32540",
    value:
      "+proj=utm +zone=40 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 41N - EPSG:32441",
    value:
      "+proj=utm +zone=41 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 41S - EPSG:32541",
    value:
      "+proj=utm +zone=41 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 42N - EPSG:32442",
    value:
      "+proj=utm +zone=42 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 42S - EPSG:32542",
    value:
      "+proj=utm +zone=42 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 43N - EPSG:32443",
    value:
      "+proj=utm +zone=43 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 43S - EPSG:32543",
    value:
      "+proj=utm +zone=43 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 44N - EPSG:32444",
    value:
      "+proj=utm +zone=44 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 44S - EPSG:32544",
    value:
      "+proj=utm +zone=44 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 45N - EPSG:32445",
    value:
      "+proj=utm +zone=45 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 45S - EPSG:32545",
    value:
      "+proj=utm +zone=45 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 46N - EPSG:32446",
    value:
      "+proj=utm +zone=46 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 46S - EPSG:32546",
    value:
      "+proj=utm +zone=46 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 47N - EPSG:32447",
    value:
      "+proj=utm +zone=47 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 47S - EPSG:32547",
    value:
      "+proj=utm +zone=47 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 48N - EPSG:32448",
    value:
      "+proj=utm +zone=48 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 48S - EPSG:32548",
    value:
      "+proj=utm +zone=48 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 49N - EPSG:32449",
    value:
      "+proj=utm +zone=49 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 49S - EPSG:32549",
    value:
      "+proj=utm +zone=49 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 4N - EPSG:32404",
    value:
      "+proj=utm +zone=4 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 4S - EPSG:32504",
    value:
      "+proj=utm +zone=4 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 50N - EPSG:32450",
    value:
      "+proj=utm +zone=50 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 50S - EPSG:32550",
    value:
      "+proj=utm +zone=50 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 51N - EPSG:32451",
    value:
      "+proj=utm +zone=51 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 51S - EPSG:32551",
    value:
      "+proj=utm +zone=51 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 52N - EPSG:32452",
    value:
      "+proj=utm +zone=52 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 52S - EPSG:32552",
    value:
      "+proj=utm +zone=52 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 53N - EPSG:32453",
    value:
      "+proj=utm +zone=53 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 53S - EPSG:32553",
    value:
      "+proj=utm +zone=53 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 54N - EPSG:32454",
    value:
      "+proj=utm +zone=54 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 54S - EPSG:32554",
    value:
      "+proj=utm +zone=54 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 55N - EPSG:32455",
    value:
      "+proj=utm +zone=55 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 55S - EPSG:32555",
    value:
      "+proj=utm +zone=55 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 56N - EPSG:32456",
    value:
      "+proj=utm +zone=56 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 56S - EPSG:32556",
    value:
      "+proj=utm +zone=56 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 57N - EPSG:32457",
    value:
      "+proj=utm +zone=57 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 57S - EPSG:32557",
    value:
      "+proj=utm +zone=57 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 58N - EPSG:32458",
    value:
      "+proj=utm +zone=58 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 58S - EPSG:32558",
    value:
      "+proj=utm +zone=58 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 59N - EPSG:32459",
    value:
      "+proj=utm +zone=59 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 59S - EPSG:32559",
    value:
      "+proj=utm +zone=59 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 5N - EPSG:32405",
    value:
      "+proj=utm +zone=5 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 5S - EPSG:32505",
    value:
      "+proj=utm +zone=5 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 60N - EPSG:32460",
    value:
      "+proj=utm +zone=60 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 60S - EPSG:32560",
    value:
      "+proj=utm +zone=60 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 6N - EPSG:32406",
    value:
      "+proj=utm +zone=6 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 6S - EPSG:32506",
    value:
      "+proj=utm +zone=6 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 7N - EPSG:32407",
    value:
      "+proj=utm +zone=7 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 7S - EPSG:32507",
    value:
      "+proj=utm +zone=7 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 8N - EPSG:32408",
    value:
      "+proj=utm +zone=8 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 8S - EPSG:32508",
    value:
      "+proj=utm +zone=8 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 9N - EPSG:32409",
    value:
      "+proj=utm +zone=9 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 72BE / UTM zone 9S - EPSG:32509",
    value:
      "+proj=utm +zone=9 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs",
  },
  {
    label: "WGS 84 - EPSG:4326",
    value: "+proj=longlat +datum=WGS84 +no_defs",
  },
  {
    label: "WGS 84 - EPSG:4978",
    value: "+proj=geocent +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 (geocentric) - EPSG:4328",
    value: "+proj=geocent +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Antarctic Polar Stereographic - EPSG:3031",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Arctic Polar Stereographic - EPSG:3995",
    value:
      "+proj=stere +lat_0=90 +lat_ts=71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Australian Antarctic Lambert - EPSG:3033",
    value:
      "+proj=lcc +lat_1=-68.5 +lat_2=-74.5 +lat_0=-50 +lon_0=70 +x_0=6000000 +y_0=6000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Australian Antarctic Polar Stereographic - EPSG:3032",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=70 +k=1 +x_0=6000000 +y_0=6000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Australian Centre for Remote Sensing Lambert - EPSG:4462",
    value:
      "+proj=lcc +lat_1=-18 +lat_2=-36 +lat_0=-27 +lon_0=132 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / BLM 14N (ftUS) - EPSG:32664",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-99 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=WGS84 +units=us-ft +no_defs",
  },
  {
    label: "WGS 84 / BLM 15N (ftUS) - EPSG:32665",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=WGS84 +units=us-ft +no_defs",
  },
  {
    label: "WGS 84 / BLM 16N (ftUS) - EPSG:32666",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=WGS84 +units=us-ft +no_defs",
  },
  {
    label: "WGS 84 / BLM 17N (ftUS) - EPSG:32667",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=WGS84 +units=us-ft +no_defs",
  },
  {
    label: "WGS 84 / Cape Verde National - EPSG:4826",
    value:
      "+proj=lcc +lat_1=15 +lat_2=16.66666666666667 +lat_0=15.83333333333333 +lon_0=-24 +x_0=161587.83 +y_0=128511.202 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / CIG92 - EPSG:6720",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105.625 +k=1.000024 +x_0=50000 +y_0=1300000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / CKIG92 - EPSG:6722",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96.875 +k=1 +x_0=50000 +y_0=1400000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Dubai Local TM - EPSG:3997",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=55.33333333333334 +k=1 +x_0=500000 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Alaska Polar Stereographic - EPSG:5936",
    value:
      "+proj=stere +lat_0=90 +lat_ts=90 +lon_0=-150 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone A1 - EPSG:5921",
    value:
      "+proj=lcc +lat_1=85 +lat_2=77 +lat_0=81.31722600000001 +lon_0=-111 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone A2 - EPSG:5922",
    value:
      "+proj=lcc +lat_1=85 +lat_2=77 +lat_0=81.31722600000001 +lon_0=-39 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone A3 - EPSG:5923",
    value:
      "+proj=lcc +lat_1=85 +lat_2=77 +lat_0=81.31722600000001 +lon_0=33 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone A4 - EPSG:5924",
    value:
      "+proj=lcc +lat_1=85 +lat_2=77 +lat_0=81.31722600000001 +lon_0=105 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone A5 - EPSG:5925",
    value:
      "+proj=lcc +lat_1=85 +lat_2=77 +lat_0=81.31722600000001 +lon_0=177 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone B1 - EPSG:5926",
    value:
      "+proj=lcc +lat_1=77 +lat_2=69 +lat_0=73.15574086111111 +lon_0=-111 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone B2 - EPSG:5927",
    value:
      "+proj=lcc +lat_1=77 +lat_2=69 +lat_0=73.15574086111111 +lon_0=-39 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone B3 - EPSG:5928",
    value:
      "+proj=lcc +lat_1=77 +lat_2=69 +lat_0=73.15574086111111 +lon_0=33 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone B4 - EPSG:5929",
    value:
      "+proj=lcc +lat_1=77 +lat_2=69 +lat_0=73.15574086111111 +lon_0=105 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone B5 - EPSG:5930",
    value:
      "+proj=lcc +lat_1=77 +lat_2=69 +lat_0=73.15574086111111 +lon_0=177 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone C1 - EPSG:5931",
    value:
      "+proj=lcc +lat_1=69 +lat_2=61 +lat_0=65.10127088888888 +lon_0=-111 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone C2 - EPSG:5932",
    value:
      "+proj=lcc +lat_1=69 +lat_2=61 +lat_0=65.10127088888888 +lon_0=-39 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone C3 - EPSG:5933",
    value:
      "+proj=lcc +lat_1=69 +lat_2=61 +lat_0=65.10127088888888 +lon_0=33 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone C4 - EPSG:5934",
    value:
      "+proj=lcc +lat_1=69 +lat_2=61 +lat_0=65.10127088888888 +lon_0=105 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic Regional zone C5 - EPSG:5935",
    value:
      "+proj=lcc +lat_1=69 +lat_2=61 +lat_0=65.10127088888888 +lon_0=177 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 1-21 - EPSG:6118",
    value:
      "+proj=lcc +lat_1=87 +lat_2=83.66666666666667 +lat_0=85.43711833333333 +lon_0=-150 +x_0=21500000 +y_0=1500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 1-27 - EPSG:6115",
    value:
      "+proj=lcc +lat_1=87 +lat_2=83.66666666666667 +lat_0=85.43711833333333 +lon_0=30 +x_0=27500000 +y_0=1500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 1-29 - EPSG:6116",
    value:
      "+proj=lcc +lat_1=87 +lat_2=83.66666666666667 +lat_0=85.43711833333333 +lon_0=90 +x_0=29500000 +y_0=1500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 1-31 - EPSG:6117",
    value:
      "+proj=lcc +lat_1=87 +lat_2=83.66666666666667 +lat_0=85.43711833333333 +lon_0=150 +x_0=31500000 +y_0=1500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 2-10 - EPSG:6120",
    value:
      "+proj=lcc +lat_1=83.66666666666667 +lat_2=80.33333333333333 +lat_0=82.05842488888888 +lon_0=166 +x_0=10500000 +y_0=2500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 2-12 - EPSG:6121",
    value:
      "+proj=lcc +lat_1=83.66666666666667 +lat_2=80.33333333333333 +lat_0=82.05842488888888 +lon_0=-154 +x_0=12500000 +y_0=2500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 2-24 - EPSG:6075",
    value:
      "+proj=lcc +lat_1=83.66666666666667 +lat_2=80.33333333333333 +lat_0=82.05842488888888 +lon_0=53 +x_0=24500000 +y_0=2500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 2-26 - EPSG:6076",
    value:
      "+proj=lcc +lat_1=83.66666666666667 +lat_2=80.33333333333333 +lat_0=82.05842488888888 +lon_0=93 +x_0=26500000 +y_0=2500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 2-28 - EPSG:6119",
    value:
      "+proj=lcc +lat_1=83.66666666666667 +lat_2=80.33333333333333 +lat_0=82.05842488888888 +lon_0=133 +x_0=28500000 +y_0=2500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 3-13 - EPSG:6077",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=52 +x_0=13500000 +y_0=3500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 3-15 - EPSG:6078",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=83 +x_0=15500000 +y_0=3500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 3-17 - EPSG:6079",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=114 +x_0=17500000 +y_0=3500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 3-19 - EPSG:6080",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=145 +x_0=19500000 +y_0=3500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 3-21 - EPSG:6122",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=176 +x_0=21500000 +y_0=3500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 3-23 - EPSG:6123",
    value:
      "+proj=lcc +lat_1=80.33333333333333 +lat_2=77 +lat_0=78.70733752777778 +lon_0=-153 +x_0=23500000 +y_0=3500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 4-12 - EPSG:6124",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=-155 +x_0=12500000 +y_0=4500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 4-30 - EPSG:6081",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=58 +x_0=30500000 +y_0=4500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 4-32 - EPSG:6082",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=82 +x_0=32500000 +y_0=4500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 4-34 - EPSG:6083",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=106 +x_0=34500000 +y_0=4500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 4-36 - EPSG:6084",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=130 +x_0=36500000 +y_0=4500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 4-38 - EPSG:6085",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=154 +x_0=38500000 +y_0=4500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 4-40 - EPSG:6086",
    value:
      "+proj=lcc +lat_1=77 +lat_2=73.66666666666667 +lat_0=75.36440330555556 +lon_0=179 +x_0=40500000 +y_0=4500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 5-15 - EPSG:6087",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=54 +x_0=15500000 +y_0=5500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 5-17 - EPSG:6088",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=74 +x_0=17500000 +y_0=5500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 5-19 - EPSG:6089",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=95 +x_0=19500000 +y_0=5500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 5-21 - EPSG:6090",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=116 +x_0=21500000 +y_0=5500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 5-23 - EPSG:6091",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=137 +x_0=23500000 +y_0=5500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 5-25 - EPSG:6092",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=158 +x_0=25500000 +y_0=5500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Arctic zone 5-27 - EPSG:6093",
    value:
      "+proj=lcc +lat_1=73.66666666666667 +lat_2=70.33333333333333 +lat_0=72.02500919444445 +lon_0=179 +x_0=27500000 +y_0=5500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Canada Polar Stereographic - EPSG:5937",
    value:
      "+proj=stere +lat_0=90 +lat_ts=90 +lon_0=-100 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Greenland Polar Stereographic - EPSG:5938",
    value:
      "+proj=stere +lat_0=90 +lat_ts=90 +lon_0=-33 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Norway Polar Stereographic - EPSG:5939",
    value:
      "+proj=stere +lat_0=90 +lat_ts=90 +lon_0=18 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / EPSG Russia Polar Stereographic - EPSG:5940",
    value:
      "+proj=stere +lat_0=90 +lat_ts=90 +lon_0=105 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Gabon TM - EPSG:5223",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9996 +x_0=500000 +y_0=500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Gabon TM 2011 - EPSG:5523",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=11.5 +k=0.9996 +x_0=1500000 +y_0=5500000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / IBCAO Polar Stereographic - EPSG:3996",
    value:
      "+proj=stere +lat_0=90 +lat_ts=75 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Mercator 41 - EPSG:3994",
    value:
      "+proj=merc +lon_0=100 +lat_ts=-41 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Mercator 41 (deprecated) - EPSG:3752",
    value:
      "+proj=merc +lon_0=100 +lat_ts=-41 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / North Pole LAEA Alaska - EPSG:3572",
    value:
      "+proj=laea +lat_0=90 +lon_0=-150 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / North Pole LAEA Atlantic - EPSG:3574",
    value:
      "+proj=laea +lat_0=90 +lon_0=-40 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / North Pole LAEA Bering Sea - EPSG:3571",
    value:
      "+proj=laea +lat_0=90 +lon_0=180 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / North Pole LAEA Canada - EPSG:3573",
    value:
      "+proj=laea +lat_0=90 +lon_0=-100 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / North Pole LAEA Europe - EPSG:3575",
    value:
      "+proj=laea +lat_0=90 +lon_0=10 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / North Pole LAEA Russia - EPSG:3576",
    value:
      "+proj=laea +lat_0=90 +lon_0=90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / NSIDC EASE-Grid Global - EPSG:3975",
    value:
      "+proj=cea +lon_0=0 +lat_ts=30 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / NSIDC EASE-Grid North - EPSG:3973",
    value:
      "+proj=laea +lat_0=90 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / NSIDC EASE-Grid South - EPSG:3974",
    value:
      "+proj=laea +lat_0=-90 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / NSIDC Sea Ice Polar Stereographic North - EPSG:3413",
    value:
      "+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / NSIDC Sea Ice Polar Stereographic South - EPSG:3976",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-70 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / PDC Mercator - EPSG:3832",
    value:
      "+proj=merc +lon_0=150 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / PDC Mercator (deprecated) - EPSG:3349",
    value:
      "+proj=merc +lon_0=-150 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Plate Carree (deprecated) - EPSG:32662",
    value:
      "+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / Pseudo-Mercator - EPSG:3857",
    value:
      "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",
  },
  {
    label: "WGS 84 / Pseudo-Mercator +  EGM2008 geoid height - EPSG:6871",
    value:
      "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +geoidgrids=egm08_25.gtx +vunits=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SP19-20 - EPSG:3204",
    value:
      "+proj=lcc +lat_1=-60.66666666666666 +lat_2=-63.33333333333334 +lat_0=-90 +lon_0=-66 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SP21-22 - EPSG:3205",
    value:
      "+proj=lcc +lat_1=-60.66666666666666 +lat_2=-63.33333333333334 +lat_0=-90 +lon_0=-54 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SP23-24 - EPSG:3206",
    value:
      "+proj=lcc +lat_1=-60.66666666666666 +lat_2=-63.33333333333334 +lat_0=-90 +lon_0=-42 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ01-02 - EPSG:3207",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=-174 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ19-20 - EPSG:3208",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=-66 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ21-22 - EPSG:3209",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=-54 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ37-38 - EPSG:3210",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=42 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ39-40 - EPSG:3211",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=54 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ41-42 - EPSG:3212",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=66 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ43-44 - EPSG:3213",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=78 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ45-46 - EPSG:3214",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ47-48 - EPSG:3215",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=102 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ49-50 - EPSG:3216",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=114 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ51-52 - EPSG:3217",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=126 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ53-54 - EPSG:3218",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=138 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ55-56 - EPSG:3219",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=150 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SQ57-58 - EPSG:3220",
    value:
      "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=162 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR13-14 - EPSG:3221",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-102 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR15-16 - EPSG:3222",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR17-18 - EPSG:3223",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-78 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR19-20 - EPSG:3224",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-66 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR27-28 - EPSG:3225",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-18 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR29-30 - EPSG:3226",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-6 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR31-32 - EPSG:3227",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=6 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR33-34 - EPSG:3228",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=18 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR35-36 - EPSG:3229",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=30 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR37-38 - EPSG:3230",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=42 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR39-40 - EPSG:3231",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=54 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR41-42 - EPSG:3232",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=66 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR43-44 - EPSG:3233",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=78 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR45-46 - EPSG:3234",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR47-48 - EPSG:3235",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=102 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR49-50 - EPSG:3236",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=114 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR51-52 - EPSG:3237",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=126 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR53-54 - EPSG:3238",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=138 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR55-56 - EPSG:3239",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=150 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR57-58 - EPSG:3240",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=162 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SR59-60 - EPSG:3241",
    value:
      "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=174 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS04-06 - EPSG:3242",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-153 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS07-09 - EPSG:3243",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-135 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS10-12 - EPSG:3244",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-117 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS13-15 - EPSG:3245",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-99 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS16-18 - EPSG:3246",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-81 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS19-21 - EPSG:3247",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-63 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS25-27 - EPSG:3248",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-27 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS28-30 - EPSG:3249",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-9 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS31-33 - EPSG:3250",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=9 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS34-36 - EPSG:3251",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=27 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS37-39 - EPSG:3252",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=45 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS40-42 - EPSG:3253",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=63 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS43-45 - EPSG:3254",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=81 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS46-48 - EPSG:3255",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=99 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS49-51 - EPSG:3256",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=117 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS52-54 - EPSG:3257",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=135 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS55-57 - EPSG:3258",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=153 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SS58-60 - EPSG:3259",
    value:
      "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=171 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST01-04 - EPSG:3260",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-168 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST05-08 - EPSG:3261",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-144 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST09-12 - EPSG:3262",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-120 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST13-16 - EPSG:3263",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-96 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST17-20 - EPSG:3264",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-72 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST21-24 - EPSG:3265",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-48 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST25-28 - EPSG:3266",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-24 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST29-32 - EPSG:3267",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST33-36 - EPSG:3268",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=24 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST37-40 - EPSG:3269",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=48 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST41-44 - EPSG:3270",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=72 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST45-48 - EPSG:3271",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=96 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST49-52 - EPSG:3272",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=120 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST53-56 - EPSG:3273",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=144 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW ST57-60 - EPSG:3274",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=168 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU01-05 - EPSG:3275",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-165 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU06-10 - EPSG:3276",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-135 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU11-15 - EPSG:3277",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-105 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU16-20 - EPSG:3278",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-75 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU21-25 - EPSG:3279",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU26-30 - EPSG:3280",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-15 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU31-35 - EPSG:3281",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=15 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU36-40 - EPSG:3282",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU41-45 - EPSG:3283",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=75 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU46-50 - EPSG:3284",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=105 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU51-55 - EPSG:3285",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=135 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SU56-60 - EPSG:3286",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=165 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SV01-10 - EPSG:3287",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-150 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SV11-20 - EPSG:3288",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-90 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SV21-30 - EPSG:3289",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-30 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SV31-40 - EPSG:3290",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=30 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SV41-50 - EPSG:3291",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=90 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SV51-60 - EPSG:3292",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=150 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / SCAR IMW SW01-60 - EPSG:3293",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / South Georgia Lambert - EPSG:3762",
    value:
      "+proj=lcc +lat_1=-54 +lat_2=-54.75 +lat_0=-55 +lon_0=-37 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / TM 116 SE - EPSG:2309",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=116 +k=0.9996 +x_0=500000 +y_0=10000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / TM 12 SE - EPSG:5842",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9996 +x_0=500000 +y_0=10000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / TM 132 SE - EPSG:2310",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=0.9996 +x_0=500000 +y_0=10000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / TM 36 SE - EPSG:32766",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=36 +k=0.9996 +x_0=500000 +y_0=10000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / TM 6 NE - EPSG:2311",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=6 +k=0.9996 +x_0=500000 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / TM 60 SW - EPSG:6703",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-60 +k=0.9996 +x_0=500000 +y_0=10000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / TMzn35N - EPSG:4037",
    value: "+proj=utm +zone=35 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / TMzn36N - EPSG:4038",
    value: "+proj=utm +zone=36 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UPS North (E,N) - EPSG:5041",
    value:
      "+proj=stere +lat_0=90 +lat_ts=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UPS North (N,E) - EPSG:32661",
    value:
      "+proj=stere +lat_0=90 +lat_ts=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UPS South (E,N) - EPSG:5042",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UPS South (N,E) - EPSG:32761",
    value:
      "+proj=stere +lat_0=-90 +lat_ts=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / USGS Transantarctic Mountains - EPSG:3294",
    value:
      "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-78 +lon_0=162 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 10N - EPSG:32610",
    value: "+proj=utm +zone=10 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 10S - EPSG:32710",
    value: "+proj=utm +zone=10 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 11N - EPSG:32611",
    value: "+proj=utm +zone=11 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 11S - EPSG:32711",
    value: "+proj=utm +zone=11 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 12N - EPSG:32612",
    value: "+proj=utm +zone=12 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 12S - EPSG:32712",
    value: "+proj=utm +zone=12 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 13N - EPSG:32613",
    value: "+proj=utm +zone=13 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 13S - EPSG:32713",
    value: "+proj=utm +zone=13 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 14N - EPSG:32614",
    value: "+proj=utm +zone=14 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 14S - EPSG:32714",
    value: "+proj=utm +zone=14 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 15N - EPSG:32615",
    value: "+proj=utm +zone=15 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 15S - EPSG:32715",
    value: "+proj=utm +zone=15 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 16N - EPSG:32616",
    value: "+proj=utm +zone=16 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 16S - EPSG:32716",
    value: "+proj=utm +zone=16 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 17N - EPSG:32617",
    value: "+proj=utm +zone=17 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 17S - EPSG:32717",
    value: "+proj=utm +zone=17 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 18N - EPSG:32618",
    value: "+proj=utm +zone=18 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 18S - EPSG:32718",
    value: "+proj=utm +zone=18 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 19N - EPSG:32619",
    value: "+proj=utm +zone=19 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 19S - EPSG:32719",
    value: "+proj=utm +zone=19 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 1N - EPSG:32601",
    value: "+proj=utm +zone=1 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 1S - EPSG:32701",
    value: "+proj=utm +zone=1 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 20N - EPSG:32620",
    value: "+proj=utm +zone=20 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 20S - EPSG:32720",
    value: "+proj=utm +zone=20 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 21N - EPSG:32621",
    value: "+proj=utm +zone=21 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 21S - EPSG:32721",
    value: "+proj=utm +zone=21 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 22N - EPSG:32622",
    value: "+proj=utm +zone=22 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 22S - EPSG:32722",
    value: "+proj=utm +zone=22 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 23N - EPSG:32623",
    value: "+proj=utm +zone=23 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 23S - EPSG:32723",
    value: "+proj=utm +zone=23 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 24N - EPSG:32624",
    value: "+proj=utm +zone=24 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 24S - EPSG:32724",
    value: "+proj=utm +zone=24 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 25N - EPSG:32625",
    value: "+proj=utm +zone=25 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 25S - EPSG:32725",
    value: "+proj=utm +zone=25 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 26N - EPSG:32626",
    value: "+proj=utm +zone=26 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 26S - EPSG:32726",
    value: "+proj=utm +zone=26 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 27N - EPSG:32627",
    value: "+proj=utm +zone=27 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 27S - EPSG:32727",
    value: "+proj=utm +zone=27 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 28N - EPSG:32628",
    value: "+proj=utm +zone=28 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 28S - EPSG:32728",
    value: "+proj=utm +zone=28 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 29N - EPSG:32629",
    value: "+proj=utm +zone=29 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 29S - EPSG:32729",
    value: "+proj=utm +zone=29 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 2N - EPSG:32602",
    value: "+proj=utm +zone=2 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 2S - EPSG:32702",
    value: "+proj=utm +zone=2 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 30N - EPSG:32630",
    value: "+proj=utm +zone=30 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 30S - EPSG:32730",
    value: "+proj=utm +zone=30 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 31N - EPSG:32631",
    value: "+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 31S - EPSG:32731",
    value: "+proj=utm +zone=31 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 32N - EPSG:32632",
    value: "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 32S - EPSG:32732",
    value: "+proj=utm +zone=32 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 33N - EPSG:32633",
    value: "+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 33S - EPSG:32733",
    value: "+proj=utm +zone=33 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 34N - EPSG:32634",
    value: "+proj=utm +zone=34 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 34S - EPSG:32734",
    value: "+proj=utm +zone=34 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 35N - EPSG:32635",
    value: "+proj=utm +zone=35 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 35S - EPSG:32735",
    value: "+proj=utm +zone=35 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 36N - EPSG:32636",
    value: "+proj=utm +zone=36 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 36S - EPSG:32736",
    value: "+proj=utm +zone=36 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 37N - EPSG:32637",
    value: "+proj=utm +zone=37 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 37S - EPSG:32737",
    value: "+proj=utm +zone=37 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 38N - EPSG:32638",
    value: "+proj=utm +zone=38 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 38S - EPSG:32738",
    value: "+proj=utm +zone=38 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 39N - EPSG:32639",
    value: "+proj=utm +zone=39 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 39S - EPSG:32739",
    value: "+proj=utm +zone=39 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 3N - EPSG:32603",
    value: "+proj=utm +zone=3 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 3S - EPSG:32703",
    value: "+proj=utm +zone=3 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 40N - EPSG:32640",
    value: "+proj=utm +zone=40 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 40S - EPSG:32740",
    value: "+proj=utm +zone=40 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 41N - EPSG:32641",
    value: "+proj=utm +zone=41 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 41S - EPSG:32741",
    value: "+proj=utm +zone=41 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 42N - EPSG:32642",
    value: "+proj=utm +zone=42 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 42S - EPSG:32742",
    value: "+proj=utm +zone=42 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 43N - EPSG:32643",
    value: "+proj=utm +zone=43 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 43S - EPSG:32743",
    value: "+proj=utm +zone=43 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 44N - EPSG:32644",
    value: "+proj=utm +zone=44 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 44S - EPSG:32744",
    value: "+proj=utm +zone=44 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 45N - EPSG:32645",
    value: "+proj=utm +zone=45 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 45S - EPSG:32745",
    value: "+proj=utm +zone=45 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 46N - EPSG:32646",
    value: "+proj=utm +zone=46 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 46S - EPSG:32746",
    value: "+proj=utm +zone=46 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 47N - EPSG:32647",
    value: "+proj=utm +zone=47 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 47S - EPSG:32747",
    value: "+proj=utm +zone=47 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 48N - EPSG:32648",
    value: "+proj=utm +zone=48 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 48S - EPSG:32748",
    value: "+proj=utm +zone=48 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 49N - EPSG:32649",
    value: "+proj=utm +zone=49 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 49S - EPSG:32749",
    value: "+proj=utm +zone=49 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 4N - EPSG:32604",
    value: "+proj=utm +zone=4 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 4S - EPSG:32704",
    value: "+proj=utm +zone=4 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 50N - EPSG:32650",
    value: "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 50S - EPSG:32750",
    value: "+proj=utm +zone=50 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 51N - EPSG:32651",
    value: "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 51S - EPSG:32751",
    value: "+proj=utm +zone=51 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 52N - EPSG:32652",
    value: "+proj=utm +zone=52 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 52S - EPSG:32752",
    value: "+proj=utm +zone=52 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 53N - EPSG:32653",
    value: "+proj=utm +zone=53 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 53S - EPSG:32753",
    value: "+proj=utm +zone=53 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 54N - EPSG:32654",
    value: "+proj=utm +zone=54 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 54S - EPSG:32754",
    value: "+proj=utm +zone=54 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 55N - EPSG:32655",
    value: "+proj=utm +zone=55 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 55S - EPSG:32755",
    value: "+proj=utm +zone=55 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 56N - EPSG:32656",
    value: "+proj=utm +zone=56 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 56S - EPSG:32756",
    value: "+proj=utm +zone=56 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 57N - EPSG:32657",
    value: "+proj=utm +zone=57 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 57S - EPSG:32757",
    value: "+proj=utm +zone=57 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 58N - EPSG:32658",
    value: "+proj=utm +zone=58 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 58S - EPSG:32758",
    value: "+proj=utm +zone=58 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 59N - EPSG:32659",
    value: "+proj=utm +zone=59 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 59S - EPSG:32759",
    value: "+proj=utm +zone=59 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 5N - EPSG:32605",
    value: "+proj=utm +zone=5 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 5S - EPSG:32705",
    value: "+proj=utm +zone=5 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 60N - EPSG:32660",
    value: "+proj=utm +zone=60 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 60S - EPSG:32760",
    value: "+proj=utm +zone=60 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 6N - EPSG:32606",
    value: "+proj=utm +zone=6 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 6S - EPSG:32706",
    value: "+proj=utm +zone=6 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 7N - EPSG:32607",
    value: "+proj=utm +zone=7 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 7S - EPSG:32707",
    value: "+proj=utm +zone=7 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 8N - EPSG:32608",
    value: "+proj=utm +zone=8 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 8S - EPSG:32708",
    value: "+proj=utm +zone=8 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 9N - EPSG:32609",
    value: "+proj=utm +zone=9 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / UTM zone 9S - EPSG:32709",
    value: "+proj=utm +zone=9 +south +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / World Equidistant Cylindrical - EPSG:4087",
    value:
      "+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / World Equidistant Cylindrical (deprecated) - EPSG:32663",
    value:
      "+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "WGS 84 / World Mercator - EPSG:3395",
    value:
      "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
  },
  {
    label: "World Equidistant Cylindrical (Sphere) - EPSG:4088",
    value:
      "+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=6371007 +b=6371007 +units=m +no_defs",
  },
  {
    label: "World Equidistant Cylindrical (Sphere) (deprecated) - EPSG:3786",
    value:
      "+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=6371007 +b=6371007 +units=m +no_defs",
  },
  {
    label: "Xian 1980 - EPSG:4610",
    value: "+proj=longlat +a=6378140 +b=6356755.288157528 +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 102E - EPSG:2379",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 105E - EPSG:2380",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 108E - EPSG:2381",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 111E - EPSG:2382",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 114E - EPSG:2383",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 117E - EPSG:2384",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 120E - EPSG:2385",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 123E - EPSG:2386",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 126E - EPSG:2387",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 129E - EPSG:2388",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 132E - EPSG:2389",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 135E - EPSG:2390",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 75E - EPSG:2370",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 78E - EPSG:2371",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 81E - EPSG:2372",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 84E - EPSG:2373",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 87E - EPSG:2374",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 90E - EPSG:2375",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 93E - EPSG:2376",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 96E - EPSG:2377",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger CM 99E - EPSG:2378",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 25 - EPSG:2349",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 26 - EPSG:2350",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 27 - EPSG:2351",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 28 - EPSG:2352",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 29 - EPSG:2353",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 30 - EPSG:2354",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 31 - EPSG:2355",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 32 - EPSG:2356",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 33 - EPSG:2357",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 34 - EPSG:2358",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 35 - EPSG:2359",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 36 - EPSG:2360",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 37 - EPSG:2361",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 38 - EPSG:2362",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 39 - EPSG:2363",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 40 - EPSG:2364",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 41 - EPSG:2365",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 42 - EPSG:2366",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 43 - EPSG:2367",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 44 - EPSG:2368",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / 3-degree Gauss-Kruger zone 45 - EPSG:2369",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 105E - EPSG:2343",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 111E - EPSG:2344",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 117E - EPSG:2345",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 123E - EPSG:2346",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 129E - EPSG:2347",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 135E - EPSG:2348",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 75E - EPSG:2338",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 81E - EPSG:2339",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 87E - EPSG:2340",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 93E - EPSG:2341",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger CM 99E - EPSG:2342",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 13 - EPSG:2327",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 14 - EPSG:2328",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 15 - EPSG:2329",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 16 - EPSG:2330",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 17 - EPSG:2331",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 18 - EPSG:2332",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 19 - EPSG:2333",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 20 - EPSG:2334",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 21 - EPSG:2335",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 22 - EPSG:2336",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Xian 1980 / Gauss-Kruger zone 23 - EPSG:2337",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs",
  },
  {
    label: "Yacare - EPSG:4309",
    value: "+proj=longlat +ellps=intl +towgs84=-155,171,37,0,0,0,0 +no_defs",
  },
  {
    label: "Yemen NGN96 - EPSG:4163",
    value: "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs",
  },
  {
    label: "Yemen NGN96 - EPSG:4980",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "Yemen NGN96 (geocentric) - EPSG:4380",
    value: "+proj=geocent +ellps=WGS84 +units=m +no_defs",
  },
  {
    label: "Yemen NGN96 / UTM zone 37N - EPSG:5836",
    value:
      "+proj=utm +zone=37 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Yemen NGN96 / UTM zone 38N - EPSG:2089",
    value:
      "+proj=utm +zone=38 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Yemen NGN96 / UTM zone 39N - EPSG:2090",
    value:
      "+proj=utm +zone=39 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Yemen NGN96 / UTM zone 40N - EPSG:5837",
    value:
      "+proj=utm +zone=40 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Yoff - EPSG:4310",
    value: "+proj=longlat +a=6378249.2 +b=6356515 +no_defs",
  },
  {
    label: "Yoff / UTM zone 28N - EPSG:31028",
    value: "+proj=utm +zone=28 +a=6378249.2 +b=6356515 +units=m +no_defs",
  },
  {
    label: "Zanderij - EPSG:4311",
    value: "+proj=longlat +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +no_defs",
  },
  {
    label: "Zanderij / Suriname Old TM - EPSG:31170",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-55.68333333333333 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Zanderij / Suriname TM - EPSG:31171",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-55.68333333333333 +k=0.9999 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Zanderij / TM 54 NW - EPSG:31154",
    value:
      "+proj=tmerc +lat_0=0 +lon_0=-54 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +units=m +no_defs",
  },
  {
    label: "Zanderij / UTM zone 21N - EPSG:31121",
    value:
      "+proj=utm +zone=21 +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +units=m +no_defs",
  },
];
