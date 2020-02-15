new Vue({
  el:'#vue-app',
  data:{
  	available:true,
    nearby:false
  },
  methods:{
  	greet:function(time){
  		return 'Good '+time+' '+this.name
  	}
  }

  computed:{
    compClasses:function(){
      return{
        available:this.available,
        nearby:this.nearby
      }
    }
  }
})


