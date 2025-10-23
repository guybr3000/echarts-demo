document.addEventListener('DOMContentLoaded', () => {
  const charts = {};

  const deptHeadcount = echarts.init(document.getElementById('deptHeadcount'));
  const deptNames = ['Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'Customer Success', 'People Ops'];
  const headcountData = [162, 58, 32, 46, 87, 54, 24];

  deptHeadcount.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 40,
      right: 20,
      top: 50,
      bottom: 40
    },
    xAxis: {
      type: 'category',
      data: deptNames,
      axisTick: { alignWithLabel: true },
      axisLabel: { color: '#4c5165' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#4c5165' },
      splitLine: {
        lineStyle: {
          color: '#e5e8f1'
        }
      }
    },
    series: [{
      name: 'Headcount',
      type: 'bar',
      data: headcountData,
      itemStyle: {
        borderRadius: [6, 6, 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#5a8bff' },
          { offset: 1, color: '#1f65ff' }
        ])
      }
    }]
  });
  charts.deptHeadcount = deptHeadcount;

  const hireAttrition = echarts.init(document.getElementById('hireAttrition'));
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const hires = [18, 24, 30, 27, 20, 22];
  const attrition = [8, 12, 9, 11, 7, 10];

  hireAttrition.setOption({
    legend: {
      data: ['Hires', 'Attrition'],
      textStyle: { color: '#4c5165' }
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: 40,
      right: 30,
      top: 60,
      bottom: 40
    },
    xAxis: {
      type: 'category',
      data: months,
      boundaryGap: false,
      axisLabel: { color: '#4c5165' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#4c5165' },
      splitLine: {
        lineStyle: { color: '#e5e8f1' }
      }
    },
    series: [
      {
        name: 'Hires',
        type: 'line',
        smooth: true,
        data: hires,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 },
        itemStyle: { color: '#21c499' },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(33, 196, 153, 0.35)' },
            { offset: 1, color: 'rgba(33, 196, 153, 0)' }
          ])
        }
      },
      {
        name: 'Attrition',
        type: 'line',
        smooth: true,
        data: attrition,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 },
        itemStyle: { color: '#ff7070' },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255, 112, 112, 0.28)' },
            { offset: 1, color: 'rgba(255, 112, 112, 0)' }
          ])
        }
      }
    ]
  });
  charts.hireAttrition = hireAttrition;

  const satisfaction = echarts.init(document.getElementById('satisfaction'));
  const offices = ['New York', 'Austin', 'London', 'Berlin', 'Singapore'];
  const satisfactionScores = [84, 78, 82, 75, 88];
  const engagementScores = [79, 74, 80, 72, 85];

  satisfaction.setOption({
    legend: {
      textStyle: { color: '#4c5165' }
    },
    tooltip: {
      trigger: 'item'
    },
    radar: {
      indicator: offices.map((office) => ({ name: office, max: 100 })),
      axisName: {
        color: '#4c5165'
      },
      splitArea: {
        areaStyle: {
          color: ['#f6f7fb', '#ffffff']
        }
      },
      splitLine: {
        lineStyle: {
          color: '#d0d6eb'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#d0d6eb'
        }
      }
    },
    series: [
      {
        name: 'Satisfaction vs Engagement',
        type: 'radar',
        data: [
          {
            value: satisfactionScores,
            name: 'Satisfaction',
            areaStyle: {
              color: 'rgba(90, 139, 255, 0.35)'
            },
            lineStyle: { color: '#5a8bff' }
          },
          {
            value: engagementScores,
            name: 'Engagement',
            areaStyle: {
              color: 'rgba(33, 196, 153, 0.3)'
            },
            lineStyle: { color: '#21c499' }
          }
        ]
      }
    ]
  });
  charts.satisfaction = satisfaction;

  const diversity = echarts.init(document.getElementById('diversity'));
  const levels = ['Individual Contributor', 'Manager', 'Director', 'VP'];
  const women = [48, 42, 36, 32];
  const bipoc = [39, 34, 28, 24];
  const lgbtq = [15, 13, 12, 10];

  diversity.setOption({
    color: ['#5a8bff', '#21c499', '#ffb347'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Women', 'BIPOC', 'LGBTQ+'],
      textStyle: { color: '#4c5165' }
    },
    grid: {
      left: 40,
      right: 30,
      top: 60,
      bottom: 40
    },
    xAxis: {
      type: 'category',
      data: levels,
      axisLabel: { color: '#4c5165' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#4c5165', formatter: '{value}%' },
      splitLine: {
        lineStyle: { color: '#e5e8f1' }
      }
    },
    series: [
      {
        name: 'Women',
        type: 'bar',
        stack: 'representation',
        data: women,
        emphasis: { focus: 'series' },
        barWidth: 24
      },
      {
        name: 'BIPOC',
        type: 'bar',
        stack: 'representation',
        data: bipoc,
        emphasis: { focus: 'series' },
        barWidth: 24
      },
      {
        name: 'LGBTQ+',
        type: 'bar',
        stack: 'representation',
        data: lgbtq,
        emphasis: { focus: 'series' },
        barWidth: 24
      }
    ]
  });
  charts.diversity = diversity;

  const tenureBreakdown = echarts.init(document.getElementById('tenureBreakdown'));
  const tenureData = [
    { value: 22, name: '0-1 years' },
    { value: 31, name: '1-3 years' },
    { value: 24, name: '3-5 years' },
    { value: 15, name: '5-8 years' },
    { value: 8, name: '8+ years' }
  ];

  tenureBreakdown.setOption({
    color: ['#5a8bff', '#21c499', '#ffb347', '#7b61ff', '#ff7070'],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: { color: '#4c5165' }
    },
    series: [
      {
        name: 'Tenure',
        type: 'pie',
        radius: ['45%', '70%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          formatter: '{b}\n{d}%',
          color: '#4c5165',
          fontWeight: 600
        },
        labelLine: {
          length: 16,
          length2: 8
        },
        data: tenureData
      }
    ]
  });
  charts.tenureBreakdown = tenureBreakdown;

  const workMode = echarts.init(document.getElementById('workMode'));
  const workDepartments = ['Engineering', 'Product', 'Design', 'Marketing', 'Sales'];
  const remote = [46, 38, 32, 24, 18];
  const hybrid = [38, 42, 44, 40, 36];
  const onsite = [16, 20, 24, 36, 46];

  workMode.setOption({
    color: ['#5a8bff', '#21c499', '#ff7070'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: {
      data: ['Remote', 'Hybrid', 'On-site'],
      textStyle: { color: '#4c5165' }
    },
    grid: {
      left: 50,
      right: 30,
      top: 60,
      bottom: 50
    },
    xAxis: {
      type: 'value',
      axisLabel: { color: '#4c5165', formatter: '{value}%' },
      splitLine: {
        lineStyle: { color: '#e5e8f1' }
      }
    },
    yAxis: {
      type: 'category',
      data: workDepartments,
      axisLabel: { color: '#4c5165' }
    },
    series: [
      {
        name: 'Remote',
        type: 'bar',
        stack: 'mode',
        emphasis: { focus: 'series' },
        data: remote,
        barWidth: 24
      },
      {
        name: 'Hybrid',
        type: 'bar',
        stack: 'mode',
        emphasis: { focus: 'series' },
        data: hybrid,
        barWidth: 24
      },
      {
        name: 'On-site',
        type: 'bar',
        stack: 'mode',
        emphasis: { focus: 'series' },
        data: onsite,
        barWidth: 24
      }
    ]
  });
  charts.workMode = workMode;

  window.addEventListener('resize', () => {
    Object.values(charts).forEach((chart) => chart.resize());
  });
});
