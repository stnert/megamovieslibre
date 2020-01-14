
/* GET Sobre */
exports.sobreController = function(req, res) {
      res.render('sobre', {
        title:'Sobre'
      });
};

/* GET Instalar */
exports.appsController = function(req, res) {
      res.render('apps', {
        title:'Instalar MegaMoviesLibre'
      });
};


/* GET Uploader */
exports.uploaderController = function(req, res) {
      res.render('uploader', {
        title:'Uploader de Imagem'
      });
};

/* GET Privacidade */
exports.privacyController = function(req, res) {
      res.render('privacy', {
        title:'Política de Privacidade'
      });
};

/* GET Termos */
exports.tosController = function(req, res) {
      res.render('tos', {
        title:'Termos de Uso'
      });
};

/* GET FAQ */
exports.faqController = function(req, res) {
      res.render('faq', {
        title:'Perguntas Frequentes - FAQ'
      });
};

/* GET DMCA */
exports.dmcaController = function(req, res) {
      res.render('dmca', {
        title:'DMCA'
      });
};

/* GET Press */
exports.pressController = function(req, res) {
      res.render('press', {
        title:'Na Mídia'
      });
};
