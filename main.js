const template = `<div>
<h1>{{title}}</h1>
</div>`
const data = function data(){
    return{
        title: "vue tutorial easy"
    };
}
Vue.createApp({data,template}).mount("#container");
app.mount("#container");