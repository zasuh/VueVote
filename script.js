let app = new Vue({
    el: '#app',
    data: {
        frameworks: [
            { name: 'Vue', votes: 0 },
            { name: 'Angular', votes: 0 },
            { name: 'React', votes: 0 }
        ]
    },
    methods: {
        voteFor: function (f) {
            f.votes++;
        },
        addNew: function(event) {
            this.frameworks.push({
                name: event.target.value,
                votes: 0
            })
            event.target.value = ''
        }
    }
})