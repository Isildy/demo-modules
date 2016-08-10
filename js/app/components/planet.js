define('components/planet', [

    'jquery'

], function (

    $

) {

    function Planet (data, $el) {

        this.model = data;

        this.$el = $el;

        this.tpl = {

            name : this.$el.find('[data-name]'),

            distance : this.$el.find('[data-distance-from-sun]'),

            timesAround : this.$el.find('[data-times-around-sun]')

        };

        this.model.timesAround  = 0;

       // this.updateTimesAround(3);

        this.render();
    }

    Planet.prototype = {

        render : function () {

            this.tpl.name.text(this.model.name);

            this.tpl.distance.text(this.model.distance);

            this.tpl.timesAround.text(this.model.timesAround.toFixed(2));

        },



        updateTimesAround : function (period) {
          var timesAround =  period / this.model.year;
          this.model.timesAround  =  this.model.timesAround + timesAround;
            console.log(this.model.name + this.model.timesAround );
        }

    };

    return Planet;

});