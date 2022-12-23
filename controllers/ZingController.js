const { ZingMp3 } = require("zingmp3-api-full");
const { zing } = require("zingmp3-api-next");

class ZingController {
  getSong(req, res) {
    console.log(ZingMp3);
    ZingMp3.getSong(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getDetailPlaylist(req, res) {
    ZingMp3.getDetailPlaylist(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getHome(req, res) {
    ZingMp3.getHome(req.query.page).then((data) => {
      res.json(data);
    });
  }

  getTop100(req, res) {
    ZingMp3.getTop100().then((data) => {
      res.json(data);
    });
  }

  getChartHome(req, res) {
    ZingMp3.getChartHome().then((data) => {
      res.json(data);
    });
  }

  getNewReleaseChart(req, res) {
    ZingMp3.getNewReleaseChart().then((data) => {
      res.json(data);
    });
  }

  getWeekChart(req, res) {
    zing
      .get_week_chart(req.query.id, req.query.week, req.query.year)
      .then((data) => res.json(data));
  }

  getInfo(req, res) {
    ZingMp3.getInfoSong(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getArtist(req, res) {
    ZingMp3.getArtist(req.query.name).then((data) => {
      res.json(data);
    });
  }

  getLyric(req, res) {
    ZingMp3.getLyric(req.query.id).then((data) => {
      res.json(data);
    });
  }

  search(req, res) {
    ZingMp3.search(req.query.keyword).then((data) => {
      res.json(data);
    });
  }

  getListMV(req, res) {
    ZingMp3.getListMV(req.query.id, req.query.page, req.query.count).then(
      (data) => {
        res.json(data);
      }
    );
  }

  getCategoryMV(req, res) {
    ZingMp3.getCategoryMV(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getVideo(req, res) {
    ZingMp3.getVideo(req.query.id).then((data) => {
      res.json(data);
    });
  }
  getRadio(req, res) {
    zing.get_radio().then((data) => res.json(data));
  }

  getNewFeeds(req, res) {
    zing
      .get_list_by_genre(req.query.id, req.query.page)
      .then((data) => res.json(data));
  }
  getTypeHome(req, res) {
    zing.get_hub_home().then((data) => res.json(data));
  }
  getTypeDetail(req, res) {
    zing.get_hub_detail(req.query.id).then((data) => res.json(data));
  }
  getEvent(req, res) {
    zing.get_events().then((data) => res.json(data));
  }
  getEventInfo(req, res) {
    zing.get_event_info(req.query.id).then((data) => res.json(data));
  }
}

module.exports = new ZingController();
