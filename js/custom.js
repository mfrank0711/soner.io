var chip1 = {
  tag: "mysql/postgresql",
  id: 0
};
var chip2 = {
  tag: "mssql",
  id: 1
};
var chip3 = {
  tag: "nosql",
  id: 2
}
var chip4 = {
  tag: "mariadb",
  id: 3
};
var chip5 = {
  tag: 'datawarehouse',
  id: 4
};
var chip6 = {
  tag: 'elasticache',
  id: 5
};

var chips = [chip1, chip2, chip3, chip4, chip5, chip6];
var transition_time = 300;




$(document).ready(function() {
  var chips_converted = {};
  
  $.each(chips, function(key, value) {
    chips_converted[value["tag"]] = null;
  });
  
  
  $('.chips').material_chip({
    data: chips,
    autocompleteOptions: {
      limit: Infinity,
      minLength: 1,
      data: chips_converted
    }
  });
});

$('.chips').on('chip.delete', function(e, chip) {
  if (chip["tag"] == chip1["tag"]) {
    $(".mysql").fadeOut(transition_time);
  } else if (chip["tag"] == chip2["tag"]) {
    $(".mssql").fadeOut(transition_time);
  } else if (chip["tag"] == chip3["tag"]) {
    $(".nosql").fadeOut(transition_time);
  } else if (chip["tag"] == chip4["tag"]) {
    $(".datawarehouse").fadeOut(transition_time);
  } else if (chip["tag"] == chip5["tag"]) {
    $(".elasticache").fadeOut(transition_time);
  }
});

$('.chips').on('chip.add', function(e, chip) {
if (chip["tag"] == chip1["tag"]) {
    $(".mysql").fadeIn(transition_time);
  } else if (chip["tag"] == chip2["tag"]) {
    $(".mssql").fadeIn(transition_time);
  } else if (chip["tag"] == chip3["tag"]) {
    $(".nosql").fadeIn(transition_time);
  } else if (chip["tag"] == chip4["tag"]) {
    $(".datawarehouse").fadeIn(transition_time);
  } else if (chip["tag"] == chip5["tag"]) {
    $(".elasticache").fadeIn(transition_time);
  }  
});
