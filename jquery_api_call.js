ajax({
    url: "https://data.muni.org/resource/6sdz-r9ba.json",
    type: "GET",
    data: {
      "$limit" : 5000,
	  "business_postal_code" : 99507
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});