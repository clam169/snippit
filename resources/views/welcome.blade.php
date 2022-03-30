<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Snippit</title>

        <link href="{{asset('css/app.css')}}" ref="stylesheet">
        <script type="module" src="{{asset('js/app.js') }}" defer></script>
        
    </head>
    <body>
        <div id="app">
        </div>
    </body>
</html>