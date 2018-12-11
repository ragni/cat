import Controller from '@ember/controller';

export default Controller.extend({
    apps:[],
    init(){
        this._super(...arguments);
        
    },
    actions:{
        invalidateSession(){
            console.log("invalidateSession");
        }
    }
});
