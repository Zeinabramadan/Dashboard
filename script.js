
const HTML_BODY = document.querySelector('body');
HTML_BODY.classList.add(localStorage.getItem('theme'));

const LIGHT_THEME = document.querySelector('.fa-sun')
const DARK_THEME = document.querySelector('.fa-moon')

HTML_BODY.classList.add(localStorage.getItem('theme'));

// function to toggle the theme
function toggleTheme() {
  LIGHT_THEME.classList.toggle("hide-theme")
  DARK_THEME.classList.toggle("hide-theme")
  if(HTML_BODY.classList.contains("light-theme")) {
    HTML_BODY.classList.add("dark-theme")
    HTML_BODY.classList.remove("light-theme");
    localStorage.setItem('theme', 'dark-theme');
  } else {
    HTML_BODY.classList.remove("dark-theme")
    HTML_BODY.classList.add("light-theme");
    localStorage.setItem('theme', 'light-theme');
  }
}

LIGHT_THEME.addEventListener('click', () => toggleTheme())
DARK_THEME.addEventListener('click', () => toggleTheme())

let toggleSidebarButton = document.querySelector(".sidebar__toggle");
// function to toggle the sidebar
function toggleNav() {
  let sideBar = document.querySelector(".sidebar");
  let mainContent = document.querySelector(".main");
  sideBar.classList.toggle("open");
  mainContent.classList.toggle("open")
  if(sideBar.classList.contains("open")) {
    toggleSidebarButton.setAttribute('aria-expanded', "true");
  } else {
    toggleSidebarButton.setAttribute('aria-expanded', "false");
  }
}

toggleSidebarButton.addEventListener('click', toggleNav);

let collapsed = document.querySelector(".collapsed");
let statesBar = document.querySelector(".states-bar");
let closeMenuButton = document.querySelector(".close");
let tableContent = document.querySelector('.overlay');
// function to open statistics menu
function openMenu() {
  collapsed.classList.add('hide');
  collapsed.setAttribute('aria-expanded', "true");
  statesBar.classList.add('open');
  tableContent.classList.add('shown');
}
// function to close statistics menu
function closeMenu() {
  collapsed.classList.remove('hide');
  collapsed.setAttribute('aria-expanded', "false")
  statesBar.classList.remove('open');
  tableContent.classList.remove('shown');
}

collapsed.addEventListener('click', () => openMenu())
closeMenuButton.addEventListener('click', () => closeMenu())
window.addEventListener('click', (event) => {
  if (event.target == tableContent) {
    closeMenu()
  }
})


// Charts for the dashboard
const ctx = document.getElementById('tasksChart');
const tasksChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        'Example',
        'Approved',
        'Dummy',
        'Roaa'
      ],
      datasets: [{
        data: [48, 12, 10, 20],
        backgroundColor: [
          'rgb(176, 160, 110)',
          'rgb(148, 114, 161)',
          'rgb(234, 222, 187)',
          'rgb(150, 137, 105)'
        ],
        hoverOffset: 10,
        borderWidth: 0,
      }]
    },
    options: {
      plugins: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: 25,
            boxHeight: 25,
          },
        }
      }
    }
});
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

function months(config) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}
const monthChartCTX = document.getElementById('monthChart');
const labels = months({count: 6});
const monthChartData = {
  labels: labels,
  datasets: [{
    data: [65, 59, 80, 70, 56, 55],
    backgroundColor: [
      'rgb(176, 160, 110)',
      'rgb(176, 160, 110)',
      'rgb(176, 160, 110)',
      'rgb(176, 160, 110)',
      'rgb(176, 160, 110)',
      'rgb(176, 160, 110)',
    ],
  }],
  options: {
    plugins: {legend: {display: false}}
  }
};
const averageChartData = {
  labels: ['txt1', 'txt2', 'txt3'],
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: [
      'rgb(176, 160, 110)', 
      'rgb(176, 160, 110)',
      'rgb(176, 160, 110)',
      'rgb(176, 160, 110)',
      'rgb(176, 160, 110)',
      'rgb(176, 160, 110)',
    ],
  },{
    data:[10, 20, 30],
    backgroundColor: [
      'rgb(152, 139, 106)',
      'rgb(152, 139, 106)',
      'rgb(152, 139, 106)',
      'rgb(152, 139, 106)',
      'rgb(152, 139, 106)',
      'rgb(152, 139, 106)',
    ],
  }],
  options: {
    plugins: {legend: {display: false}}
  }
};

const monthChart = new Chart(monthChartCTX, {
    type: 'bar',
    labels: labels, 
    data: monthChartData,
    options: {
      borderSkipped: true,
      plugins: {legend: {display: false}},
      scales: {
        y: { grid: {drawOnChartArea: false, drawBorder: false, borderWidth: 0, display: false}, ticks: {display: false} },
        x: { grid: {drawOnChartArea: false, drawBorder: false, borderWidth: 0, display: false,} },
      }
    }
})

const horizontalChart = document.getElementById('horizontalChart');
const horiChart = new Chart(horizontalChart, {
  type: 'bar',
  labels: labels, 
  data: averageChartData,
  options: {
    indexAxis: 'y',
    borderSkipped: true,
    plugins: {legend: {display: false}},
    scales: {
      y: { grid: {drawOnChartArea: false, drawBorder: false, borderWidth: 0, display: false,} },
      x: { grid: {drawOnChartArea: false, drawBorder: false, borderWidth: 0, display: false,} },
    }
  }
})
