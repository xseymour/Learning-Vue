<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>24. Shared State 101</title>

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <style type="text/css">body {padding-top: 40px}</style>
    </head>
    <body>
        <div id="one" class="container">
            <a v-bind:href="laracast_url"  target="_blank">Episode 24</a>
            <br><br>
            <h1>@{{shared.user.name}}</h1>
        </div>

        <div id="two" class="container">
            <h1>@{{shared.user.name}}</h1>
            
        </div>

        {{-- Scripts --}}
        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>