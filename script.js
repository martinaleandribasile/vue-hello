console.log("js ok");

const myVue = new Vue({
    el: ".container",
    data: {
        nomeUtente: "",
        cognomeUtente: "",
        divClass: "my-3 col-12 d-flex justify-content-evenly",
        rowClass: "row my-5",
        buttonClass: "btn btn-success",
        h2Class: "d-none text-center text-capitalize",
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png"
    },
    methods: {
        salutaUtente: function () {
            this.h2Class = "text-center text-capitalize";
        }
    }
})