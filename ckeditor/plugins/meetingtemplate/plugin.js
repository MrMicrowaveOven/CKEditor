var days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"];

CKEDITOR.plugins.add( 'meetingtemplate', {
    icons: 'meetingtemplate',
    init: function( editor ) {
        editor.addCommand( 'addMeetingTemplate', {
            exec: function( editor ) {
                var now = new Date();

                var dayOfWeek = days[now.getDay()];
                var month = months[now.getMonth()];
                var dayOfMonth = now.getDate();
                var year = now.getFullYear();
                var ampm = now.getHours() > 12 ? "PM" : "AM";
                var militaryHour = now.getHours();
                var hour;
                if (militaryHour === 0) {
                  hour = 12;
                } else if (militaryHour < 12) {
                  hour = militaryHour;
                } else {
                  hour = militaryHour - 12;
                }
                var minutesInteger = now.getMinutes();
                var minute;
                  if (minutesInteger > 9) {
                    minute = minutesInteger;
                  } else {
                    minute = "0" + minutesInteger;
                  }

                var timeOfDay = hour + ":" + minute + ampm;

                editor.insertHtml(
                    "Meeting Notes- " + dayOfWeek + " " + month + "-"
                      + dayOfMonth + "-" + year + "  Directors Meeting<br><br>"
                      + "Location: La Palma, CA<br>"
                      + "Time: " +  timeOfDay + " PT "
                        + dayOfWeek + " "
                        + month + " "
                        + dayOfMonth + " "
                        + year + "<br>"
                      + "Attending: <br>"
                      + "Zooming: <br>"
                      + "Absent:<br><br>"
                  );
            }
        });
        editor.ui.addButton( 'MeetingTemplate', {
            label: 'Meeting Template',
            command: 'addMeetingTemplate',
            toolbar: 'about'
        });
    }
});
