<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title>18. Vue Ajax Requests with Axios</title>

    
    </head>
    <body>
       <div id="root">
           <ul>
               <!-- <li v-for="skill in skills">@{{skill}}</li> -->
               <li v-for="skill in skills" v-text="skill"></li>
           </ul>
       </div>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type="text/javascript" src="https://unpkg.com/vue@2.5.17/dist/vue.js"></script>
        <script src='/js/app.js'></script>
    </body>
</html>
