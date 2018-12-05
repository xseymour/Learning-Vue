<!DOCTYPE html>
<html>
<head>
    <title>23.5 New Project Via Laravel Mix</title>
    <!-- Bulma Stylesheet linked through CDN at : https://cdnjs.com/libraries/bulma -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css">
    <style type="text/css">body {padding-top: 40px}</style>
</head>
<body>
    <div id="root" class="container">
        <a :href="laracast_url" target="_blank">Episode 23</a>
        <br><br>

        <notification message="Example Notification"></notification>    

    </div>

    {{-- Scripts --}}
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>

</body>
</html>