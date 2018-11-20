Vue.component('multiline-chart', {
  extends: VueChartJs.Line,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["1999/2000","2000-2001","2001/2002","2002/2003","2003/2004","2004/2005","2005/2006","2006/2007","2007/2008","2008/2009","2009/2010","2010/2011","2011/2012","2012/2013","2013/2014","2014/2015","2015/2016"],
             datasets: [
        {
          label: 'Nombre de licenciées',
          borderColor: '#abc491',
          backgroundColor: 'transparent',
          data: [34997,39751,40210,43886,45853,48502,50232,60521,60952,59438,55605,54386,59409,66330,73138,86171,103276]
        }
      ]
    };

    var options = this.options || { };

    this.renderChart(data, options);
  }
})

var vm = new Vue({
  el: '.app',
  data: function () {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return  {
      now: now,
      day: days[now.getDay()]
    };
  }
})
