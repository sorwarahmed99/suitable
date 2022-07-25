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
import { useForm, usePage } from '@inertiajs/inertia-react';

function Profile({auth}) {


    const {user, interests} = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        ethnic_origin: user.ethnic_origin ||'',
        country: user.country ||'',
        recidency_status: user.recidency_status || '',
        relocate: user.relocate || '',
        postcode: user.postcode || '',
        min_height: user.height || '',
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
    });
    const photoRef = useRef();

    const [selectedFile, setSelectedFile] = useState();
    const [link, setLink] = useState(false);
    const [values, setValues] = useState({photo: '',});
    
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
        // console.log(e.target.files[])
        if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
        );

        // console.log("filesArray: ", filesArray);

        setSelectedFiles((prevImages) => prevImages.concat(filesArray));
        Array.from(e.target.files).map(
            (file) => URL.revokeObjectURL(file) // avoid memory leak
        );
        }
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
        console.log("source: ", source);
        return source.map((photo) => {
            return <div  key={photo}  className="relative rounded-lg shadow-sm bg-gray-50">
                                <div onClick={() => setSelectedFiles(selectedFiles.filter((e) => e !== photo))} className="flex justify-center items-baseline absolute z-50 right-0 left-[4rem] -top-[1rem] text-sm border bg-slate-700 shadow-md cursor-pointer hover:bg-slate-900 border-slate-800 text-slate-50 text-center h-6 w-6 rounded-full">x</div>
                                <img  alt="" src={photo} className="object-cover rounded-lg h-20 w-20 aspect-square" />
                    
                    {/* <img src={photo} alt="" key={photo} className="object-cover h-20 w-20 aspect-square" />
                    <button onClick={() => setSelectedFiles(selectedFiles.filter((e) => e !== photo))}>delete</button> */}
                    </div>;
        });
    };
    const onHandleChange = e => {    
        const formData = new FormData();

        formData.append('photo', photoRef.current.files[0])
        // formData.append('photo', values.photo)
        
        // Inertia.post('upload-profile-pic', formData, {
        //     forceFormData: true,
        //   });
        setSelectedFile(URL.createObjectURL(e.target.files[0]) );

        setLink(true);

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



    const countries = [ 
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
    const relocateOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Not sure", label: "Not sure" },
    ];

    const residencystatusOptions = [
        { value: "Student visa", label: "Student visa"},
        { value: "Work permit", label: "Work permit"},
        { value: "Citizen", label: "Citizen"},
    ];

    const ethnicOriginOptions = [
        { value: "Asian", label: "Asian"},
        { value: "African", label: "African"},
        { value: "Asian-British", label: "Asian-British"},
        { value: "Asian-Bangladeshi", label: "Asian-Bangladeshi"},
    ];

    const multipleOptions = [
        { value: "Prefer not to say", label: "Prefer not to say"},
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];

    
    

    const livingwithOptions = [
        { value: "Parents", label: "Parents" },
        { value: "Live by myself", label: "Live by myself" },
        { value: "Hidden", label: "Prefer not say" },
    ];

    const maritalStatusOptions = [
        { value: "Single", label: "Single" },
        { value: "Divorced", label: "Divorced" },
        { value: "Widowed", label: "Widowed" },
        { value: "Hidden", label: "Prefer not to say" },
    ];

    const haveChildrenOptions = [
        { value: "None", label: "None" },
        { value: "Hidden", label: "Prefer not to say" },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
    ];

    const regiousHistoryOptions = [
        { value: "Convert", label: "Convert" },
        { value: "Revert", label: "Revert" },
        { value: "Not sure", label: "Not sure" },
    ];

    const sectOptions = [
        { value: "Sunni", label: "Sunni" },
        { value: "Shia", label: "Shia" },
        { value: "Don't Follow", label: "Do not follow" },
    ];

    const prayerFrequencyOptions = [
        { value: "Never Missed", label: "Never Missed" },
        { value: "Sometimes Miss", label: "Sometimes Miss" },
        { value: "Occasionally", label: "Occasionally" },
        { value: "Hidden", label: "Prefer not to say" },
    ];
    
    const schoolOfThougthsOptions = [
        { value: "Hanafi", label: "Hanafi" },
        { value: "Hanbali", label: "Hanbali" },
        { value: "Maliki", label: "Maliki" },
        { value: "Shafei", label: "Shafei" },
        { value: "Hidden", label: "Prefer not to say" },
    ];

    
    const educationOptions = [
        {value: 'Masters', label: 'Masters'},
        {value: 'Bachelor', label: 'Bachelor'},
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
    
    
    const continueWorkingOptions =  [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Not sure", label: "Not sure" },
    ];

    const moveOutOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Not sure", label: "Not sure" },
    ];

    const getMarriedOptions = [
        {value: 'As soon as possible', label: 'As soon as possible'},
        {value: 'Between 1-3 Years', label: 'Between 1-3 Years'},
        {value: 'Not sure', label: 'Not sure'},
        {value: 'Hidden', label: 'Prefer not to say'},
    ];


    let nums = [];
    let min = 1, max = 20;
    for(let i = min; i <= max; i++){
        nums.push(i);
    }

    const fitnessOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Hidden", label: "Prefer not to say" },
    ];
    const hairColorOptions = [
        { value: "Brown", label: "Brown" },
        { value: "Black", label: "Black" },
        { value: "Hidden", label: "Prefer not to say" },
    ]
    const heightOptions = [
        {value: '4ft', label: '4ft'},
        {value: '4ft 5in', label: '4ft 5in'},
        {value: '5ft', label: '5ft'},
        {value: '5ft 5in', label: '5ft 5in'},
        {value: '5ft 6in', label: '5ft 6in'},
        {value: '5ft 7in', label: '5ft 7in'},
        {value: '5ft 8in', label: '5ft 8in'},
        {value: '5ft 9in', label: '5ft 9in'},
        {value: '6ft', label: '6ft'},
        {value: '6ft 1in', label: '6ft 1in'},
        {value: '6ft 2in', label: '6ft 2in'},
        {value: '6ft 3in', label: '6ft 3in'},
    ];

    const submit = (e) => {
        e.preventDefault();
        post('set-up-profile-step-1');
    };
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
                        {/* <header id="header" className="relative z-20">
                            <div>
                                <p className="mb-2 text-sm leading-6 font-semibold text-red-500 dark:text-red-400">{auth.user.firstname}</p>
                                <div className="flex items-center">
                                    <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Your information</h1>
                                </div>
                            </div>
                            <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">You can update your information from here.</p>
                        </header> */}
                        

                        <form id="login" className="dark:bg-slate-800" onSubmit={handleSubmit}>
                            <div className="dark:bg-gray-800">
                                <div className="p-4 shadow-sm bg-slate-100 dark:bg-slate-700 rounded-md"> 
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Your profile is under validation!</h2>
                                    <div className="flex items-start space-x-2 ">
                                        
                                        <div className="flex-none text-lg text-red-400 rounded-lg border border-red-400 shadow-md p-5 dark:text-red-400 font-bold">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-red-400" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                        </div>

                                        <div className="min-w-0 relative flex-auto">
                                            <div className="p-2">
                                                <p className="text-sm font-semibold  text-gray-600 dark:text-gray-400">
                                                    {user.firstname}, your profile is under validation right now. Once validated,
                                                    you will receive a confirmation on your registered mail ID.
                                                </p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="py-8">
                                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Photos</h2>
                                    <p className="text-slate-500 mb-2">Upload or remove photos</p>
                                    <form className="flex items-start justify-start space-x-2 mt-4">
                                        <div className="flex justify-center space-x-2">
                                            <div className="rounded-lg shadow-md bg-gray-50">
                                                <div className="p-2">
                                                    <div className="flex items-center justify-center w-full">
                                                        <label className="relative flex flex-col w-20 h-20 border-3 bg-gray-50 border-slate-300 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                                            <div className="flex flex-col items-center justify-center pt-10">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                                </svg>
                                                            </div>
                                                            <input ref={photoRef} type="file" value={values.photo} className="opacity-0" multiple onChange={handleImageChange} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {selectedFiles && 
                                            <div class="flex flex-wrap gap-2">
                                                <div className="relative rounded-lg shadow-sm bg-gray-50">
                                                    <div onClick={() => setSelectedFiles(selectedFiles.filter((e) => e !== photo))} className="flex justify-center items-baseline absolute z-50 right-0 left-[4rem] -top-[1rem] text-sm border bg-slate-700 shadow-md cursor-pointer hover:bg-slate-900 border-slate-800 text-slate-50 text-center h-6 w-6 rounded-full">x</div>
                                                    <img src={`http://localhost:3000/${auth.user.profile_image}`} alt={`${auth.user.firstname}'s Profile photo`} className="object-cover h-20 w-20 aspect-square"  />
                                                    <p className="text-xs flex justify-center">Profile photo</p>
                                                </div>
                                                {renderPhotos(selectedFiles)}
                                            </div>
                                        }
                                    </form>
                                </div>

                                <div className="py-4">
                                    <div className="flex items-start space-x-6 border-b pb-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                                        <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Basic information</p>
                                        <div className="min-w-0 relative flex-auto">
                                            <div className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                                                <div className="absolute top-0 right-0 flex items-center space-x-1">
                                                    <Button className="bg-indigo-700">Save <span className="hidden sm:flex ml-1">changes</span></Button>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-slate-500 mb-3">You can't update basic information once it's public. To update your basic information please contact authority !</p>
                                    
                                    <div className="relative py-2">
                                        <input disabled type="text" className="py-3" placeholder="Firstname" />
                                        <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{auth.user.firstname}</div>
                                    </div>

                                    <div className="relative py-2">
                                        <input disabled type="text" className="py-3" placeholder="Lastname" />
                                        <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{auth.user.lastname}</div>
                                    </div>

                                    <div className="relative py-2">
                                        <input type="text" className="py-3" placeholder="username" readOnly disabled/>
                                        <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{auth.user.firstname}_{auth.user.username}</div>
                                    </div>

                                    <div className="relative py-2">
                                        <Input type="text" className="py-3" placeholder="Choose a nickname" />
                                        {/* <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{auth.user.lastname}</div> */}
                                    </div>

                                    <div className="relative py-2">
                                        <input disabled type="text" className="py-3" placeholder="Email" />
                                        <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{auth.user.email}</div>
                                    </div>

                                    <div className="relative py-2">
                                        <input disabled type="text" placeholder="Date of birth" className="py-3" />
                                        <div className="absolute flex items-center justify-end px-3 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{auth.user.date_of_birth} <span className="ml-2">{auth.user.age} years</span></div>
                                    </div>

                                    <div className="relative py-2">
                                        <input disabled type="text" className="py-3" placeholder="Gender" />
                                        <div className="absolute flex items-center justify-end px-4 py-3.1 mt-4 mr-1 right-0 top-0 z-20 text-center text-slate-500">{auth.user.gender}</div>
                                    </div>
                                </div>

                                

                        
                                <div id="filterSection" className={"relative py-5 px-2 bg-gray-50 dark:bg-slate-800 mt-2 w-full block"}>
                                    <div> 
                                        <div className="flex items-start space-x-6 border-b pb-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                                            <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Personal information</p>
                                            <div className="min-w-0 relative flex-auto">
                                                <div className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <Label forInput="country" value="Country" />
                                            <select
                                                className={
                                                    `mt-2 border-gray-300 rounded-xl shadow-sm`
                                                }
                                                name="country"
                                                onChange={onHandleChange}
                                                value={data.country}
                                            >
                                                <option value={''}>Select a country</option>
                                                {countries.map((country) => {
                                                    return (
                                                        <option key={country.code} value={country.name}>
                                                            {country.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="ethnic-origin" value="Ethnic Origin" />
                                            <InputSelect 
                                                value={data.ethnic_origin} 
                                                onChange={onHandleChange} 
                                                options={ethnicOriginOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select ethnic origin'
                                                name={`ethnic_origin`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="recidency_status" value="Recidency status" />
                                            <InputSelect 
                                                value={data.recidency_status} 
                                                onChange={onHandleChange} 
                                                options={residencystatusOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select residency status'
                                                name={`recidency_status`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="relocate" value="Move abroad" />

                                            <InputSelect 
                                                value={data.relocate} 
                                                onChange={onHandleChange} 
                                                options={relocateOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Are you willing to relocate?'
                                                name={`relocate`}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <Label forInput="postcode" value="Postcode" />
                                            <Input
                                                type="text"
                                                name="postcode"
                                                value={data.postcode}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <Label forInput="marital_status" value="Marital Status" />
                                            <InputSelect 
                                                defaultValue={data.marital_status} 
                                                onChange={onHandleChange} 
                                                options={maritalStatusOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select your Marital Status'
                                                name={`marital_status`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="living_with" value="Who do you live with ?" />
                                            <InputSelect 
                                                defaultValue={data.living_with} 
                                                onChange={onHandleChange} 
                                                options={livingwithOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Please select one option'
                                                name={`living_with`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="have_children" value="Do you have children" />
                                            <InputSelect 
                                                defaultValue={data.have_children} 
                                                onChange={onHandleChange} 
                                                options={haveChildrenOptions} 
                                                className={`block w-full sm:text-sm`} 
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
                                                    <RadioButton name="like_to_have_children" value={`Hidden`} btnName="Prefer not to say" handleChange={onHandleChange} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <div className="flex items-baseline mb-2 pb-2 space-x-2">
                                                <div className="w-1/3">
                                                    <Label forInput="physical_disability" value="Any Physical disability ?" />
                                                </div>
                                                <div className="w-2/3 flex justify-end space-x-1">
                                                    <RadioButton name="physical_disability" value={`Yes`} btnName="Yes" handleChange={onHandleChange} />
                                                    <RadioButton name="physical_disability" value={`No`} btnName="No"  handleChange={onHandleChange} />
                                                    <RadioButton name="physical_disability" value={`Hidden`} btnName="Prefer not to say" handleChange={onHandleChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="mt-4">
                                            <Label forInput="highest_education" value="Highest Education" />
                                            <InputSelect 
                                                defaultValue={data.highest_education} 
                                                onChange={onHandleChange} 
                                                options={educationOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Your educational qualification'
                                                name={`highest_education`}
                                            />
                                        </div>
                                        
                                        <div className="mt-4">
                                            <Label forInput="graduation_year" value="Graduation Year" />
                                            <select 
                                                className={
                                                    `mt-1 border-gray-300 rounded-xl shadow-sm`
                                                }
                                                onChange={onHandleChange}
                                                name="graduation_year" 
                                                value={data.graduation_year} 
                                            >
                                                <option selected>Select graduation year</option>
                                                {
                                                    allYears.map((year) => <option value={year} key={year}>{year}</option>)
                                                }
                                            </select>
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="current_profession" value="Profession" />
                                            <Input
                                                type="text"
                                                name="current_profession"
                                                value={data.current_profession}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                        
                                        <div className="mt-4">
                                            <Label forInput="for_how_long" value="Years" />
                                            <InputSelect 
                                                defaultValue={data.for_how_long} 
                                                onChange={onHandleChange} 
                                                options={yearsOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='How long have you been in this position?'
                                                name={`for_how_long`}
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
                                                required
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="yearly_income" value="Yearly Income" />
                                            <Input
                                                type="number"
                                                name="yearly_income"
                                                value={data.yearly_income}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                    <div>
                                    
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
                                                placeholder='What sect are you'
                                                name={`sect`}
                                                required={true}
                                            />
                                        </div>

                                        <div className="mt-4">
                                                <Label forInput="school_of_thoughts" value="School of thoughts" />
                                                <InputSelect 
                                                    value={data.school_of_thoughts} 
                                                    onChange={onHandleChange} 
                                                    options={schoolOfThougthsOptions} 
                                                    className={`block w-full sm:text-sm`} 
                                                    placeholder="What's your school of thoughts"
                                                    name={`school_of_thoughts`}
                                                    required={true}
                                                />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="eat_halal" value="Eat halal ?" />
                                            <InputSelect 
                                                value={data.eat_halal} 
                                                onChange={onHandleChange} 
                                                options={multipleOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder="Do you eat halal?"
                                                name={`eat_halal`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="smoke" value="Smoke ?" />
                                            <InputSelect 
                                                value={data.smoke} 
                                                onChange={onHandleChange} 
                                                options={multipleOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder="Do you smoke?"
                                                name={`smoke`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="drink_alchohol" value="Drink Alchohol ?" />
                                            <InputSelect 
                                                value={data.drink_alchohol} 
                                                onChange={onHandleChange} 
                                                options={multipleOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder="Do you Drink Alchohol?"
                                                name={`drink_alchohol`}
                                            />
                                        </div>


                                        <div className="mt-4">
                                            <Label forInput="wear_hijab_keep_beard" value={`${auth.user.gender == "Male" ? "Keep Beard" : "Wear Hijab ?" }`} />
                                            <InputSelect 
                                                value={data.wear_hijab_keep_beard}
                                                onChange={onHandleChange} 
                                                options={multipleOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder="Do you Drink Alchohol?"
                                                name={`wear_hijab_keep_beard`}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="flex items-start space-x-6 border-b pb-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800">
                                            <p className="flex-none text-lg font-semibold text-gray-800 dark:text-gray-100">Family | Future Plan</p>
                                            <div className="min-w-0 relative flex-auto">
                                                <div className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4">
                                            <Label forInput="siblings" value="Number of siblings" />
                                            <select 
                                                className={
                                                    `mt-1 border-gray-300 rounded-xl shadow-sm`
                                                }
                                                onChange={onHandleChange}
                                                name="siblings" 
                                                value={data.siblings} 
                                            >
                                                <option value="">Select how many</option>
                                                <option value="0">I am only child</option>
                                                {
                                                    nums.map((num) => <option value={num} key={num}>{num}</option>)
                                                }
                                            </select>
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="a_day_living_with_family" value="What will a day living with your family consist of? Any specific duties? " />
                                            <Input
                                                type="text"
                                                name="a_day_living_with_family"
                                                value={data.a_day_living_with_family}
                                                placeholder={`Write in short.. `}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="get_married" value="Preferred marriage time ?" />
                                            <InputSelect 
                                                defaultValue={data.get_married} 
                                                onChange={onHandleChange} 
                                                options={getMarriedOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='When are you planning to get married ?'
                                                name={`get_married`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="continue_working" value="Do you intend to continue working when married?" />
                                            <InputSelect 
                                                defaultValue={data.continue_working} 
                                                onChange={onHandleChange} 
                                                options={continueWorkingOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select an option'
                                                name={`continue_working`}
                                            />
                                        </div>
                                        
                                        <div className="mt-4">
                                            <Label forInput="intend_to_move_out" value="Do you intend to move out?" />
                                            <InputSelect 
                                                defaultValue={data.intend_to_move_out} 
                                                onChange={onHandleChange} 
                                                options={moveOutOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select an option'
                                                name={`intend_to_move_out`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="issues_living_with_inlaws" value="Do you have issues living with in laws?" />
                                            <InputSelect 
                                                defaultValue={data.issues_living_with_inlaws} 
                                                onChange={onHandleChange} 
                                                options={moveOutOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select an option'
                                                name={`issues_living_with_inlaws`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="future_plan" value="Where do you see yourself in 5 years" />
                                            <Input
                                                type="text"
                                                name="future_plan"
                                                placeholder={`Write in short.. `}
                                                value={data.future_plan}
                                                className="mt-1 block w-full"
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>

                                    </div>

                                    <div>
                                        <div className="mt-4">
                                            <Label forInput="height" value="Height" />
                                            <InputSelect 
                                                defaultValue={data.height} 
                                                onChange={onHandleChange} 
                                                options={heightOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select your height'
                                                name={`height`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="hair_color" value="Hair Color" />
                                            <InputSelect 
                                                defaultValue={data.hair_color} 
                                                onChange={onHandleChange} 
                                                options={hairColorOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select your hair color'
                                                name={`hair_color`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="fitness" value="Fitness" />
                                            <InputSelect 
                                                defaultValue={data.fitness} 
                                                onChange={onHandleChange} 
                                                options={fitnessOptions} 
                                                className={`block w-full sm:text-sm`} 
                                                placeholder='Select if you like work out ?'
                                                name={`fitness`}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="bio" value="About you" />
                                            <textarea id="about" name="bio" onChange={onHandleChange} className="bg-transparent border mt-1 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded-lg text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-700 dark:text-gray-700" placeholder="Share something nice about you ..." rows={5} defaultValue={data.bio} />
                                            <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 1000</p>
                                        </div>

                                        <div className="mt-4 border-b border-slate-200">
                                            <Label forInput="interests" value="Interests" />

                                            <div className="flex flex-wrap items-baseline mt-2 pb-2 space-x-2">
                                                {interests.map(({ name, id, svg }) => (
                                                    <div key={name}>
                                                        <label class="inline-flex items-center mt-2">
                                                            <input type="checkbox" name="interests[]" class="sr-only peer" onChange={handleChecked} value={id} />
                                                            <span class="px-4 py-2 text-xs cursor-pointer font-semibold rounded-full border border-slate-300 flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-indigo-50  peer-checked:border-red-400 peer-checked:text-red-400">
                                                            <span className="font-normal mr-2 h-5 w-5"><div dangerouslySetInnerHTML={{ __html: svg}} /></span>    {name}
                                                            </span>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                        
                                </div>

                                <hr className=" bg-gray-200/50 dark:bg-gray-50  w-full md:my-10 my-8" />

                            </div>
                                
                                {/* <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
                                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Personal Information</p>
                                            <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto pt-4">
                                        <div className="container mx-auto">
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    First Name
                                                </label>
                                                <input type="text" id="FirstName" name="firstName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Last Name
                                                </label>
                                                <input type="text" id="LastName" name="lastName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="Email" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Email
                                                </label>
                                                <div className="border border-green-400 shadow-sm rounded flex">
                                                    <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={3} y={5} width={18} height={14} rx={2} />
                                                            <polyline points="3 7 12 13 21 7" />
                                                        </svg>
                                                    </div>
                                                    <input type="text" id="Email" name="email" required className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400" placeholder="example@gmail.com" />
                                                </div>
                                                <div className="flex justify-between items-center pt-1 text-green-400">
                                                    <p className="text-xs">Email submission success!</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                        <path
                                                            className="heroicon-ui"
                                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                            0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                                            stroke="currentColor"
                                                            strokeWidth="0.25"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Street Address
                                                </label>
                                                <input type="text" id="StreetAddress" name="streetAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    City
                                                </label>
                                                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                                                    <input type="text" id="City" name="city" required className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Los Angeles" />
                                                    <div className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 15 12 9 18 15" />
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    State/Province
                                                </label>
                                                <input type="text" id="State/Province" name="state" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="California" />
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Country
                                                </label>
                                                <input type="text" id="Country" name="country" required className="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="United States" />
                                            </div>
                                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                                <div className="flex items-center pb-2">
                                                    <label htmlFor="ZIP" className="text-sm font-bold text-gray-800 dark:text-gray-100">
                                                        ZIP/Postal Code
                                                    </label>
                                                    <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <input type="text" name="zip" required id="ZIP" className="bg-transparent border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder={86745} />
                                                <div className="flex justify-between items-center pt-1 text-red-400">
                                                    <p className="text-xs">Incorrect Zip Code</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                                                        <circle cx={12} cy={12} r={10} />
                                                        <line x1={15} y1={9} x2={9} y2={15} />
                                                        <line x1={9} y1={9} x2={15} y2={15} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                
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