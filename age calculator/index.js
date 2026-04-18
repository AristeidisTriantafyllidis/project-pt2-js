 let date=DateTime.now().setZone("America/New_York").minus({ weeks: 1 }).endOf("day").toISO();

 console.log(date);