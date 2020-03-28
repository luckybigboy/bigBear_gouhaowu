import Vue from 'vue';
import format from 'date-fns/format';

Vue.filter('dateformat', function (value, pattern = 'yyyy-MM-dd HH:mm:ss') {
  return format(value, pattern);
})