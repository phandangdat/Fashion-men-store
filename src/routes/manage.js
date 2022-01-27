const express = require('express');
const router = express.Router();

const manageController = require('../controllers/ManageController');

router.get('/create', manageController.create);
router.post('/store', manageController.store);
router.get('/stored', manageController.stored);
router.get('/:id/edit', manageController.edit);
router.put('/:id', manageController.update);
router.delete('/:id', manageController.delete);
router.get('/bill-manage', manageController.billManage);
router.delete('/bill/:id', manageController.deleteBill);
router.get('/bill-manage/order-packed', manageController.orderpPacked);
router.patch('/bill/:id/restore', manageController.restore);
router.delete('/bill/:id/force', manageController.forceDeleteBill);

module.exports = router;
