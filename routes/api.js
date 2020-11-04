const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({body}, res) => { console.log("post/api/transation")
  Transaction.create(body)
    .then(dbTransaction => { console.log("post/api/transation")
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/api/transaction/bulk", ({body}, res) => { console.log("post/api/bulk")
  Transaction.insertMany(body)
    .then(dbTransaction => { console.log("post/api/bulk")
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/transaction", (req, res) => { console.log("get/api/transation")
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => { console.log("get/api/transation")
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;