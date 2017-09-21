class MediaList extends Polymer.Element {
  static get is() {
    return 'media-list';
  }
  static get properties() {
    return {
      allData: {
        type: Array,
        notify: true,
        value: function() {
          return []
        },
      },
      genreList: {
        type: Array,
        notify: true,
        value: function() {
          return []
        },
      },

      selected: {
        type: String,
        value: ""
      }
    };
  }

  filterBySelGenre(e) {

    if (!e || e == "") {
      // set filter to null to disable filtering
      return;
    } else {
      // return a filter function for the current search string
      e = e.toLowerCase();
      return function(item) {

        var first = item["genre"];
        first = first.toLowerCase();

        return (first.indexOf(e) != -1);
      };
    }


  }

  genSel() {
    var currGenre = this.$.mediaGenreSelect.value;
    this.selected = currGenre;
  }
  getMediaInfo(item) {
    return item.thumbnail[0]
  }

  checkMetaData(item) {
    var movies = [];
    var tv = [];
    var games = [];

    var template = item.template

    if (template == 'movie') {
      if (item.classification) movies.push(item.classification);
      if (item.duration_minute) movies.push(item.duration_minute + " mins");
      if (item.genre) movies.push(item.genre);
      return movies.join(' | ');
    }

    if (template == 'tv_series') {
      if (item.classification) tv.push(item.classification);
      if (item.duration_minute) tv.push(item.duration_minute + " mins");
      if (item.genre) tv.push(item.genre);
      return tv.join(' | ');
    }

    if (template == 'game') {
      if (item.genre) games.push(item.genre);
      return games
    }
  }

};

customElements.define(MediaList.is, MediaList);
