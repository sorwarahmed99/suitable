import Button from '@/Components/Button';
import Input from '@/Components/Input';
import InputSelect from '@/Components/InputSelect';
import Label from '@/Components/Label';
import RadioButton from '@/Components/RadioButton';
import ResponsiveSidenav from '@/Components/ResponsiveSidenav';
import UserSideNav from '@/Components/UserSideNav';
import Authenticated from '@/Layouts/Authenticated'
import { Link, useForm, usePage } from '@inertiajs/inertia-react';

import React, { useState } from 'react';
import ValidationErrors from '@/Components/ValidationErrors';

function Preferences({auth}) {
    const {user} = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        ethnic_origin: user.ethnic_origin ||'',
        country: user.country ||'',
        recidency_status: user.recidency_status || '',
        relocate: user.relocate || '',
        min_height: user.min_height || '',
        max_height: user.max_height || '',
        min_age: user.min_age || '',
        max_age: user.max_age || '',
        marital_status: user.marital_status || '',
        have_children: user.have_children || '',
        like_to_have_children: user.like_to_have_children || '',
        religious_history: user.religious_history || '',
        prayer_frequency: user.prayer_frequency || '',
        sect: user.sect || '',
        school_of_thoughts: user.school_of_thoughts || '',
        eat_halal: user.eat_halal || '',
        smoke: user.smoke || '',
        drink_alchohol: user.drink_alchohol || '',
        wear_hijab_keep_beard: user.wear_hijab_keep_beard || '',
        highest_education: user.highest_education || '',
        get_married: user.get_married || '',
        continue_working: user.continue_working || '',
        intend_to_move_out: user.intend_to_move_out || '',
        issues_living_with_inlaws: user.issues_living_with_inlaws || '',
        bio: user.bio || '',
        radius: user.radius || '',
    });

    const countries = [{
        "name": "Andorra",
        "code": "Andorra"
      }, {
        "name": "Albania",
        "code": "Albania"
      }, {
        "name": "Austria",
        "code": "Austria"
      }, {
        "name": "Åland Islands",
        "code": "Åland Islands"
      }, {
        "name": "Bosnia and Herzegovina",
        "code": "Bosnia and Herzegovina"
      }, {
        "name": "Belgium",
        "code": "Belgium"
      }, {
        "name": "Bulgaria",
        "code": "Bulgaria"
      }, {
        "name": "Belarus",
        "code": "Belarus"
      }, {
        "name": "Switzerland",
        "code": "Switzerland"
      }, {
        "name": "Cyprus",
        "code": "Cyprus"
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
        "name": "Croatia",
        "code": "Croatia"
      }, {
        "name": "Hungary",
        "code": "Hungary"
      }, {
        "name": "Ireland",
        "code": "Ireland"
      }, {
        "name": "Isle of Man",
        "code": "Isle of Man"
      }, {
        "name": "Iceland",
        "code": "Iceland"
      }, {
        "name": "Italy",
        "code": "Italy"
      }, {
        "name": "Jersey",
        "code": "Jersey"
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
        "name": "Latvia",
        "code": "Latvia"
      }, {
        "name": "Monaco",
        "code": "Monaco"
      }, {
        "name": "Moldova",
        "code": "Moldova"
      }, {
        "name": "Macedonia, The Former Yugoslav Republic of",
        "code": "Macedonia, The Former Yugoslav Republic of"
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
        "name": "Poland",
        "code": "Poland"
      }, {
        "name": "Portugal",
        "code": "Portugal"
      }, {
        "name": "Romania",
        "code": "Romania"
      }, {
        "name": "Russian Federation",
        "code": "Russian Federation"
      }, {
        "name": "Sweden",
        "code": "Sweden"
      }, {
        "name": "Slovenia",
        "code": "Slovenia"
      }, {
        "name": "Svalbard and Jan Mayen",
        "code": "Svalbard and Jan Mayen"
      }, {
        "name": "Slovakia",
        "code": "Slovakia"
      }, {
        "name": "San Marino",
        "code": "San Marino"
      }, {
        "name": "Ukraine",
        "code": "Ukraine"
      }, {
        "name": "Holy See (Vatican City State)",
        "code": "Holy See (Vatican City State)"
      }];
      const sortedcs = countries.sort((a,b) => a.name.localeCompare(b.name));
    

    const countriesOption = [ 
        {value: 'Afghanistan', label: 'AF'}, 
        {value: 'Åland Islands', label: 'AX'}, 
        {value: 'Albania', label: 'AL'}, 
        {value: 'Algeria', label: 'DZ'}, 
        {value: 'American Samoa', label: 'AS'}, 
        {value: 'AndorrA', label: 'AD'}, 
        {value: 'Angola', label: 'AO'}, 
        {value: 'Anguilla', label: 'AI'}, 
        {value: 'Antarctica', label: 'AQ'}, 
        {value: 'Antigua and Barbuda', label: 'AG'}, 
        {value: 'Argentina', label: 'AR'}, 
        {value: 'Armenia', label: 'AM'}, 
        {value: 'Aruba', label: 'AW'}, 
        {value: 'Australia', label: 'AU'}, 
        {value: 'Austria', label: 'AT'}, 
        {value: 'Azerbaijan', label: 'AZ'}, 
        {value: 'Bahamas', label: 'BS'}, 
        {value: 'Bahrain', label: 'BH'}, 
        {value: 'Bangladesh', label: 'BD'}, 
        {value: 'Barbados', label: 'BB'}, 
        {value: 'Belarus', label: 'BY'}, 
        {value: 'Belgium', label: 'BE'}, 
        {value: 'Belize', label: 'BZ'}, 
        {value: 'Benin', label: 'BJ'}, 
        {value: 'Bermuda', label: 'BM'}, 
        {value: 'Bhutan', label: 'BT'}, 
        {value: 'Bolivia', label: 'BO'}, 
        {value: 'Bosnia and Herzegovina', label: 'BA'}, 
        {value: 'Botswana', label: 'BW'}, 
        {value: 'Bouvet Island', label: 'BV'}, 
        {value: 'Brazil', label: 'BR'}, 
        {value: 'British Indian Ocean Territory', label: 'IO'}, 
        {value: 'Brunei Darussalam', label: 'BN'}, 
        {value: 'Bulgaria', label: 'BG'}, 
        {value: 'Burkina Faso', label: 'BF'}, 
        {value: 'Burundi', label: 'BI'}, 
        {value: 'Cambodia', label: 'KH'}, 
        {value: 'Cameroon', label: 'CM'}, 
        {value: 'Canada', label: 'CA'}, 
        {value: 'Cape Verde', label: 'CV'}, 
        {value: 'Cayman Islands', label: 'KY'}, 
        {value: 'Central African Republic', label: 'CF'}, 
        {value: 'Chad', label: 'TD'}, 
        {value: 'Chile', label: 'CL'}, 
        {value: 'China', label: 'CN'}, 
        {value: 'Christmas Island', label: 'CX'}, 
        {value: 'Cocos (Keeling) Islands', label: 'CC'}, 
        {value: 'Colombia', label: 'CO'}, 
        {value: 'Comoros', label: 'KM'}, 
        {value: 'Congo', label: 'CG'}, 
        {value: 'Congo, The Democratic Republic of the', label: 'CD'}, 
        {value: 'Cook Islands', label: 'CK'}, 
        {value: 'Costa Rica', label: 'CR'}, 
        {value: 'Cote D\'Ivoire', label: 'CI'}, 
        {value: 'Croatia', label: 'HR'}, 
        {value: 'Cuba', label: 'CU'}, 
        {value: 'Cyprus', label: 'CY'}, 
        {value: 'Czech Republic', label: 'CZ'}, 
        {value: 'Denmark', label: 'DK'}, 
        {value: 'Djibouti', label: 'DJ'}, 
        {value: 'Dominica', label: 'DM'}, 
        {value: 'Dominican Republic', label: 'DO'}, 
        {value: 'Ecuador', label: 'EC'}, 
        {value: 'Egypt', label: 'EG'}, 
        {value: 'El Salvador', label: 'SV'}, 
        {value: 'Equatorial Guinea', label: 'GQ'}, 
        {value: 'Eritrea', label: 'ER'}, 
        {value: 'Estonia', label: 'EE'}, 
        {value: 'Ethiopia', label: 'ET'}, 
        {value: 'Falkland Islands (Malvinas)', label: 'FK'}, 
        {value: 'Faroe Islands', label: 'FO'}, 
        {value: 'Fiji', label: 'FJ'}, 
        {value: 'Finland', label: 'FI'}, 
        {value: 'France', label: 'FR'}, 
        {value: 'French Guiana', label: 'GF'}, 
        {value: 'French Polynesia', label: 'PF'}, 
        {value: 'French Southern Territories', label: 'TF'}, 
        {value: 'Gabon', label: 'GA'}, 
        {value: 'Gambia', label: 'GM'}, 
        {value: 'Georgia', label: 'GE'}, 
        {value: 'Germany', label: 'DE'}, 
        {value: 'Ghana', label: 'GH'}, 
        {value: 'Gibraltar', label: 'GI'}, 
        {value: 'Greece', label: 'GR'}, 
        {value: 'Greenland', label: 'GL'}, 
        {value: 'Grenada', label: 'GD'}, 
        {value: 'Guadeloupe', label: 'GP'}, 
        {value: 'Guam', label: 'GU'}, 
        {value: 'Guatemala', label: 'GT'}, 
        {value: 'Guernsey', label: 'GG'}, 
        {value: 'Guinea', label: 'GN'}, 
        {value: 'Guinea-Bissau', label: 'GW'}, 
        {value: 'Guyana', label: 'GY'}, 
        {value: 'Haiti', label: 'HT'}, 
        {value: 'Heard Island and Mcdonald Islands', label: 'HM'}, 
        {value: 'Holy See (Vatican City State)', label: 'VA'}, 
        {value: 'Honduras', label: 'HN'}, 
        {value: 'Hong Kong', label: 'HK'}, 
        {value: 'Hungary', label: 'HU'}, 
        {value: 'Iceland', label: 'IS'}, 
        {value: 'India', label: 'IN'}, 
        {value: 'Indonesia', label: 'ID'}, 
        {value: 'Iran, Islamic Republic Of', label: 'IR'}, 
        {value: 'Iraq', label: 'IQ'}, 
        {value: 'Ireland', label: 'IE'}, 
        {value: 'Isle of Man', label: 'IM'}, 
        {value: 'Israel', label: 'IL'}, 
        {value: 'Italy', label: 'IT'}, 
        {value: 'Jamaica', label: 'JM'}, 
        {value: 'Japan', label: 'JP'}, 
        {value: 'Jersey', label: 'JE'}, 
        {value: 'Jordan', label: 'JO'}, 
        {value: 'Kazakhstan', label: 'KZ'}, 
        {value: 'Kenya', label: 'KE'}, 
        {value: 'Kiribati', label: 'KI'}, 
        {value: 'Korea, Democratic People\'S Republic of', label: 'KP'}, 
        {value: 'Korea, Republic of', label: 'KR'}, 
        {value: 'Kuwait', label: 'KW'}, 
        {value: 'Kyrgyzstan', label: 'KG'}, 
        {value: 'Lao People\'S Democratic Republic', label: 'LA'}, 
        {value: 'Latvia', label: 'LV'}, 
        {value: 'Lebanon', label: 'LB'}, 
        {value: 'Lesotho', label: 'LS'}, 
        {value: 'Liberia', label: 'LR'}, 
        {value: 'Libyan Arab Jamahiriya', label: 'LY'}, 
        {value: 'Liechtenstein', label: 'LI'}, 
        {value: 'Lithuania', label: 'LT'}, 
        {value: 'Luxembourg', label: 'LU'}, 
        {value: 'Macao', label: 'MO'}, 
        {value: 'Macedonia, The Former Yugoslav Republic of', label: 'MK'}, 
        {value: 'Madagascar', label: 'MG'}, 
        {value: 'Malawi', label: 'MW'}, 
        {value: 'Malaysia', label: 'MY'}, 
        {value: 'Maldives', label: 'MV'}, 
        {value: 'Mali', label: 'ML'}, 
        {value: 'Malta', label: 'MT'}, 
        {value: 'Marshall Islands', label: 'MH'}, 
        {value: 'Martinique', label: 'MQ'}, 
        {value: 'Mauritania', label: 'MR'}, 
        {value: 'Mauritius', label: 'MU'}, 
        {value: 'Mayotte', label: 'YT'}, 
        {value: 'Mexico', label: 'MX'}, 
        {value: 'Micronesia, Federated States of', label: 'FM'}, 
        {value: 'Moldova, Republic of', label: 'MD'}, 
        {value: 'Monaco', label: 'MC'}, 
        {value: 'Mongolia', label: 'MN'}, 
        {value: 'Montserrat', label: 'MS'}, 
        {value: 'Morocco', label: 'MA'}, 
        {value: 'Mozambique', label: 'MZ'}, 
        {value: 'Myanmar', label: 'MM'}, 
        {value: 'Namibia', label: 'NA'}, 
        {value: 'Nauru', label: 'NR'}, 
        {value: 'Nepal', label: 'NP'}, 
        {value: 'Netherlands', label: 'NL'}, 
        {value: 'Netherlands Antilles', label: 'AN'}, 
        {value: 'New Caledonia', label: 'NC'}, 
        {value: 'New Zealand', label: 'NZ'}, 
        {value: 'Nicaragua', label: 'NI'}, 
        {value: 'Niger', label: 'NE'}, 
        {value: 'Nigeria', label: 'NG'}, 
        {value: 'Niue', label: 'NU'}, 
        {value: 'Norfolk Island', label: 'NF'}, 
        {value: 'Northern Mariana Islands', label: 'MP'}, 
        {value: 'Norway', label: 'NO'}, 
        {value: 'Oman', label: 'OM'}, 
        {value: 'Pakistan', label: 'PK'}, 
        {value: 'Palau', label: 'PW'}, 
        {value: 'Palestinian Territory, Occupied', label: 'PS'}, 
        {value: 'Panama', label: 'PA'}, 
        {value: 'Papua New Guinea', label: 'PG'}, 
        {value: 'Paraguay', label: 'PY'}, 
        {value: 'Peru', label: 'PE'}, 
        {value: 'Philippines', label: 'PH'}, 
        {value: 'Pitcairn', label: 'PN'}, 
        {value: 'Poland', label: 'PL'}, 
        {value: 'Portugal', label: 'PT'}, 
        {value: 'Puerto Rico', label: 'PR'}, 
        {value: 'Qatar', label: 'QA'}, 
        {value: 'Reunion', label: 'RE'}, 
        {value: 'Romania', label: 'RO'}, 
        {value: 'Russian Federation', label: 'RU'}, 
        {value: 'RWANDA', label: 'RW'}, 
        {value: 'Saint Helena', label: 'SH'}, 
        {value: 'Saint Kitts and Nevis', label: 'KN'}, 
        {value: 'Saint Lucia', label: 'LC'}, 
        {value: 'Saint Pierre and Miquelon', label: 'PM'}, 
        {value: 'Saint Vincent and the Grenadines', label: 'VC'}, 
        {value: 'Samoa', label: 'WS'}, 
        {value: 'San Marino', label: 'SM'}, 
        {value: 'Sao Tome and Principe', label: 'ST'}, 
        {value: 'Saudi Arabia', label: 'SA'}, 
        {value: 'Senegal', label: 'SN'}, 
        {value: 'Serbia and Montenegro', label: 'CS'}, 
        {value: 'Seychelles', label: 'SC'}, 
        {value: 'Sierra Leone', label: 'SL'}, 
        {value: 'Singapore', label: 'SG'}, 
        {value: 'Slovakia', label: 'SK'}, 
        {value: 'Slovenia', label: 'SI'}, 
        {value: 'Solomon Islands', label: 'SB'}, 
        {value: 'Somalia', label: 'SO'}, 
        {value: 'South Africa', label: 'ZA'}, 
        {value: 'South Georgia and the South Sandwich Islands', label: 'GS'}, 
        {value: 'Spain', label: 'ES'}, 
        {value: 'Sri Lanka', label: 'LK'}, 
        {value: 'Sudan', label: 'SD'}, 
        {value: 'Surivalue', label: 'SR'}, 
        {value: 'Svalbard and Jan Mayen', label: 'SJ'}, 
        {value: 'Swaziland', label: 'SZ'}, 
        {value: 'Sweden', label: 'SE'}, 
        {value: 'Switzerland', label: 'CH'}, 
        {value: 'Syrian Arab Republic', label: 'SY'}, 
        {value: 'Taiwan, Province of China', label: 'TW'}, 
        {value: 'Tajikistan', label: 'TJ'}, 
        {value: 'Tanzania, United Republic of', label: 'TZ'}, 
        {value: 'Thailand', label: 'TH'}, 
        {value: 'Timor-Leste', label: 'TL'}, 
        {value: 'Togo', label: 'TG'}, 
        {value: 'Tokelau', label: 'TK'}, 
        {value: 'Tonga', label: 'TO'}, 
        {value: 'Trinidad and Tobago', label: 'TT'}, 
        {value: 'Tunisia', label: 'TN'}, 
        {value: 'Turkey', label: 'TR'}, 
        {value: 'Turkmenistan', label: 'TM'}, 
        {value: 'Turks and Caicos Islands', label: 'TC'}, 
        {value: 'Tuvalu', label: 'TV'}, 
        {value: 'Uganda', label: 'UG'}, 
        {value: 'Ukraine', label: 'UA'}, 
        {value: 'United Arab Emirates', label: 'AE'}, 
        {value: 'United Kingdom', label: 'GB'}, 
        {value: 'United States', label: 'US'}, 
        {value: 'United States Minor Outlying Islands', label: 'UM'}, 
        {value: 'Uruguay', label: 'UY'}, 
        {value: 'Uzbekistan', label: 'UZ'}, 
        {value: 'Vanuatu', label: 'VU'}, 
        {value: 'Venezuela', label: 'VE'}, 
        {value: 'Viet Nam', label: 'VN'}, 
        {value: 'Virgin Islands, British', label: 'VG'}, 
        {value: 'Virgin Islands, U.S.', label: 'VI'}, 
        {value: 'Wallis and Futuna', label: 'WF'}, 
        {value: 'Western Sahara', label: 'EH'}, 
        {value: 'Yemen', label: 'YE'}, 
        {value: 'Zambia', label: 'ZM'}, 
        {value: 'Zimbabwe', label: 'ZW'} 
    ];

    const ethnicOriginOptions = [
        { value: "Mixed Heritage", label: "Mixed Heritage"},
        { value: "Nigerian", label: "Nigerian"},
        { value: "Pakistani", label: "Pakistani"},
        { value: "Persian", label: "Persian"},
        { value: "Somali", label: "Somali"},
        { value: "Sudanese", label: "Sudanese"},
        { value: "Turkish", label: "Turkish"},
        { value: "Other", label: "Other"},
        { value: "Caribbean", label: "Caribbean"},
        { value: "Egyptian", label: "Egyptian"},
        { value: "Indian", label: "Indian"},
        { value: "Asian", label: "Asian"},
        { value: "Indonesian", label: "Indonesian"},
        { value: "Iraqi", label: "Iraqi"},
        { value: "Kurdish", label: "Kurdish"},
        { value: "Latino", label: "Latino"},
        { value: "Malay", label: "Malay"},
        { value: "African American", label: "African American"},
        { value: "North American", label: "North American"},
        { value: "European", label: "European"},
        { value: "Far East Asian", label: "Far East Asian"},
        { value: "Afghan", label: "Afghan"},
        { value: "Bangladeshi", label: "Bangladeshi"},
        { value: "Berber", label: "Berber"},
        { value: "Arab", label: "Arab"},
        { value: "Central African", label: "Central African"},
        { value: "East African", label: "East African"},
        { value: "North African", label: "North African"},
        { value: "South African", label: "South African"},
        { value: "West African", label: "West African"},
    ];

    const relocateOptions = [
        { value: "Don't mind", label: "Don't mind"},
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Not sure", label: "Not sure" },
    ];

    const residencystatusOptions = [
        { value: "Student visa", label: "Student visa"},
        { value: "Work permit", label: "Work permit"},
        { value: "Citizen", label: "Citizen"},
        { value: "All", label: "All"},
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
        { value: "Don't mind", label: "Don't mind"},
        { value: "Single", label: "Single" },
        { value: "Divorced", label: "Divorced" },
        { value: "Widowed", label: "Widowed" },
    ];

    const haveChildrenOptions = [
        { value: "Don't mind", label: "Don't mind"},
        { value: "None", label: "None" },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
    ];

    const regiousHistoryOptions = [
        { value: "Don't mind", label: "Don't mind"},
        { value: "Convert", label: "Convert" },
        { value: "Revert", label: "Revert" },
    ];

    const sectOptions = [
        { value: "Sunni", label: "Sunni" },
        { value: "Shia", label: "Shia" },
        { value: "Ahmadi", label: "Ahmadi" },
        { value: "Ibadi", label: "Ibadi" },
        { value: "Ismaili", label: "Ismaili" },
        { value: "Other", label: "Other" },
    ];
    const drinkAlchoholOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Occasionally", label: "Occasionally" },
        { value: "I don't care", label: "I don't care" },
    ];

    const smokeOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Occasionally", label: "Occasionally" },
        { value: "I don't care", label: "I don't care" },
    ];

    const eatHalalOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Occasionally", label: "Occasionally" },
        { value: "I don't care", label: "I don't care" },
    ];

    const beardOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "I don't care", label: "I don't care" },
    ]

    const prayerFrequencyOptions = [
        { value: "Don't mind", label: "Don't mind"},
        { value: "Never Missed", label: "Never Missed" },
        { value: "Sometimes Miss", label: "Sometimes Miss" },
        { value: "Occasionally", label: "Occasionally" },
    ];
    

    const radiusOptions = [
        { value: "2mi", label: "2mi"},
        { value: "5mi", label: "5mi"},
        { value: "7mi", label: "7mi"},
        { value: "10mi", label: "10mi"},
        { value: "15mi", label: "15mi"},
        { value: "20mi", label: "20mi"},
        { value: "25mi", label: "25mi"},
        { value: "30mi", label: "30mi"},
        { value: "35mi", label: "35mi"},
        { value: "40mi", label: "40mi"},
        { value: "50mi", label: "50mi"},
        { value: "60mi", label: "60mi"},
        { value: "70mi", label: "70mi"},
        { value: "80mi", label: "80mi"},
        { value: "90mi", label: "90mi"},
        { value: "100mi", label: "100mi"},
        { value: "120mi", label: "120mi"},
        { value: "130mi", label: "130mi"},
        { value: "160mi", label: "160mi"},
        { value: "190mi", label: "190mi"},
        { value: "200mi", label: "200mi"},
        { value: "250mi", label: "250mi"},
        { value: "300mi", label: "300mi"},
        { value: "400mi", label: "400mi"},
        { value: "500mi", label: "500mi"},
    ];

    const readQuranOptions = [
        { value: "Yes, I have completed", label: "Yes, I have completed" },
        { value: "Yes, but I’m still learning", label: "Yes, but I’m still learning" },
        { value: "Still learning Arabic", label: "Still learning Arabic" },
        { value: "No, I can’t read ", label: "No, I can’t read " },
    ];

    const childrenOptions = [
        { value: "All", label: "All" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];


    const onHandleChange = (e) => {
        setData(e.target.name, e.target.type === 'hidden' ? e.target.value : e.target.value);
        // setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();
        post('preferences/set');
    };


    return (
        <Authenticated 
                auth={auth}
                errors={errors}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Preferences <br/>
                <span className="mb-1 text-sm leading-6 font-semibold text-red-400 dark:text-red-400">Matches - Preferences</span>
                </h2>}
                btnName="Back"
                svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-0 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path stroke-linecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
                href={route('home')}
        >

        <ResponsiveSidenav />

        <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-8">
            <div className="flex-row sm:flex sm:space-x-2">
                <div className="hidden sm:block sm:w-[250px] h-min ">
                <UserSideNav/>
                </div>
                
                <div className="mt-2 sm:mt-0 sm:w-2/3 bg-gray-50 dark:bg-slate-800 p-3 sm:p-10 rounded-md shadow-sm">
                    <div className="pt-5 xl:max-w-none">
                        <header id="header" className="relative z-20">
                            <div>
                                {/* <p className="mb-1 text-sm leading-6 font-semibold text-purple-500 dark:text-red-400">Matches - Preferences</p> */}
                                <div className="">
                                    <h1 className="inline-block text-2xl sm:text-xl font-semibold text-slate-900 tracking-tight dark:text-slate-200">Preferences</h1>
                                    <p className="mb-1 text-sm leading-6 font-semibold text-slate-500 dark:text-slate-300">Please set your preference by filling out all information below. We will only recommend you profiles matched with your preferences.</p>
                                </div>
                            </div>
                        </header>
                        <div className="">
                            <form className="sm:px-12 px-2" onSubmit={submit}>

                                <div id="filterSection" className={"relative md:py-10 lg:px-20 md:px-6 py-5 px-2 bg-gray-50 dark:bg-slate-800 mt-2 w-full block"}>
                                    <div> 
                                        <div className="flex items-start space-x-6 border-b pb-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                                            <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Location</p>
                                            <div className="min-w-0 relative flex-auto">
                                                <div className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                                                    <div className="absolute top-0 right-0 flex items-center space-x-1">
                                                        <Link href="/preferences/clear" className="text-md font-semibold text-red-400 mr-3">Clear Filter</Link>
                                                        <Button type="submit" >Apply <span className="hidden sm:flex ml-1">Filter</span></Button>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                        <ValidationErrors errors={errors} />

                                        <div className="mt-4">
                                            <Label className="dark:text-white" forInput="radius" value="Limit location by distance" />
                                            <InputSelect 
                                                value={data.radius} 
                                                onChange={onHandleChange} 
                                                options={radiusOptions} 
                                                className={`block w-full sm:text-sm dark:text-slate-50`} 
                                                placeholder='Select radius'
                                                name={`radius`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label className="dark:text-white" forInput="ethnic-origin" value="Ethnic Origin" />
                                            <InputSelect 
                                                value={data.ethnic_origin} 
                                                onChange={onHandleChange} 
                                                options={ethnicOriginOptions} 
                                                className={`block w-full sm:text-sm dark:text-slate-50`} 
                                                placeholder='Select ethnic origin'
                                                name={`ethnic_origin`}
                                            />
                                        </div>
                                        
                                        <div className="mt-4">
                                            <Label forInput="country" value="Country" />
                                            <select
                                                className={
                                                    `mt-2 border-gray-300 text-slate-500 dark:text-slate-200 rounded-xl shadow-sm`
                                                }
                                                name="country"
                                                onChange={onHandleChange}
                                                value={data.country}
                                                
                                            >
                                                <option className="text-slate-500 dark:text-slate-200" value={''}>Select a country</option>
                                                {sortedcs.map((country) => {
                                                    return (
                                                        <option className="text-slate-500 dark:text-slate-200" key={country.code} value={country.name} multiple>
                                                            {country.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>

                                        <div className="mt-4">
                                            <Label className="dark:text-white" forInput="recidency_status" value="Recidency status" />
                                            <InputSelect 
                                                value={data.recidency_status} 
                                                onChange={onHandleChange} 
                                                options={residencystatusOptions} 
                                                className={`block w-full sm:text-sm dark:text-slate-50`} 
                                                placeholder='Select residency status'
                                                name={`recidency_status`}
                                            />
                                        </div>
                                    </div>
                                        <div>
                                            <div className="mt-4 flex items-start space-x-6 border-b pb-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                                                <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Profile Basics</p>
                                                <div className="min-w-0 relative flex-auto">
                                                    <div className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mt-4">
                                                    <div className="flex space-x-2 items-center justify-evenly">
                                                        <div className="w-full"> 
                                                            <Label forInput="min_height" value="Min Height" />
                                                            <InputSelect 
                                                                value={data.min_height} 
                                                                onChange={onHandleChange} 
                                                                options={heightOptions} 
                                                                className={`block w-full sm:text-sm dark:text-slate-50`} 
                                                                placeholder='Select min height'
                                                                name={`min_height`}
                                                            />
                                                        </div>
                                                        <div className="w-full"> 
                                                            <Label forInput="max_height" value="Max Height" />
                                                            <InputSelect 
                                                                value={data.max_height} 
                                                                onChange={onHandleChange} 
                                                                options={heightOptions} 
                                                                className={`block w-full sm:text-sm dark:text-slate-50`} 
                                                                placeholder='Select max height'
                                                                name={`max_height`}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div className="mt-4">
                                                    <div className="flex space-x-2 items-center justify-evenly">
                                                        <div className="w-full"> 
                                                            <Label forInput="min_age" value="Age from" />
                                                            <Input
                                                                value={data.min_age}
                                                                handleChange={onHandleChange}
                                                                type="number"
                                                                className={`mt-1 block w-full sm:text-sm dark:text-slate-50`} 
                                                                placeholder='Any Age'
                                                                name={`min_age`}
                                                            />
                                                        </div>
                                                        <div className="w-full"> 
                                                            <Label forInput="max_age" value="Age to" />
                                                            <Input 
                                                                type="number"
                                                                value={data.max_age}
                                                                handleChange={onHandleChange}
                                                                className={`mt-1 block w-full sm:text-sm dark:text-slate-50`} 
                                                                placeholder='Any Age'
                                                                name={`max_age`}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <Label forInput="marital_status" value="Marital Status" />
                                                        <InputSelect 
                                                            value={data.marital_status} 
                                                            onChange={onHandleChange} 
                                                            options={maritalStatusOptions} 
                                                            className={`block w-full sm:text-sm dark:text-slate-50`} 
                                                            placeholder='Select your preferred marital status'
                                                            name={`marital_status`}
                                                        />
                                                    </div>
                                                
                                                    <div className="mt-4">
                                                        <Label forInput="have_children" value="Show profile members with children " />
                                                        <InputSelect 
                                                            value={data.have_children} 
                                                            onChange={onHandleChange} 
                                                            options={childrenOptions} 
                                                            className={`block w-full sm:text-sm dark:text-slate-50`} 
                                                            placeholder='Select your preferred option'
                                                            name={`have_children`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            
                                            <hr className=" bg-gray-200/50 dark:bg-gray-50/50 w-full md:my-10 md:mb-5 my-8" />

                                            <div className="px-0 mt-10 w-full md:w-auto md:mt-4 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
                                                
                                                <button className="w-full bg-purple-600 text-slate-50 hover:text-white hover:bg-purple-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 rounded-md">
                                                    Apply Filter
                                                </button>
                                            </div>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </Authenticated>
  )
}

export default Preferences
{/* <div>
    <div className="flex items-start space-x-6 border-b pb-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
        <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Advance Filters</p>
        <div className="min-w-0 relative flex-auto">
            <div className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                </svg>
            </div>
        </div>
    </div>
    
    <div className="mt-4">
        <Label forInput="highest_education" value="Highest Education" />
        <InputSelect 
            value={data.highest_education} 
            onChange={onHandleChange} 
            options={educationOptions} 
            className={`block w-full sm:text-sm dark:text-slate-50`} 
            placeholder='Preffered educational qualification'
            name={`highest_education`}
        />
    </div>

    <div className="mt-4 dark:text-slate-50">
        <Label className="dark:text-white" forInput="get_married" value="Preferred marriage time ?" />
        <InputSelect 
            value={data.get_married} 
            onChange={onHandleChange} 
            options={getMarriedOptions} 
            className={`block w-full sm:text-sm dark:text-slate-50`} 
            placeholder='When are you planning to get married ?'
            name={`get_married`}
        />
    </div>

    <div className="mt-4">
        <Label className="dark:text-white" forInput="continue_working" value="Do you intend to continue working when married?" />
        <InputSelect 
            value={data.continue_working} 
            onChange={onHandleChange} 
            options={continueWorkingOptions} 
            className={`block w-full sm:text-sm dark:text-slate-50`} 
            placeholder='Select an option'
            name={`continue_working`}
        />
    </div>
    
    <div className="mt-4">
        <Label className="dark:text-white" forInput="intend_to_move_out" value="Do you intend to move out?" />
        <InputSelect 
            value={data.intend_to_move_out} 
            onChange={onHandleChange} 
            options={moveOutOptions} 
            className={`block w-full sm:text-sm dark:text-slate-50`} 
            placeholder='Select an option'
            name={`intend_to_move_out`}
        />
    </div>

    <div className="mt-4">
        <Label className="dark:text-white" forInput="issues_living_with_inlaws" value="Do you have issues living with in laws?" />
        <InputSelect 
            value={data.issues_living_with_inlaws} 
            onChange={onHandleChange} 
            options={moveOutOptions} 
            className={`block w-full sm:text-sm dark:text-slate-50`} 
            placeholder='Select an option'
            name={`issues_living_with_inlaws`}
        />
    </div>

    <div className="mt-4">
        <Label className="dark:text-white" forInput="issues_living_with_inlaws" value="About your ideal partner" />
        <textarea id="bio" name="bio" onChange={onHandleChange}  value={data.bio}  className="mt-1 bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded-lg text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="How would you describe your ideal partner..." rows={5} />
        <textarea class="input" name="bio" rows="10" cols="10">{data.bio}</textarea> 

        <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 1000</p>
    </div>
</div> */}
{/* FOR multiple options */}
    {/* <Select
        closeMenuOnSelect={false}
        defaultValue={[ethnicOriginOptions[4], ethnicOriginOptions[5]]}
        isMulti
        // value={data.ethnic_origin} 
        className={`block w-full sm:text-sm dark:text-slate-50`} 
            name={`ethnic_origin`}
            options={ethnicOriginOptions}
    /> */}
{/* FOR multiple options */}

{/* <Select
    closeMenuOnSelect={false}
    defaultValue={[countriesOption[4], countriesOption[5]]}
    isMulti
    // value={data.ethnic_origin} 
    className={`block w-full sm:text-sm dark:text-slate-50`} 
        name={`ethnic_origin`}
        options={countriesOption}
    /> */}

{/* <div className="mt-4">
    <Label forInput="relocate" value="Move abroad" />

    <InputSelect 
        value={data.relocate} 
        onChange={onHandleChange} 
        options={relocateOptions} 
        className={`block w-full sm:text-sm dark:text-slate-50`} 
        placeholder='Are you willing to relocate?'
        name={`relocate`}
    />
</div> */}
        {/* <div className="mt-4">
            <Label forInput="have_children" value="Do you have children" />
            <InputSelect 
                value={data.have_children} 
                onChange={onHandleChange} 
                options={haveChildrenOptions} 
                className={`block w-full sm:text-sm dark:text-slate-50`} 
                placeholder='Select how many'
                name={`have_children`}
            />
        </div> 

        <div className="mt-4">
            <div className="flex items-baseline mb-2 pb-2 space-x-2">
                <div className="w-1/3">
                    <Label forInput="like_to_have_children" value="Like to have children" />
                </div>
                <div className="w-2/3 flex justify-end space-x-1">
                    <RadioButton name="like_to_have_children" value={`Yes`} btnName="Yes" handleChange={onHandleChange}  />
                    <RadioButton name="like_to_have_children" value={`No`} btnName="No"  handleChange={onHandleChange} />
                    <RadioButton name="like_to_have_children" value={`Yes`} btnName="I don't mind" handleChange={onHandleChange} />
                </div>
            </div>
        </div> */}