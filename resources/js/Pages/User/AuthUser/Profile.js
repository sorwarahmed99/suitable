import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ResponsiveSidenav from '@/Components/ResponsiveSidenav';
import UserSideNav from '@/Components/UserSideNav'
import UserSideNavMenuItem from '@/Components/UserSideNavMenuItem';
import Authenticated from '@/Layouts/Authenticated'
import { Inertia } from '@inertiajs/inertia';
import React, { useRef, useState } from 'react'
import InputSelect from '@/Components/InputSelect';
import RadioButton from '@/Components/RadioButton';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import ValidationErrors from '@/Components/ValidationErrors';
import { heightOptions, } from '../../../utils/data';

function Profile({auth, errors}) {
    const {user, interests, userImages} = usePage().props;
    const baseUrl = 'http://suitable.one/';

    const { data, setData, post, processing, reset } = useForm({
        username: user.username || '',
        email: user.email || '',
        age: user.age || '',
        date_of_birth: user.date_of_birth || '',
        
        height: user.height || '',
        marital_status: user.marital_status || '',
        have_children: user.have_children || '',
        siblings: user.siblings || '',

        ethnic_origin: user.ethnic_origin || '',
        relocate: user.relocate || '',
        country: user.country || '',
        recidency_status: user.recidency_status || '',
        city: user.city || '',
        area: user.area || '',
        back_home_country: user.back_home_country || '',
        back_home_city: user.back_home_city || '',
        back_home_area: user.back_home_area || '',

        highest_education: user.highest_education || '',
        university: user.university || '',
        course_name: user.course_name || '',
        college: user.college || '',
        college_course_name: user.college_course_name || '',
        current_profession: user.current_profession || '',
        company_name: user.company_name || '',

        religious_history: user.religious_history || '',
        prayer_frequency: user.prayer_frequency || '',
        sect: user.sect || '',
        read_quran: user.read_quran || '',
        eat_halal: user.eat_halal || '',
        drink_alchohol: user.drink_alchohol || '',
        bio: user.bio || '',
    });
    const photoRef = useRef();

    const [link, setLink] = useState(false);
    const [values, setValues] = useState({photo: '',});
    const [images, setImages] = useState([]);
    const showFileInput = userImages.length < 3;

    const [selectedFiles, setSelectedFiles] = useState([]);
    const canUploadMoreImages = selectedFiles.length <= 4;
    const [message, setMessage] = useState('');
    

    const handleProfileImageChange = (e) => {
        const newImages = [...e.target.files];
        setImages(newImages);

        if (newImages) {
            const filesArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );

            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }

        e.preventDefault();
        const formData = new FormData();

        newImages.forEach((image) => {
            formData.append('images[]', image);
        });

        Inertia.post('updateprofileimage', formData, {
            forceFormData: true,
          });
        // setSelectedFile(URL.createObjectURL(e.target.files[0]) );

        setLink(true);
    };

    const handleImageChange = (e) => {
        const newImages = [...e.target.files];
        setImages(newImages);

        if (newImages) {
            const filesArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );

            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }

        e.preventDefault();
        const formData = new FormData();

        newImages.forEach((image) => {
            formData.append('images[]', image);
        });

        Inertia.post('upload', formData, {
            forceFormData: true,
          });
        // setSelectedFile(URL.createObjectURL(e.target.files[0]) );

        setLink(true);
    };

    const handleChecked = (e) => {
        let id = e.target.value;
        if (e.target.checked) {
            setData("interests", [...data.interests, id]);
        } else {
            setData(
                "interest",
                data.interests.filter((item) => {
                    return item !== id;
                })
            );
        }
    };
 
    const renderPhotos = (source) => {
        // const totalUploadedImages = userImages.length + source.length;
        // const canUploadMoreImages = totalUploadedImages <= 4;

        if (source.length === 0) {
            return null; // No images to display
        }

        
        
        // if (totalUploadedImages >= 4) {
        //     setMessage('You can only upload a maximum of 4 images.');
        // }

        // if (!canUploadMoreImages) {
        //     setMessage(`{You can upload ${4 - userImages.length} more image(s) to reach the limit of 4.}`);
        // }

        return source.map((photo) => {
            return <div key={photo}  className="relative rounded-lg shadow-sm bg-gray-50">
                                <div onClick={() => setSelectedFiles(selectedFiles.filter((e) => e !== photo))} className="flex justify-center items-baseline absolute z-50 right-0 left-[4rem] -top-[1rem] text-sm border bg-slate-700 shadow-md cursor-pointer hover:bg-slate-900 border-slate-800 text-slate-50 text-center h-6 w-6 rounded-full">x</div>
                                <img  alt="" src={photo} className="object-cover rounded-lg h-20 w-20 aspect-square" />
                    </div>;
        });
    };

    const onHandleChange = e => {   
        setData(e.target.name, e.target.type === 'hidden' ? e.target.value : e.target.value);

        // const formData = new FormData();

        // formData.append('photo', photoRef.current.files[0])
        // formData.append('photo', values.photo)
        
        // Inertia.post('upload-profile-pic', formData, {
        //     forceFormData: true,
        //   });
        // setSelectedFile(URL.createObjectURL(e.target.files[0]) );

        // setLink(true);

    }

    let form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        // console.log("payload", payload);
        // Place your API call here to submit your payload.
    };

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

    let minOffset = 0, maxOffset = 60;
    let thisYear = (new Date()).getFullYear();
    let allYears = [];
    for(let x = 0; x <= maxOffset; x++) {
        allYears.push(thisYear - x)
    }

    const [add, setAdd] = useState(false);

    const toggle = () => {
        setAdd(!add);
    }

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

    const handleDelete = (imageId) => {
        Inertia.delete(`/image/delete/${imageId}`);
    };

    const submit = (e) => {
        e.preventDefault();
        post('profile/store');
    };

    const submitPhotos = (e) => {
        e.preventDefault();
        const formData = new FormData();

        images.forEach((image) => {
            formData.append('images[]', image);
        });

        post('/upload', formData);
    }

    return (
        <Authenticated 
        auth={auth}
        errors={errors}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Profile</h2>}
        btnName="Back"
        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
        href={route('home')}
        > 

    <ResponsiveSidenav />

    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex-row sm:flex sm:space-x-2">
            <div className="hidden sm:block sm:w-[250px] h-min ">
               <UserSideNav/>
            </div>
            
            <div className="mt-2 sm:mt-0 sm:w-full md:w-2/3 bg-gray-50 dark:bg-slate-800 p-4 sm:p-10 rounded-md shadow-sm">
                <div className="">
                    {/* Multiple image start */}
                    <div className="py-8">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Photos</h2>
                                <p className="text-slate-500 mb-2">Upload or remove photos</p>
                            </div>
                            <div>
                                <Link as='a' className='flex justify-center items-center py-2 px-4 border border-purple-500 rounded-md shadow-sm text-sm font-semibold text-purple-500 dark:text-white bg-tranparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500' href="/public-profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                    <span className='ml-1'>View As</span>
                                </Link>
                            </div>
                        </div>
                        {message && ( 
                            <div className="text-red-400 font-semibold text-md">
                                {message}
                            </div>
                         )}
                        
                        <div className="mt-4"> 
                            <form className="grid grid-cols-2 gap-12 md:grid-cols-2 lg:grid-cols-4">
                                <div className="relative rounded-lg shadow-sm bg-gray-50 w-[150px] h-[150px]">
                                    <label className="flex justify-center items-center absolute z-10 right-0 left-[8rem] -top-[0.6rem] text-md border bg-purple-500 shadow-md cursor-pointer hover:bg-purple-500 hover:border-gray-50 border-purple-400 text-slate-50 text-center h-7 w-7 rounded-full ring-1">
                                        <input ref={photoRef} type="file" value={values.photo} className="opacity-0" onChange={handleProfileImageChange} />
                                        <p className="font-semibold text-white flex items-center justify-center pr-1 pl-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>
                                        </p>
                                    </label>

                                    <div className="w-[150px] h-[150px] rounded-lg">
                                        <img src={auth.user.profile_image} layout="fill" className="w-[150px] h-[150px] p-2 rounded-xl object-cover aspect-square" />
                                        {/* <label className="mt-3 cursor-pointer flex flex-col items-center justify-center w-full h-4 hover:bg-gray-100 dark:hover:bg-slate-800">
                                            <p className="text-xs tracking-wider text-gray-500 hover:text-gray-700  dark:text-slate-200 dark:hover:text-slate-50">
                                                Change Profile Photo
                                            </p>
                                            <input ref={photoRef} type="file" value={values.photo} className="opacity-0" onChange={handleProfileImageChange} />
                                        </label> */}
                                    </div>
                                </div>

                                {userImages.map(({image, id}) => (
                                    <div key={id}>
                                        {/* <div class="flex flex-wrap gap-2"> */}
                                            <div className="relative rounded-lg shadow-sm bg-slate-100 w-[150px] h-[150px]">
                                                <div onClick={() => handleDelete(id)} className="flex justify-center items-baseline absolute z-10 right-0 left-[8rem] -top-[0.6rem] text-md border bg-red-400 shadow-md cursor-pointer hover:bg-red-500 hover:border-gray-50 border-red-400 text-slate-50 text-center h-7 w-7 rounded-full">x</div>
                                                <div className="w-[150px] h-[150px] rounded-lg">
                                                    <img src={image} layout="fill" className="w-[150px] h-[150px] p-2 rounded-xl object-cover aspect-square" />
                                                    {/* <label className="mt-3 cursor-pointer flex flex-col items-center justify-center w-full h-4 hover:bg-gray-100 dark:hover:bg-slate-800">
                                                        <p className="text-xs tracking-wider text-gray-500 hover:text-gray-700  dark:text-slate-200 dark:hover:text-slate-50">
                                                            Make profile image
                                                        </p>
                                                        <input ref={photoRef} type="file" value={values.photo} className="opacity-0" onChange={handleImageChange} />
                                                    </label> */}
                                                </div>
                                            </div>
                                        {/* </div> */}
                                    </div>
                                ))}

                                {showFileInput &&
                                <div className="flex justify-center items-center">
                                    <div className="rounded-lg shadow-md bg-gray-50">
                                        <div className="p-2">
                                            <div className="flex items-center justify-center w-full">
                                                <label className="flex flex-col w-[130px] h-[130px] rounded-lg border-4 border-slate-100 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                    <div className="flex flex-col items-center justify-center pt-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                        </svg>
                                                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                            Choose a photo
                                                        </p>
                                                    </div>
                                                    {/* <input ref={photoRef} type="file" value={values.photo} className="opacity-0" onChange={handleImageChange} /> */}
                                                    <input ref={photoRef} type="file" name="images" id="images" accept="image/*" value={values.images} className="opacity-0" onChange={handleImageChange} disabled={!canUploadMoreImages} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }
                            </form>
                        </div>
                    </div>
                    <ValidationErrors errors={errors} />
                    {/* Multiple image end */}

                    <form id="profile" className="dark:bg-slate-800" onSubmit={submit}>
                        <div className="dark:bg-gray-800">
                        {auth.user.account_status == 0 && (
                            <div className="p-4 shadow-sm bg-slate-100 dark:bg-slate-700 rounded-md mt-4"> 
                                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Your profile is under validation!</h2>
                                <div className="flex items-start space-x-2 ">
                                    
                                    <div className="flex-none text-lg text-red-400 rounded-lg border border-red-400 shadow-md p-5 dark:text-red-400 font-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-red-400" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                    </div>

                                    <div className="min-w-0 relative flex-auto">
                                        <div className="p-2">
                                            <p className="text-sm font-semibold  text-gray-600 dark:text-gray-400">
                                                {user.username}, your profile is under validation right now. Once validated,
                                                you will receive a confirmation on your registered mail ID.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* BASIC information start */}
                            <div className="py-4">
                                <div className="flex items-start space-x-6 border-b pb-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                                    <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Basic information</p>
                                    <div className="min-w-0 relative flex-auto">
                                        <div className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 text-slate-500 mb-3">You can't update basic information once it's public. To update your basic information please contact authority !</p>
                                
                                <div className="relative py-2">
                                    <input disabled type="text" className="py-3 disabled:bg-transparent disabled:text-slate-300 disabled:border-slate-200 disabled:shadow-none dark:text-slate-200" placeholder="Username" />
                                    <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-700 dark:text-slate-200">{user.username}</div>
                                </div>

                                <div className="relative py-2">
                                    <input disabled type="text" className="py-3 disabled:bg-transparent disabled:text-slate-300 disabled:border-slate-200 disabled:shadow-none dark:text-slate-200" placeholder="Email" />
                                    <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-700 dark:text-slate-200">{user.email}</div>
                                </div>

                                <div className="relative py-2">
                                    <input disabled type="text" placeholder="Date of birth" className="py-3 disabled:bg-transparent disabled:text-slate-300 disabled:border-slate-200 disabled:shadow-none dark:text-slate-200" />
                                    <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-700 dark:text-slate-200">{user.date_of_birth} <span className="ml-2">{user.age} years</span></div>
                                </div>

                                <div className="relative py-2">
                                    <input disabled type="text" className="py-3 disabled:bg-transparent disabled:text-slate-300 disabled:border-slate-200 disabled:shadow-none dark:text-slate-200" placeholder="Gender" />
                                    <div className="absolute flex items-center justify-end px-4 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-700 dark:text-slate-200">{user.gender}</div>
                                </div>
                            </div>
                            {/* BASIC information end */}
                            
                            <div id="filterSection" className="relative md:py-10 lg:px-2 md:px-6 py-5 px-2 bg-gray-50 dark:bg-slate-800 mt-2 w-full block">
                                {/* PERSONAL information start */}
                                <div> 
                                    <div className="flex items-start space-x-6 border-b pb-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                                        <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Personal information</p>
                                        <div className="min-w-0 relative flex-auto">
                                            <div className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                                                <div className="absolute top-0 right-0 flex items-center space-x-1">
                                                    <Button className="bg-purple-600 border-2 border-purple-600 text-purple-600 hover:text-white hover:bg-purple-600 dark:border-slate-200 dark:text-slate-200 dark:hover:text-slate-700 dark:hover:bg-slate-50 focus:ring-0 dark:focus:ring-0">Save <span className="hidden sm:flex ml-1">changes</span></Button>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <Label forInput="height" value="Height" />
                                        <InputSelect 
                                            value={data.height} 
                                            onChange={onHandleChange} 
                                            options={heightOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='Select your height'
                                            name={`height`}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="marital_status" value="Marital Status" />
                                        <InputSelect 
                                            value={data.marital_status} 
                                            onChange={onHandleChange} 
                                            options={maritalStatusOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='Select your Marital Status'
                                            name={`marital_status`}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="have_children" value="Children?" />
                                        <InputSelect 
                                            value={data.have_children} 
                                            onChange={onHandleChange} 
                                            options={childrenOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='Do you have any children?'
                                            name={`have_children`}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="siblings" value="Number of siblings" />
                                        <select 
                                            className={
                                                `mt-1 border-gray-300 rounded-xl shadow-sm text-slate-500 dark:text-slate-200`
                                            }
                                            onChange={onHandleChange}
                                            name="siblings" 
                                            value={data.siblings} 
                                        >
                                            <option value="" className="text-slate-500 dark:text-slate-200">Select how many</option>
                                            <option value="0" className="text-slate-500 dark:text-slate-200">I am only child</option>
                                            {
                                                nums.map((num) => <option className="text-slate-500 dark:text-slate-200" value={num} key={num}>{num}</option>)
                                            }
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="ethnic-origin" value="Ethnic origin" />
                                        <InputSelect 
                                            value={user.ethnic_origin} 
                                            onChange={onHandleChange} 
                                            options={ethnicOriginOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='Select your ethnic origin'
                                            name={`ethnic_origin`}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="relocate" value="Move abroad" />

                                        <InputSelect 
                                            value={user.relocate} 
                                            onChange={onHandleChange} 
                                            options={relocateOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='Are you willing to relocate?'
                                            name={`relocate`}
                                        />
                                    </div>
                                    
                                </div>
                                {/* PERSONAL information end */}

                                {/* LOCATION information START */}
                                
                                <div>
                                    <div className="mt-4">
                                        <Label forInput="country" value="Country" />
                                        <select
                                            className={
                                                `border-gray-300 rounded-xl shadow-sm text-slate-500 dark:text-slate-200`
                                            }
                                            name="country"
                                            onChange={onHandleChange}
                                            value={user.country}
                                        >
                                            <option value={''}>Select your country</option>
                                            {sortedcs.map((country) => {
                                                return (
                                                    <option key={country.code} value={country.name}>
                                                        {country.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="recidency_status" value="Recidency status" />
                                        <InputSelect 
                                            defaultValue={data.recidency_status} 
                                            onChange={onHandleChange} 
                                            options={residencystatusOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='Select your residency status'
                                            name={`recidency_status`}
                                        />
                                    </div>

                                    <div className="flex mt-4">
                                        <div className="w-1/2 pr-2">
                                            <Label forInput="city" value="City" />
                                            <Input
                                                type="text"
                                                name="city"
                                                value={user.city}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                placeholder="eg: London"
                                            />
                                        </div>

                                        <div className="w-1/2">
                                            <Label forInput="area" value="Area" />
                                            <Input
                                                type="text"
                                                name="area"
                                                value={user.area}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                placeholder="Enter your area"
                                            />
                                            {/* <input type="text" value={data.area} className="py-3 dark:text-slate-200" placeholder="City" /> */}

                                        </div>
                                    </div>

                                    <h3 className="mt-4 px-2 font-medium text-base text-slate-500 dark:text-slate-200 border-b border-gray-200">Back home address</h3>

                                    <div className="mt-4">
                                        <Label forInput="backhomecountry" value="Country" />
                                        <select
                                            className={
                                                `border-gray-300 rounded-xl shadow-sm text-slate-500 dark:text-slate-200`
                                            }
                                            name="back_home_country"
                                            onChange={onHandleChange}
                                            value={data.back_home_country}
                                        >
                                            <option value={''}>Select your country</option>
                                            {backhomecountries.map((backhomecountry) => {
                                                return (
                                                    <option key={backhomecountry.code} value={backhomecountry.name}>
                                                        {backhomecountry.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    
                                    <div className="flex mt-4">
                                        <div className="w-1/2 pr-2"> 
                                            <Label forInput="back_home_city" value="City" />
                                            {/* <input type="text" value={user.back_home_city} className="py-3 dark:text-slate-200" placeholder="City" /> */}

                                            <Input
                                                type="text"
                                                name="back_home_city"
                                                value={user.back_home_city}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                placeholder="eg: Sylhet"
                                            />
                                        </div>
                                        <div className="w-1/2"> 
                                            <Label forInput="back_home_area" value="Area" />
                                            <Input
                                                type="text"
                                                name="back_home_area"
                                                value={user.back_home_area}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* location information ends */}


                                {/* EDUCATION information START */}
                                <div>
                                    <div className="flex items-start space-x-6 border-b pb-2 pt-4 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                                        <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Career | Education</p>
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
                                        {/* <InputSelect 
                                            defaultValue={data.highest_education} 
                                            onChange={onHandleChange} 
                                            options={educationOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='Select your most recent university or college qualification'
                                            name={`highest_education`}
                                        /> */}
                                        <Input
                                            type="text"
                                            name="highest_education"
                                            value={data.highest_education}
                                            className="mt-1 block w-full"
                                            handleChange={onHandleChange}
                                            placeholder="Your most recent university or college qualification"
                                        />
                                    </div>

                                    <div className="flex mt-4">
                                        <div className="w-2/3 pr-2">
                                            <Label forInput="university" value="University Name" />
                                            <Input
                                                type="text"
                                                name="university"
                                                value={user.university}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                placeholder="Enter university name"
                                            />
                                        </div>

                                        <div className="w-1/2">
                                            <Label forInput="course_name" value="Course Name" />
                                            <Input
                                                type="text"
                                                name="course_name"
                                                value={user.course_name}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                placeholder="Enter course name"
                                            />
                                        </div>
                                    </div>
                                    
                                    <p className="mb-0 pb-0 flex item-right justify-end text-sm font-semibold cursor-pointer text-purple-600 dark:text-slate-50" onClick={() => toggle()}>
                                        {add ? "-" : "Add more education"}
                                    </p>

                                    {add ? (
                                        <div className="flex mt-2">
                                            <div className="w-2/3 pr-2">
                                                <Label forInput="college" value="College" />
                                                <Input
                                                    type="text"
                                                    name="college"
                                                    value={data.college}
                                                    className="mt-1 block w-full"
                                                    handleChange={onHandleChange}
                                                    placeholder="Enter college name"
                                                />
                                            </div>

                                            <div className="w-1/2">
                                                <Label forInput="college_course_name" value="Course name" />
                                                <Input
                                                    type="text"
                                                    name="college_course_name"
                                                    value={data.college_course_name}
                                                    className="mt-1 block w-full"
                                                    handleChange={onHandleChange}
                                                    placeholder="Enter course name"
                                                />
                                            </div>
                                        </div>
                                    ) : ''}

                                    <div className="mt-4">
                                        <Label forInput="current_profession" value="Current profession" />
                                        <Input
                                            type="text"
                                            name="current_profession"
                                            value={data.current_profession}
                                            className="mt-1 block w-full"
                                            handleChange={onHandleChange}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="company_name" value="Company Name" />
                                        <Input
                                            type="text"
                                            name="company_name"
                                            value={data.company_name}
                                            className="mt-1 block w-full"
                                            handleChange={onHandleChange}
                                        />
                                        <p className="text-slate-500 text-xs font-medium">This will not show in on your profile</p>
                                    </div>


                                </div>
                                {/* EDUCATION information END */}
                                
                                {/* Religious information START */}

                                <div className="mt-4">
                                    <div className="flex items-start space-x-6 border-b pb-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                                        <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Religious Practice</p>
                                        <div className="min-w-0 relative flex-auto">
                                            <div className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                            <Label forInput="religious_history" value="Religious history" />
                                            <InputSelect 
                                                value={data.religious_history} 
                                                onChange={onHandleChange} 
                                                options={regiousHistoryOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select your religious history'
                                                name={`religious_history`}
                                            />
                                    </div>

                                    <div className="mt-4">
                                            <Label forInput="prayer_frequency" value="Do you pray" />
                                            <InputSelect 
                                                value={data.prayer_frequency} 
                                                onChange={onHandleChange} 
                                                options={prayerFrequencyOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select your prayer frequency'
                                                name={`prayer_frequency`}
                                            />
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="sect" value="Sect" />
                                        <InputSelect 
                                            value={data.sect} 
                                            onChange={onHandleChange} 
                                            options={sectOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='What sect are you?'
                                            name={`sect`}
                                            required={true}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="read_quran" value="Read Quran" />
                                        <InputSelect 
                                            value={data.read_quran} 
                                            onChange={onHandleChange} 
                                            options={readQuranOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='Can you read Quran?'
                                            name={`read_quran`}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="eat_halal" value="Eating Halal" />
                                        <InputSelect 
                                            value={data.eat_halal} 
                                            onChange={onHandleChange} 
                                            options={eatHalalOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='Do you eat halal?'
                                            name={`eat_halal`}
                                            required={true}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="drink_alchohol" value="Drink" />
                                        <InputSelect 
                                            value={data.drink_alchohol} 
                                            onChange={onHandleChange} 
                                            options={drinkAlchoholOptions} 
                                            className={`block w-full sm:text-sm`} 
                                            placeholder='Do you drink alchohol ?'
                                            name={`drink_alchohol`}
                                            required={true}
                                        />
                                    </div>
                                    

                                    {/* <div className="mt-4">
                                        <div className="flex items-baseline mb-2 pb-2 space-x-2">
                                            <div className="w-1/3">
                                                <Label forInput="wear_hijab_keep_beard" value={`${auth.user.gender == "Male" ? "Keep Beard" : "Wear Hijab ?" }`} />
                                            </div>
                                            <div className="w-2/3 flex justify-end space-x-1">
                                                <RadioButton name="wear_hijab_keep_beard" value={`Yes`} btnName="Yes" handleChange={onHandleChange} />
                                                <RadioButton name="wear_hijab_keep_beard" value={`No`} btnName="No" handleChange={onHandleChange} />
                                                <RadioButton name="wear_hijab_keep_beard" value={`Hidden`} btnName="Prefer not to say" handleChange={onHandleChange} />
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="mt-4">
                                        <Label forInput="bio" value="About you" />
                                        <textarea id="about" name="bio" onChange={onHandleChange} className="bg-transparent border mt-1 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded-lg text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-700 dark:text-gray-700" placeholder="Share something nice about you ..." rows={5} defaultValue={data.bio} />
                                        <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 2000</p>
                                    </div>

                                    

                                </div>
                                {/* Religious information END */}
                                <div className="pt-4">
                                    <hr className="mt-4 bg-gray-200/50 dark:bg-gray-50/50 w-full md:my-10 md:mb-5 my-8" />

                                    <div className="px-0 mt-10 w-full md:w-auto md:mt-4 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-2 md:px-6">
                                        <button className="w-full bg-purple-600 text-slate-50 hover:text-white hover:bg-purple-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 rounded-md">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </Authenticated>
  )
}

export default Profile