class HomeController {
  index(req, res) {
    res.json({
      tudocerto: true,
    });
  }
}

export default new HomeController();
