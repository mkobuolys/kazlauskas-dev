'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "268b9d811b6748ff1f25c7de31e75500",
"version.json": "7c7d3eea9d903695d87890be8fa0ee00",
"index.html": "3d2c73739c1e4a4e7bff4dc9812705f8",
"/": "3d2c73739c1e4a4e7bff4dc9812705f8",
"main.dart.js": "6d6f3d6e9842c1b1d250c0fc7168b59c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "28afe7b6f0ad22a8449eb58c3af010d5",
"assets/AssetManifest.json": "4d49a73ba9590347bcef9290f8500bc3",
"assets/NOTICES": "84585eb9cb7a2caa2c3e0fe8379ea77e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "13c6dcbbd6acd73e7ddf153aa50ce042",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_deck/assets/header.png": "7b35f3749eb44d6d99f8621da7ba71a5",
"assets/packages/travel_app/assets/travel_images/conseil_detat_paris.jpg": "e2b568735d4698b6b7482e2585761438",
"assets/packages/travel_app/assets/travel_images/llandudno_wales.jpg": "dab92f666e9665d647b1aea583f90d93",
"assets/packages/travel_app/assets/travel_images/coral_polyp_anatomy.jpg": "07788be54e007cd0304fe84f80b3af67",
"assets/packages/travel_app/assets/travel_images/broadway_new_york_1840.jpg": "e71accfe0d57bf6d58c9703480e758b7",
"assets/packages/travel_app/assets/travel_images/botafogo_bay_rio_de_janeiro.jpg": "4554bd7c56badd03e8c3a61f82b07bbf",
"assets/packages/travel_app/assets/travel_images/sydney_olympic_park.jpg": "383c110d98028f0f425f35ca9d4636c5",
"assets/packages/travel_app/assets/travel_images/sydney_harbour_bridge_1932.jpg": "c5ab7f10c5cec754d95c31dfff40d996",
"assets/packages/travel_app/assets/travel_images/sailing_contender_dinghy.jpg": "b694655c526dfb866bfb3707ddea4517",
"assets/packages/travel_app/assets/travel_images/santorini_from_space.jpg": "96c6960420a3aa9f4f50af6862b6cbf0",
"assets/packages/travel_app/assets/travel_images/baker_street_station_london_1906.jpg": "82884da4ada99646a3d16f127e510a2e",
"assets/packages/travel_app/assets/travel_images/geikie_plateau_glacier_greenland.jpg": "bbfe11eee58ca6df333af6a40a12d8f2",
"assets/packages/travel_app/assets/travel_images/map_of_izu_islands_japan.jpg": "c6e3c0addce601530035fc5695d86524",
"assets/packages/travel_app/assets/travel_images/olympus_mons_mars.jpg": "8bba740e63be957648dfedf72ef92a5a",
"assets/packages/travel_app/assets/travel_images/maldives_islands.jpg": "7e0a37fda5e0411652a5603f29281f33",
"assets/packages/travel_app/assets/travel_images/san_marco_basin_venice.jpg": "b0e93301853b9bb534aac87eadb485b4",
"assets/packages/travel_app/assets/travel_images/lahaina_maui_wildfire_damage.jpg": "1f20a63916782fcf3314036bfa508d60",
"assets/packages/travel_app/assets/travel_images/macba_barcelona.jpg": "6e782f44fe1244f6e496294d6f47748d",
"assets/packages/travel_app/assets/travel_images/vellore_golden_temple_india.jpg": "4b3379932fcc7a1297f270afa7bf31f8",
"assets/packages/travel_app/assets/travel_images/santorini_satellite_image.jpg": "cdcc9a2aa3e9134dd0e6e724bd2f1f13",
"assets/packages/travel_app/assets/travel_images/jedediah_smith_redwoods_california.jpg": "eb7c4b591a9d0fd2a7ecc913967eb086",
"assets/packages/travel_app/assets/travel_images/crowded_tram_tokyo.jpg": "25156f858bd428194a31402ff3195710",
"assets/packages/travel_app/assets/travel_images/blackpool_promenade_england.jpg": "38acaef092008ba109ba6e9f5f66e90f",
"assets/packages/travel_app/assets/travel_images/fringing_coral_reef_eilat_israel.jpg": "29c8d4417752e6dfe111a590def11f6c",
"assets/packages/travel_app/assets/travel_images/temple_of_heaven_beijing_china.jpg": "a3cc9129537cd827de86ab5c8ed93e1c",
"assets/packages/travel_app/assets/travel_images/ramla_bay_gozo_malta.jpg": "a7061535989dc502cadd439876b97d4e",
"assets/packages/travel_app/assets/travel_images/mount_garibaldi_british_columbia.jpg": "a6b4d347e0e34ddcb57d6226ab803a79",
"assets/packages/travel_app/assets/travel_images/lake_vostok_antarctica.jpg": "31379187b161088905abfb73a217296b",
"assets/packages/travel_app/assets/travel_images/banded_cleaner_shrimp.jpg": "7a548f82aaf461345ede76e14c729802",
"assets/packages/travel_app/assets/travel_images/ziggurat_of_ur_iraq.jpg": "39319d85dfac14ccf4b8a3ad7229af7c",
"assets/packages/travel_app/assets/travel_images/morro_do_borel_rio_de_janeiro.jpg": "e47dd8588d4beb7428a8bab164c55fea",
"assets/packages/travel_app/assets/travel_images/circuit_de_catalunya_f1.jpg": "be47c7e519a1cdd3942705ee376e201b",
"assets/packages/travel_app/assets/travel_images/brain_coral_spawning.jpg": "98396d4de055329a745caedfa4b8029b",
"assets/packages/travel_app/assets/travel_images/suruga_street_edo_hiroshige.jpg": "f0be2aa27aa63264b096dc1a88112ac6",
"assets/packages/travel_app/assets/travel_images/barcelona_drawing_1563.jpg": "5f16eec6aa80ee07275b7d06f76f99ca",
"assets/packages/travel_app/assets/travel_images/unisphere_corona_park_new_york.jpg": "e18c47ea35849218f43add2bd5fd0fac",
"assets/packages/travel_app/assets/travel_images/snorkeling_gear.jpg": "b9f3df491ab6872e9228266c789b1c84",
"assets/packages/travel_app/assets/travel_images/phuket_thailand.jpg": "7f808ff05e93c5918c362da15f7efdfc",
"assets/packages/travel_app/assets/travel_images/promthep_cape_phuket_thailand.jpg": "301842b1b68a32493baa598a34f1896d",
"assets/packages/travel_app/assets/travel_images/canadian_pacific_railway_banff_ad.jpg": "36fb78bf4545f9a1074055ce4a3183da",
"assets/packages/travel_app/assets/travel_images/castelldefels_spain_september.jpg": "ac4df585445b72bbd28830a5e1a747b5",
"assets/packages/travel_app/assets/travel_images/rio_de_janeiro_1889.jpg": "884db96a787e24919202e5b6dc134397",
"assets/packages/travel_app/assets/travel_images/niagara_falls_american_side.jpg": "efe2f662759a5eb726a5dbb815ae8624",
"assets/packages/travel_app/assets/travel_images/palais_de_la_cite_paris.jpg": "0efbd2ab0bf042684f3fd2977e2c2de0",
"assets/packages/travel_app/assets/travel_images/view_of_new_amsterdam_1664.jpg": "9a39f37e3d69db3969fc18f9f388b504",
"assets/packages/travel_app/assets/travel_images/ancient_coral_reefs.jpg": "4d9a269e3829944fd028af6b227c33dc",
"assets/packages/travel_app/assets/travel_images/puu_oo_volcanic_cone_hawaii.jpg": "348aeb567bb33d202a0e625046a57dd8",
"assets/packages/travel_app/assets/travel_images/paris_19th_arrondissement.jpg": "42181cf221971fd89f77adf1648deaff",
"assets/packages/travel_app/assets/travel_images/map_of_paris_1657.jpg": "98ce062b9b679eb3f64acbe1404191f6",
"assets/packages/travel_app/assets/travel_images/sydney_cove_1888.jpg": "5e02a436fa11ede957fa3fec43142e1b",
"assets/packages/travel_app/assets/travel_images/kensington_museums_london_aerial.jpg": "63e86f43d22a5323e3565d53ea09ba92",
"assets/packages/travel_app/assets/travel_images/mount_st_helens_east_dome.jpg": "cde8b76c9a718e225d038c47322e25b2",
"assets/packages/travel_app/assets/travel_images/glacially_plucked_granite_aland_finland.jpg": "29cb365f684be4d4fdacb1a515cfa21b",
"assets/packages/travel_app/assets/travel_images/dam_square_amsterdam.jpg": "074cebc71c9c369ca5b83c2b2939f758",
"assets/packages/travel_app/assets/travel_images/brighton_beach_england.jpg": "eca05029fc14a397c60c56d946ee902b",
"assets/packages/travel_app/assets/travel_images/fairmont_chateau_lake_louise.jpg": "b423277689fe691e3de2747563094c5d",
"assets/packages/travel_app/assets/travel_images/abbey_road_studios_london.jpg": "640f1ed2c504902ff4dde77726586f13",
"assets/packages/travel_app/assets/travel_images/hapag_steamship_prinzessin_victoria_luise.jpg": "0490231cda0b230eaa879b5f3c836c93",
"assets/packages/travel_app/assets/travel_images/man_o_war_cove_dorset_england.jpg": "4594f7047697add31383a8d1367879a6",
"assets/packages/travel_app/assets/travel_images/moraine_lake_banff.jpg": "ba08cfb155806d94a60f9cd4f37ec1cc",
"assets/packages/travel_app/assets/travel_images/statue_of_liberty_new_york.jpg": "c3b7aa4f017282dc5e9cd31b3aa6780e",
"assets/packages/travel_app/assets/travel_images/kurumba_island_maldives.jpg": "006e8c5e8d1e246692480170ce850fcf",
"assets/packages/travel_app/assets/travel_images/cruise_ship_medical_area.jpg": "d845546cdd9b4f9aa7b893fcf445b62c",
"assets/packages/travel_app/assets/travel_images/islamic_cultural_center_new_york.jpg": "8c42a6d9b42dd2ffb3e7806c5c3c75af",
"assets/packages/travel_app/assets/travel_images/brooklyn_bridge_new_york.jpg": "63d6ad38ee2097af3a181d6abf3df9b7",
"assets/packages/travel_app/assets/travel_images/noaa_coral_nurseries.jpg": "a751e53c59d6e5ee03b8c7227269d710",
"assets/packages/travel_app/assets/travel_images/_images.json": "fa808c9f6afaa666aacfef00638fb351",
"assets/packages/travel_app/assets/travel_images/cathedral_of_christ_the_saviour_moscow_russia.jpg": "4711f03650ffb6553f6fcab25663bf88",
"assets/packages/travel_app/assets/travel_images/gusev_crater_mars.jpg": "c587b506ae4eaa81a362f8e273b79e56",
"assets/packages/travel_app/assets/travel_images/machu_picchu_sacred_plaza.jpg": "4c48fff0db7eaacd03d17662f06cff95",
"assets/packages/travel_app/assets/travel_images/queenstown_new_zealand_2.jpg": "b101a9be17c1b094e38ae6992cdab38a",
"assets/packages/travel_app/assets/travel_images/bali_memorial.jpg": "e931bbebf4671d3303443871202b2456",
"assets/packages/travel_app/assets/travel_images/calle_loiza_san_juan_puerto_rico_hurricane_maria.jpg": "36328c1d88e3cdc99581a52bf6a0aecd",
"assets/packages/travel_app/assets/travel_images/kyoto_subway.jpg": "d8ab473bd334049819f48d6ff14c6533",
"assets/packages/travel_app/assets/travel_images/ulaan_tsutgalan_waterfall_mongolia.jpg": "6de3d77e2395060a3b83e87f567bcc41",
"assets/packages/travel_app/assets/travel_images/eiffel_tower_construction_1888.jpg": "ce84cd6b685b631b9a9c0837e5149fab",
"assets/packages/travel_app/assets/travel_images/circular_quay_sydney_1938.jpg": "d094983462fcd324d62ae3bb88f5223b",
"assets/packages/travel_app/assets/travel_images/kinkaku_ji_golden_pavilion_kyoto.jpg": "bf6979ad01b8fc09019e9f1e8da4cf60",
"assets/packages/travel_app/assets/travel_images/st_pauls_cathedral_london.jpg": "4ae736d0430cf5a4bd1d43760dba5761",
"assets/packages/travel_app/assets/travel_images/south_cascade_glacier_retreat.jpg": "e4f0b672499ffed2614675f1ea730af5",
"assets/packages/travel_app/assets/travel_images/green_sand_mahana_beach_hawaii.jpg": "1919838f2505738d553d38bb4b42c079",
"assets/packages/travel_app/assets/travel_images/sydney_at_night_satellite.jpg": "05a3db1a79c0d77888d20f6b0f3193a9",
"assets/packages/travel_app/assets/travel_images/le_moulin_de_la_galette_renoir.jpg": "5d10d864a20faf201ce1bead1a8a1ebf",
"assets/packages/travel_app/assets/travel_images/dubai_creek_1964.jpg": "5355a2d50021310a1c5f802e66d73b6c",
"assets/packages/travel_app/assets/travel_images/intihuatana_stone_machu_picchu.jpg": "d1c14e76358686142a0cf61918c6b5c4",
"assets/packages/travel_app/assets/travel_images/first_electric_tram_berlin_1881.jpg": "c0ea2e522317da70f4e94844177ff71a",
"assets/packages/travel_app/assets/travel_images/zoroastrian_temple_yazd_iran.jpg": "be1e984e9b38dccc4da95a9cf6af3ecb",
"assets/packages/travel_app/assets/travel_images/sydney_cove_watling_1794.jpg": "4ff3c746819133c3a071141fb9da6009",
"assets/packages/travel_app/assets/travel_images/rio_de_janeiro.jpg": "e1fbc586a0b6f434385329f07017d43b",
"assets/packages/travel_app/assets/travel_images/room_of_the_three_windows_machu_picchu.jpg": "51840f94921b6f987eca3f6fbf221e89",
"assets/packages/travel_app/assets/travel_images/queenstown_new_zealand.jpg": "0be8a004656ec4b37cafeb62e2a5e864",
"assets/packages/travel_app/assets/travel_images/anchieta_neighborhood_rio_de_janeiro.jpg": "6de0af9c3899034d2663147c958450aa",
"assets/packages/travel_app/assets/travel_images/amsterdam_gay_pride_2013.jpg": "843a67c81a6ac770124a87a3bcf9e934",
"assets/packages/travel_app/assets/travel_images/litli_hrutur_eruption_iceland.jpg": "bfb8ce0a0f907e7b29c1c145e1855b1b",
"assets/packages/travel_app/assets/travel_images/kyoto_railway_map.jpg": "e116b57397b7a82c3adf1e5779b1d1e6",
"assets/packages/travel_app/assets/travel_images/paternoster_square_london.jpg": "8cc10cca2ae3fa49cfdab35d63a65ec8",
"assets/packages/travel_app/assets/travel_images/dubai_future_forum_2024.jpg": "52013f7d19a156501691b9742683caf7",
"assets/packages/travel_app/assets/travel_images/westminster_abbey_canaletto_1749.jpg": "13fe533faa1729bb845236f85b1967f8",
"assets/packages/travel_app/assets/travel_images/banff_springs_hotel_1902.jpg": "eb847fdbeb5c17d08aca2ff776642159",
"assets/packages/travel_app/assets/travel_images/hawaii_archipelago_satellite_view.jpg": "683966d236d00b87ad657e18dec73e4f",
"assets/packages/travel_app/assets/travel_images/whitetip_reef_shark_hawaii.jpg": "4bb21244a4083770c8619873a36af68c",
"assets/packages/travel_app/assets/travel_images/map_of_new_amsterdam_1660.jpg": "3c4472e7a2b47dc9eca9e54720af621e",
"assets/packages/travel_app/assets/travel_images/venice_from_space.jpg": "110d4a7dadad611ca8af077bd86164fa",
"assets/packages/travel_app/assets/travel_images/george_street_sydney.jpg": "9b748fd9a66f5bba1a6a3787280aa7b4",
"assets/packages/travel_app/assets/travel_images/downtown_rio_de_janeiro.jpg": "cbdb391e8dc445e4c549f0aabd1775de",
"assets/packages/travel_app/assets/travel_images/santorini_panorama.jpg": "9472b53011a5f62f8d15d8f11934f3f6",
"assets/packages/travel_app/assets/travel_images/akrotiri_spring_fresco_santorini.jpg": "dca26e5ae5383d68702ab4377cc1b0d8",
"assets/packages/travel_app/assets/travel_images/glacial_moraines_lake_louise_canada.jpg": "7c5c949df2eb093f1fb5fde9342cffc6",
"assets/packages/travel_app/assets/travel_images/earth_from_apollo_17.jpg": "1cf4a5599e330d140a5a1bd651b0852f",
"assets/packages/travel_app/assets/travel_images/machu_picchu_urubamba_canyon.jpg": "3160434b6952ff88c926cd4c669d619a",
"assets/packages/travel_app/assets/travel_images/rio_de_janeiro_from_space.jpg": "be3610e0027bf63f43862dc843678aee",
"assets/packages/travel_app/assets/travel_images/al_fahidi_fort_dubai.jpg": "e090bb0e0962f26554000bf7cf9612aa",
"assets/packages/travel_app/assets/travel_images/nyepi_festival_bali.jpg": "b516f287b3084b94e96759dbbf96face",
"assets/packages/travel_app/assets/travel_images/po_liner_strathaird_fremantle.jpg": "9c47d95146f8bc28b22b6ebf94ef41a1",
"assets/packages/travel_app/assets/travel_images/desert_pavement_mojave.jpg": "b265321556e08a4f6641da7ec6acc5f6",
"assets/packages/travel_app/assets/travel_images/brain_coral.jpg": "2e73ca0b784d9922b4eadfffea3230b6",
"assets/packages/travel_app/assets/travel_images/dubai_fountain.jpg": "26efb2fe340c9804330d8810ddc936bc",
"assets/packages/travel_app/assets/travel_images/piazza_navona_rome.jpg": "47d8aa8243bbfefcf3dbab0644e2769c",
"assets/packages/travel_app/assets/travel_images/fushimi_yagura_imperial_palace_tokyo.jpg": "3d042c18d20982df48e4f2869afd432b",
"assets/packages/travel_app/assets/travel_images/cruise_ship_bridge.jpg": "e8d666e832333170b6baeb983fb14f07",
"assets/packages/travel_app/assets/travel_images/snorkeling_hanauma_bay_hawaii.jpg": "1b8b3400d2200283172174701eda7e69",
"assets/packages/travel_app/assets/travel_images/augustine_volcano_alaska.jpg": "01a02a3312354c928f511143bf7b0683",
"assets/packages/travel_app/assets/travel_images/sanjusangendo_temple_kyoto.jpg": "f7e1e99d7c567dea4af6f8963fd58f3e",
"assets/packages/travel_app/assets/travel_images/trajans_market_rome.jpg": "8d297bd570f1cad582dd908bed5801fb",
"assets/packages/travel_app/assets/travel_images/dubai_artificial_archipelagos_from_space.jpg": "c82fbe8d8e7458f9a18e9ed3141ff07b",
"assets/packages/travel_app/assets/travel_images/venice_shop_window.jpg": "20191b4ef7af95b73c7d631a0082324f",
"assets/packages/travel_app/assets/travel_images/piazzetta_san_marco_venice.jpg": "af5545be48ad4fcb9d6bb7c0bb084470",
"assets/packages/travel_app/assets/travel_images/gray_wolf.jpg": "87b79841adc73e97179db3b45fd408a8",
"assets/packages/travel_app/assets/travel_images/mulberry_street_new_york_1900.jpg": "df7ac3d5853f52b7bddc74bb1aa53a42",
"assets/packages/travel_app/assets/travel_images/hiram_bingham_machu_picchu_1912.jpg": "09255fda562044984e1ad2b0d7b0a85a",
"assets/packages/travel_app/assets/travel_images/comptons_of_soho_london.jpg": "5481c5dd1c8a6d00d53fa1da3aa57986",
"assets/packages/travel_app/assets/travel_images/kyoto_view_from_kiyomizu_dera_1870s.jpg": "5d8ff8ea5b710de0bb7ab28963101791",
"assets/packages/travel_app/assets/travel_images/sandstorm_al_asad_iraq.jpg": "a74a03890f22a612fab630c58127cd8a",
"assets/packages/travel_app/assets/travel_images/lumiere_brothers_cinematographe_poster.jpg": "7d986a7fed5e341c85e6f99082a7a8c9",
"assets/packages/travel_app/assets/travel_images/lincoln_tunnel_manhattan.jpg": "eb54b9ef5a44a682be92ee3392422627",
"assets/packages/travel_app/assets/travel_images/carioca_aqueduct_rio_de_janeiro.jpg": "736220ec108f8a41428e818aa34f2ef5",
"assets/packages/travel_app/assets/travel_images/canyonlands_national_park_utah.jpg": "6846784df05cbf34a2cc628adb9d6df4",
"assets/packages/travel_app/assets/travel_images/borobudur_indonesia.jpg": "ac1156934ec07426d1348a6be118bd3a",
"assets/packages/travel_app/assets/travel_images/marco_polo_traveling.jpg": "e0143cc378e3cb2d284f5eb0946d0004",
"assets/packages/travel_app/assets/travel_images/barcelona_sants_station.jpg": "68d2a011af49c89ba0fe2a08de85b3cc",
"assets/packages/travel_app/assets/travel_images/island_princess_cruise_ship.jpg": "aa81f56cca8574b86f5a1b2d83b0d017",
"assets/packages/travel_app/assets/travel_images/saffron_gatherers_fresco_santorini.jpg": "4851901b58b0438701329f0b9e7a450a",
"assets/packages/travel_app/assets/travel_images/shofuku_ji_temple_tokyo.jpg": "a2a9dbc292dc277e48ff1bf212c3e9f6",
"assets/packages/travel_app/assets/travel_images/white_sands_national_park_new_mexico.jpg": "1a0470101879176382411f8f5cad714e",
"assets/packages/travel_app/assets/travel_images/kata_noi_beach_phuket_thailand.jpg": "353ba3d802132bd0f1d4c577534304e5",
"assets/packages/travel_app/assets/travel_images/lucerne_train_station_switzerland.jpg": "17f45378b622fea8b55649f36f5c013c",
"assets/packages/travel_app/assets/travel_images/st_peters_basilica_rome.jpg": "eae12d9a337d1602d87e7624a8f26890",
"assets/packages/travel_app/assets/travel_images/venice_panorama_1870s.jpg": "739df8aff30c810ff2a9564947992964",
"assets/packages/travel_app/assets/travel_images/checkerboard_forest_idaho.jpg": "fc6276b8be7934f22030b73f8b79015a",
"assets/packages/travel_app/assets/travel_images/koryaksky_volcano_kamchatka_russia.jpg": "0e40fff8a828ea70e0f715a2984cefe3",
"assets/packages/travel_app/assets/travel_images/les_deux_magots_cafe_paris.jpg": "3eacb65dc6d7367d1062f061ec2372fe",
"assets/packages/travel_app/assets/travel_images/table_coral_hawaii.jpg": "8f07bfa8e2c4f69b33f4ce5d183c3cb2",
"assets/packages/travel_app/assets/travel_images/banff_from_sulphur_mountain.jpg": "2f756ac27aef2dc741a4ab524b5feb20",
"assets/packages/travel_app/assets/travel_images/edo_panorama_tokyo.jpg": "e049c1e45d977cf61e3c8437f43718ae",
"assets/packages/travel_app/assets/travel_images/holyland_model_of_jerusalem.jpg": "9d9e39b61224a01082e4bd0e561d8d52",
"assets/packages/travel_app/assets/travel_images/fontana_della_barcaccia_rome.jpg": "c1346e4dd63ebdd6acacc83ab099b574",
"assets/packages/travel_app/assets/travel_images/carters_beach_sand.jpg": "0150048e3ada9682611f623655c4534b",
"assets/packages/travel_app/assets/travel_images/mount_vesuvius_italy.jpg": "b23476090dfa47edf6d2d8935d1cc68a",
"assets/packages/travel_app/assets/travel_images/vatnajokull_glacier_iceland.jpg": "95c95e3df03977b4ae07f4297beea8d0",
"assets/packages/travel_app/assets/travel_images/monte_carlo_casino_monaco.jpg": "a1bd59f69346b201586b870d5fbc9bb0",
"assets/packages/travel_app/assets/travel_images/cruise_ship_casino.jpg": "8b0cb3fbc866fdaa8ceecdb42690da2d",
"assets/packages/travel_app/assets/travel_images/view_of_fort_george_new_york.jpg": "fd7e15ec860a1b3f66b4771647fd3c35",
"assets/packages/travel_app/assets/travel_images/magere_brug_amsterdam.jpg": "454c0bbe89e20e6d75101f19cadf518b",
"assets/packages/travel_app/assets/travel_images/deep_sea_corals_wagner_seamount.jpg": "8196318ec40be304307f3913b9945c64",
"assets/packages/travel_app/assets/travel_images/caribbean_reef_squid.jpg": "48f2f4ecf9e73a43016c81fdd6832711",
"assets/packages/travel_app/assets/travel_images/worker_empire_state_building_new_york.jpg": "97e61555b4cd0f93f95639d32a379544",
"assets/packages/travel_app/assets/travel_images/state_theatre_sydney.jpg": "e27ab6bca4d9a57ff114babe58194059",
"assets/packages/travel_app/assets/travel_images/torre_glories_barcelona.jpg": "1e5c0da48eabcfb11d8c035bd46e3e59",
"assets/packages/travel_app/assets/travel_images/crab_on_beach_phuket_thailand.jpg": "24105782a7ba9667f4b4e065be27b47a",
"assets/packages/travel_app/assets/travel_images/alimini_lake_otranto_italy.jpg": "92a3fe773e856cf67d286c3eaab1e041",
"assets/packages/travel_app/assets/travel_images/fira_santorini_1919.jpg": "2b8a1f050dcf1dba820c0af576c92b72",
"assets/packages/travel_app/assets/travel_images/temple_emanu_el_new_york.jpg": "27e218bcb893362e9c51f74557352d30",
"assets/packages/travel_app/assets/travel_images/pillar_coral.jpg": "100291e548f01e3cf5e30509caa28745",
"assets/packages/travel_app/assets/travel_images/museum_of_the_future_dubai.jpg": "427a4f4f1b44b8d3867efadc3c3f6505",
"assets/packages/travel_app/assets/travel_images/cruise_ship_luggage.jpg": "52c9e30ce11657abe26cea73b88fa157",
"assets/packages/travel_app/assets/travel_images/linha_vermelha_rio_de_janeiro.jpg": "670bbd750434a9d945f6c2417149b5ad",
"assets/packages/travel_app/assets/travel_images/capulin_volcano_new_mexico.jpg": "78485b753296685192ab9ae397ae2c17",
"assets/packages/travel_app/assets/travel_images/rio_de_janeiro_avenue_1910s.jpg": "b49cb7c8e6dac27868e987d515a939c3",
"assets/packages/travel_app/assets/travel_images/bank_of_england_london.jpg": "7cf0b838c6cb539149b9606c39c06906",
"assets/packages/travel_app/assets/travel_images/desert_iguana_mojave_desert_california.jpg": "b77821ae2a224acbf75fb515dc1fce77",
"assets/packages/travel_app/assets/travel_images/dubai_uae.jpg": "8bdab0602c557c1b2518c0a5b90aeb1b",
"assets/packages/travel_app/assets/travel_images/fluorescent_coral_monterey_bay_aquarium.jpg": "177bedb16a0044b62cb031984351c4c1",
"assets/packages/travel_app/assets/travel_images/shijo_kawaramachi_kyoto.jpg": "821ef45c86f458bd4f5ebe5d204948ac",
"assets/packages/travel_app/assets/travel_images/ganz_electric_locomotive_italy_1901.jpg": "6cc030819535e7181264c1363ce38d20",
"assets/packages/travel_app/assets/booking_service/dart_inn.png": "ed35e6f16bb82e4492df5ccc6f1584a7",
"assets/packages/travel_app/assets/booking_service/README.md": "7fda0786706acfb5809a305b9db9a845",
"assets/packages/travel_app/assets/booking_service/flutter_hotel.png": "30dfcf7d4735af9c8fe376c7d454faf4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "266b9f70e8e021a0d1f557abdc362d62",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/generative-ui-overview.png": "fa1d249d4440bca2a6b936f08c560558",
"assets/assets/intercom.png": "a06ac5570c6214864d82f8fcb9b7a4da",
"assets/assets/revenue-cat-paywall.png": "8297adba91ecdbee6532055dc768001e",
"assets/assets/notion.png": "49b71c3fc6cd6d9e241fd3a99ee52116",
"assets/assets/flutter-architecture-simplified.png": "fafccfbb5b5589cd87a7eed992267308",
"assets/assets/dante-divine-comedy-cover.png": "ea7af315ff2a6bd8effd039917d606bd",
"assets/assets/code-push.png": "03cb5827a92f40c6f550315b23eb980b",
"assets/assets/dante-inferno.png": "4d190d8a776605ea361f5d5877e8b0f0",
"assets/assets/rfw-architecture.png": "a821208aa759f7193320391b553fc5c2",
"assets/assets/design-trends.png": "bd0a0dd2cbabea502ac6706ea936a375",
"assets/assets/code-push-relevance.png": "037b404cfc1c2a77fc7ba0a98a5ed241",
"assets/assets/feature-flag-progressive.png": "1e93e61e4c3adab89dd9cf97db67d5fc",
"assets/assets/feature-flags.png": "d26d8e327911376f895b46d4da64cf9e",
"assets/assets/over-the-air-update.png": "ac1e0664f42c026f5c5436264d83fa56",
"assets/assets/flutter_genui_architecture.png": "277380eced9572fcad02cc3ce026ebaa",
"assets/assets/reading-more-resolution.png": "9b61df4a2fc9ebe3ecd576563f254d1f",
"assets/assets/firebase-remote-config-logo.png": "ec0c8869e1000c13fd324be4359f43d3",
"assets/assets/feature-flag.png": "42f24fe962fa05a8b8f8baaa35813df0",
"assets/assets/flutter-architecture-shorebird.png": "fe0eabe744cab933c50ab743bb2685c9",
"assets/assets/shorebird.png": "a707f85f18fa672c1b55898303183901",
"assets/assets/personalized-config.png": "35de061dfaaa95adb629e938e4bd0433",
"assets/assets/crowdin.png": "399f4bb79a7ac9b5354608fdd635746a",
"assets/assets/dark/generative-ui-overview.png": "1719b1f4fa3fad25d244190baf702ad9",
"assets/assets/dark/flutter-architecture-simplified.png": "e61b06611874d0b0ac69c516a92edca2",
"assets/assets/dark/rfw-architecture.png": "4d28da71cc7eb2ae54a8e655b2e4ee3d",
"assets/assets/dark/design-trends.png": "4c71e728f4e1075fde765baaf8b0df0c",
"assets/assets/dark/feature-flag-progressive.png": "181cf0402071ca359daaf9a888f8ffdc",
"assets/assets/dark/flutter_genui_architecture.png": "51a21e0e3e0e510eeeeaca92f2372708",
"assets/assets/dark/feature-flag.png": "2c96ec206d801415bdcdbc4fe1a22ac7",
"assets/assets/dark/flutter-architecture-shorebird.png": "fa5b89d03e49cf06fbe5ae47c02dbf20",
"assets/assets/dark/personalized-config.png": "6f39a82c8226faef30cca60968bea59c",
"assets/assets/dark/generative-ui-chart.png": "cfb0a41c3b98bfc5e3efff10bfef49f2",
"assets/assets/webview-demo.png": "285ab5c467716d3a85e1556e3088084e",
"assets/assets/new-year.png": "df63df2ec3800e93e267dadf2b160db5",
"assets/assets/summary.png": "1543443929c5a8210df38e555858f1d4",
"assets/assets/generative-ui-chart.png": "467381931f02968a0a7f3cf954cffbe1",
"assets/assets/flutter-genui.png": "6d7e6705e0dac5330c854f05464cfa73",
"assets/assets/speaker.png": "68d459494804e9a204d80a43fd0bc14c",
"assets/assets/app-update-rejected.png": "35529e418a0aeb188bd92aa2441acf21",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
