function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  

  
function createDaysOfMonth() {
  const dezFriday = [4, 11, 18, 25];
  const dezHoliday = [24, 25, 31];
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const recupera = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const days = dezDaysList[i];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    dayListItem.className = 'day'
    recupera.appendChild(dayListItem)

    function verifyHoliday() {
      for (let i = 0; i < dezHoliday.length; i += 1) {
        if(days === dezHoliday[i]) {
          dayListItem.classList.add('holiday')
        }
      }
    }

    function verifyFriday() {
      for (let i = 0; i < dezFriday.length; i += 1) {
        if(days === dezFriday[i]) {
          dayListItem.classList.add('friday')
        }
      }
    }
    verifyHoliday();
    verifyFriday();
  }

}

createDaysOfMonth();
