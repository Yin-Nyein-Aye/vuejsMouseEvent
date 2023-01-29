const app=Vue.createApp({
    methods:{    
        mouseOverHandler(event,data){
            console.log("Hey Action is mouse over",event.type,data);
        },
        mouseleaveHandler(event){
            console.log("Mouse Leaving",event.type);
        },
        dbclickHandler(event){
            console.log('DB Clicking',event.type);
        }
    }
});
app.mount("#app");