import React, { useState } from "react";
 
 
function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const getMonthDays = (year, month) => {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const days = [];
  
      for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
        days.push(new Date(day));
      }
  
      return days;
    };
  
    const handleDateClick = (date) => {
      setSelectedDate(date);
      // Добавьте свою логику обработки выбора даты
    };
  
    const renderCalendar = () => {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth();
  
      const monthDays = getMonthDays(year, month);
    }

     return ( 
        <>
            <div className="calendar">
            <h2>{new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {monthDays.map((day, index) => (
              <tr key={index}>
                <td onClick={() => handleDateClick(day)}>{day.getDate()}</td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
        </>
      );
}

export default Calendar;