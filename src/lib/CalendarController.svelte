<script lang="ts">
  import Calendar from '$lib/Calendar/Calendar.svelte';
  import dayjs from 'dayjs';
  import type { Day, Item } from '$lib/Calendar/Calendar';

  const WednesdayDateCode = 3;
  var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let headers: string[] = [];
  let now = new Date();
  let year = now.getFullYear(); //	this is the month & year displayed
  let month = now.getMonth();
  /* let eventText = 'Click an item or date'; */

  var days: Day[] = []; //	The days to display in each box

  /* function randInt(max: number): number { */
  /*   return Math.floor(Math.random() * max) + 1; */
  /* } */

  //	The Calendar Component just displays stuff in a row & column. It has no knowledge of dates.
  //	The items[] below are placed (by you) in a specified row & column of the calendar.
  //	You need to call findRowCol() to calc the row/col based on each items start date. Each date box has a Date() property.
  //	And, if an item overlaps rows, then you need to add a 2nd item on the subsequent row.

  var items: Item[] = [];

  function initMonthItems() {
    const startOfMonth = dayjs().startOf('month');
    const endOfMonth = dayjs().endOf('month');
    // make an array with all dates in the month being displayed
    let dates: Date[] = [];
    for (let d = startOfMonth; d.isBefore(endOfMonth); d = d.add(1, 'day')) {
      const date = d.toDate();
      if (date.getDay() === WednesdayDateCode) {
        dates.push(date);
      }
    }

    /* let d1 = new Date(y, m, randInt(7) + 7); */

    /* items = [ */
    /* 	{ */
    /* 		title: '11:00 Task Early in month', */
    /* 		className: 'task--primary', */
    /* 		date: new Date(y, m, randInt(6)), */
    /* 		len: randInt(4) + 1 */
    /* 	}, */
    /* 	{ title: '7:30 Wk 2 tasks', className: 'task--warning', date: d1, len: randInt(4) + 2 }, */
    /* 	{ */
    /* 		title: 'Overlapping Stuff (isBottom:true)', */
    /* 		date: d1, */
    /* 		className: 'task--info', */
    /* 		len: 4, */
    /* 		isBottom: true */
    /* 	}, */
    /* 	{ */
    /* 		title: '10:00 More Stuff to do', */
    /* 		date: new Date(y, m, randInt(7) + 14), */
    /* 		className: 'task--info', */
    /* 		len: randInt(4) + 1, */
    /* 		detailHeader: 'Difficult', */
    /* 		detailContent: 'But not especially so' */
    /* 	}, */
    /* 	{ */
    /* 		title: 'All day task', */
    /* 		date: new Date(y, m, randInt(7) + 21), */
    /* 		className: 'task--danger', */
    /* 		len: 1, */
    /* 		vlen: 2 */
    /* 	} */
    /* ]; */

    dates.forEach((d) => {
      items.push({
        title: '6:30pm - 7:30pm',
        date: d,
        className: 'task--primary',
        len: 1,
        isBottom: true
        /* vlen: 2 */
      });
    });

    //This is where you calc the row/col to put each dated item
    for (let i of items) {
      let rc = findRowCol(i.date);
      if (rc == null) {
        console.log('didn`t find date for ', i);
        console.log(i.date);
        console.log(days);
        i.startCol = i.startRow = 0;
      } else {
        i.startCol = rc.col;
        i.startRow = rc.row;
      }
    }
  }

  $: month, year, initContent();

  // choose what date/day gets displayed in each date box.
  function initContent() {
    headers = dayNames;
    initMonth();
    initMonthItems();
  }

  function initMonth() {
    days = [];
    let monthAbbrev = monthNames[month].slice(0, 3);
    let nextMonthAbbrev = monthNames[(month + 1) % 12].slice(0, 3);
    //	find the last Monday of the previous month
    var firstDay = new Date(year, month, 1).getDay();
    //console.log('fd='+firstDay+' '+dayNames[firstDay]);
    var daysInThisMonth = new Date(year, month + 1, 0).getDate();
    var daysInLastMonth = new Date(year, month, 0).getDate();
    var prevMonth = month == 0 ? 11 : month - 1;

    //	show the days before the start of this month (disabled) - always less than 7
    for (let i = daysInLastMonth - firstDay; i < daysInLastMonth; i++) {
      let d = new Date(prevMonth == 11 ? year - 1 : year, prevMonth, i + 1);
      days.push({ name: '' + (i + 1), enabled: false, date: d });
    }
    //	show the days in this month (enabled) - always 28 - 31
    for (let i = 0; i < daysInThisMonth; i++) {
      let d = new Date(year, month, i + 1);
      if (i == 0) days.push({ name: monthAbbrev + ' ' + (i + 1), enabled: true, date: d });
      else days.push({ name: '' + (i + 1), enabled: true, date: d });
      //console.log('i='+i+'  dt is '+d+' date() is '+d.getDate());
    }
    //	show any days to fill up the last row (disabled) - always less than 7
    for (let i = 0; days.length % 7; i++) {
      let d = new Date(month == 11 ? year + 1 : year, (month + 1) % 12, i + 1);
      if (i == 0) days.push({ name: nextMonthAbbrev + ' ' + (i + 1), enabled: false, date: d });
      else days.push({ name: '' + (i + 1), enabled: false, date: d });
    }
  }

  function findRowCol(dt: Date | undefined) {
    for (let i = 0; i < days.length; i++) {
      let d = days[i].date;
      if (dt?.getFullYear() === d?.getFullYear() && d?.getMonth() === dt?.getMonth() && d?.getDate() === dt?.getDate())
        return { row: Math.floor(i / 7) + 2, col: (i % 7) + 1 };
    }
    return null;
  }

  /* function itemClick(e: Item) { */
  /* 	eventText = 'itemClick ' + JSON.stringify(e) + ' localtime=' + e?.date?.toString(); */
  /* } */
  /* function dayClick(e: Day) { */
  /* 	eventText = 'onDayClick ' + JSON.stringify(e) + ' localtime=' + e?.date?.toString(); */
  /* } */
  /* function headerClick(e: string) { */
  /* 	eventText = 'onHheaderClick ' + JSON.stringify(e); */
  /* } */
  function nextMonth() {
    month++;
    if (month == 12) {
      year++;
      month = 0;
    }
  }
  function prevMonth() {
    if (month == 0) {
      month = 11;
      year--;
    } else {
      month--;
    }
  }
</script>

<div class="overflow-hidden rounded-lg bg-white">
  <div class="border border-b-secondary-300 bg-secondary-50 py-3 text-center text-secondary-500">
    <header class="m-0 text-lg font-token">
      <button
        class="border-1 cursor-pointer bg-secondary-50 p-1 text-secondary-400 outline-0 hover:text-secondary-500"
        on:click={() => prevMonth()}>&lt;</button
      >
      {monthNames[month]}
      {year}

      <button
        class="border-1 cursor-pointer bg-secondary-50 p-1 text-secondary-400 outline-0 hover:text-secondary-500"
        on:click={() => nextMonth()}>&gt;</button
      >
    </header>
    <!-- {eventText} -->
  </div>

  <Calendar {headers} {days} {items} />
</div>
