<template>
    <div class="container">
        <div class="columns">
            <div class="column">

                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>{{status.user.name}} said...</p>
                        <p>{{postedOn(status)}}</p>
                    </div>

                    <div class="message-body" v-text="status.body"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Status from '../models/Status';
    import moment from 'moment';
    export default {
        data() {
          return {
              statuses: []
          }
        },
        mounted() {
            console.log('Component mounted.')
        },
        created() {
            Status.all(statuses => this.statuses = statuses);
            // Status.all( ({statuses}) => this.statuses = statuses);
            // Status.all()
                // .then(response => this.statuses = response.data)
                // .then(({data}) => this.statuses = data) //es2015 object destructoring
        },
        methods: {
            postedOn(status) {
                return moment(status.created_at).fromNow();
            }
        }
    }
</script>
