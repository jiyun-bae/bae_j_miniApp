export default {
    name: "TheCarCard",

    props: ["car"],

    // data needs to be a function inside a component
    data: function() {
        return {
            carName: this.car.name,
            program: "IDP"
        }
    },

    created: function () {
        console.log(`created ${this.car.name}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.car.name}'s component!`);
        }
    }
}