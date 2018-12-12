<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>25. Custom Input Components</title>

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <style type="text/css">body {padding-top: 40px !important}</style>
    </head>
    <body>
        <div id="app" class="container">
            <a :href="laracast_url"  target="_blank">Episode 25</a>
            <br><br>


        </div>

        {{-- Scripts --}}
        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>