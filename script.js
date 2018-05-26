let app = new Vue({
    el: '#app',
    data: {
        editMode: false,
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
        },
        remove: function(f) {
            this.frameworks = this.frameworks.filter(i => i !=f)
        },
        load: function () {
            let data = localStorage.setItem('saved')
            if (data) {
                this.frameworks = JSON.parse(data)
            }
        },
        save: function() {
            let data = JSON.stringify(this.frameworks)
            localStorage.setItem('saved', data)
        },
        toggleEditMode: function() {
            this.editMode = !this.editMode
        }
    },

    computed: {
        winnerString: function() {
            let scores = this.frameworks.map(f => f.votes)
            let highscore = Math.max.apply(Math, scores)
            let bestList = this.frameworks.filter(f => f.votes == highscore)
            let bestNames = bestList.map(f => f.name)
            return bestNames.join(', ')
        }
    },
    created: function() {
        this.load()
    }
})