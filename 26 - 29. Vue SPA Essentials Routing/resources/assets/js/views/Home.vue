<template>
    <div class="container">
        <div class="columns">
            <div class="column">

                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{status.user.name}} said...
                        </p>

                        <p>
                            {{status.created_at | ago | capitalize}}
                        </p>
                    </div>

                    <div class="message-body" v-text="status.body"></div>
                </div>

            </div>
        </div>

        <!--Add to Stream Form-->
        <add-to-stream @completed="addStatus"></add-to-stream>

    </div>
</template>

<script>
    import Status from '../models/Status';
    import moment from 'moment';
    import AddToStream from '../components/AddToStream'; //Child Components must be registered with parent

    export default {
        components: { AddToStream },
        data() {
            return {
                statuses: []
            }
        },
        filters: {
            ago(date) {
                return moment(date).fromNow();
            },
            capitalize(value) {
                return value.toUpperCase();
            }

        },
        created() {
            Status.all(statuses => this.statuses = statuses);
            // Status.all( ({statuses}) => this.statuses = statuses);
            // Status.all()
            // .then(response => this.statuses = response.data)
            // .then(({data}) => this.statuses = data) //es2015 object destructoring
        },
        methods: {
            addStatus(status) {
                this.statuses.unshift(status);
                alert('Your status has been added to the stream.');

                window.scrollTo(0,0);
            },
        }
    }
</script>
