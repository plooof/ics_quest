export default function hello(_req, res) {
  res.status(200).json({ text: 'Hello' })
}
