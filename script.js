<script>
    const timezones = [
        {name: "IDLW (UTC-12) - International Date Line West", offset: -12, dstRegion: null},
        {name: "HST (UTC-10) - Hawaii (No DST)", offset: -10, dstRegion: null},
        {name: "AKST (UTC-9) - Alaska", offset: -9, dstRegion: "US"},
        {name: "PST (UTC-8) - Pacific (US/Canada)", offset: -8, dstRegion: "US"},
        {name: "MST (UTC-7) - Mountain (US/Canada)", offset: -7, dstRegion: "US"},
        {name: "MST (UTC-7) - Arizona (No DST)", offset: -7, dstRegion: null},
        {name: "CST (UTC-6) - Central (US/Canada)", offset: -6, dstRegion: "US"},
        {name: "EST (UTC-5) - Eastern (US/Canada)", offset: -5, dstRegion: "US"},
        {name: "AST (UTC-4) - Atlantic (Canada)", offset: -4, dstRegion: "US"},
        {name: "NST (UTC-3:30) - Newfoundland", offset: -3.5, dstRegion: "CA"},
        {name: "BRT (UTC-3) - Brazil (Brasilia)", offset: -3, dstRegion: "BR"},
        {name: "FNT (UTC-2) - Fernando de Noronha (No DST)", offset: -2, dstRegion: null},
        {name: "AZOT (UTC-1) - Azores", offset: -1, dstRegion: "EU"},
        {name: "UTC (UTC+0) - Coordinated Universal Time", offset: 0, dstRegion: null},
        {name: "GMT (UTC+0) - Greenwich Mean Time", offset: 0, dstRegion: null},
        {name: "WET (UTC+0) - Western Europe", offset: 0, dstRegion: "EU"},
        {name: "CET (UTC+1) - Central Europe", offset: 1, dstRegion: "EU"},
        {name: "EET (UTC+2) - Eastern Europe", offset: 2, dstRegion: "EU"},
        {name: "MSK (UTC+3) - Moscow (No DST)", offset: 3, dstRegion: null},
        {name: "GST (UTC+4) - Gulf (No DST)", offset: 4, dstRegion: null},
        {name: "PKT (UTC+5) - Pakistan (No DST)", offset: 5, dstRegion: null},
        {name: "IST (UTC+5:30) - India (No DST)", offset: 5.5, dstRegion: null},
        {name: "NPT (UTC+5:45) - Nepal (No DST)", offset: 5.75, dstRegion: null},
        {name: "BST (UTC+6) - Bangladesh (No DST)", offset: 6, dstRegion: null},
        {name: "ICT (UTC+7) - Indochina (No DST)", offset: 7, dstRegion: null},
        {name: "CST (UTC+8) - China (No DST)", offset: 8, dstRegion: null},
        {name: "JST (UTC+9) - Japan (No DST)", offset: 9, dstRegion: null},
        {name: "ACST (UTC+9:30) - Central Australia", offset: 9.5, dstRegion: "AU"},
        {name: "AEST (UTC+10) - Eastern Australia", offset: 10, dstRegion: "AU"},
        {name: "PGT (UTC+10) - Papua New Guinea (No DST)", offset: 10, dstRegion: null},
        {name: "VUT (UTC+11) - Vanuatu", offset: 11, dstRegion: null},
        {name: "NZST (UTC+12) - New Zealand", offset: 12, dstRegion: "NZ"},
        {name: "CLST (UTC+13) - Chile (Summer)", offset: 13, dstRegion: "CL"},
        {name: "TOT (UTC+13) - Tonga (No DST)", offset: 13, dstRegion: null},
        {name: "LINT (UTC+14) - Line Islands (No DST)", offset: 14, dstRegion: null}
    ];

    const cityToTimezone = [
        {city: "Kabul, Afghanistan", timezone: "PKT (UTC+5) - Pakistan (No DST)", lat: 34.5553, lon: 69.2075},
        {city: "Tirana, Albania", timezone: "CET (UTC+1) - Central Europe", lat: 41.3275, lon: 19.8187},
        {city: "Algiers, Algeria", timezone: "CET (UTC+1) - Central Europe", lat: 36.7372, lon: 3.0870},
        {city: "Andorra la Vella, Andorra", timezone: "CET (UTC+1) - Central Europe", lat: 42.5063, lon: 1.5218},
        {city: "Luanda, Angola", timezone: "WET (UTC+0) - Western Europe", lat: -8.8390, lon: 13.2894},
        {city: "St. John's, Antigua and Barbuda", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 17.1274, lon: -61.8468},
        {city: "Buenos Aires, Argentina", timezone: "BRT (UTC-3) - Brazil (Brasilia)", lat: -34.6037, lon: -58.3816},
        {city: "Yerevan, Armenia", timezone: "GST (UTC+4) - Gulf (No DST)", lat: 40.1792, lon: 44.4991},
        {city: "Canberra, Australia", timezone: "AEST (UTC+10) - Eastern Australia", lat: -35.2809, lon: 149.1300},
        {city: "Vienna, Austria", timezone: "CET (UTC+1) - Central Europe", lat: 48.2082, lon: 16.3738},
        {city: "Baku, Azerbaijan", timezone: "GST (UTC+4) - Gulf (No DST)", lat: 40.4093, lon: 49.8671},
        {city: "Nassau, Bahamas", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: 25.0443, lon: -77.3504},
        {city: "Manama, Bahrain", timezone: "GST (UTC+4) - Gulf (No DST)", lat: 26.2235, lon: 50.5876},
        {city: "Dhaka, Bangladesh", timezone: "BST (UTC+6) - Bangladesh (No DST)", lat: 23.8103, lon: 90.4125},
        {city: "Bridgetown, Barbados", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 13.1132, lon: -59.5988},
        {city: "Minsk, Belarus", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 53.9045, lon: 27.5615},
        {city: "Brussels, Belgium", timezone: "CET (UTC+1) - Central Europe", lat: 50.8503, lon: 4.3517},
        {city: "Belmopan, Belize", timezone: "CST (UTC-6) - Central (US/Canada)", lat: 17.2510, lon: -88.7590},
        {city: "Porto-Novo, Benin", timezone: "WET (UTC+0) - Western Europe", lat: 6.4969, lon: 2.6036},
        {city: "Thimphu, Bhutan", timezone: "BST (UTC+6) - Bangladesh (No DST)", lat: 27.5142, lon: 89.6349},
        {city: "Sucre, Bolivia", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: -19.0333, lon: -65.2627},
        {city: "La Paz, Bolivia", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: -16.4897, lon: -68.1193},
        {city: "Sarajevo, Bosnia and Herzegovina", timezone: "CET (UTC+1) - Central Europe", lat: 43.8563, lon: 18.4131},
        {city: "Gaborone, Botswana", timezone: "CET (UTC+1) - Central Europe", lat: -24.6282, lon: 25.9231},
        {city: "Brasilia, Brazil", timezone: "BRT (UTC-3) - Brazil (Brasilia)", lat: -15.8267, lon: -47.9218},
        {city: "Bandar Seri Begawan, Brunei", timezone: "CST (UTC+8) - China (No DST)", lat: 4.9031, lon: 114.9398},
        {city: "Sofia, Bulgaria", timezone: "EET (UTC+2) - Eastern Europe", lat: 42.6977, lon: 23.3219},
        {city: "Ouagadougou, Burkina Faso", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 12.3714, lon: -1.5197},
        {city: "Gitega, Burundi", timezone: "CET (UTC+1) - Central Europe", lat: -3.4264, lon: 29.9308},
        {city: "Praia, Cabo Verde", timezone: "AZOT (UTC-1) - Azores", lat: 14.9330, lon: -23.5133},
        {city: "Phnom Penh, Cambodia", timezone: "ICT (UTC+7) - Indochina (No DST)", lat: 11.5564, lon: 104.9282},
        {city: "Yaoundé, Cameroon", timezone: "WET (UTC+0) - Western Europe", lat: 3.8480, lon: 11.5021},
        {city: "Ottawa, Canada", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: 45.4215, lon: -75.6972},
        {city: "Bangui, Central African Republic", timezone: "WET (UTC+0) - Western Europe", lat: 4.3947, lon: 18.5582},
        {city: "N'Djamena, Chad", timezone: "WET (UTC+0) - Western Europe", lat: 12.1348, lon: 15.0557},
        {city: "Santiago, Chile", timezone: "CLST (UTC+13) - Chile (Summer)", lat: -33.4489, lon: -70.6693},
        {city: "Beijing, China", timezone: "CST (UTC+8) - China (No DST)", lat: 39.9042, lon: 116.4074},
        {city: "Bogotá, Colombia", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: 4.7110, lon: -74.0721},
        {city: "Moroni, Comoros", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: -11.7020, lon: 43.2551},
        {city: "Kinshasa, Congo, Democratic Republic", timezone: "WET (UTC+0) - Western Europe", lat: -4.4419, lon: 15.2663},
        {city: "Brazzaville, Congo, Republic", timezone: "WET (UTC+0) - Western Europe", lat: -4.2634, lon: 15.2429},
        {city: "San José, Costa Rica", timezone: "CST (UTC-6) - Central (US/Canada)", lat: 9.9281, lon: -84.0907},
        {city: "Zagreb, Croatia", timezone: "CET (UTC+1) - Central Europe", lat: 45.8150, lon: 15.9819},
        {city: "Havana, Cuba", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: 23.1136, lon: -82.3666},
        {city: "Nicosia, Cyprus", timezone: "EET (UTC+2) - Eastern Europe", lat: 35.1856, lon: 33.3823},
        {city: "Prague, Czech Republic", timezone: "CET (UTC+1) - Central Europe", lat: 50.0755, lon: 14.4378},
        {city: "Copenhagen, Denmark", timezone: "CET (UTC+1) - Central Europe", lat: 55.6761, lon: 12.5683},
        {city: "Djibouti, Djibouti", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 11.8251, lon: 42.5903},
        {city: "Roseau, Dominica", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 15.3092, lon: -61.3790},
        {city: "Santo Domingo, Dominican Republic", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 18.4861, lon: -69.9312},
        {city: "Quito, Ecuador", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: -0.1807, lon: -78.4678},
        {city: "Cairo, Egypt", timezone: "EET (UTC+2) - Eastern Europe", lat: 30.0444, lon: 31.2357},
        {city: "San Salvador, El Salvador", timezone: "CST (UTC-6) - Central (US/Canada)", lat: 13.6929, lon: -89.2182},
        {city: "Malabo, Equatorial Guinea", timezone: "WET (UTC+0) - Western Europe", lat: 3.7504, lon: 8.7371},
        {city: "Asmara, Eritrea", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 15.3229, lon: 38.9251},
        {city: "Tallinn, Estonia", timezone: "EET (UTC+2) - Eastern Europe", lat: 59.4370, lon: 24.7536},
        {city: "Mbabane, Eswatini", timezone: "CET (UTC+1) - Central Europe", lat: -26.3054, lon: 31.1367},
        {city: "Addis Ababa, Ethiopia", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 8.9806, lon: 38.7578},
        {city: "Suva, Fiji", timezone: "NZST (UTC+12) - New Zealand", lat: -18.1248, lon: 178.4501},
        {city: "Helsinki, Finland", timezone: "EET (UTC+2) - Eastern Europe", lat: 60.1699, lon: 24.9384},
        {city: "Paris, France", timezone: "CET (UTC+1) - Central Europe", lat: 48.8566, lon: 2.3522},
        {city: "Libreville, Gabon", timezone: "WET (UTC+0) - Western Europe", lat: 0.4162, lon: 9.4673},
        {city: "Banjul, Gambia", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 13.4549, lon: -16.5790},
        {city: "Tbilisi, Georgia", timezone: "GST (UTC+4) - Gulf (No DST)", lat: 41.7151, lon: 44.8271},
        {city: "Berlin, Germany", timezone: "CET (UTC+1) - Central Europe", lat: 52.5200, lon: 13.4050},
        {city: "Accra, Ghana", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 5.6037, lon: -0.1870},
        {city: "Athens, Greece", timezone: "EET (UTC+2) - Eastern Europe", lat: 37.9838, lon: 23.7275},
        {city: "St. George's, Grenada", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 12.0561, lon: -61.7488},
        {city: "Guatemala City, Guatemala", timezone: "CST (UTC-6) - Central (US/Canada)", lat: 14.6349, lon: -90.5069},
        {city: "Conakry, Guinea", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 9.6412, lon: -13.5784},
        {city: "Bissau, Guinea-Bissau", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 11.8817, lon: -15.6179},
        {city: "Georgetown, Guyana", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 6.8013, lon: -58.1551},
        {city: "Port-au-Prince, Haiti", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: 18.5944, lon: -72.3074},
        {city: "Tegucigalpa, Honduras", timezone: "CST (UTC-6) - Central (US/Canada)", lat: 14.0723, lon: -87.1921},
        {city: "Budapest, Hungary", timezone: "CET (UTC+1) - Central Europe", lat: 47.4979, lon: 19.0402},
        {city: "Reykjavik, Iceland", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 64.1466, lon: -21.9426},
        {city: "New Delhi, India", timezone: "IST (UTC+5:30) - India (No DST)", lat: 28.6139, lon: 77.2090},
        {city: "Jakarta, Indonesia", timezone: "ICT (UTC+7) - Indochina (No DST)", lat: -6.2088, lon: 106.8456},
        {city: "Tehran, Iran", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 35.6892, lon: 51.3890},
        {city: "Baghdad, Iraq", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 33.3152, lon: 44.3661},
        {city: "Dublin, Ireland", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 53.3498, lon: -6.2603},
        {city: "Jerusalem, Israel", timezone: "EET (UTC+2) - Eastern Europe", lat: 31.7683, lon: 35.2137},
        {city: "Rome, Italy", timezone: "CET (UTC+1) - Central Europe", lat: 41.9028, lon: 12.4964},
        {city: "Yamoussoukro, Ivory Coast", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 6.8276, lon: -5.2893},
        {city: "Kingston, Jamaica", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: 18.0179, lon: -76.8099},
        {city: "Tokyo, Japan", timezone: "JST (UTC+9) - Japan (No DST)", lat: 35.6762, lon: 139.6503},
        {city: "Amman, Jordan", timezone: "EET (UTC+2) - Eastern Europe", lat: 31.9539, lon: 35.9106},
        {city: "Astana, Kazakhstan", timezone: "BST (UTC+6) - Bangladesh (No DST)", lat: 51.1694, lon: 71.4491},
        {city: "Nairobi, Kenya", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: -1.2921, lon: 36.8219},
        {city: "Tarawa, Kiribati", timezone: "NZST (UTC+12) - New Zealand", lat: 1.4518, lon: 173.0320},
        {city: "Pyongyang, North Korea", timezone: "JST (UTC+9) - Japan (No DST)", lat: 39.0392, lon: 125.7625},
        {city: "Seoul, South Korea", timezone: "JST (UTC+9) - Japan (No DST)", lat: 37.5665, lon: 126.9780},
        {city: "Pristina, Kosovo", timezone: "CET (UTC+1) - Central Europe", lat: 42.6629, lon: 21.1655},
        {city: "Kuwait City, Kuwait", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 29.3759, lon: 47.9774},
        {city: "Bishkek, Kyrgyzstan", timezone: "BST (UTC+6) - Bangladesh (No DST)", lat: 42.8746, lon: 74.5698},
        {city: "Vientiane, Laos", timezone: "ICT (UTC+7) - Indochina (No DST)", lat: 17.9757, lon: 102.6331},
        {city: "Riga, Latvia", timezone: "EET (UTC+2) - Eastern Europe", lat: 56.9496, lon: 24.1052},
        {city: "Beirut, Lebanon", timezone: "EET (UTC+2) - Eastern Europe", lat: 33.8938, lon: 35.5018},
        {city: "Maseru, Lesotho", timezone: "CET (UTC+1) - Central Europe", lat: -29.3142, lon: 27.4869},
        {city: "Monrovia, Liberia", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 6.3156, lon: -10.8074},
        {city: "Tripoli, Libya", timezone: "EET (UTC+2) - Eastern Europe", lat: 32.8872, lon: 13.1913},
        {city: "Vaduz, Liechtenstein", timezone: "CET (UTC+1) - Central Europe", lat: 47.1410, lon: 9.5209},
        {city: "Vilnius, Lithuania", timezone: "EET (UTC+2) - Eastern Europe", lat: 54.6872, lon: 25.2797},
        {city: "Luxembourg, Luxembourg", timezone: "CET (UTC+1) - Central Europe", lat: 49.6116, lon: 6.1319},
        {city: "Skopje, North Macedonia", timezone: "CET (UTC+1) - Central Europe", lat: 41.9973, lon: 21.4280},
        {city: "Antananarivo, Madagascar", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: -18.8792, lon: 47.5079},
        {city: "Lilongwe, Malawi", timezone: "CET (UTC+1) - Central Europe", lat: -13.9626, lon: 33.7741},
        {city: "Kuala Lumpur, Malaysia", timezone: "CST (UTC+8) - China (No DST)", lat: 3.1390, lon: 101.6869},
        {city: "Malé, Maldives", timezone: "PKT (UTC+5) - Pakistan (No DST)", lat: 4.1755, lon: 73.5093},
        {city: "Bamako, Mali", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 12.6392, lon: -8.0029},
        {city: "Valletta, Malta", timezone: "CET (UTC+1) - Central Europe", lat: 35.8989, lon: 14.5146},
        {city: "Majuro, Marshall Islands", timezone: "NZST (UTC+12) - New Zealand", lat: 7.0897, lon: 171.3803},
        {city: "Nouakchott, Mauritania", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 18.0735, lon: -15.9582},
        {city: "Port Louis, Mauritius", timezone: "GST (UTC+4) - Gulf (No DST)", lat: -20.1640, lon: 57.5012},
        {city: "Mexico City, Mexico", timezone: "CST (UTC-6) - Central (US/Canada)", lat: 19.4326, lon: -99.1332},
        {city: "Palikir, Micronesia", timezone: "VUT (UTC+11) - Vanuatu", lat: 6.9248, lon: 158.1611},
        {city: "Chișinău, Moldova", timezone: "EET (UTC+2) - Eastern Europe", lat: 47.0105, lon: 28.8638},
        {city: "Monaco, Monaco", timezone: "CET (UTC+1) - Central Europe", lat: 43.7384, lon: 7.4246},
        {city: "Ulaanbaatar, Mongolia", timezone: "CST (UTC+8) - China (No DST)", lat: 47.8864, lon: 106.9057},
        {city: "Podgorica, Montenegro", timezone: "CET (UTC+1) - Central Europe", lat: 42.4304, lon: 19.2594},
        {city: "Rabat, Morocco", timezone: "WET (UTC+0) - Western Europe", lat: 33.9716, lon: -6.8498},
        {city: "Maputo, Mozambique", timezone: "CET (UTC+1) - Central Europe", lat: -25.9692, lon: 32.5732},
        {city: "Naypyidaw, Myanmar", timezone: "BST (UTC+6) - Bangladesh (No DST)", lat: 19.7633, lon: 96.0785},
        {city: "Windhoek, Namibia", timezone: "CET (UTC+1) - Central Europe", lat: -22.5597, lon: 17.0832},
        {city: "Yaren, Nauru", timezone: "NZST (UTC+12) - New Zealand", lat: -0.5477, lon: 166.9209},
        {city: "Kathmandu, Nepal", timezone: "NPT (UTC+5:45) - Nepal (No DST)", lat: 27.7172, lon: 85.3240},
        {city: "Amsterdam, Netherlands", timezone: "CET (UTC+1) - Central Europe", lat: 52.3676, lon: 4.9041},
        {city: "Wellington, New Zealand", timezone: "NZST (UTC+12) - New Zealand", lat: -41.2865, lon: 174.7762},
        {city: "Managua, Nicaragua", timezone: "CST (UTC-6) - Central (US/Canada)", lat: 12.1140, lon: -86.2362},
        {city: "Niamey, Niger", timezone: "WET (UTC+0) - Western Europe", lat: 13.5116, lon: 2.1254},
        {city: "Abuja, Nigeria", timezone: "WET (UTC+0) - Western Europe", lat: 9.0765, lon: 7.3986},
        {city: "Oslo, Norway", timezone: "CET (UTC+1) - Central Europe", lat: 59.9139, lon: 10.7522},
        {city: "Muscat, Oman", timezone: "GST (UTC+4) - Gulf (No DST)", lat: 23.5859, lon: 58.4059},
        {city: "Islamabad, Pakistan", timezone: "PKT (UTC+5) - Pakistan (No DST)", lat: 33.6844, lon: 73.0479},
        {city: "Ngerulmud, Palau", timezone: "JST (UTC+9) - Japan (No DST)", lat: 7.5004, lon: 134.6243},
        {city: "Jerusalem, Palestine", timezone: "EET (UTC+2) - Eastern Europe", lat: 31.7683, lon: 35.2137},
        {city: "Panama City, Panama", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: 8.9824, lon: -79.5199},
        {city: "Port Moresby, Papua New Guinea", timezone: "PGT (UTC+10) - Papua New Guinea (No DST)", lat: -9.4438, lon: 147.1803},
        {city: "Asunción, Paraguay", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: -25.2637, lon: -57.5759},
        {city: "Lima, Peru", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: -12.0464, lon: -77.0428},
        {city: "Manila, Philippines", timezone: "CST (UTC+8) - China (No DST)", lat: 14.5995, lon: 120.9842},
        {city: "Warsaw, Poland", timezone: "CET (UTC+1) - Central Europe", lat: 52.2297, lon: 21.0122},
        {city: "Lisbon, Portugal", timezone: "WET (UTC+0) - Western Europe", lat: 38.7223, lon: -9.1393},
        {city: "Doha, Qatar", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 25.2854, lon: 51.5310},
        {city: "Bucharest, Romania", timezone: "EET (UTC+2) - Eastern Europe", lat: 44.4268, lon: 26.1025},
        {city: "Moscow, Russia", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 55.7558, lon: 37.6173},
        {city: "Kigali, Rwanda", timezone: "CET (UTC+1) - Central Europe", lat: -1.9441, lon: 30.0619},
        {city: "Basseterre, Saint Kitts and Nevis", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 17.3026, lon: -62.7177},
        {city: "Castries, Saint Lucia", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 14.0101, lon: -60.9875},
        {city: "Kingstown, Saint Vincent and Grenadines", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 13.1609, lon: -61.2248},
        {city: "Apia, Samoa", timezone: "TOT (UTC+13) - Tonga (No DST)", lat: -13.8507, lon: -171.7514},
        {city: "San Marino, San Marino", timezone: "CET (UTC+1) - Central Europe", lat: 43.9356, lon: 12.4473},
        {city: "São Tomé, São Tomé and Príncipe", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 0.3365, lon: 6.7278},
        {city: "Riyadh, Saudi Arabia", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 24.7136, lon: 46.6753},
        {city: "Dakar, Senegal", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 14.7167, lon: -17.4677},
        {city: "Belgrade, Serbia", timezone: "CET (UTC+1) - Central Europe", lat: 44.7866, lon: 20.4489},
        {city: "Victoria, Seychelles", timezone: "GST (UTC+4) - Gulf (No DST)", lat: -4.6191, lon: 55.4513},
        {city: "Freetown, Sierra Leone", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 8.4657, lon: -13.2317},
        {city: "Singapore, Singapore", timezone: "CST (UTC+8) - China (No DST)", lat: 1.3521, lon: 103.8198},
        {city: "Bratislava, Slovakia", timezone: "CET (UTC+1) - Central Europe", lat: 48.1486, lon: 17.1077},
        {city: "Ljubljana, Slovenia", timezone: "CET (UTC+1) - Central Europe", lat: 46.0569, lon: 14.5058},
        {city: "Honiara, Solomon Islands", timezone: "VUT (UTC+11) - Vanuatu", lat: -9.4456, lon: 159.9729},
        {city: "Mogadishu, Somalia", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 2.0469, lon: 45.3182},
        {city: "Pretoria, South Africa", timezone: "CET (UTC+1) - Central Europe", lat: -25.7479, lon: 28.2293},
        {city: "Cape Town, South Africa", timezone: "CET (UTC+1) - Central Europe", lat: -33.9249, lon: 18.4241},
        {city: "Bloemfontein, South Africa", timezone: "CET (UTC+1) - Central Europe", lat: -29.0852, lon: 26.1596},
        {city: "Juba, South Sudan", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 4.8594, lon: 31.5713},
        {city: "Madrid, Spain", timezone: "CET (UTC+1) - Central Europe", lat: 40.4168, lon: -3.7038},
        {city: "Sri Jayawardenepura Kotte, Sri Lanka", timezone: "IST (UTC+5:30) - India (No DST)", lat: 6.8868, lon: 79.9187},
        {city: "Khartoum, Sudan", timezone: "CET (UTC+1) - Central Europe", lat: 15.5007, lon: 32.5599},
        {city: "Paramaribo, Suriname", timezone: "BRT (UTC-3) - Brazil (Brasilia)", lat: 5.8520, lon: -55.2038},
        {city: "Stockholm, Sweden", timezone: "CET (UTC+1) - Central Europe", lat: 59.3293, lon: 18.0686},
        {city: "Bern, Switzerland", timezone: "CET (UTC+1) - Central Europe", lat: 46.9480, lon: 7.4474},
        {city: "Damascus, Syria", timezone: "EET (UTC+2) - Eastern Europe", lat: 33.5138, lon: 36.2765},
        {city: "Taipei, Taiwan", timezone: "CST (UTC+8) - China (No DST)", lat: 25.0330, lon: 121.5654},
        {city: "Dushanbe, Tajikistan", timezone: "PKT (UTC+5) - Pakistan (No DST)", lat: 38.5598, lon: 68.7870},
        {city: "Dodoma, Tanzania", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: -6.1731, lon: 35.7419},
        {city: "Bangkok, Thailand", timezone: "ICT (UTC+7) - Indochina (No DST)", lat: 13.7563, lon: 100.5018},
        {city: "Dili, Timor-Leste", timezone: "JST (UTC+9) - Japan (No DST)", lat: -8.5569, lon: 125.5167},
        {city: "Lomé, Togo", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 6.1725, lon: 1.2215},
        {city: "Nuku'alofa, Tonga", timezone: "TOT (UTC+13) - Tonga (No DST)", lat: -21.1393, lon: -175.2049},
        {city: "Port of Spain, Trinidad and Tobago", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 10.6918, lon: -61.2225},
        {city: "Tunis, Tunisia", timezone: "CET (UTC+1) - Central Europe", lat: 36.8065, lon: 10.1815},
        {city: "Ankara, Turkey", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 39.9334, lon: 32.8597},
        {city: "Ashgabat, Turkmenistan", timezone: "PKT (UTC+5) - Pakistan (No DST)", lat: 37.9601, lon: 58.3260},
        {city: "Funafuti, Tuvalu", timezone: "NZST (UTC+12) - New Zealand", lat: -8.5211, lon: 179.1981},
        {city: "Kampala, Uganda", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 0.3476, lon: 32.5825},
        {city: "Kyiv, Ukraine", timezone: "EET (UTC+2) - Eastern Europe", lat: 50.4501, lon: 30.5234},
        {city: "Abu Dhabi, United Arab Emirates", timezone: "GST (UTC+4) - Gulf (No DST)", lat: 24.4539, lon: 54.3773},
        {city: "London, United Kingdom", timezone: "GMT (UTC+0) - Greenwich Mean Time", lat: 51.5074, lon: -0.1278},
        {city: "Washington, D.C., United States", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: 38.9072, lon: -77.0369},
        {city: "Montevideo, Uruguay", timezone: "BRT (UTC-3) - Brazil (Brasilia)", lat: -34.9011, lon: -56.1645},
        {city: "Tashkent, Uzbekistan", timezone: "PKT (UTC+5) - Pakistan (No DST)", lat: 41.2995, lon: 69.2401},
        {city: "Port Vila, Vanuatu", timezone: "VUT (UTC+11) - Vanuatu", lat: -17.7333, lon: 168.3273},
        {city: "Vatican City, Vatican City", timezone: "CET (UTC+1) - Central Europe", lat: 41.9029, lon: 12.4534},
        {city: "Caracas, Venezuela", timezone: "AST (UTC-4) - Atlantic (Canada)", lat: 10.4806, lon: -66.9036},
        {city: "Hanoi, Vietnam", timezone: "ICT (UTC+7) - Indochina (No DST)", lat: 21.0278, lon: 105.8342},
        {city: "Sana'a, Yemen", timezone: "MSK (UTC+3) - Moscow (No DST)", lat: 15.3694, lon: 44.1910},
        {city: "Lusaka, Zambia", timezone: "CET (UTC+1) - Central Europe", lat: -15.3875, lon: 28.3228},
        {city: "Harare, Zimbabwe", timezone: "CET (UTC+1) - Central Europe", lat: -17.8252, lon: 31.0335},
        {city: "Baker Island, United States", timezone: "IDLW (UTC-12) - International Date Line West", lat: 0.1936, lon: -176.4769},
        {city: "Honolulu, United States", timezone: "HST (UTC-10) - Hawaii (No DST)", lat: 21.3069, lon: -157.8583},
        {city: "Anchorage, United States", timezone: "AKST (UTC-9) - Alaska", lat: 61.2181, lon: -149.9003},
        {city: "Los Angeles, United States", timezone: "PST (UTC-8) - Pacific (US/Canada)", lat: 34.0522, lon: -118.2437},
        {city: "San Francisco, United States", timezone: "PST (UTC-8) - Pacific (US/Canada)", lat: 37.7749, lon: -122.4194},
        {city: "Vancouver, Canada", timezone: "PST (UTC-8) - Pacific (US/Canada)", lat: 49.2827, lon: -123.1207},
        {city: "Denver, United States", timezone: "MST (UTC-7) - Mountain (US/Canada)", lat: 39.7392, lon: -104.9903},
        {city: "Phoenix, United States", timezone: "MST (UTC-7) - Arizona (No DST)", lat: 33.4484, lon: -112.0740},
        {city: "Chicago, United States", timezone: "CST (UTC-6) - Central (US/Canada)", lat: 41.8781, lon: -87.6298},
        {city: "New York, United States", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: 40.7128, lon: -74.0060},
        {city: "Toronto, Canada", timezone: "EST (UTC-5) - Eastern (US/Canada)", lat: 43.6532, lon: -79.3832},
        {city: "Sao Paulo, Brazil", timezone: "BRT (UTC-3) - Brazil (Brasilia)", lat: -23.5505, lon: -46.6333},
        {city: "Fernando de Noronha, Brazil", timezone: "FNT (UTC-2) - Fernando de Noronha (No DST)", lat: -3.8506, lon: -32.4244},
        {city: "Ponta Delgada, Portugal", timezone: "AZOT (UTC-1) - Azores", lat: 37.7394, lon: -25.6687},
        {city: "Madrid, Spain", timezone: "CET (UTC+1) - Central Europe", lat: 40.4168, lon: -3.7038},
        {city: "Kyiv, Ukraine", timezone: "EET (UTC+2) - Eastern Europe", lat: 50.4501, lon: 30.5234},
        {city: "Dubai, United Arab Emirates", timezone: "GST (UTC+4) - Gulf (No DST)", lat: 25.2048, lon: 55.2708},
        {city: "Mumbai, India", timezone: "IST (UTC+5:30) - India (No DST)", lat: 19.0760, lon: 72.8777},
        {city: "Shanghai, China", timezone: "CST (UTC+8) - China (No DST)", lat: 31.2304, lon: 121.4737},
        {city: "Adelaide, Australia", timezone: "ACST (UTC+9:30) - Central Australia", lat: -34.9285, lon: 138.6007},
        {city: "Sydney, Australia", timezone: "AEST (UTC+10) - Eastern Australia", lat: -33.8688, lon: 151.2093},
        {city: "Auckland, New Zealand", timezone: "NZST (UTC+12) - New Zealand", lat: -36.8485, lon: 174.7633},
        {city: "Kiritimati, Kiribati", timezone: "LINT (UTC+14) - Line Islands (No DST)", lat: 1.9876, lon: -157.4750}
    ];
    // DOM elements
    const sourceTimezone = document.getElementById('sourceTimezone');
    const targetTimezone = document.getElementById('targetTimezone');
    const sourceCity = document.getElementById('sourceCity');
    const targetCity = document.getElementById('targetCity');
    const cityList = document.getElementById('cityList');
    const sourceDate = document.getElementById('sourceDate');
    const sourceHour = document.getElementById('sourceHour');
    const sourceMinute = document.getElementById('sourceMinute');
    const sourceHourDisplay = document.getElementById('sourceHourDisplay');
    const sourceMinuteDisplay = document.getElementById('sourceMinuteDisplay');
    const sourceTimeDisplay = document.getElementById('sourceTimeDisplay');
    const sourceDayDisplay = document.getElementById('sourceDayDisplay');
    const sourceWarning = document.getElementById('sourceWarning');
    const sourceDSTChoice = document.getElementById('sourceDSTChoice');
    const sourceAdjustButton = document.getElementById('sourceAdjustButton');
    const targetTimeDisplay = document.getElementById('targetTimeDisplay');
    const targetDayDisplay = document.getElementById('targetDayDisplay');
    const targetDateDisplay = document.getElementById('targetDateDisplay');
    const targetWarning = document.getElementById('targetWarning');
    const targetDSTChoice = document.getElementById('targetDSTChoice');
    const targetAdjustButton = document.getElementById('targetAdjustButton');
    const historyList = document.getElementById('historyList');
    const geoLoading = document.getElementById('geoLoading');

    let sourceAdjustedTime = null;
    let targetAdjustedTime = null;

    // Haversine formula to calculate distance between two points (in kilometers)
    function getDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth's radius in kilometers
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    // Find the closest city based on coordinates
    function findClosestCity(lat, lon) {
        let minDistance = Infinity;
        let closestCity = null;

        cityToTimezone.forEach(({ city, lat: cityLat, lon: cityLon }) => {
            const distance = getDistance(lat, lon, cityLat, cityLon);
            console.log(`Distance to ${city}: ${distance.toFixed(2)} km`);
            if (distance < minDistance) {
                minDistance = distance;
                closestCity = city;
            }
        });

        console.log(`Closest city: ${closestCity} (${minDistance.toFixed(2)} km)`);
        return closestCity;
    }

    // Set default target city based on user's location
    function setDefaultTargetCity() {
        geoLoading.style.display = 'block';
        if (navigator.geolocation) {
            console.log("Requesting geolocation...");
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log(`User coordinates: ${latitude}, ${longitude}`);
                    const closestCity = findClosestCity(latitude, longitude);
                    targetCity.value = closestCity;
                    const tz = getTimezoneFromCity(closestCity);
                    if (tz) {
                        targetTimezone.value = tz;
                        updateSelectionUI('target', 'city');
                    }
                    convertTime();
                    geoLoading.style.display = 'none';
                },
                (error) => {
                    console.error(`Geolocation error: ${error.message} (Code: ${error.code})`);
                    targetCity.value = "Kuala Lumpur, Malaysia";
                    targetTimezone.value = "CST (UTC+8) - China (No DST)";
                    updateSelectionUI('target', 'city');
                    convertTime();
                    geoLoading.style.display = 'none';
                },
                { timeout: 30000, maximumAge: 0 }
            );
        } else {
            console.error("Geolocation not supported by browser");
            targetCity.value = "Kuala Lumpur, Malaysia";
            targetTimezone.value = "CST (UTC+8) - China (No DST)";
            updateSelectionUI('target', 'city');
            convertTime();
            geoLoading.style.display = 'none';
        }
    }

    // Populate timezone dropdowns
    function populateTimezones() {
        timezones.forEach(tz => {
            const option1 = new Option(tz.name, tz.name);
            const option2 = new Option(tz.name, tz.name);
            sourceTimezone.add(option1);
            targetTimezone.add(option2);
        });
    }

    // Populate city datalist
    function populateCities() {
        cityToTimezone.forEach(({ city }) => {
            const option = document.createElement('option');
            option.value = city;
            cityList.appendChild(option);
        });
    }

    // Get timezone from city
    function getTimezoneFromCity(city) {
        const match = cityToTimezone.find(item => item.city.toLowerCase() === city.toLowerCase());
        return match ? match.timezone : null;
    }

    // Update UI to reflect active selection method
    function updateSelectionUI(section, activeField) {
        const timezoneSelect = section === 'source' ? sourceTimezone : targetTimezone;
        const cityInput = section === 'source' ? sourceCity : targetCity;
        if (activeField === 'city') {
            cityInput.classList.add('active-selection');
            cityInput.classList.remove('inactive-selection');
            timezoneSelect.classList.add('inactive-selection');
            timezoneSelect.classList.remove('active-selection');
        } else {
            timezoneSelect.classList.add('active-selection');
            timezoneSelect.classList.remove('inactive-selection');
            cityInput.classList.add('inactive-selection');
            cityInput.classList.remove('active-selection');
        }
    }

    // Format time to 12-hour with AM/PM
    function formatTime(hours, minutes) {
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    }

    // Format date as YYYY-MM-DD
    function formatDate(date) {
        return date.toISOString().split('T')[0];
    }
// Get nth occurrence of a day in a month
    function getNthDayOfMonth(year, month, dayOfWeek, n) {
        const firstDay = new Date(year, month, 1);
        const daysUntilFirst = (dayOfWeek - firstDay.getDay() + 7) % 7;
        return new Date(year, month, daysUntilFirst + 1 + (n - 1) * 7);
    }

    // Get last occurrence of a day in a month
    function getLastDayOfMonth(year, month, dayOfWeek) {
        const lastDay = new Date(year, month + 1, 0);
        const daysFromEnd = (lastDay.getDay() - dayOfWeek + 7) % 7;
        return new Date(year, month, lastDay.getDate() - daysFromEnd);
    }

    // Get DST transition times
    function getDSTTransitions(year, region) {
        if (region === "US" || region === "CA") {
            const start = getNthDayOfMonth(year, 2, 0, 2); // 2nd Sunday March
            const end = getNthDayOfMonth(year, 10, 0, 1);  // 1st Sunday November
            start.setHours(2, 0, 0, 0);
            end.setHours(2, 0, 0, 0);
            return { start, end, offset: 1, startHour: 2, endHour: 2 };
        } else if (region === "EU") {
            const start = getLastDayOfMonth(year, 2, 0);
            const end = getLastDayOfMonth(year, 9, 0);
            start.setUTCHours(1, 0, 0, 0);
            end.setUTCHours(1, 0, 0, 0);
            return { start, end, offset: 1, startHour: 1, endHour: 1 };
        } else if (region === "AU") {
            const start = getNthDayOfMonth(year, 9, 0, 1);
            const end = getNthDayOfMonth(year + 1, 3, 0, 1);
            start.setHours(2, 0, 0, 0);
            end.setHours(3, 0, 0, 0);
            return { start, end, offset: 1, startHour: 2, endHour: 3 };
        } else if (region === "NZ") {
            const start = getLastDayOfMonth(year, 8, 0);
            const end = getNthDayOfMonth(year + 1, 3, 0, 1);
            start.setHours(2, 0, 0, 0);
            end.setHours(3, 0, 0, 0);
            return { start, end, offset: 1, startHour: 2, endHour: 3 };
        } else if (region === "BR") {
            const start = getNthDayOfMonth(year, 10, 0, 3);
            const end = getNthDayOfMonth(year + 1, 1, 0, 3);
            start.setHours(0, 0, 0, 0);
            end.setHours(0, 0, 0, 0);
            return { start, end, offset: 1, startHour: 0, endHour: 0 };
        } else if (region === "CL") {
            const start = getNthDayOfMonth(year, 8, 0, 1);
            const end = getNthDayOfMonth(year + 1, 3, 0, 1);
            start.setHours(0, 0, 0, 0);
            end.setHours(0, 0, 0, 0);
            return { start, end, offset: -1, startHour: 0, endHour: 0 };
        }
        return null;
    }

    // Check DST status and handle skipped/ambiguous times
    function getDSTStatus(timezoneName, dateTime, userChoice = "standard") {
        const timezone = timezones.find(tz => tz.name === timezoneName);
        let offset = timezone.offset;
        let warning = "";
        let isAmbiguous = false;
        let adjustedTime = null;
        let isSkipped = false;

        if (!timezone.dstRegion) return { offset, warning, isAmbiguous, adjustedTime, isSkipped };

        const year = dateTime.getFullYear();
        const transitions = getDSTTransitions(year, timezone.dstRegion);
        if (!transitions) return { offset, warning, isAmbiguous, adjustedTime, isSkipped };

        const utcTime = new Date(dateTime.getTime() + offset * 60 * 60 * 1000);
        let isDST = false;

        if (["AU", "NZ", "BR", "CL"].includes(timezone.dstRegion) && dateTime.getMonth() < 3) {
            const prevTransitions = getDSTTransitions(year - 1, timezone.dstRegion);
            isDST = utcTime >= prevTransitions.start && utcTime < transitions.end;
        } else {
            isDST = utcTime >= transitions.start && utcTime < transitions.end;
        }

        const localHours = dateTime.getHours();
        const localMinutes = dateTime.getMinutes();

        if (Math.abs(utcTime - transitions.start) < 60 * 60 * 1000) {
            if (localHours === transitions.startHour && localMinutes >= 0 && localMinutes < 60) {
                const adjustedHours = transitions.startHour + Math.abs(transitions.offset);
                adjustedTime = new Date(dateTime);
                adjustedTime.setHours(adjustedHours, 0, 0, 0);
                warning = `Note: This time is skipped due to DST start (spring forward). Next valid time: ${formatTime(adjustedHours, 0)}.`;
                isSkipped = true;
                return { offset: offset + transitions.offset, warning, isAmbiguous, adjustedTime, isSkipped };
            }
        }

        if (Math.abs(utcTime - transitions.end) < 60 * 60 * 1000) {
            if (localHours === (transitions.endHour - transitions.offset) && localMinutes >= 0 && localMinutes < 60) {
                warning = "Note: This time is ambiguous due to DST end (fall back). Choose below:";
                isAmbiguous = true;
                if (userChoice === "dst") {
                    isDST = true;
                } else {
                    isDST = false;
                }
            }
        }

        return { offset: isDST ? offset + transitions.offset : offset, warning, isAmbiguous, adjustedTime, isSkipped };
    }

    // Add to history with city and country
    function addToHistory(sourceTZ, sourceTime, sourceDate, targetTZ, targetTime, targetDate) {
        const sourceCityName = sourceCity.value || "Unknown City";
        const targetCityName = targetCity.value || "Unknown City";
        const li = document.createElement('li');
        li.textContent = `${sourceCityName} (${sourceTZ}): ${sourceTime}, ${sourceDate} → ${targetCityName} (${targetTZ}): ${targetTime}, ${targetDate}`;
        historyList.insertBefore(li, historyList.firstChild);
        if (historyList.children.length > 10) {
            historyList.removeChild(historyList.lastChild);
        }
    }

    // Clear history
    function clearHistory() {
        while (historyList.firstChild) {
            historyList.removeChild(historyList.firstChild);
        }
    }

    // Convert time between timezones
    function convertTime() {
        const date = new Date(sourceDate.value);
        const hours = parseInt(sourceHour.value);
        const minutes = parseInt(sourceMinute.value);
        date.setHours(hours, minutes, 0, 0);

        const sourceChoice = document.querySelector('input[name="sourceDST"]:checked')?.value || "standard";
        const targetChoice = document.querySelector('input[name="targetDST"]:checked')?.value || "standard";

        if (sourceCity.value) {
            const tz = getTimezoneFromCity(sourceCity.value);
            if (tz) {
                sourceTimezone.value = tz;
                updateSelectionUI('source', 'city');
            } else {
                updateSelectionUI('source', 'timezone');
            }
        } else {
            updateSelectionUI('source', 'timezone');
        }

        if (targetCity.value) {
            const tz = getTimezoneFromCity(targetCity.value);
            if (tz) {
                targetTimezone.value = tz;
                updateSelectionUI('target', 'city');
            } else {
                updateSelectionUI('target', 'timezone');
            }
        } else {
            updateSelectionUI('target', 'timezone');
        }

        const sourceStatus = getDSTStatus(sourceTimezone.value, date, sourceChoice);
        let sourceOffset = sourceStatus.offset;
        sourceAdjustedTime = sourceStatus.adjustedTime;
        let effectiveSourceTime = sourceAdjustedTime || date;

        const targetStatus = getDSTStatus(targetTimezone.value, effectiveSourceTime, targetChoice);
        let targetOffset = targetStatus.offset;
        targetAdjustedTime = targetStatus.adjustedTime;
        let effectiveTargetTime = targetAdjustedTime || effectiveSourceTime;

        sourceDSTChoice.style.display = sourceStatus.isAmbiguous ? "block" : "none";
        sourceAdjustButton.style.display = sourceStatus.isSkipped ? "block" : "none";
        targetDSTChoice.style.display = targetStatus.isAmbiguous ? "block" : "none";
        targetAdjustButton.style.display = targetStatus.isSkipped ? "block" : "none";

        // Calculate UTC time and then target time
        const utcTimeMs = effectiveSourceTime.getTime() - (sourceOffset * 60 * 60 * 1000);
        const targetTime = new Date(utcTimeMs + (targetOffset * 60 * 60 * 1000));

        // Extract time and date components explicitly
        const targetHours = targetTime.getHours();
        const targetMinutes = targetTime.getMinutes();
        const targetYear = targetTime.getFullYear();
        const targetMonth = String(targetTime.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const targetDayOfMonth = String(targetTime.getDate()).padStart(2, '0');
        const targetDate = `${targetYear}-${targetMonth}-${targetDayOfMonth}`;

        // Define daysOfWeek before using it
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // Debugging logs with corrected terminology
        console.log("Source Local Time:", `${formatTime(hours, minutes)} ${sourceDate.value} (UTC${sourceOffset >= 0 ? '+' : ''}${sourceOffset})`);
        console.log("Target Local Time:", `${formatTime(targetHours, targetMinutes)} ${targetDate} (UTC${targetOffset >= 0 ? '+' : ''}${targetOffset})`);
        console.log("Target Date:", targetDate);
        console.log("Target Day (calculated):", daysOfWeek[targetTime.getDay()]);

        const sourceDisplayTime = formatTime(hours, minutes);
        const targetDisplayTime = formatTime(targetHours, targetMinutes);

        // Calculate and display the day of the week
        const sourceDay = daysOfWeek[effectiveSourceTime.getDay()];
        const targetDay = daysOfWeek[targetTime.getDay()];

        sourceTimeDisplay.textContent = `Time: ${sourceDisplayTime} (UTC${sourceOffset >= 0 ? '+' : ''}${sourceOffset})`;
        sourceDayDisplay.textContent = `Day: ${sourceDay}`;
        sourceWarning.textContent = sourceStatus.warning;
        targetTimeDisplay.textContent = `Converted Time: ${targetDisplayTime} (UTC${targetOffset >= 0 ? '+' : ''}${targetOffset})`;
        targetDayDisplay.textContent = `Day: ${targetDay}`;
        targetDateDisplay.textContent = `Date: ${targetDate}`;
        targetWarning.textContent = targetStatus.warning;

        sourceTimeDisplay.classList.add('updated');
        targetTimeDisplay.classList.add('updated');
        setTimeout(() => {
            sourceTimeDisplay.classList.remove('updated');
            targetTimeDisplay.classList.remove('updated');
        }, 1000);

        addToHistory(sourceTimezone.value, sourceDisplayTime, sourceDate.value, targetTimezone.value, targetDisplayTime, targetDate);
    }
    // Adjust source time to next valid time
    function adjustSourceTime() {
        if (sourceAdjustedTime) {
            sourceHour.value = sourceAdjustedTime.getHours();
            sourceMinute.value = sourceAdjustedTime.getMinutes();
            sourceHourDisplay.textContent = sourceHour.value;
            sourceMinuteDisplay.textContent = sourceMinute.value;
            convertTime();
        }
    }

    // Adjust target time to next valid time
    function adjustTargetTime() {
        if (targetAdjustedTime) {
            const date = new Date(sourceDate.value);
            date.setHours(targetAdjustedTime.getHours(), targetAdjustedTime.getMinutes(), 0, 0);
            sourceHour.value = date.getHours();
            sourceMinute.value = date.getMinutes();
            sourceHourDisplay.textContent = sourceHour.value;
            sourceMinuteDisplay.textContent = sourceMinute.value;
            convertTime();
        }
    }

    // Swap source and target
    function swapTimezones() {
        const tempTimezone = sourceTimezone.value;
        const tempCity = sourceCity.value;
        sourceTimezone.value = targetTimezone.value;
        sourceCity.value = targetCity.value;
        targetTimezone.value = tempTimezone;
        targetCity.value = tempCity;

        const tempHour = sourceHour.value;
        const tempMinute = sourceMinute.value;
        const tempDate = sourceDate.value;

        const targetTime = new Date(targetDateDisplay.textContent.replace("Date: ", ""));
        sourceHour.value = targetTime.getHours();
        sourceMinute.value = targetTime.getMinutes();
        sourceDate.value = formatDate(targetTime);

        sourceHourDisplay.textContent = sourceHour.value;
        sourceMinuteDisplay.textContent = sourceMinute.value;

        convertTime();
    }

    // Event listeners
    sourceHour.oninput = () => {
        sourceHourDisplay.textContent = sourceHour.value;
        convertTime();
    };
    sourceMinute.oninput = () => {
        sourceMinuteDisplay.textContent = sourceMinute.value;
        convertTime();
    };
    sourceDate.onchange = convertTime;
    sourceTimezone.onchange = () => {
        sourceCity.value = '';
        updateSelectionUI('source', 'timezone');
        convertTime();
    };
    targetTimezone.onchange = () => {
        targetCity.value = '';
        updateSelectionUI('target', 'timezone');
        convertTime();
    };
    sourceCity.onchange = () => {
        const tz = getTimezoneFromCity(sourceCity.value);
        if (tz) {
            sourceTimezone.value = tz;
            updateSelectionUI('source', 'city');
            convertTime();
        }
    };
    targetCity.onchange = () => {
        const tz = getTimezoneFromCity(targetCity.value);
        if (tz) {
            targetTimezone.value = tz;
            updateSelectionUI('target', 'city');
            convertTime();
        }
    };
    sourceDSTChoice.onchange = convertTime;
    targetDSTChoice.onchange = convertTime;
    sourceAdjustButton.onclick = adjustSourceTime;
    targetAdjustButton.onclick = adjustTargetTime;
    document.getElementById('swapButton').onclick = swapTimezones;

    // Initialization
    populateTimezones();
    populateCities();
    sourceTimezone.value = "UTC (UTC+0) - Coordinated Universal Time";
    sourceCity.value = "";
    updateSelectionUI('source', 'timezone');
    setDefaultTargetCity();
</script>
