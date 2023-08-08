const checkDirector = (req, res, next) => {
    if (req.body.director) {
      next();
    } else {
      res.status(400).json({ error: "Director is required" });
    }
  };
  
  const checkTitle = (req, res, next) => {
    if (req.body.title) {
      next();
    } else {
      res.status(400).json({ error: "Title is required" });
    }
  };
  
  const checkBoolean = (req, res, next) => {
    const { has_watched } = req.body;
  
    if (
      has_watched == "true" ||
      has_watched == "false" ||
      has_watched == true ||
      has_watched == false ||
      has_watched == undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "has_watched must be a boolean value" });
    }
  };
  
  module.exports = { checkBoolean, checkTitle, checkDirector };