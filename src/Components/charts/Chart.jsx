import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Brush } from 'recharts';

// Sample data for chart
const data = [
  { name: "Jan", uv: 400, pv: 2400 },
  { name: "Feb", uv: 300, pv: 1398 },
  { name: "Mar", uv: 200, pv: 9800 },
  { name: "Apr", uv: 278, pv: 3908 },
  { name: "May", uv: 189, pv: 4800 },
  { name: "Jun", uv: 239, pv: 3800 },
];

// Gradient fill for the lines
const renderGradient = () => (
  <defs>
    <linearGradient id="uvGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.8} />
      <stop offset="100%" stopColor="#28a745" stopOpacity={0.8} />
    </linearGradient>
    <linearGradient id="pvGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8} />
      <stop offset="100%" stopColor="#007bff" stopOpacity={0.8} />
    </linearGradient>
  </defs>
);

// Custom Tooltip
const CustomTooltip = ({ payload, label }) => {
  if (!payload[0]) return null;
  return (
    <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '10px', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <p><strong>{label}</strong></p>
      <p><strong>UV:</strong> {payload[0].value}</p>
      <p><strong>PV:</strong> {payload[1].value}</p>
    </div>
  );
};

const Chart = () => (
  <ResponsiveContainer className="!w-full" height={350}>
    <LineChart data={data}>
      {/* Gradient Definition */}
      {renderGradient()}
      
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{ fill: '#666' }} />
      <YAxis tick={{ fill: '#666' }} />
      <Tooltip content={<CustomTooltip />} />
      <Legend verticalAlign="top" height={36} iconSize={20} />
      <ReferenceLine y={0} stroke="#000" strokeDasharray="3 3" />

      {/* Lines with Gradient */}
      <Line type="monotone" dataKey="uv" stroke="url(#uvGradient)" strokeWidth={3} activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="pv" stroke="url(#pvGradient)" strokeWidth={3} />

      <Brush dataKey="name" height={30} stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
