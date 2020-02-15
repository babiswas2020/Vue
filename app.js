new Vue({
  el:'#vue-app',
  data:{
  	name:'Bapan',
  	job:'Ninja',
  	website:'https://google.com',
  	websiteTag:'<a href="http://www.thenetninja.co.uk">The website</a>'
  },
  methods:{
  	greet:function(time){
  		return 'Good '+time+' '+this.name
  	}
  }
})


new Vue({
  el:'#vue-age',
  data:{
  	age:15,
  },
  methods:{
  	add:function(inc){
      this.age+=inc;
  	},
  	sub:function(dec){
      this.age-=dec;
  	}
  }
})

new Vue({
  el:'#canvas',
  data:{
  	x:0,
  	y:0
  },
  methods:{

  	updateXY:function(event){
  		console.log(event)
  		this.x=event.offsetX;
  		this.y=event.offsetY;
  	}
  }
})


new Vue({
  el:'#emodifier',
  data:{
  	x:0,
  	y:0
  },
  methods:{

  	click:function(event){
  		alert('You Clicked me');
  	}
  }
})


new Vue({
  el:'#kevents',
  data:{
  	name:"Bapan",
  	age:12
  },
  methods:{

  	logName:function(){
  		console.log("You have entered Name")
  	},
  	logAge:function(){
  		console.log("You have entered Age")
  	}
 }
})

new Vue({
  el:'#cprop',
  data:{
  	age:12,
  	a:0,
  	b:0
  },
  methods:{

  	
 },
 computed:{

  	addToA:function(){
  		return this.a+this.age;
  	},
  	addToB:function(){
  		return this.b+this.age;
  	}
 }
})