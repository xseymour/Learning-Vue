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
            <label for="v-model">v-model auto-creates 2 way bind: </label>
            <br>
            <input id="v-model" type="text" v-model="coupon">
            <br>
            {{--The above v-model binding is syntactic sugar for the following--}}
            <label for="2_way_bind">manually update control's value based on data and use listener to update data based on control:</label>
            <br>
            <input type="text" v-bind:value="coupon" @input="coupon = $event.target.value">

            {{-- Custom vue input component registered to v-model--}}
            <coupon v-model='coupon' :class="{valid_coupon : code_is_valid}" @valid="code_is_valid = true" @invalid="code_is_valid = false"></coupon>

        </div>

        {{-- Scripts --}}
        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>