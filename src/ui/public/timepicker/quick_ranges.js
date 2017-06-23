import uiModules from 'ui/modules';
let module = uiModules.get('kibana');

module.constant('quickRanges', [
  { from: 'now/d',    to: 'now/d',    display: '今天',                 section: 0 },
  { from: 'now/w',    to: 'now/w',    display: '本周',             section: 0 },
  { from: 'now/M',    to: 'now/M',    display: '本月',            section: 0 },
  { from: 'now/y',    to: 'now/y',    display: '今年',             section: 0 },
  { from: 'now/d',    to: 'now',      display: '到目前为止这一天',        section: 0 },
  { from: 'now/w',    to: 'now',      display: '本周开始到现在',          section: 0 },
  { from: 'now/M',    to: 'now',      display: '本月开始到现在',         section: 0 },
  { from: 'now/y',    to: 'now',      display: '本年度开始到现在',          section: 0 },

  { from: 'now-1d/d', to: 'now-1d/d', display: '昨天',             section: 1 },
  { from: 'now-2d/d', to: 'now-2d/d', display: '前天',  section: 1 },
  { from: 'now-7d/d', to: 'now-7d/d', display: '上周的这一天',    section: 1 },
  { from: 'now-1w/w', to: 'now-1w/w', display: '上一周',         section: 1 },
  { from: 'now-1M/M', to: 'now-1M/M', display: '上个月',        section: 1 },
  { from: 'now-1y/y', to: 'now-1y/y', display: '上一年',         section: 1 },

  { from: 'now-15m',  to: 'now',      display: '最后 15 分钟',       section: 2 },
  { from: 'now-30m',  to: 'now',      display: '最后 30 分钟',       section: 2 },
  { from: 'now-1h',   to: 'now',      display: '最后 1 小时',           section: 2 },
  { from: 'now-4h',   to: 'now',      display: '最后 4 小时',          section: 2 },
  { from: 'now-12h',  to: 'now',      display: '最后 12 小时',         section: 2 },
  { from: 'now-24h',  to: 'now',      display: '最后 24 小时',         section: 2 },
  { from: 'now-7d',   to: 'now',      display: '最后 7 天',           section: 2 },

  { from: 'now-30d',  to: 'now',      display: '最后 30 天',          section: 3 },
  { from: 'now-60d',  to: 'now',      display: '最后 60 天',          section: 3 },
  { from: 'now-90d',  to: 'now',      display: '最后 90 天',          section: 3 },
  { from: 'now-6M',   to: 'now',      display: '最后 6 月',         section: 3 },
  { from: 'now-1y',   to: 'now',      display: '最后 1 年',           section: 3 },
  { from: 'now-2y',   to: 'now',      display: '最后 2 年',          section: 3 },
  { from: 'now-5y',   to: 'now',      display: '最后 5 年',          section: 3 },

]);

