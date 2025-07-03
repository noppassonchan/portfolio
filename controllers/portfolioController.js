// ข้อมูลจำลอง (mock data)
let portfolioData = [];

export const getPortfolio = (req, res) => {
  console.log('📥 GET request received');
  res.json({ message: 'GET successful', data: portfolioData });
};

export const postPortfolio = (req, res) => {
  const data = req.body;
  console.log('📥 POST data:', data);
  portfolioData.push(data);
  res.status(201).json({ message: 'POST successful', received: data });
};
