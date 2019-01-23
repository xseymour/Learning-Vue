 <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>26. Vue SPA Essentials: Routing</title>

        {{--<link rel="stylesheet" href="{{ mix('css/app.css') }}">--}}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css">
        {{--<style type="text/css">body {padding-top: 40px !important}</style>--}}
    </head>
    <body>

        <div id="app">
            @include('layouts.header')

            <section class="section">
                <div class="container">
                    {{--View Content Placed here--}}
                    <router-view></router-view>
                </div>
            </section>
        </div>

        {{-- Scripts --}}
        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>