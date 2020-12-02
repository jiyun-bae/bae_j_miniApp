import { fetchData } from "./components/TheDataMiner.js";
import CarCard from "./components/TheCarCard.js";

(() => {

    let vue_vm = new Vue({

        data: {
            message: "EXPLORE EVERY CORNER.",
            anotherMessage: "Take a closer look at the MINI 3 door and discover every charmingly iconic detail it has to offer.",
            minicars: [],
            currentCarData: {}
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");
            
            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(car => this.minicars.push(car));
                })
                .catch(err => console.error(err));            
        },

        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader() {
                console.log("clicked on the header");
            },

            next: function() {
                this.currentIndex += 1;
              },
              prev: function() {
                this.currentIndex -= 1;
              },
        },

        components: {
            "car-card": CarCard
        }
    }).$mount("#app");
})();