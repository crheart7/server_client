<template>
    <div>
    <p>
        이름 : <input type="text" v-model.trim="name" placeholder="두글자 이상 입력후 엔터!"
                @keyup.enter="keyupEvent" /><br />
    </p>
    </div>
</template>

<script type="text/javascript">
import eventBus from '../EventBus.js';

export default {
    name : 'searchForm',
    props : { 
        mode : { type:String, default:'search' },
        contact : {
            type : Object,
            default : function() {
                return { name:'' }
            }
        }
    },    
    methods : { 
        submitEvent : function() {
            eventBus.$emit("searchContact", this.contact)
        },
        cancelEvent : function() {
            eventBus.$emit("cancel");
        }
    }
}
</script>
<style scoped>
div.box { width:200px; height:100px; overflow:auto;
        border:solid 1px #BBBBBB; margin:5px 0px 5px 0px; }
div.item { padding:3px; }
</style>