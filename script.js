if (typeof Temporal === 'undefined') {
  document.getElementById('result').innerText = 'This feature requires the Temporal API, which is not supported in your browser.';
} else {
  let timeZones = Temporal.TimeZone.getAvailableTimeZones();
  timeZones.sort();
  let sourceSelect = document.getElementById('sourceTimezone');
  let targetSelect = document.getElementById('targetTimezone');
  timeZones.forEach(tz => {
    let option = document.createElement('option');
    option.value = tz;
    option.text = tz;
    sourceSelect.appendChild(option);
    targetSelect.appendChild(option);
  });
  document.getElementById('convertButton').addEventListener('click', function() {
    let inputTimeString = document.getElementById('inputTime').value;
    let sourceTimezone = document.getElementById('sourceTimezone').value;
    let targetTimezone = document.getElementById('targetTimezone').value;
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(inputTimeString)) {
      document.getElementById('result').innerText = 'Please enter a valid ISO date and time string (YYYY-MM-DDTHH:mm:ss).';
      return;
    }
    try {
      let sourceZonedDateTime = Temporal.ZonedDateTime.from(inputTimeString, { timeZone: sourceTimezone });
      let instant = sourceZonedDateTime.toInstant();
      let targetZonedDateTime = instant.toZonedDateTime({ timeZone: targetTimezone });
      let formatter = new Intl.DateFormat('en', {
        timeZone: targetTimezone,
        dateStyle: 'short',
        timeStyle: 'medium'
      });
      let formattedTime = formatter.format(new Date(instant.epochSeconds * 1000 + instant.epochMilliseconds));
      let tzNameFormatter = new Intl.DateFormat('en', {
        timeZone: targetTimezone,
        timeZoneName: 'long'
      });
      let tzNameParts = tzNameFormatter.formatToParts(new Date(instant.epochSeconds * 1000 + instant.epochMilliseconds));
      let tzName = tzNameParts.find(part => part.type === 'timeZoneName').value;
      document.getElementById('result').innerText = formattedTime + ' in ' + tzName;
    } catch (error) {
      document.getElementById('result').innerText = 'Invalid input or timezone.';
    }
  });
}
