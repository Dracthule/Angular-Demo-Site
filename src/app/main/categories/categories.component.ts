import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor () { 
    
    $(".filter-button").click(function() {
      var value = $(this).attr("data-filter");

      if (value == "all") {
        //$('.filter').removeClass('hidden');
        $(".filter").show("1000");
      } else {
        // $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        // $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter")
          .not("." + value)
          .hide("3000");
        $(".filter")
          .filter("." + value)
          .show("3000");
      }
    });

    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");
  }

  ngOnInit() {
  }

}
