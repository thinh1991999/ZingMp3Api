const express = require("express");
const router = express.Router();

const ZingController = require("../../controllers/ZingController");

// getSong
router.get("/song", ZingController.getSong);

// getDetailPlaylist
router.get("/detailplaylist", ZingController.getDetailPlaylist);

// getHome
router.get("/home", ZingController.getHome);

// getTop100
router.get("/top100", ZingController.getTop100);

// getChartHome
router.get("/charthome", ZingController.getChartHome);

// getNewReleaseChart
router.get("/newreleasechart", ZingController.getNewReleaseChart);
router.get("/weekChart", ZingController.getWeekChart);

// getInfoSong
router.get("/infosong", ZingController.getInfo);

// getArtist
router.get("/artist", ZingController.getArtist);

// getLyric
router.get("/lyric", ZingController.getLyric);

// search
router.get("/search", ZingController.search);

// getListMV
router.get("/listmv", ZingController.getListMV);

// getCategoryMV
router.get("/categorymv", ZingController.getCategoryMV);

// getVideo
router.get("/video", ZingController.getVideo);

// getRadio
router.get("/radio", ZingController.getRadio);

// getNewFeeds
router.get("/newFeeds", ZingController.getNewFeeds);

// getType
router.get("/typeHome", ZingController.getTypeHome);
router.get("/typeDetail", ZingController.getTypeDetail);

// getEvent
router.get("/event", ZingController.getEvent);
router.get("/eventInfo", ZingController.getEventInfo);

module.exports = router;
