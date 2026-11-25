export default function handler(req, res) {

  const {
    account_number,
    order_id,
    new_address
  } = req.body;

  return res.status(200).json({
    success: true,
    account_number,
    order_id,
    new_address,
    message: "Address updated successfully"
  });
}