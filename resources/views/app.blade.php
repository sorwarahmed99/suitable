<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        
        <title inertia>{{ config('app.name', '') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <link rel="stylesheet" href="{{ secure_asset('assets/css/LineIcons.2.0.css') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>
        <script src="https://js.stripe.com/v3/" defer></script>

    </head>
    <body class="font-sans antialiased bg-white dark:bg-slate-900">
        @inertia
        @env ('local')
            <script src="http://localhost:8080/js/bundle.js"></script>
        @endenv

    </body>


</html>
