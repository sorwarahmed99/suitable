
    const countries = [{
        "name": "Andorra",
        "code": "Andorra"
      }, {
        "name": "Austria",
        "code": "Austria"
      }, {
        "name": "Australia",
        "code": "Australia"
      }, {
        "name": "Belgium",
        "code": "Belgium"
      }, {
        "name": "Canada",
        "code": "Canada"
      }, {
        "name": "Switzerland",
        "code": "Switzerland"
      }, {
        "name": "Gibraltar",
        "code": "Gibraltar"
      }, {
        "name": "Czech Republic",
        "code": "Czech Republic"
      }, {
        "name": "Germany",
        "code": "Germany"
      }, {
        "name": "Denmark",
        "code": "Denmark"
      }, {
        "name": "Estonia",
        "code": "Estonia"
      }, {
        "name": "Spain",
        "code": "Spain"
      }, {
        "name": "Finland",
        "code": "Finland"
      }, {
        "name": "Faroe Islands",
        "code": "Faroe Islands"
      }, {
        "name": "France",
        "code": "France"
      }, {
        "name": "United Kingdom",
        "code": "United Kingdom"
      }, {
        "name": "Guernsey",
        "code": "Guernsey"
      }, {
        "name": "Greece",
        "code": "Greece"
      }, {
        "name": "Qatar",
        "code": "Qatar"
      }, {
        "name": "Hungary",
        "code": "Hungary"
      }, {
        "name": "Ireland",
        "code": "Ireland"
      }, {
        "name": "Kuwait",
        "code": "Kuwait"
      }, {
        "name": "Iceland",
        "code": "Iceland"
      }, {
        "name": "Italy",
        "code": "Italy"
      }, {
        "name": "Saudi Arabia",
        "code": "Saudi Arabia"
      }, {
        "name": "Liechtenstein",
        "code": "Liechtenstein"
      }, {
        "name": "Lithuania",
        "code": "Lithuania"
      }, {
        "name": "Luxembourg",
        "code": "Luxembourg"
      }, {
        "name": "United States",
        "code": "United States"
      }, {
        "name": "Monaco",
        "code": "Monaco"
      }, {
        "name": "New Zealand ",
        "code": "New Zealand "
      }, {
        "name": "Malta",
        "code": "Malta"
      }, {
        "name": "Netherlands",
        "code": "Netherlands"
      }, {
        "name": "Norway",
        "code": "Norway"
      }, {
        "name": "Oman",
        "code": "Oman"
      }, {
        "name": "Portugal",
        "code": "Portugal"
      }, {
        "name": "United Arab Emirates ",
        "code": "United Arab Emirates "
      }, {
        "name": "Sweden",
        "code": "Sweden"
      }];

    const sortedcs = countries.sort((a,b) => a.name.localeCompare(b.name));
    

    const backhomecountries = [ 
        {name: 'Afghanistan', code: 'AF'}, 
        {name: 'Åland Islands', code: 'AX'}, 
        {name: 'Albania', code: 'AL'}, 
        {name: 'Algeria', code: 'DZ'}, 
        {name: 'American Samoa', code: 'AS'}, 
        {name: 'AndorrA', code: 'AD'}, 
        {name: 'Angola', code: 'AO'}, 
        {name: 'Anguilla', code: 'AI'}, 
        {name: 'Antarctica', code: 'AQ'}, 
        {name: 'Antigua and Barbuda', code: 'AG'}, 
        {name: 'Argentina', code: 'AR'}, 
        {name: 'Armenia', code: 'AM'}, 
        {name: 'Aruba', code: 'AW'}, 
        {name: 'Australia', code: 'AU'}, 
        {name: 'Austria', code: 'AT'}, 
        {name: 'Azerbaijan', code: 'AZ'}, 
        {name: 'Bahamas', code: 'BS'}, 
        {name: 'Bahrain', code: 'BH'}, 
        {name: 'Bangladesh', code: 'BD'}, 
        {name: 'Barbados', code: 'BB'}, 
        {name: 'Belarus', code: 'BY'}, 
        {name: 'Belgium', code: 'BE'}, 
        {name: 'Belize', code: 'BZ'}, 
        {name: 'Benin', code: 'BJ'}, 
        {name: 'Bermuda', code: 'BM'}, 
        {name: 'Bhutan', code: 'BT'}, 
        {name: 'Bolivia', code: 'BO'}, 
        {name: 'Bosnia and Herzegovina', code: 'BA'}, 
        {name: 'Botswana', code: 'BW'}, 
        {name: 'Bouvet Island', code: 'BV'}, 
        {name: 'Brazil', code: 'BR'}, 
        {name: 'British Indian Ocean Territory', code: 'IO'}, 
        {name: 'Brunei Darussalam', code: 'BN'}, 
        {name: 'Bulgaria', code: 'BG'}, 
        {name: 'Burkina Faso', code: 'BF'}, 
        {name: 'Burundi', code: 'BI'}, 
        {name: 'Cambodia', code: 'KH'}, 
        {name: 'Cameroon', code: 'CM'}, 
        {name: 'Canada', code: 'CA'}, 
        {name: 'Cape Verde', code: 'CV'}, 
        {name: 'Cayman Islands', code: 'KY'}, 
        {name: 'Central African Republic', code: 'CF'}, 
        {name: 'Chad', code: 'TD'}, 
        {name: 'Chile', code: 'CL'}, 
        {name: 'China', code: 'CN'}, 
        {name: 'Christmas Island', code: 'CX'}, 
        {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
        {name: 'Colombia', code: 'CO'}, 
        {name: 'Comoros', code: 'KM'}, 
        {name: 'Congo', code: 'CG'}, 
        {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
        {name: 'Cook Islands', code: 'CK'}, 
        {name: 'Costa Rica', code: 'CR'}, 
        {name: 'Cote D\'Ivoire', code: 'CI'}, 
        {name: 'Croatia', code: 'HR'}, 
        {name: 'Cuba', code: 'CU'}, 
        {name: 'Cyprus', code: 'CY'}, 
        {name: 'Czech Republic', code: 'CZ'}, 
        {name: 'Denmark', code: 'DK'}, 
        {name: 'Djibouti', code: 'DJ'}, 
        {name: 'Dominica', code: 'DM'}, 
        {name: 'Dominican Republic', code: 'DO'}, 
        {name: 'Ecuador', code: 'EC'}, 
        {name: 'Egypt', code: 'EG'}, 
        {name: 'El Salvador', code: 'SV'}, 
        {name: 'Equatorial Guinea', code: 'GQ'}, 
        {name: 'Eritrea', code: 'ER'}, 
        {name: 'Estonia', code: 'EE'}, 
        {name: 'Ethiopia', code: 'ET'}, 
        {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
        {name: 'Faroe Islands', code: 'FO'}, 
        {name: 'Fiji', code: 'FJ'}, 
        {name: 'Finland', code: 'FI'}, 
        {name: 'France', code: 'FR'}, 
        {name: 'French Guiana', code: 'GF'}, 
        {name: 'French Polynesia', code: 'PF'}, 
        {name: 'French Southern Territories', code: 'TF'}, 
        {name: 'Gabon', code: 'GA'}, 
        {name: 'Gambia', code: 'GM'}, 
        {name: 'Georgia', code: 'GE'}, 
        {name: 'Germany', code: 'DE'}, 
        {name: 'Ghana', code: 'GH'}, 
        {name: 'Gibraltar', code: 'GI'}, 
        {name: 'Greece', code: 'GR'}, 
        {name: 'Greenland', code: 'GL'}, 
        {name: 'Grenada', code: 'GD'}, 
        {name: 'Guadeloupe', code: 'GP'}, 
        {name: 'Guam', code: 'GU'}, 
        {name: 'Guatemala', code: 'GT'}, 
        {name: 'Guernsey', code: 'GG'}, 
        {name: 'Guinea', code: 'GN'}, 
        {name: 'Guinea-Bissau', code: 'GW'}, 
        {name: 'Guyana', code: 'GY'}, 
        {name: 'Haiti', code: 'HT'}, 
        {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
        {name: 'Holy See (Vatican City State)', code: 'VA'}, 
        {name: 'Honduras', code: 'HN'}, 
        {name: 'Hong Kong', code: 'HK'}, 
        {name: 'Hungary', code: 'HU'}, 
        {name: 'Iceland', code: 'IS'}, 
        {name: 'India', code: 'IN'}, 
        {name: 'Indonesia', code: 'ID'}, 
        {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
        {name: 'Iraq', code: 'IQ'}, 
        {name: 'Ireland', code: 'IE'}, 
        {name: 'Isle of Man', code: 'IM'}, 
        {name: 'Israel', code: 'IL'}, 
        {name: 'Italy', code: 'IT'}, 
        {name: 'Jamaica', code: 'JM'}, 
        {name: 'Japan', code: 'JP'}, 
        {name: 'Jersey', code: 'JE'}, 
        {name: 'Jordan', code: 'JO'}, 
        {name: 'Kazakhstan', code: 'KZ'}, 
        {name: 'Kenya', code: 'KE'}, 
        {name: 'Kiribati', code: 'KI'}, 
        {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
        {name: 'Korea, Republic of', code: 'KR'}, 
        {name: 'Kuwait', code: 'KW'}, 
        {name: 'Kyrgyzstan', code: 'KG'}, 
        {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
        {name: 'Latvia', code: 'LV'}, 
        {name: 'Lebanon', code: 'LB'}, 
        {name: 'Lesotho', code: 'LS'}, 
        {name: 'Liberia', code: 'LR'}, 
        {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
        {name: 'Liechtenstein', code: 'LI'}, 
        {name: 'Lithuania', code: 'LT'}, 
        {name: 'Luxembourg', code: 'LU'}, 
        {name: 'Macao', code: 'MO'}, 
        {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
        {name: 'Madagascar', code: 'MG'}, 
        {name: 'Malawi', code: 'MW'}, 
        {name: 'Malaysia', code: 'MY'}, 
        {name: 'Maldives', code: 'MV'}, 
        {name: 'Mali', code: 'ML'}, 
        {name: 'Malta', code: 'MT'}, 
        {name: 'Marshall Islands', code: 'MH'}, 
        {name: 'Martinique', code: 'MQ'}, 
        {name: 'Mauritania', code: 'MR'}, 
        {name: 'Mauritius', code: 'MU'}, 
        {name: 'Mayotte', code: 'YT'}, 
        {name: 'Mexico', code: 'MX'}, 
        {name: 'Micronesia, Federated States of', code: 'FM'}, 
        {name: 'Moldova, Republic of', code: 'MD'}, 
        {name: 'Monaco', code: 'MC'}, 
        {name: 'Mongolia', code: 'MN'}, 
        {name: 'Montserrat', code: 'MS'}, 
        {name: 'Morocco', code: 'MA'}, 
        {name: 'Mozambique', code: 'MZ'}, 
        {name: 'Myanmar', code: 'MM'}, 
        {name: 'Namibia', code: 'NA'}, 
        {name: 'Nauru', code: 'NR'}, 
        {name: 'Nepal', code: 'NP'}, 
        {name: 'Netherlands', code: 'NL'}, 
        {name: 'Netherlands Antilles', code: 'AN'}, 
        {name: 'New Caledonia', code: 'NC'}, 
        {name: 'New Zealand', code: 'NZ'}, 
        {name: 'Nicaragua', code: 'NI'}, 
        {name: 'Niger', code: 'NE'}, 
        {name: 'Nigeria', code: 'NG'}, 
        {name: 'Niue', code: 'NU'}, 
        {name: 'Norfolk Island', code: 'NF'}, 
        {name: 'Northern Mariana Islands', code: 'MP'}, 
        {name: 'Norway', code: 'NO'}, 
        {name: 'Oman', code: 'OM'}, 
        {name: 'Pakistan', code: 'PK'}, 
        {name: 'Palau', code: 'PW'}, 
        {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
        {name: 'Panama', code: 'PA'}, 
        {name: 'Papua New Guinea', code: 'PG'}, 
        {name: 'Paraguay', code: 'PY'}, 
        {name: 'Peru', code: 'PE'}, 
        {name: 'Philippines', code: 'PH'}, 
        {name: 'Pitcairn', code: 'PN'}, 
        {name: 'Poland', code: 'PL'}, 
        {name: 'Portugal', code: 'PT'}, 
        {name: 'Puerto Rico', code: 'PR'}, 
        {name: 'Qatar', code: 'QA'}, 
        {name: 'Reunion', code: 'RE'}, 
        {name: 'Romania', code: 'RO'}, 
        {name: 'Russian Federation', code: 'RU'}, 
        {name: 'RWANDA', code: 'RW'}, 
        {name: 'Saint Helena', code: 'SH'}, 
        {name: 'Saint Kitts and Nevis', code: 'KN'}, 
        {name: 'Saint Lucia', code: 'LC'}, 
        {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
        {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
        {name: 'Samoa', code: 'WS'}, 
        {name: 'San Marino', code: 'SM'}, 
        {name: 'Sao Tome and Principe', code: 'ST'}, 
        {name: 'Saudi Arabia', code: 'SA'}, 
        {name: 'Senegal', code: 'SN'}, 
        {name: 'Serbia and Montenegro', code: 'CS'}, 
        {name: 'Seychelles', code: 'SC'}, 
        {name: 'Sierra Leone', code: 'SL'}, 
        {name: 'Singapore', code: 'SG'}, 
        {name: 'Slovakia', code: 'SK'}, 
        {name: 'Slovenia', code: 'SI'}, 
        {name: 'Solomon Islands', code: 'SB'}, 
        {name: 'Somalia', code: 'SO'}, 
        {name: 'South Africa', code: 'ZA'}, 
        {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
        {name: 'Spain', code: 'ES'}, 
        {name: 'Sri Lanka', code: 'LK'}, 
        {name: 'Sudan', code: 'SD'}, 
        {name: 'Suriname', code: 'SR'}, 
        {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
        {name: 'Swaziland', code: 'SZ'}, 
        {name: 'Sweden', code: 'SE'}, 
        {name: 'Switzerland', code: 'CH'}, 
        {name: 'Syrian Arab Republic', code: 'SY'}, 
        {name: 'Taiwan, Province of China', code: 'TW'}, 
        {name: 'Tajikistan', code: 'TJ'}, 
        {name: 'Tanzania, United Republic of', code: 'TZ'}, 
        {name: 'Thailand', code: 'TH'}, 
        {name: 'Timor-Leste', code: 'TL'}, 
        {name: 'Togo', code: 'TG'}, 
        {name: 'Tokelau', code: 'TK'}, 
        {name: 'Tonga', code: 'TO'}, 
        {name: 'Trinidad and Tobago', code: 'TT'}, 
        {name: 'Tunisia', code: 'TN'}, 
        {name: 'Turkey', code: 'TR'}, 
        {name: 'Turkmenistan', code: 'TM'}, 
        {name: 'Turks and Caicos Islands', code: 'TC'}, 
        {name: 'Tuvalu', code: 'TV'}, 
        {name: 'Uganda', code: 'UG'}, 
        {name: 'Ukraine', code: 'UA'}, 
        {name: 'United Arab Emirates', code: 'AE'}, 
        {name: 'United Kingdom', code: 'GB'}, 
        {name: 'United States', code: 'US'}, 
        {name: 'United States Minor Outlying Islands', code: 'UM'}, 
        {name: 'Uruguay', code: 'UY'}, 
        {name: 'Uzbekistan', code: 'UZ'}, 
        {name: 'Vanuatu', code: 'VU'}, 
        {name: 'Venezuela', code: 'VE'}, 
        {name: 'Viet Nam', code: 'VN'}, 
        {name: 'Virgin Islands, British', code: 'VG'}, 
        {name: 'Virgin Islands, U.S.', code: 'VI'}, 
        {name: 'Wallis and Futuna', code: 'WF'}, 
        {name: 'Western Sahara', code: 'EH'}, 
        {name: 'Yemen', code: 'YE'}, 
        {name: 'Zambia', code: 'ZM'}, 
        {name: 'Zimbabwe', code: 'ZW'} 
    ];
 
    const residencystatusOptions = [
        { value: "Student visa", label: "Student visa"},
        { value: "Work permit", label: "Work permit"},
        { value: "Citizen", label: "Citizen"},
        { value: "Just Visiting", label: "Just Visiting"},
        { value: "Other", label: "Other"},
    ];

    const relocateOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Not sure", label: "Not sure" },
    ];

    const ethnicOriginOptions = [
        { value: "Asian", label: "Asian"},
        { value: "African", label: "African"},
        { value: "Asian-British", label: "Asian-British"},
        { value: "Asian-Bangladeshi", label: "Asian-Bangladeshi"},
    ];

    const heightOptions = [
        {value: '4ft', label: '4ft'},
        
        {value: '4ft 1in', label: '4ft 1in'},
        {value: '4ft 2in', label: '4ft 2in'},
        {value: '4ft 3in', label: '4ft 3in'},
        {value: '4ft 4in', label: '4ft 4in'},
        {value: '4ft 5in', label: '4ft 5in'},
        {value: '4ft 6in', label: '4ft 6in'},
        {value: '4ft 7in', label: '4ft 7in'},
        {value: '4ft 8in', label: '4ft 8in'},
        {value: '4ft 9in', label: '4ft 9in'},
        {value: '4ft 10in', label: '4ft 10in'},
        {value: '4ft 11in', label: '4ft 11in'},

        {value: '5ft', label: '5ft'},
        {value: '5ft 1in', label: '5ft 1in'},
        {value: '5ft 2in', label: '5ft 2in'},
        {value: '5ft 3in', label: '5ft 3in'},
        {value: '5ft 4in', label: '5ft 4in'},
        {value: '5ft 5in', label: '5ft 5in'},
        {value: '5ft 6in', label: '5ft 6in'},
        {value: '5ft 7in', label: '5ft 7in'},
        {value: '5ft 8in', label: '5ft 8in'},
        {value: '5ft 9in', label: '5ft 9in'},
        {value: '5ft 10in', label: '5ft 10in'},
        {value: '5ft 11in', label: '5ft 11in'},

        {value: '6ft', label: '6ft'},
        {value: '6ft 1in', label: '6ft 1in'},
        {value: '6ft 2in', label: '6ft 2in'},
        {value: '6ft 3in', label: '6ft 3in'},
        

    ];

    const maritalStatusOptions = [
        { value: "Single", label: "Single" },
        { value: "Divorced", label: "Divorced" },
        { value: "Widowed", label: "Widowed" },
        { value: "Hidden", label: "Prefer not to say" },
    ];


    const childrenOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];

    // Siblings
    let nums = [];
    let min = 1, max = 20;
    for(let i = min; i <= max; i++){
        nums.push(i);
    }


    // Education
    const educationOptions = [
        {value: 'Bachelor', label: 'Bachelor'},
        {value: 'Masters', label: 'Masters'},
        {value: 'PHD', label: 'PHD'},
    ];

    const yearsOptions = [
        {value: 'Newly Joined', label: 'Newly Joined'},
        {value: '1-3 Years', label: '1-3 Years'},
        {value: '3-5 Years', label: '3-5 Years'},
        {value: '5+ Years', label: '5+ Years'},
    ];

 



    // Religious
    const regiousHistoryOptions = [
        { value: "From birth", label: "From birth" },
        { value: "Revert", label: "Revert" },
        { value: "Other", label: "Other" },
    ];

    const readQuranOptions = [
        { value: "Yes, I have completed", label: "Yes, I have completed" },
        { value: "Yes, but I’m still learning", label: "Yes, but I’m still learning" },
        { value: "Still learning Arabic", label: "Still learning Arabic" },
        { value: "No, I can’t read ", label: "No, I can’t read " },
    ];

    const sectOptions = [
        { value: "Sunni", label: "Sunni" },
        { value: "Shia", label: "Shia" },
        { value: "Ahmadi", label: "Ahmadi" },
        { value: "Ibadi", label: "Ibadi" },
        { value: "Ismaili", label: "Ismaili" },
        { value: "Other", label: "Other" },
    ];

    const prayerFrequencyOptions = [
        { value: "Never Missed", label: "Never Missed" },
        { value: "Sometimes Miss", label: "Sometimes Miss" },
        { value: "Occasionally", label: "Occasionally" },
        { value: "Hidden", label: "Prefer not to say" },
    ];

    const drinkAlchoholOptions = [
        { value: "Yes", label: "Yes, doesn’t matter to me" },
        { value: "No", label: "No" },
        { value: "Occasionally", label: "Occasionally" },
        { value: "Hidden", label: "Prefer not to say" },
    ];

    const eatHalalOptions = [
        { value: "Yes", label: "Yes, always" },
        { value: "No, doesn’t matter to me", label: "No, doesn’t matter to me" },
        { value: "Sometimes", label: "Sometimes" },
        { value: "Hidden", label: "Prefer not to say" },
    ];


export {
    countries,
    backhomecountries,
    residencystatusOptions,
    maritalStatusOptions,
    childrenOptions,
    heightOptions,
}