const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const { ctrlWrapper } = require("../../utils");

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.put(
  "/:id",
  validateBody(schemas.addSchema),
  isValidId,
  ctrlWrapper(ctrl.updateContactById)
);

router.patch("/:id/favorite", isValidId, ctrlWrapper(ctrl.updateStatusContact));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.deleteContactBiId));

module.exports = router;
